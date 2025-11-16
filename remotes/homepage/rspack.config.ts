import { join } from 'path';

import { NxAppRspackPlugin } from '@nx/rspack/app-plugin.js';
import { NxReactRspackPlugin } from '@nx/rspack/react-plugin.js';
import {
  NxModuleFederationPlugin,
  NxModuleFederationDevServerPlugin,
} from '@nx/module-federation/rspack.js';

import config from './module-federation.config';

export default {
  output: {
    path: join(__dirname, 'dist'),
    publicPath: 'auto',
  },
  devServer: {
    port: 4203,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'no-cache, no-store, must-revalidate',
    },
    historyApiFallback: {
      index: '/index.html',
      disableDotRule: true,
      htmlAcceptHeaders: ['text/html', 'application/xhtml+xml'],
    },
  },
  resolve: {
    alias: {
      'react-native': require.resolve('react-native-web'),
      '@features/pokemon': join(
        __dirname,
        '../../libs/features/pokemon/src/index.ts'
      ),
      '@utils/apiClient': join(
        __dirname,
        '../../libs/utils/apiClient/src/index.ts'
      ),
      '@utils/detect': join(__dirname, '../../libs/utils/detect/src/index.ts'),
      '@utils/textTransform': join(
        __dirname,
        '../../libs/utils/textTransform/src/index.ts'
      ),
      '@ui/box': join(__dirname, '../../libs/ui/box/src/index.ts'),
      '@ui/skeleton': join(__dirname, '../../libs/ui/skeleton/src/index.ts'),
      '@ui/card': join(__dirname, '../../libs/ui/card/src/index.ts'),
      '@ui/hideInMobile': join(
        __dirname,
        '../../libs/ui/hideInMobile/src/index.ts'
      ),
      '@ui/button': join(__dirname, '../../libs/ui/button/src/index.ts'),
      '@ui/image': join(__dirname, '../../libs/ui/image/src/index.ts'),
      '@ui/icon': join(__dirname, '../../libs/ui/icon/src/index.ts'),
      '@ui/iconPokeType': join(
        __dirname,
        '../../libs/ui/iconPokeType/src/index.ts'
      ),
      '@ui/typography': join(
        __dirname,
        '../../libs/ui/typography/src/index.ts'
      ),
      '@services/pokemon-api': join(
        __dirname,
        '../../libs/services/pokemon-api/src/index.ts'
      ),
    },
  },
  plugins: [
    new NxAppRspackPlugin({
      tsConfig: './tsconfig.app.json',
      main: './src/main.ts',
      index: './src/index.html',
      baseHref: '/',
      assets: ['./src/favicon.ico', './src/assets'],
      styles: ['./src/styles.css'],
      outputHashing: process.env['NODE_ENV'] === 'production' ? 'all' : 'none',
      optimization: process.env['NODE_ENV'] === 'production',
    }),
    new NxReactRspackPlugin({
      // Uncomment this line if you don't want to use SVGR
      // See: https://react-svgr.com/
      // svgr: false
    }),
    new NxModuleFederationPlugin({ config }, { dts: false }),
    new NxModuleFederationDevServerPlugin({ config }),
  ],
};
