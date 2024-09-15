import { ModalHeadlineTypeEnum, useModalStore } from '@pokemon-pet-shop/store';
import { GenericNonReturnType, PokemonListApi, AlignmentEnum } from '@pokemon-pet-shop/typing';
import { noopUtil } from '@pokemon-pet-shop/utils';

import { usePokemonThemeLogic } from '../hooks/use.pokemon.theme.logic';
import { UiPokemonDetailModal } from '../pokemon.detail.modal';

interface UseCardReturn {
  getThemeClass: any;
  onHandleOpenDetailModalClick: GenericNonReturnType;
}

const usePokemonCardLogic = (data: PokemonListApi): UseCardReturn => {
  const { getThemeClass } = usePokemonThemeLogic(data?.types);
  const openModal = useModalStore((state) => state.openModal);

  const handleOpenDetailModalClick = () => {
    openModal({
      content: <UiPokemonDetailModal />,
      options: {
        title: '',
        data: data,
        classNameShadow: '',
        classNameModal: '',
        headlineType: ModalHeadlineTypeEnum.ABSOLUTE,
        modalAlignment: AlignmentEnum.CENTER,
      },
      onCallback: () => {
        noopUtil();
      },
    });
  };

  return {
    getThemeClass,
    onHandleOpenDetailModalClick: handleOpenDetailModalClick,
  };
};

export default usePokemonCardLogic;
