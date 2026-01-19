export interface PokemonCreature {
  name: string;
  url: string;
}

export interface Pokemon {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonCreature[];
}
