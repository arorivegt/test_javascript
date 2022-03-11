"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
const Input_1 = require("./Input");
const uuid_1 = require("uuid");
const ActionMovie_1 = require("./ActionMovie");
const HorrorMovie_1 = require("./HorrorMovie");
class Main {
    constructor() {
        this.movies = [];
        this.count = 0;
        this.choices = [
            { option: 1, message: "Add Action Movie" },
            { option: 2, message: "Add Horror Movie" },
            { option: 3, message: "Show Action Movies" },
            { option: 4, message: "Show Horror Movies" },
            { option: 5, message: "Increment Explosions In Movie" },
            { option: 6, message: "Increment Jump Scares In Movie" },
            { option: 0, message: "Exit" },
        ];
        this.formAction = [
            { name: "name", message: "Name" },
            { name: "director", message: "Director" },
            { name: "language", message: "Language" },
            { name: "runningTime", message: "Running Time(min)" },
            { name: "releaseYear", message: "Year" },
            { name: "explotion", message: "Explosions Count" },
        ];
        this.formHorror = [
            { name: "name", message: "Name" },
            { name: "director", message: "Director" },
            { name: "language", message: "Language" },
            { name: "runningTime", message: "Running Time(min)" },
            { name: "releaseYear", message: "Year" },
            { name: "jumpScares", message: "JumpScares Scares Count" },
        ];
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            let opt = 0;
            do {
                opt = (yield Input_1.Input.getSelect("Blockbuster", this.choices)).data;
                console.clear();
                switch (opt) {
                    case 1: {
                        let { name, director, language, runningTime, releaseYear, explotion, } = (yield Input_1.Input.getForm("Fill the following", this.formAction)).data;
                        let gun = yield (yield Input_1.Input.getConfirm("Are there guns in this movie?")).data;
                        let art = yield (yield Input_1.Input.getConfirm("Are there Martial Arts in this movie?")).data;
                        this.movies.push(new ActionMovie_1.ActionMovie((0, uuid_1.v4)(), name, director, language, (runningTime = 0), releaseYear, explotion, gun, art));
                        break;
                    }
                    case 2: {
                        let { name, director, language, runningTime, releaseYear, jumpScares, } = (yield Input_1.Input.getForm("Fill the following", this.formHorror)).data;
                        let ghost = yield (yield Input_1.Input.getConfirm("Are there Ghosts in this movie?")).data;
                        let vision = yield (yield Input_1.Input.getConfirm("Are there Visions in this movie?")).data;
                        this.movies.push(new HorrorMovie_1.HorrorMovie((0, uuid_1.v4)(), name, director, language, (runningTime = 0), releaseYear, jumpScares, ghost, vision));
                        break;
                    }
                    case 3: {
                        this.movies
                            .filter((e) => e instanceof ActionMovie_1.ActionMovie)
                            .forEach((e) => {
                            if (e instanceof ActionMovie_1.ActionMovie)
                                e.printActionMovie();
                        });
                        break;
                    }
                    case 4: {
                        this.movies
                            .filter((e) => e instanceof HorrorMovie_1.HorrorMovie)
                            .forEach((e) => {
                            if (e instanceof HorrorMovie_1.HorrorMovie)
                                e.printHorrorMovie();
                        });
                        break;
                    }
                    case 5: {
                        let selectByIdChoices = [];
                        let actions = [];
                        this.movies
                            .filter((e) => e instanceof ActionMovie_1.ActionMovie)
                            .forEach((e) => {
                            if (e instanceof ActionMovie_1.ActionMovie) {
                                selectByIdChoices.push({ name: e.id, message: e.name });
                                actions.push(e);
                            }
                        });
                        let uid = yield (yield Input_1.Input.getSelectById("Select Action Movie", selectByIdChoices)).data;
                        actions
                            .filter((e) => e.id === uid)
                            .forEach((e) => e.incrementExplosions());
                        break;
                    }
                    case 6: {
                        let selectByIdChoices = [];
                        let horrors = [];
                        this.movies
                            .filter((e) => e instanceof HorrorMovie_1.HorrorMovie)
                            .forEach((e) => {
                            if (e instanceof HorrorMovie_1.HorrorMovie) {
                                selectByIdChoices.push({ name: e.id, message: e.name });
                                horrors.push(e);
                            }
                        });
                        let uid = yield (yield Input_1.Input.getSelectById("Select Horror Movie", selectByIdChoices)).data;
                        horrors
                            .filter((e) => e.id === uid)
                            .forEach((e) => e.incrementJumpscares());
                        break;
                    }
                }
            } while (opt != 0);
        });
    }
}
exports.Main = Main;
