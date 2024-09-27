import { memo, useMemo, type PropsWithChildren, type ReactElement } from 'react';

import { capitalizeNameUtil, classNamesUtil } from '@pokemon-pet-shop/utils';

import { UiElementLayout } from '../../element.layout';
import { UiTypography, TypographyTypeEnum } from '../../typography';

import { TagItemColorEnum } from './tag.item.enum';
import type { TagProps } from './tag.item.interface';
import { styles } from './tag.item.module';

const Tag = ({
  name = '',
  colorTheme = TagItemColorEnum.GRASS,
}: PropsWithChildren<TagProps>): ReactElement => {
  const capitalizeName = useMemo((): string => {
    return capitalizeNameUtil(name);
  }, [name]);

  return (
    <UiElementLayout className={classNamesUtil(styles.tag, styles?.[`${colorTheme}Bg`])}>
      <UiTypography typographyType={TypographyTypeEnum.SPAN}>{capitalizeName}</UiTypography>
    </UiElementLayout>
  );
};

export default memo(Tag);
