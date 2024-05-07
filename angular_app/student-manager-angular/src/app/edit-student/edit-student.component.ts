import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpStudentService } from '../http-student.service';
import { Student } from '../student';
import { FormsModule, NgForm } from '@angular/forms';
import { delay } from 'rxjs';

@Component({
  selector: 'app-edit-student',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-student.component.html',
  styleUrl: './edit-student.component.css'
})
export class EditStudentComponent {
  student: Student = new Student(0, "", "");
  copyStudent : Student = new Student(0,"","");
  isDataLoaded = false;
  isErrorOccured = false;
  isUploadedSuccessful = false;
  errorMessage : string = "";
  isValidationErrorOccured = false;

  constructor(private activatedRoute: ActivatedRoute,
    private httpStudentService: HttpStudentService
  ) {
    this.activatedRoute.params.subscribe(param => {
      let id = param["id"];
      this.httpStudentService.getStudentById(id)
        .pipe(delay(2000))
        .subscribe({
          next: data => {
            this.student = data;
            this.copyStudent = new Student(data.id, data.name, data.email);
            this.isDataLoaded = true;
          },
          error: _ => {
            this.isErrorOccured = true;
            this.errorMessage = "Nie udało się pobrać danych!"
          }
        });
    });
  }

  save(form : NgForm) {
    this.resetStatuses();

    if (form.invalid){
      this.isValidationErrorOccured = true;
      return;
    }

    if (this.isStudentUnchanged()){
      // użytkownik nie zmienił nic w danych
      this.isErrorOccured = true;
      this.errorMessage = "Nie dokonano żadnych zmian";
      return;
    }

    //
    this.httpStudentService.putStudent(this.student).subscribe({
      next: _ => {
        this.isUploadedSuccessful = true;
      },
      error: _ =>{
        this.isErrorOccured = true;
        this.errorMessage = "Nie udało się zaaktualizować studenta";
      }
    });
  }

  setPreviousValues(){
    this.resetStatuses();
    this.student.name = this.copyStudent.name;
    this.student.email = this.copyStudent.email;
  }

  private isStudentUnchanged(){
    return this.student.name.trim() === this.copyStudent.name.trim() 
      && this.student.email.trim() === this.copyStudent.email.trim();
  }

  private resetStatuses(){
    this.isValidationErrorOccured = false;
    this.isErrorOccured = false;
    this.isUploadedSuccessful = false;
    this.errorMessage = "";
  }
}
