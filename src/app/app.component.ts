import { Component } from '@angular/core';
import faker from '@faker-js/faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomText = faker.lorem.sentence();
  entredText = '';
  onInput(value: string) {
    this.entredText = value;
  }
  compare(randomLetter: string, entredLetter: string) {
    return !entredLetter ? 'pending' : randomLetter === entredLetter ? 'correct' : 'incorrect';
  }

}
