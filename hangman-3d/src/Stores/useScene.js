import { create } from "zustand";

const useScene=create((set) => ({
    scene: null,
    setScene: (node) => set({ scene: node }),
    // lives: 5,
    // displaylives: (lives) => set((state) => ({ lives: state.lives - 1 })),
    // resetLives: () => set({ lives: 5 }),
    // updateKeyboard: (btn, isCorrect) => set({ btn, isCorrect }),
    // playTurn: (btn) => set({ btn }),
    // validate: (clickedLetter) => set({ clickedLetter }),
    // UpdateScene: (letter, index) => set({ letter, index }),
}));

export default useScene;
