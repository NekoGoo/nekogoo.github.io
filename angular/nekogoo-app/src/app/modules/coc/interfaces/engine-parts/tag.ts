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
  type: TagType;
  title: string;
  description: string;
}
