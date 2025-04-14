// src/Stores/useAlphabet.js
import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';

const useAlphabet = create(
  subscribeWithSelector((set) => ({
    letters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
    lives: 6,
    word: null,
    guessedLetters: [],
    wordMeaning: null,
    hasWon: false,
    resetSeed: Math.random(),



    setWord: (value) => {
      set(() => {
        return {
          word: value
        }
      })
    },

    setWordMeaning: (value) => {
      set(() => {
        return {
          wordMeaning: value
        }
      })
    },

    ResetLetters: () => set(() => ({ guessedLetters: [] })),

    disableAllLetters: () => set((state) => ({
      guessedLetters: [...state.letters]
    })),

    addGuess: (letter) =>
      set((state) => {
        const updatedGuesses = [...state.guessedLetters, letter];
        const wordLetters = state.word?.split('') || [];
        const hasWon = wordLetters.every((char) => updatedGuesses.includes(char));
        return {
          guessedLetters: updatedGuesses,
          hasWon,
        };
      }),
    displaylives: (value) => set(() => ({ lives: value })),



    resetGame: () => {
      set((state) => ({
        guessedLetters: [],
        resetSeed: Math.random(),
        lives: 6,
        hasWon:false
      }));
    }
    
  })),





);

export default useAlphabet;
