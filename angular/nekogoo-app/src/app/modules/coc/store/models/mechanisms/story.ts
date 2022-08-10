import { Moment } from './moment';

export class Story {
  id: string;
  title: string;
  description: string;
  moments: Moment[];

  constructor(id: string, title: string) {
    this.id = id;
    this.title = title;
    this.description = '';
    this.moments = [];
  }
}
