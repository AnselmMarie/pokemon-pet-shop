import { useMemo } from 'react';

import { useThemeStore } from '@pokemon-pet-shop/store';
import { isWebUtil } from '@pokemon-pet-shop/utils';

export const useRenderStyles = (styles: any): any => {
  const { varThemeMode } = useThemeStore();
  const newStyles = useMemo(() => {
    if (isWebUtil()) {
      return styles;
    }

    return styles(varThemeMode);
  }, [styles, varThemeMode]);

  return { newStyles };
};
