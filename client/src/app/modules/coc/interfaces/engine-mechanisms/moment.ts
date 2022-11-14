export const MomentTypes = {
  Unassigned: 0,
  Intro: 1,
  Camp: 2,
  Encounter: 3,
  Shop: 4,
} as const;
export type MomentType = typeof MomentTypes[keyof typeof MomentTypes];

export interface Moment {
  id: string;
  title: string;
  type: MomentType;
  description: string;
}
