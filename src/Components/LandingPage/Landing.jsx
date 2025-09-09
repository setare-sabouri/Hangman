import React from 'react'
import HangedMan from './HangedMan'
import useScene from '../../Stores/useScene'
import { useEffect } from 'react'
import useGame from '../../Stores/useGame'
const Landing = () => {
  const { setScene } = useScene((state) => state);
  const { isMobile} = useGame((state) => state)
  useEffect(() => {
    setScene(
        <HangedMan />
    );
    return () => setScene(null);
  }, [])

  return (
    <></>
  )
}

export default Landing
