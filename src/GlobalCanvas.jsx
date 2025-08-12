import { Canvas } from "react-three-fiber";
import useScene from "./Stores/useScene";
import { PresentationControls } from "@react-three/drei";
import useGame from "./Stores/useGame";

const GlobalCanvas = () => {
    const isMobile = useGame((state) => state.isMobile)
    const { scene } = useScene((state) => state);

    return (
        <Canvas
            camera={{
                position: isMobile ? [0, 0, 10] : [0, 0, 8],
                fov: isMobile ? 80 : 60,
            }}>
            <color args={["#E76F51"]} attach={"background"} />
            <directionalLight position={[0, 0, 8]} intensity={4} lookAt={[0, 0, 0]} />
            <ambientLight intensity={1} />

            <PresentationControls global polar={[-0.3, 0.5]} azimuth={[-1.5, 0.75]} damping={0.3} snap position={[0, 2, 0]}>
                {scene}
            </PresentationControls>

        </Canvas>
    )
}

export default GlobalCanvas
