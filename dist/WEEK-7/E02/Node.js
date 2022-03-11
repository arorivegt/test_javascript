"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Node = void 0;
class Node {
    constructor(data) {
        this.next = null;
        this.data = data;
    }
    get getData() {
        return this.data;
    }
}
exports.Node = Node;
