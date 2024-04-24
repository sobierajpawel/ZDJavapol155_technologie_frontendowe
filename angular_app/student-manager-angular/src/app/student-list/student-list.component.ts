import { Component } from '@angular/core';
import { Student } from '../student';
import { HttpStudentService } from '../http-student.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {
  isTableVisible : boolean = true;
  students : Student[] = [
    new Student(1, "Jan Kowalski", "kowalski@gmail.com"),
    new Student(2, "Adam Nowak", "nowak@onet.pl"),
    new Student(3, "Joanna Nowak", "joanna@o2.pl"),
    new Student(27, "Karolina Kowalska", "kowalska@gmail.com"),
    new Student(5, "Ola Olowska", "ola@gmail.com"),
    new Student(61, "Piotr Testowy", "testowy@gmail.com")
  ];

  constructor(private httpStudentService : HttpStudentService){
    this.httpStudentService.getStudents().subscribe(data=>{
      this.students = data;
    });
  }

  toogleDisplay(){
    this.isTableVisible = !this.isTableVisible;
  }
}
