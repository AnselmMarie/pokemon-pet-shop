import { ReactElement, useMemo } from 'react';

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
  UiTagWrapper,
  UiTagItem,
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
  const { getThemeClass } = usePokemonTheme(modalData.types);

  const handleAddPetInCartClick = () => {
    console.log('handleAddPetInCartClick');
  };

  const convertKgToLbs = useMemo(() => {
    const stringKgNoDecimal = String(modalData?.weight);

    const kgDecimal = stringKgNoDecimal.replace(/\w$/, (match) => {
      return `.${match}`;
    });

    const mathRound = Math.round(Number(kgDecimal));

    let lbs = 0;
    for (let loop = 0; loop < mathRound; loop++) {
      lbs = lbs + 2.20462;
    }

    return { lbs: `${Math.trunc(lbs)} lbs`, kg: `(${kgDecimal} kg)` };
  }, [modalData?.weight]);

  const convertMetersToFtIn = useMemo(() => {
    const stringKgNoDecimal = String(modalData?.height);

    const mDecimal = stringKgNoDecimal.replace(/\w$/, (match) => {
      return `.${match}`;
    });

    const ftTotal = Number(mDecimal) * 3.28084;
    const ftTotalSplit = String(ftTotal).split('.');
    const ftInObj = {
      ft: '',
      in: '',
      m: `(${mDecimal} m)`,
    };

    const convertFtInches = (dFt: string | null = null, dIn: string | null = null) => {
      const feet = Number(dFt);
      const inches = Math.round(Number(`.${dIn}`) * 12);

      if (inches === 12) {
        ftInObj.ft = `${feet + 1}'`;
        ftInObj.in = `0"`;
        return;
      }

      ftInObj.ft = `${feet}'`;
      ftInObj.in = `${String(inches)}"`;
    };

    if (ftTotalSplit.length === 2) {
      convertFtInches(ftTotalSplit[0], ftTotalSplit[1]);
    } else {
      convertFtInches(ftTotalSplit[1]);
    }

    return ftInObj;
  }, [modalData?.height]);

  return (
    <UiElementLayout className={styles.modal}>
      <UiElementLayout
        className={classNamesUtil(styles.imageContainer, styles?.[`${getThemeClass}ImageBg`])}
      >
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
                  (typeObj: PokemonDetailAbilityObj, i: number): ReactElement | null => {
                    return <UiTagItem key={i} name={typeObj?.type?.name} />;
                  }
                )}
              </UiTagWrapper>
            ) : null}

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
                Weight: {`${convertKgToLbs?.lbs} ${convertKgToLbs?.kg}`}
              </UiTypography>

              <UiTypography
                // className={classNamesUtil(styles.cardHeadline)}
                typographyType={TypographyTypeEnum.P}
              >
                Height: {convertMetersToFtIn?.ft ? `${convertMetersToFtIn?.ft} ` : null}
                {convertMetersToFtIn?.in} {convertMetersToFtIn?.m}
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
            <UiButton className={styles.btn} text="Get Pet" onClick={handleAddPetInCartClick} />
          </UiElementLayout>
        </UiElementLayout>
      </UiElementLayout>
    </UiElementLayout>
  );
};

export default PokemonDetailModal;
