import { ReactElement } from 'react';

import { halfCircle } from '@pokemon-pet-shop/assets';
import { useModalStore } from '@pokemon-pet-shop/store';
import { PokemonDetailAbilityObj } from '@pokemon-pet-shop/typing';
import {
  UiElementLayout,
  UiTypography,
  UiImage,
  mobSrcTypeEnum,
  UiButton,
  TypographyTypeEnum,
} from '@pokemon-pet-shop/ui';
import { classNamesUtil } from '@pokemon-pet-shop/utils';
import { ReactSVG } from 'react-svg';

import { UiPokemonAbilityName } from '../components/pokemon.ability.name';
import { usePokemonTheme } from '../hooks/use.pokemone.theme.logic';

import styles from './pokemon.detail.modal.module.css';
import usePokemonDetailModalLogic from './use.pokemon.detail.modal.logic';

const PokemonDetailModal = (): ReactElement => {
  const { modalOptions } = useModalStore((state) => state);
  const { data: modalData } = modalOptions;
  const { detailData, isError, isLoading, isFetching } = usePokemonDetailModalLogic(modalData?.id);
  const { getThemeClass } = usePokemonTheme(modalData);

  const handleAddPetInCartClick = () => {
    console.log('handleAddPetInCartClick');
  };

  return (
    <UiElementLayout className={styles.modal}>
      <UiElementLayout className={styles.imageContainer}>
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
                typographyType={TypographyTypeEnum.SPAN}
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

            {(modalData?.types || []).map(
              (typeObj: PokemonDetailAbilityObj, i: number): ReactElement | null => {
                return (
                  <UiElementLayout key={i}>
                    <UiTypography
                      // className={classNamesUtil(
                      //   styles.atkText,
                      //   styles?.[`${getThemeClass}ContentCardText`]
                      // )}
                      typographyType={TypographyTypeEnum.SPAN}
                    >
                      {typeObj?.type?.name}
                    </UiTypography>
                  </UiElementLayout>
                );
              }
            )}

            <UiTypography
              className={classNamesUtil(styles.cardHeadline)}
              typographyType={TypographyTypeEnum.H2}
            >
              {detailData?.flavor_text_entries?.flavor_text}
            </UiTypography>

            <UiElementLayout>
              <UiTypography
                // className={classNamesUtil(styles.cardHeadline)}
                typographyType={TypographyTypeEnum.P}
              >
                Weight: {modalData?.weight}
              </UiTypography>

              <UiTypography
                // className={classNamesUtil(styles.cardHeadline)}
                typographyType={TypographyTypeEnum.P}
              >
                Height: {modalData?.height}
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
                  />
                );
              }
            )}
          </UiElementLayout>

          <UiElementLayout className={styles.btnWrapper}>
            <UiButton className={styles.btn} text="Get Pet" onClick={handleAddPetInCartClick} />
          </UiElementLayout>
        </UiElementLayout>
      </UiElementLayout>
    </UiElementLayout>
  );
};

export default PokemonDetailModal;
