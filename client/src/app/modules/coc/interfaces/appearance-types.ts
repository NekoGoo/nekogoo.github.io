// https://stackoverflow.com/questions/40275832/typescript-has-unions-so-are-enums-redundant
// https://fettblog.eu/tidy-typescript-avoid-enums

// Get to the const values of any object
type Values<T> = T[keyof T];

// 0 genderless, 1 male, 2 female, 3 hermaphrodite
export const GenderTypes = {
  NONE: 0,
  Male: 1,
  Female: 2,
  Herm: 3,
} as const;
// export type GenderType = typeof GenderTypes[keyof typeof GenderTypes];
export type GenderType = Values<typeof GenderTypes>;

export const SkinTypes = {
  Plain: 0,
  Fur: 1,
  Scales: 2,
  Goo: 3,
  Undefined: 4,
} as const;
export type SkinType = Values<typeof SkinTypes>;

export const HairTypes = {
  Normal: 0,
  Feather: 1,
  Ghost: 2,
  Goo: 3,
  Anemone: 4,
  Quill: 5,
} as const;
export type HairType = Values<typeof HairTypes>;

export const BeardTypes = {
  None: 0,
  Normal: 1,
  Goatee: 2,
} as const;
export type BeardType = Values<typeof BeardTypes>;

export const FaceTypes = {
  Human: 0,
  Horse: 1,
  Dog: 2,
  Minotaur: 3,
  SharkTeeth: 4,
  SnakeFangs: 5,
  Cat: 6,
  Lizard: 7,
  Bunny: 8,
  Kangaroo: 9,
  SpiderFangs: 10,
  Fox: 11,
  Dragon: 12,
  RaccoonMask: 13,
  Raccoon: 14,
  Buckteeth: 15,
  Mouse: 16,
  FerretMask: 17,
  Ferret: 18,
  Pig: 19,
  Boar: 20,
  Rhino: 21,
  Echidna: 22,
  Deer: 23,
} as const;
export type FaceType = Values<typeof FaceTypes>;

export const TongueTypes = {
  Human: 0,
  Snake: 1,
  Demonic: 2,
  Draconic: 3,
  Echidna: 4,
} as const;
export type TongueType = Values<typeof TongueTypes>;

export const EyeTypes = {
  Human: 0,
  FourSpiderEyes: 1,
  BlackEyesSandTrap: 2,
} as const;
export type EyeType = Values<typeof EyeTypes>;

export const EarTypes = {
  Human: 0,
  Horse: 1,
  Dog: 2,
  Cow: 3,
  Elfin: 4,
  Cat: 5,
  Lizard: 6,
  Bunny: 7,
  Kangaroo: 8,
  Fox: 9,
  Dragon: 10,
  Raccoon: 11,
  Mouse: 12,
  Ferret: 13,
  Pig: 14,
  Rhino: 15,
  Echidna: 16,
  Deer: 17,
} as const;
export type EarType = Values<typeof EarTypes>;

export const HornTypes = {
  NONE: 0,
  DEMON: 1,
  COW_MINOTAUR: 2,
  DRACONIC_X2: 3,
  DRACONIC_X4_12_INCH_LONG: 4,
  ANTLERS: 5,
  GOAT: 6,
  UNICORN: 7,
  RHINO: 8,
} as const;
export type HornType = Values<typeof HornTypes>;

export const AntennaeTypes = {
  NONE: 0,
  FAIRY: 1,
  BEE: 2,
} as const;
export type AntennaeType = Values<typeof AntennaeTypes>;

export const ArmTypes = {
  HUMAN: 0,
  HARPY: 1,
  SPIDER: 2,
  SALAMANDER: 3,
  PREDATOR: 4,
} as const;
export type ArmType = Values<typeof ArmTypes>;

export const ClawTypes = {
  NORMAL: 0,
  LIZARD: 1,
  DRAGON: 2,
  SALAMANDER: 3,
  CAT: 4, // NYI! Placeholder for now!! (See http://tiny.cc/coc-revamp-claws)
  DOG: 5, // NYI! Placeholder for now!! (See http://tiny.cc/coc-revamp-claws)
  RAPTOR: 6, // NYI! Placeholder for now!! (See http://tiny.cc/coc-revamp-claws) Giev teh Rapturs :-)
  MANTIS: 7, // NYI! Placeholder for Xianxia mod (See http://tiny.cc/coc-xianxia-mod)
} as const;
export type ClawType = Values<typeof ClawTypes>;

export const TailTypes = {
  NONE: 0,
  HORSE: 1,
  DOG: 2,
  DEMONIC: 3,
  COW: 4,
  SPIDER_ADBOMEN: 5,
  BEE_ABDOMEN: 6,
  SHARK: 7,
  CAT: 8,
  LIZARD: 9,
  RABBIT: 10,
  HARPY: 11,
  KANGAROO: 12,
  FOX: 13,
  DRACONIC: 14,
  RACCOON: 15,
  MOUSE: 16,
  FERRET: 17,
  BEHEMOTH: 18,
  PIG: 19,
  SCORPION: 20,
  GOAT: 21,
  RHINO: 22,
  ECHIDNA: 23,
  DEER: 24,
} as const;
export type TailType = Values<typeof TailTypes>;

export const LowerBodyTypes = {
  HUMAN: 0,
  HOOFED: 1,
  DOG: 2,
  NAGA: 3,
  CENTAUR: 4,
  DEMONIC_HIGH_HEELS: 5,
  DEMONIC_CLAWS: 6,
  BEE: 7,
  GOO: 8,
  CAT: 9,
  LIZARD: 10,
  PONY: 11,
  BUNNY: 12,
  HARPY: 13,
  KANGAROO: 14,
  CHITINOUS_SPIDER_LEGS: 15,
  DRIDER_LOWER_BODY: 16,
  FOX: 17,
  DRAGON: 18,
  RACCOON: 19,
  FERRET: 20,
  CLOVEN_HOOFED: 21,
  RHINO: 22,
  ECHIDNA: 23,
  DEERTAUR: 24,
} as const;
export type LowerBodyType = Values<typeof LowerBodyTypes>;

export const WingTypes = {
  NONE: 0,
  BEE_LIKE_SMALL: 1,
  BEE_LIKE_LARGE: 2,
  HARPY: 4,
  IMP: 5,
  BAT_LIKE_TINY: 6,
  BAT_LIKE_LARGE: 7,
  SHARK_FIN: 8,
  FEATHERED_LARGE: 9,
  DRACONIC_SMALL: 10,
  DRACONIC_LARGE: 11,
  GIANT_DRAGONFLY: 12,
} as const;
export type WingType = Values<typeof WingTypes>;

export const PiercingTypes = {
  NONE: 0,
  STUD: 1,
  RING: 2,
  LADDER: 3,
  HOOP: 4,
  CHAIN: 5,
} as const;
export type PiercingType = Values<typeof PiercingTypes>;

export const CockTypes = {
  UNDEFINED: -1,
  HUMAN: 0,
  HORSE: 1,
  DOG: 2,
  DEMON: 3,
  TENTACLE: 4,
  CAT: 5,
  LIZARD: 6,
  ANEMONE: 7,
  KANGAROO: 8,
  DRAGON: 9,
  DISPLACER: 10,
  FOX: 11,
  BEE: 12,
  PIG: 13,
  AVIAN: 14,
  RHINO: 15,
  ECHIDNA: 16,
} as const;
export type CockType = Values<typeof CockTypes>;

export const VaginaTypes = {
  HUMAN: 0,
  EQUINE: 1,
  BLACK_SAND_TRAP: 5,
} as const;
export type VaginaType = Values<typeof VaginaTypes>;

export const VaginalWetnessTypes = {
  DRY: 0,
  NORMAL: 1,
  WET: 2,
  SLICK: 3,
  DROOLING: 4,
  SLAVERING: 5,
} as const;
export type VaginalWetnessType = Values<typeof VaginalWetnessTypes>;

export const VaginalLoosenessTypes = {
  TIGHT: 0,
  NORMAL: 1,
  LOOSE: 2,
  GAPING: 3,
  GAPING_WIDE: 4,
  CLOWN_CAR: 5,
} as const;
export type VaginalLoosenessType = Values<typeof VaginalLoosenessTypes>;

export const AnalWetnessTypes = {
  DRY: 0,
  NORMAL: 1,
  MOIST: 2,
  SLIMY: 3,
  DROOLING: 4,
  SLIME_DROOLING: 5,
} as const;
export type AnalWetnessType = Values<typeof AnalWetnessTypes>;

export const AnalLoosenessTypes = {
  VIRGIN: 0,
  TIGHT: 1,
  NORMAL: 2,
  LOOSE: 3,
  STRETCHED: 4, // very loose
  GAPING: 5,
  MONSTROUS: 6,
} as const;
export type AnalLoosenessType = Values<typeof AnalLoosenessTypes>;

// export enum AssRatingType {
//   BUTTLESS = 0,
//   TIGHT = 2,
//   AVERAGE = 4,
//   NOTICEABLE = 6,
//   LARGE = 8,
//   JIGGLY = 10,
//   EXPANSIVE = 13,
//   HUGE = 16,
//   INCONCEIVABLE = 20,
// }
export const HipRatingTypes = {
  BOYISH: 0,
  SLENDER: 2,
  AVERAGE: 4,
  AMPLE: 6,
  CURVY: 10,
  FERTILE: 15,
  INHUMANLY_WIDE: 20,
} as const;
export type HipRatingType = Values<typeof HipRatingTypes>;

export const ButtRatingTypes = {
  BUTTLESS: 0,
  TIGHT: 2,
  AVERAGE: 4,
  NOTICEABLE: 6,
  LARGE: 8,
  JIGGLY: 10,
  EXPANSIVE: 13,
  HUGE: 16,
  INCONCEIVABLE: 20,
} as const;
export type ButtRatingType = Values<typeof ButtRatingTypes>;

/*
0 - manchest
1 - A cup
2 - B cup
3 - C cup
4 - D cup
5 - DD cup
6 - E cup
7 - F cup
8 - G cup
9 - GG cup
10 - H
11 - HH cup
12 - HHH cup
13 - beachball sized
14 - ??? */
export const BreastSizeTypes = {
  CUP_FLAT: 0,
  CUP_A: 1,
  CUP_B: 2,
  CUP_C: 3,
  CUP_D: 4,
  CUP_DD: 5,
  CUP_DD_BIG: 6,
  CUP_E: 7,
  CUP_E_BIG: 8,
  CUP_EE: 9,
  CUP_EE_BIG: 10,
  CUP_F: 11,
  CUP_F_BIG: 12,
  CUP_FF: 13,
  CUP_FF_BIG: 14,
  CUP_G: 15,
  CUP_G_BIG: 16,
  CUP_GG: 17,
  CUP_GG_BIG: 18,
  CUP_H: 19,
  CUP_H_BIG: 20,
  CUP_HH: 21,
  CUP_HH_BIG: 22,
  CUP_HHH: 23,
  CUP_I: 24,
  CUP_I_BIG: 25,
  CUP_II: 26,
  CUP_II_BIG: 27,
  CUP_J: 28,
  CUP_J_BIG: 29,
  CUP_JJ: 30,
  CUP_JJ_BIG: 31,
  CUP_K: 32,
  CUP_K_BIG: 33,
  CUP_KK: 34,
  CUP_KK_BIG: 35,
  CUP_L: 36,
  CUP_L_BIG: 37,
  CUP_LL: 38,
  CUP_LL_BIG: 39,
  CUP_M: 40,
  CUP_M_BIG: 41,
  CUP_MM: 42,
  CUP_MM_BIG: 43,
  CUP_MMM: 44,
  CUP_MMM_LARGE: 45,
  CUP_N: 46,
  CUP_N_LARGE: 47,
  CUP_NN: 48,
  CUP_NN_LARGE: 49,
  CUP_O: 50,
  CUP_O_LARGE: 51,
  CUP_OO: 52,
  CUP_OO_LARGE: 53,
  CUP_P: 54,
  CUP_P_LARGE: 55,
  CUP_PP: 56,
  CUP_PP_LARGE: 57,
  CUP_Q: 58,
  CUP_Q_LARGE: 59,
  CUP_QQ: 60,
  CUP_QQ_LARGE: 61,
  CUP_R: 62,
  CUP_R_LARGE: 63,
  CUP_RR: 64,
  CUP_RR_LARGE: 65,
  CUP_S: 66,
  CUP_S_LARGE: 67,
  CUP_SS: 68,
  CUP_SS_LARGE: 69,
  CUP_T: 70,
  CUP_T_LARGE: 71,
  CUP_TT: 72,
  CUP_TT_LARGE: 73,
  CUP_U: 74,
  CUP_U_LARGE: 75,
  CUP_UU: 76,
  CUP_UU_LARGE: 77,
  CUP_V: 78,
  CUP_V_LARGE: 79,
  CUP_VV: 80,
  CUP_VV_LARGE: 81,
  CUP_W: 82,
  CUP_W_LARGE: 83,
  CUP_WW: 84,
  CUP_WW_LARGE: 85,
  CUP_X: 86,
  CUP_X_LARGE: 87,
  CUP_XX: 88,
  CUP_XX_LARGE: 89,
  CUP_Y: 90,
  CUP_Y_LARGE: 91,
  CUP_YY: 92,
  CUP_YY_LARGE: 93,
  CUP_Z: 94,
  CUP_Z_LARGE: 95,
  CUP_ZZ: 96,
  CUP_ZZ_LARGE: 97,
  CUP_ZZZ: 98,
  CUP_ZZZ_LARGE: 99,
  CUP_HYPER_A: 100, // Hyper threshold
  CUP_HYPER_B: 101,
  CUP_HYPER_C: 102,
  CUP_HYPER_D: 103,
  CUP_HYPER_DD: 104,
  CUP_HYPER_DD_BIG: 105,
  CUP_HYPER_E: 106,
  CUP_HYPER_E_BIG: 107,
  CUP_HYPER_EE: 108,
  CUP_HYPER_EE_BIG: 109,
  CUP_HYPER_F: 110,
  CUP_HYPER_F_BIG: 111,
  CUP_HYPER_FF: 112,
  CUP_HYPER_FF_BIG: 113,
  CUP_HYPER_G: 114,
  CUP_HYPER_G_BIG: 115,
  CUP_HYPER_GG: 116,
  CUP_HYPER_GG_BIG: 117,
  CUP_HYPER_H: 118,
  CUP_HYPER_H_BIG: 119,
  CUP_HYPER_HH: 120,
  CUP_HYPER_HH_BIG: 121,
  CUP_HYPER_HHH: 122,
  CUP_HYPER_I: 123,
  CUP_HYPER_I_BIG: 124,
  CUP_HYPER_II: 125,
  CUP_HYPER_II_BIG: 126,
  CUP_HYPER_J: 127,
  CUP_HYPER_J_BIG: 128,
  CUP_HYPER_JJ: 129,
  CUP_HYPER_JJ_BIG: 130,
  CUP_HYPER_K: 131,
  CUP_HYPER_K_BIG: 132,
  CUP_HYPER_KK: 133,
  CUP_HYPER_KK_BIG: 134,
  CUP_HYPER_L: 135,
  CUP_HYPER_L_BIG: 136,
  CUP_HYPER_LL: 137,
  CUP_HYPER_LL_BIG: 138,
  CUP_HYPER_M: 139,
  CUP_HYPER_M_BIG: 140,
  CUP_HYPER_MM: 141,
  CUP_HYPER_MM_BIG: 142,
  CUP_HYPER_MMM: 143,
  CUP_HYPER_MMM_LARGE: 144,
  CUP_HYPER_N: 145,
  CUP_HYPER_N_LARGE: 146,
  CUP_HYPER_NN: 147,
  CUP_HYPER_NN_LARGE: 148,
  CUP_HYPER_O: 149,
  CUP_HYPER_O_LARGE: 150,
  CUP_HYPER_OO: 151,
  CUP_HYPER_OO_LARGE: 152,
  CUP_HYPER_P: 153,
  CUP_HYPER_P_LARGE: 154,
  CUP_HYPER_PP: 155,
  CUP_HYPER_PP_LARGE: 156,
  CUP_HYPER_Q: 157,
  CUP_HYPER_Q_LARGE: 158,
  CUP_HYPER_QQ: 159,
  CUP_HYPER_QQ_LARGE: 160,
  CUP_HYPER_R: 161,
  CUP_HYPER_R_LARGE: 162,
  CUP_HYPER_RR: 163,
  CUP_HYPER_RR_LARGE: 164,
  CUP_HYPER_S: 165,
  CUP_HYPER_S_LARGE: 166,
  CUP_HYPER_SS: 167,
  CUP_HYPER_SS_LARGE: 168,
  CUP_HYPER_T: 169,
  CUP_HYPER_T_LARGE: 170,
  CUP_HYPER_TT: 171,
  CUP_HYPER_TT_LARGE: 172,
  CUP_HYPER_U: 173,
  CUP_HYPER_U_LARGE: 174,
  CUP_HYPER_UU: 175,
  CUP_HYPER_UU_LARGE: 176,
  CUP_HYPER_V: 177,
  CUP_HYPER_V_LARGE: 178,
  CUP_HYPER_VV: 179,
  CUP_HYPER_VV_LARGE: 180,
  CUP_HYPER_W: 181,
  CUP_HYPER_W_LARGE: 182,
  CUP_HYPER_WW: 183,
  CUP_HYPER_WW_LARGE: 184,
  CUP_HYPER_X: 185,
  CUP_HYPER_X_LARGE: 186,
  CUP_HYPER_XX: 187,
  CUP_HYPER_XX_LARGE: 188,
  CUP_HYPER_Y: 189,
  CUP_HYPER_Y_LARGE: 190,
  CUP_HYPER_YY: 191,
  CUP_HYPER_YY_LARGE: 192,
  CUP_HYPER_Z: 193,
  CUP_HYPER_Z_LARGE: 194,
  CUP_HYPER_ZZ: 195,
  CUP_HYPER_ZZ_LARGE: 196,
  CUP_HYPER_ZZZ: 197,
  CUP_HYPER_ZZZ_LARGE: 198, // Beyond this size is Jacques00-cup
} as const;
export type BreastSizeType = Values<typeof BreastSizeTypes>;
