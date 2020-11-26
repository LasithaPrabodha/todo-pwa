import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IToDoItem } from './models/IToDoItem';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  items: Observable<IToDoItem[]>;
  constructor(private firestore: AngularFirestore) {
    this.items = firestore
      .collection<IToDoItem>('todos')
      .snapshotChanges()
      .pipe(
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
    this.firestore
      .collection('todos')
      .doc(id)
      .set({ checked }, { merge: true });
  }
}
