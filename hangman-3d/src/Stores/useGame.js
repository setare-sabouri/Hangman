import {create} from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'
import { useMediaQuery } from 'react-responsive'


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

    word:null,
    setWord:(value)=>{
        set((state)=>{
            return {
                word: value
            }
        })
    },
    wordMeaning:null,
    setWordMeaning:(value)=>{
        set((state)=>{
            return {
                wordMeaning: value
            }
        })
    },


    lives: 6,
    displaylives: (lives) => set((state) => ({ lives: state.lives - 1 })),
})
))