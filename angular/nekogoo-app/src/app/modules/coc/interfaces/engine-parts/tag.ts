// Represents tag groups
export enum TagType {
  Unassigned,
  Tag,
  Effect,
  Character,
  Species,
  Item,
  Location,
  Moment,
  Relationship,
  Skill,
  Story,
}

export interface Tag {
  id: string;
  title: string;
  type: TagType;
  description?: string;
}

export const TagSeed: Tag[] = [
  /**
   * Corruption of Champions (core stats)
   */
  {
    id: 'human',
    title: 'Human',
    type: TagType.Species,
  },
  {
    id: 'slime',
    title: 'Slime',
    type: TagType.Species,
    description: 'Goo',
  },
  {
    id: 'lamia',
    title: 'Lamia',
    type: TagType.Species,
  },
  {
    id: 'harpy',
    title: 'Harpy',
    type: TagType.Species,
  },
  {
    id: 'centaur',
    title: 'Centaur',
    type: TagType.Species,
  },
  {
    id: 'bunny',
    title: 'Lagomorph',
    type: TagType.Species,
    description: 'Bunny Rabbit',
  },
  {
    id: 'dragon',
    title: 'Dragon',
    type: TagType.Species,
  },
  {
    id: 'fox',
    title: 'Fox',
    type: TagType.Species,
  },
  {
    id: 'dog',
    title: 'Wolf',
    type: TagType.Species,
    description: 'Dog',
  },
  {
    id: 'cat',
    title: 'Cat',
    type: TagType.Species,
  },
  {
    id: 'horse',
    title: 'Horse',
    type: TagType.Species,
    description: 'Pony',
  },
  {
    id: 'raccoon',
    title: 'Raccoon',
    type: TagType.Species,
  },
  {
    id: 'lizard',
    title: 'Lizard',
    type: TagType.Species,
  },
  {
    id: 'bee',
    title: 'Bee',
    type: TagType.Species,
  },
  {
    id: 'goblin',
    title: 'Goblin',
    type: TagType.Species,
  },
  {
    id: 'shark',
    title: 'Shark',
    type: TagType.Species,
  },
  {
    id: 'spider',
    title: 'Spider',
    type: TagType.Species,
  },
  {
    id: 'kangaroo',
    title: 'Kangaroo',
    type: TagType.Species,
  },
  {
    id: 'mouse',
    title: 'Mouse',
    type: TagType.Species,
  },
  {
    id: 'cow',
    title: 'Cow',
    type: TagType.Species,
  },
  {
    id: 'minotaur',
    title: 'Minotaur',
    type: TagType.Species,
  },
  {
    id: 'lunar-elf',
    title: 'Lunar Elf',
    type: TagType.Species,
    description:
      'Has a natural affinity for the void.  Very curvatious with long, pointed back ears.',
  },
  {
    id: 'solar-elf',
    title: 'Solar Elf',
    type: TagType.Species,
    description:
      'Has a natural affinity for the light.  Delightfully lithe and perky with long, pointed up ears.',
  },
  /**
   * Condition Tags
   */
  {
    id: 'demon',
    title: 'Demon',
    type: TagType.Effect,
  },
  {
    id: 'ghost',
    title: 'Ghost',
    type: TagType.Effect,
  },
  {
    id: 'mummy',
    title: 'Mummy',
    type: TagType.Effect,
  },
  {
    id: 'flying',
    title: 'Flying',
    type: TagType.Effect,
  },
  {
    id: 'invisible',
    title: 'Invisible',
    type: TagType.Effect,
  },
  {
    id: 'alien',
    title: 'Alien',
    type: TagType.Effect,
  },
  /**
   * Location Tags
   */
  {
    id: 'explored',
    title: 'Explored',
    type: TagType.Location,
  },
];
