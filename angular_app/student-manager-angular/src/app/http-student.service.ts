import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class HttpStudentService {
  private url : string = "https://jsonplaceholder.typicode.com/users";

  constructor(private httpClient : HttpClient) { }

  getStudentById(id : number){
    return this.httpClient.get<Student>(this.url + '/' + id);
  }

  getStudents(){
    return this.httpClient.get<Student[]>(this.url);
  }

  postStudent(student : Student){
    return this.httpClient.post(this.url, student);
  }
}
