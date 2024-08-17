import { ReactElement } from 'react';

import { UiContainer, UiPokemonCard } from '@pokemon-pet-shop/ui';

import pokemonDetail from '../temp.mock/pokemon.detail.json';
import pokemonList from '../temp.mock/pokemon.json';

import Header from './header';
import styles from './header.module.css';

const Homepage = () => {
  return (
    <div>
      <Header />
      <UiContainer className={styles.contentWrapper}>
        {(pokemonList?.results || []).map((el: any): ReactElement => {
          return <UiPokemonCard key={el?.name} data={el} dataDetail={pokemonDetail} />;
        })}
      </UiContainer>
      <div>footer</div>
    </div>
  );
};

export default Homepage;
