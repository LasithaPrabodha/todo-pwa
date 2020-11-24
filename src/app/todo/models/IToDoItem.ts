import * as firebase from 'firebase';

export interface IToDoItem {
  checked: boolean;
  description: string;
  date: firebase.default.firestore.Timestamp;
}
