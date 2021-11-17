import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showForm = false;

  polls = [
    {
      question: 'Do you like dogs or cats?',
      image: '../../assets/dog.jpg',
      votes: [0, 5, 7],
      voted: true,
    },
    {
      question: 'Best month for summer holidays?',
      image: '../../assets/beach.jpg',
      votes: [1, 6, 4],
      voted: false,
    },
  ];
}
