// src/Stores/useAlphabet.js
import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';

const useAlphabet = create(
  subscribeWithSelector((set) => ({
    letters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
  }))
);

export default useAlphabet;
