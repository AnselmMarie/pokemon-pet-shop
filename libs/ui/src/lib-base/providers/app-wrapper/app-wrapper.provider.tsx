import { PropsWithChildren, ReactElement, Suspense } from 'react';

import { useColorScheme } from 'react-native';
// import { Provider } from 'react-redux';

import {tamaguiConfig} from '../../configs';

import { AppWrapperProviderProps } from './app-wrapper.interface';

import '@tamagui/core/reset.css';
import { TamaguiProvider, Theme } from 'tamagui';
import { UiScreenLoader } from '../../ui/screen-loader';
import { UiErrorFallback } from '../../ui/error-fallback';

const AppWrapperProvider = ({
  store,
  children,
}: PropsWithChildren<AppWrapperProviderProps>): ReactElement => {
  const colorScheme = useColorScheme();

  return (
    <TamaguiProvider
      config={tamaguiConfig}
      disableInjectCSS
      defaultTheme={colorScheme === 'dark' ? 'dark' : 'light'}
    >
      <Theme>
        <Suspense fallback={<UiScreenLoader />}>
          <UiErrorFallback>
            {children}
            {/* <Provider store={store}>{children}</Provider> */}
          </UiErrorFallback>
        </Suspense>
      </Theme>
    </TamaguiProvider>
  );
};

export default AppWrapperProvider;
