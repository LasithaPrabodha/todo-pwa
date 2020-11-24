import { NgModule } from '@angular/core';

import { TodoComponent } from './todo.component';
import { TodoAddComponent } from './add/todo-add.component';
import { TodoRoutingModule } from './todo-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TodosPipe } from './todos.pipe';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';

@NgModule({
  imports: [
    CommonModule,
    TodoRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  declarations: [TodoComponent, TodosPipe, TodoAddComponent],
})
export class TodoModule {}
