import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
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
