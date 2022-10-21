import { EffectType } from '@erpge/flags/asset-enums';

class Effect {
  type: EffectType;
  longName: string;
  shortName: string;
  description: string;
  longDescription: string;
  value: number;
  action: (() => void) | null;

  constructor(
    type: EffectType,
    longName: string,
    shortName = '',
    description = '',
    longDescription = '',
  ) {
    this.type = type;
    this.longName = longName;
    this.shortName = shortName;
    this.description = description; // in-game tooltip
    this.longDescription = longDescription;
    this.value = 6; // gems
    this.action = null;
  }
}

export { Effect };
