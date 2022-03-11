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
const TicTacToe_1 = require("./TicTacToe");
class Main {
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            let begin = new TicTacToe_1.TicTacToe();
            let opt = 0;
            do {
                opt = yield begin.startGame();
                console.clear();
                switch (opt) {
                    case 1: {
                        yield begin.playersSetup();
                        break;
                    }
                    case 2: {
                        begin.getPreviousHistoryGame();
                        break;
                    }
                }
            } while (opt != 0);
        });
    }
}
exports.Main = Main;
