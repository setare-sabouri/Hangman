import { Canvas } from "react-three-fiber";
import useScene from "./Stores/useScene";
import { useMediaQuery } from 'react-responsive'
import { OrbitControls } from "@react-three/drei";
import useGame from "./Stores/useGame";
import React from 'react'

const GlobalCanvas = () => {
    const isMobile = useGame((state) => state.isMobile)
    const { scene } = useScene((state) => state);

    return (
        <Canvas
            camera={{
                position: isMobile ? [0, 0, 10] : [0, 0, 8],
                fov: isMobile ? 80 : 60,
            }}>
            <OrbitControls
                enableDamping
                dampingFactor={0.1}
                rotateSpeed={0.5}
                maxDistance={10}
                minDistance={5}
                minPolarAngle={Math.PI / 4}   
                maxPolarAngle={(3 * Math.PI) / 4}
                maxAzimuthAngle={Math.PI / 2} 
                minAzimuthAngle={-Math.PI / 2}
            />          
            <ambientLight intensity={1} />
            <directionalLight position={[0, 0, 8]} intensity={4} lookAt={[0, 0, 0]} />
            {scene}
            {/* <axesHelper args={[5]} /> */}
        </Canvas>
    )
}

export default GlobalCanvas
