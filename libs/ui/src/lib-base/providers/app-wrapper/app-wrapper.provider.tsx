/* @todo this component needs to be updated */

import { PropsWithChildren, ReactElement, Suspense } from 'react';

// import { UiErrorFallback } from '../../ui/error-fallback';
// import { UiScreenLoader } from '../../ui/screen-loader';

import { AppWrapperProviderProps } from './app-wrapper.interface';

const AppWrapperProvider = ({
  store,
  children,
}: PropsWithChildren<AppWrapperProviderProps>): ReactElement => {
  return <div>Needs more work</div>;
  // return (
  //   <Suspense fallback={<UiScreenLoader />}>
  //     <UiErrorFallback>
  //       {children}
  //       {/* <Provider store={store}>{children}</Provider> */}
  //     </UiErrorFallback>
  //   </Suspense>
  // );
};

export default AppWrapperProvider;
