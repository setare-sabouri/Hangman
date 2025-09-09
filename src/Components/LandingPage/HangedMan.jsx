import { useGLTF} from '@react-three/drei'
import useGame from '../../Stores/useGame'
import TextGeo from './TextGeo'

const HangedMan = () => {
  const HangedMan = useGLTF('/models/hangman.glb')
    const { isMobile} = useGame((state) => state)
  
  return (
    <>
        <primitive position={isMobile?[-1.3,-6,0]:[-3.4,-4.3,-1]} object={HangedMan.scene} scale={isMobile?0.8:1} />

        <TextGeo text='Single Player' size={isMobile?1:1.1} position={isMobile?[-4,4,0]:[0,0.5,-1]}onClick={() => {window.location.href = '/game/onePlayer';}}/>
        <TextGeo text='Two Players' size={isMobile?1:1.1} position={isMobile?[-4,2,0]:[0,-2,-1]} onClick={() => window.location.href = '/game/twoPlayer'}/>


    </>
  )
}

export default HangedMan
