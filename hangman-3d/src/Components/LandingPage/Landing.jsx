import React from 'react'
import HangedMan from './HangedMan'
import useScene from '../../Stores/useScene'
import { useEffect } from 'react'

const Landing = () => {
const { setScene } = useScene((state) => state);

useEffect(() => { 
    setScene(
      <HangedMan/>  
  );
  return () => setScene(null);
},[])

  return (
  <></>
  )
}

export default Landing
