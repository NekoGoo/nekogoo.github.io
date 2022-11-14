export const ItemTypes = {
  None: 0,
  Weapon: 1,
  Armor: 2,
  Key: 3,
  Consumable: 4,
  Material: 5,
  Undergarment: 6,
  Shield: 7,
} as const;
export type ItemType = typeof ItemTypes[keyof typeof ItemTypes];

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
