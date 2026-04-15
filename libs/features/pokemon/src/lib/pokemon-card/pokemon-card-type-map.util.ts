export const pokeCardTypeMap = new Map<string, object>([
  [
    'grassType',
    {
      grassTypeWrapper: 'bg-veryDarkGrass md:bg-gradient-to-tr from-veryDarkGrass to-lightGrass',
      grassTypeImageWrapper: 'bg-veryDarkGrass bg-gradient-to-tr from-veryDarkGrass to-lightGrass',
      grassTypeContentCardWrapper: 'md:bg-darkGrass',
      grassTypeContentCardText: 'text-white',
      grassTypeSkeletonBase: '#579d63',
      grassTypeSkeletonHighlight: '#69b076',
    },
  ],
  [
    'bugType',
    {
      bugTypeWrapper: 'bg-veryDarkBug md:bg-gradient-to-tr from-veryDarkBug to-lightBug',
      bugTypeImageWrapper: 'bg-veryDarkBug bg-gradient-to-tr from-veryDarkBug to-lightBug',
      bugTypeContentCardWrapper: 'md:bg-darkBug',
      bugTypeContentCardText: 'text-white',
      bugTypeSkeletonBase: '#b3d958',
      bugTypeSkeletonHighlight: '#cfee85',
    },
  ],
  [
    'darkType',
    {
      darkTypeWrapper: 'bg-veryDarkDark md:bg-gradient-to-tr from-veryDarkDark to-lightDark',
      darkTypeImageWrapper: 'bg-veryDarkDark bg-gradient-to-tr from-veryDarkDark to-lightDark',
      darkTypeContentCardWrapper: 'md:bg-darkDark',
      darkTypeContentCardText: 'text-white',
      darkTypeSkeletonBase: '#727272',
      darkTypeSkeletonHighlight: '#969696',
    },
  ],
  [
    'dragonType',
    {
      dragonTypeWrapper:
        'bg-veryDarkDragon md:bg-gradient-to-tr from-veryDarkDragon to-lightDragon',
      dragonTypeImageWrapper:
        'bg-veryDarkDragon bg-gradient-to-tr from-veryDarkDragon to-lightDragon',
      dragonTypeContentCardWrapper: 'md:bg-darkDragon',
      dragonTypeContentCardText: 'text-white',
      dragonTypeSkeletonBase: '#9988e0',
      dragonTypeSkeletonHighlight: '#bbb0eb',
    },
  ],
  [
    'electricType',
    {
      electricTypeWrapper:
        'bg-veryDarkElectric md:bg-gradient-to-tr from-veryDarkElectric to-lightElectric',
      electricTypeImageWrapper:
        'bg-veryDarkElectric bg-gradient-to-tr from-veryDarkElectric to-lightElectric',
      electricTypeContentCardWrapper: 'md:bg-darkElectric',
      electricTypeContentCardText: 'text-white',
      electricTypeSkeletonBase: '#f2d94e',
      electricTypeSkeletonHighlight: '#fce97d',
    },
  ],
  [
    'fairyType',
    {
      fairyTypeWrapper: 'bg-veryDarkFairy md:bg-gradient-to-tr from-veryDarkFairy to-lightFairy',
      fairyTypeImageWrapper: 'bg-veryDarkFairy bg-gradient-to-tr from-veryDarkFairy to-lightFairy',
      fairyTypeContentCardWrapper: 'md:bg-darkFairy',
      fairyTypeContentCardText: 'text-white',
      fairyTypeSkeletonBase: '#ee90e6',
      fairyTypeSkeletonHighlight: '#fcbef7',
    },
  ],
  [
    'fightingType',
    {
      fightingTypeWrapper:
        'bg-veryDarkFighting md:bg-gradient-to-tr from-veryDarkFighting to-lightFighting',
      fightingTypeImageWrapper:
        'bg-veryDarkFighting bg-gradient-to-tr from-veryDarkFighting to-lightFighting',
      fightingTypeContentCardWrapper: 'md:bg-darkFighting',
      fightingTypeContentCardText: 'text-white',
      fightingTypeSkeletonBase: '#e76a83',
      fightingTypeSkeletonHighlight: '#f399ab',
    },
  ],
  [
    'fireType',
    {
      fireTypeWrapper: 'bg-veryDarkFire md:bg-gradient-to-tr from-veryDarkFire to-lightFire',
      fireTypeImageWrapper: 'bg-veryDarkFire bg-gradient-to-tr from-veryDarkFire to-lightFire',
      fireTypeContentCardWrapper: 'md:bg-darkFire',
      fireTypeContentCardText: 'text-white',
      fireTypeSkeletonBase: '#f5af67',
      fireTypeSkeletonHighlight: '#f8c087',
    },
  ],
  [
    'flyingType',
    {
      flyingTypeWrapper:
        'bg-veryDarkFlying md:bg-gradient-to-tr from-veryDarkFlying to-lightFlying',
      flyingTypeImageWrapper:
        'bg-veryDarkFlying bg-gradient-to-tr from-veryDarkFlying to-lightFlying',
      flyingTypeContentCardWrapper: 'md:bg-darkFlying',
      flyingTypeContentCardText: 'text-white',
      flyingTypeSkeletonBase: '#8fa9de',
      flyingTypeSkeletonHighlight: '#bbcdf2',
    },
  ],
  [
    'ghostType',
    {
      ghostTypeWrapper: 'bg-veryDarkGhost md:bg-gradient-to-tr from-veryDarkGhost to-lightGhost',
      ghostTypeImageWrapper: 'bg-veryDarkGhost bg-gradient-to-tr from-veryDarkGhost to-lightGhost',
      ghostTypeContentCardWrapper: 'md:bg-darkGhost',
      ghostTypeContentCardText: 'text-white',
      ghostTypeSkeletonBase: '#5f6dbc',
      ghostTypeSkeletonHighlight: '#8793db',
    },
  ],
  [
    'groundType',
    {
      groundTypeWrapper:
        'bg-veryDarkGround md:bg-gradient-to-tr from-veryDarkGround to-lightGround',
      groundTypeImageWrapper:
        'bg-veryDarkGround bg-gradient-to-tr from-veryDarkGround to-lightGround',
      groundTypeContentCardWrapper: 'md:bg-darkGround',
      groundTypeContentCardText: 'text-white',
      groundTypeSkeletonBase: '#da7c4d',
      groundTypeSkeletonHighlight: '#f19e75',
    },
  ],
  [
    'iceType',
    {
      iceTypeWrapper: 'bg-veryDarkIce md:bg-gradient-to-tr from-veryDarkIce to-lightIce',
      iceTypeImageWrapper: 'bg-veryDarkIce bg-gradient-to-tr from-veryDarkIce to-lightIce',
      iceTypeContentCardWrapper: 'md:bg-darkIce',
      iceTypeContentCardText: 'text-white',
      iceTypeSkeletonBase: '#3fd0d4',
      iceTypeSkeletonHighlight: '#86d6d8',
    },
  ],
  [
    'normalType',
    {
      normalTypeWrapper:
        'bg-veryDarkNormal md:bg-gradient-to-tr from-veryDarkNormal to-lightNormal',
      normalTypeImageWrapper:
        'bg-veryDarkNormal bg-gradient-to-tr from-veryDarkNormal to-lightNormal',
      normalTypeContentCardWrapper: 'md:bg-darkNormal',
      normalTypeContentCardText: 'text-white',
      normalTypeSkeletonBase: '#a0a29f',
      normalTypeSkeletonHighlight: '#d0d4cd',
    },
  ],
  [
    'poisonType',
    {
      poisonTypeWrapper:
        'bg-veryDarkPoison md:bg-gradient-to-tr from-veryDarkPoison to-lightPoison',
      poisonTypeImageWrapper:
        'bg-veryDarkPoison bg-gradient-to-tr from-veryDarkPoison to-lightPoison',
      poisonTypeContentCardWrapper: 'md:bg-darkPoison',
      poisonTypeContentCardText: 'text-white',
      poisonTypeSkeletonBase: '#b763cf',
      poisonTypeSkeletonHighlight: '#d087e5',
    },
  ],
  [
    'psychicType',
    {
      psychicTypeWrapper:
        'bg-veryDarkPsychic md:bg-gradient-to-tr from-veryDarkPsychic to-lightPsychic',
      psychicTypeImageWrapper:
        'bg-veryDarkPsychic bg-gradient-to-tr from-veryDarkPsychic to-lightPsychic',
      psychicTypeContentCardWrapper: 'md:bg-darkPsychic',
      psychicTypeContentCardText: 'text-white',
      psychicTypeSkeletonBase: '#8d536b',
      psychicTypeSkeletonHighlight: '#b68c9d',
    },
  ],
  [
    'rockType',
    {
      rockTypeWrapper: 'bg-veryDarkRock md:bg-gradient-to-tr from-veryDarkRock to-lightRock',
      rockTypeImageWrapper: 'bg-veryDarkRock bg-gradient-to-tr from-veryDarkRock to-lightRock',
      rockTypeContentCardWrapper: 'md:bg-darkRock',
      rockTypeContentCardText: 'text-white',
      rockTypeSkeletonBase: '#c9bb8a',
      rockTypeSkeletonHighlight: '#e7dcb3',
    },
  ],
  [
    'steelType',
    {
      steelTypeWrapper: 'bg-veryDarkSteel md:bg-gradient-to-tr from-veryDarkSteel to-lightSteel',
      steelTypeImageWrapper: 'bg-veryDarkSteel bg-gradient-to-tr from-veryDarkSteel to-lightSteel',
      steelTypeContentCardWrapper: 'md:bg-darkSteel',
      steelTypeContentCardText: 'text-default',
      steelTypeSkeletonBase: '#c0c6c7',
      steelTypeSkeletonHighlight: '#dde2e4',
    },
  ],
  [
    'waterType',
    {
      waterTypeWrapper: 'bg-veryDarkWater md:bg-gradient-to-tr from-veryDarkWater to-lightWater',
      waterTypeImageWrapper: 'bg-veryDarkWater bg-gradient-to-tr from-veryDarkWater to-lightWater',
      waterTypeContentCardWrapper: 'md:bg-darkWater',
      waterTypeContentCardText: 'text-white',
      waterTypeSkeletonBase: '#539ddf',
      waterTypeSkeletonHighlight: '#80bef6',
    },
  ],
]);
