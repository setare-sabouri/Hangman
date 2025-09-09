import React, { useRef, useMemo, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import useGame from '../../Stores/useGame'
import useAlphabet from '../../Stores/useAlphabet'
const Hearts = () => {
  const { nodes,materials} = useGLTF('/models/heart.glb')
  const heartMesh = nodes.Cartoon_Heart_Icon
  const material = materials.Red


  const { lives } = useAlphabet((state) => state)
  const { isMobile } = useGame((state) => state)
  
  // Create ref for instanced mesh and the array to store transformations
  const instancedMeshRef = useRef()

  useEffect(() => {
    if (instancedMeshRef.current) {
      for (let index = 0; index < lives; index++) {
        const matrix = new THREE.Matrix4()
        const x = index * 3
        matrix.makeTranslation(x, -9, 0)
        instancedMeshRef.current.setMatrixAt(index, matrix)
      }
      instancedMeshRef.current.instanceMatrix.needsUpdate = true
    }
  }, [lives])

  return (
    <instancedMesh
      position={isMobile ? [-3, -1, 0] : [-5, 2, 0]}
      scale={isMobile? 0.4: 0.6}
      ref={instancedMeshRef}
      args={[heartMesh.geometry, material, lives]}
    />
  )
}

export default Hearts
