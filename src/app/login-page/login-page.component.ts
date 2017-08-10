import { Component, OnInit } from '@angular/core';
import {LoginServiceService} from '../login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent implements OnInit {
   
  password_class:any;
  constructor(private _loginService:LoginServiceService,public router: Router) { }

  ngOnInit() {
        
  }

  change_class(){
    this.password_class = 'none'
  }

  login(username, password){
    this._loginService.login(username,password).subscribe(data => {
    if(data['status'] == "success"){
        console.log('login API success');
        this.router.navigate(['home']);
    }
      else{
        console.log('login API failed');
        this.password_class = 'password';
      }
        
    }, e => {
         console.log(e);
         this.password_class = 'password';
    });
    // if(this._loginService.login(username,password)['status']=='success'){
    //    this.router.navigate(['home']);
    // }else{
    //   this.password_class = 'password';
    // }

  }

}
