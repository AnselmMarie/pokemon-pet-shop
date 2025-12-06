import * as Linking from 'expo-linking';

export const openLinkUtil = (link: string) => {
  Linking.openURL(link);
};
