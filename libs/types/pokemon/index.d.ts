declare global {
  namespace Pokemon {
    interface Base {
      count: number;
      next: string | null;
      previous: string | null;
      results: Creature[];
    }

    interface Creature {
      name: string;
      url: string;
    }
  }
}

export {};
