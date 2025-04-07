import React from 'react'
import { Center, useGLTF } from '@react-three/drei'
const Hearts = () => {
    const Heart = useGLTF('/realistic_human_heart.glb')
    console.log(Heart)
  return (
   <>
   <Center>
   {/* <primitive object={Heart.scene} scale={4}/> */}

   </Center>
   </>
  )
}

export default Hearts
