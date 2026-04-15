import { ReactElement } from 'react';

import { PokemonDetailBase } from '@pokemon-pet-shop/types';
import { Box } from '@pokemon-pet-shop/ui-primitives';
import { ScrollWrapper, Modal, SuspenseBoundary } from '@pokemon-pet-shop/ui-components';

import { getPokeTypePrefixClass } from '@pokemon-pet-shop/util-poke-type';

import { PokemonDetailModalBody } from './pokemon-detail-modal-body';
import { PokemonDetailModalHeader } from './pokemon-detail-modal-header';
import { PokemonDetailModalSkeleton } from './pokemon-detail-modal-skeleton';

interface PokemonDetailModalProps {
  pokeCreature: PokemonDetailBase & { name: string };
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
          <SuspenseBoundary fallback={<PokemonDetailModalSkeleton />}>
            <PokemonDetailModalHeader pokeCreature={pokeCreature} pokeTypeClass={pokeTypeClass} />
            <PokemonDetailModalBody pokeCreature={pokeCreature} pokeTypeClass={pokeTypeClass} />
          </SuspenseBoundary>
        </Box>
      </ScrollWrapper>
    </Modal>
  );
};
