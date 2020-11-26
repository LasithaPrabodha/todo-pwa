import { Component } from '@angular/core';

import {
  FormGroupDirective,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-todo-add',
  templateUrl: 'todo-add.component.html',
})
export class TodoAddComponent {
  minDate = new Date();

  newTodoForm = new FormGroup({
    description: new FormControl(null, [Validators.required]),
    date: new FormControl(null, [Validators.required]),
  });

  constructor() {}

  onAdd(form: FormGroupDirective) {
    if (this.newTodoForm.valid && this.newTodoForm.dirty) {
      const item: any = {
        completed: false,
        title: this.newTodoForm.value.description,
      };

      form.resetForm();
      this.newTodoForm.reset();
      this.newTodoForm.markAsUntouched();
    }
  }
}
