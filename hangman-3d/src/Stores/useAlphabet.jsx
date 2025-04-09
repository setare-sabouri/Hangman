// src/Stores/useAlphabet.js
import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';

const useAlphabet = create(
  subscribeWithSelector((set) => ({
    letters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),


    word: null,
    setWord: (value) => {
      set((state) => {
        return {
          word: value
        }
      })
    },
    wordMeaning: null,
    setWordMeaning: (value) => {
      set((state) => {
        return {
          wordMeaning: value
        }
      })
    },

    guessedLetters: [],

    addGuess: (letter) => set((state) => ({
      guessedLetters: [...state.guessedLetters, letter]
    })),

    // resetGuesses: () => set(() => ({ guessedLetters: [] })),

    disableAllLetters: () => set((state) => ({
      guessedLetters: [...state.letters]
    }))

  }))
);

export default useAlphabet;
