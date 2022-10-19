import { DimensionType } from '../dimension';

export enum EffectType {
  Perk,
  Status,
  Consumable,
  Equipment,
}

export interface Effect {
  id: string;
  title: string;
  abbreviation?: string;
  dimension: DimensionType;
  type: EffectType;
  value?: number;
  description?: string;
  longDescription?: string;
}

export const EffectSeed: Effect[] = [
  /**
   * Corruption of Champions (perks)
   */

  // --------- PerkTypeContainer --------

  //------------
  // LEVEL UP
  //------------
  {
    id: 'evade',
    title: 'Evade',
    abbreviation: 'Evade',
    dimension: DimensionType.CoC,
    type: EffectType.Perk,
    description: 'Increases chances of evading enemy attacks.',
    longDescription:
      "You choose the 'Evade' perk, allowing you to avoid enemy attacks more often!",
  },
  {
    id: 'precision',
    title: 'Precision',
    abbreviation: 'Precision',
    dimension: DimensionType.CoC,
    type: EffectType.Perk,
    description: "Reduces enemy armor by 10. (Req's 25+ Intelligence)",
    longDescription:
      "You've chosen the 'Precision' perk.  Thanks to your intelligence, you're now more adept at finding and striking an enemy's weak points, reducing their damage resistance from armor by 10.  If your intelligence ever drops below 25 you'll no longer be smart enough to benefit from this perk.",
  },
  {
    id: 'runner',
    title: 'Runner',
    abbreviation: 'Runner',
    dimension: DimensionType.CoC,
    type: EffectType.Perk,
    description: 'Increases chances of escaping combat.',
    longDescription:
      "You choose the 'Runner' perk, increasing your chances to escape from your foes when fleeing!",
  },
  {
    id: 'spellpower',
    title: 'Spellpower',
    abbreviation: 'Spellpower',
    dimension: DimensionType.CoC,
    type: EffectType.Perk,
    description: 'Increases base spell strength by 50%.',
    longDescription:
      "You choose the 'Spellpower' perk. Thanks to your sizeable intellect and willpower, you are able to more effectively use magic, boosting base spell effects by 50%.",
  },
  {
    id: 'strongback',
    title: 'Strong Back',
    abbreviation: 'StrongBack',
    dimension: DimensionType.CoC,
    type: EffectType.Perk,
    description: 'Enables fourth item slot.',
    longDescription:
      "You choose the 'Strong Back' perk, enabling a fourth item slot.",
  },
  {
    id: 'strongback2',
    title: 'Strong Back 2: Strong Harder',
    abbreviation: 'StrongBack2',
    dimension: DimensionType.CoC,
    type: EffectType.Perk,
    description: 'Enables fifth item slot.',
    longDescription:
      "You choose the 'Strong Back 2: Strong Harder' perk, enabling a fifth item slot.",
  },
  {
    id: 'tank',
    title: 'Tank',
    abbreviation: 'Tank',
    dimension: DimensionType.CoC,
    type: EffectType.Perk,
    description: 'Raises max HP by 50.',
    longDescription:
      "You choose the 'Tank' perk, giving you an additional 50 HP!",
  },
  {
    id: 'tank2',
    title: 'Tank 2',
    abbreviation: 'Tank2',
    dimension: DimensionType.CoC,
    type: EffectType.Perk,
    description: 'Raises max HP by 1 per point of Toughness.',
    longDescription:
      "You choose the 'Tank 2' perk, granting an extra maximum HP for each point of toughness.",
  },

  //------------
  // EQUIPMENT
  //------------

  {
    id: 'wizard',
    title: "Wizard's Focus",
    abbreviation: 'Wizard',
    dimension: DimensionType.CoC,
    type: EffectType.Perk,
    description:
      "Your wizard's staff grants you additional focus, amplifying the power of your spells.",
  },

  //------------
  // EVENTS
  //------------

  {
    id: 'controlled-breath',
    title: 'Controlled Breath',
    abbreviation: 'ControlledBreath',
    dimension: DimensionType.CoC,
    type: EffectType.Perk,
    description:
      "Jojo's training allows you to recover more quickly. Increases rate of fatigue regeneration by 10%.",
  },
  {
    id: 'cleansing-palm',
    title: 'Cleansing Palm',
    abbreviation: 'CleansingPalm',
    dimension: DimensionType.CoC,
    type: EffectType.Perk,
    description:
      "A ranged fighting technique of Jojo's order, allows you to blast your enemies with waves of pure spiritual energy, weakening them and hurting the corrupt.",
  },
  {
    id: 'enlightenment',
    title: 'Enlightenment',
    abbreviation: 'Enlightenment',
    dimension: DimensionType.CoC,
    type: EffectType.Perk,
    description:
      "Jojo's tutelage has given you a master's focus and you can feel the universe in all its glory spread out before you. You've finally surpassed your teacher.",
  },
  // Marble
  {
    id: 'marbles-milk',
    title: "Marble's Milk",
    abbreviation: 'MarblesMilk',
    dimension: DimensionType.CoC,
    type: EffectType.Perk,
    description: "Add Marble's Milk perk description in perkLib.js",
  },
  // Ovipositing
  {
    id: 'bee-ovipositor',
    title: 'Bee Ovipositor',
    abbreviation: 'BeeOvipositor',
    dimension: DimensionType.CoC,
    type: EffectType.Perk,
    description: 'Bee Ovipositor Description to be added.',
  },
  {
    id: 'spider-ovipositor',
    title: 'Spider Ovipositor',
    abbreviation: 'SpiderOvipositor',
    dimension: DimensionType.CoC,
    type: EffectType.Perk,
    description: 'Spider Ovipositor Description to be added.',
  },

  //-----------
  // TRANSFORMATION RELATED
  //-----------

  {
    id: 'bimbo-brains',
    title: 'Bimbo Brains',
    abbreviation: 'BimboBrains',
    dimension: DimensionType.CoC,
    type: EffectType.Perk,
  },
  {
    id: 'futa-faculties',
    title: 'Futa Faculties',
    abbreviation: 'FutaFac',
    dimension: DimensionType.CoC,
    type: EffectType.Perk,
  },
  // Fire Fire!
  {
    id: 'fire-lord',
    title: 'FireLord',
    abbreviation: 'FireLord',
    dimension: DimensionType.CoC,
    type: EffectType.Perk,
  },
  {
    id: 'hellfire',
    title: 'Hellfire',
    abbreviation: 'Hellfire',
    dimension: DimensionType.CoC,
    type: EffectType.Perk,
  },
  {
    id: 'dragonfire',
    title: 'Dragonfire',
    abbreviation: 'Dragonfire',
    dimension: DimensionType.CoC,
    type: EffectType.Perk,
  },
  {
    id: 'slime-core',
    title: 'Slime Core',
    abbreviation: 'SlimeCore',
    dimension: DimensionType.CoC,
    type: EffectType.Perk,
  },

  //----------
  // History Perks
  //---------

  {
    id: 'alchemist-history',
    title: 'Alchemist History',
    abbreviation: 'H.Alchemist',
    dimension: DimensionType.CoC,
    type: EffectType.Perk,
  },
  {
    id: 'fighter-history',
    title: 'Fighter History',
    abbreviation: 'H.Fighter',
    dimension: DimensionType.CoC,
    type: EffectType.Perk,
  },
  {
    id: 'healer-history',
    title: 'Healer History',
    abbreviation: 'H.Healer',
    dimension: DimensionType.CoC,
    type: EffectType.Perk,
  },
  {
    id: 'religious-history',
    title: 'Religious History',
    abbreviation: 'H.Religious',
    dimension: DimensionType.CoC,
    type: EffectType.Perk,
  },
  {
    id: 'scholar-history',
    title: 'Scholar History',
    abbreviation: 'H.Scholar',
    dimension: DimensionType.CoC,
    type: EffectType.Perk,
  },
  {
    id: 'slut-history',
    title: 'Slut History',
    abbreviation: 'H.Slut',
    dimension: DimensionType.CoC,
    type: EffectType.Perk,
  },
  {
    id: 'slacker-history',
    title: 'Slacker History',
    abbreviation: 'H.Slacker',
    dimension: DimensionType.CoC,
    type: EffectType.Perk,
  },
  {
    id: 'smith-history',
    title: 'Smith History',
    abbreviation: 'H.Smith',
    dimension: DimensionType.CoC,
    type: EffectType.Perk,
  },
  {
    id: 'whore-history',
    title: 'Whore History',
    abbreviation: 'H.Whore',
    dimension: DimensionType.CoC,
    type: EffectType.Perk,
  },
  {
    id: 'fortune-history',
    title: 'Fortune History',
    abbreviation: 'H.Fortune',
    dimension: DimensionType.CoC,
    type: EffectType.Perk,
  },

  //----------
  // UNKNOWN
  //---------

  {
    id: 'misdirection',
    title: 'Misdirection',
    abbreviation: 'Misdirection',
    dimension: DimensionType.CoC,
    type: EffectType.Perk,
  },
  {
    id: 'flexibility',
    title: 'Flexibility',
    abbreviation: 'Flexibility',
    dimension: DimensionType.CoC,
    type: EffectType.Perk,
  },
  {
    id: 'arousing-aura',
    title: 'Arousing Aura',
    abbreviation: 'ArousingAura',
    dimension: DimensionType.CoC,
    type: EffectType.Perk,
  },
  {
    id: 'minotaur-cum-resistance',
    title: 'Minotaur Cum Resistance',
    abbreviation: 'MinoCumResist',
    dimension: DimensionType.CoC,
    type: EffectType.Perk,
  },
  {
    id: 'minotaur-cum-addict',
    title: 'Minotaur Cum Addict',
    abbreviation: 'MinoCumAddict',
    dimension: DimensionType.CoC,
    type: EffectType.Perk,
  },
  {
    id: 'masochist',
    title: 'Masochist',
    abbreviation: 'Masochist',
    dimension: DimensionType.CoC,
    type: EffectType.Perk,
  },
  {
    id: 'transformation-resistance',
    title: 'Transformation Resistance',
    abbreviation: 'T.Resist',
    dimension: DimensionType.CoC,
    type: EffectType.Perk,
  },
  {
    id: 'oviposition',
    title: 'Oviposition',
    abbreviation: 'Oviposit',
    dimension: DimensionType.CoC,
    type: EffectType.Perk,
  },
  {
    id: 'messy-orgasms',
    title: 'Messy Orgasms',
    abbreviation: 'MessyOrgasms',
    dimension: DimensionType.CoC,
    type: EffectType.Perk,
  },
  {
    id: 'maraes-gift-buttslut',
    title: 'MaraesGiftButtslut',
    dimension: DimensionType.CoC,
    type: EffectType.Perk,
  },
  {
    id: 'incorporeality',
    title: 'Incorporeality',
    abbreviation: 'Incorporeality',
    dimension: DimensionType.CoC,
    type: EffectType.Perk,
  },
  {
    id: 'spellcasting-affinity',
    title: 'Spellcasting Affinity',
    abbreviation: 'SpellAff',
    dimension: DimensionType.CoC,
    type: EffectType.Perk,
  },
  {
    id: 'harpy-womb',
    title: 'Harpy Womb',
    abbreviation: 'HarpyWomb',
    dimension: DimensionType.CoC,
    type: EffectType.Perk,
  },
  {
    id: 'basilisk-womb',
    title: 'Basilisk Womb',
    abbreviation: 'BaskWomb',
    dimension: DimensionType.CoC,
    type: EffectType.Perk,
  },
  {
    id: 'androgyny',
    title: 'Androgyny',
    abbreviation: 'Androgyny',
    dimension: DimensionType.CoC,
    type: EffectType.Perk,
  },
  {
    id: 'maraes-gift-stud',
    title: "Marae's Gift - Stud",
    abbreviation: 'MaraesGiftStud',
    dimension: DimensionType.CoC,
    type: EffectType.Perk,
  },
  {
    id: 'staff-channeling',
    title: 'Staff Channeling',
    abbreviation: 'StaffChanneling',
    dimension: DimensionType.CoC,
    type: EffectType.Perk,
  },

  //----------
  // TODO: verify: were called in Creature but not originally defined; seem like Starter Perks
  //---------

  {
    id: 'ascension-fertility',
    title: 'Ascension Fertility',
    abbreviation: 'AscensionFertility',
    dimension: DimensionType.CoC,
    type: EffectType.Perk,
  },
  {
    id: 'big-tits',
    title: 'Big Tits',
    abbreviation: 'BigTits',
    dimension: DimensionType.CoC,
    type: EffectType.Perk,
  },
  {
    id: 'bro-body',
    title: 'Bro Body',
    abbreviation: 'BroBody',
    dimension: DimensionType.CoC,
    type: EffectType.Perk,
  },
  {
    id: 'cornucopia',
    title: 'Cornucopia',
    abbreviation: 'Cornucopia',
    dimension: DimensionType.CoC,
    type: EffectType.Perk,
  },
  {
    id: 'elven-bounty',
    title: 'Elven Bounty',
    abbreviation: 'ElvenBounty',
    dimension: DimensionType.CoC,
    type: EffectType.Perk,
  },
  {
    id: 'feeder',
    title: 'Feeder',
    abbreviation: 'Feeder',
    dimension: DimensionType.CoC,
    type: EffectType.Perk,
  },
  {
    id: 'feras-boon-alpha',
    title: 'Feras Boon Alpha',
    abbreviation: 'FerasBoonAlpha',
    dimension: DimensionType.CoC,
    type: EffectType.Perk,
  },
  {
    id: 'feras-boon-breeding-bitch',
    title: 'Feras Boon Breeding Bitch',
    abbreviation: 'FerasBoonBreedingBitch',
    dimension: DimensionType.CoC,
    type: EffectType.Perk,
  },
  {
    id: 'feras-boon-milking-twat',
    title: 'Feras Boon Milking Twat',
    abbreviation: 'FerasBoonMilkingTwat',
    dimension: DimensionType.CoC,
    type: EffectType.Perk,
  },
  {
    id: 'feras-boon-seeder',
    title: 'Feras Boon Seeder',
    abbreviation: 'FerasBoonSeeder',
    dimension: DimensionType.CoC,
    type: EffectType.Perk,
  },
  {
    id: 'feras-boon-wide-open',
    title: 'Feras Boon Wide Open',
    abbreviation: 'FerasBoonWideOpen',
    dimension: DimensionType.CoC,
    type: EffectType.Perk,
  },
  {
    id: 'fertility-minus',
    title: 'Fertility Minus',
    abbreviation: 'FertilityMinus',
    dimension: DimensionType.CoC,
    type: EffectType.Perk,
  },
  {
    id: 'fertility-plus',
    title: 'Fertility Plus',
    abbreviation: 'FertilityPlus',
    dimension: DimensionType.CoC,
    type: EffectType.Perk,
  },
  {
    id: 'immovable-object',
    title: 'Immovable Object',
    abbreviation: 'ImmovableObject',
    dimension: DimensionType.CoC,
    type: EffectType.Perk,
  },
  {
    id: 'lunging-attacks',
    title: 'Lunging Attacks',
    abbreviation: 'LungingAttacks',
    dimension: DimensionType.CoC,
    type: EffectType.Perk,
  },
  {
    id: 'lusty-regeneration',
    title: 'Lusty Regeneration',
    abbreviation: 'LustyRegeneration',
    dimension: DimensionType.CoC,
    type: EffectType.Perk,
  },
  {
    id: 'magical-fertility',
    title: 'Magical Fertility',
    abbreviation: 'MagicalFertility',
    dimension: DimensionType.CoC,
    type: EffectType.Perk,
  },
  {
    id: 'magical-virility',
    title: 'Magical Virility',
    abbreviation: 'MagicalVirility',
    dimension: DimensionType.CoC,
    type: EffectType.Perk,
  },
  {
    id: 'maraes-gift-fertility',
    title: 'Maraes Gift Fertility',
    abbreviation: 'MaraesGiftFertility',
    dimension: DimensionType.CoC,
    type: EffectType.Perk,
  },
  {
    id: 'masochist',
    title: 'Masochist',
    abbreviation: 'Masochist',
    dimension: DimensionType.CoC,
    type: EffectType.Perk,
  },
  {
    id: 'milk-maid',
    title: 'Milk Maid',
    abbreviation: 'MilkMaid',
    dimension: DimensionType.CoC,
    type: EffectType.Perk,
  },
  {
    id: 'one-track-mind',
    title: 'One Track Mind',
    abbreviation: 'OneTrackMind',
    dimension: DimensionType.CoC,
    type: EffectType.Perk,
  },
  {
    id: 'pent-up',
    title: 'Pent Up',
    abbreviation: 'PentUp',
    dimension: DimensionType.CoC,
    type: EffectType.Perk,
  },
  {
    id: 'pierced-fertite',
    title: 'Pierced Fertite',
    abbreviation: 'PiercedFertite',
    dimension: DimensionType.CoC,
    type: EffectType.Perk,
  },
  {
    id: 'pilgrims-bounty',
    title: 'Pilgrims Bounty',
    abbreviation: 'PilgrimsBounty',
    dimension: DimensionType.CoC,
    type: EffectType.Perk,
  },
  {
    id: 'satyr-sexuality',
    title: 'Satyr Sexuality',
    abbreviation: 'SatyrSexuality',
    dimension: DimensionType.CoC,
    type: EffectType.Perk,
  },
  {
    id: 'wet-pussy',
    title: 'Wet Pussy',
    abbreviation: 'WetPussy',
    dimension: DimensionType.CoC,
    type: EffectType.Perk,
  },
  {
    id: 'blood-mage',
    title: 'Blood Mage',
    abbreviation: 'BloodMage',
    dimension: DimensionType.CoC,
    type: EffectType.Perk,
  },
  {
    id: 'speedy-recovery',
    title: 'Speedy Recovery',
    abbreviation: 'SpeedyRecovery',
    dimension: DimensionType.CoC,
    type: EffectType.Perk,
  },
  {
    id: 'enlightened-ninetails',
    title: 'Enlightened Ninetails',
    abbreviation: 'EnlightenedNinetails',
    dimension: DimensionType.CoC,
    type: EffectType.Perk,
  },
  {
    id: 'corrupted-ninetails',
    title: 'Corrupted Ninetails',
    abbreviation: 'CorruptedNinetails',
    dimension: DimensionType.CoC,
    type: EffectType.Perk,
  },
  // TODO: verify: called in CombatTeases but not originally defined
  {
    id: 'seduction',
    title: 'Seduction',
    abbreviation: 'Seduction',
    dimension: DimensionType.CoC,
    type: EffectType.Perk,
  },
  {
    id: 'slutty-seduction',
    title: 'Slutty Seduction',
    abbreviation: 'SluttySeduction',
    dimension: DimensionType.CoC,
    type: EffectType.Perk,
  },
  {
    id: 'bimbo-body',
    title: 'Bimbo Body',
    abbreviation: 'BimboBody',
    dimension: DimensionType.CoC,
    type: EffectType.Perk,
  },
  {
    id: 'futa-form',
    title: 'Futa Form',
    abbreviation: 'FutaForm',
    dimension: DimensionType.CoC,
    type: EffectType.Perk,
  },
  {
    id: 'sensual-lover',
    title: 'Sensual Lover',
    abbreviation: 'SensualLover',
    dimension: DimensionType.CoC,
    type: EffectType.Perk,
  },
  {
    id: 'brood-mother',
    title: 'Brood Mother',
    abbreviation: 'BroodMother',
    dimension: DimensionType.CoC,
    type: EffectType.Perk,
  },
  {
    id: 'bulge-armor',
    title: 'Bulge Armor',
    abbreviation: 'BulgeArmor',
    dimension: DimensionType.CoC,
    type: EffectType.Perk,
  },
  {
    id: 'bro-brains',
    title: 'Bro Brains',
    abbreviation: 'BroBrains',
    dimension: DimensionType.CoC,
    type: EffectType.Perk,
  },
  {
    id: 'big-clit',
    title: 'Big Clit',
    abbreviation: 'BigClit',
    dimension: DimensionType.CoC,
    type: EffectType.Perk,
  },
  {
    id: 'enlightened',
    title: 'Enlightened',
    abbreviation: 'Enlightened',
    dimension: DimensionType.CoC,
    type: EffectType.Perk,
  },
  {
    id: 'marble-resistant',
    title: 'Marble Resistant',
    abbreviation: 'MarbleResistant',
    dimension: DimensionType.CoC,
    type: EffectType.Perk,
  },

  // --------- StatusEffectTypeContainer --------

  //------------
  // NON-COMBAT
  //------------

  // Bonus
  {
    id: 'bonus-a-capacity',
    title: 'Bonus aCapacity',
    dimension: DimensionType.CoC,
    type: EffectType.Status,
  },
  {
    id: 'bonus-v-capacity',
    title: 'Bonus vCapacity',
    dimension: DimensionType.CoC,
    type: EffectType.Status,
  },
  {
    id: 'heat',
    title: 'Heat',
    dimension: DimensionType.CoC,
    type: EffectType.Status,
  },
  {
    id: 'cunt-stretched',
    title: 'Cunt Stretched',
    dimension: DimensionType.CoC,
    type: EffectType.Status,
  },
  // Penalties
  {
    id: 'infested',
    title: 'Infested',
    dimension: DimensionType.CoC,
    type: EffectType.Status,
  },
  {
    id: 'worm-plugged',
    title: 'Worm Plugged',
    dimension: DimensionType.CoC,
    type: EffectType.Status,
  },
  {
    id: 'dysfunction',
    title: 'Dysfunction',
    dimension: DimensionType.CoC,
    type: EffectType.Status,
  },
  {
    id: 'slime-craving',
    title: 'Slime Craving',
    dimension: DimensionType.CoC,
    type: EffectType.Status,
  },
  // Neutral
  {
    id: 'feeder',
    title: 'Feeder',
    dimension: DimensionType.CoC,
    type: EffectType.Status,
  },
  {
    id: 'mean-to-naga',
    title: 'Mean to Naga',
    dimension: DimensionType.CoC,
    type: EffectType.Status,
  },
  {
    id: 'contraceptives',
    title: 'Contraceptives',
    dimension: DimensionType.CoC,
    type: EffectType.Status,
  },
  {
    id: 'eggs',
    title: 'Eggs',
    dimension: DimensionType.CoC,
    type: EffectType.Status,
  },
  // TODO: Check code to see if this would be better as a gameflag
  {
    id: 'uniball',
    title: 'Uniball',
    dimension: DimensionType.CoC,
    type: EffectType.Status,
  },

  //------------
  // COMBAT
  //------------

  // Buffs
  {
    id: 'charge-weapon',
    title: 'ChargeWeapon',
    dimension: DimensionType.CoC,
    type: EffectType.Status,
  },
  {
    id: 'might',
    title: 'Might',
    dimension: DimensionType.CoC,
    type: EffectType.Status,
  },
  {
    id: 'climbed',
    title: 'Climbed', // Used in Sand Trap fight
    dimension: DimensionType.CoC,
    type: EffectType.Status,
  },
  // Debuffs
  {
    id: 'acid',
    title: 'Acid',
    dimension: DimensionType.CoC,
    type: EffectType.Status,
  },
  {
    id: 'blind',
    title: 'Blind',
    dimension: DimensionType.CoC,
    type: EffectType.Status,
  },
  {
    id: 'bind',
    title: 'Bind',
    dimension: DimensionType.CoC,
    type: EffectType.Status, // Value determines the type(?)
  },
  {
    id: 'confusion',
    title: 'Confusion',
    dimension: DimensionType.CoC,
    type: EffectType.Status,
  },
  {
    id: 'no-flee',
    title: 'NoFlee',
    dimension: DimensionType.CoC,
    type: EffectType.Status,
  },
  {
    id: 'poison',
    title: 'Poison',
    dimension: DimensionType.CoC,
    type: EffectType.Status,
  },
  {
    id: 'silence',
    title: 'Silence',
    dimension: DimensionType.CoC,
    type: EffectType.Status,
  },
  {
    id: 'stone-lust',
    title: 'StoneLust',
    dimension: DimensionType.CoC,
    type: EffectType.Status,
  },
  {
    id: 'stunned',
    title: 'Stunned',
    dimension: DimensionType.CoC,
    type: EffectType.Status,
  },
  {
    id: 'temp-heat',
    title: 'TempHeat',
    dimension: DimensionType.CoC,
    type: EffectType.Status,
  },
  {
    id: 'venom',
    title: 'Venom',
    dimension: DimensionType.CoC,
    type: EffectType.Status,
  },
  {
    id: 'paralyze-venom',
    title: 'ParalyzeVenom',
    dimension: DimensionType.CoC,
    type: EffectType.Status,
  },
  {
    id: 'lust-venom',
    title: 'LustVenom',
    dimension: DimensionType.CoC,
    type: EffectType.Status,
  },
  {
    id: 'fertilized',
    title: 'Fertilized', // Used in SandTrap battles
    dimension: DimensionType.CoC,
    type: EffectType.Status,
  },

  //----------
  // TODO: verify: called in Creature but not originally defined
  //---------

  {
    id: 'butt-stretched',
    title: 'ButtStretched',
    dimension: DimensionType.CoC,
    type: EffectType.Status,
  },
  {
    id: 'lactation-endurance',
    title: 'LactationEndurance',
    dimension: DimensionType.CoC,
    type: EffectType.Status,
  },
  {
    id: 'lactation-reduction',
    title: 'LactationReduction',
    dimension: DimensionType.CoC,
    type: EffectType.Status,
  },
  {
    id: 'black-cat-beer',
    title: 'BlackCatBeer',
    dimension: DimensionType.CoC,
    type: EffectType.Status,
  },
  {
    id: 'imp-uber',
    title: 'ImpUber',
    dimension: DimensionType.CoC,
    type: EffectType.Status,
  },
  {
    id: 'imp-skip',
    title: 'ImpSkip',
    dimension: DimensionType.CoC,
    type: EffectType.Status,
  },
  {
    id: 'lactation-reduc-0',
    title: 'LactationReduc0',
    dimension: DimensionType.CoC,
    type: EffectType.Status,
  },
  {
    id: 'lactation-reduc-1',
    title: 'LactationReduc1',
    dimension: DimensionType.CoC,
    type: EffectType.Status,
  },
  {
    id: 'lactation-reduc-2',
    title: 'LactationReduc2',
    dimension: DimensionType.CoC,
    type: EffectType.Status,
  },
  {
    id: 'lactation-reduc-3',
    title: 'LactationReduc3',
    dimension: DimensionType.CoC,
    type: EffectType.Status,
  },
  {
    id: 'rut',
    title: 'Rut',
    dimension: DimensionType.CoC,
    type: EffectType.Status,
  },
  {
    id: 'web',
    title: 'Web',
    dimension: DimensionType.CoC,
    type: EffectType.Status,
  },
  {
    id: 'black-nipples',
    title: 'BlackNipples',
    dimension: DimensionType.CoC,
    type: EffectType.Status,
  },
  {
    id: 'shielding',
    title: 'Shielding',
    dimension: DimensionType.CoC,
    type: EffectType.Status,
  },
  {
    id: 'holli-constrict',
    title: 'HolliConstrict',
    dimension: DimensionType.CoC,
    type: EffectType.Status,
  },
  {
    id: 'lust-stones',
    title: 'LustStones',
    dimension: DimensionType.CoC,
    type: EffectType.Status,
  },
  {
    id: 'sandstorm',
    title: 'Sandstorm',
    dimension: DimensionType.CoC,
    type: EffectType.Status,
  },
  {
    id: 'sealed',
    title: 'Sealed',
    dimension: DimensionType.CoC,
    type: EffectType.Status,
  },
  {
    id: 'berzerking',
    title: 'Berzerking',
    dimension: DimensionType.CoC,
    type: EffectType.Status,
  },
  {
    id: 'tail-whip',
    title: 'TailWhip',
    dimension: DimensionType.CoC,
    type: EffectType.Status,
  },
  {
    id: 'uberweb',
    title: 'UBERWEB',
    dimension: DimensionType.CoC,
    type: EffectType.Status,
  },
  {
    id: 'drider-kiss',
    title: 'DriderKiss',
    dimension: DimensionType.CoC,
    type: EffectType.Status,
  },
  {
    id: 'web-silence',
    title: 'WebSilence',
    dimension: DimensionType.CoC,
    type: EffectType.Status,
  },
  {
    id: 'goo-armor-silence',
    title: 'GooArmorSilence',
    dimension: DimensionType.CoC,
    type: EffectType.Status,
  },
  {
    id: 'whispered',
    title: 'Whispered',
    dimension: DimensionType.CoC,
    type: EffectType.Status,
  },
  {
    id: 'akbal-speed',
    title: 'AkbalSpeed',
    dimension: DimensionType.CoC,
    type: EffectType.Status,
  },
  {
    id: 'amily-venom',
    title: 'AmilyVenom',
    dimension: DimensionType.CoC,
    type: EffectType.Status,
  },
  {
    id: 'sheila-oil',
    title: 'SheilaOil',
    dimension: DimensionType.CoC,
    type: EffectType.Status,
  },
  {
    id: 'twu-wuv',
    title: 'TwuWuv',
    dimension: DimensionType.CoC,
    type: EffectType.Status,
  },
  {
    id: 'tuv-wuv',
    title: 'TuvWuv',
    dimension: DimensionType.CoC,
    type: EffectType.Status,
  },
  {
    id: 'first-attack',
    title: 'FirstAttack',
    dimension: DimensionType.CoC,
    type: EffectType.Status,
  },
  {
    id: 'isabella-stunned',
    title: 'IsabellaStunned',
    dimension: DimensionType.CoC,
    type: EffectType.Status,
  },
  {
    id: 'throat-punch',
    title: 'ThroatPunch',
    dimension: DimensionType.CoC,
    type: EffectType.Status,
  },
  {
    id: 'kiss-of-death',
    title: 'KissOfDeath',
    dimension: DimensionType.CoC,
    type: EffectType.Status,
  },
  {
    id: 'acid-slap',
    title: 'AcidSlap',
    dimension: DimensionType.CoC,
    type: EffectType.Status,
  },
  {
    id: 'called-shot',
    title: 'CalledShot',
    dimension: DimensionType.CoC,
    type: EffectType.Status,
  },
  {
    id: 'demon-seed',
    title: 'DemonSeed',
    dimension: DimensionType.CoC,
    type: EffectType.Status,
  },
  {
    id: 'infest-attempted',
    title: 'InfestAttempted',
    dimension: DimensionType.CoC,
    type: EffectType.Status,
  },
  {
    id: 'disarmed',
    title: 'Disarmed',
    dimension: DimensionType.CoC,
    type: EffectType.Status,
  },
  {
    id: 'anemone-venom',
    title: 'AnemoneVenom',
    dimension: DimensionType.CoC,
    type: EffectType.Status,
  },
  {
    id: 'gnoll-spear',
    title: 'GnollSpear',
    dimension: DimensionType.CoC,
    type: EffectType.Status,
  },
  {
    id: 'basilisk-compulsion',
    title: 'BasiliskCompulsion',
    dimension: DimensionType.CoC,
    type: EffectType.Status,
  },
  {
    id: 'basilisk-slow',
    title: 'BasiliskSlow',
    dimension: DimensionType.CoC,
    type: EffectType.Status,
  },
  {
    id: 'giant-grabbed',
    title: 'GiantGrabbed',
    dimension: DimensionType.CoC,
    type: EffectType.Status,
  },
  {
    id: 'giant-boulder',
    title: 'GiantBoulder',
    dimension: DimensionType.CoC,
    type: EffectType.Status,
  },
  {
    id: 'giant-str-loss',
    title: 'GiantStrLoss',
    dimension: DimensionType.CoC,
    type: EffectType.Status,
  },
  {
    id: 'lizan-blowpipe',
    title: 'LizanBlowpipe',
    dimension: DimensionType.CoC,
    type: EffectType.Status,
  },
  {
    id: 'izma-bleed',
    title: 'IzmaBleed',
    dimension: DimensionType.CoC,
    type: EffectType.Status,
  },
  {
    id: 'gardener-sap-speed',
    title: 'GardenerSapSpeed',
    dimension: DimensionType.CoC,
    type: EffectType.Status,
  },
  {
    id: 'knocked-back',
    title: 'KnockedBack',
    dimension: DimensionType.CoC,
    type: EffectType.Status,
  },
  {
    id: 'removed-armor',
    title: 'RemovedArmor',
    dimension: DimensionType.CoC,
    type: EffectType.Status,
  },
  {
    id: 'jc-lust-level',
    title: 'JCLustLevel',
    dimension: DimensionType.CoC,
    type: EffectType.Status,
  },
  {
    id: 'mirrored-attack',
    title: 'MirroredAttack',
    dimension: DimensionType.CoC,
    type: EffectType.Status,
  },
  {
    id: 'tentagrappled',
    title: 'Tentagrappled',
    dimension: DimensionType.CoC,
    type: EffectType.Status,
  },
  {
    id: 'tentagrapple-cooldown',
    title: 'TentagrappleCooldown',
    dimension: DimensionType.CoC,
    type: EffectType.Status,
  },
  {
    id: 'shower-dot-effect',
    title: 'ShowerDotEffect',
    dimension: DimensionType.CoC,
    type: EffectType.Status,
  },
  {
    id: 'vine-heal-used',
    title: 'VineHealUsed',
    dimension: DimensionType.CoC,
    type: EffectType.Status,
  },
  {
    id: 'tentacle-cooldown',
    title: 'TentacleCooldown',
    dimension: DimensionType.CoC,
    type: EffectType.Status,
  },
  {
    id: 'goo-stuffed',
    title: 'GooStuffed',
    dimension: DimensionType.CoC,
    type: EffectType.Status,
  },
  {
    id: 'naked-on',
    title: 'NakedOn',
    dimension: DimensionType.CoC,
    type: EffectType.Status,
  },
  {
    id: 'kelt',
    title: 'Kelt',
    dimension: DimensionType.CoC,
    type: EffectType.Status,
  },
  {
    id: 'kelt-bj',
    title: 'KeltBJ',
    dimension: DimensionType.CoC,
    type: EffectType.Status,
  },
];
