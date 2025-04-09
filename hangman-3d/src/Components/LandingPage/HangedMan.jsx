import React from 'react'
import { Center, Float, useGLTF,Text } from '@react-three/drei'

const HangedMan = () => {
    const HangedMan = useGLTF('/hanged_man.glb')
  return (
     <Center>
          <Float  floatIntensity={1}  >
          <primitive object={HangedMan.scene} scale={4} />
          
          <Text 
            font="./bebas-neue-v9-latin-regular.woff"
            fontSize={2}
             color="white" 
             position={[-6, 5, 0]} 
             anchorX="center"
             anchorY="middle"
            
            onClick={() => window.location.href = '/game/onePlayer'}
            >
                Single Player
            </Text>
            <Text 
            font="./bebas-neue-v9-latin-regular.woff"
            fontSize={2}
             color="white" 
             position={[-6, 2, 0]} 
             anchorX="center"
              anchorY="middle"
              
              onClick={() => window.location.href = '/game/twoPlayer'}
              >
                Two Player
            </Text>
        </Float>
    
    </Center>
  )
}

export default HangedMan
