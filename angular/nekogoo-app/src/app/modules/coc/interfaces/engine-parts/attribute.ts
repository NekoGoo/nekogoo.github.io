// https://wiki.smutosaur.us/CoC/Stats
// https://cocxianxia.fandom.com/wiki/List_of_Stats
// https://ffxiv.consolegameswiki.com/wiki/Attributes

export enum AttributeType {
  Unassigned,
  Primary, // Base/Core: vit/str/dex
  Secondary, // HP, MP
  Tertiary, // Appearance/Body
  Offensive,
  Defensive,
  Sexual,
}

export interface Attribute {
  type: AttributeType;
  title: string;
  value?: number | string | boolean;
  format: string;
  abbr: string;
  description: string;
}
