import { Center, useGLTF, Text, Text3D } from '@react-three/drei'

const HangedMan = () => {
  const HangedMan = useGLTF('/hangman.glb')
  return (
    <Center>
        <primitive position={[0,-0.5,0]} object={HangedMan.scene} scale={0.9} />
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

    </Center>
  )
}

export default HangedMan
