import {
  ArmType,
  BeardType,
  ButtRatingType,
  ClawType,
  EarType,
  EyeType,
  FaceType,
  GenderType,
  HairType,
  HipRatingType,
  HornType,
  LowerBodyType,
  SkinType,
  TailType,
  TongueType,
  WingType,
} from '../flags/appearanceEnums';
import { CharacterType } from '../flags/asset-enums';
import { Ass } from './body-parts/ass';
import { Breast } from './body-parts/breast';
import { Cock } from './body-parts/cock';
import { Vagina } from './body-parts/vagina';
import { Effect } from './engine-parts/effect';
import { Item } from './item';
import { Skill } from './skill';

class Character {
  // Name and references
  type: CharacterType;
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
  //Core stats
  str: number;
  tou: number;
  spe: number;
  inte: number;
  lib: number;
  sens: number;
  cor: number;
  //Combat stats (Delete when declaring a new mob except for changing initial stats)
  HP: number;
  lust: number;
  fatigue: number;
  //Advancement
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
  vaginas: Vagina[];
  // Virginity
  assVirginity: number;
  penisVirginity: number;
  vaginaVirginity: number;
  // Pregnancy
  fertility: number;

  // --- Abilities / Auras ---
  spells: Skill[];
  statusEffects: Effect[];
  perks: Effect[];

  // --- Inventory ---
  keyItems: Item[];
  drops: Item[];
  dropThresholds: number[];
  //Battle letiables
  weapon: Item | null;
  shield: Item | null;
  armor: Item | null;
  upperGarment: Item | null;
  lowerGarment: Item | null;
  accessory1: Item | null;
  accessory2: Item | null;

  // --- Appearance ---
  gender: number; //0 genderless, 1 male, 2 female, 3 hermaphrodite
  tallness: number; //Height in inches
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

  //Victory/defeat
  victory: ((a: any) => void) | null;
  defeat: ((a: any) => void) | null;

  constructor(type = CharacterType.Creature) {
    // Name and references
    this.type = type;
    this.a = '';
    this.name = '';
    if (this.type == CharacterType.Player) {
      this.refName = 'You';
      this.isAre = 'are';
      this.heShe = 'you';
      this.himHer = 'you';
      this.hisHer = 'your';
      this.plural = true;
    } else {
      this.refName = this.name;
      this.isAre = 'is';
      this.heShe = '';
      this.himHer = '';
      this.hisHer = '';
      this.plural = false;
    }
    this.battleDesc = '';

    // --- Attributes / Stats ---
    this.bonusHP = 0;
    this.additionalXP = 0;
    // Core stats
    this.str = 15;
    this.tou = 15;
    this.spe = 15;
    this.inte = 15;
    this.lib = 15;
    this.sens = 15;
    this.cor = 15;
    // Combat stats
    this.HP = 0;
    this.lust = 0;
    this.fatigue = 0;
    // Advancement
    this.level = 1;
    this.XP = 0;
    this.gems = 0;

    // --- Sexual Characteristics ---
    this.femininity = 50;
    this.masculinity = 50;
    this.teaseLevel = 0;
    this.teaseXP = 0;
    this.lustVuln = 1;
    this.temperment = 0;
    // Ass/Butt
    this.ass = new Ass();
    // Rows of Breasts
    this.breastRows = [];
    // Penises/Cocks
    this.cocks = [];
    this.balls = 0;
    this.ballSize = 0;
    this.cumMultiplier = 0;
    this.hoursSinceCum = 0;
    // Vaginas
    this.vaginas = [];
    // Virginity
    this.assVirginity = 0;
    this.penisVirginity = 0;
    this.vaginaVirginity = 0;
    // Pregnancy
    this.fertility = 0;

    // --- Abilities / Auras ---
    this.spells = [];
    this.statusEffects = [];
    this.perks = [];

    // --- Inventory ---
    this.keyItems = [];
    this.drops = [];
    this.dropThresholds = [];
    // Equipment/Battle letiables
    this.weapon = null;
    this.shield = null;
    this.armor = null;
    this.upperGarment = null;
    this.lowerGarment = null;
    this.accessory1 = null;
    this.accessory2 = null;

    // --- Appearance ---
    this.gender = GenderType.NONE; //0 genderless, 1 male, 2 female, 3 hermaphrodite
    if (this.type == CharacterType.Player) {
      this.tallness = 60; //Height in inches
      this.skinTone = 'light';
      this.hairColor = 'brown';
      this.hairLength = 1;
      this.furColor = 'none';
    } else {
      this.tallness = 36; // Height in inches
      this.skinTone = '';
      this.hairColor = '';
      this.hairLength = 0;
      this.furColor = '';
    }
    this.skinType = SkinType.Plain;
    this.skinAdj = '';
    this.skinDesc = 'skin';
    this.hairType = HairType.Normal;
    this.beardType = BeardType.None;
    this.beardLength = 0;

    // Head (sight, hear, taste, smell)
    this.faceType = FaceType.Human;
    this.eyeType = EyeType.Human;
    this.earType = EarType.Human;
    this.earValue = 0;
    this.tongueType = TongueType.Human;
    // Body (touch)
    this.lowerBody = LowerBodyType.HUMAN;
    this.legCount = 2;
    this.armType = ArmType.HUMAN;
    // Extra body parts / accessories
    this.antennae = 0;
    this.clawType = ClawType.NORMAL;
    this.clawTone = '';
    this.hornType = HornType.NONE;
    this.horns = 0;
    this.gills = false;
    this.tailType = TailType.NONE;
    this.tailVenom = 0;
    this.tailRecharge = 0;
    this.wingType = WingType.NONE;
    this.wingDesc = '';
    this.venom = 0;

    if (this.type == CharacterType.Player) {
      this.tone = 50;
      this.thickness = 50;
    } else {
      this.tone = 0;
      this.thickness = 0;
    }
    this.hipRating = HipRatingType.BOYISH;

    // Victory/defeat actions
    this.victory = null;
    this.defeat = null;
  }

  // --- Getters for main body parts ---

  get defaultBreastRow(): Breast[] {
    if (this.breastRows.length > 0) {
      return this.breastRows[0];
    }
    return [];
  }

  get defaultVagina(): Vagina | null {
    if (this.vaginas.length > 0) {
      return this.vaginas[0];
    }
    return null;
  }

  get hasNipplePierced(): boolean {
    let piercingCount = 0;
    for (const breastRow of this.breastRows) {
      for (const breast of breastRow) {
        if (breast.pierced) piercingCount++;
      }
    }
    return piercingCount > 0;
  }

  get buttRating(): ButtRatingType {
    return this.ass.rating;
  }

  get armorName(): string {
    return this.armor?.shortName || '';
  }
}

export { Character };
