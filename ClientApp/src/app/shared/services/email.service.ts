import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable  } from 'rxjs';

import { environment } from 'src/environments/environment';
import { FeedbackForm } from '../models/feedbackForm.model';

@Injectable()
export class EmailService {

    private sendYourselfUrl = environment.apiUrl + 'SendEmails/SendYourselfEmail';

    constructor(private http: HttpClient) {}
    
    public SendYourselfEmail(feedbackForm: FeedbackForm): Observable<any>{
        return this.http.post(this.sendYourselfUrl, feedbackForm);
    }
}