import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { UseFormLogicProps, UseFormLogicReturn } from './use-form.interface';

const useFormLogic = ({
  validationMode = 'all',
  schema,
  defaultValues = {},
}: UseFormLogicProps): UseFormLogicReturn => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors, isDirty, isValid, isSubmitting, touchedFields },
    reset,
    resetField,
    setError,
    clearErrors,
    setValue,
    getValues,
    trigger,
    control,
  } = useForm({
    mode: validationMode,
    resolver: yupResolver(schema, { stripUnknown: true }),
    defaultValues,
  });

  return {
    touchedFields,
    isDirty,
    isValid,
    isSubmitting,
    formErrors: errors,
    control,
    onRegister: register,
    onWatch: watch,
    onHandleSubmit: handleSubmit,
    onReset: reset,
    onResetField: resetField,
    onSetError: setError,
    onClearErrors: clearErrors,
    onSetValue: setValue,
    onGetValues: getValues,
    onTrigger: trigger,
  };
};

export default useFormLogic;
