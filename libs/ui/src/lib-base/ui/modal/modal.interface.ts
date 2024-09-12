import { AlignmentEnum, GenericNonReturnType } from '@pokemon-pet-shop/typing';

export interface ModalProps {
  classNameShadow?: string;
  classNameModal?: string;
  isModalShown?: boolean;
  modalAlignment?: AlignmentEnum;
  onClick?: GenericNonReturnType;
}

export interface ModalElementProps {
  className?: any;
  isOpen?: boolean;
}
