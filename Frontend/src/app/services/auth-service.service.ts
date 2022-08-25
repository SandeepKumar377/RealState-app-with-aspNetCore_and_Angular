import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from "../../environments/environment";
import { UserLogin } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

baseURL=environment.baseURL;
constructor(private http: HttpClient) { }

  public authUser(user: UserLogin):Observable<UserLogin>{
    return this.http.post<UserLogin>(this.baseURL+'/Account/Login', user);    
  }

}
