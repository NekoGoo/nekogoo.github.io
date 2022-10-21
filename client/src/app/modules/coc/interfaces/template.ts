import { Character } from './engine-mechanisms/character';
import { Item } from './engine-mechanisms/item';
import { Moment } from './engine-mechanisms/moment';
import { Relationship } from './engine-mechanisms/relationship';
import { Skill } from './engine-mechanisms/skill';
import { Story } from './engine-mechanisms/story';
import { Attribute } from './engine-parts/attribute';
import { Effect } from './engine-parts/effect';
import { Tag } from './engine-parts/tag';
import { SaveState } from './save.state';

// TODO: Time, Exploration, ItemContainer, KeyItemTypeContainer, PerkTypeContainer, StatusEffectTypeContainer, ItemSlot
export interface Template {
  title: string;
  space: string; // dimension
  time: string;

  // --- Core Assets ---
  attributes: Attribute[];
  effects: Effect[];
  tags: Tag[];
  // --- Static Assets ---
  items: Item[];
  locations: Location[];
  skills: Skill[];
  moments: Moment[];
  stories: Story[];
  // --- Dynamic Assets ---
  saveSlots: SaveState[];
  characters: Character[];
  relationships: Relationship[];
}
