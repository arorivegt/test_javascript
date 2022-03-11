export class Movie {
  id: string;
  name: string;
  director: string;
  language: string;
  runningTime: number;
  releaseYear: number;

  constructor(
    id: string,
    name: string,
    director: string,
    language: string,
    runningTime: number,
    releaseYear: number
  ) {
    this.id = id;
    this.name = name;
    this.director = director;
    this.language = language;
    this.runningTime = runningTime;
    this.releaseYear = releaseYear;
  }
}
