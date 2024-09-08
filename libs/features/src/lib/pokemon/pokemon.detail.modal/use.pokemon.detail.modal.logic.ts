import { useMemo } from 'react';

import { useGetPokemonSpecies, useGetPricing, useUpdateCart } from '@pokemon-pet-shop/services';
import {
  GenericNonReturnType,
  PokemonListApi,
  PokemonSpeciesApi,
  PricingApi,
} from '@pokemon-pet-shop/typing';
import { pricingFormatUtil } from '@pokemon-pet-shop/utils';

interface PokemonDetailModalReturn {
  speciesData: PokemonSpeciesApi | undefined;
  speciesIsError: boolean;
  speciesIsLoading: boolean;
  speciesIsFetching: boolean;
  pricingData: PricingApi | undefined;
  pricingIsError: boolean;
  pricingIsLoading: boolean;
  pricingIsFetching: boolean;
  onConvertKgToLbs: any;
  onConvertMetersToFtIn: any;
  onGetPricingFormat: any;
  onHandleUpdateCartSubmit: GenericNonReturnType;
}

const usePokemonDetailModalLogic = (modalData: PokemonListApi): PokemonDetailModalReturn => {
  const res = useGetPokemonSpecies([String(modalData?.id)]);
  const {
    data: speciesData,
    isError: speciesIsError,
    isLoading: speciesIsLoading,
    isFetching: speciesIsFetching,
  } = res[0];
  const pricingRes = useGetPricing();
  const {
    data: pricingData,
    isError: pricingIsError,
    isLoading: pricingIsLoading,
    isFetching: pricingIsFetching,
  } = pricingRes;
  const updateCartMutation = useUpdateCart();

  const handleUpdateCartSubmit = () => {
    updateCartMutation.mutate({
      id: modalData?.id,
      addToCart: true,
    });
  };

  const convertKgToLbs = useMemo(() => {
    const stringKgNoDecimal = String(modalData?.weight);

    const kgDecimal = stringKgNoDecimal.replace(/\w$/, (el) => {
      return `.${el}`;
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

    const mDecimal = stringKgNoDecimal.replace(/\w$/, (el) => {
      return `.${el}`;
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

  const getPricingFormat = useMemo((): number | string => {
    return pricingFormatUtil(
      {
        name: speciesData?.name,
        isLegendary: speciesData?.is_legendary,
        isMythical: speciesData?.is_mythical,
        chainData: speciesData?.evolution_chain?.chain,
      },
      pricingData
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    speciesData?.name,
    speciesData?.is_legendary,
    speciesData?.is_mythical,
    speciesData?.evolution_chain?.chain,
    pricingData,
  ]);

  return {
    speciesData,
    speciesIsError,
    speciesIsLoading,
    speciesIsFetching,
    pricingData,
    pricingIsError,
    pricingIsLoading,
    pricingIsFetching,
    onConvertKgToLbs: convertKgToLbs,
    onConvertMetersToFtIn: convertMetersToFtIn,
    onGetPricingFormat: getPricingFormat,
    onHandleUpdateCartSubmit: handleUpdateCartSubmit,
  };
};

export default usePokemonDetailModalLogic;
