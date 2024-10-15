import { useEffect } from 'react';

import { UiHeader } from '@pokemon-pet-shop/features';
import { useRenderStyles } from '@pokemon-pet-shop/hooks';
import { useThemeStore } from '@pokemon-pet-shop/store';
import { UiElementLayout, UiModal, UiScrollWrapper } from '@pokemon-pet-shop/ui';
import { variableThemeMode } from '@pokemon-pet-shop/ui/styles/var';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SafeAreaView, StatusBar } from 'react-native';

import 'react-native-svg';
import Homepage from '../homepage/homepage';

import { styles } from './app.module';

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 3, retryDelay: 1000 } },
});
const STYLES = ['default', 'dark-content', 'light-content'] as const;

export const App = () => {
  const { theme, updateTheme } = useThemeStore();
  const { newStyles } = useRenderStyles(styles);

  /** @todo update the useEffect to add dependencies but test it to work sure it doesn't break */
  useEffect(() => {
    const varThemeMode = variableThemeMode(theme);
    updateTheme(theme, varThemeMode);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar barStyle={STYLES[0]} showHideTransition="fade" animated />
      <UiModal />
      <SafeAreaView style={newStyles.safeArea}>
        <UiElementLayout className={newStyles.body}>
          <UiHeader />
          <UiScrollWrapper>
            <Homepage />
          </UiScrollWrapper>
        </UiElementLayout>
      </SafeAreaView>
    </QueryClientProvider>
  );
};

export default App;
