enum AttributeType {
  Unassigned,
  Primary, // Base/Core: vit/str/dex
  Secondary, // HP, MP
  Tertiary, // Appearance/Body
  Offensive,
  Defensive,
  Sexual,
}

enum EffectType {
  None,
  Perk,
  Status,
  Consumable,
  Equipment,
}

// Represents tag groups
enum TagType {
  Unassigned,
  Attribute,
  Effect,
  Character,
  Species,
  Item,
  Location,
  Moment,
  Relationship,
  Skill,
  Story,
}

enum CharacterType {
  Unassigned,
  Creature,
  Player,
}

enum ItemType {
  None,
  Weapon,
  Armor,
  Key,
  Consumable,
  Material,
  Undergarment,
  Shield,
}

enum LocationType {
  Void,
  Camp,
  Zone,
  Area,
  Town,
  Shop,
}

enum SkillType {
  Unassigned,
  Ability,
  Spell,
  Weaponskill,
}

enum MomentType {
  Unassigned,
  Intro,
  Camp,
  Encounter,
  Shop,
}

// --------- COMBAT --------

enum BindType {
  BIND_TYPE_GOO = 0,
  BIND_TYPE_NAGA,
  BIND_TYPE_TENTACLE,
}

enum VenomType {
  VENOM_TYPE_BEE = 0,
  VENOM_TYPE_NAGA,
}

// export * from './appearanceEnums';
// export * from './pregFlags';
export { AttributeType, EffectType, TagType, CharacterType, ItemType, LocationType, SkillType, MomentType, BindType, VenomType };
