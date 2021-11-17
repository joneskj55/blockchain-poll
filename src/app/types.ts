export interface Poll extends PollForm {
  id: number; // 12
  results: number[]; // [0, 0, 0, 0, 4, 5, 7, 3]
  voted: boolean;
}

export interface PollForm {
  question: string; // Which days of the week do you like most?
  options: string[]; // ["Mon", "Tue", "Wed" ....]
  thumbnail: string; // https://image.png
}

export interface PollVote {
  id: number;
  vote: number;
}

export interface Voter {
  id: string; // random hash
  voted: number[]; // [12]
}
