import React from 'react'
import '../head.css'; 
import ParticlesComponent from './Particles';

const Head = () => {
  return (
    <>
    <ParticlesComponent  id="particles"></ParticlesComponent>
    

    <div id='page'>
      <p className='text'>Cyber Security</p>
    </div>
    </>
  )
}

export default Head