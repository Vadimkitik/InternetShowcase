import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class UploadService {

    private url = 'http://localhost:5000/api/';
    //private url = "api/upload";
     
     constructor(private http: HttpClient) {}
 
     UploadFile(formData: FormData) : Observable<any> {
         return this.http.post(this.url + "upload", formData, { reportProgress: true, observe: 'events'}).pipe(
            catchError(this.handleError));        
     }

     DeleteFile(imageUrl: string) : Observable<any> {
        return this.http.post(this.url + "delete", imageUrl, { reportProgress: true, observe: 'events'}).pipe(
           catchError(this.handleError));        
    }

     private handleError(error: HttpErrorResponse) {
        return throwError(error.message || "Server Error");
    }
}