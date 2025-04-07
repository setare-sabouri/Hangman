import React, { useEffect } from 'react'
import './SinglePlayer.scss'
import useScene from '../../Stores/useScene'
import { Text } from '@react-three/drei';
 


const SinglePlayer = () => {

  const { setScene } = useScene((state) => state);

  useEffect(() => { 
    setScene(
   <Text>
    random text 
   </Text>
    );
    return () => setScene(null);
},[])

  return (
   <>
   </>
  )
}

export default SinglePlayer
