export enum ItemType {
  None,
  Weapon,
  Armor,
  Key,
  Consumable,
  Material,
  Undergarment,
  Shield,
}

export class Item {
  type: ItemType;
  longName: string;
  shortName: string;
  description: string;
  longDescription: string;
  value: number;
  // Consumable values
  consumeEffect: (() => void) | null;
  // Equipment values
  equipmentName: string;
  attack: number;
  defense: number;
  sexiness: number;
  verb: string;

  constructor(
    itemType: ItemType,
    longName: string,
    shortName = '',
    description = '',
    longDescription = '',
    value = 0,
    consumeEffect = null,
  ) {
    this.type = itemType;
    this.longName = longName;
    this.shortName = shortName;
    this.description = description; // in-game tooltip
    this.longDescription = longDescription;
    this.value = value; // gems=6
    // Consumable values
    this.consumeEffect = consumeEffect;
    // Equipment values
    this.equipmentName = '';
    this.attack = 0;
    this.defense = 0;
    this.sexiness = 0;
    this.verb = '';
  }
}
