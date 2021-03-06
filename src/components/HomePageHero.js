import React from 'react'
import './Hero.css'
import cover from '../assets/cover.svg'
import HomePageCarousel from './HomePageCarousel'
import { ShopHomepage, ActivityHomepage } from '../Helper/Constants'

const HomePageHero = () => {
  return (
    <>
      <div className='bigCon'>
        <img src={cover} style={{ width: '100%', height: '45%' }} alt='Card image' />
      </div>

      <div className='splitCon'>
        <div className='con2'>
          <HomePageCarousel ShopHomepage={ShopHomepage} />
        </div>
        <div className='con3'>
          <HomePageCarousel ShopHomepage={ActivityHomepage} />
        </div>
      </div>
    </>
  )
}
export default HomePageHero
