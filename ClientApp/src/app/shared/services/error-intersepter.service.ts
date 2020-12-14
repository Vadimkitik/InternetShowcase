import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ErrorIntersepterService implements HttpInterceptor {

  constructor(
    private toastrService: ToastrService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    return next.handle(request).pipe(
      retry(0),
      catchError((err) => {
        let message = "";
        if(err.status === 401) {
          message = "Unauthorized";
        }
        else if (err.status === 403) {
          message = "Forbidden";
        }
        else if (err.status === 404) {
          message = "Not Found";
        }
        else if (err.status === 400) {
          message = "Bad Request";
        }
        else if (err.status === 500) {
          message = "Internal Server Error ";
        }
        else {
          message = "Unexpected error";
        }
        this.toastrService.error(`${message} ${err.status}`);
        return throwError(err);
      })
    )
  }
}
