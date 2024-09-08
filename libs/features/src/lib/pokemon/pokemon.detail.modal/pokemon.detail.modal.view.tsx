import { ReactElement } from 'react';

import { halfCircle } from '@pokemon-pet-shop/assets';
import { useModalStore } from '@pokemon-pet-shop/store';
import {
  PokemonDetailAbilityObj,
  PokemonDetailTypesObj,
  PokemonListApi,
} from '@pokemon-pet-shop/typing';
import {
  UiElementLayout,
  UiTypography,
  UiImage,
  mobSrcTypeEnum,
  UiButton,
  TypographyTypeEnum,
  UiTagWrapper,
  UiTagItem,
} from '@pokemon-pet-shop/ui';
import { classNamesUtil } from '@pokemon-pet-shop/utils';
import { ReactSVG } from 'react-svg';

import { UiPokemonAbilityName } from '../components/pokemon.ability.name';
import { usePokemonTheme } from '../hooks/use.pokemon.theme.logic';

import styles from './pokemon.detail.modal.module.css';
import usePokemonDetailModalLogic from './use.pokemon.detail.modal.logic';

const PokemonDetailModal = (): ReactElement => {
  const { modalOptions } = useModalStore((state) => state);
  const { data = {} } = modalOptions;
  const modalData = {
    ...data,
  } as PokemonListApi;
  const {
    speciesData,
    onConvertKgToLbs,
    onConvertMetersToFtIn,
    onGetPricingFormat,
    onHandleUpdateCartSubmit,
  } = usePokemonDetailModalLogic(modalData);
  const { getThemeClass } = usePokemonTheme(modalData?.types);

  return (
    <UiElementLayout className={styles.modal}>
      <UiElementLayout
        className={classNamesUtil(styles.imageContainer, styles?.[`${getThemeClass}ImageBg`])}
      >
        <UiTypography>{onGetPricingFormat}</UiTypography>
        <UiImage
          src={modalData?.sprites?.other?.['official-artwork']?.front_default}
          className={styles.image}
          alt={`${modalData?.name} Image`}
          mobSrcType={mobSrcTypeEnum.URI}
        />
        <ReactSVG
          src={halfCircle}
          // title={`${type} Icon`}
          beforeInjection={(svg) => {
            // svg.setAttribute('width', '100%');
            // svg.setAttribute('height', size);
          }}
          className={styles.contentCurve}
        />
      </UiElementLayout>

      <UiElementLayout className={styles.contentContainer}>
        <UiElementLayout className={classNamesUtil(styles.contentCardWrapper)}>
          <UiElementLayout className={styles.cardContentTopWrapper}>
            <UiElementLayout className={styles.cardSubHeadlineWrapper}>
              <UiTypography
                className={classNamesUtil(styles.cardSubHeadline)}
                typographyType={TypographyTypeEnum.P}
              >
                NO. {modalData?.order}
              </UiTypography>
            </UiElementLayout>
            <UiTypography
              className={classNamesUtil(styles.cardHeadline)}
              typographyType={TypographyTypeEnum.H1}
            >
              {modalData?.name}
            </UiTypography>

            {modalData?.types ? (
              <UiTagWrapper>
                {(modalData?.types || []).map(
                  (typeObj: PokemonDetailTypesObj, i: number): ReactElement | null => {
                    return <UiTagItem key={i} name={typeObj?.type?.name} />;
                  }
                )}
              </UiTagWrapper>
            ) : null}

            <UiTypography
              className={classNamesUtil(styles.cardHeadline)}
              typographyType={TypographyTypeEnum.H2}
            >
              {speciesData?.flavor_text_entries?.flavor_text}
            </UiTypography>

            <UiElementLayout>
              <UiTypography
                // className={classNamesUtil(styles.cardHeadline)}
                typographyType={TypographyTypeEnum.P}
              >
                Weight: {`${onConvertKgToLbs?.lbs} ${onConvertKgToLbs?.kg}`}
              </UiTypography>

              <UiTypography
                // className={classNamesUtil(styles.cardHeadline)}
                typographyType={TypographyTypeEnum.P}
              >
                Height: {onConvertMetersToFtIn?.ft ? `${onConvertMetersToFtIn?.ft} ` : null}
                {onConvertMetersToFtIn?.in} {onConvertMetersToFtIn?.m}
              </UiTypography>
            </UiElementLayout>

            {(modalData?.abilities || []).map(
              (abilityObj: PokemonDetailAbilityObj, i: number): ReactElement | null => {
                if (i > 1) {
                  return null;
                }
                return (
                  <UiPokemonAbilityName
                    key={i}
                    abilityData={abilityObj}
                    typeData={modalData?.types}
                    getThemeClass={getThemeClass}
                    showAtkLine={false}
                  />
                );
              }
            )}
          </UiElementLayout>

          <UiElementLayout className={styles.btnWrapper}>
            <UiButton className={styles.btn} text="Get Pet" onClick={onHandleUpdateCartSubmit} />
          </UiElementLayout>
        </UiElementLayout>
      </UiElementLayout>
    </UiElementLayout>
  );
};

export default PokemonDetailModal;
