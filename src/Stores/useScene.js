import { create } from "zustand";

const useScene=create((set) => ({
    scene: null,
    setScene: (node) => set({ scene: node }),
  
}));

export default useScene;
