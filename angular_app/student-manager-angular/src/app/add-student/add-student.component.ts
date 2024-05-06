import { Component } from '@angular/core';
import { Student } from '../student';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpStudentService } from '../http-student.service';
import { delay } from 'rxjs';

@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent {
  student: Student = new Student(0, "", "");
  isValidationError = false;
  isSavedSuccessfuly = false;
  isProcessing = false;
  errorCode : string = "";

  constructor(private httpStudentService: HttpStudentService) { }

  setDefaultValues() {
    this.student.name = "Jan Testowy";
    this.student.email = "testowy@gmail.com";
  }

  save(form: NgForm) {
    this.errorCode = "";
    this.isSavedSuccessfuly = false;

    if (form.invalid) {
      this.isValidationError = true;
      return;
    }

    this.isProcessing = true;
    this.isValidationError = false;

    this.httpStudentService.postStudent(this.student)
      .pipe(delay(2000))
      .subscribe({
        next: _ => {
          this.isProcessing = false;
          this.isSavedSuccessfuly = true;

          this.student.email = "";
          this.student.name = "";

          setTimeout(() => {
            this.isSavedSuccessfuly = false;
          }, 5000);
        },
        error : errorMessage =>{
          this.isProcessing = false;

          this.errorCode = errorMessage.status;
          setTimeout(()=>{
            this.errorCode = "";
          },5000)
        }
      });


  }
}
