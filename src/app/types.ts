export interface Poll {
  id: number; // 12
  question: string; // Which day of week you like most?
  results: number[]; // [0, 0, 3, 8, 3]
  options: string[]; // ["Mon", Tue", Wed"]
  thumbnail: string; // https://image.png
}

export interface Voter {
  id: string; // 0xJ;FKDJSAKF
  voted: number[]; // [12]
}
