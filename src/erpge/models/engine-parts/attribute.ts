import { AttributeType } from '../../flags/asset-enums';

// https://wiki.smutosaur.us/CoC/Stats
// https://cocxianxia.fandom.com/wiki/List_of_Stats
// https://ffxiv.consolegameswiki.com/wiki/Attributes

class Attribute {
  type: AttributeType;
  title: string;
  value: number | string | boolean | null;
  format: string;
  abbr: string;
  description: string;

  constructor(type: AttributeType, title: string, value: number | string | boolean, abbr = '', description = '') {
    this.type = type;
    this.title = title;
    this.value = value;
    this.format = typeof value;
    this.abbr = abbr;
    this.description = description;
  }
}

export { Attribute };
