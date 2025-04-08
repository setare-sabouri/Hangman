import React, { useRef, useMemo, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
const Hearts = () => {
  const { nodes, materials } = useGLTF('/realistic_human_heart.glb')
  const heartMesh = nodes.hartZBrush_defualt_group_Heart_Tex_0
  const material = materials.Heart_Tex

  // Create ref for instanced mesh and the array to store transformations
  const instancedMeshRef = useRef()

  useEffect(() => {
    if (instancedMeshRef.current) {
      for (let index = 0; index < 6; index++) {
        const matrix = new THREE.Matrix4()
        const x = index * 3 
        matrix.makeTranslation(x, -9, 0)
        instancedMeshRef.current.setMatrixAt(index, matrix)
      }
      instancedMeshRef.current.instanceMatrix.needsUpdate = true
    }
  }, [])

  return (

    <instancedMesh
      castShadow  
      receiveShadow
      position={[-2, 0, 0]}
      ref={instancedMeshRef}
      args={[heartMesh.geometry, material, 6]} 
      scale={0.3}
    />
  )
}

export default Hearts
