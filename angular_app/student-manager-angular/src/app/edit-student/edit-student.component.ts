import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpStudentService } from '../http-student.service';
import { Student } from '../student';
import { FormsModule } from '@angular/forms';
import { delay } from 'rxjs';

@Component({
  selector: 'app-edit-student',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-student.component.html',
  styleUrl: './edit-student.component.css'
})
export class EditStudentComponent {
  student : Student = new Student(0,"","");

  constructor(private activatedRoute : ActivatedRoute,
    private httpStudentService : HttpStudentService
  ){
    this.activatedRoute.params.subscribe(param=>{
        let id = param["id"];
        this.httpStudentService.getStudentById(id)
        .pipe(delay(2000))
        .subscribe(data=>{
          this.student = data;
        });
    });
  }
}
