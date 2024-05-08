import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-student-data',
  standalone: true,
  imports: [],
  templateUrl: './student-data.component.html',
  styleUrl: './student-data.component.css'
})
export class StudentDataComponent {
  @Input() fullName : string = "";
  @Input() id : number = 0;
  @Input() email : string = "";
}
