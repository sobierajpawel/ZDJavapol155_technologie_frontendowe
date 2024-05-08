import { Component } from '@angular/core';
import { StudentDataComponent } from "./student-data/student-data.component";
import { TodoItemsComponent } from "./todo-items/todo-items.component";
import { ActionButtonsComponent } from "./action-buttons/action-buttons.component";
import { ActivatedRoute, Router } from '@angular/router';
import { HttpStudentService } from '../http-student.service';
import { Student } from '../student';
import { delay } from 'rxjs';
import { Location } from '@angular/common';
import { HttpTodoService } from '../http-todo.service';
import { TodoItem } from '../todo-item';


@Component({
    selector: 'app-details-student',
    standalone: true,
    templateUrl: './details-student.component.html',
    styleUrl: './details-student.component.css',
    imports: [StudentDataComponent, TodoItemsComponent, ActionButtonsComponent]
})
export class DetailsStudentComponent {
  student : Student = new Student(0,"","");
  todoItems : TodoItem[] = [];

  constructor(private activatedRoute : ActivatedRoute,
    private studentHttpService : HttpStudentService,
    private router : Router,
    private location : Location,
    private todoHttpService : HttpTodoService
  ){
      this.activatedRoute.params.subscribe(params=>{
        let id = params["id"];
        this.getStudentData(id);
        this.getTodoItems(id);
      })
  }

  getStudentData(id : number){
    this.studentHttpService.getStudentById(id)
    .pipe(delay(2000))
    .subscribe(data=>{
      this.student = data;
    })
  }

  getTodoItems(userId : number){
    this.todoHttpService.getTodoItemsByUserId(userId)
    .subscribe(data=>{
      this.todoItems = data;
    })
  }

  editStudent(){
    this.router.navigate(['/edit-student/',this.student.id]);
  }

  goBack(){
    this.location.back();
  }
}
