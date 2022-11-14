import { DimensionType, DimensionTypes } from '../space';

// Represents tag groups
export const TagTypes = {
  // --- Core Assets ---
  Attribute: 'attribute',
  Effect: 'effect',
  // --- Static Assets (set pieces) ---
  Item: 'item',
  Location: 'location',
  Skill: 'skill',
  Moment: 'moment',
  Story: 'story',
  // --- Dynamic Assets (live data) ---
  Character: 'character',
  Relationship: 'relationship',
  // --- Other ---
  Species: 'species',
} as const;
export type TagType = typeof TagTypes[keyof typeof TagTypes];

export interface Tag {
  id: string;
  title: string;
  dimension: DimensionType;
  type: TagType;
  description?: string;
}

export const TagSeed: Tag[] = [
  /**
   * Corruption of Champions (core stats)
   */
  /**
   * https://cocxianxia.fandom.com/wiki/Sapient_Species
   * https://wiki.smutosaur.us/CoC/Sentient_Species
   */
  {
    id: 'human',
    title: 'Human',
    dimension: DimensionTypes.CoC,
    type: TagTypes.Species,
  },
  {
    // https://wiki.smutosaur.us/CoC/Goo_Girls_(Codex)
    id: 'slime',
    title: 'Slime',
    dimension: DimensionTypes.CoC,
    type: TagTypes.Species,
    description: 'Goo',
  },
  {
    id: 'lamia',
    title: 'Lamia',
    dimension: DimensionTypes.CoC,
    type: TagTypes.Species,
  },
  {
    id: 'harpy',
    title: 'Harpy',
    dimension: DimensionTypes.CoC,
    type: TagTypes.Species,
  },
  {
    id: 'centaur',
    title: 'Centaur',
    dimension: DimensionTypes.CoC,
    type: TagTypes.Species,
  },
  {
    id: 'bunny',
    title: 'Lagomorph',
    dimension: DimensionTypes.CoC,
    type: TagTypes.Species,
    description: 'Bunny Rabbit',
  },
  {
    id: 'dragon',
    title: 'Dragon',
    dimension: DimensionTypes.CoC,
    type: TagTypes.Species,
  },
  {
    id: 'fox',
    title: 'Fox',
    dimension: DimensionTypes.CoC,
    type: TagTypes.Species,
  },
  {
    id: 'dog',
    title: 'Wolf',
    dimension: DimensionTypes.CoC,
    type: TagTypes.Species,
    description: 'Dog',
  },
  {
    id: 'cat',
    title: 'Cat',
    dimension: DimensionTypes.CoC,
    type: TagTypes.Species,
  },
  {
    id: 'horse',
    title: 'Horse',
    dimension: DimensionTypes.CoC,
    type: TagTypes.Species,
    description: 'Pony',
  },
  {
    id: 'raccoon',
    title: 'Raccoon',
    dimension: DimensionTypes.CoC,
    type: TagTypes.Species,
  },
  {
    id: 'lizard',
    title: 'Lizard',
    dimension: DimensionTypes.CoC,
    type: TagTypes.Species,
  },
  {
    id: 'bee',
    title: 'Bee',
    dimension: DimensionTypes.CoC,
    type: TagTypes.Species,
  },
  {
    id: 'goblin',
    title: 'Goblin',
    dimension: DimensionTypes.CoC,
    type: TagTypes.Species,
  },
  {
    id: 'shark',
    title: 'Shark',
    dimension: DimensionTypes.CoC,
    type: TagTypes.Species,
  },
  {
    id: 'spider',
    title: 'Spider',
    dimension: DimensionTypes.CoC,
    type: TagTypes.Species,
  },
  {
    id: 'kangaroo',
    title: 'Kangaroo',
    dimension: DimensionTypes.CoC,
    type: TagTypes.Species,
  },
  {
    id: 'mouse',
    title: 'Mouse',
    dimension: DimensionTypes.CoC,
    type: TagTypes.Species,
  },
  {
    id: 'cow',
    title: 'Cow',
    dimension: DimensionTypes.CoC,
    type: TagTypes.Species,
  },
  {
    id: 'minotaur',
    title: 'Minotaur',
    dimension: DimensionTypes.CoC,
    type: TagTypes.Species,
  },
  {
    id: 'lunar-elf',
    title: 'Lunar Elf',
    dimension: DimensionTypes.CoC,
    type: TagTypes.Species,
    description:
      'Has a natural affinity for the void.  Very curvatious with long ears, pointed back.',
  },
  {
    id: 'solar-elf',
    title: 'Solar Elf',
    dimension: DimensionTypes.CoC,
    type: TagTypes.Species,
    description:
      'Has a natural affinity for the light.  Delightfully lithe and perky with long ears, pointed up.',
  },
  /**
   * Condition Tags
   */
  {
    id: 'demon',
    title: 'Demon',
    dimension: DimensionTypes.CoC,
    type: TagTypes.Effect,
  },
  {
    id: 'ghost',
    title: 'Ghost',
    dimension: DimensionTypes.CoC,
    type: TagTypes.Effect,
  },
  {
    id: 'mummy',
    title: 'Mummy',
    dimension: DimensionTypes.CoC,
    type: TagTypes.Effect,
  },
  {
    id: 'flying',
    title: 'Flying',
    dimension: DimensionTypes.CoC,
    type: TagTypes.Effect,
  },
  {
    id: 'invisible',
    title: 'Invisible',
    dimension: DimensionTypes.CoC,
    type: TagTypes.Effect,
  },
  {
    id: 'alien',
    title: 'Alien',
    dimension: DimensionTypes.CoC,
    type: TagTypes.Effect,
  },
  /**
   * Location Tags
   */
  {
    id: 'explored',
    title: 'Explored',
    dimension: DimensionTypes.CoC,
    type: TagTypes.Location,
  },
];
