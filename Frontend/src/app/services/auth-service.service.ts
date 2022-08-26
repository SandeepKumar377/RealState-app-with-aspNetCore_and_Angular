import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from "../../environments/environment";
import { UserLogin, UserRegister } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

baseURL=environment.baseURL;
constructor(private http: HttpClient) { }

  public authUser(user: UserLogin):Observable<UserLogin>{
    return this.http.post<UserLogin>(this.baseURL+'/Account/Login', user);    
  }

  registerUser(user: UserRegister){
    return this.http.post<UserRegister>(this.baseURL+'/Account/Register', user)
  }

}
