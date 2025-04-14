import React from 'react'
import HangedMan from './HangedMan'
import useScene from '../../Stores/useScene'
import { useEffect } from 'react'
import useGame from '../../Stores/useGame'
const Landing = () => {
  const { setScene } = useScene((state) => state);
  const { isMobile, setisMobile } = useGame((state) => state)
  useEffect(() => {
    setScene(
      <group
        scale={isMobile ? [0.6, 0.6, 0.6] : [1, 1, 1]}
        position={isMobile ? [1, 0, 0] : [0, 0, 0]}
        >
        <HangedMan />
      </group>
    );

    return () => setScene(null);
  }, [isMobile])

  return (
    <></>
  )
}

export default Landing
