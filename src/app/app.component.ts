import { Component } from '@angular/core';
import { Poll } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showForm = false;
  activePoll: Poll = null;

  polls: Poll[] = [
    {
      id: 1,
      question: 'Do you like dogs or cats?',
      thumbnail: '../../assets/dog.jpg',
      results: [0, 5, 7],
      options: ['Cats', 'Dogs', 'None'],
      voted: true,
    },
    {
      id: 2,
      question: 'Best month for summer holidays?',
      thumbnail: '../../assets/beach.jpg',
      results: [1, 6, 4],
      options: ['June', 'July', 'August'],
      voted: false,
    },
  ];

  setActivePoll(poll) {
    this.activePoll = null;

    setTimeout(() => {
      this.activePoll = poll;
    }, 100)
  }
}
