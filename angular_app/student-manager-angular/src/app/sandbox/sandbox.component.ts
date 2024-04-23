import { Component } from '@angular/core';

@Component({
  selector: 'app-sandbox',
  standalone: true,
  imports: [],
  templateUrl: './sandbox.component.html',
  styleUrl: './sandbox.component.css'
})
export class SandboxComponent {
  name = "Moja aplikacja StudentManagerAngular";
  isTextChanged = false;
  numer = 0;

  onClick(){
    if (this.isTextChanged == false){
      this.name = "Zmieniona nazwa";
    } else{
      this.name = "Moja aplikacja StudentManagerAngular";
    }
    
    this.isTextChanged = !this.isTextChanged;
  }

  onIncrement(){
    this.numer++;
  }
}
