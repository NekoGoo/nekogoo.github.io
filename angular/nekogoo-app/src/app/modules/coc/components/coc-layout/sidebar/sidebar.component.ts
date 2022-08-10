import { Component, OnInit } from '@angular/core';
import { CocSidebarState } from '@modules/coc/store/models/mechanisms/coc-sidebar';
import { setSidebar } from '@modules/coc/store/ui/ui.actions';
import { getSidebarState } from '@modules/coc/store/ui/ui.selectors';
import { Store } from '@ngrx/store';

@Component({
  selector: 'coc-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class CocSidebarComponent implements OnInit {
  state$ = this.store.select(getSidebarState);

  constructor(private store: Store<CocSidebarState>) {
    setTimeout(() => {
      this.initial();
    }, 500);
  }

  ngOnInit(): void {}

  initial() {
    const newSidebar: CocSidebarState = {
      charName: 'Name',
      coreStats: [
        {
          _id: 'str',
          label: 'Strength',
          minValue: 100,
          tt: 'Strength affects how much physical damage you can do.',
          statupdown: true,
        },
        {
          _id: 'tou',
          label: 'Toughness',
          minValue: 100,
          tt: 'Toughness affects how much maximum HP you have and also reduces damage taken.',
          statupdown: true,
        },
        {
          _id: 'spe',
          label: 'Speed',
          minValue: 100,
          tt: 'Speed affects how nimble and fast you are. Higher speed makes it easier to dodge enemies and run from combat.',
          statupdown: true,
        },
        {
          _id: 'int',
          label: 'Intelligence',
          minValue: 100,
          tt: 'Intelligence affects how powerful your spells are. It also influences mental resistance checks.',
          statupdown: true,
        },
        {
          _id: 'lib',
          label: 'Libido',
          minValue: 100,
          tt: 'Libido determines how easier it is for you to get horny.',
          statupdown: true,
        },
        {
          _id: 'sen',
          label: 'Sensitivity',
          minValue: 100,
          tt: 'Sensitivity affects how easier it is for you to get horny by physical touch.',
          statupdown: true,
        },
        {
          _id: 'cor',
          label: 'Corruption',
          minValue: 100,
          tt: 'Corruption determines how perverted and warped your mind is. Higher corruption may make it easier to encounter Bad Ends.',
          statupdown: true,
        },
      ],
      combatStats: [
        {
          _id: 'hp',
          label: 'HP',
          minValue: 9999,
          maxValue: 9999,
          tt: 'Your HP is a measure of how much damage you can sustain before you are knocked out.',
          statupdown: true,
        },
        {
          _id: 'lust',
          label: 'Lust',
          minValue: 100,
          maxValue: 100,
          tt: "Your lust is a measure of how horny you are. If this reaches the maximum, you're overwhelmed by desires and will lose the battle.",
          statupdown: true,
        },
        {
          _id: 'fatigue',
          label: 'Fatigue',
          minValue: 100,
          maxValue: 100,
          tt: "Your fatigue is a measure of how tired you are. You'll be unable to cast spells and perform intense activity when this is at or near the maximum.",
          statupdown: true,
        },
        {
          _id: 'hunger',
          label: 'Fullness',
          minValue: 100,
          maxValue: 100,
          statupdown: true,
        },
      ],
      advancement: [
        {
          _id: 'level',
          label: 'Level',
          minValue: 99,
          isTextOnly: true,
        },
        {
          _id: 'xp',
          label: 'XP',
          minValue: 9999,
          maxValue: 9999,
          tt: 'Your XP is a measure of your current progress towards level up.',
        },
        {
          _id: 'gem',
          label: 'Gems',
          minValue: 999999999,
          isTextOnly: true,
        },
      ],
    };

    // this.state = newSidebar;
    this.store.dispatch(setSidebar({ payload: newSidebar }));
  }
}
