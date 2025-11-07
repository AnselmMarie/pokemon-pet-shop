import * as Linking from 'expo-linking';

export const openLinkUtil = (link: string) => {
  console.log('link', link);
  Linking.openURL(link);
};
