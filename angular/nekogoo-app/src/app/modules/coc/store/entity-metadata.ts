import { EntityDataModuleConfig, EntityMetadataMap } from '@ngrx/data';

// https://ngrx.io/guide/data#defining-the-entities
export const entityMetadata: EntityMetadataMap = {};

const pluralNames = {};

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames,
};
