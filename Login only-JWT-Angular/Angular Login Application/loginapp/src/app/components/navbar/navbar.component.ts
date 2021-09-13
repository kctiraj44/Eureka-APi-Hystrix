import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public LoggedIn=false;

  constructor(private loginService :LoginService) { }

  ngOnInit(): void {
    this.LoggedIn=this.loginService.isLoggedIn()
  }

  logoutUser(){
    this.loginService.logout()
    location.reload()
  }

}
