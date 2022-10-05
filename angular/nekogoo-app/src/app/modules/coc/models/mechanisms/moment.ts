export enum MomentType {
  Unassigned,
  Intro,
  Camp,
  Encounter,
  Shop,
}

// export class Moment {
//   id: string;
//   title: string;
//   type: MomentType;
//   description: string;

//   constructor(id: string, title: string, type: MomentType) {
//     this.id = id;
//     this.title = title;
//     this.type = type;
//     this.description = '';

//     // conditions=[]
//   }
// }

export interface Moment {
  id: string;
  title: string;
  type: MomentType;
  description: string;
}
