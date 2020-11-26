import { ApplicationRef, Inject, Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { concat, interval } from 'rxjs';
import { first } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class LogUpdateService {
  constructor(
    private appRef: ApplicationRef,
    private updates: SwUpdate,
    private snackBar: MatSnackBar,
    @Inject(DOCUMENT) private document
  ) {
    updates.isEnabled && this.start();
  }

  private start() {
    this.updates.available.subscribe((event) => {
      console.group('available');
      console.log('current version is: ', event.current);
      console.log('available version is: ', event.available);
      console.groupEnd();

      const ref = this.snackBar.open('New version is available', 'reload');

      ref.onAction().subscribe(() => {
        this.updates
          .activateUpdate()
          .then(() => this.document.location.reload())
          .catch((err) => {});
      });
    });

    // Allow the app to stabilize first, before starting polling for this.updates with `interval()`.
    const appIsStable$ = this.appRef.isStable.pipe(
      first((isStable) => isStable === true)
    );
    const everySixHours$ = interval(6 * 60 * 60 * 1000);
    const everySixHoursOnceAppIsStable$ = concat(appIsStable$, everySixHours$);
    everySixHoursOnceAppIsStable$.subscribe(() =>
      this.updates.checkForUpdate().catch((error) => {})
    );

    this.updates.unrecoverable.subscribe((event) => {
      console.log(
        'An error occurred that we cannot recover from:',
        event.reason
      );
    });
  }
}
