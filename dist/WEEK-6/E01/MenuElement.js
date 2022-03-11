"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuElement = void 0;
class MenuElement {
    constructor(id, name, price, emoji) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.emoji = emoji;
    }
    printOption() {
        return `${this.name}.... ${this.price}`;
    }
}
exports.MenuElement = MenuElement;
