import { Movie } from "./Movie";
import { incrementType } from './Type';

export class HorrorMovie extends Movie {
  jumpScares:number;
  ghost: boolean;
  visions: boolean;

  constructor(
    id: string,
    name: string,
    director: string,
    language: string,
    runningTime: number,
    releaseYear: number,
    jumpScares: number,
    ghost: boolean,
    visions: boolean
  ) {
    super(id, name, director, language, runningTime, releaseYear);
    this.jumpScares = jumpScares;
    this.ghost = ghost;
    this.visions = visions;
  }

  printHorrorMovie () {
    console.log(
      `#################### ${this.name} ####################
        Director: ${this.director}
        language: ${this.language}
        Time: ${this.runningTime}
        Year: ${this.releaseYear}
        About: ${this.jumpScares} jump scares
        Ghosts: ${this.expectGhosts()} 
        Visions: ${this.expectVisions()}
    `
    );
  }

  incrementJumpscares(){
      this.jumpScares++;
      console.log(this.jumpScares);
      
  }

  expectGhosts() {
    return this.ghost ? "👻" : "🙅";
  }

  expectVisions() {
    return this.visions ? "🔮" : "🙅";
  }
}
