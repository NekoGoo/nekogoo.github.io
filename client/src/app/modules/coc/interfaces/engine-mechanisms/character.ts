import {
  ArmType,
  ClawType,
  EarType,
  EyeType,
  FaceType,
  HairType,
  HornType,
  SkinType,
  TailType,
  TongueType,
  WingType,
} from '@modules/erpge/flags/appearanceEnums';
import { Ass } from '../body-parts/ass';
import { Breast } from '../body-parts/breast';
import { Cock } from '../body-parts/cock';
import { Pussy } from '../body-parts/pussy';

// 0 genderless, 1 male, 2 female, 3 hermaphrodite
export enum GenderType {
  NONE,
  Male,
  Female,
  Herm,
}

export enum CharacterType {
  Unassigned,
  Creature,
  Player,
}

export interface Character {
  // Name and references
  type: CharacterType;
  genderBirth: GenderType;
  genderCurrent: GenderType;

  a: string;
  name: string;
  refName: string;
  isAre: string;
  heShe: string;
  himHer: string;
  hisHer: string;
  plural: boolean;
  battleDesc: string;

  // --- Attributes / Stats ---
  bonusHP: number;
  additionalXP: number;
  // Core stats
  str: number;
  tou: number;
  spe: number;
  inte: number;
  lib: number;
  sens: number;
  cor: number;
  // Combat stats (Delete when declaring a new mob except for changing initial stats)
  HP: number;
  lust: number;
  fatigue: number;
  // Advancement
  level: number;
  XP: number;
  gems: number;

  // --- Sexual Characteristics ---
  femininity: number;
  masculinity: number;
  teaseLevel: number;
  teaseXP: number;
  lustVuln: number;
  temperment: number;
  // Ass/Butt
  ass: Ass;
  // Rows of Breasts
  breastRows: Breast[][];
  // Penises/Cocks
  cocks: Cock[];
  balls: number;
  ballSize: number;
  cumMultiplier: number;
  hoursSinceCum: number;
  // Vaginas
  //   vaginas: Vagina[];
  pussies: Pussy[];
  // Virginity
  assVirginity: number;
  penisVirginity: number;
  vaginaVirginity: number;
  // Pregnancy
  fertility: number;

  // --- Abilities / Auras ---
  spells: string[]; // Skill
  statusEffects: string[]; // Effect
  perks: string[]; // Effect

  // --- Inventory (Items) ---
  keyItems: string[];
  drops: string[];
  dropThresholds: number[];
  // Battle letiables
  weapon?: string;
  shield?: string;
  armor?: string;
  upperGarment?: string;
  lowerGarment?: string;
  accessory1?: string;
  accessory2?: string;

  // --- Appearance ---
  tallness: number; // Height in inches
  skinTone: string;
  skinType: SkinType;
  skinAdj: string;
  skinDesc: string;
  hairType: HairType;
  hairColor: string;
  hairLength: number;
  beardType: number;
  beardLength: number;
  furColor: string;

  // Head (sight, hear, taste, smell)
  faceType: FaceType;
  eyeType: EyeType;
  earType: EarType;
  earValue: number;
  tongueType: TongueType;
  // Body (touch)
  lowerBody: number;
  legCount: number;
  armType: ArmType;
  // Extra body parts / accessories
  antennae: number;
  clawType: ClawType;
  clawTone: string;
  hornType: HornType;
  horns: number;
  gills: boolean;
  tailType: TailType;
  tailVenom: number;
  tailRecharge: number;
  wingType: WingType;
  wingDesc: string;
  venom: number;

  tone: number;
  thickness: number;
  hipRating: number;
}
