import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { AlertyfyService } from 'src/app/services/alertyfy.service';

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
    // console.log(loginForm.value);
    const token= this.authService.authUser(loginForm.value);
    if (token) {
      localStorage.setItem('token', token.email);
      this.alertyfy.success('Login Successful!');
      this.router.navigate(['/']);
    }
    else{      
      this.alertyfy.error('Login not Successful!');
    }
  }

}
