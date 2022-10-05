export enum LocationType {
  Void,
  Camp,
  Zone,
  Area,
  Town,
  Shop,
}

export interface Location {
  id: string;
  type: LocationType;
  shortName: string;
  longName: string;
  description: string;
  effects: string[];
}
