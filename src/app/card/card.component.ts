import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  enterText = '';
  outputText = '';

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
