import { GenderType, GenderTypes } from '../appearance-types';

// https://www.myenglishteacher.eu/blog/family-relationships-in-english-57-words-and-phrases-about-family
// https://support.ancestry.com/s/article/Understanding-Kinship-Terms
// https://lemongrad.com/family-relationships-in-english
export const RelationshipTypes = {
  // -------- Immediate Family (By Blood) --------

  Spouse: 0, // Husband/Wife
  Parent: 1, // Father/Mother
  Child: 2, // Son/Daughter
  Sibling: 3, // Brother/Sister
  Grandparent: 4, // Grandfather/Grandmother
  Grandchild: 5, // Grandson/Granddaughter
  ParentSibling: 6, // Uncle/Aunt
  SiblingChild: 7, // Nephew/Niece
  AuntUncleChild: 8, // Cousin

  // -------- Immediate Family (By Law) --------

  // --- (Married Into) ---
  StepParent: 9, // Step-Father/Mother
  StepChild: 10, // Step-Son/Daughter
  StepSibling: 11, // Step-Brother/Sister
  // --- (Child Married To) ---
  ParentInLaw: 12, // Father/Mother-in-law
  ChildInLaw: 13, // Son/Daughter-in-law
  SiblingInLaw: 14, // Brother/Sister-in-law
} as const;
export type RelationshipType =
  typeof RelationshipTypes[keyof typeof RelationshipTypes];

export interface Relationship {
  CharacterA: string;
  GenderA: GenderType;
  RelationshipA: RelationshipType;
  CharacterB: string;
  GenderB: GenderType;
  RelationshipB: RelationshipType;
}

const egRelationshipMatrix: Relationship[] = [
  {
    CharacterA: 'player',
    GenderA: GenderTypes.Male,
    RelationshipA: RelationshipTypes.StepSibling,
    CharacterB: 'D',
    GenderB: GenderTypes.Male,
    RelationshipB: RelationshipTypes.StepSibling,
  },
];
