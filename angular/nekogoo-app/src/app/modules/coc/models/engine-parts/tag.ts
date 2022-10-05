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

export class Tag {
  id: string;
  type: TagType;
  title: string;
  description: string;

  constructor(type: TagType, title: string, description = '') {
    this.id = Math.random().toString(16).slice(2);
    this.type = type;
    this.title = title;
    this.description = description;
  }
}

export function seedTag(): Tag[] {
  const data: Tag[] = [
    // Corruption of Champions (core stats)
    new Tag(TagType.Species, 'Human'),
    new Tag(TagType.Species, 'Slime', 'Goo'),
    new Tag(TagType.Species, 'Lamia'),
    new Tag(TagType.Species, 'Harpy'),
    new Tag(TagType.Species, 'Centaur'),
    new Tag(TagType.Species, 'Lagomorph', 'Bunny Rabbit'),
    new Tag(TagType.Species, 'Dragon'),
    new Tag(TagType.Species, 'Fox'),
    new Tag(TagType.Species, 'Wolf', 'Dog'),
    new Tag(TagType.Species, 'Cat'),
    new Tag(TagType.Species, 'Horse', 'Pony'),
    new Tag(TagType.Species, 'Raccoon'),
    new Tag(TagType.Species, 'Lizard'),
    new Tag(TagType.Species, 'Bee'),
    new Tag(TagType.Species, 'Goblin'),
    new Tag(TagType.Species, 'Shark'),
    new Tag(TagType.Species, 'Spider'),
    new Tag(TagType.Species, 'Kangaroo'),
    new Tag(TagType.Species, 'Mouse'),
    new Tag(TagType.Species, 'Cow'),
    new Tag(TagType.Species, 'Minotaur'),
    new Tag(
      TagType.Species,
      'Lunar Elf',
      'Has a natural affinity for the void.  Very curvatious with long, pointed back ears.',
    ),
    new Tag(
      TagType.Species,
      'Solar Elf',
      'Has a natural affinity for the light.  Delightfully lithe and perky with long, pointed up ears.',
    ),

    // Condition Tags
    new Tag(TagType.Effect, 'Demon'),
    new Tag(TagType.Effect, 'Ghost'),
    new Tag(TagType.Effect, 'Mummy'),
    new Tag(TagType.Effect, 'Flying'),
    new Tag(TagType.Effect, 'Invisible'),
    new Tag(TagType.Effect, 'Alien'),

    // Location Tags
    new Tag(TagType.Location, 'Explored'),
  ];
  return data;
}
