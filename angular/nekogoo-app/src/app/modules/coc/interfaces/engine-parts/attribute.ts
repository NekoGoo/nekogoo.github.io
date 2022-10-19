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
  dimension: DimensionType;
  type: AttributeType;
  format: AttributeFormats;
  value?: number | string | boolean;
  description?: string;
  abbreviation?: string;
}

export const AttributeSeed: Attribute[] = [
  /**
   * Corruption of Champions (core stats)
   */
  {
    id: 'strength',
    title: 'Strength',
    dimension: DimensionType.CoC,
    type: AttributeType.Primary,
    format: 'num',
    abbreviation: 'str',
  },
  {
    id: 'toughness',
    title: 'Toughness',
    dimension: DimensionType.CoC,
    type: AttributeType.Primary,
    format: 'num',
    abbreviation: 'tou',
  },
  {
    id: 'speed',
    title: 'Speed',
    dimension: DimensionType.CoC,
    type: AttributeType.Primary,
    format: 'num',
    abbreviation: 'spe',
  },
  {
    id: 'intelligence',
    title: 'Intelligence',
    dimension: DimensionType.CoC,
    type: AttributeType.Primary,
    format: 'num',
    abbreviation: 'inte',
  },
  {
    id: 'libido',
    title: 'Libido',
    dimension: DimensionType.CoC,
    type: AttributeType.Primary,
    format: 'num',
    abbreviation: 'lib',
  },
  {
    id: 'sensitivity',
    title: 'Sensitivity',
    dimension: DimensionType.CoC,
    type: AttributeType.Primary,
    format: 'num',
    abbreviation: 'sens',
  },
  {
    id: 'corruption',
    title: 'Corruption',
    dimension: DimensionType.CoC,
    type: AttributeType.Primary,
    format: 'num',
    abbreviation: 'cor',
  },
  /**
   * Corruption of Champions (combat stats)
   * (Delete when declaring a new mob except for changing initial stats)
   */
  {
    id: 'health',
    title: 'Health',
    dimension: DimensionType.CoC,
    type: AttributeType.Secondary,
    format: 'num',
    abbreviation: 'HP',
  },
  {
    id: 'lust',
    title: 'Lust',
    dimension: DimensionType.CoC,
    type: AttributeType.Secondary,
    format: 'num',
    abbreviation: 'lust',
  },
  {
    id: 'fatigue',
    title: 'Fatigue',
    dimension: DimensionType.CoC,
    type: AttributeType.Secondary,
    format: 'num',
    abbreviation: 'fati',
  },
  /**
   * Corruption of Champions (advancement stats)
   */
  {
    id: 'level',
    title: 'Level',
    dimension: DimensionType.CoC,
    type: AttributeType.Secondary,
    format: 'num',
    abbreviation: 'lvl',
  },
  {
    id: 'experience',
    title: 'Experience',
    dimension: DimensionType.CoC,
    type: AttributeType.Secondary,
    format: 'num',
    abbreviation: 'XP',
  },
  {
    id: 'gems',
    title: 'Gems',
    dimension: DimensionType.CoC,
    type: AttributeType.Secondary,
    format: 'num',
    abbreviation: 'gems',
  },
  /**
   * Corruption of Champions (other stats)
   */
  {
    id: 'cumMultiplier',
    title: 'cumMultiplier',
    dimension: DimensionType.CoC,
    type: AttributeType.Sexual,
    format: 'num',
    abbreviation: 'cumx',
  },
  {
    id: 'hoursSinceCum',
    title: 'hoursSinceCum',
    dimension: DimensionType.CoC,
    type: AttributeType.Sexual,
    format: 'num',
    abbreviation: 'tcum',
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
