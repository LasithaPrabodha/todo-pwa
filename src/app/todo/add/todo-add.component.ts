import { Component } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';

import {
  FormGroupDirective,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { IToDoItem } from '../models/IToDoItem';

@Component({
  selector: 'app-todo-add',
  templateUrl: 'todo-add.component.html',
})
export class TodoAddComponent {
  private toDoCollection: AngularFirestoreCollection<IToDoItem>;
  minDate = new Date();

  newTodoForm = new FormGroup({
    description: new FormControl(null, [Validators.required]),
  });

  constructor(firestore: AngularFirestore) {
    this.toDoCollection = firestore.collection<IToDoItem>('todos');
  }

  onAdd(form: FormGroupDirective) {
    if (this.newTodoForm.valid && this.newTodoForm.dirty) {
      const item: IToDoItem = {
        checked: false,
        description: this.newTodoForm.value.description,
      };

      this.toDoCollection.add(item);

      form.resetForm();
      this.newTodoForm.reset();
      this.newTodoForm.markAsUntouched();
    }
  }
}
