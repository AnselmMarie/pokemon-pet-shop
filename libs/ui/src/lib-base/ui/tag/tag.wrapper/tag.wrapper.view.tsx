import { memo, type PropsWithChildren, type ReactElement } from 'react';

import { classNamesUtil } from '@pokemon-pet-shop/utils';

import { UiElementLayout } from '../../element.layout';

import { TagWrapperAlignEnum } from './tag.wrapper.enum';
import type { TagProps } from './tag.wrapper.interface';
import { styles } from './tag.wrapper.module';

const Tag = ({
  tagAlign = TagWrapperAlignEnum.CENTER,
  className,
  children,
}: PropsWithChildren<TagProps>): ReactElement => {
  return (
    <UiElementLayout className={classNamesUtil(className, styles.tagWrapper, styles?.[tagAlign])}>
      {children}
    </UiElementLayout>
  );
};

export default memo(Tag);
