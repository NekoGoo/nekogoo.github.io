import {
  VaginalLoosenessType,
  VaginalWetnessType,
  VaginaType,
} from '../../appearance-types';

export interface Pussy {
  // --- CoC data ---
  type: VaginaType;
  wetness: VaginalWetnessType;
  looseness: VaginalLoosenessType;
  virgin: boolean;

  // clitLength: number;
  // clitPierced: number;
  // labiaPierced: number;

  // virgin:Boolean = true;
  // Used to determine thickness of knot relative to normal thickness
  // Used during sex to determine how full it currently is.  For multi-dick sex.
  fullness: number;
  labiaPierced: number;
  labiaPShort: string;
  labiaPLong: string;
  clitPierced: number;
  clitPShort: string;
  clitPLong: string;
}
