import { ReactElement } from 'react';

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
} from '@pokemon-pet-shop/ui';
import { classNamesUtil } from '@pokemon-pet-shop/utils';

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

  return (
    <UiElementLayout className={newStyles.modal}>
      <UiElementLayout
        className={classNamesUtil(newStyles.imageContainer, styles?.[`${getThemeClass}ImageBg`])}
      >
        <UiTypography>{onGetPricingFormat}</UiTypography>
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
              className={classNamesUtil(newStyles.cardHeadline)}
              typographyType={TypographyTypeEnum.H2}
            >
              {speciesData?.flavor_text_entries?.flavor_text}
            </UiTypography>

            <UiElementLayout>
              <UiTypography
                // className={classNamesUtil(newStyles.cardHeadline)}
                typographyType={TypographyTypeEnum.P}
              >
                Weight: {`${onConvertKgToLbs?.lbs} ${onConvertKgToLbs?.kg}`}
              </UiTypography>

              <UiTypography
                // className={classNamesUtil(newStyles.cardHeadline)}
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

          <UiElementLayout className={newStyles.btnWrapper}>
            <UiButton className={newStyles.btn} text="Get Pet" onClick={onHandleUpdateCartSubmit} />
          </UiElementLayout>
        </UiElementLayout>
      </UiElementLayout>
    </UiElementLayout>
  );
};

export default PokemonDetailModal;
