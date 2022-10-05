import { Moment } from './moment';

export interface Story {
  id: string;
  title: string;
  description: string;
  moments: Moment[];
}
