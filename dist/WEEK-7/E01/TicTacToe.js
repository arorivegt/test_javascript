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
exports.TicTacToe = void 0;
const Board_1 = require("./Board");
const Input_1 = require("./Input");
const Player_1 = require("./Player");
class TicTacToe {
    constructor() {
        this.history = [];
        this.endMessage = "";
        this.players = [];
        this.ROW = 3;
        this.COLUMN = 3;
        this.countOfTurns = 9;
        this.board = new Board_1.Board(this.ROW, this.COLUMN);
    }
    checkEndOfGameByWinning() {
        let player = this.howWon();
        if (player != -1) {
            this.messageWinner(player);
            this.addHistory();
            this.displayGame(this.players);
            return true;
        }
        return false;
    }
    howWon() {
        let player1 = 0;
        let player2 = 1;
        let nobodyWin = -1;
        let combinationOfAWinner = [[[0, 0], [1, 0], [2, 0]],
            [[0, 0], [0, 1], [0, 2]],
            [[0, 0], [1, 1], [2, 2]],
            [[0, 1], [1, 1], [2, 1]],
            [[0, 2], [1, 2], [2, 2]],
            [[1, 0], [1, 1], [1, 2]],
            [[2, 0], [2, 1], [2, 2]],
            [[0, 2], [1, 1], [2, 0]]];
        for (const xs of combinationOfAWinner) {
            let line = xs.reduce((total, current) => total + this.board.getDimension[current[0]][current[1]], "");
            if (line === "000")
                return player1;
            else if (line === "111")
                return player2;
        }
        return nobodyWin;
    }
    messageWinner(howWon) {
        this.endMessage += '\n\n🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉\n\n';
        if (howWon === 0)
            this.endMessage += `    🏆🏆 ${this.players[howWon].name}${this.board.getAvatarX} won 🏆🏆\n\n`;
        else if (howWon === 1)
            this.endMessage += `   🏆🏆 ${this.players[howWon].name}${this.board.getAvatarO} won 🏆🏆\n\n`;
        this.endMessage += ('🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉\n\n');
    }
    checkEnOfGameByTie() {
        if (this.countOfTurns <= 0) {
            this.displayGame(this.players);
            this.endMessage = `\n\n😲😲😲 Nobody Win 😲😲😲\n\n`;
            this.addHistory();
            console.log(this.endMessage);
            return true;
        }
        return false;
    }
    move(turn, cell, user) {
        let valueBoard = -1;
        let wathCell = {
            1: [0, 0],
            2: [0, 1],
            3: [0, 2],
            4: [1, 0],
            5: [1, 1],
            6: [1, 2],
            7: [2, 0],
            8: [2, 1],
            9: [2, 2]
        };
        if (Number(cell) < 1 || Number(cell) > 9 || !Number(cell)) {
            this.endMessage = `\n\n🚩🚩🚩🚩 You chose a wrong cell 🚩🚩🚩🚩\n\n`;
            return false;
        }
        valueBoard = this.board.getDimension[wathCell[cell][0]][wathCell[cell][1]];
        if (valueBoard != -1) {
            this.endMessage = `\n\n😲😲😲 That cell was already selected 😲😲😲\n\n`;
            return false;
        }
        this.board.setDimension(user, wathCell[cell][0], wathCell[cell][1]);
        this.countOfTurns--;
        return true;
    }
    addHistory() {
        let newBoard = new Board_1.Board(this.ROW, this.COLUMN);
        newBoard.copyValue(this.board.getDimension);
        let newPLayers = [];
        newPLayers.push(this.players[0]);
        newPLayers.push(this.players[1]);
        this.history.push({ players: newPLayers, board: newBoard, message: this.endMessage });
    }
    displayGame(players) {
        console.clear();
        this.board.getBoadFriendly(players[0].name, players[1].name);
        console.log(this.endMessage);
        this.endMessage = "";
    }
    playersSetup() {
        return __awaiter(this, void 0, void 0, function* () {
            let informationOfPlayers = (yield Input_1.Input.getForm("Fill the following", this.getPlayerForm())).data;
            let turnOfPlayer = 0;
            this.clearBoard();
            this.players.push(new Player_1.Player(informationOfPlayers.player1, informationOfPlayers.player1));
            this.players.push(new Player_1.Player(informationOfPlayers.player2, informationOfPlayers.player2));
            do {
                this.displayGame(this.players);
                let cell = (yield Input_1.Input.getInput(`${this.players[turnOfPlayer].name} choose your cell `)).data;
                if (this.move(this.players[turnOfPlayer], Number(cell), turnOfPlayer)) {
                    if (this.checkEndOfGameByWinning())
                        break;
                    this.addHistory();
                    turnOfPlayer = turnOfPlayer === 0 ? 1 : 0;
                }
            } while (!this.checkEnOfGameByTie());
        });
    }
    getPreviousHistoryGame() {
        console.log("\n\n🕹️🕹️🕹️🕹️🕹️🕹️🕹️🕹️🕹️ PREVIOUS GAME 🕹️🕹️🕹️🕹️🕹️🕹️🕹️🕹️🕹️🕹️\n\n");
        this.history.forEach(e => {
            e.board.getBoadFriendly(e.players[0].name, e.players[1].name);
            console.log(e.message);
        });
    }
    clearBoard() {
        this.board.clearBoard();
        this.players = [];
        this.endMessage = "";
        this.countOfTurns = 9;
        this.history = [];
        console.log();
    }
    getPlayerForm() {
        return [
            { name: "player1", message: "What is the name PLayer 1?", },
            { name: "player2", message: "What is the name PLayer 2?", }
        ];
    }
    startGame() {
        return __awaiter(this, void 0, void 0, function* () {
            let choices = [
                { option: 1, message: "Start Game" },
                { option: 2, message: "Show last game" },
                { option: 0, message: "Exit" }
            ];
            return (yield Input_1.Input.getSelect("Tic-Tac-Toe", choices)).data;
        });
    }
}
exports.TicTacToe = TicTacToe;
