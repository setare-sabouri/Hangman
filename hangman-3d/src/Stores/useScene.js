import { create } from "zustand";

const useScene=create((set) => ({
    scene: null,
    setScene: (node) => set({ scene: node }),
  
    // resetLives: () => set({ lives: 5 }),
    // updateKeyboard: (btn, isCorrect) => set({ btn, isCorrect }),
    // playTurn: (btn) => set({ btn }),
    // validate: (clickedLetter) => set({ clickedLetter }),
    // UpdateScene: (letter, index) => set({ letter, index }),
}));

export default useScene;
