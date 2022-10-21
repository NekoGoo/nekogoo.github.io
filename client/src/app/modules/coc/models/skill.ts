import { Attribute } from './engine-parts/attribute';
import { Effect } from './engine-parts/effect';

export enum SkillType {
  Unassigned,
  Ability,
  Spell,
  Weaponskill,
}

export class Skill {
  id: string;
  shortName: string;
  longName: string;
  type: SkillType;
  description: string;
  stats: Attribute[];
  effects: Effect[];

  constructor(
    id: string,
    shortName: string,
    longName: string,
    type: SkillType,
  ) {
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
