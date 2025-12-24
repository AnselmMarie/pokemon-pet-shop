import { ReactElement } from 'react';

import { Box } from '@pokemon-pet-shop/ui-box';
import { ScrollWrapper } from '@pokemon-pet-shop/ui-scroll-wrapper';
import { Modal } from '@pokemon-pet-shop/ui-modal';

import { getPokeTypePrefixClass } from '@pokemon-pet-shop/util-poke-type';

import { PokemonDetailModalBody } from './pokemon-detail-modal-body';
import { PokemonDetailModalHeader } from './pokemon-detail-modal-header';

interface PokemonDetailModalProps {
  pokeCreature: PokemonDetail.Base & { name: string };
  isOpen: boolean;
  onCloseModal: () => void;
}

export const PokemonDetailModal = ({
  pokeCreature,
  isOpen,
  onCloseModal,
}: PokemonDetailModalProps): ReactElement => {
  const pokeTypeClass = getPokeTypePrefixClass(pokeCreature?.types);

  return (
    <Modal isOpen={isOpen} onClick={onCloseModal}>
      <ScrollWrapper>
        <Box className="relative">
          <PokemonDetailModalHeader pokeCreature={pokeCreature} pokeTypeClass={pokeTypeClass} />

          <PokemonDetailModalBody pokeCreature={pokeCreature} pokeTypeClass={pokeTypeClass} />
        </Box>
      </ScrollWrapper>
    </Modal>
  );
};
