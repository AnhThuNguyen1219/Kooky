import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { User } from '../_entities/user';
import {users} from '../_data/user-data';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  //Observable: kho chua
  getAllUsers(): Observable<User[]>{
    return of(users);
  }
  getUserById(id):Observable<User>
  {
    return of (users.find(x=>x.id==id));
  }
}
