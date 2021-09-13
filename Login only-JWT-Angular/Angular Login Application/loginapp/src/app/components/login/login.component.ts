import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials={
    username:'',
    password:''
  }

  constructor(
private loginservice :LoginService

  ) { }

  ngOnInit(): void {
  }

  onsubmit(){
    console.log("form is submmited");
    if((this.credentials.username != '' && this.credentials.password != '') && (this.credentials.username != null && this.credentials.password != null)){
 
      console.log("We have the value");

      //generate the token
      this.loginservice.generateToken(this.credentials).subscribe(
        (response:any)=>{
          //success
          console.log(response.token);
          this.loginservice.loginUser(response.token)
          window.location.href="/dashboard"
        },
        (error)=>{
          console.log(error);

        }                                   
      )

    }
    else{
      console.log("Fields are empty");
    }
  }

}
