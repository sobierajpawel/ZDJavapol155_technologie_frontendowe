import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class HttpStudentService {

  constructor(private httpClient : HttpClient) { }

  getStudents(){
    return this.httpClient.get<Student[]>("https://jsonplaceholder.typicode.com/users");
  }
}
