import { Component } from '@angular/core';
import { Student } from '../student';
import { HttpStudentService } from '../http-student.service';
import { CommonModule } from '@angular/common';
import { delay } from 'rxjs';
import { TextTransformPipe } from "../text-transform.pipe";
import { HighlightSearchPipe } from "../highlight-search.pipe";

@Component({
    selector: 'app-student-list',
    standalone: true,
    templateUrl: './student-list.component.html',
    styleUrl: './student-list.component.css',
    imports: [CommonModule, TextTransformPipe, HighlightSearchPipe]
})
export class StudentListComponent {
  isTableVisible: boolean = true;
  isDataLoaded = false;
  isErrorOccured = false;
  students: Student[] = [
    // new Student(1, "Jan Kowalski", "kowalski@gmail.com"),
    // new Student(2, "Adam Nowak", "nowak@onet.pl"),
    // new Student(3, "Joanna Nowak", "joanna@o2.pl"),
    // new Student(27, "Karolina Kowalska", "kowalska@gmail.com"),
    // new Student(5, "Ola Olowska", "ola@gmail.com"),
    // new Student(61, "Piotr Testowy", "testowy@gmail.com")
  ];
  filtersStudent : Student[] = [];

  constructor(private httpStudentService: HttpStudentService) {
    console.log("Przed wywołaniem httpStudentService");

    // Prosty model subscribe - obsługuje tylko pozytywną odpowiedź z serwera
    // this.httpStudentService.getStudents()
    // .pipe(delay(2000))
    // .subscribe(data=>{
    //   console.log("Wewnątrz httpStudentService");
    //   this.students = data;
    //   this.isDataLoaded = true;
    // });

    this.httpStudentService.getStudents()
      .pipe(delay(2000))
      .subscribe({
        next: data => {
          console.log("Wewnątrz httpStudentService");
          this.students = data;
          this.filtersStudent = data;
          this.isDataLoaded = true;
        },
        error: _ => {
          this.isErrorOccured = true;
          this.isDataLoaded = true;
        }
      });

    console.log("Po wywołaniu httpStudentService");
  }

  toogleDisplay() {
    this.isTableVisible = !this.isTableVisible;
  }

  search(phrase : string){
    console.log(phrase);
    this.students = this.filtersStudent.filter
    (x=>x.name.toLowerCase().includes(phrase.toLowerCase()) ||
      x.email.toLowerCase().includes(phrase.toLowerCase()));
  }
}
