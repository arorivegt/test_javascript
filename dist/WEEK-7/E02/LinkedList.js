"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
const Node_1 = require("./Node");
class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }
    get size() {
        return this.length;
    }
    // First In First Out (FIFO)
    add(value) {
        if (this.head == null) {
            this.head = new Node_1.Node(value);
        }
        else {
            let node = this.head;
            while (node.next !== null) {
                node = node.next;
            }
            node.next = new Node_1.Node(value);
        }
        this.length++;
    }
    remove() {
        if (this.head !== null) {
            this.head = this.head.next;
            this.length--;
        }
    }
    // Last In First Out (LIFO)
    addFirst(value) {
        if (this.head === null) {
            this.add(value);
        }
        else {
            let node = new Node_1.Node(value);
            node.next = this.head;
            this.head = node;
            this.length++;
        }
    }
    removeLast() {
        if (this.head !== null) {
            let node = this.head;
            let previous = node;
            while (node.next !== null) {
                previous = node;
                node = node.next;
            }
            previous.next = null;
            this.length--;
        }
    }
    toString() {
        if (this.head === null)
            return '[]';
        let representation = '';
        let node = this.head;
        while (node.next !== null) {
            representation = `${representation}${JSON.stringify(node.getData)},`;
            node = node.next;
        }
        representation = `${representation}${JSON.stringify(node.getData)}`;
        representation = `[${representation}]`;
        return representation;
    }
}
exports.LinkedList = LinkedList;
