import { ReactElement } from 'react';

import { Box } from '@ui/box';
import { ScrollWrapper } from '@ui/scrollWrapper';
import { Modal } from '@ui/modal';

import { getPokeTypePrefixClass } from '@utils/pokeType';

import { PokemonDetailModalBody } from './pokemonDetailModalBody';
import { PokemonDetailModalHeader } from './pokemonDetailModalHeader';

export const PokemonDetailModal = ({
  pokeCreature,
  isOpen,
  onCloseModal,
}: any): ReactElement => {
  const pokeTypeClass = getPokeTypePrefixClass(pokeCreature?.types);

  return (
    <Modal isOpen={isOpen} onClick={onCloseModal}>
      <ScrollWrapper>
        <Box className="relative">
          <PokemonDetailModalHeader
            pokeCreature={pokeCreature}
            pokeTypeClass={pokeTypeClass}
          />

          <PokemonDetailModalBody
            pokeCreature={pokeCreature}
            pokeTypeClass={pokeTypeClass}
          />
        </Box>
      </ScrollWrapper>
    </Modal>
  );
};
