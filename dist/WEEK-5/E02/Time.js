"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Time = void 0;
class Time {
    constructor(hour, minute, second) {
        this.hour = hour;
        this.minute = minute;
        this.second = second;
    }
    getInSeconds() {
        return (this.hour * 3600) + (this.minute * 60) + (this.second);
    }
    printTime() {
        console.log(`==============================`);
        console.log(`Hours: ${this.hour}`);
        console.log(`Minutes: ${this.minute}`);
        console.log(`Seconds: ${this.second}`);
        console.log(`==============================\n`);
    }
}
exports.Time = Time;
