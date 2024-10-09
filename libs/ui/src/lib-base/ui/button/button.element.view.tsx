import { ReactElement } from 'react';

import { UiElementLayout } from '../element.layout';
import { UiIcon } from '../icon';
import { UiImage } from '../image';
import { UiSkeleton } from '../skeleton';
import { TypographyTypeEnum, UiTypography } from '../typography';

import { ButtonProps } from './button.interface';
import { styles } from './button.module';

const ButtonElement = ({
  className = '',
  classNameText = '',
  text = null,
  appendIcon = '',
  appendImage = '',
  isDisabled,
  isLoading,
  onClick,
}: ButtonProps): ReactElement => {
  return (
    <button className={className} disabled={isDisabled} onClick={onClick}>
      {isLoading ? (
        <UiElementLayout className={styles.buttonInnerIsLoadingWrapper}>
          <UiSkeleton />
        </UiElementLayout>
      ) : (
        <UiElementLayout className={styles.buttonInnerWrapper}>
          <UiTypography typographyType={TypographyTypeEnum.SPAN} className={classNameText}>
            {text}
          </UiTypography>
          {appendImage ? <UiImage src={appendImage} className={styles.appendImage} /> : null}
          {appendIcon ? <UiIcon icon={appendIcon} /> : null}
        </UiElementLayout>
      )}
    </button>
  );
};

export default ButtonElement;
