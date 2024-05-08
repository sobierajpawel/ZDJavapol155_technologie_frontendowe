import { Component, Input } from '@angular/core';
import { TodoItem } from '../../todo-item';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-items',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-items.component.html',
  styleUrl: './todo-items.component.css'
})
export class TodoItemsComponent {
  @Input() todoItems : TodoItem[] = [];
}
