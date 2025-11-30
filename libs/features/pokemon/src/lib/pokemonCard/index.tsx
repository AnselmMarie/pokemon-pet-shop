import { ReactElement, useState } from 'react';

import { Box } from '@ui/box';
import { Card } from '@ui/card';
import { Skeleton } from '@ui/skeleton';
import { Button } from '@ui/button';
import { Image } from '@ui/image';
import { Typography } from '@ui/typography';

import { isWeb } from '@utils/detect';
import { capitalizeName } from '@utils/textTransform';

import { PokemonAbilityName } from '../components/pokemon.ability.name';
import { PokemonCardProps } from './pokemon.card.interface';

import { pokeCardTypeMap } from './pokemon.card.type.map.util';
import { usePokemonTypeLogic } from '../hooks/use.pokemon.type.logic';
import { PokemonDetailModal } from '../modalPokemonDetail/pokemonDetailModal';

export const PokemonCard = ({
  pokeCreature,
  isLoading,
}: PokemonCardProps): ReactElement => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { getPokeTypeClass } = usePokemonTypeLogic(pokeCreature?.types);

  // const handleOpenDetailModalClick = () => {
  //   openModal({
  //     content: <UiPokemonDetailModal />,
  //     options: {
  //       title: '',
  //       data: data,
  //       classNameShadow: '',
  //       classNameModal: '',
  //       headlineType: ModalHeadlineTypeEnum.ABSOLUTE,
  //       modalAlignment: AlignmentEnum.CENTER,
  //     },
  //     onCallback: () => {
  //       noopUtil();
  //     },
  //   });
  // };

  return (
    <>
      <PokemonDetailModal
        pokeCreature={pokeCreature}
        isOpen={isModalOpen}
        onCloseModal={() => setIsModalOpen(false)}
      />

      <Card
        className={`m-w-[352px] md:m-w-auto md:w-[250px] h-[367px] md:h-[367px] flex p-sm md:p-md rounded-md flex-row md:flex-col relative md:justify-between ${
          isLoading ? 'bg-medGrey' : ''
        } ${
          pokeCardTypeMap.get(getPokeTypeClass)?.[
            `${getPokeTypeClass}Wrapper` as keyof object
          ] ?? ''
        }`}
        // className={classNamesUtil(
        //   newStyles?.[
        //     theme === ThemeTypeEnum.LIGHT
        //       ? 'cardWrapperShadowLight'
        //       : 'cardWrapperShadowDark'
        //   ],
        // )}
      >
        {isLoading ? (
          <Box className="w-[50%] h-[70%] my-lg mx-md md:flex-1 md:w-[80%] md:h-full md:mx-auto md:mb-md">
            <Skeleton height={isWeb() ? '100%' : 100} circle />
          </Box>
        ) : (
          <Box className="flex flex-col md:block justify-center items-center max-w-[115px] md:max-w-[100%] md:bg-none rounded-md p-sm md:p-[0px]">
            <Image
              src={
                pokeCreature?.sprites?.other?.['official-artwork']
                  ?.front_default
              }
              className="w-full md:w-[100%] h-auto md:absolute md:w-[87.5%] md:z-0"
              alt={`${pokeCreature?.name} Image`}
              isLoading={isLoading}
            />
          </Box>
        )}

        <Box
          className={`flex flex-col justify-between w-full rounded-md p-lg md:p-md md:z-10 md:h-[180px] md:items-end ${
            isLoading ? 'bg-darkGrey' : ''
          } ${
            pokeCardTypeMap.get(getPokeTypeClass)?.[
              `${getPokeTypeClass}ContentCardWrapper` as keyof object
            ] ?? ''
          }`}
        >
          <Box className="w-full">
            {isLoading ? (
              <Box className="mb-sm">
                <Skeleton />
              </Box>
            ) : (
              <Box className="flex justify-between items-center mb-sm">
                <Typography
                  className={`text-md md:text-lg ${
                    pokeCardTypeMap.get(getPokeTypeClass)?.[
                      `${getPokeTypeClass}ContentCardText` as keyof object
                    ] ?? ''
                  }`}
                  variant="h1"
                >
                  {capitalizeName(pokeCreature?.name)}
                </Typography>
                <Typography
                  className={`text-sm ${
                    pokeCardTypeMap.get(getPokeTypeClass)?.[
                      `${getPokeTypeClass}ContentCardText` as keyof object
                    ] ?? ''
                  }`}
                >
                  NO. {pokeCreature?.id}
                </Typography>
              </Box>
            )}

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
                    pokeTypeClass={getPokeTypeClass}
                    isLoading={isLoading}
                  />
                );
              }
            )}
          </Box>

          <Box className="w-full flex gap-sm">
            <Button
              className="w-full"
              type="secondary"
              text="Learn More"
              isLoading={isLoading}
              onClick={() => setIsModalOpen(true)}
            />
          </Box>
        </Box>
      </Card>
    </>
  );
};
