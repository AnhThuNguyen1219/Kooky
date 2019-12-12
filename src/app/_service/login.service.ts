import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../_entities/user';
const URL:string = "https://localhost:5001/api/users/check";
const URLCheck:string="https://localhost:5001/api/login";
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authentication':'Bearer '+ localStorage.getItem(URLCheck)
  })
}
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient) { }

  checkLogin(username, password)
  {
    return this.httpClient.get<User>(URL+username+password);
  }
}
