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
                position: isMobile ? [0, 0, 10] : [0, -5, 20],
                fov: isMobile ? 80 : 60,

            }}>
            <OrbitControls maxDistance={10} />
            <color attach="background" args={['#555555']} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            {scene}
            {/* <axesHelper args={[5]} /> */}
        </Canvas>
    )
}

export default GlobalCanvas
