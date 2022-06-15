import { useStore } from '../../store';
// import { ItemType } from '../flags/asset-enums';
// import { ItemSlot } from '../itemSlotClass';
// import { Item } from '../models/item';
// import { inventoryMenu } from '../scenes/inventory';
// import { clearOutput, doNext, outputText } from './gui';

// https://next.vuex.vuejs.org/guide/typescript-support.html
const store = useStore();

// Miscellenious functions

export const NUMBER_WORDS_NORMAL = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
];
export const NUMBER_WORDS_CAPITAL = [
  'Zero',
  'One',
  'Two',
  'Three',
  'Four',
  'Five',
  'Six',
  'Seven',
  'Eight',
  'Nine',
  'Ten',
];
export const NUMBER_WORDS_POSITIONAL = [
  'zeroth',
  'first',
  'second',
  'third',
  'fourth',
  'fifth',
  'sixth',
  'seventh',
  'eighth',
  'ninth',
  'tenth',
];

// Format string
export function formatStringArray(stringList: string[]) {
  // Changes an array of values into "1", "1 and 2" or "1, (x, )y and z"
  switch (stringList.length) {
    case 0:
      return '';
    case 1:
      return stringList[0];
    case 2:
      return `${stringList[0]} and ${stringList[1]}`;
    default:
  }
  let concat = stringList[0];
  for (let x = 1; x < stringList.length - 1; x++)
    concat += `, ${stringList[x]}`;
  return `${concat} and ${stringList[stringList.length - 1]}`;
}

// Number to words
export function num2Text(num: number) {
  if (num >= 0 && num <= 10) return NUMBER_WORDS_NORMAL[num];
  return num.toString();
}
export function num2Text2(num: number) {
  if (num < 0) return num.toString(); // Can't really have the -10th of something
  if (num <= 10) return NUMBER_WORDS_POSITIONAL[num];
  switch (num % 10) {
    case 1:
      return `${num.toString()}st`;
    case 2:
      return `${num.toString()}nd`;
    case 3:
      return `${num.toString()}rd`;
    default:
  }
  return `${num.toString()}th`;
}
export function Num2Text(num: number) {
  if (num >= 0 && num <= 10) return NUMBER_WORDS_CAPITAL[num];
  return num.toString();
}

// Comma display
export function formatNumber(num: number) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

// Capitalize letters
export function capitalizeFirstLetter(msg: string) {
  return msg.charAt(0).toUpperCase() + msg.slice(1);
}
export function capitalize(msg: string) {
  // Alternate function
  return capitalizeFirstLetter(msg);
}

// Randomization
export function rand(num: number) {
  const result = Math.random() * num;
  return Math.floor(result);
}
export function randomChoice(...args: any[]) {
  let choice;
  if (args.length === 1) {
    choice = Math.round(Math.random() * (args[0].length - 1));
    return args[0][choice];
  }
  choice = Math.round(Math.random() * (args.length - 1));
  return args[choice];
}

// Lookup
// export function lookupItem(id: string) {
//   return ItemLib[id];
// }

// export function lookupKeyItem(id: string) {
//   return KeyItemIDs[id];
// }

// export function lookupPerk(id: string) {
//   return PerkIDs[id];
// }

// export function lookupStatusEffects(id: string) {
//   return StatusEffectIDs[id];
// }

// //Function
// export function createCallBackFunction(func: any, arg1: any = undefined, arg2: any = undefined, arg3: any = undefined): () => void {
//     if (arg1 != undefined) {
//         if (arg2 != undefined) {
//             if (arg3 != undefined) {
//                 return function () {
//                     func(arg1, arg2, arg3)
//                 }
//             }
//             return function () {
//                 func(arg1, arg2)
//             }
//         }
//         return function () {
//             func(arg1)
//         }
//     } else {
//         return function () {
//             func()
//         }
//     }
// }

// Function
export function createCallBackFunction(
  func: ((...args: any[]) => void) | null,
  ...args: any[]
): () => void {
  return function () {
    if (func != null) {
      func(...args);
    }
  };
}

// --- Item Methods ---

// export function useItemEffect(item: Item) {
//   if (item.type == ItemType.Consumable) {
//     if (item.consumeEffect != null) {
//       item.consumeEffect();
//     }
//     return false;
//   }
//   if (item.type == ItemType.Weapon || item.type == ItemType.Armor) {
//     equipItem(item);
//     return false;
//   }
//   return true;
// }

// export function equipItem(item: Item) {
//   clearOutput();
//   outputText('You equip your ' + item.equipmentName + '.');
//   //Determine if it's weapon or armour.
//   if (item.type == ItemType.Weapon) {
//     store.state.liveData.player.weapon = item;
//   }
//   if (item.type == ItemType.Armor) {
//     store.state.liveData.player.armor = item;
//   }
//   doNext(inventoryMenu);
// }

// export function unequipItem() {
//   //TODO
// }

// // --- Lookup Methods ---

// export function lookupItem(id: string) {
//   return store.state.ItemLib[id];
// }
// export function lookupKeyItem(id: string) {
//   return store.state.KeyItemIDs[id];
// }
// export function lookupPerk(id: string) {
//   return store.state.PerkIDs[id];
// }
// export function lookupStatusEffects(id: string) {
//   return store.state.StatusEffectIDs[id];
// }

// // --- ItemSlot (Inventory) Methods ---

// export function setItemAndQty(slot: ItemSlot, itype: Item | null, quant: number) {
//   if (quant == 0 && itype == null) {
//     emptySlot(slot);
//     return;
//   }
//   if (quant < 0 || (quant == 0 && itype != null) || (quant > 0 && itype == null)) {
//     quant = 0;
//     itype = null;
//   }
//   slot.quantity = quant;
//   slot.itype = itype;
// }
// export function removeItem() {
//   //something
// }
// export function removeOneItem(slot: ItemSlot) {
//   if (slot.quantity > 0) {
//     slot.quantity--;
//     if (slot.quantity <= 0) slot.itype = null;
//   }
// }
// export function emptySlot(slot: ItemSlot) {
//   slot.quantity = 0;
//   slot.itype = null;
// }
