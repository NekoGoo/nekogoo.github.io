import { DimensionType, DimensionTypes } from '../space';

export const EffectTypes = {
  Perk: 'perk',
  Status: 'status',
  Consumable: 'consumable',
  Equipment: 'equipment',
} as const;
export type EffectType = typeof EffectTypes[keyof typeof EffectTypes];

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
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Perk,
    description: 'Increases chances of evading enemy attacks.',
    longDescription:
      "You choose the 'Evade' perk, allowing you to avoid enemy attacks more often!",
  },
  {
    id: 'precision',
    title: 'Precision',
    abbreviation: 'Precision',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Perk,
    description: "Reduces enemy armor by 10. (Req's 25+ Intelligence)",
    longDescription:
      "You've chosen the 'Precision' perk.  Thanks to your intelligence, you're now more adept at finding and striking an enemy's weak points, reducing their damage resistance from armor by 10.  If your intelligence ever drops below 25 you'll no longer be smart enough to benefit from this perk.",
  },
  {
    id: 'runner',
    title: 'Runner',
    abbreviation: 'Runner',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Perk,
    description: 'Increases chances of escaping combat.',
    longDescription:
      "You choose the 'Runner' perk, increasing your chances to escape from your foes when fleeing!",
  },
  {
    id: 'spellpower',
    title: 'Spellpower',
    abbreviation: 'Spellpower',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Perk,
    description: 'Increases base spell strength by 50%.',
    longDescription:
      "You choose the 'Spellpower' perk. Thanks to your sizeable intellect and willpower, you are able to more effectively use magic, boosting base spell effects by 50%.",
  },
  {
    id: 'strongback',
    title: 'Strong Back',
    abbreviation: 'StrongBack',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Perk,
    description: 'Enables fourth item slot.',
    longDescription:
      "You choose the 'Strong Back' perk, enabling a fourth item slot.",
  },
  {
    id: 'strongback2',
    title: 'Strong Back 2: Strong Harder',
    abbreviation: 'StrongBack2',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Perk,
    description: 'Enables fifth item slot.',
    longDescription:
      "You choose the 'Strong Back 2: Strong Harder' perk, enabling a fifth item slot.",
  },
  {
    id: 'tank',
    title: 'Tank',
    abbreviation: 'Tank',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Perk,
    description: 'Raises max HP by 50.',
    longDescription:
      "You choose the 'Tank' perk, giving you an additional 50 HP!",
  },
  {
    id: 'tank2',
    title: 'Tank 2',
    abbreviation: 'Tank2',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Perk,
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
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Perk,
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
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Perk,
    description:
      "Jojo's training allows you to recover more quickly. Increases rate of fatigue regeneration by 10%.",
  },
  {
    id: 'cleansing-palm',
    title: 'Cleansing Palm',
    abbreviation: 'CleansingPalm',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Perk,
    description:
      "A ranged fighting technique of Jojo's order, allows you to blast your enemies with waves of pure spiritual energy, weakening them and hurting the corrupt.",
  },
  {
    id: 'enlightenment',
    title: 'Enlightenment',
    abbreviation: 'Enlightenment',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Perk,
    description:
      "Jojo's tutelage has given you a master's focus and you can feel the universe in all its glory spread out before you. You've finally surpassed your teacher.",
  },
  // Marble
  {
    id: 'marbles-milk',
    title: "Marble's Milk",
    abbreviation: 'MarblesMilk',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Perk,
    description: "Add Marble's Milk perk description in perkLib.js",
  },
  // Ovipositing
  {
    id: 'bee-ovipositor',
    title: 'Bee Ovipositor',
    abbreviation: 'BeeOvipositor',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Perk,
    description: 'Bee Ovipositor Description to be added.',
  },
  {
    id: 'spider-ovipositor',
    title: 'Spider Ovipositor',
    abbreviation: 'SpiderOvipositor',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Perk,
    description: 'Spider Ovipositor Description to be added.',
  },

  //-----------
  // TRANSFORMATION RELATED
  //-----------

  {
    id: 'bimbo-brains',
    title: 'Bimbo Brains',
    abbreviation: 'BimboBrains',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Perk,
  },
  {
    id: 'futa-faculties',
    title: 'Futa Faculties',
    abbreviation: 'FutaFac',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Perk,
  },
  // Fire Fire!
  {
    id: 'fire-lord',
    title: 'FireLord',
    abbreviation: 'FireLord',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Perk,
  },
  {
    id: 'hellfire',
    title: 'Hellfire',
    abbreviation: 'Hellfire',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Perk,
  },
  {
    id: 'dragonfire',
    title: 'Dragonfire',
    abbreviation: 'Dragonfire',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Perk,
  },
  {
    id: 'slime-core',
    title: 'Slime Core',
    abbreviation: 'SlimeCore',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Perk,
  },

  //----------
  // History Perks
  //---------

  {
    id: 'alchemist-history',
    title: 'Alchemist History',
    abbreviation: 'H.Alchemist',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Perk,
  },
  {
    id: 'fighter-history',
    title: 'Fighter History',
    abbreviation: 'H.Fighter',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Perk,
  },
  {
    id: 'healer-history',
    title: 'Healer History',
    abbreviation: 'H.Healer',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Perk,
  },
  {
    id: 'religious-history',
    title: 'Religious History',
    abbreviation: 'H.Religious',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Perk,
  },
  {
    id: 'scholar-history',
    title: 'Scholar History',
    abbreviation: 'H.Scholar',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Perk,
  },
  {
    id: 'slut-history',
    title: 'Slut History',
    abbreviation: 'H.Slut',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Perk,
  },
  {
    id: 'slacker-history',
    title: 'Slacker History',
    abbreviation: 'H.Slacker',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Perk,
  },
  {
    id: 'smith-history',
    title: 'Smith History',
    abbreviation: 'H.Smith',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Perk,
  },
  {
    id: 'whore-history',
    title: 'Whore History',
    abbreviation: 'H.Whore',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Perk,
  },
  {
    id: 'fortune-history',
    title: 'Fortune History',
    abbreviation: 'H.Fortune',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Perk,
  },

  //----------
  // UNKNOWN
  //---------

  {
    id: 'misdirection',
    title: 'Misdirection',
    abbreviation: 'Misdirection',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Perk,
  },
  {
    id: 'flexibility',
    title: 'Flexibility',
    abbreviation: 'Flexibility',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Perk,
  },
  {
    id: 'arousing-aura',
    title: 'Arousing Aura',
    abbreviation: 'ArousingAura',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Perk,
  },
  {
    id: 'minotaur-cum-resistance',
    title: 'Minotaur Cum Resistance',
    abbreviation: 'MinoCumResist',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Perk,
  },
  {
    id: 'minotaur-cum-addict',
    title: 'Minotaur Cum Addict',
    abbreviation: 'MinoCumAddict',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Perk,
  },
  {
    id: 'masochist',
    title: 'Masochist',
    abbreviation: 'Masochist',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Perk,
  },
  {
    id: 'transformation-resistance',
    title: 'Transformation Resistance',
    abbreviation: 'T.Resist',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Perk,
  },
  {
    id: 'oviposition',
    title: 'Oviposition',
    abbreviation: 'Oviposit',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Perk,
  },
  {
    id: 'messy-orgasms',
    title: 'Messy Orgasms',
    abbreviation: 'MessyOrgasms',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Perk,
  },
  {
    id: 'maraes-gift-buttslut',
    title: 'MaraesGiftButtslut',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Perk,
  },
  {
    id: 'incorporeality',
    title: 'Incorporeality',
    abbreviation: 'Incorporeality',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Perk,
  },
  {
    id: 'spellcasting-affinity',
    title: 'Spellcasting Affinity',
    abbreviation: 'SpellAff',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Perk,
  },
  {
    id: 'harpy-womb',
    title: 'Harpy Womb',
    abbreviation: 'HarpyWomb',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Perk,
  },
  {
    id: 'basilisk-womb',
    title: 'Basilisk Womb',
    abbreviation: 'BaskWomb',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Perk,
  },
  {
    id: 'androgyny',
    title: 'Androgyny',
    abbreviation: 'Androgyny',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Perk,
  },
  {
    id: 'maraes-gift-stud',
    title: "Marae's Gift - Stud",
    abbreviation: 'MaraesGiftStud',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Perk,
  },
  {
    id: 'staff-channeling',
    title: 'Staff Channeling',
    abbreviation: 'StaffChanneling',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Perk,
  },

  //----------
  // TODO: verify: were called in Creature but not originally defined; seem like Starter Perks
  //---------

  {
    id: 'ascension-fertility',
    title: 'Ascension Fertility',
    abbreviation: 'AscensionFertility',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Perk,
  },
  {
    id: 'big-tits',
    title: 'Big Tits',
    abbreviation: 'BigTits',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Perk,
  },
  {
    id: 'bro-body',
    title: 'Bro Body',
    abbreviation: 'BroBody',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Perk,
  },
  {
    id: 'cornucopia',
    title: 'Cornucopia',
    abbreviation: 'Cornucopia',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Perk,
  },
  {
    id: 'elven-bounty',
    title: 'Elven Bounty',
    abbreviation: 'ElvenBounty',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Perk,
  },
  {
    id: 'feeder',
    title: 'Feeder',
    abbreviation: 'Feeder',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Perk,
  },
  {
    id: 'feras-boon-alpha',
    title: 'Feras Boon Alpha',
    abbreviation: 'FerasBoonAlpha',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Perk,
  },
  {
    id: 'feras-boon-breeding-bitch',
    title: 'Feras Boon Breeding Bitch',
    abbreviation: 'FerasBoonBreedingBitch',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Perk,
  },
  {
    id: 'feras-boon-milking-twat',
    title: 'Feras Boon Milking Twat',
    abbreviation: 'FerasBoonMilkingTwat',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Perk,
  },
  {
    id: 'feras-boon-seeder',
    title: 'Feras Boon Seeder',
    abbreviation: 'FerasBoonSeeder',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Perk,
  },
  {
    id: 'feras-boon-wide-open',
    title: 'Feras Boon Wide Open',
    abbreviation: 'FerasBoonWideOpen',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Perk,
  },
  {
    id: 'fertility-minus',
    title: 'Fertility Minus',
    abbreviation: 'FertilityMinus',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Perk,
  },
  {
    id: 'fertility-plus',
    title: 'Fertility Plus',
    abbreviation: 'FertilityPlus',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Perk,
  },
  {
    id: 'immovable-object',
    title: 'Immovable Object',
    abbreviation: 'ImmovableObject',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Perk,
  },
  {
    id: 'lunging-attacks',
    title: 'Lunging Attacks',
    abbreviation: 'LungingAttacks',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Perk,
  },
  {
    id: 'lusty-regeneration',
    title: 'Lusty Regeneration',
    abbreviation: 'LustyRegeneration',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Perk,
  },
  {
    id: 'magical-fertility',
    title: 'Magical Fertility',
    abbreviation: 'MagicalFertility',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Perk,
  },
  {
    id: 'magical-virility',
    title: 'Magical Virility',
    abbreviation: 'MagicalVirility',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Perk,
  },
  {
    id: 'maraes-gift-fertility',
    title: 'Maraes Gift Fertility',
    abbreviation: 'MaraesGiftFertility',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Perk,
  },
  {
    id: 'masochist',
    title: 'Masochist',
    abbreviation: 'Masochist',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Perk,
  },
  {
    id: 'milk-maid',
    title: 'Milk Maid',
    abbreviation: 'MilkMaid',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Perk,
  },
  {
    id: 'one-track-mind',
    title: 'One Track Mind',
    abbreviation: 'OneTrackMind',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Perk,
  },
  {
    id: 'pent-up',
    title: 'Pent Up',
    abbreviation: 'PentUp',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Perk,
  },
  {
    id: 'pierced-fertite',
    title: 'Pierced Fertite',
    abbreviation: 'PiercedFertite',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Perk,
  },
  {
    id: 'pilgrims-bounty',
    title: 'Pilgrims Bounty',
    abbreviation: 'PilgrimsBounty',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Perk,
  },
  {
    id: 'satyr-sexuality',
    title: 'Satyr Sexuality',
    abbreviation: 'SatyrSexuality',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Perk,
  },
  {
    id: 'wet-pussy',
    title: 'Wet Pussy',
    abbreviation: 'WetPussy',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Perk,
  },
  {
    id: 'blood-mage',
    title: 'Blood Mage',
    abbreviation: 'BloodMage',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Perk,
  },
  {
    id: 'speedy-recovery',
    title: 'Speedy Recovery',
    abbreviation: 'SpeedyRecovery',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Perk,
  },
  {
    id: 'enlightened-ninetails',
    title: 'Enlightened Ninetails',
    abbreviation: 'EnlightenedNinetails',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Perk,
  },
  {
    id: 'corrupted-ninetails',
    title: 'Corrupted Ninetails',
    abbreviation: 'CorruptedNinetails',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Perk,
  },
  // TODO: verify: called in CombatTeases but not originally defined
  {
    id: 'seduction',
    title: 'Seduction',
    abbreviation: 'Seduction',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Perk,
  },
  {
    id: 'slutty-seduction',
    title: 'Slutty Seduction',
    abbreviation: 'SluttySeduction',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Perk,
  },
  {
    id: 'bimbo-body',
    title: 'Bimbo Body',
    abbreviation: 'BimboBody',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Perk,
  },
  {
    id: 'futa-form',
    title: 'Futa Form',
    abbreviation: 'FutaForm',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Perk,
  },
  {
    id: 'sensual-lover',
    title: 'Sensual Lover',
    abbreviation: 'SensualLover',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Perk,
  },
  {
    id: 'brood-mother',
    title: 'Brood Mother',
    abbreviation: 'BroodMother',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Perk,
  },
  {
    id: 'bulge-armor',
    title: 'Bulge Armor',
    abbreviation: 'BulgeArmor',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Perk,
  },
  {
    id: 'bro-brains',
    title: 'Bro Brains',
    abbreviation: 'BroBrains',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Perk,
  },
  {
    id: 'big-clit',
    title: 'Big Clit',
    abbreviation: 'BigClit',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Perk,
  },
  {
    id: 'enlightened',
    title: 'Enlightened',
    abbreviation: 'Enlightened',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Perk,
  },
  {
    id: 'marble-resistant',
    title: 'Marble Resistant',
    abbreviation: 'MarbleResistant',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Perk,
  },

  // --------- StatusEffectTypeContainer --------

  //------------
  // NON-COMBAT
  //------------

  // Bonus
  {
    id: 'bonus-a-capacity',
    title: 'Bonus aCapacity',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Status,
  },
  {
    id: 'bonus-v-capacity',
    title: 'Bonus vCapacity',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Status,
  },
  {
    id: 'heat',
    title: 'Heat',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Status,
  },
  {
    id: 'cunt-stretched',
    title: 'Cunt Stretched',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Status,
  },
  // Penalties
  {
    id: 'infested',
    title: 'Infested',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Status,
  },
  {
    id: 'worm-plugged',
    title: 'Worm Plugged',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Status,
  },
  {
    id: 'dysfunction',
    title: 'Dysfunction',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Status,
  },
  {
    id: 'slime-craving',
    title: 'Slime Craving',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Status,
  },
  // Neutral
  {
    id: 'feeder',
    title: 'Feeder',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Status,
  },
  {
    id: 'mean-to-naga',
    title: 'Mean to Naga',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Status,
  },
  {
    id: 'contraceptives',
    title: 'Contraceptives',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Status,
  },
  {
    id: 'eggs',
    title: 'Eggs',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Status,
  },
  // TODO: Check code to see if this would be better as a gameflag
  {
    id: 'uniball',
    title: 'Uniball',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Status,
  },

  //------------
  // COMBAT
  //------------

  // Buffs
  {
    id: 'charge-weapon',
    title: 'ChargeWeapon',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Status,
  },
  {
    id: 'might',
    title: 'Might',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Status,
  },
  {
    id: 'climbed',
    title: 'Climbed', // Used in Sand Trap fight
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Status,
  },
  // Debuffs
  {
    id: 'acid',
    title: 'Acid',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Status,
  },
  {
    id: 'blind',
    title: 'Blind',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Status,
  },
  {
    id: 'bind',
    title: 'Bind',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Status, // Value determines the type(?)
  },
  {
    id: 'confusion',
    title: 'Confusion',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Status,
  },
  {
    id: 'no-flee',
    title: 'NoFlee',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Status,
  },
  {
    id: 'poison',
    title: 'Poison',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Status,
  },
  {
    id: 'silence',
    title: 'Silence',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Status,
  },
  {
    id: 'stone-lust',
    title: 'StoneLust',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Status,
  },
  {
    id: 'stunned',
    title: 'Stunned',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Status,
  },
  {
    id: 'temp-heat',
    title: 'TempHeat',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Status,
  },
  {
    id: 'venom',
    title: 'Venom',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Status,
  },
  {
    id: 'paralyze-venom',
    title: 'ParalyzeVenom',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Status,
  },
  {
    id: 'lust-venom',
    title: 'LustVenom',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Status,
  },
  {
    id: 'fertilized',
    title: 'Fertilized', // Used in SandTrap battles
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Status,
  },

  //----------
  // TODO: verify: called in Creature but not originally defined
  //---------

  {
    id: 'butt-stretched',
    title: 'ButtStretched',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Status,
  },
  {
    id: 'lactation-endurance',
    title: 'LactationEndurance',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Status,
  },
  {
    id: 'lactation-reduction',
    title: 'LactationReduction',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Status,
  },
  {
    id: 'black-cat-beer',
    title: 'BlackCatBeer',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Status,
  },
  {
    id: 'imp-uber',
    title: 'ImpUber',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Status,
  },
  {
    id: 'imp-skip',
    title: 'ImpSkip',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Status,
  },
  {
    id: 'lactation-reduc-0',
    title: 'LactationReduc0',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Status,
  },
  {
    id: 'lactation-reduc-1',
    title: 'LactationReduc1',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Status,
  },
  {
    id: 'lactation-reduc-2',
    title: 'LactationReduc2',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Status,
  },
  {
    id: 'lactation-reduc-3',
    title: 'LactationReduc3',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Status,
  },
  {
    id: 'rut',
    title: 'Rut',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Status,
  },
  {
    id: 'web',
    title: 'Web',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Status,
  },
  {
    id: 'black-nipples',
    title: 'BlackNipples',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Status,
  },
  {
    id: 'shielding',
    title: 'Shielding',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Status,
  },
  {
    id: 'holli-constrict',
    title: 'HolliConstrict',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Status,
  },
  {
    id: 'lust-stones',
    title: 'LustStones',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Status,
  },
  {
    id: 'sandstorm',
    title: 'Sandstorm',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Status,
  },
  {
    id: 'sealed',
    title: 'Sealed',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Status,
  },
  {
    id: 'berzerking',
    title: 'Berzerking',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Status,
  },
  {
    id: 'tail-whip',
    title: 'TailWhip',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Status,
  },
  {
    id: 'uberweb',
    title: 'UBERWEB',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Status,
  },
  {
    id: 'drider-kiss',
    title: 'DriderKiss',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Status,
  },
  {
    id: 'web-silence',
    title: 'WebSilence',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Status,
  },
  {
    id: 'goo-armor-silence',
    title: 'GooArmorSilence',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Status,
  },
  {
    id: 'whispered',
    title: 'Whispered',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Status,
  },
  {
    id: 'akbal-speed',
    title: 'AkbalSpeed',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Status,
  },
  {
    id: 'amily-venom',
    title: 'AmilyVenom',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Status,
  },
  {
    id: 'sheila-oil',
    title: 'SheilaOil',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Status,
  },
  {
    id: 'twu-wuv',
    title: 'TwuWuv',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Status,
  },
  {
    id: 'tuv-wuv',
    title: 'TuvWuv',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Status,
  },
  {
    id: 'first-attack',
    title: 'FirstAttack',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Status,
  },
  {
    id: 'isabella-stunned',
    title: 'IsabellaStunned',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Status,
  },
  {
    id: 'throat-punch',
    title: 'ThroatPunch',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Status,
  },
  {
    id: 'kiss-of-death',
    title: 'KissOfDeath',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Status,
  },
  {
    id: 'acid-slap',
    title: 'AcidSlap',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Status,
  },
  {
    id: 'called-shot',
    title: 'CalledShot',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Status,
  },
  {
    id: 'demon-seed',
    title: 'DemonSeed',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Status,
  },
  {
    id: 'infest-attempted',
    title: 'InfestAttempted',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Status,
  },
  {
    id: 'disarmed',
    title: 'Disarmed',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Status,
  },
  {
    id: 'anemone-venom',
    title: 'AnemoneVenom',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Status,
  },
  {
    id: 'gnoll-spear',
    title: 'GnollSpear',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Status,
  },
  {
    id: 'basilisk-compulsion',
    title: 'BasiliskCompulsion',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Status,
  },
  {
    id: 'basilisk-slow',
    title: 'BasiliskSlow',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Status,
  },
  {
    id: 'giant-grabbed',
    title: 'GiantGrabbed',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Status,
  },
  {
    id: 'giant-boulder',
    title: 'GiantBoulder',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Status,
  },
  {
    id: 'giant-str-loss',
    title: 'GiantStrLoss',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Status,
  },
  {
    id: 'lizan-blowpipe',
    title: 'LizanBlowpipe',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Status,
  },
  {
    id: 'izma-bleed',
    title: 'IzmaBleed',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Status,
  },
  {
    id: 'gardener-sap-speed',
    title: 'GardenerSapSpeed',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Status,
  },
  {
    id: 'knocked-back',
    title: 'KnockedBack',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Status,
  },
  {
    id: 'removed-armor',
    title: 'RemovedArmor',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Status,
  },
  {
    id: 'jc-lust-level',
    title: 'JCLustLevel',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Status,
  },
  {
    id: 'mirrored-attack',
    title: 'MirroredAttack',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Status,
  },
  {
    id: 'tentagrappled',
    title: 'Tentagrappled',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Status,
  },
  {
    id: 'tentagrapple-cooldown',
    title: 'TentagrappleCooldown',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Status,
  },
  {
    id: 'shower-dot-effect',
    title: 'ShowerDotEffect',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Status,
  },
  {
    id: 'vine-heal-used',
    title: 'VineHealUsed',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Status,
  },
  {
    id: 'tentacle-cooldown',
    title: 'TentacleCooldown',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Status,
  },
  {
    id: 'goo-stuffed',
    title: 'GooStuffed',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Status,
  },
  {
    id: 'naked-on',
    title: 'NakedOn',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Status,
  },
  {
    id: 'kelt',
    title: 'Kelt',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Status,
  },
  {
    id: 'kelt-bj',
    title: 'KeltBJ',
    dimension: DimensionTypes.CoC,
    type: EffectTypes.Status,
  },
];
