import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showForm = false;

  polls = [
    {
      question: "Do you like dogs or cats?",
      image: "assets/dig-dark.webp",
      votes: [0, 5, 7],
      voted: true,
    },
    {
      question: "Best month?",
      image: "assets/dig-dark.webp",
      votes: [1, 5, 7],
      voted: false,
    },
  ];
}
