import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DimensionType, Effect, EffectType } from '@modules/coc/interfaces';
import { EffectService } from '@modules/coc/services';
import { InfoEffectsDetailComponent } from './detail/detail.component';

@Component({
  selector: 'coc-info-effects',
  templateUrl: './effects.component.html',
  styleUrls: ['./effects.component.scss'],
})
export class InfoEffectsComponent implements OnInit {
  effects!: Effect[];
  displayedColumns: string[] = ['type', 'title', 'description'];
  effectTypes: string[];

  constructor(private effectService: EffectService, public dialog: MatDialog) {
    this.effects = this.effectService.seed(DimensionType.CoC);
    // https://bobbyhadz.com/blog/typescript-get-all-enum-names
    this.effectTypes = Object.keys(EffectType).filter((v) =>
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
    if (type === EffectType.Perk) {
      icon = 'local_activity';
    } else if (type === EffectType.Status) {
      icon = 'auto_awesome';
    } else if (type === EffectType.Consumable) {
      icon = 'liquor';
    } else if (type === EffectType.Equipment) {
      icon = 'construction';
    }
    return icon;
  }

  effectText(type: EffectType): string {
    let text = '';
    if (type === EffectType.Perk) {
      text = 'Perk';
    } else if (type === EffectType.Status) {
      text = 'Status';
    } else if (type === EffectType.Consumable) {
      text = 'Consumable';
    } else if (type === EffectType.Equipment) {
      text = 'Equipment';
    }
    return text;
  }
}
