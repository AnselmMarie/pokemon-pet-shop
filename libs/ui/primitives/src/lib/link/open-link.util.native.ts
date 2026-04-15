import * as WebBrowser from 'expo-web-browser';

export const openLinkUtil = async (link: string) => {
  await WebBrowser.openBrowserAsync(link);
};
