import { Router } from '@angular/router';
import { FormGroup, NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { AlertyfyService } from 'src/app/services/alertyfy.service';
import { UserLogin } from 'src/app/model/user';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(
    private authService: AuthServiceService,
    private alertyfy : AlertyfyService,
    private router : Router
  ) { }

  ngOnInit(): void {
  }


  onLogin(loginForm: NgForm){
    console.log(loginForm.value);
    this.authService.authUser(loginForm.value).subscribe(
      (responce: UserLogin)=>{
        const user=responce;
        if (user) {
          console.log(user);
          localStorage.setItem('token', user.token);          
          localStorage.setItem('userName', user.userName);
          this.router.navigate(['/']);
          this.alertyfy.success('Login Successful!!!');
        }
      },
      (error)=>{
        console.log(error);
        this.alertyfy.error(error.error);
      }
      );
  }

}
