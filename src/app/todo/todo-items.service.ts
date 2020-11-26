import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class TodoItemsService {
  constructor(private httpClient: HttpClient) {}

  getTodos() {
    return this.httpClient.get('assets/todos.json');
  }
}
