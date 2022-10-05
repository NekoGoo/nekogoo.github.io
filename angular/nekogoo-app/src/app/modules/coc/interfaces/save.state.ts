import { EntityState } from '@ngrx/entity';

import { Time } from './engine-mechanisms/time';
// import { GameTime } from '../models/mechanisms/game-time';

// GameContext / liveData/saveData
// TODO: Time, Exploration, ItemContainer, KeyItemTypeContainer, PerkTypeContainer, StatusEffectTypeContainer, ItemSlot
export interface SaveState {
  // player: Character;
  momentId: number;
  momentStep: number;
  player?: string;
  mainText?: string;
}

export interface OgSaveState {
  // --- original properties ---

  id: string;
  // Variables that can be set as development progresses.
  gameVersion: string;
  saveVersion: number;
  levelCap: number;
  // Game settings
  storage: Storage;
  debug: boolean;
  silly: boolean;
  hyperHappy: boolean;
  lowStandards: boolean;
  hungerEnabled: boolean; // realistic mode
  SFWMode: boolean;
  // Player tracking (starting appearance, stats points available to distribute)
  originalGender: number;
  originalRace: string; // Tag:TagType.Species
  statPoints: number;
  perkPoints: number;
  // Interface settings
  use12Hours: boolean;
  useMetrics: boolean;
  // Store data for fonts
  buttonFont: string;
  mainFont: string;
  mainFontSizeArray: string[];
  mainFontSizeIndex: number;
  // Core variables
  gameStarted: boolean;
  shiftKeyDown: boolean;

  // time: GameTime;
  time: Time;
  // exploration: Exploration;
  explored: string[]; // Tag[]

  // Lookup calls originated in UTIL
  // Items: ItemContainer;
  // ItemLib: { [key: string]: Item }; //Hold item IDs for purpose of looking up or for save data.
  // KeyItems: KeyItemTypeContainer;
  // KeyItemIDs: { [key: string]: KeyItemType }; //Hold key item IDs for purpose of looking up.

  // PerkLib: PerkTypeContainer;
  // PerkIDs: { [key: string]: PerkType }; //Hold perk IDs for purpose of looking up.
  // StatusEffects: StatusEffectTypeContainer;
  // StatusEffectIDs: { [key: string]: StatusEffectType }; //Hold status effect IDs for purpose of looking up.

  gameFlags: { [key: string]: number };
  // pregnancyProgression: PregnancyProgression

  // amily: AmilyScene.Amily;
  // sexForced: boolean;
  // tamanipreg: TamaniScene.Tamani;
  // sandWitch: SandWitchScene.SandWitch;
  // beeGirlAttitude: number;
  // bowSkill: number;

  // Combat
  // monster: Character | null;
  monster?: string;
  currentTurn: number;
  currentRound: number;
}

export interface SaveStateTable extends EntityState<SaveState> {}
