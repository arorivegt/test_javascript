"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionMovie = void 0;
const Movie_1 = require("./Movie");
class ActionMovie extends Movie_1.Movie {
    constructor(id, name, director, language, runningTime, releaseYear, explotion, guns, martialArts) {
        super(id, name, director, language, runningTime, releaseYear);
        this.explotion = explotion;
        this.guns = guns;
        this.martialArts = martialArts;
    }
    printActionMovie() {
        console.log(`#################### ${this.name} ####################
          Director: ${this.director}
          language: ${this.language}
          Time: ${this.runningTime}
          Year: ${this.releaseYear}
          About: ${this.explotion} 💣
          Guns: ${this.expectGuns()} 
          Arts: ${this.expectMartialArts()}
      `);
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
exports.ActionMovie = ActionMovie;
