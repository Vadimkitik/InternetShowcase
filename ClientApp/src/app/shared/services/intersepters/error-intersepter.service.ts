import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { SpinnerService } from 'src/app/shared/components/spinner/spinner.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorIntersepterService implements HttpInterceptor {

  constructor(
    private toastrService: ToastrService,
    private spinnerService: SpinnerService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spinnerService.requestStarted();
    return this.handler(next, request);
  }

  handler(next, request) {
    return next.handle(request)
      .pipe(
        retry(0),
        tap(
          (event) => {
            if (event instanceof HttpResponse) {
              this.spinnerService.requestEnded();
            }
          },
          (error: HttpErrorResponse) => {
            this.spinnerService.resetSpinner();
            var messageError = "";
            if (error.status === 0 || error.status === 500) {
              messageError = "Internal Server Error"
              this.toastrService.error(messageError);
            }
            else if (error.error != null) {
              if (typeof error.error === 'string') {
                this.toastrService.error(error.error);
              }
              else if (error.error[0].description != null) {
                error.error.forEach(element => {
                  messageError += element.description + " ";
                });
                this.toastrService.error(messageError);
              }
            }
            else {
              this.toastrService.error(error.message);
            }
          }
        ),
      );
  }
}
