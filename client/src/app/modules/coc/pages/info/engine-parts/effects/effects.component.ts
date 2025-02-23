import { Component, OnInit } from '@angular/core';
import { MatCard, MatCardContent, MatCardTitle } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable,
} from '@angular/material/table';
import { MatTooltip } from '@angular/material/tooltip';

import {
  DimensionTypes,
  Effect,
  EffectType,
  EffectTypes,
} from '@modules/coc/interfaces';
import { EffectService } from '@modules/coc/services';
import { InfoEffectsDetailComponent } from './detail/detail.component';

@Component({
  selector: 'coc-info-effects',
  templateUrl: './effects.component.html',
  styleUrls: ['./effects.component.scss'],
  standalone: true,
  imports: [
    MatCard,
    MatCardTitle,
    MatCardContent,
    MatTable,
    MatColumnDef,
    MatHeaderCellDef,
    MatHeaderCell,
    MatCellDef,
    MatCell,
    MatIcon,
    MatTooltip,
    MatHeaderRowDef,
    MatHeaderRow,
    MatRowDef,
    MatRow,
  ],
})
export class InfoEffectsComponent implements OnInit {
  effects!: Effect[];
  displayedColumns: string[] = ['type', 'title', 'description'];
  effectTypes: string[];

  constructor(
    private effectService: EffectService,
    public dialog: MatDialog,
  ) {
    this.effects = this.effectService.seed(DimensionTypes.CoC);
    // https://bobbyhadz.com/blog/typescript-get-all-enum-names
    this.effectTypes = Object.keys(EffectTypes).filter((v) =>
      Number.isNaN(Number(v)),
    );
  }

  ngOnInit(): void {}

  openDetailDialog(row: Effect): void {
    this.dialog.open(InfoEffectsDetailComponent, {
      width: '580px',
      data: row,
    });
  }

  // https://fonts.google.com/icons?icon.set=Material+Icons
  effectIcon(type: EffectType): string {
    let icon = '';
    if (type === EffectTypes.Perk) {
      icon = 'local_activity';
    } else if (type === EffectTypes.Status) {
      icon = 'auto_awesome';
    } else if (type === EffectTypes.Consumable) {
      icon = 'liquor';
    } else if (type === EffectTypes.Equipment) {
      icon = 'construction';
    }
    return icon;
  }

  effectText(type: EffectType): string {
    let text = '';
    if (type === EffectTypes.Perk) {
      text = 'Perk';
    } else if (type === EffectTypes.Status) {
      text = 'Status';
    } else if (type === EffectTypes.Consumable) {
      text = 'Consumable';
    } else if (type === EffectTypes.Equipment) {
      text = 'Equipment';
    }
    return text;
  }
}
