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

export interface Item {
  type: ItemType;
  longName: string;
  shortName: string;
  description: string;
  longDescription: string;
  value: number;
  // Consumable values
  consumeEffect?: string;
  // Equipment values
  equipmentName: string;
  attack: number;
  defense: number;
  sexiness: number;
  verb: string;
}
