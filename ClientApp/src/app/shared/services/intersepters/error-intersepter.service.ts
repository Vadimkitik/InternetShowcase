import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { SpinnerService } from 'src/app/spinner/spinner.service';

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
                  if(event instanceof HttpResponse) {
                    this.spinnerService.requestEnded();
                  }
                },
                (error: HttpErrorResponse) => {
                  this.spinnerService.resetSpinner();
                  this.toastrService.error(error.message);
                }
              ),
           );
  }
}
