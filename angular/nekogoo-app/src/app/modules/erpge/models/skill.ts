import * as ENUM from '../flags/asset-enums';
import { Attribute } from './engine-parts/attribute';
import { Effect } from './engine-parts/effect';

class Skill {
  id: string;
  shortName: string;
  longName: string;
  type: ENUM.SkillType;
  description: string;
  stats: Attribute[];
  effects: Effect[];

  constructor(id: string, shortName: string, longName: string, type: ENUM.SkillType) {
    this.id = id;
    this.shortName = shortName;
    this.longName = longName;
    this.type = type;
    this.description = '';
    this.stats = [];
    this.effects = [];

    // blind,chargeWeapon,whitefire,arouse,heal,might
  }
}

export { Skill };
