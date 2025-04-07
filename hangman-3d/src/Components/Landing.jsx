import React from 'react'
import { Link } from 'react-router-dom'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useMediaQuery } from 'react-responsive'
import HangedMan from './HangedMan'
import useGame from '../Stores/useGame'
import { AxesHelper } from 'three'
const Landing = () => {
  const isMobileQuery = useMediaQuery({ query: '(max-width: 768px)' });
  const setIsMobile = useGame((state) => state.setIsMobile);

  React.useEffect(() => {
    setIsMobile(isMobileQuery);
  }
  , [isMobileQuery]);

  
  return (
    <>
         <Canvas
                camera={{
                    position: isMobileQuery ? [0, 0, 10] : [0, 5, 20],  
                    fov: isMobileQuery ? 50 : 90,  
                                      
                }}>
                <OrbitControls maxDistance={10}/>
                <color attach="background" args={['#555555']} />
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} /> 
               <group position={[0,0,0]}>
                <HangedMan/>
               </group>
                <axesHelper args={[5]} />
            </Canvas>


        {/* <Link to="/game">
        <h1>Welcome to Hangman 3D</h1>
        </Link> */}
    </>
  )
}

export default Landing
