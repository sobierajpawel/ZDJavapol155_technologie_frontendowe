import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-action-buttons',
  standalone: true,
  imports: [],
  templateUrl: './action-buttons.component.html',
  styleUrl: './action-buttons.component.css'
})
export class ActionButtonsComponent {
  @Input() button1_name : string = "";
  @Input() button2_name : string = "";

  @Output() btn1_click_emitter = new EventEmitter();
  @Output() btn2_click_emitter = new EventEmitter();

  btn1Click(){
    this.btn1_click_emitter.emit();
  }

  btn2Click(){
    this.btn2_click_emitter.emit();
  }
}
