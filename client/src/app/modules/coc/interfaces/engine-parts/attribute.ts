// https://wiki.smutosaur.us/CoC/Stats
// https://cocxianxia.fandom.com/wiki/List_of_Stats
// https://ffxiv.consolegameswiki.com/wiki/Attributes

import { DimensionType, DimensionTypes } from '../space';

export const AttributeTypes = {
  // Unassigned,
  Primary: 'primary', // Base/Core: vit/str/dex
  Secondary: 'secondary', // HP, MP
  Tertiary: 'tertiary', // Appearance/Body
  Offensive: 'offensive',
  Defensive: 'defensive',
  Sexual: 'sexual',
} as const;
export type AttributeType = typeof AttributeTypes[keyof typeof AttributeTypes];

type AttributeFormatType = 'number' | 'string' | 'boolean';

export interface Attribute {
  id: string;
  title: string;
  abbreviation?: string;
  dimension: DimensionType;
  type: AttributeType;
  description?: string;
  format: AttributeFormatType;
  value?: number | string | boolean;
  minValue?: number | string | boolean;
  maxValue?: number | string | boolean;
}

export const AttributeSeed: Attribute[] = [
  /**
   * Corruption of Champions (core stats)
   */
  {
    id: 'strength',
    title: 'Strength',
    abbreviation: 'str',
    dimension: DimensionTypes.CoC,
    type: AttributeTypes.Primary,
    description:
      'Your physical strength. Increases physical damage and bow damage. Helps with physical special attacks and events requiring brute force.',
    format: 'number',
    minValue: 1,
    maxValue: 100,
  },
  {
    id: 'toughness',
    title: 'Toughness',
    abbreviation: 'tou',
    dimension: DimensionTypes.CoC,
    type: AttributeTypes.Primary,
    description:
      'Your constitution. Extremely important. Increases your HP by 2 as well as maximum natural armor by 1. Tough PCs will be able to wield heavy items much more easily.',
    format: 'number',
    minValue: 1,
    maxValue: 100,
  },
  {
    id: 'speed',
    title: 'Speed',
    abbreviation: 'spe',
    dimension: DimensionTypes.CoC,
    type: AttributeTypes.Primary,
    description:
      'Your dexterity and quickness. Very important. Increases accuracy, evasion and both bow stats. Quick PCs will act sooner, hit much more easily and be able to avoid otherwise lethal situations.',
    format: 'number',
    minValue: 1,
    maxValue: 100,
  },
  {
    id: 'intelligence',
    title: 'Intelligence',
    abbreviation: 'inte',
    dimension: DimensionTypes.CoC,
    type: AttributeTypes.Primary,
    description:
      'Your mental sharpness and focus. Very important, especially to mages. Increases bow accuracy and magic damage, literacy, intuition and general knowledge about Mareth.',
    format: 'number',
    minValue: 1,
    maxValue: 100,
  },
  {
    id: 'libido',
    title: 'Libido',
    abbreviation: 'lib',
    dimension: DimensionTypes.CoC,
    type: AttributeTypes.Primary,
    description:
      'Your mental control over sexual desire. A double-edged blade. Significantly increases lust gains as time passes, lust damage done as well as lust damage received. New players, beware!',
    format: 'number',
    minValue: 10,
    maxValue: 100,
  },
  {
    id: 'sensitivity',
    title: 'Sensitivity',
    abbreviation: 'sens',
    dimension: DimensionTypes.CoC,
    type: AttributeTypes.Primary,
    description:
      'Your physical control over sexual desire. Another double-edged blade, albeit way less drastic than libido. Increases physical lust gains and damage done. Can be easily changed.',
    format: 'number',
    minValue: 10,
    maxValue: 100,
  },
  {
    id: 'corruption',
    title: 'Corruption',
    abbreviation: 'cor',
    dimension: DimensionTypes.CoC,
    type: AttributeTypes.Primary,
    description:
      'Your perversion and taint. The last and most dangerous double-edged blade; high corruption unlocks otherwise impossible encounters, but if you keep this high, control the situation or pay the price!',
    format: 'number',
    minValue: 1,
    maxValue: 100,
  },
  /**
   * Corruption of Champions (combat stats)
   * (Delete when declaring a new mob except for changing initial stats)
   */
  {
    id: 'health',
    title: 'Health',
    abbreviation: 'HP',
    dimension: DimensionTypes.CoC,
    type: AttributeTypes.Secondary,
    description:
      'Your physical health. Affected by level, toughness, and Perks.',
    format: 'number',
    minValue: 50,
    maxValue: 700,
  },
  {
    id: 'lust',
    title: 'Lust',
    abbreviation: 'lust',
    dimension: DimensionTypes.CoC,
    type: AttributeTypes.Secondary,
    description:
      "Your sexual desire. Affected by Perks, Shouldra's sexual frustration, wearing the Lusty Maiden's Armor, Libido and Sensitivity. Increases when being teased or stimulated.",
    format: 'number',
    maxValue: 100,
  },
  {
    id: 'fatigue',
    title: 'Fatigue',
    abbreviation: 'fati',
    dimension: DimensionTypes.CoC,
    type: AttributeTypes.Secondary,
    description:
      'Your exhaustion. Magic and special attacks cost fatigue, as well as many actions. Lowered by resting, waiting or events/items. Extremely high Fatigue may lead to a Bad End.',
    format: 'number',
    maxValue: 100,
  },
  /**
   * Corruption of Champions (advancement stats)
   */
  {
    id: 'level',
    title: 'Level',
    abbreviation: 'lvl',
    dimension: DimensionTypes.CoC,
    type: AttributeTypes.Secondary,
    description:
      'Your current level. The higher your level, the more powerful, resilient and experienced your character becomes. There is no level cap.',
    format: 'number',
  },
  {
    id: 'experience',
    title: 'Experience',
    abbreviation: 'XP',
    dimension: DimensionTypes.CoC,
    type: AttributeTypes.Secondary,
    description:
      'Your current pooled experienced. Can be used to level up if high enough. No cap but hidden if over 9999.',
    format: 'number',
  },
  {
    id: 'gems',
    title: 'Gems',
    abbreviation: 'gems',
    dimension: DimensionTypes.CoC,
    type: AttributeTypes.Secondary,
    description:
      'The main currency in the world of Mareth. A small amount of gems and time will be lost upon losing a (real) fight unless a Bad End is triggered. No cap but hidden if over 9999.',
    format: 'number',
  },
  /**
   * Corruption of Champions (other stats)
   */
  {
    id: 'cumMultiplier',
    title: 'cumMultiplier',
    abbreviation: 'cumx',
    dimension: DimensionTypes.CoC,
    type: AttributeTypes.Sexual,
    format: 'number',
  },
  {
    id: 'hoursSinceCum',
    title: 'hoursSinceCum',
    abbreviation: 'tcum',
    dimension: DimensionTypes.CoC,
    type: AttributeTypes.Sexual,
    format: 'number',
  },
  {
    id: 'bonusHP',
    title: 'bonusHP',
    dimension: DimensionTypes.CoC,
    type: AttributeTypes.Tertiary,
    format: 'number',
  },
  {
    id: 'additionalXP',
    title: 'additionalXP',
    dimension: DimensionTypes.CoC,
    type: AttributeTypes.Tertiary,
    format: 'number',
  },
  {
    id: 'lustVuln',
    title: 'lustVuln',
    dimension: DimensionTypes.CoC,
    type: AttributeTypes.Tertiary,
    format: 'number',
  },
  {
    id: 'temperment',
    title: 'temperment',
    dimension: DimensionTypes.CoC,
    type: AttributeTypes.Tertiary,
    format: 'number',
  },
];
