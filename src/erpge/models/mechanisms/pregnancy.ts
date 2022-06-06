import { IncubationType, PregType } from '@/erpge/flags/pregFlags';
import { Character } from '../character';

class Pregnancy {
  parent: Character;
  type: number;
  incubation: number;
  eventArr: number[];
  eventNum: number;

  constructor(parent: Character, type: PregType, incubation: IncubationType) {
    this.parent = parent; // father (not using PregnancyType)
    this.eventArr = [];
    this.eventNum = 0;
    // possibly redundant with parent.species
    this.type = type;
    this.incubation = incubation;
  }
}

export { Pregnancy };
