import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  kilobyte = 0;
  onInput = (event: Event) => {
    const value = parseFloat((<HTMLInputElement>event.target).value);
    this.kilobyte = value;
  };
}
