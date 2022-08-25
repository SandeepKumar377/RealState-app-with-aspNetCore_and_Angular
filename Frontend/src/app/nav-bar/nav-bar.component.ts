import { AlertyfyService } from 'src/app/services/alertyfy.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  loggedInUser!:string;
  constructor(private alertyfy: AlertyfyService) { }

  ngOnInit() {
  }

  loggedIn(){
    this.loggedInUser = localStorage.getItem('userName')!;
    return this.loggedInUser;
  }
  onLogout(){
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    this.alertyfy.success("Logout successful!");
  }

}
