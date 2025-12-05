import StyleDictionaryModule from 'style-dictionary';
import { makeSdTailwindConfig } from 'sd-tailwindcss-transformer';

const types = ['semantic'];
const lineHeightMap = new Map();
let sansFallback = [];

// Add px to spacing, line height, and border radius values
StyleDictionaryModule.registerTransform({
  type: `value`,
  transitive: true,
  name: `typography/px`,
  filter: (token) => {
    return token.attributes.item === 'spacing' || token.attributes.item === 'lineHeight' || token.attributes.item === 'borderRadius'
  },
  transform: (token) => {
    const { value } = token
    let transformedValue = value;

    if (typeof value === 'number') {
      transformedValue = `${value}px`
    }

    if (token.attributes.item === 'lineHeight') {
      lineHeightMap.set(token.attributes.subitem, transformedValue)
    }

    return transformedValue
  }
})

// Combine font size with line height
StyleDictionaryModule.registerTransform({
  type: `value`,
  transitive: true,
  name: `typography/fontSize`,
  filter: (token) => {
    return token.attributes.item === 'fontSize'
  },
  transform: (token) => {
    const { value } = token

    const fontAttributes = [`${value}px`, { lineHeight: lineHeightMap.get(token.attributes.subitem) }]
    return fontAttributes
  }
})

// Combine font family with fallback fonts
StyleDictionaryModule.registerTransform({
  type: `value`,
  transitive: true,
  name: `typography/fontFamily`,
  filter: (token) => {
    return token.attributes.subitem === 'sansFallback' || token.attributes.subitem === 'sans'
  },
  transform: (token) => {
    const { value } = token

    if (token.attributes.subitem === 'sansFallback') {
      sansFallback = value.replace(/\s/g, '').split(',')
      return value
    }

    sansFallback.unshift(value)
    return sansFallback
  }
})

// Build root types of the design token JSON
types.map((type) => {
  const StyleDictionary = new StyleDictionaryModule(
    makeSdTailwindConfig({
      type,
      source: ['src/tokens/**/*.json'],
      buildPath: "./build/",
      transforms: ['attribute/cti', 'name/camel', 'typography/px', 'typography/fontSize', 'typography/fontFamily'],
    })
  )

  console.log("Building type:", type);
  console.log("tokens:", StyleDictionary.allTokens);
  console.log("platform:", StyleDictionary.options.platforms.js);

  StyleDictionary.buildAllPlatforms()
})

const sdConfig = makeSdTailwindConfig({
  type: 'semantic',
  formatType: 'js',
  // isVariables: true,
  // extend: true,
  source: ['src/tokens/**/*.json'],
  // transforms: ['attribute/cti',
  //   'name/camel',
  //   'size/px',
  //   'color/hex'],
  // buildPath: `./`,
  // tailwind: {
  //   content: [
  //     './pages/**/*.{js,ts,jsx,tsx}',
  //     './components/**/*.{js,ts,jsx,tsx}'
  //   ],
  //   plugins: ['typography', 'container-queries']
  // }
})

sdConfig.platforms['js'] = {
  // prefix: PREFIX,
  transformGroup: 'js',
  buildPath: './build/js/',
  transforms: ['attribute/cti', 'name/camel', 'size/px', 'typography/fontSize', 'typography/fontFamily'],
  // transforms: ['attribute/cti', 'name/camel', 'typography/px', 'typography/fontSize', 'typography/fontFamily'],
  // transforms: [
  //   'attribute/cti',
  //   'name/camel',
  //   'size/px',
  //   'color/hex',
  // ],
  files: [
    {
      destination: 'variables.js',
      format: 'javascript/es6',
    }
  ]
}

// sdConfig.platforms['css'] = {
//   // prefix: PREFIX,
//   transformGroup: 'css',
//   buildPath: './styles/',
//   files: [
//     {
//       destination: 'tailwind.css',
//       format: 'css/variables'
//     }
//   ]
// }

const StyleDictionary = new StyleDictionaryModule(sdConfig)
await StyleDictionary.hasInitialized
await StyleDictionary.buildAllPlatforms()


// TS variables transform group
// StyleDictionaryModule.registerTransformGroup({
//   name: 'ts',
//   transforms: [
// 'attribute/cti',
// 'name/camel',
// 'size/px',
// 'color/hex',
//   ],
// });

// platforms: {
//   js: {
//     transformGroup: 'ts',
//       buildPath: './build/ts/',
//         files: [
//           {
// destination: 'variables.ts',
// format: 'javascript/es6',
//           },
//         ],
//         },
// },