import { useMemo } from 'react';

import { useThemeStore } from '@pokemon-pet-shop/store';
import { DetectEnum } from '@pokemon-pet-shop/typing';
import { detectUtil } from '@pokemon-pet-shop/utils';

export const useRenderStyles = (styles: any): any => {
  const { varThemeMode } = useThemeStore();
  const newStyles = useMemo(() => {
    if (detectUtil() === DetectEnum.IS_WEB) {
      return styles;
    }

    return styles(varThemeMode);
  }, [styles, varThemeMode]);

  return { newStyles };
};
