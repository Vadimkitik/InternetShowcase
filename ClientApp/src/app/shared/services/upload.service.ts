import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../models/user.model';

@Injectable()
export class UploadService {

    private url = 'http://localhost:5000/api/upload';
    //private url = "api/upload";
     
     constructor(private http: HttpClient) {}
 
     UploadFile(formData: FormData) : Observable<any> {
         return this.http.post(this.url, formData, { reportProgress: true, observe: 'events'});        
     }
}