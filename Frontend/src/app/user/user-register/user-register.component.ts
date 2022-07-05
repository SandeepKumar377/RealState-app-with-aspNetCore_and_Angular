import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  registrationForm!: FormGroup;

  user!:User;

  userSubmitted!:boolean;

  constructor(private fb: FormBuilder, private userService: UserServiceService) { }

  ngOnInit(): void {
    // this.registrationForm= new FormGroup({
    //   userName: new FormControl(null, Validators.required),
    //   mobile: new FormControl(null, [Validators.required, Validators.minLength(10)]),
    //   email: new FormControl(null, [Validators.required, Validators.email]),
    //   password: new FormControl(null, [Validators.required, Validators.minLength(5)]),
    //   confirmPassword: new FormControl(null, [Validators.required, Validators.minLength(5)])
    // });
    this.createRegisterationForm();
  }

  createRegisterationForm(){ 
    this.registrationForm= this.fb.group({
      userName: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(5)]],
      confirmPassword: [null, Validators.required],
      mobile: [null, [Validators.required, Validators.maxLength(10)]],
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
        // this.user=Object.assign(this.user, this.registrationForm.value);
        this.userService.addUser(this.userData());
        this.registrationForm.reset();
        this.userSubmitted=false;
      }
    }
    userData():User{
      return this.user={
        userName:this.userName.value,
        email:this.email.value,
        mobile:this.mobile.value,
        password:this.password.value,
      }
    }
  }

