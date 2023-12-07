import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  styles: [
    `app-no-encapsulation, app-emulated-encapsulation, app-shadow-dom-encapsulation {
      display: block; max-width: 500px; padding: 5px; margin: 5px 0;
    }`,
    'app-no-encapsulation { border: solid 2px red; }',
    'app-emulated-encapsulation { border: solid 2px green; }',
    'app-shadow-dom-encapsulation { border: solid 2px blue; }',
  ],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'test-an15-1';
  haha = "testaaa";
  fontColor = "#c00";
  sayHelloId = "hha";
  sayMessage() {
    console.log(this.title)
    // alert(this.message);
  }
  message = "I'm read only!";
  canEdit = false;
  onEditClick() {
    this.canEdit = !this.canEdit;
    if (this.canEdit) {
      this.message = 'You can edit me!';
    } else {
      this.message = "I'm read only!";
    }
  }
}
