"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HorrorMovie = void 0;
const Movie_1 = require("./Movie");
class HorrorMovie extends Movie_1.Movie {
    constructor(id, name, director, language, runningTime, releaseYear, jumpScares, ghost, visions) {
        super(id, name, director, language, runningTime, releaseYear);
        this.jumpScares = jumpScares;
        this.ghost = ghost;
        this.visions = visions;
    }
    printHorrorMovie() {
        console.log(`#################### ${this.name} ####################
        Director: ${this.director}
        language: ${this.language}
        Time: ${this.runningTime}
        Year: ${this.releaseYear}
        About: ${this.jumpScares} jump scares
        Ghosts: ${this.expectGhosts()} 
        Visions: ${this.expectVisions()}
    `);
    }
    incrementJumpscares() {
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
exports.HorrorMovie = HorrorMovie;
