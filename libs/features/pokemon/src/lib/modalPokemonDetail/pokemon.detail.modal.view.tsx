// import { ReactElement } from 'react';

// import { Box } from '@ui/box';
// import { Image } from '@ui/image';
// import { Typography } from '@ui/typography';
// // import { Skeleton } from '@ui/skeleton';
// // import { Button } from '@ui/button';
// import { TagWrapper, TagItem } from '@ui/tag';
// import { ScrollWrapper } from '@ui/scrollWrapper';

// import { capitalizeName } from '@utils/textTransform';

// // import { useRenderStyles } from '@pokemon-pet-shop/hooks';
// // import { PokemonDetailAbilityObj, PokemonDetailTypesObj } from '@pokemon-pet-shop/typing';
// // import {
// //   Box,
// //   Typography,
// //   UiImage,
// //   mobSrcTypeEnum,
// //   UiButton,
// //   TypographyTypeEnum,
// //   UiTagWrapper,
// //   UiTagItem,
// //   ButtonSizeEnum,
// //   Skeleton,
// //   IconTypeEnum,
// //   UiScrollWrapper,
// // } from '@pokemon-pet-shop/ui';
// // import { globalStyles } from '@pokemon-pet-shop/ui/styles/global';
// // import {
// //   capitalizeNameUtil,
// //   classNamesUtil,
// //   removeHtmlCodeInStringUtil,
// // } from '@pokemon-pet-shop/utils';

// // import { UiPokemonAbilityName } from '../components/pokemon.ability.name';
// // import { usePokemonThemeLogic } from '../hooks/use.pokemon.theme.logic';

// import { UiHalfCircle } from './components/half.circle';
// import usePokemonDetailModalLogic from './use.pokemon.detail.modal.logic';

// const PokemonDetailModal = (): ReactElement => {
//   const {
//     modalData,
//     // speciesData,
//     // isSuccessUpdateCart,
//     // isPendingUpdateCart,
//     // speciesIsLoading,
//     // pricingIsLoading,
//     // onConvertKgToLbs,
//     // onConvertMetersToFtIn,
//     // onGetPricingFormat,
//     // onHandleUpdateCartSubmit,
//   } = usePokemonDetailModalLogic();
//   // const { getThemeClass } = usePokemonThemeLogic(modalData?.types);
//   // const { newStyles } = useRenderStyles(styles);

//   // const removeHtmlCodeInDescription = useMemo((): string => {
//   //   return removeHtmlCodeInStringUtil(
//   //     speciesData?.flavor_text_entries?.flavor_text
//   //   );
//   // }, [speciesData?.flavor_text_entries?.flavor_text]);

//   return (
//     <ScrollWrapper>
//       <Box className="relative">
//         <Box
//           className="z-0 relative rounded-t-md"
//           // className={classNamesUtil(
//           //   newStyles?.[`${getThemeClass}ImageBg`]
//           // )}
//         >
//           <Box className="absolute flex w-fit mt-md ml-md text-xl py-sm px-md rounded-md">
//             {/* <Typography>
//               {!pricingIsLoading && !speciesIsLoading ? (
//                 onGetPricingFormat
//               ) : (
//                 <Skeleton width={100} />
//               )}
//             </Typography> */}
//           </Box>

//           <Image
//             src={modalData?.sprites?.other?.['official-artwork']?.front_default}
//             className="h-full m-0 mx-auto"
//             alt={`${capitalizeName(modalData?.name)} Image`}
//             // mobSrcType={mobSrcTypeEnum.URI}
//           />
//           <UiHalfCircle />
//         </Box>

//         <Box className="h-[calc(100%_-_500px)] relative rounded-b-md">
//           <Box className="-mt-[45px] ml-2xl mr-2xl">
//             <Box className="w-full">
//               <Box className="flex justify-between items-center mb-sm">
//                 <Typography className="text-center mb-sm text-md">
//                   NO. {modalData?.order}
//                 </Typography>
//               </Box>
//               <Typography className="text-center mb-sm text-xl" variant="h1">
//                 {capitalizeName(modalData?.name)}
//               </Typography>
//               {/* className={newStyles.tagWrapper} */}
//               {modalData?.types ? (
//                 <TagWrapper>
//                   {(modalData?.types || []).map(
//                     (
//                       typeObj: any, // PokemonDetailTypesObj,
//                       i: number
//                     ): ReactElement | null => {
//                       return (
//                         <TagItem
//                           key={i}
//                           name={typeObj?.type?.name}
//                           // colorTheme={getThemeClass}
//                         />
//                       );
//                     }
//                   )}
//                 </TagWrapper>
//               ) : null}
//               {/* {!speciesIsLoading ? (
//                 <Typography
//                   className={newStyles.cardDescription}
//                   typographyType={TypographyTypeEnum.P}
//                 >
//                   {removeHtmlCodeInDescription}
//                 </Typography>
//               ) : (
//                 <Skeleton count={2} />
//               )} */}
//               {/* <Box className={newStyles.weightHeightWrapper}>
//                 <Typography
//                   className={newStyles.weight}
//                   typographyType={TypographyTypeEnum.P}
//                 >
//                   <Typography
//                     typographyType={TypographyTypeEnum.SPAN}
//                     className={globalStyles.fontBold}
//                   >
//                     Weight:
//                   </Typography>{' '}
//                   {`${onConvertKgToLbs?.lbs} ${onConvertKgToLbs?.kg}`}
//                 </Typography>

//                 <Typography
//                   className={newStyles.height}
//                   typographyType={TypographyTypeEnum.P}
//                 >
//                   <Typography
//                     typographyType={TypographyTypeEnum.SPAN}
//                     className={globalStyles.fontBold}
//                   >
//                     Height:
//                   </Typography>{' '}
//                   {onConvertMetersToFtIn?.ft
//                     ? `${onConvertMetersToFtIn?.ft} `
//                     : null}
//                   {onConvertMetersToFtIn?.in} {onConvertMetersToFtIn?.m}
//                 </Typography>
//               </Box> */}
//               {/* {(modalData?.abilities || []).map(
//                 (
//                   abilityObj: PokemonDetailAbilityObj,
//                   i: number
//                 ): ReactElement | null => {
//                   if (i > 1) {
//                     return null;
//                   }
//                   return (
//                     <UiPokemonAbilityName
//                       key={i}
//                       abilityData={abilityObj}
//                       typeData={modalData?.types}
//                       getThemeClass={getThemeClass}
//                       showAtkLine={false}
//                       displayInDetail
//                     />
//                   );
//                 }
//               )} */}
//             </Box>

//             <Box className="mt-lg flex justify-center">
//               {/* <Button
//             text={
//               isPendingUpdateCart
//                 ? `Catching ${capitalizeName(modalData?.name)}`
//                 : 'Get Pet'
//             }
//             size="large"
//             appendIcon={isPendingUpdateCart ? 'IconPokeBall' : null}
//             timerText="Caught"
//             isSuccess={isSuccessUpdateCart}
//             isDisabled={isPendingUpdateCart}
//             onClick={onHandleUpdateCartSubmit}
//           /> */}
//             </Box>
//           </Box>
//         </Box>
//       </Box>
//     </ScrollWrapper>
//   );
// };

// export default PokemonDetailModal;
