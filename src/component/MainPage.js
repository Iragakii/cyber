import React from 'react'
import { Canvas } from '@react-three/fiber'
import Ea from './Ea'
import Head from './Head'

const MainPage = () => {
  return (
    <>
      <Head></Head>

      <Canvas shadows camera={{ position: [0, 0, 10], fov: 20 }}>
        <Ea></Ea>
      </Canvas>
      </>
  )
}

export default MainPage