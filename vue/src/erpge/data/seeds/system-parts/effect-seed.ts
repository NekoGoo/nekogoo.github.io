import { EffectType } from '../../../flags/asset-enums';
import { Effect } from '../../../models/engine-parts/effect';

class EffectSeed {
  readonly data: Effect[];

  constructor() {
    this.data = [
      // Corruption of Champions (perks)

      // --------- PerkTypeContainer --------

      //------------
      // LEVEL UP
      //------------
      new Effect(
        EffectType.Perk,
        'Evade',
        'Evade',
        'Increases chances of evading enemy attacks.',
        "You choose the 'Evade' perk, allowing you to avoid enemy attacks more often!",
      ),
      new Effect(
        EffectType.Perk,
        'Precision',
        'Precision',
        "Reduces enemy armor by 10. (Req's 25+ Intelligence)",
        "You've chosen the 'Precision' perk.  Thanks to your intelligence, you're now more adept at finding and striking an enemy's weak points, reducing their damage resistance from armor by 10.  If your intelligence ever drops below 25 you'll no longer be smart enough to benefit from this perk.",
      ),
      new Effect(
        EffectType.Perk,
        'Runner',
        'Runner',
        'Increases chances of escaping combat.',
        "You choose the 'Runner' perk, increasing your chances to escape from your foes when fleeing!",
      ),
      new Effect(
        EffectType.Perk,
        'Spellpower',
        'Spellpower',
        'Increases base spell strength by 50%.',
        "You choose the 'Spellpower' perk. Thanks to your sizeable intellect and willpower, you are able to more effectively use magic, boosting base spell effects by 50%.",
      ),
      new Effect(EffectType.Perk, 'StrongBack', 'Strong Back', 'Enables fourth item slot.', "You choose the 'Strong Back' perk, enabling a fourth item slot."),
      new Effect(
        EffectType.Perk,
        'Strong Back 2: Strong Harder',
        'StrongBack2',
        'Enables fifth item slot.',
        "You choose the 'Strong Back 2: Strong Harder' perk, enabling a fifth item slot.",
      ),
      new Effect(EffectType.Perk, 'Tank', 'Tank', 'Raises max HP by 50.', "You choose the 'Tank' perk, giving you an additional 50 HP!"),
      new Effect(
        EffectType.Perk,
        'Tank 2',
        'Tank2',
        'Raises max HP by 1 per point of Toughness.',
        "You choose the 'Tank 2' perk, granting an extra maximum HP for each point of toughness.",
      ),
      //------------
      // EQUIPMENT
      //------------
      new Effect(EffectType.Perk, 'Wizard', "Wizard's Focus", "Your wizard's staff grants you additional focus, amplifying the power of your spells."),

      //------------
      // EVENTS
      //------------
      new Effect(
        EffectType.Perk,
        'Controlled Breath',
        'ControlledBreath',
        "Jojo's training allows you to recover more quickly. Increases rate of fatigue regeneration by 10%.",
      ),
      new Effect(
        EffectType.Perk,
        'Cleansing Palm',
        'CleansingPalm',
        "A ranged fighting technique of Jojo's order, allows you to blast your enemies with waves of pure spiritual energy, weakening them and hurting the corrupt.",
      ),
      new Effect(
        EffectType.Perk,
        'Enlightenment',
        'Enlightenment',
        "Jojo's tutelage has given you a master's focus and you can feel the universe in all its glory spread out before you. You've finally surpassed your teacher.",
      ),
      //Marble
      new Effect(EffectType.Perk, "Marble's Milk", 'MarblesMilk', "Add Marble's Milk perk description in perkLib.js"),

      //Ovipositing
      new Effect(EffectType.Perk, 'Bee Ovipositor', 'BeeOvipositor', 'Bee Ovipositor Description to be added.'),
      new Effect(EffectType.Perk, 'Spider Ovipositor', 'SpiderOvipositor', 'Spider Ovipositor Description to be added.'),

      //-----------
      // TRANSFORMATION RELATED
      //-----------
      new Effect(EffectType.Perk, 'Bimbo Brains', 'BimboBrains'),
      new Effect(EffectType.Perk, 'Futa Faculties', 'FutaFac'),
      //Fire Fire!
      new Effect(EffectType.Perk, 'FireLord', 'FireLord'),
      new Effect(EffectType.Perk, 'Hellfire', 'Hellfire'),
      new Effect(EffectType.Perk, 'Dragonfire', 'Dragonfire'),
      new Effect(EffectType.Perk, 'Slime Core', 'SlimeCore'),
      //----------
      // History Perks
      //---------
      new Effect(EffectType.Perk, 'Alchemist History', 'H.Alchemist'),
      new Effect(EffectType.Perk, 'Fighter History', 'H.Fighter'),
      new Effect(EffectType.Perk, 'Healer History', 'H.Healer'),
      new Effect(EffectType.Perk, 'Religious History', 'H.Religious'),
      new Effect(EffectType.Perk, 'Scholar History', 'H.Scholar'),
      new Effect(EffectType.Perk, 'Slut History', 'H.Slut'),
      new Effect(EffectType.Perk, 'Slacker History', 'H.Slacker'),
      new Effect(EffectType.Perk, 'Smith History', 'H.Smith'),
      new Effect(EffectType.Perk, 'Whore History', 'H.Whore'),
      new Effect(EffectType.Perk, 'Fortune History', 'H.Fortune'),
      //----------
      // UNKNOWN
      //---------
      new Effect(EffectType.Perk, 'Misdirection', 'Misdirection'),
      new Effect(EffectType.Perk, 'Flexibility', 'Flexibility'),
      new Effect(EffectType.Perk, 'Arousing Aura', 'ArousingAura'),
      new Effect(EffectType.Perk, 'Minotaur Cum Resistance', 'MinoCumResist'),
      new Effect(EffectType.Perk, 'Minotaur Cum Addict', 'MinoCumAddict'),
      new Effect(EffectType.Perk, 'Masochist', 'Masochist'),
      new Effect(EffectType.Perk, 'Transformation Resistance', 'T.Resist'),
      new Effect(EffectType.Perk, 'Oviposition', 'Oviposit'),
      new Effect(EffectType.Perk, 'Messy Orgasms', 'MessyOrgasms'),
      new Effect(EffectType.Perk, 'MaraesGiftButtslut'),
      new Effect(EffectType.Perk, 'Incorporeality', 'Incorporeality'),
      new Effect(EffectType.Perk, 'Spellcasting Affinity', 'SpellAff'),
      new Effect(EffectType.Perk, 'Harpy Womb', 'HarpyWomb'),
      new Effect(EffectType.Perk, 'Basilisk Womb', 'BaskWomb'),
      new Effect(EffectType.Perk, 'Androgyny', 'Androgyny'),
      new Effect(EffectType.Perk, "Marae's Gift - Stud", 'MaraesGiftStud'),
      new Effect(EffectType.Perk, 'StaffChanneling', 'Staff Channeling'),

      //----------
      // TODO: verify: were called in Creature but not originally defined; seem like Starter Perks
      //---------
      new Effect(EffectType.Perk, 'Ascension Fertility', 'AscensionFertility'),
      new Effect(EffectType.Perk, 'Big Tits', 'BigTits'),
      new Effect(EffectType.Perk, 'Bro Body', 'BroBody'),
      new Effect(EffectType.Perk, 'Cornucopia', 'Cornucopia'),
      new Effect(EffectType.Perk, 'Elven Bounty', 'ElvenBounty'),
      new Effect(EffectType.Perk, 'Feeder', 'Feeder'),
      new Effect(EffectType.Perk, 'Feras Boon Alpha', 'FerasBoonAlpha'),
      new Effect(EffectType.Perk, 'Feras Boon Breeding Bitch', 'FerasBoonBreedingBitch'),
      new Effect(EffectType.Perk, 'Feras Boon Milking Twat', 'FerasBoonMilkingTwat'),
      new Effect(EffectType.Perk, 'Feras Boon Seeder', 'FerasBoonSeeder'),
      new Effect(EffectType.Perk, 'Feras Boon Wide Open', 'FerasBoonWideOpen'),
      new Effect(EffectType.Perk, 'Fertility Minus', 'FertilityMinus'),
      new Effect(EffectType.Perk, 'Fertility Plus', 'FertilityPlus'),
      new Effect(EffectType.Perk, 'Immovable Object', 'ImmovableObject'),
      new Effect(EffectType.Perk, 'Lunging Attacks', 'LungingAttacks'),
      new Effect(EffectType.Perk, 'Lusty Regeneration', 'LustyRegeneration'),
      new Effect(EffectType.Perk, 'Magical Fertility', 'MagicalFertility'),
      new Effect(EffectType.Perk, 'Magical Virility', 'MagicalVirility'),
      new Effect(EffectType.Perk, 'Maraes Gift Fertility', 'MaraesGiftFertility'),
      new Effect(EffectType.Perk, 'Masochist', 'Masochist'),
      new Effect(EffectType.Perk, 'Milk Maid', 'MilkMaid'),
      new Effect(EffectType.Perk, 'One Track Mind', 'OneTrackMind'),
      new Effect(EffectType.Perk, 'Pent Up', 'PentUp'),
      new Effect(EffectType.Perk, 'Pierced Fertite', 'PiercedFertite'),
      new Effect(EffectType.Perk, 'Pilgrims Bounty', 'PilgrimsBounty'),
      new Effect(EffectType.Perk, 'Satyr Sexuality', 'SatyrSexuality'),
      new Effect(EffectType.Perk, 'Wet Pussy', 'WetPussy'),
      new Effect(EffectType.Perk, 'Blood Mage', 'BloodMage'),
      new Effect(EffectType.Perk, 'Speedy Recovery', 'SpeedyRecovery'),
      new Effect(EffectType.Perk, 'Enlightened Ninetails', 'EnlightenedNinetails'),
      new Effect(EffectType.Perk, 'Corrupted Ninetails', 'CorruptedNinetails'),
      // TODO: verify: called in CombatTeases but not originally defined
      new Effect(EffectType.Perk, 'Seduction', 'Seduction'),
      new Effect(EffectType.Perk, 'Slutty Seduction', 'SluttySeduction'),
      new Effect(EffectType.Perk, 'Bimbo Body', 'BimboBody'),
      new Effect(EffectType.Perk, 'Futa Form', 'FutaForm'),
      new Effect(EffectType.Perk, 'Sensual Lover', 'SensualLover'),
      new Effect(EffectType.Perk, 'Brood Mother', 'BroodMother'),
      new Effect(EffectType.Perk, 'Bulge Armor', 'BulgeArmor'),
      new Effect(EffectType.Perk, 'Bro Brains', 'BroBrains'),
      new Effect(EffectType.Perk, 'Big Clit', 'BigClit'),
      new Effect(EffectType.Perk, 'Enlightened', 'Enlightened'),
      new Effect(EffectType.Perk, 'Marble Resistant', 'MarbleResistant'),

      // --------- StatusEffectTypeContainer --------

      //------------
      // NON-COMBAT
      //------------
      //Bonus
      new Effect(EffectType.Status, 'Bonus aCapacity'),
      new Effect(EffectType.Status, 'Bonus vCapacity'),
      new Effect(EffectType.Status, 'Heat'),
      new Effect(EffectType.Status, 'Cunt Stretched'),
      //Penalties
      new Effect(EffectType.Status, 'Infested'),
      new Effect(EffectType.Status, 'Worm Plugged'),
      new Effect(EffectType.Status, 'Dysfunction'),
      new Effect(EffectType.Status, 'Slime Craving'),
      //Neutral
      new Effect(EffectType.Status, 'Feeder'),
      new Effect(EffectType.Status, 'Mean to Naga'),
      new Effect(EffectType.Status, 'Contraceptives'),
      new Effect(EffectType.Status, 'Eggs'),
      new Effect(EffectType.Status, 'Uniball'), //TODO: Check code to see if this would be better as a gameflag
      //------------
      // COMBAT
      //------------
      //Buffs
      new Effect(EffectType.Status, 'ChargeWeapon'),
      new Effect(EffectType.Status, 'Might'),
      new Effect(EffectType.Status, 'Climbed'), // Used in Sand Trap fight
      //Debuffs
      new Effect(EffectType.Status, 'Acid'),
      new Effect(EffectType.Status, 'Blind'),
      new Effect(EffectType.Status, 'Bind'), //Value determines the type
      new Effect(EffectType.Status, 'Confusion'),
      new Effect(EffectType.Status, 'NoFlee'),
      new Effect(EffectType.Status, 'Poison'),
      new Effect(EffectType.Status, 'Silence'),
      new Effect(EffectType.Status, 'StoneLust'),
      new Effect(EffectType.Status, 'Stunned'),
      new Effect(EffectType.Status, 'TempHeat'),
      new Effect(EffectType.Status, 'Venom'),
      new Effect(EffectType.Status, 'ParalyzeVenom'),
      new Effect(EffectType.Status, 'LustVenom'),
      new Effect(EffectType.Status, 'Fertilized'), // Used in SandTrap battles

      //----------
      // TODO: verify: called in Creature but not originally defined
      //---------
      new Effect(EffectType.Status, 'ButtStretched'),
      new Effect(EffectType.Status, 'LactationEndurance'),
      new Effect(EffectType.Status, 'LactationReduction'),
      new Effect(EffectType.Status, 'BlackCatBeer'),
      new Effect(EffectType.Status, 'ImpUber'),
      new Effect(EffectType.Status, 'ImpSkip'),
      new Effect(EffectType.Status, 'LactationReduc0'),
      new Effect(EffectType.Status, 'LactationReduc1'),
      new Effect(EffectType.Status, 'LactationReduc2'),
      new Effect(EffectType.Status, 'LactationReduc3'),
      new Effect(EffectType.Status, 'Rut'),
      new Effect(EffectType.Status, 'Web'),
      new Effect(EffectType.Status, 'BlackNipples'),
      new Effect(EffectType.Status, 'Shielding'),
      new Effect(EffectType.Status, 'HolliConstrict'),
      new Effect(EffectType.Status, 'LustStones'),
      new Effect(EffectType.Status, 'Sandstorm'),
      new Effect(EffectType.Status, 'Sealed'),
      new Effect(EffectType.Status, 'Berzerking'),
      new Effect(EffectType.Status, 'TailWhip'),
      new Effect(EffectType.Status, 'UBERWEB'),
      new Effect(EffectType.Status, 'DriderKiss'),
      new Effect(EffectType.Status, 'WebSilence'),
      new Effect(EffectType.Status, 'GooArmorSilence'),
      new Effect(EffectType.Status, 'Whispered'),
      new Effect(EffectType.Status, 'AkbalSpeed'),
      new Effect(EffectType.Status, 'AmilyVenom'),
      new Effect(EffectType.Status, 'SheilaOil'),
      new Effect(EffectType.Status, 'TwuWuv'),
      new Effect(EffectType.Status, 'TuvWuv'),
      new Effect(EffectType.Status, 'FirstAttack'),
      new Effect(EffectType.Status, 'IsabellaStunned'),
      new Effect(EffectType.Status, 'ThroatPunch'),
      new Effect(EffectType.Status, 'KissOfDeath'),
      new Effect(EffectType.Status, 'AcidSlap'),
      new Effect(EffectType.Status, 'CalledShot'),
      new Effect(EffectType.Status, 'DemonSeed'),
      new Effect(EffectType.Status, 'InfestAttempted'),
      new Effect(EffectType.Status, 'Disarmed'),
      new Effect(EffectType.Status, 'AnemoneVenom'),
      new Effect(EffectType.Status, 'GnollSpear'),
      new Effect(EffectType.Status, 'BasiliskCompulsion'),
      new Effect(EffectType.Status, 'BasiliskSlow'),
      new Effect(EffectType.Status, 'GiantGrabbed'),
      new Effect(EffectType.Status, 'GiantBoulder'),
      new Effect(EffectType.Status, 'GiantStrLoss'),
      new Effect(EffectType.Status, 'LizanBlowpipe'),
      new Effect(EffectType.Status, 'IzmaBleed'),
      new Effect(EffectType.Status, 'GardenerSapSpeed'),
      new Effect(EffectType.Status, 'KnockedBack'),
      new Effect(EffectType.Status, 'RemovedArmor'),
      new Effect(EffectType.Status, 'JCLustLevel'),
      new Effect(EffectType.Status, 'MirroredAttack'),
      new Effect(EffectType.Status, 'Tentagrappled'),
      new Effect(EffectType.Status, 'TentagrappleCooldown'),
      new Effect(EffectType.Status, 'ShowerDotEffect'),
      new Effect(EffectType.Status, 'VineHealUsed'),
      new Effect(EffectType.Status, 'TentacleCoolDown'),
      new Effect(EffectType.Status, 'GooStuffed'),
      new Effect(EffectType.Status, 'NakedOn'),
      new Effect(EffectType.Status, 'Kelt'),
      new Effect(EffectType.Status, 'KeltBJ'),
    ];
  }
}

export { EffectSeed };
