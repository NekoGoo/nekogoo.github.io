export enum DimensionType {
  All = 'all',
  Core = 'core', // The Nexus of All Realities
  CoC = 'coc',
  eRPGe = 'ergpe',
}

export interface Space {
  title: string;
  dimension: DimensionType;
}
