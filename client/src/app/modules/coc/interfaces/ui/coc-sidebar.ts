export interface CocStatframe {
  _id: string;
  label: string;
  minValue: number;
  maxValue?: number;
  tt?: string;
  isTextOnly?: boolean;
  statupdown?: boolean;
}

export interface CocSidebarState {
  charName: string;
  coreStats: CocStatframe[];
  combatStats: CocStatframe[];
  advancement: CocStatframe[];
}
