import '../global.css';
import 'react-native-reanimated';

// import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Footer } from '@features/footer';

import { AppProvider } from '../providers/app-provider';

export const App = () => {
  return (
    <AppProvider>
      <SafeAreaView>
        {/* <Header />
        <HomepageModule /> */}
        {/* <View className="p-4 p-xl text-center flex-1 justify-center items-center">
          <Text className="text-red-500 text-primary">fasdfsaf</Text>
        </View>
        <View className="w-[500px] h-[100px] bg-primary"></View> */}
        <Footer />
      </SafeAreaView>
    </AppProvider>
  );
};

export default App;
