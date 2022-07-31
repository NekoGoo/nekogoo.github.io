import { AttributeType } from '../../../flags/asset-enums';
import { Attribute } from '../../../models/engine-parts/attribute';

class AttributeSeed {
  readonly data: Attribute[];

  constructor() {
    this.data = [
      // Corruption of Champions (core stats)
      new Attribute(AttributeType.Primary, 'Strength', 15, 'str'),
      new Attribute(AttributeType.Primary, 'Toughness', 15, 'tou'),
      new Attribute(AttributeType.Primary, 'Speed', 15, 'spe'),
      new Attribute(AttributeType.Primary, 'Intelligence', 15, 'inte'),
      new Attribute(AttributeType.Primary, 'Libido', 15, 'lib'),
      new Attribute(AttributeType.Primary, 'Sensitivity', 15, 'sens'),
      new Attribute(AttributeType.Primary, 'Corruption', 15, 'cor'),
      // Combat stats (Delete when declaring a new mob except for changing initial stats)
      new Attribute(AttributeType.Secondary, 'Health', 0, 'HP'),
      new Attribute(AttributeType.Secondary, 'Lust', 0, 'lust'),
      new Attribute(AttributeType.Secondary, 'Fatigue', 0, 'fati'),
      // Advancement
      new Attribute(AttributeType.Secondary, 'Level', 1, 'lvl'),
      new Attribute(AttributeType.Secondary, 'Experience', 0, 'XP'),
      new Attribute(AttributeType.Secondary, 'Gems', 0, 'gems'),
      // Other
      new Attribute(AttributeType.Sexual, 'cumMultiplier', 0, 'cumx'),
      new Attribute(AttributeType.Sexual, 'hoursSinceCum', 0, 'tcum'),
      new Attribute(AttributeType.Tertiary, 'bonusHP', 0),
      new Attribute(AttributeType.Tertiary, 'additionalXP', 0),
      new Attribute(AttributeType.Tertiary, 'lustVuln', 1),
      new Attribute(AttributeType.Tertiary, 'temperment', 0),
    ];
  }
}

export { AttributeSeed };
