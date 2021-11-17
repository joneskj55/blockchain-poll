export interface Poll {
  id: number; // 12
  question: string; // Which days of the week do you like most?
  results: number[]; // [0, 0, 0, 0, 4, 5, 7, 3]
  options: string[]; // ["Mon", "Tue", "Wed" ....]
  thumbnail: string; // https://image.png
  voted: boolean;
}

export interface Voter {
  id: string; // random hash
  voted: number[]; // [12]
}
