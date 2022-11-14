export const DimensionTypes = {
  All: 'all',
  Core: 'core', // The Nexus of All Realities
  CoC: 'coc',
  eRPGe: 'ergpe',
} as const;
export type DimensionType = typeof DimensionTypes[keyof typeof DimensionTypes];

export interface Space {
  title: string;
  dimension: DimensionType;
}
