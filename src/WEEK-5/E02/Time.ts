export class Time {
  hour: number;
  minute: number;
  second: number;

  constructor(hour: number, minute: number, second: number) {
    this.hour = hour;
    this.minute = minute;
    this.second = second;
  }

  getInSeconds(): number{
      return (this.hour * 3600) + (this.minute * 60) + (this.second);
  }

  printTime(){
      console.log(`==============================`);
      console.log(`Hours: ${this.hour}`);
      console.log(`Minutes: ${this.minute}`);
      console.log(`Seconds: ${this.second}`);
      console.log(`==============================\n`);
  }
}
