import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Food } from '../_entities/food';
const URL:string="https://localhost:5001/api/";
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class GerneService {

  constructor(private httpClient:HttpClient) { }
  getFoodByGerne(id)
  {
    this.httpClient.get<Food[]>(URL+ '/food/gerne/'+id)
  }
}
