import StyleDictionary from 'style-dictionary';
import { makeSdTailwindConfig } from 'sd-tailwindcss-transformer';

const types = ['semantic'];

for (const type of types) {
  const tailwindConfig = makeSdTailwindConfig({
    source: ['src/tokens/**/*.json'],
    type,
    buildPath: "./build/"
  });

  const styleDictionaryTailwind = new StyleDictionary(tailwindConfig);

  await styleDictionaryTailwind.hasInitialized;
  await styleDictionaryTailwind.buildAllPlatforms();
}