import { GenericNonReturnType } from '@pokemon-pet-shop/typing';

import { ModalAlignmentEnum } from './modal.enum';

export interface ModalProps {
  classNameShadow?: any;
  classNameModal?: any;
  isModalShown?: boolean;
  modalAlignment?: ModalAlignmentEnum;
  onClick?: GenericNonReturnType;
}
