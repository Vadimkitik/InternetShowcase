import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../../../environments/environment';

@Injectable()
export class UploadService {

    private url = environment.apiUrl + 'upload';
     
     constructor(private http: HttpClient) {}
 
     UploadFile(formData: FormData) : Observable<any> {
         return this.http.post(this.url, formData, { reportProgress: true, observe: 'events'}).pipe(
            catchError(this.handleError));        
     }
    // this.http.delete(this.url + '/' + id)
     DeleteFile(imageName: string) : Observable<any> {
        return this.http.delete(this.url + '/' + imageName).pipe(
           catchError(this.handleError));        
    }

     private handleError(error: HttpErrorResponse) {
        return throwError(error.message || "Server Error");
    }
}