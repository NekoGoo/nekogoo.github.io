import { Character } from '../models/character';
import { GameTime } from '../models/mechanisms/game-time';

// GameContext / liveData/saveData
// TODO: Time, Exploration, ItemContainer, KeyItemTypeContainer, PerkTypeContainer, StatusEffectTypeContainer, ItemSlot
class SaveSlot {
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
  player: Character;
  playerMenu: (() => void) | null;
  gameStarted: boolean;
  shiftKeyDown: boolean;

  time: GameTime;
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
  monster: Character | null;
  currentTurn: number;
  currentRound: number;

  // Inventory
  // itemSlots: ItemSlot[];
  // currentItemSlot?: ItemSlot;
  callNext: (() => void) | null;
  callOnAbandon: (() => void) | null;

  constructor(id: string) {
    this.id = id;
    // Variables that can be set as development progresses.
    this.gameVersion = '0.1.2 alpha';
    this.saveVersion = 1; // If this value is increased, the saves will be upgraded to accommodate the new changes.
    this.levelCap = 5; // Determines the maximum level a player can attain. This will be raised as dungeons are added.

    // Game settings
    this.storage = new Storage();
    this.debug = false;
    this.silly = false;
    this.hyperHappy = false;
    this.lowStandards = false;
    this.hungerEnabled = false;
    this.SFWMode = false;

    // Interface settings
    this.use12Hours = false;
    this.useMetrics = false;

    // Store data for fonts
    this.buttonFont = 'Papyrus';
    this.mainFont = 'Times New Roman';
    this.mainFontSizeArray = [
      '0.6em',
      '0.7em',
      '0.8em',
      '0.9em',
      '1em',
      '1.1em',
      '1.2em',
      '1.3em',
      '1.4em',
    ];
    this.mainFontSizeIndex = 4; // Goes from 0 to 8. Will be used to pick font size from array.

    // Core variables
    this.player = new Character();
    this.playerMenu = null;
    this.gameStarted = false; // Determine if game has already started
    this.shiftKeyDown = false;

    this.time = new GameTime();
    // Global array for loading in pregnancies and other things that are time sensitive.
    // this.timeAware = []

    // this.exploration = new Exploration();
    this.explored = [];

    // Lookup calls (originated in UTIL)
    // this.Items = new ItemContainer();
    // this.KeyItems = new KeyItemTypeContainer();
    // this.PerkLib = new PerkTypeContainer();
    // this.StatusEffects = new StatusEffectTypeContainer();
    // this.ItemLib = {}; //Hold item IDs for purpose of looking up or for save data.
    // this.KeyItemIDs = {}; //Hold key item IDs for purpose of looking up.
    // this.PerkIDs = {}; //Hold perk IDs for purpose of looking up.
    // this.StatusEffectIDs = {}; //Hold status effect IDs for purpose of looking up.

    // NPC variables
    // let flags = [0] * 3000; //For legacy purposes only.
    // let gameFlags = []
    this.gameFlags = {};

    // Player tracking (starting appearance, stats points available to distribute)
    this.originalGender = 0;
    this.originalRace = 'human'; // Tag:TagType.Species
    this.statPoints = 0;
    this.perkPoints = 0;

    // Combat
    this.monster = null;
    this.currentTurn = 0;
    this.currentRound = 0;

    // Inventory
    // this.currentItemSlot;
    // this.itemSlots = [];
    // Slots 0-9 are player inventory. Slots 10-55 are for gear storage options. See inventory.js for details
    // Initializing it here makes things easier.
    // for (let i = 0; i < 56; i++) {
    //   this.itemSlots.push(new ItemSlot());
    // }

    this.callNext = null;
    this.callOnAbandon = null;
  }
}

export { SaveSlot };
