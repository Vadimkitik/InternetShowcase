import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ErrorIntersepterService implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    return next.handle(request).pipe(
      retry(1),
      catchError((err) => {
        if(err.status === 401) {
          alert("401")
        }
        else if (err.status === 404) {
          alert("404")
        }
        else if (err.status === 400) {
          alert("400")
        }
        else {
          alert("Some Error")
        }
        return throwError(err);
      })
    )
  }
}
