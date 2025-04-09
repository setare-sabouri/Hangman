// src/Stores/useAlphabet.js
import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';

const useAlphabet = create(
  subscribeWithSelector((set) => ({
    letters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
    hasWon: false,
    word: null,
    guessedLetters: [],
    wordMeaning: null,


    setWord: (value) => {
      set((state) => {
        return {
          word: value
        }
      })
    },


    setWordMeaning: (value) => {
      set((state) => {
        return {
          wordMeaning: value
        }
      })
    },


    ResetLetters: () => set(() => ({ guessedLetters: [] })),

    disableAllLetters: () => set((state) => ({
      guessedLetters: [...state.letters]
    })),


    checkIfWon: () => set((state) => {
      const wordLetters = state.word?.split('') || [];
      const hasWon = wordLetters.every(letter => state.guessedLetters.includes(letter));
    
      if (hasWon) {
        return { hasWon: true };
      }
      return {};
    }),
    
    addGuess: (letter) =>
      set((state) => {
        const updatedGuesses = [...state.guessedLetters, letter];
        const wordLetters = state.word?.split('') || [];
        const hasWon = wordLetters.every((char) => updatedGuesses.includes(char));
        console.log(updatedGuesses)
        console.log(hasWon)
        return {
          guessedLetters: updatedGuesses,
          hasWon,
        };
      }),

  })),


  
);

export default useAlphabet;
