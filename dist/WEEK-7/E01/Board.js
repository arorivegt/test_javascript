"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Board = void 0;
require("colorts/lib/string");
class Board {
    constructor(row, column) {
        this.row = row;
        this.column = column;
        this.dimension = [];
        this.avatarX = "🔥";
        this.avatarO = "🌊";
        this.initBoard(row, column);
    }
    initBoard(row, column) {
        for (let x = 0; x < row; x++) {
            let arrayY = [];
            for (let y = 0; y < column; y++) {
                arrayY.push(-1);
            }
            this.dimension.push(arrayY);
        }
    }
    copyValue(dimension) {
        this.dimension = [];
        for (let x = 0; x < dimension.length; x++) {
            let arrayY = [];
            for (let y = 0; y < dimension[x].length; y++) {
                arrayY.push(dimension[x][y]);
            }
            this.dimension.push(arrayY);
        }
    }
    clearBoard() {
        this.dimension = [];
        this.initBoard(this.row, this.column);
    }
    getBoadFriendly(namePLayerA, namePLayerB) {
        let head = "";
        head += '============================'.green + "\n";
        head += `   ${namePLayerA}: ${this.avatarX}\n`;
        head += `   ${namePLayerB}: ${this.avatarO}\n`;
        head += '============================'.green + "\n";
        let board = this.getBoard(this.dimension, this.row, this.column);
        console.log(head + board);
    }
    getBoard(board, row, column) {
        let result = '';
        let countCharacters = (column * 6) + (column);
        let count = 0;
        for (let x = 0; x < row; x++) {
            result += ` ${board[x]
                .slice(0, column)
                .map(e => { count++; return e === -1 ? count : e === 0 ? this.avatarX : this.avatarO; })
                .join("   |   ")}`;
            if ((x + 1) < row)
                result = result + `\n${"-".repeat(countCharacters)}\n`;
        }
        return `${result}\n\n`;
    }
    get getDimension() {
        return this.dimension;
    }
    get getAvatarX() {
        return this.avatarX;
    }
    get getAvatarO() {
        return this.avatarO;
    }
    setDimension(value, row, column) {
        this.dimension[row][column] = value;
    }
}
exports.Board = Board;
