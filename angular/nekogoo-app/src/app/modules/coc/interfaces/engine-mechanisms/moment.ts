export enum MomentType {
  Unassigned,
  Intro,
  Camp,
  Encounter,
  Shop,
}

export interface Moment {
  id: string;
  title: string;
  type: MomentType;
  description: string;
}
