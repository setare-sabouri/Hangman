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
    }
})
))