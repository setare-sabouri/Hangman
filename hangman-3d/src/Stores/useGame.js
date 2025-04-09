import {create} from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'
import useAlphabet from './useAlphabet'


export default create(subscribeWithSelector(
    
    (set)=>({
    isMobile: false,

    setIsMobile:(value)=>{
        set((state)=>{
            return {
                isMobile: value
            }
        })
    },


    lives: 6,
    displaylives: (value) => set((state) => ({ lives: value})),

    resetGame: () => {
        const ResetLetters = useAlphabet.getState().ResetLetters;
        ResetLetters();
        set(() => ({
          lives: 6
        }));
      }
      ,
})
))