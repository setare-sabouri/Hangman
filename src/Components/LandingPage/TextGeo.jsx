import { Text3D } from "@react-three/drei";
import { Suspense } from "react";

const TextGeo = ({ text = "Hello World", size = 1, position = [0, 0, 0], onClick }) => {



    const handlePointerOver = () => {
        document.body.style.cursor = "pointer"; 
    };

    const handlePointerOut = () => {
        document.body.style.cursor = "default";
    };


    return (
        
        <Suspense fallback={null}>
            <Text3D
                position={position}
                font="./fonts/Courgette_Regular.json"
                size={size}
                height={0.2}
                curveSegments={12}
                bevelEnabled
                bevelThickness={0.02}
                bevelSize={0.02}
                bevelOffset={0}
                bevelSegments={5}
                onClick={onClick}
                onPointerOver={handlePointerOver}
                onPointerOut={handlePointerOut}
                
            >
                {text}
                <meshStandardMaterial color="#cd5c20" />
            </Text3D>
        </Suspense>
    );
};

export default TextGeo;
