import { ReactElement } from 'react';

import { Box } from '@ui/box';
import { ScrollWrapper } from '@ui/scrollWrapper';
import { Modal } from '@ui/modal';

import { usePokemonTypeLogic } from '../hooks/use.pokemon.type.logic';

import { PokemonDetailModalBody } from './pokemonDetailModalBody';
import { PokemonDetailModalHeader } from './pokemonDetailModalHeader';

export const PokemonDetailModal = ({
  pokeCreature,
  isOpen,
  onCloseModal,
}: any): ReactElement => {
  const { getPokeTypeClass } = usePokemonTypeLogic(pokeCreature?.types);

  // const handleOpenDetailModalClick = () => {
  //   openModal({
  //     content: <UiPokemonDetailModal />,
  //     options: {
  //       title: '',
  //       data: data,
  //       classNameShadow: '',
  //       classNameModal: '',
  //       headlineType: ModalHeadlineTypeEnum.ABSOLUTE,
  //       modalAlignment: AlignmentEnum.CENTER,
  //     },
  //     onCallback: () => {
  //       noopUtil();
  //     },
  //   });
  // };

  return (
    <Modal isOpen={isOpen} onClick={onCloseModal}>
      <ScrollWrapper>
        <Box className="relative">
          <PokemonDetailModalHeader
            pokeCreature={pokeCreature}
            pokeTypeClass={getPokeTypeClass}
          />

          <PokemonDetailModalBody
            pokeCreature={pokeCreature}
            pokeTypeClass={getPokeTypeClass}
          />
        </Box>
      </ScrollWrapper>
    </Modal>
  );
};
