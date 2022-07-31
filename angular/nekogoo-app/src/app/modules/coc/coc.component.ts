import { Component, OnInit } from '@angular/core';

// import { SaveSlot } from '@modules/erpge/data/save-slot';
import { ItemSeed } from '@modules/erpge/data/seeds/item-seed';
import { AttributeSeed } from '@modules/erpge/data/seeds/system-parts/attribute-seed';
import { EffectSeed } from '@modules/erpge/data/seeds/system-parts/effect-seed';
import { TagSeed } from '@modules/erpge/data/seeds/system-parts/tag-seed';
import { Attribute } from '@modules/erpge/models/engine-parts/attribute';
import { Effect } from '@modules/erpge/models/engine-parts/effect';
import { Tag } from '@modules/erpge/models/engine-parts/tag';
import { Item } from '@modules/erpge/models/item';

@Component({
  selector: 'app-coc',
  templateUrl: './coc.component.html',
  styleUrls: ['./coc.component.scss'],
})
export class CocComponent implements OnInit {
  attributes: Attribute[];
  effects: Effect[];
  tags: Tag[];
  items: Item[];
  // liveGame: SaveSlot;

  constructor() {
    // console.log(`store attributes: ${store.state.attributes.data.length}`);
    // console.log(`store effects: ${store.state.effects.data.length}`);
    // console.log(`store tags: ${store.state.tags.data.length}`);
    // console.log(`store items: ${store.state.items.data.length}`);
    // console.log(`store liveGame: ${store.state.liveGame}`);

    this.attributes = new AttributeSeed().data;
    this.effects = new EffectSeed().data;
    this.tags = new TagSeed().data;
    this.items = new ItemSeed().data;
    // this.liveGame = new SaveSlot('Test Player');

    console.log(`store attributes: ${this.attributes.length}`);
    // console.log('store attributes: ', this.attributes);
    console.log(`store effects: ${this.effects.length}`);
    console.log(`store tags: ${this.tags.length}`);
    console.log(`store items: ${this.items.length}`);
    // console.log(`store liveGame: ${this.liveGame}`);
  }

  ngOnInit(): void {}
}
