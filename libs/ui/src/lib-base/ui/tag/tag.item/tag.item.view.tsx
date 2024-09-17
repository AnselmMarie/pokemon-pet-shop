import { memo, useMemo, type PropsWithChildren, type ReactElement } from 'react';

import { classNamesUtil } from '@pokemon-pet-shop/utils';

import { UiTypography, TypographyTypeEnum } from '../../typography';

import { TagItemColorEnum } from './tag.item.enum';
import type { TagProps } from './tag.item.interface';
import { styles } from './tag.item.module';

const Tag = ({
  name = '',
  colorTheme = TagItemColorEnum.GRASS,
}: PropsWithChildren<TagProps>): ReactElement => {
  const capitalizeName = useMemo(() => {
    return name.replace(/^\w/, (el) => {
      return el.toUpperCase();
    });
  }, [name]);

  return (
    <UiTypography
      className={classNamesUtil(styles.tag, styles?.[`${colorTheme}Bg`])}
      typographyType={TypographyTypeEnum.SPAN}
    >
      {capitalizeName}
    </UiTypography>
  );
};

export default memo(Tag);
