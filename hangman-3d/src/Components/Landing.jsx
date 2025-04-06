import React from 'react'
import { Link } from 'react-router-dom'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Environment } from '@react-three/drei'
import { useMediaQuery } from 'react-responsive'
const Landing = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  return (
    <div>
         <Canvas
                camera={{
                    position: isMobile ? [0, 0, 12] : [0, 0.5, 10],  // Zoom out on mobile
                    fov: isMobile ? 80 : 60,                    // Wider view on mobile
                }}>
                <OrbitControls maxDistance={10}/>
                <Environment preset="city" />
               
            </Canvas>


        {/* <Link to="/game">
        <h1>Welcome to Hangman 3D</h1>
        </Link> */}
    </div>
  )
}

export default Landing
