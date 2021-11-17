import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Poll } from '../types';

@Injectable({
  providedIn: 'root'
})
export class PollService {

  constructor() { }

  getPolls(): Observable<Poll[]> {
    return of([
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
    ]).pipe(delay(2000));
  }

  vote(pollId: number, voteNumber: number) {
    console.log(pollId, voteNumber);
  }

  createPoll(question: string, thumbnail: string, options: string[]) {
    console.log(question, thumbnail, options)
  }
}
