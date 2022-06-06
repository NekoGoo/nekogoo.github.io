// https://next.vuex.vuejs.org/guide/typescript-support.html
// Putting in index.d.ts breaks compilation for some reason

import { Store } from 'vuex';

declare module '@vue/runtime-core' {
  // declare your own store states
  interface State {
    count: number;
    // --- Game Context (Templates) ---
    attributes: AttributeSeed;
    effects: EffectSeed;
    tags: TagSeed;
    items: ItemSeed;
    liveGame: SaveSlot | null;
  }

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
