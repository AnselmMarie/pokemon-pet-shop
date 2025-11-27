import { ReactElement, useMemo } from 'react';

import { Box } from '@ui/box';
import { Typography } from '@ui/typography';
import { Skeleton } from '@ui/skeleton';
import { Button } from '@ui/button';
import { TagWrapper, TagItem } from '@ui/tag';

import { useGetPokemonSpecies } from '@services/pokemon-api';
import { useUpdateCart } from '@services/cart-api';

import { capitalizeName, removeHtmlCodeInString } from '@utils/textTransform';

import { PokemonAbilityName } from '../components/pokemon.ability.name';

export const PokemonDetailModalBody = ({
  pokeCreature,
  pokeTypeClass,
}: any): ReactElement => {
  const pokeSpeciesRes = useGetPokemonSpecies([String(pokeCreature?.id)]);
  const {
    data: speciesData,
    isLoading: speciesIsLoading,
    isFetching: speciesIsFetching,
  }: any = pokeSpeciesRes[0];

  const {
    mutate: mutateUpdateCart,
    isPending: isPendingUpdateCart,
    isSuccess: isSuccessUpdateCart,
  } = useUpdateCart();

  const handleUpdateCartSubmit = () => {
    mutateUpdateCart({
      id: pokeCreature?.id,
      addToCart: true,
    });
  };

  const convertKgToLbs = useMemo(() => {
    const stringKgNoDecimal = String(pokeCreature?.weight);

    const kgDecimal = stringKgNoDecimal.replace(/\w$/, (el) => {
      return `.${el}`;
    });

    const mathRound = Math.round(Number(kgDecimal));

    let lbs = 0;
    for (let loop = 0; loop < mathRound; loop++) {
      lbs = lbs + 2.20462;
    }

    return { lbs: `${Math.trunc(lbs)} lbs`, kg: `(${kgDecimal} kg)` };
  }, [pokeCreature?.weight]);

  const convertMetersToFtIn = useMemo(() => {
    const stringKgNoDecimal = String(pokeCreature?.height);

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

    const convertFtInches = (
      dFt: string | null = null,
      dIn: string | null = null
    ) => {
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
  }, [pokeCreature?.height]);

  const removeHtmlCodeInDescription = useMemo((): string => {
    return removeHtmlCodeInString(
      speciesData?.flavor_text_entries?.flavor_text
    );
  }, [speciesData?.flavor_text_entries?.flavor_text]);

  return (
    <Box className="h-[calc(100%_-_500px)] relative rounded-b-md">
      <Box className="-mt-[45px] ml-2xl mr-2xl">
        <Box className="w-full">
          <Box className="flex justify-between items-center mb-sm">
            <Typography className="text-center mb-sm text-md">
              NO. {pokeCreature?.order}
            </Typography>
          </Box>
          <Typography className="text-center mb-sm text-xl" variant="h1">
            {capitalizeName(pokeCreature?.name)}
          </Typography>
          {pokeCreature?.types ? (
            <Box className="mb-md">
              <TagWrapper>
                {(pokeCreature?.types || []).map(
                  (
                    typeObj: any, // PokemonDetailTypesObj,
                    i: number
                  ): ReactElement | null => {
                    return (
                      <TagItem
                        key={i}
                        name={typeObj?.type?.name}
                        colorTheme={pokeTypeClass}
                      />
                    );
                  }
                )}
              </TagWrapper>
            </Box>
          ) : null}

          {!speciesIsLoading || !speciesIsFetching ? (
            <Typography className="text-lg mb-lg">
              {removeHtmlCodeInDescription}
            </Typography>
          ) : (
            <Skeleton count={2} />
          )}

          <Box className="flex flex-col md:flex-row gap-md mb-lg">
            <Box className="text-lg md:mb-sm">
              <Typography className="font-bold">Weight:</Typography>{' '}
              <Typography>{`${convertKgToLbs?.lbs} ${convertKgToLbs?.kg}`}</Typography>
            </Box>

            <Box className="text-lg md:mb-sm">
              <Typography className="font-bold">Height:</Typography>{' '}
              <Typography>
                {convertMetersToFtIn?.ft ? `${convertMetersToFtIn?.ft} ` : null}
                {convertMetersToFtIn?.in} {convertMetersToFtIn?.m}
              </Typography>
            </Box>
          </Box>
          {(pokeCreature?.abilities || []).map(
            (
              abilityObj: any, // PokemonDetailAbilityObj,
              i: number
            ): ReactElement | null => {
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

        <Box className="mt-lg flex justify-center">
          <Button
            text={
              isPendingUpdateCart
                ? `Catching ${capitalizeName(pokeCreature?.name)}`
                : 'Get Pet'
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
