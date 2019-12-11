import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Student } from '../_entities/Student';
const URL:string = "https://dutstudentapi.azurewebsites.net/api/students/";
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(
    private httpClient:HttpClient

  ) { }
  getStudents():Observable<Student[]>
  {
      return this.httpClient.get<Student[]>(URL);
  }
  addNewStudent(student:Student):Observable<any>
  {
    return this.httpClient.post<any>(URL,student, httpOptions);
  }
  deleteStudent(id:number):Observable<any>
  {
    return this.httpClient.delete<any>(URL+id)
  }
}
