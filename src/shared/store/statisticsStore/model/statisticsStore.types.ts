export interface Result {
  id: number;
  firstName: string;
  lastName: string;
  country: string;
  age: number;
  avatarURL: string;
  correctAnswers: number;
  incorrectAnswers: number;
}

export interface StatisticsStore {
  results: Result[];
  addResult: (result: Result) => void;
}
