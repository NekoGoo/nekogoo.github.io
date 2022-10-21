import { GenderType } from './character';

// https://www.myenglishteacher.eu/blog/family-relationships-in-english-57-words-and-phrases-about-family
// https://support.ancestry.com/s/article/Understanding-Kinship-Terms
// https://lemongrad.com/family-relationships-in-english
export enum RelationshipType {
  // -------- Immediate Family (By Blood) --------

  Spouse, // Husband/Wife
  Parent, // Father/Mother
  Child, // Son/Daughter
  Sibling, // Brother/Sister
  Grandparent, // Grandfather/Grandmother
  Grandchild, // Grandson/Granddaughter
  ParentSibling, // Uncle/Aunt
  SiblingChild, // Nephew/Niece
  AuntUncleChild, // Cousin

  // -------- Immediate Family (By Law) --------

  // --- (Married Into) ---
  StepParent, // Step-Father/Mother
  StepChild, // Step-Son/Daughter
  StepSibling, // Step-Brother/Sister
  // --- (Child Married To) ---
  ParentInLaw, // Father/Mother-in-law
  ChildInLaw, // Son/Daughter-in-law
  SiblingInLaw, // Brother/Sister-in-law
}

export interface Relationship {
  type: RelationshipType;
}

export interface RelationshipMatrixType {
  CharacterA: string;
  GenderA: GenderType;
  RelationshipA: RelationshipType;
  CharacterB: string;
  GenderB: GenderType;
  RelationshipB: RelationshipType;
}

export const relationshipMatrix: RelationshipMatrixType[] = [
  {
    CharacterA: 'player',
    GenderA: GenderType.Male,
    RelationshipA: RelationshipType.StepSibling,
    CharacterB: 'D',
    GenderB: GenderType.Male,
    RelationshipB: RelationshipType.StepSibling,
  },
];
