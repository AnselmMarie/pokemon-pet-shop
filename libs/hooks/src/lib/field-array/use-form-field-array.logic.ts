import { useFieldArray } from 'react-hook-form';

const useFormFieldArrayLogic = ({ name = '', control }: any): any => {
  const { fields, append, remove } = useFieldArray({
    control,
    name,
  });

  return {
    fields,
    onAppend: append,
    onRemove: remove,
  };
};

export default useFormFieldArrayLogic;
