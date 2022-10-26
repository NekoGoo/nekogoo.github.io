import { DimensionType } from '../space';

// Represents tag groups
export enum TagType {
  // --- Core Assets ---
  Attribute = 'attribute',
  Effect = 'effect',
  // --- Static Assets (set pieces) ---
  Item = 'item',
  Location = 'location',
  Skill = 'skill',
  Moment = 'moment',
  Story = 'story',
  // --- Dynamic Assets (live data) ---
  Character = 'character',
  Relationship = 'relationship',
  // --- Other ---
  Species = 'species',
}

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
    dimension: DimensionType.CoC,
    type: TagType.Species,
  },
  {
    // https://wiki.smutosaur.us/CoC/Goo_Girls_(Codex)
    id: 'slime',
    title: 'Slime',
    dimension: DimensionType.CoC,
    type: TagType.Species,
    description: 'Goo',
  },
  {
    id: 'lamia',
    title: 'Lamia',
    dimension: DimensionType.CoC,
    type: TagType.Species,
  },
  {
    id: 'harpy',
    title: 'Harpy',
    dimension: DimensionType.CoC,
    type: TagType.Species,
  },
  {
    id: 'centaur',
    title: 'Centaur',
    dimension: DimensionType.CoC,
    type: TagType.Species,
  },
  {
    id: 'bunny',
    title: 'Lagomorph',
    dimension: DimensionType.CoC,
    type: TagType.Species,
    description: 'Bunny Rabbit',
  },
  {
    id: 'dragon',
    title: 'Dragon',
    dimension: DimensionType.CoC,
    type: TagType.Species,
  },
  {
    id: 'fox',
    title: 'Fox',
    dimension: DimensionType.CoC,
    type: TagType.Species,
  },
  {
    id: 'dog',
    title: 'Wolf',
    dimension: DimensionType.CoC,
    type: TagType.Species,
    description: 'Dog',
  },
  {
    id: 'cat',
    title: 'Cat',
    dimension: DimensionType.CoC,
    type: TagType.Species,
  },
  {
    id: 'horse',
    title: 'Horse',
    dimension: DimensionType.CoC,
    type: TagType.Species,
    description: 'Pony',
  },
  {
    id: 'raccoon',
    title: 'Raccoon',
    dimension: DimensionType.CoC,
    type: TagType.Species,
  },
  {
    id: 'lizard',
    title: 'Lizard',
    dimension: DimensionType.CoC,
    type: TagType.Species,
  },
  {
    id: 'bee',
    title: 'Bee',
    dimension: DimensionType.CoC,
    type: TagType.Species,
  },
  {
    id: 'goblin',
    title: 'Goblin',
    dimension: DimensionType.CoC,
    type: TagType.Species,
  },
  {
    id: 'shark',
    title: 'Shark',
    dimension: DimensionType.CoC,
    type: TagType.Species,
  },
  {
    id: 'spider',
    title: 'Spider',
    dimension: DimensionType.CoC,
    type: TagType.Species,
  },
  {
    id: 'kangaroo',
    title: 'Kangaroo',
    dimension: DimensionType.CoC,
    type: TagType.Species,
  },
  {
    id: 'mouse',
    title: 'Mouse',
    dimension: DimensionType.CoC,
    type: TagType.Species,
  },
  {
    id: 'cow',
    title: 'Cow',
    dimension: DimensionType.CoC,
    type: TagType.Species,
  },
  {
    id: 'minotaur',
    title: 'Minotaur',
    dimension: DimensionType.CoC,
    type: TagType.Species,
  },
  {
    id: 'lunar-elf',
    title: 'Lunar Elf',
    dimension: DimensionType.CoC,
    type: TagType.Species,
    description:
      'Has a natural affinity for the void.  Very curvatious with long ears, pointed back.',
  },
  {
    id: 'solar-elf',
    title: 'Solar Elf',
    dimension: DimensionType.CoC,
    type: TagType.Species,
    description:
      'Has a natural affinity for the light.  Delightfully lithe and perky with long ears, pointed up.',
  },
  /**
   * Condition Tags
   */
  {
    id: 'demon',
    title: 'Demon',
    dimension: DimensionType.CoC,
    type: TagType.Effect,
  },
  {
    id: 'ghost',
    title: 'Ghost',
    dimension: DimensionType.CoC,
    type: TagType.Effect,
  },
  {
    id: 'mummy',
    title: 'Mummy',
    dimension: DimensionType.CoC,
    type: TagType.Effect,
  },
  {
    id: 'flying',
    title: 'Flying',
    dimension: DimensionType.CoC,
    type: TagType.Effect,
  },
  {
    id: 'invisible',
    title: 'Invisible',
    dimension: DimensionType.CoC,
    type: TagType.Effect,
  },
  {
    id: 'alien',
    title: 'Alien',
    dimension: DimensionType.CoC,
    type: TagType.Effect,
  },
  /**
   * Location Tags
   */
  {
    id: 'explored',
    title: 'Explored',
    dimension: DimensionType.CoC,
    type: TagType.Location,
  },
];
