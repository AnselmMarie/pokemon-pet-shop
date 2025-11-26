// import { useMemo } from 'react';

// // import { useModalStore } from '@pokemon-pet-shop/store';
// // import {
// //   GenericNonReturnType,
// //   PokemonListApi,
// //   PokemonSpeciesApi,
// //   PricingApi,
// // } from '@pokemon-pet-shop/typing';
// // import { pricingFormatUtil } from '@pokemon-pet-shop/utils';

// // interface PokemonDetailModalReturn {
// //   modalData: PokemonListApi;
// //   speciesData: PokemonSpeciesApi | undefined;
// //   speciesIsError: boolean;
// //   speciesIsLoading: boolean;
// //   pricingData: PricingApi | undefined;
// //   pricingIsError: boolean;
// //   pricingIsLoading: boolean;
// //   isPendingUpdateCart: boolean;
// //   isSuccessUpdateCart: boolean;
// //   onConvertKgToLbs: any;
// //   onConvertMetersToFtIn: any;
// //   onGetPricingFormat: any;
// //   onHandleUpdateCartSubmit: GenericNonReturnType;
// // }

// export const usePokemonDetailModalLogic = (): any => {
//   // const { modalOptions } = useModalStore((state) => state);
//   // const { data = {} } = modalOptions;
//   // const modalData = {
//   //   ...data,
//   // } as PokemonListApi;

//   // const updateCartMutation = useUpdateCart();

//   const handleUpdateCartSubmit = () => {
//     updateCartMutation.mutate({
//       id: modalData?.id,
//       addToCart: true,
//     });
//   };

//   return {
//     modalData,
//     // speciesData,
//     // isSuccessUpdateCart: updateCartMutation?.isSuccess,
//     // isPendingUpdateCart: updateCartMutation?.isPending,
//     // speciesIsError,
//     // speciesIsLoading: speciesIsLoading || speciesIsFetching,
//     // pricingData,
//     // pricingIsError,
//     // pricingIsLoading: pricingIsLoading || pricingIsFetching,
//     // onConvertKgToLbs: convertKgToLbs,
//     // onConvertMetersToFtIn: convertMetersToFtIn,
//     // onGetPricingFormat: getPricingFormat,
//     // onHandleUpdateCartSubmit: handleUpdateCartSubmit,
//   };
// };
