export interface PlayState {
  // readonly counter: number;
  // books: ReadonlyArray<Book>;
  // readonly collection: string[];

  // --- Current Game State ---
  readonly momentId: number;
  readonly momentStep: number;
  readonly player?: string;

  // --- UI ---
  readonly mainText?: string;
}
