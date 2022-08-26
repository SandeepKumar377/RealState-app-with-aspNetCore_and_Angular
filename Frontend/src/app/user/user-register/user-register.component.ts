import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserRegister } from 'src/app/model/user';
import { AlertyfyService } from 'src/app/services/alertyfy.service';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  registrationForm!: FormGroup;

  user!:UserRegister;

  userSubmitted!:boolean;

  constructor(
    private fb: FormBuilder,
    private authService: AuthServiceService,
    private alertyfy: AlertyfyService
  ) { }

  ngOnInit(): void {
    this.createRegisterationForm();
  }

  createRegisterationForm(){ 
    this.registrationForm= this.fb.group({
      userName: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(5)]],
      confirmPassword: [null, Validators.required],
      mobile: [null],
    },{Validators: this.passwordMatchingValidator})
  }

  get userName(){
    return this.registrationForm.get('userName') as FormControl;
  }
  get mobile(){
    return this.registrationForm.get('mobile') as FormControl;
  }
  get email(){
    return this.registrationForm.get('email') as FormControl;
  }
  get password(){
    return this.registrationForm.get('password') as FormControl;
  }
  get confirmPassword(){
    return this.registrationForm.get('confirmPassword') as FormControl;
  }

  passwordMatchingValidator(fg: FormGroup): Validators{
    return fg.get('password')!.value === fg.get('confirmPassword')!.value ? 'null': {notmatched: true};
    }
    onSubmit(){
      console.log(this.registrationForm.value);
      this.userSubmitted=true;
      if (this.registrationForm.valid) {        
        this.authService.registerUser(this.userData()).subscribe(()=>
        {
          this.onReset();
          this.alertyfy.success("Register successfully");
        });
      }
    }

    onReset(){
      this.userSubmitted=false;
      this.registrationForm.reset();
    }

    userData():UserRegister{
      return this.user={
        userName:this.userName.value,
        email:this.email.value,
        mobile:this.mobile.value,
        password:this.password.value,
        confirmPassword:this.confirmPassword.value
      }
    }
  }

