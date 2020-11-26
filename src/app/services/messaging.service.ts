import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { MatSnackBar } from '@angular/material/snack-bar';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MessagingService {
  constructor(
    private angularFireMessaging: AngularFireMessaging,
    private firestore: AngularFirestore,
    private snackBar: MatSnackBar
  ) {}

  requestPermission() {
    this.angularFireMessaging.requestToken
      .pipe(
        switchMap((token) =>
          this.firestore
            .doc('/users/lasitha')
            .set({ token, date: new Date() }, { merge: true })
        )
      )
      .subscribe(
        () => {},
        (err) => {
          console.error('Unable to get permission to notify.', err);
        }
      );
  }
  receiveMessage() {
    this.angularFireMessaging.messages.subscribe((payload: any) => {
      this.snackBar.open(payload.notification.body, 'Ok', {
        duration: 3000,
      });
    });
  }
}
