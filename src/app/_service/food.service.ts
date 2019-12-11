import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Food } from '../_entities/food';
const URL:string="https://localhost:5001/api/food/";
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private httpClient:HttpClient) { }
  getFoods():Observable<Food[]>
  {
    return this.httpClient.get<Food[]>(URL);
  }
}
