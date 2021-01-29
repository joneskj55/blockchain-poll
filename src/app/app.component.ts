import {Component} from '@angular/core';
import {Poll} from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showForm = false;
  activePoll: Poll = null;

  polls: Poll[] = [
    {
      id: 1,
      question: 'Do you like dogs or cats?',
      thumbnail: 'assets/dig-dark.webp',
      results: [0, 5, 7],
      options: ['cats', 'dogs', 'none'],
      voted: true,
    },
    {
      id: 2,
      question: 'Best month?',
      thumbnail: 'assets/dig-dark.webp',
      results: [1, 5, 7],
      options: ['June', 'July', 'August'],
      voted: false,
    },
  ];

  setActivePoll(poll) {
    this.activePoll = null;

    setTimeout(() => {
      this.activePoll = poll;
    }, 100);
  }
}
