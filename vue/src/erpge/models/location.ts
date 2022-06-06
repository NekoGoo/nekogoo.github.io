import * as ENUM from '../flags/asset-enums';
import { Effect } from './engine-parts/effect';

class Location {
  id: string;
  shortName: string;
  longName: string;
  type: ENUM.LocationType;
  description: string;
  effects: Effect[];

  constructor(id: string, shortName: string, longName: string, type: ENUM.LocationType) {
    this.id = id;
    this.shortName = shortName;
    this.longName = longName;
    this.type = type;
    this.description = '';
    this.effects = [];
  }
}

export { Location };
