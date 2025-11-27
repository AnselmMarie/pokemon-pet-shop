declare global {
  namespace Cart {
    interface Payload {
      id: string;
      addToCart?: boolean;
      removeFromCart?: boolean;
    }

    interface Data {
      id: string;
      name: string;
      price: number;
      quantity: number;
      image: string;
      types: PokemonDetail.Base;
      isLegendary: boolean;
      isMythical: boolean;
    }

    interface Base {
      data: Data[];
      counter: number;
      total: number;
    }
  }
}

export {};
