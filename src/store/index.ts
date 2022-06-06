import { InjectionKey, State } from 'vue';
import { createStore, Store, useStore as baseUseStore } from 'vuex';
import { ItemSeed } from '../erpge/data/seeds/item-seed';
import { AttributeSeed } from '../erpge/data/seeds/system-parts/attribute-seed';
import { EffectSeed } from '../erpge/data/seeds/system-parts/effect-seed';
import { TagSeed } from '../erpge/data/seeds/system-parts/tag-seed';

// Define injection key
export const key: InjectionKey<Store<State>> = Symbol();

// Create a new store instance
export const store = createStore<State>({
  state: {
    count: 0,

    // --- Game Context (Templates) ---
    // - System Parts
    attributes: new AttributeSeed(),
    effects: new EffectSeed(),
    tags: new TagSeed(),
    // - General Seeds
    items: new ItemSeed(),
    // - Save Slot
    liveGame: null,
  },
});

// Override to pass injection key
export function useStore() {
  return baseUseStore(key);
}
