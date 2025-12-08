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
    // Build out the tailwind file
    makeSdTailwindConfig({
      type,
      source: ['src/tokens/**/*.json'],
      buildPath: "./build/",
      transforms: ['attribute/cti', 'name/camel', 'typography/px', 'typography/fontSize', 'typography/fontFamily'],
    })
  )

  // Build out the variables file
  StyleDictionary.platforms['js'] = {
    type,
    transformGroup: 'js',
    buildPath: './build/',
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

  StyleDictionary.buildAllPlatforms()
})