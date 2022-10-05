export enum EffectType {
  None,
  Perk,
  Status,
  Consumable,
  Equipment,
}

export interface Effect {
  type: EffectType;
  longName: string;
  shortName: string;
  description: string;
  longDescription: string;
  value: number;
}
