import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shell',
  template: `<img class="loading-indicator" src="assets/images/loading.gif" />`,
  styles: [
    `
      :host {
        width: 100%;
        display: block;
      }
      .loading-indicator {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 256px;
      }
    `,
  ],
})
export class AppShellComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
