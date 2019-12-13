import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../_entities/user';
import { Login } from '../_entities/login';
const URL:string = "https://localhost:5001/api/users/check";
const URLCheck:string="https://localhost:5001/api/login";
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
}
var token = localStorage.getItem('token');
console.log("token "+token);
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient) { }

  login(log:Login){
    this.httpClient.post(URL,JSON.stringify(log),httpOptions).subscribe(
      data => {
        localStorage.setItem('token', data['token']);
      },
    );
  }
}
