import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginServiceService {
   
  constructor(private http:Http) {
    
   }
  login(username:string,password:string){


 
//var params = JSON.stringify({ user:{ first_name: 'Nifras', last_name: 'Ismail', email: 'nifrasismail@gmail.com', contact_number: '+94778990300', user_name: 'nifrasismail', password: 'sdkjnfnsdj'}});
let body = `username=`+username+`&password=`+password;
var headers = new Headers();
headers.append('Content-Type','application/x-www-form-urlencoded; charset=UTF-8'); 
headers.append('X-Requested-With','XMLHttpRequest');

return this.http.post('login',body,{ headers: headers })
  .map(res => {
    // If request fails, throw an Error that will be caught
    if(res.status < 200 || res.status >= 300) {
      throw new Error('This request has failed ' + res.status);
    } 
    // If everything went fine, return the response
    else {
      return res.json();
    }
  });
  }
}
