import { AxiosResponse } from 'axios';
import { InfiniteData } from '@tanstack/react-query';
import { PokemonDetailBase } from '@pokemon-pet-shop/types';
export declare const useGetPokemonList: () => import("@tanstack/react-query").UseSuspenseInfiniteQueryResult<InfiniteData<AxiosResponse<(PokemonDetailBase & {
    name: string;
})[], any, {}>, number>, Error>;
//# sourceMappingURL=list.d.ts.map