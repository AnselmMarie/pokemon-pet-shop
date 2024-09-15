import { useGetCart } from '@pokemon-pet-shop/services';
import { ModalHeadlineTypeEnum, useModalStore } from '@pokemon-pet-shop/store';
import { AlignmentEnum } from '@pokemon-pet-shop/typing';
import { noopUtil } from '@pokemon-pet-shop/utils';

import { UiCartModal } from '../../cart';
import { UiNavMobileModal } from '../nav.mobile';

const useHeaderLogic = () => {
  const { data } = useGetCart();

  const openModal = useModalStore((state) => state.openModal);

  const handleCartModalClick = () => {
    openModal({
      content: <UiCartModal />,
      options: {
        title: 'Pokecart',
        data: data,
        classNameShadow: '',
        classNameModal: '',
        headlineType: ModalHeadlineTypeEnum.RELATIVE,
        modalAlignment: AlignmentEnum.RIGHT,
      },
      onCallback: () => {
        noopUtil();
      },
    });
  };

  const handleMobileNavModalClick = () => {
    openModal({
      content: <UiNavMobileModal />,
      options: {
        title: 'Menu',
        headlineType: ModalHeadlineTypeEnum.RELATIVE,
        modalAlignment: AlignmentEnum.LEFT,
      },
      onCallback: () => {
        noopUtil();
      },
    });
  };

  return {
    data,
    onHandleCartModalClick: handleCartModalClick,
    onHandleMobileNavModalClick: handleMobileNavModalClick,
  };
};

export default useHeaderLogic;
