import { AlignmentEnum, GenericNonReturnType } from '@pokemon-pet-shop/typing';

export interface ModalProps {
  classNameShadow?: any;
  classNameModal?: any;
  isModalShown?: boolean;
  modalAlignment?: AlignmentEnum;
  onClick?: GenericNonReturnType;
}
