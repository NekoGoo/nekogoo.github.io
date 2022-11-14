export const SkillTypes = {
  Unassigned: 0,
  Ability: 1,
  Spell: 2,
  Weaponskill: 3,
} as const;
export type SkillType = typeof SkillTypes[keyof typeof SkillTypes];

export interface Skill {
  id: string;
  type: SkillType;
  shortName: string;
  longName: string;
  description: string;
  stats: string[]; // attributes
  effects: string[];
}
