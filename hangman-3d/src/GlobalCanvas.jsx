import { Canvas } from "react-three-fiber";
import useScene from "./Stores/useScene";
import { useMediaQuery } from 'react-responsive'
import { OrbitControls } from "@react-three/drei";
import useGame from "./Stores/useGame";
import React from 'react'

const GlobalCanvas = () => {
    const isMobileQuery = useMediaQuery({ query: '(max-width: 768px)' });
    const setIsMobile = useGame((state) => state.setIsMobile);
  
    React.useEffect(() => {
      setIsMobile(isMobileQuery);
    }
    , [isMobileQuery]);

    const { scene } = useScene((state) => state);

    return (
        <Canvas
            camera={{
                position: isMobileQuery ? [0, 0, 10] : [0, -5, 20],
                fov: isMobileQuery ? 100 : 60,

            }}>
            <OrbitControls maxDistance={10} />
            <color attach="background" args={['#555555']} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            {scene}
            <axesHelper args={[5]} />
        </Canvas>
    )
}

export default GlobalCanvas
