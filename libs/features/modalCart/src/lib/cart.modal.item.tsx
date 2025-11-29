import { ReactElement } from 'react';

import { Box } from '@ui/box';
import { Typography } from '@ui/typography';
import { Image } from '@ui/image';
import { Icon } from '@ui/icon';

import { useDeleteCartItem, useUpdateCart } from '@services/cart-api';

import { pricingFormatUSD } from '@utils/pricing';
import { capitalizeName } from '@utils/textTransform';

const CartModalItem = ({ el }: any): ReactElement => {
  const { mutate: updateMutate, isPending: updateIsPending } = useUpdateCart();
  const { mutate: deleteMutate, isPending: deleteIsPending } =
    useDeleteCartItem();

  const handleRemoveCartItem = (id: string) => {
    deleteMutate(id);
  };

  const handleAddToCart = (id: string) => {
    updateMutate({
      id,
      addToCart: true,
      removeFromCart: false,
    });
  };

  const handleRemoveFromCart = (id: string) => {
    updateMutate({
      id,
      addToCart: false,
      removeFromCart: true,
    });
  };

  return (
    <Box className="flex flex-col justify-center relative">
      <Box className="flex flex-row gap-md">
        <Box
          className="rounded-sm p-sm border-2 border-solid"
          // className={classNamesUtil(
          //   newStyles.imageWrapper,
          //   newStyles?.[`${getThemeClass}ImageWrapper`]
          // )}
        >
          <Image
            src={el?.image}
            className="w-[115px] h-[115px]"
            alt={`${el?.name} Image`}
          />
        </Box>
        <Box className="flex-1">
          <Typography className="text-lg mb-sm" variant="h1">
            {capitalizeName(el?.name)}
          </Typography>
          <Typography className="text-bold text-lg">
            {pricingFormatUSD(el?.price)}
          </Typography>

          <Box className="flex bg-lightGray gap-md rounded-pill w-fit items-center p-sm mt-sm">
            <Icon
              icon="IconMinus"
              size={24}
              // stroke={
              //   theme === ThemeTypeEnum.LIGHT
              //     ? THEME_BLUE_600
              //     : THEME_NETURAL_100
              // }
              isDisabled={el?.quantity === 1 || updateIsPending}
              onClick={() => handleRemoveFromCart(el?.id)}
            />
            <Typography>{el?.quantity}</Typography>
            <Icon
              icon="IconPlus"
              size={24}
              // stroke={
              //   theme === ThemeTypeEnum.LIGHT
              //     ? THEME_BLUE_600
              //     : THEME_NETURAL_100
              // }
              isDisabled={updateIsPending}
              onClick={() => handleAddToCart(el?.id)}
            />
          </Box>
        </Box>

        <Icon
          icon="IconTrash"
          stroke="border-error"
          isDisabled={deleteIsPending}
          onClick={() => handleRemoveCartItem(el?.id)}
        />
      </Box>
      <Box className="w-full border my-lg border-t-medGrey" />
    </Box>
  );
};

export default CartModalItem;
