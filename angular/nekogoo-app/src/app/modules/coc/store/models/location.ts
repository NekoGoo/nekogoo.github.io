import { Effect } from './engine-parts/effect';

export enum LocationType {
  Void,
  Camp,
  Zone,
  Area,
  Town,
  Shop,
}

export class Location {
  id: string;
  shortName: string;
  longName: string;
  type: LocationType;
  description: string;
  effects: Effect[];

  constructor(
    id: string,
    shortName: string,
    longName: string,
    type: LocationType,
  ) {
    this.id = id;
    this.shortName = shortName;
    this.longName = longName;
    this.type = type;
    this.description = '';
    this.effects = [];
  }
}
