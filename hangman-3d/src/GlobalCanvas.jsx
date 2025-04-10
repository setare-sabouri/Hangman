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
            <OrbitControls maxDistance={10} />
            <ambientLight intensity={2} />
            <directionalLight position={[0, 0, 8]} intensity={5} lookAt={[0,0,0]} />
            {scene}
            {/* <axesHelper args={[5]} /> */}
        </Canvas>
    )
}

export default GlobalCanvas
