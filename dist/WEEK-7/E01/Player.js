"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
class Player {
    constructor(name, nickname) {
        this.name = name;
        this.nickname = nickname;
    }
    get getNickname() {
        return this.nickname;
    }
    set setNickname(nickname) {
        this.nickname = nickname;
    }
}
exports.Player = Player;
