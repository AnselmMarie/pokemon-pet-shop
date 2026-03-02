import { ReactElement, useState } from 'react';

import { PokemonDetailAbility, PokemonDetailBase } from '@pokemon-pet-shop/types';
import { Box, Card, Image, Typography } from '@pokemon-pet-shop/ui-primitives';
import { Skeleton, Button } from '@pokemon-pet-shop/ui-components';

import { isWeb } from '@pokemon-pet-shop/util-detect';
import { capitalizeName } from '@pokemon-pet-shop/util-text-transform';
import { getPokeTypePrefixClass } from '@pokemon-pet-shop/util-poke-type';

import { PokemonAbilityName } from '../components/pokemon-ability-name';
import { PokemonDetailModal } from '../modal-pokemon-detail/pokemon-detail-modal';

import { pokeCardTypeMap } from './pokemon-card-type-map.util';

interface PokemonCardProps {
  pokeCreature: PokemonDetailBase & { name: string };
  isLoading: boolean;
}

export const PokemonCard = ({ pokeCreature, isLoading }: PokemonCardProps): ReactElement => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const pokeTypeClass = getPokeTypePrefixClass(pokeCreature?.types);

  return (
    <>
      <PokemonDetailModal
        pokeCreature={pokeCreature}
        isOpen={isModalOpen}
        onCloseModal={() => setIsModalOpen(false)}
      />
      <Card
        className={`w-[352px] h-[167px] md:m-w-auto md:w-[250px] md:h-[367px] flex p-sm md:p-md rounded-md flex-row md:flex-col relative md:justify-between ${
          isLoading ? 'bg-medGrey' : ''
        } ${pokeCardTypeMap.get(pokeTypeClass)?.[`${pokeTypeClass}Wrapper` as keyof object] ?? ''}`}
      >
        {isLoading ? (
          <Box className="w-[50%] h-[50%] my-lg mx-md md:flex-1 md:w-[60%] md:h-[80%] md:mx-auto md:mb-md">
            <Skeleton
              height={isWeb() ? '100%' : 100}
              circle
              baseColor={
                (pokeCardTypeMap.get(pokeTypeClass)?.[
                  `${pokeTypeClass}SkeletonBase` as keyof object
                ] ?? undefined) as string | undefined
              }
              highlightColor={
                (pokeCardTypeMap.get(pokeTypeClass)?.[
                  `${pokeTypeClass}SkeletonHighlight` as keyof object
                ] ?? undefined) as string | undefined
              }
            />
          </Box>
        ) : (
          <Box
            className={`flex flex-col md:block justify-center items-center max-w-[115px] md:max-w-[100%] md:bg-none rounded-sm p-sm md:p-[0px] mr-md md:mr-none md:bg-none ${
              pokeCardTypeMap.get(pokeTypeClass)?.[
                `${pokeTypeClass}ImageWrapper` as keyof object
              ] ?? ''
            }`}
          >
            <Image
              src={pokeCreature?.sprites?.other?.['official-artwork']?.front_default}
              className="w-full md:w-[100%] h-auto md:absolute md:w-[87.5%] md:z-0"
              alt={`${pokeCreature?.name} Image`}
              isLoading={isLoading}
            />
          </Box>
        )}

        <Box
          className={`flex flex-col justify-between w-full rounded-md p-0 md:p-md md:z-10 md:h-[180px] md:items-end ${
            isLoading ? 'bg-darkGrey' : ''
          } ${
            pokeCardTypeMap.get(pokeTypeClass)?.[
              `${pokeTypeClass}ContentCardWrapper` as keyof object
            ] ?? ''
          }`}
        >
          <Box className="w-full">
            {isLoading ? (
              <Box className="mb-sm">
                <Skeleton
                  baseColor={
                    (pokeCardTypeMap.get(pokeTypeClass)?.[
                      `${pokeTypeClass}SkeletonBase` as keyof object
                    ] ?? undefined) as string | undefined
                  }
                  highlightColor={
                    (pokeCardTypeMap.get(pokeTypeClass)?.[
                      `${pokeTypeClass}SkeletonHighlight` as keyof object
                    ] ?? undefined) as string | undefined
                  }
                />
              </Box>
            ) : (
              <Box className="flex justify-between items-center mb-sm">
                <Typography
                  className={`text-lg font-bold ${
                    pokeCardTypeMap.get(pokeTypeClass)?.[
                      `${pokeTypeClass}ContentCardText` as keyof object
                    ] ?? ''
                  }`}
                  variant="h1"
                >
                  {capitalizeName(pokeCreature?.name)}
                </Typography>
                <Typography
                  className={`text-sm ${
                    pokeCardTypeMap.get(pokeTypeClass)?.[
                      `${pokeTypeClass}ContentCardText` as keyof object
                    ] ?? ''
                  }`}
                >
                  NO. {pokeCreature?.id}
                </Typography>
              </Box>
            )}

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
                    isLoading={isLoading}
                  />
                );
              }
            )}
          </Box>

          {isLoading ? (
            <Box className="w-[100%] h-[100%] mb-md">
              <Skeleton
                borderRadius="50px"
                height={40}
                baseColor={
                  (pokeCardTypeMap.get(pokeTypeClass)?.[
                    `${pokeTypeClass}SkeletonBase` as keyof object
                  ] ?? undefined) as string | undefined
                }
                highlightColor={
                  (pokeCardTypeMap.get(pokeTypeClass)?.[
                    `${pokeTypeClass}SkeletonHighlight` as keyof object
                  ] ?? undefined) as string | undefined
                }
              />
            </Box>
          ) : (
            <Box className="w-full flex gap-sm">
              <Button
                className="w-full"
                type="secondary"
                text="Learn More"
                isLoading={isLoading}
                onClick={() => setIsModalOpen(true)}
              />
            </Box>
          )}
        </Box>
      </Card>
    </>
  );
};
