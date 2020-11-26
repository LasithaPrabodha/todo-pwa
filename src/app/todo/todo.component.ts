import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoItemsService } from './todo-items.service';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  items: Observable<any>;
  constructor(todoService: TodoItemsService) {
    this.items = todoService.getTodos();
  }
}
