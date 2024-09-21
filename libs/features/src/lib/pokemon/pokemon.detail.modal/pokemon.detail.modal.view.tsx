import { ReactElement, useMemo } from 'react';

import { useRenderStyles } from '@pokemon-pet-shop/hooks';
import { PokemonDetailAbilityObj, PokemonDetailTypesObj } from '@pokemon-pet-shop/typing';
import {
  UiElementLayout,
  UiTypography,
  UiImage,
  mobSrcTypeEnum,
  UiButton,
  TypographyTypeEnum,
  UiTagWrapper,
  UiTagItem,
  ButtonSizeEnum,
} from '@pokemon-pet-shop/ui';
import { globalStyles } from '@pokemon-pet-shop/ui/styles/global';
import { capitalizeNameUtil, classNamesUtil } from '@pokemon-pet-shop/utils';

import { UiPokemonAbilityName } from '../components/pokemon.ability.name';
import { usePokemonThemeLogic } from '../hooks/use.pokemon.theme.logic';

import { UiHalfCircle } from './components/half.circle.svg';
import { styles } from './pokemon.detail.modal.module';
import usePokemonDetailModalLogic from './use.pokemon.detail.modal.logic';

const PokemonDetailModal = (): ReactElement => {
  const {
    modalData,
    speciesData,
    onConvertKgToLbs,
    onConvertMetersToFtIn,
    onGetPricingFormat,
    onHandleUpdateCartSubmit,
  } = usePokemonDetailModalLogic();
  const { getThemeClass } = usePokemonThemeLogic(modalData?.types);
  const { newStyles } = useRenderStyles(styles);

  const capitalizeName = useMemo((): string => {
    return capitalizeNameUtil(modalData?.name);
  }, [modalData?.name]);

  return (
    <UiElementLayout className={newStyles.modal}>
      <UiElementLayout
        className={classNamesUtil(newStyles.imageContainer, styles?.[`${getThemeClass}ImageBg`])}
      >
        <UiElementLayout className={styles.priceWrapper}>
          <UiTypography className={styles.priceText}>{onGetPricingFormat}</UiTypography>
        </UiElementLayout>
        <UiImage
          src={modalData?.sprites?.other?.['official-artwork']?.front_default}
          className={newStyles.image}
          alt={`${modalData?.name} Image`}
          mobSrcType={mobSrcTypeEnum.URI}
        />
        <UiHalfCircle />
      </UiElementLayout>

      <UiElementLayout className={newStyles.contentContainer}>
        <UiElementLayout className={classNamesUtil(newStyles.contentCardWrapper)}>
          <UiElementLayout className={newStyles.cardContentTopWrapper}>
            <UiElementLayout className={newStyles.cardSubHeadlineWrapper}>
              <UiTypography
                className={classNamesUtil(newStyles.cardSubHeadline)}
                typographyType={TypographyTypeEnum.P}
              >
                NO. {modalData?.order}
              </UiTypography>
            </UiElementLayout>
            <UiTypography
              className={classNamesUtil(newStyles.cardHeadline)}
              typographyType={TypographyTypeEnum.H1}
            >
              {capitalizeName}
            </UiTypography>

            {modalData?.types ? (
              <UiTagWrapper className={styles.tagWrapper}>
                {(modalData?.types || []).map(
                  (typeObj: PokemonDetailTypesObj, i: number): ReactElement | null => {
                    return (
                      <UiTagItem key={i} name={typeObj?.type?.name} colorTheme={getThemeClass} />
                    );
                  }
                )}
              </UiTagWrapper>
            ) : null}

            <UiTypography
              className={newStyles.cardDescription}
              typographyType={TypographyTypeEnum.P}
            >
              {speciesData?.flavor_text_entries?.flavor_text}
            </UiTypography>

            <UiElementLayout className={styles.weightHeightWrapper}>
              <UiTypography className={newStyles.weight} typographyType={TypographyTypeEnum.P}>
                <UiTypography
                  typographyType={TypographyTypeEnum.SPAN}
                  className={globalStyles.fontBold}
                >
                  Weight:
                </UiTypography>{' '}
                {`${onConvertKgToLbs?.lbs} ${onConvertKgToLbs?.kg}`}
              </UiTypography>

              <UiTypography className={newStyles.height} typographyType={TypographyTypeEnum.P}>
                <UiTypography
                  typographyType={TypographyTypeEnum.SPAN}
                  className={globalStyles.fontBold}
                >
                  Height:
                </UiTypography>{' '}
                {onConvertMetersToFtIn?.ft ? `${onConvertMetersToFtIn?.ft} ` : null}
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
                    displayInDetail
                  />
                );
              }
            )}
          </UiElementLayout>

          <UiElementLayout className={newStyles.btnWrapper}>
            <UiButton
              className={newStyles.btn}
              text="Get Pet"
              onClick={onHandleUpdateCartSubmit}
              size={ButtonSizeEnum.LARGE}
            />
          </UiElementLayout>
        </UiElementLayout>
      </UiElementLayout>
    </UiElementLayout>
  );
};

export default PokemonDetailModal;
