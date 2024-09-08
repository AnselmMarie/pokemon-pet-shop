export interface CartApiPayload {
  id: string;
  addToCart?: boolean;
  removeFromCart?: boolean;
}

export interface CartDataContentApi {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  isLegendary: boolean;
  isMythical: boolean;
}

export interface CartDataApi {
  data: CartDataContentApi[];
  counter: number;
  total: number;
}
