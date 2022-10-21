import * as ENUM from '../../flags/asset-enums';

class Moment {
  id: string;
  title: string;
  type: ENUM.MomentType;
  description: string;

  constructor(id: string, title: string, type: ENUM.MomentType) {
    this.id = id;
    this.title = title;
    this.type = type;
    this.description = '';

    // conditions=[]
  }
}

export { Moment };
