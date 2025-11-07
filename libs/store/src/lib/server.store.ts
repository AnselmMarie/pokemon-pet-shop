import { create } from 'zustand';

// export enum ServerErrorMessage {
//   LIGHT = 'light',
//   DARK = 'dark',
// }

const serverStore = (set: any, get: any) => ({
  messages: [],
  update: (messages: any) => {
    set((state: any) => ({
      messages: state.messages.push(messages),
    }));
  },
  clear: () => {
    set({ messages: [] });
  },
});

export const useThemeStore = create(serverStore);
