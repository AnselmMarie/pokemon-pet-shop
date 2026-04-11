import { ReactElement, useMemo } from 'react';

import {
  IconPokeListType,
  PokemonDetailAbility,
  PokemonDetailBase,
  PokemonDetailTypes,
  PokemonSpecies,
} from '@pokemon-pet-shop/types';
import { Box, Typography } from '@pokemon-pet-shop/ui-primitives';
import { Button, TagWrapper, TagItem } from '@pokemon-pet-shop/ui-components';

import { useGetPokemonSpecies } from '@pokemon-pet-shop/service-pokemon';
import { useUpdateCart } from '@pokemon-pet-shop/service-cart';

import { capitalizeName, removeHtmlCodeInString } from '@pokemon-pet-shop/util-text-transform';

import { PokemonAbilityName } from '../components/pokemon-ability-name';
import { convertKgToLbs, convertMetersToFtIn } from './pokemon-detail-modal-body.util';

interface PokemonDetailModalBodyProps {
  pokeCreature: PokemonDetailBase & { name: string };
  pokeTypeClass: IconPokeListType;
}

export const PokemonDetailModalBody = ({
  pokeCreature,
  pokeTypeClass,
}: PokemonDetailModalBodyProps): ReactElement => {
  const pokeSpeciesRes = useGetPokemonSpecies([String(pokeCreature?.id)]);
  const speciesData = pokeSpeciesRes[0].data as PokemonSpecies;

  const {
    mutate: mutateUpdateCart,
    isPending: isPendingUpdateCart,
    isSuccess: isSuccessUpdateCart,
  } = useUpdateCart();

  const handleUpdateCartSubmit = () => {
    mutateUpdateCart({
      id: String(pokeCreature?.id),
      addToCart: true,
    });
  };

  const weightData = useMemo(() => convertKgToLbs(pokeCreature?.weight), [pokeCreature?.weight]);
  const heightData = useMemo(
    () => convertMetersToFtIn(pokeCreature?.height),
    [pokeCreature?.height]
  );
  const removeHtmlCodeInDescription = useMemo((): string => {
    return removeHtmlCodeInString(speciesData?.flavor_text_entries?.flavor_text);
  }, [speciesData?.flavor_text_entries?.flavor_text]);

  return (
    <Box className="h-[calc(100%_-_500px)] relative rounded-b-md">
      <Box className="-mt-[30px] ml-2xl mr-2xl">
        <Box className="w-full">
          <Box className="flex justify-between items-center mb-sm">
            <Typography className="w-full text-center mb-sm text-md">
              NO. {pokeCreature?.order}
            </Typography>
          </Box>
          <Typography className="text-center mb-sm -mt-xl text-2xl" variant="h1">
            {capitalizeName(pokeCreature?.name)}
          </Typography>
          {pokeCreature?.types ? (
            <Box className="mb-xl">
              <TagWrapper>
                {(pokeCreature?.types ?? []).map(
                  (typeObj: PokemonDetailTypes, i: number): ReactElement | null => {
                    return (
                      <TagItem key={i} name={typeObj?.type?.name} pokeTypeClass={pokeTypeClass} />
                    );
                  }
                )}
              </TagWrapper>
            </Box>
          ) : null}

          <Typography className="text-md mb-lg">{removeHtmlCodeInDescription}</Typography>

          <Box className="flex flex-col md:flex-row gap-md mb-lg">
            <Box className="flex flex-row md:flex-auto gap-xs text-md md:mb-sm">
              <Typography className="font-bold">Weight:</Typography>{' '}
              <Typography>{`${weightData?.lbs} ${weightData?.kg}`}</Typography>
            </Box>

            <Box className="flex flex-row md:flex-auto gap-xs text-md md:mb-sm">
              <Typography className="font-bold">Height:</Typography>{' '}
              <Typography>
                {heightData?.ft ? `${heightData?.ft} ` : null}
                {heightData?.in} {heightData?.m}
              </Typography>
            </Box>
          </Box>
          {pokeCreature?.abilities.length > 0 && (
            <Box className="mb-2xl">
              {(pokeCreature?.abilities ?? []).map(
                (abilityObj: PokemonDetailAbility, i: number): ReactElement | null => {
                  if (i > 1) {
                    return null;
                  }
                  return (
                    <PokemonAbilityName
                      key={i}
                      abilityData={abilityObj}
                      typeData={pokeCreature?.types}
                      pokeTypeClass={pokeTypeClass}
                      showAtkLine={false}
                      displayInDetail
                    />
                  );
                }
              )}
            </Box>
          )}
        </Box>

        <Box className="mt-lg flex justify-center">
          <Button
            text={
              isPendingUpdateCart ? `Catching ${capitalizeName(pokeCreature?.name)}` : 'Get Pet'
            }
            size="large"
            appendIcon={isPendingUpdateCart ? 'IconPokeBall' : undefined}
            timerText="Caught"
            isSuccess={isSuccessUpdateCart}
            isDisabled={isPendingUpdateCart}
            onClick={handleUpdateCartSubmit}
          />
        </Box>
      </Box>
    </Box>
  );
};
