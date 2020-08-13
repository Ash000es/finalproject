import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from '@material-ui/core/Button'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'
import SearchBar from '../SearchBar/SearchBar'
import './Hero.css'
import cover from '../../assets/cover.svg'
import HomePageCarousel from '../HomePageCarousel'
import { ShopHomepage, ActivityHomepage } from '../../Helper/Constants'

const HomePageHero = () => {
  return (
    <>
      <div className='bigCon'>

        <img src={cover} style={{ width: '100%', height: '100%' }} alt='Card image' />

      </div>

      <div className='splitCon'>
        <div className='con2'>

          <HomePageCarousel ShopHomepage={ShopHomepage} />

        </div>
        <div className='con3'>
          <HomePageCarousel ShopHomepage={ActivityHomepage} />
        </div>
      </div>
      {/* <div className='con1'>

      {/* </div> */}

    </>
  )
}; export default HomePageHero
