import { Config } from 'style-dictionary';

const config: Config | Config[] = {
  source: ['src/imported/design-tokens.tokens.json'],
  transform: {
    'custom/name/web': {
      type: 'name',
      transformer: (token) => token.path.join('-'),
    },
    'custom/name/native': {
      type: 'name',
      transformer: (token) => {
        const path = token.path.map((string) => {
          return string.includes('-')
            ? string.replace(/-/g, '_').toUpperCase()
            : string.toUpperCase();
        });
        return path.join('_');
      },
    },
    'custom/dimension-to-pixel': {
      type: 'value',
      matcher: (prop) => {
        return prop.type === 'dimension';
      },
      transformer: (prop) => {
        return `${prop.value}px`;
      },
    },
  },
  platforms: {
    css: {
      transformGroup: 'css',
      transforms: ['custom/dimension-to-pixel', 'custom/name/web'],
      buildPath: 'build/css/',
      files: [
        {
          destination: '_variables.css',
          format: 'css/variables',
        },
      ],
    },

    js: {
      transformGroup: 'ts',
      transforms: ['custom/name/native'],
      buildPath: 'build/ts/',
      files: [
        {
          destination: 'variables.ts',
          format: 'javascript/es6',
        },
      ],
    },

    // scss: {
    //   transformGroup: 'scss',
    //   buildPath: 'scss/',
    //   files: [
    //     {
    //       destination: '_variables.scss',
    //       format: 'scss/variables',
    //     },
    //   ],
    // },

    // android: {
    //   transformGroup: 'android',
    //   buildPath: 'android/',
    //   files: [
    //     {
    //       destination: 'font_dimens.xml',
    //       format: 'android/fontDimens',
    //     },
    //     {
    //       destination: 'colors.xml',
    //       format: 'android/colors',
    //     },
    //   ],
    // },

    // compose: {
    //   transformGroup: 'compose',
    //   buildPath: 'compose/',
    //   files: [
    //     {
    //       destination: 'StyleDictionaryColor.kt',
    //       format: 'compose/object',
    //       className: 'StyleDictionaryColor',
    //       filter: {
    //         attributes: {
    //           category: 'color',
    //         },
    //       },
    //     },
    //     {
    //       destination: 'StyleDictionarySize.kt',
    //       format: 'compose/object',
    //       className: 'StyleDictionarySize',
    //       filter: {
    //         attributes: {
    //           category: 'size',
    //         },
    //       },
    //     },
    //   ],
    // },

    // ios: {
    //   transformGroup: 'ios',
    //   buildPath: 'ios/',
    //   files: [
    //     {
    //       destination: 'StyleDictionaryColor.h',
    //       format: 'ios/colors.h',
    //       className: 'StyleDictionaryColor',
    //       filter: {
    //         attributes: {
    //           category: 'color',
    //         },
    //       },
    //     },
    //     {
    //       destination: 'StyleDictionaryColor.m',
    //       format: 'ios/colors.m',
    //       className: 'StyleDictionaryColor',
    //       filter: {
    //         attributes: {
    //           category: 'color',
    //         },
    //       },
    //     },
    //     {
    //       destination: 'StyleDictionarySize.h',
    //       format: 'ios/static.h',
    //       className: 'StyleDictionarySize',
    //       filter: {
    //         attributes: {
    //           category: 'size',
    //         },
    //       },
    //     },
    //     {
    //       destination: 'StyleDictionarySize.m',
    //       format: 'ios/static.m',
    //       className: 'StyleDictionarySize',
    //       filter: {
    //         attributes: {
    //           category: 'size',
    //         },
    //       },
    //     },
    //   ],
    // },

    // 'ios-swift': {
    //   transformGroup: 'ios-swift',
    //   buildPath: 'ios-swift/',
    //   files: [
    //     {
    //       destination: 'StyleDictionary+Class.swift',
    //       format: 'ios-swift/class.swift',
    //       className: 'StyleDictionaryClass',
    //       filter: {},
    //     },
    //     {
    //       destination: 'StyleDictionary+Enum.swift',
    //       format: 'ios-swift/enum.swift',
    //       className: 'StyleDictionaryEnum',
    //       filter: {},
    //     },
    //     {
    //       destination: 'StyleDictionary+Struct.swift',
    //       format: 'ios-swift/any.swift',
    //       className: 'StyleDictionaryStruct',
    //       filter: {},
    //       options: {
    //         imports: 'SwiftUI',
    //         objectType: 'struct',
    //         accessControl: 'internal',
    //       },
    //     },
    //   ],
    // },

    // 'ios-swift-separate-enums': {
    //   transformGroup: 'ios-swift-separate',
    //   buildPath: 'ios-swift/',
    //   files: [
    //     {
    //       destination: 'StyleDictionaryColor.swift',
    //       format: 'ios-swift/enum.swift',
    //       className: 'StyleDictionaryColor',
    //       filter: {
    //         attributes: {
    //           category: 'color',
    //         },
    //       },
    //     },
    //     {
    //       destination: 'StyleDictionarySize.swift',
    //       format: 'ios-swift/enum.swift',
    //       className: 'StyleDictionarySize',
    //       filter: {
    //         attributes: {
    //           category: 'size',
    //         },
    //       },
    //     },
    //   ],
    // },
  },
};

export default config;
