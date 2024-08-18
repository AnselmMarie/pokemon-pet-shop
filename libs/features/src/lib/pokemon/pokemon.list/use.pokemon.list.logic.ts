import pokemonDetail from '../temp.mock/pokemon.detail.json';
import pokemonList from '../temp.mock/pokemon.json';

interface PokemonListReturn {
  pokemonDetail: any;
  pokemonList: any;
}

const usePokemonList = (): PokemonListReturn => {
  return {
    pokemonDetail,
    pokemonList,
  };
};

export default usePokemonList;
