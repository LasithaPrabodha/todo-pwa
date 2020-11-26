import { Component } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IToDoItem } from './models/IToDoItem';
import { TodoItemsService } from './todo-items.service';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  items: Observable<IToDoItem[]>;
  collection: AngularFirestoreCollection;

  constructor(private firestore: AngularFirestore) {
    this.collection = this.firestore.collection<IToDoItem>('todos');
    this.items = this.collection.snapshotChanges().pipe(
      map((actions: any) => {
        return actions.map((a) => {
          const data = a.payload.doc.data() as IToDoItem;
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  update(id, { checked }) {
    this.collection.doc(id).set({ checked }, { merge: true });
  }
}
