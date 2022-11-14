export const LocationTypes = {
  Void: 0,
  Camp: 1,
  Zone: 2,
  Area: 3,
  Town: 4,
  Shop: 5,
} as const;
export type LocationType = typeof LocationTypes[keyof typeof LocationTypes];

export interface Location {
  id: string;
  type: LocationType;
  shortName: string;
  longName: string;
  description: string;
  effects: string[];
}
