// https://wiki.smutosaur.us/CoC/Stats

export enum AttributeType {
  Unassigned,
  Primary, // Base/Core: vit/str/dex
  Secondary, // HP, MP
  Tertiary, // Appearance/Body
  Offensive,
  Defensive,
  Sexual,
}

export class Attribute {
  type: AttributeType;
  title: string;
  value?: number | string | boolean;
  format: string;
  abbr: string;
  description: string;

  constructor(
    type: AttributeType,
    title: string,
    value: number | string | boolean,
    abbr = '',
    description = '',
  ) {
    this.type = type;
    this.title = title;
    this.value = value;
    this.format = typeof value;
    this.abbr = abbr;
    this.description = description;
  }
}

export function seedAttribute(): Attribute[] {
  const data: Attribute[] = [
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
  return data;
}
