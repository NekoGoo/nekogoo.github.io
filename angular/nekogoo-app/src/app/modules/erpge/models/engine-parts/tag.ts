import { TagType } from '@erpge/flags/asset-enums';

class Tag {
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

export { Tag };
