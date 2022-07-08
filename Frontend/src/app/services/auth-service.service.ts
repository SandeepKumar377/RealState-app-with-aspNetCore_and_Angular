import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

constructor() { }
  authUser(token: any){
    let UserArray =[];
    if(localStorage.getItem('Users')){
      UserArray= JSON.parse(localStorage.getItem('Users')!);
    }
    return UserArray.find((p: { email: string; password: string; })=>p.email===token.email && p.password===token.password);
  }
}
