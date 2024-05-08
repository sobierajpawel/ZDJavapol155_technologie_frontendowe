import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TodoItem } from './todo-item';

@Injectable({
  providedIn: 'root'
})
export class HttpTodoService {

  constructor(private httpClient : HttpClient) { }

  getTodoItemsByUserId(userId : number){
    return this.httpClient.get<TodoItem[]>("https://jsonplaceholder.typicode.com/users/"+userId+"/todos")
  }
}
