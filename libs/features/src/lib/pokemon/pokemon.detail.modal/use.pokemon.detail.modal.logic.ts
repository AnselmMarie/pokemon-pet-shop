import { useMemo } from 'react';

import { useGetPokemonSpecies, useGetPricing, useUpdateCart } from '@pokemon-pet-shop/services';
import { useModalStore } from '@pokemon-pet-shop/store';
import {
  GenericNonReturnType,
  PokemonListApi,
  PokemonSpeciesApi,
  PricingApi,
} from '@pokemon-pet-shop/typing';
import { pricingFormatUtil } from '@pokemon-pet-shop/utils';

interface PokemonDetailModalReturn {
  modalData: PokemonListApi;
  speciesData: PokemonSpeciesApi | undefined;
  speciesIsError: boolean;
  speciesIsLoading: boolean;
  pricingData: PricingApi | undefined;
  pricingIsError: boolean;
  pricingIsLoading: boolean;
  isPendingUpdateCart: boolean;
  isSuccessUpdateCart: boolean;
  onConvertKgToLbs: any;
  onConvertMetersToFtIn: any;
  onGetPricingFormat: any;
  onHandleUpdateCartSubmit: GenericNonReturnType;
}

const usePokemonDetailModalLogic = (): PokemonDetailModalReturn => {
  const { modalOptions } = useModalStore((state) => state);
  const { data = {} } = modalOptions;
  const modalData = {
    ...data,
  } as PokemonListApi;

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

  console.log('updateCartMutation', updateCartMutation);

  return {
    modalData,
    speciesData,
    isSuccessUpdateCart: updateCartMutation?.isSuccess,
    isPendingUpdateCart: updateCartMutation?.isPending,
    speciesIsError,
    speciesIsLoading: speciesIsLoading || speciesIsFetching,
    pricingData,
    pricingIsError,
    pricingIsLoading: pricingIsLoading || pricingIsFetching,
    onConvertKgToLbs: convertKgToLbs,
    onConvertMetersToFtIn: convertMetersToFtIn,
    onGetPricingFormat: getPricingFormat,
    onHandleUpdateCartSubmit: handleUpdateCartSubmit,
  };
};

export default usePokemonDetailModalLogic;
