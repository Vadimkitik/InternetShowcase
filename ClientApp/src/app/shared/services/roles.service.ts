import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable  } from 'rxjs';

import { environment } from 'src/environments/environment';
import { UserWithRoles } from '../models/userWithRoles.model';
import { UserRoles } from '../models/userRoles.model';

@Injectable()
export class RolesService {

    private url = environment.apiUrl + 'roles';

    constructor(private http: HttpClient) {}
    
    public GetUserWithRoles(userId: string): Observable<UserWithRoles>{
        return this.http.get(this.url + `/${userId}`);
    }

    public GetAllRoles(): Observable<any>{
        return this.http.get(this.url);
    }

    public EditUserRoles(userRoles: UserRoles): Observable<any>{
        return this.http.put(this.url, userRoles);
    }
}