import { CockType } from '../appearance-types';

export interface Cock {
  type: CockType;
  // --- CoC data ---
  length: number; // default 4.5
  thickness: number; // default 1
  // Used to determine thickness of knot relative to normal thickness
  knotMultiplier: number; // default 1
  pierced: boolean;
  pShort: string;
  pLong: string;
  sock: string;
}
