import { ItemType } from '../flags/asset-enums';

class Item {
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

  constructor(itemType: ItemType, longName: string, shortName = '', description = '', longDescription = '', value = 0, consumeEffect = null) {
    this.type = itemType;
    this.longName = longName;
    this.shortName = shortName;
    this.description = description; // in-game tooltip
    this.longDescription = longDescription;
    this.value = value; // gems=6
    //Consumable values
    this.consumeEffect = consumeEffect;
    //Equipment values
    this.equipmentName = '';
    this.attack = 0;
    this.defense = 0;
    this.sexiness = 0;
    this.verb = '';
  }
}

function HairDye(dyeId: string, dyeColor: string) {
  const item = new Item(
    ItemType.Consumable,
    dyeId,
    dyeColor + ' Dye',
    'a vial of ' + dyeColor + ' hair dye',
    "This bottle of dye will allow you to change the color of your hair. Of course if you don't have hair, using this would be a waste.",
  );
  // item.consumeEffect = UTIL.createCallBackFunction(ConsumableEffects.hairDye, dyeColor.toLowerCase());
  return item;
}

function SkinOil(oilId: string, oilColor: string) {
  const item = new Item(
    ItemType.Consumable,
    oilId,
    oilColor + ' Oil',
    'a bottle of ' + oilColor + ' oil',
    'A small glass bottle filled with a smooth clear liquid. A label across the front says, "' + oilColor + ' Skin Oil."',
  );
  // item.consumeEffect = UTIL.createCallBackFunction(ConsumableEffects.skinOil, oilColor.toLowerCase());
  return item;
}

function BodyLotion(lotionId: string, lotionType: string, longAdj: string) {
  const item = new Item(
    ItemType.Consumable,
    lotionId,
    lotionType + ' Ltn',
    'a flask of ' + lotionType + ' lotion',
    'A small wooden flask filled with a ' + longAdj + ' . A label across the front says, "' + lotionType + ' Lotion."',
  );
  // item.consumeEffect = UTIL.createCallBackFunction(ConsumableEffects.bodyLotion, lotionType.toLowerCase());
  return item;
}

function Armor(longName: string, shortName: string, description = '', longDescription = '', equipmentName = '', value = 0, defense = 0, sexiness = 0) {
  const item = new Item(ItemType.Armor, longName, shortName, description, longDescription, value);
  // item.consumeEffect = UTIL.createCallBackFunction(ConsumableEffects.bodyLotion, lotionType.toLowerCase());
  item.equipmentName = equipmentName;
  item.defense = defense;
  item.sexiness = sexiness;
  return item;
}

function Weapon(longName: string, shortName: string, description = '', longDescription = '', equipmentName = '', verb = '', value = 0, attack = 0) {
  const item = new Item(ItemType.Weapon, longName, shortName, description, longDescription, value);
  // item.consumeEffect = UTIL.createCallBackFunction(ConsumableEffects.bodyLotion, lotionType.toLowerCase());
  item.equipmentName = equipmentName;
  item.verb = verb;
  item.attack = attack;
  return item;
}

export { Item, HairDye, SkinOil, BodyLotion, Armor, Weapon };
