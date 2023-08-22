import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  kilobyte = 0;
  enterText = '';
  outputText = '';

  onInput = (event: Event) => {
    const value = parseFloat((<HTMLInputElement>event.target).value);
    this.kilobyte = value;
  };

  headerInput = (event: Event) => {
    const value = parseFloat((<HTMLInputElement>event.target).value);
    this.enterText = '';
  };

  bodyInput = (event: Event) => {
    const value = parseFloat((<HTMLInputElement>event.target).value);
    this.enterText = '';
  };

  onButton() {
    this.outputText = this.enterText;
    return alert('OK pressed');
  }
}
