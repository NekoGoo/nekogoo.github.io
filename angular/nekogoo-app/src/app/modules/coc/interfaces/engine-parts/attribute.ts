// https://wiki.smutosaur.us/CoC/Stats
// https://cocxianxia.fandom.com/wiki/List_of_Stats
// https://ffxiv.consolegameswiki.com/wiki/Attributes

import { DimensionType } from '../dimension';

export enum AttributeType {
  // Unassigned,
  Primary, // Base/Core: vit/str/dex
  Secondary, // HP, MP
  Tertiary, // Appearance/Body
  Offensive,
  Defensive,
  Sexual,
}

type AttributeFormats = 'num' | 'str' | 'bool';

export interface Attribute {
  id: string;
  title: string;
  abbreviation?: string;
  dimension: DimensionType;
  type: AttributeType;
  description?: string;
  format: AttributeFormats;
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
    dimension: DimensionType.CoC,
    type: AttributeType.Primary,
    format: 'num',
    description:
      'Your physical strength. Increases physical damage and bow damage. Helps with physical special attacks and events requiring brute force.',
    minValue: 1,
    maxValue: 100,
  },
  {
    id: 'toughness',
    title: 'Toughness',
    abbreviation: 'tou',
    dimension: DimensionType.CoC,
    type: AttributeType.Primary,
    format: 'num',
    description:
      'Your constitution. Extremely important. Increases your HP by 2 as well as maximum natural armor by 1. Tough PCs will be able to wield heavy items much more easily.',
    minValue: 1,
    maxValue: 100,
  },
  {
    id: 'speed',
    title: 'Speed',
    abbreviation: 'spe',
    dimension: DimensionType.CoC,
    type: AttributeType.Primary,
    format: 'num',
    description:
      'Your dexterity and quickness. Very important. Increases accuracy, evasion and both bow stats. Quick PCs will act sooner, hit much more easily and be able to avoid otherwise lethal situations.',
    minValue: 1,
    maxValue: 100,
  },
  {
    id: 'intelligence',
    title: 'Intelligence',
    abbreviation: 'inte',
    dimension: DimensionType.CoC,
    type: AttributeType.Primary,
    format: 'num',
    description:
      'Your mental sharpness and focus. Very important, especially to mages. Increases bow accuracy and magic damage, literacy, intuition and general knowledge about Mareth.',
    minValue: 1,
    maxValue: 100,
  },
  {
    id: 'libido',
    title: 'Libido',
    abbreviation: 'lib',
    dimension: DimensionType.CoC,
    type: AttributeType.Primary,
    format: 'num',
    description:
      'Your mental control over sexual desire. A double-edged blade. Significantly increases lust gains as time passes, lust damage done as well as lust damage received. New players, beware!',
    minValue: 10,
    maxValue: 100,
  },
  {
    id: 'sensitivity',
    title: 'Sensitivity',
    abbreviation: 'sens',
    dimension: DimensionType.CoC,
    type: AttributeType.Primary,
    format: 'num',
    description:
      'Your physical control over sexual desire. Another double-edged blade, albeit way less drastic than libido. Increases physical lust gains and damage done. Can be easily changed.',
    minValue: 10,
    maxValue: 100,
  },
  {
    id: 'corruption',
    title: 'Corruption',
    abbreviation: 'cor',
    dimension: DimensionType.CoC,
    type: AttributeType.Primary,
    format: 'num',
    description:
      'Your perversion and taint. The last and most dangerous double-edged blade; high corruption unlocks otherwise impossible encounters, but if you keep this high, control the situation or pay the price!',
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
    dimension: DimensionType.CoC,
    type: AttributeType.Secondary,
    format: 'num',
    description:
      'Your physical health. Affected by level, toughness, and Perks.',
    minValue: 50,
    maxValue: 700,
  },
  {
    id: 'lust',
    title: 'Lust',
    abbreviation: 'lust',
    dimension: DimensionType.CoC,
    type: AttributeType.Secondary,
    format: 'num',
    description:
      "Your sexual desire. Affected by Perks, Shouldra's sexual frustration, wearing the Lusty Maiden's Armor, Libido and Sensitivity. Increases when being teased or stimulated.",
    maxValue: 100,
  },
  {
    id: 'fatigue',
    title: 'Fatigue',
    abbreviation: 'fati',
    dimension: DimensionType.CoC,
    type: AttributeType.Secondary,
    format: 'num',
    description:
      'Your exhaustion. Magic and special attacks cost fatigue, as well as many actions. Lowered by resting, waiting or events/items. Extremely high Fatigue may lead to a Bad End.',
    maxValue: 100,
  },
  /**
   * Corruption of Champions (advancement stats)
   */
  {
    id: 'level',
    title: 'Level',
    abbreviation: 'lvl',
    dimension: DimensionType.CoC,
    type: AttributeType.Secondary,
    format: 'num',
    description:
      'Your current level. The higher your level, the more powerful, resilient and experienced your character becomes. There is no level cap.',
  },
  {
    id: 'experience',
    title: 'Experience',
    abbreviation: 'XP',
    dimension: DimensionType.CoC,
    type: AttributeType.Secondary,
    format: 'num',
    description:
      'Your current pooled experienced. Can be used to level up if high enough. No cap but hidden if over 9999.',
  },
  {
    id: 'gems',
    title: 'Gems',
    abbreviation: 'gems',
    dimension: DimensionType.CoC,
    type: AttributeType.Secondary,
    format: 'num',
    description:
      'The main currency in the world of Mareth. A small amount of gems and time will be lost upon losing a (real) fight unless a Bad End is triggered. No cap but hidden if over 9999.',
  },
  /**
   * Corruption of Champions (other stats)
   */
  {
    id: 'cumMultiplier',
    title: 'cumMultiplier',
    abbreviation: 'cumx',
    dimension: DimensionType.CoC,
    type: AttributeType.Sexual,
    format: 'num',
    description: '',
  },
  {
    id: 'hoursSinceCum',
    title: 'hoursSinceCum',
    abbreviation: 'tcum',
    dimension: DimensionType.CoC,
    type: AttributeType.Sexual,
    format: 'num',
  },
  {
    id: 'bonusHP',
    title: 'bonusHP',
    dimension: DimensionType.CoC,
    type: AttributeType.Tertiary,
    format: 'num',
  },
  {
    id: 'additionalXP',
    title: 'additionalXP',
    dimension: DimensionType.CoC,
    type: AttributeType.Tertiary,
    format: 'num',
  },
  {
    id: 'lustVuln',
    title: 'lustVuln',
    dimension: DimensionType.CoC,
    type: AttributeType.Tertiary,
    format: 'num',
  },
  {
    id: 'temperment',
    title: 'temperment',
    dimension: DimensionType.CoC,
    type: AttributeType.Tertiary,
    format: 'num',
  },
];
