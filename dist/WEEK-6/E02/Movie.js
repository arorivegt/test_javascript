"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movie = void 0;
class Movie {
    constructor(id, name, director, language, runningTime, releaseYear) {
        this.id = id;
        this.name = name;
        this.director = director;
        this.language = language;
        this.runningTime = runningTime;
        this.releaseYear = releaseYear;
    }
}
exports.Movie = Movie;
