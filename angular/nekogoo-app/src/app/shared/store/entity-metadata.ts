import { EntityDataModuleConfig, EntityMetadataMap } from '@ngrx/data';

// https://ngrx.io/guide/data#defining-the-entities
const entityMetadata: EntityMetadataMap = {};

const pluralNames = {};

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames,
};
