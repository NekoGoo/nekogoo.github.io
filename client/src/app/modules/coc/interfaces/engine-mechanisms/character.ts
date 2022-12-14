import {
  ArmType,
  ClawType,
  EarType,
  EyeType,
  FaceType,
  GenderType,
  HairType,
  HornType,
  SkinType,
  TailType,
  TongueType,
  WingType,
} from '../appearance-types';
import { Ass } from './body-parts/ass';
import { Breast } from './body-parts/breast';
import { Cock } from './body-parts/cock';
import { Pussy } from './body-parts/pussy';

export const CharacterTypes = {
  Unassigned: 0,
  Creature: 1,
  Player: 2,
} as const;
export type CharacterType = typeof CharacterTypes[keyof typeof CharacterTypes];

export interface Character {
  // Name and references
  type: CharacterType;
  femininity: number;
  masculinity: number;
  originalGender: GenderType;
  currentGender: GenderType;
  originalSpecies: string;
  currentSpecies: string;

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
  fatigue: number;
  // Combat stats (Delete when declaring a new mob except for changing initial stats)
  HP: number;
  lust: number;
  temperment: number;
  // Advancement
  level: number;
  XP: number;
  gems: number;

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

  // --- Sexual Characteristics ---
  teaseLevel: number;
  teaseXP: number;
  lustVuln: number;
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
  // Pregnancy (Preggo stuff)
  fertility: number;
  pregnancyIncubation: number;
  pregnancyType: number;
  buttPregnancyIncubation: number;
  buttPregnancyType: number;

  // --- Appearance ---
  tallness: number; // Height in inches
  thickness: number;
  tone: number;

  skinType: SkinType;
  skinTone: string;
  skinAdj: string;
  skinDesc: string;
  furColor: string;

  // Head (sight, hear, taste, smell)
  hairType: HairType;
  hairColor: string;
  hairLength: number;
  beardStyle: number; // BeardType
  beardLength: number;
  faceType: FaceType;
  eyeType: EyeType;
  earType: EarType;
  earValue: number;
  tongueType: TongueType;
  // Body (touch)
  lowerBody: number;
  hipRating: number;
  buttRating: number;
  legCount: number;
  armType: ArmType;
  // Extra body parts / accessories
  antennae: number;
  clawType: ClawType;
  clawTone: string;
  horns: number;
  hornType: HornType;
  gills: boolean;
  tailType: TailType;
  tailVenom: number; // tailVenum
  tailRecharge: number;
  venom: number;
  wingType: WingType;
  wingDesc: string;

  // --- PIERCINGS --- (from saves.as)
  // saveFile.data.nipplesPierced = player.nipplesPierced;
  // saveFile.data.nipplesPShort = player.nipplesPShort;
  // saveFile.data.nipplesPLong = player.nipplesPLong;
  // saveFile.data.lipPierced = player.lipPierced;
  // saveFile.data.lipPShort = player.lipPShort;
  // saveFile.data.lipPLong = player.lipPLong;
  // saveFile.data.tonguePierced = player.tonguePierced;
  // saveFile.data.tonguePShort = player.tonguePShort;
  // saveFile.data.tonguePLong = player.tonguePLong;
  // saveFile.data.eyebrowPierced = player.eyebrowPierced;
  // saveFile.data.eyebrowPShort = player.eyebrowPShort;
  // saveFile.data.eyebrowPLong = player.eyebrowPLong;
  // saveFile.data.earsPierced = player.earsPierced;
  // saveFile.data.earsPShort = player.earsPShort;
  // saveFile.data.earsPLong = player.earsPLong;
  // saveFile.data.nosePierced = player.nosePierced;
  // saveFile.data.nosePShort = player.nosePShort;
  // saveFile.data.nosePLong = player.nosePLong;
}
