import React from 'react'
import coverhero from '../assets/coverhero.png'

const AboutUs = () => {
  return (
    <div>
      <img src={coverhero} style={{ width: '100%', height: '45%' }} alt='Card image' />
      <div style={{ position: 'absolute', top: '25%', right: '45%' }}><h2> About us </h2></div>

    </div>
  )
}; export default AboutUs
