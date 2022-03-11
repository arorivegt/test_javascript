import { Movie } from "./Movie";
import { incrementType } from "./Type";

export class ActionMovie extends Movie {
  explotion: number;
  guns: boolean;
  martialArts: boolean;

  constructor(
    id: string,
    name: string,
    director: string,
    language: string,
    runningTime: number,
    releaseYear: number,
    explotion: number,
    guns: boolean,
    martialArts: boolean
  ) {
    super(id, name, director, language, runningTime, releaseYear);
    this.explotion = explotion;
    this.guns = guns;
    this.martialArts = martialArts;
  }

  printActionMovie() {
    console.log(
      `#################### ${this.name} ####################
          Director: ${this.director}
          language: ${this.language}
          Time: ${this.runningTime}
          Year: ${this.releaseYear}
          About: ${this.explotion} 💣
          Guns: ${this.expectGuns()} 
          Arts: ${this.expectMartialArts()}
      `
    );
  }

  incrementExplosions() {
    this.explotion++;
    console.log(this.explotion);
  }

  expectGuns() {
    //¯_(ツ)_/¯
    return this.guns ? "🔫" : "🙅";
  }

  expectMartialArts() {
    return this.martialArts ? "🥷" : "🙅";
  }
}
