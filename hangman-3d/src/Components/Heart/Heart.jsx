import React, { useRef, useMemo, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import useGame from '../../Stores/useGame'
import useAlphabet from '../../Stores/useAlphabet'
const Hearts = () => {

  const { nodes, materials } = useGLTF('/realistic_human_heart.glb')
  const heartMesh = nodes.hartZBrush_defualt_group_Heart_Tex_0
  const material = materials.Heart_Tex
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
      castShadow
      receiveShadow
      position={isMobile ? [-2, -3, 0] : [-2, -1, 0]}
      ref={instancedMeshRef}
      args={[heartMesh.geometry, material, lives]}
      scale={0.3}
    />
  )
}

export default Hearts
