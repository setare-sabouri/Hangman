import React from 'react'
import { Center, Float, useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { useMatcapTexture } from "@react-three/drei";

const HangedMan = () => {
    const HangedMan = useGLTF('/hanged_man.glb')
    const boxGeometry = new THREE.BoxGeometry(1,1,1) 


    

  return (
     <Center>
          <Float rotationIntensity={0.5} floatIntensity={1}  >
          <primitive object={HangedMan.scene} scale={4} />x
        </Float>
    
    </Center>
  )
}

export default HangedMan
