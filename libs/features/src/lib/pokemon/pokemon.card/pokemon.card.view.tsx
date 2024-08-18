import { memo, ReactElement, useMemo } from 'react';

import {
  UiElementLayout,
  UiImage,
  UiIconPokeType,
  UiTypography,
  ButtonTypeEnum,
  TypographyTypeEnum,
  UiButton,
} from '@pokemon-pet-shop/ui';
import classNames from 'classnames';

import { CardProps } from './pokemon.card.interface';
import styles from './pokemon.card.module.css';

const PokemonCard = ({ data = {}, dataDetail = {} }: CardProps): ReactElement => {
  /** This needs to change once the apps calls multiple different detail */
  const getPokemonDetail = useMemo(() => {
    return dataDetail;
  }, [dataDetail]);

  const getThemeClass = useMemo(() => {
    const typeName = getPokemonDetail?.types[0]?.type?.name;
    return `${typeName}Theme`;
  }, [getPokemonDetail]);

  return (
    <UiElementLayout
      className={classNames(styles.cardWrapper, styles?.[`${getThemeClass}Wrapper`])}
    >
      <UiElementLayout className={styles.hp}>45 HP</UiElementLayout>
      <UiImage
        src={getPokemonDetail?.sprites?.other?.['official-artwork']?.front_default}
        className={styles.image}
        alt={`${data?.name} Image`}
      />

      <UiElementLayout className={styles.cardContentWrapper}>
        <UiElementLayout className={styles.cardContentTopWrapper}>
          <UiElementLayout className={styles.cardSubHeadlineWrapper}>
            <UiTypography
              className={styles.cardSubHeadline}
              typographyType={TypographyTypeEnum.SPAN}
            >
              Basic Pokemon
            </UiTypography>
            <UiTypography
              className={styles.cardSubHeadline}
              typographyType={TypographyTypeEnum.SPAN}
            >
              NO. {getPokemonDetail?.order}
            </UiTypography>
          </UiElementLayout>
          <UiTypography className={styles.cardHeadline} typographyType={TypographyTypeEnum.H1}>
            {data?.name}
          </UiTypography>

          {(getPokemonDetail?.abilities || []).map((ability: any): ReactElement => {
            return (
              <UiElementLayout key={ability?.ability?.name} className={styles.atkWrapper}>
                <UiElementLayout className={styles.atkLine}></UiElementLayout>
                <UiElementLayout className={styles.atkCircle}>
                  <UiIconPokeType
                    type={getPokemonDetail?.types[0]?.type?.name}
                    width="10px"
                    height="10px"
                  />
                </UiElementLayout>
                <UiTypography className={styles.atkText}>{ability?.ability?.name}</UiTypography>
              </UiElementLayout>
            );
          })}
        </UiElementLayout>

        <UiElementLayout className={styles.btnWrapper}>
          <UiButton className={styles.btn}>Get Pet</UiButton>
          <UiButton className={styles.btn} type={ButtonTypeEnum.SECONDARY}>
            Details
          </UiButton>
        </UiElementLayout>
      </UiElementLayout>
    </UiElementLayout>
  );
};

export default memo(PokemonCard);
