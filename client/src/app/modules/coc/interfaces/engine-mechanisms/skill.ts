export enum SkillType {
  Unassigned,
  Ability,
  Spell,
  Weaponskill,
}

export interface Skill {
  id: string;
  type: SkillType;
  shortName: string;
  longName: string;
  description: string;
  stats: string[]; // attributes
  effects: string[];
}
