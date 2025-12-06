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
    port: 4205,
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
      '@features/header': join(
        __dirname,
        '../../libs/features/header/src/index.ts'
      ),
      '@features/modal-cart': join(
        __dirname,
        '../../libs/features/modal-cart/src/index.ts'
      ),
      '@features/switch-theme': join(
        __dirname,
        '../../libs/features/switch-theme/src/index.ts'
      ),
      '@ui/box': join(__dirname, '../../libs/ui/box/src/index.ts'),
      '@utils/api-client': join(
        __dirname,
        '../../libs/utils/api-client/src/index.ts'
      ),
      '@utils/poke-type': join(
        __dirname,
        '../../libs/utils/poke-type/src/index.ts'
      ),
      '@utils/text-transform': join(
        __dirname,
        '../../libs/utils/text-transform/src/index.ts'
      ),
      '@utils/pricing': join(
        __dirname,
        '../../libs/utils/pricing/src/index.ts'
      ),
      '@ui/typography': join(
        __dirname,
        '../../libs/ui/typography/src/index.ts'
      ),
      '@services/cart-api': join(
        __dirname,
        '../../libs/services/cart-api/src/index.ts'
      ),
      '@ui/switch': join(__dirname, '../../libs/ui/switch/src/index.ts'),
      '@ui/hide-in-mobile': join(
        __dirname,
        '../../libs/ui/hide-in-mobile/src/index.ts'
      ),
      '@ui/icon': join(__dirname, '../../libs/ui/icon/src/index.ts'),
      '@ui/container': join(__dirname, '../../libs/ui/container/src/index.ts'),
      '@ui/image': join(__dirname, '../../libs/ui/image/src/index.ts'),
      '@ui/input': join(__dirname, '../../libs/ui/input/src/index.ts'),
      '@ui/modal': join(__dirname, '../../libs/ui/modal/src/index.ts'),
      '@ui/scroll-wrapper': join(
        __dirname,
        '../../libs/ui/scroll-wrapper/src/index.ts'
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
