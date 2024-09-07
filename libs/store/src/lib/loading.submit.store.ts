import { create } from 'zustand';

const loadingSubmitStore = (set: any) => ({
  loadingSemiDisable: false,
  loadingFullDisable: false,
  loadingSemiOn: () => {
    set({
      loadingFullDisable: false,
      loadingSemiDisable: true,
    });
  },
  loadingFullOn: () => {
    set({
      loadingFullDisable: true,
      loadingSemiDisable: false,
    });
  },
  loadingOff: () => {
    set({
      loadingFullDisable: false,
      loadingSemiDisable: false,
    });
  },
});

export const useLoadingStore = create(loadingSubmitStore);
