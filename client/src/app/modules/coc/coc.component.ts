import { Component, OnInit } from '@angular/core';

import {
  Attribute,
  AttributeSeed,
  Effect,
  EffectSeed,
  Tag,
  TagSeed,
} from './interfaces';

@Component({
  selector: 'app-coc',
  templateUrl: './coc.component.html',
  styleUrls: ['./coc.component.scss'],
})
export class CocComponent implements OnInit {
  attributes: Attribute[];
  effects: Effect[];
  tags: Tag[];
  // items: Item[];
  // liveGame: SaveSlot;

  constructor() {
    // console.log(`store attributes: ${store.state.attributes.data.length}`);
    // console.log(`store effects: ${store.state.effects.data.length}`);
    // console.log(`store tags: ${store.state.tags.data.length}`);
    // console.log(`store items: ${store.state.items.data.length}`);
    // console.log(`store liveGame: ${store.state.liveGame}`);

    this.attributes = AttributeSeed;
    this.effects = EffectSeed;
    this.tags = TagSeed;
    // this.items = ItemSeed;

    // this.liveGame = new SaveSlot('Test Player');

    console.log(`store attributes: ${this.attributes.length}`);
    // console.log('store attributes: ', this.attributes);
    console.log(`store effects: ${this.effects.length}`);
    console.log(`store tags: ${this.tags.length}`);
    // console.log(`store items: ${this.items.length}`);
    // console.log(`store liveGame: ${this.liveGame}`);
  }

  ngOnInit(): void {}
}
