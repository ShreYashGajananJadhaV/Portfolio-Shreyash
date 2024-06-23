import { create } from "zustand";

const useGlobalStateManagement = create((set) => ({
  blurr: false,
  toogleBlurr: () => set((state) => ({ blurr: !state.blurr })),
}));

export default useGlobalStateManagement;
