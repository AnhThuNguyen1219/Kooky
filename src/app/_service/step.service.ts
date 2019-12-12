import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Step } from '../_entities/food';
import { Observable } from 'rxjs';
const URL:string = "https://localhost:5001/api/food/"

@Injectable({
  providedIn: 'root'
})
export class StepService {

  constructor( private httpClient:HttpClient) { }
  getStepByFoodId(id):Observable<Step[]>
  {
    return this.httpClient.get<Step[]>(URL+id+'/step');
  }
}
