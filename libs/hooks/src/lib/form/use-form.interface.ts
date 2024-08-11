import {
  Control,
  FieldErrors,
  FieldValues,
  UseFormHandleSubmit,
  UseFormProps,
  ValidationMode,
} from 'react-hook-form';
import { AnyObjectSchema } from 'yup';

import {
  GenericObjectReturnType,
  GenericUnknownReturnType,
  GenericNonReturnType,
  GenericBooleanPromiseReturnType,
} from '../../types';

export interface UseFormLogicProps extends UseFormProps {
  validationMode?: keyof ValidationMode | undefined;
  schema: AnyObjectSchema;
}

export interface UseFormLogicReturn {
  touchedFields: any;
  isDirty: boolean;
  isValid: boolean;
  isSubmitting: boolean;
  formErrors: FieldErrors<FieldValues>;
  control: Control<any, any>;
  onRegister: GenericObjectReturnType;
  onWatch: GenericUnknownReturnType;
  onHandleSubmit: UseFormHandleSubmit<any, undefined>;
  onReset: GenericNonReturnType;
  onResetField: GenericNonReturnType;
  onSetError: GenericNonReturnType;
  onClearErrors: GenericNonReturnType;
  onSetValue: GenericNonReturnType;
  onGetValues: GenericObjectReturnType;
  onTrigger: GenericBooleanPromiseReturnType;
}
