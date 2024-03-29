// TODO: transfer to GameContext method and remove this file
export class GameTime extends Date {
  id: string;
  minutes: number;
  hours: number;
  days: number;

  constructor() {
    super();
    this.id = Math.random().toString(16).slice(2);
    this.minutes = 0;
    this.hours = 0;
    this.days = 1;
  }

  // Handles changing the clock (currently no day counter)
  increment() {
    this.minutes += 1;
    if (this.minutes >= 60) {
      this.minutes -= 60;
      this.hours += 1;
    }
    if (this.hours >= 24) {
      this.hours -= 24;
      this.days += 1;
    }
  }
}
