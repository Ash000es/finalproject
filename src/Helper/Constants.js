
import StarRateIcon from '@material-ui/icons/StarRate'
import React from 'react'
import SelectRoom from '../components/SelectRoom'
import travelShoe from '../assets/travelShoe.png'
import swimSuite from '../assets/swimSuite.jpg'
import travelBag from '../assets/travelBag.jpg'
import boatHire from '../assets/boatHire.jpg'
import barcaAttraction from '../assets/barcaAttraction.jpg'
import aqua from '../assets/aqua.jpg'
// homepage results const
export const googleAPIKey = 'AIzaSyArQla27kHz9uEus_Zyhh-rDHhg6nYTXEs'
export const googleURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${googleAPIKey}`
export const popularCities = [{ code: 'SAT' }, { code: 'BCN' }, { code: 'IBZ' }, { code: 'LIS' }, { code: 'PMI' }, { code: 'MAH' }, { code: 'MKS' }, { code: 'NAP' }, { code: 'TIV' }]
export const apikey = 'kw7vpx3nefnq47b8dk6kehg4'
export const sec = 'nyM8qx6n8S'
export const D = new Date()
export const getSignature = () => {
  return (apikey + sec + Math.round(D.getTime() / 1000))
}
export const vcCodes = ['3LL', '4LL', '5LL', 'VILLA', 'AT3', 'VTV']
export const hotelcodes = ['3EST', '4EST', '5EST', '4LUX', '5LUX', 'APTH3', 'APTH4', 'APTH5', 'BB3', 'BB4', 'BB5', 'BOU', 'SUP', 'HIST', 'RSORT', 'H5_5', 'H4_4', 'H3_5', 'H3S', 'HR4', 'HR5', 'HRS']
export const poshCodes = ['5EST', '4LUX', '5LUX', 'APTH5', 'BOU', 'H5_5', 'HR5']
export const boldCodes = ['4EST', 'APTH4', 'BB4', 'BB5', 'SUP', 'RSORT', 'H4_4', 'HR4']
export const essentialCodes = ['3EST', 'APTH3', 'BB3', 'H3_5', 'H3S', 'HRS']
export const homesCodes = ['3LL', '4LL', '5LL', 'VILLA', 'AT3', 'VTV']
export const categoryCodes = ['3EST', '4EST', '4LUX', '5EST', '5LUX', 'SUP', 'HIST', 'RSORT', 'H5_5', 'H4_4', 'H3_5', 'H3S', 'BOU', 'BB4', 'BB5', 'BB3', 'HR4', 'HR5', 'HRS', '3LL', '4LL', '5LL', 'APTH3', 'APTH4', 'APTH5', 'AT3', 'VILLA', 'VTV']
export const extras = [
  { title: 'Kings Breakfast ', price: 10, alotment: 6, image: 'https://source.unsplash.com/random', summary: 'Kings Breakfast is served in bed and includes: orange juice, pastry, posh eggs, a selection of cheeses, coffee' },

  { title: 'Double trouble', price: 20, alotment: 6, image: 'https://source.unsplash.com/random', summary: 'We call it death by chocolate, two layers of dark and white chocolate infusion will send you to seven heavens' },
  { title: 'House Red', price: 30, alotment: 6, image: 'https://source.unsplash.com/random', summary: 'our !995 red merlot is famous for its sweet berry tasts, ideal to accompany chicken or fish dishes' }

]

export const stars3 = [<StarRateIcon />, <StarRateIcon />, <StarRateIcon />]
export const stars4 = [<StarRateIcon />, <StarRateIcon />, <StarRateIcon />, <StarRateIcon />]
export const stars5 = [<StarRateIcon />, <StarRateIcon />, <StarRateIcon />, <StarRateIcon />, <StarRateIcon />]
export const masterLinkSmall = 'http://photos.hotelbeds.com/giata/'
export const masterLinkLarge = 'http://photos.hotelbeds.com/giata/original/'
// cont
const blue = '#0088BC'
const orange = '#FF8B00'
const lightGrey = '#E6E6E6'
const grey = '#6B6B6B'
const black = '#404040'
const redish = '#FF5A5A'
const lightWhite = '#F2F2F2'
const fontFamily1 = 'robot'
const fontFamily2 = 'Gotham'
const fontSizePara = 16
const fontSizeHead = 29
const fontSizeSubHead = 22
const border = '1px solid lightgrey'

export const colorStyles = {
  blue: blue,
  orange: orange,
  lightGrey: lightGrey,
  grey: grey,
  black: black,
  redish: redish
}
const codes_Gym = [
  {
    FacilityCode: 470,
    FacilityGroupCode: 70,
    icon: 12,
    name: 'Gym'

  },
  {
    FacilityCode: 295,
    FacilityGroupCode: 90,
    icon: 12,
    name: 'Gym'

  },
  {
    FacilityCode: 308,
    FacilityGroupCode: 60,
    icon: 12,
    name: 'Gym'

  }

]
const codes_Air_conditioning = [
  {
    FacilityCode: 20,
    FacilityGroupCode: 30,
    icon: 3,
    name: 'Air conditioning'

  },
  {
    FacilityCode: 180,
    FacilityGroupCode: 60,
    icon: 24,
    name: 'Air conditioning'

  }
]
const codes_Pool = [
  {
    FacilityCode: 306,
    FacilityGroupCode: 60,
    icon: 29,
    name: 'Pool'

  },
  {
    FacilityCode: 326,
    FacilityGroupCode: 60,
    icon: 8,
    name: 'Pool'

  },
  {
    FacilityCode: 363,
    FacilityGroupCode: 73,
    icon: 29,
    name: 'Pool'

  },
  {
    FacilityCode: 364,
    FacilityGroupCode: 73,
    icon: 29,
    name: 'Pool'

  },
  {
    FacilityCode: 365,
    FacilityGroupCode: 73,
    icon: 29,
    name: 'Pool'

  },
  {
    FacilityCode: 360,
    FacilityGroupCode: 73,
    icon: 29,
    name: 'Pool'

  },

  {
    FacilityCode: 361,
    FacilityGroupCode: 73,
    icon: 29,
    name: 'Pool'

  },
  {
    FacilityCode: 362,
    FacilityGroupCode: 73,
    icon: 29,
    name: 'Pool'

  },
  {
    FacilityCode: 313,
    FacilityGroupCode: 60,
    icon: 29,
    name: 'Pool'

  },
  {
    FacilityCode: 573,
    FacilityGroupCode: 70,
    icon: 8,
    name: 'Pool'

  }
]

const codes_Internet = [
  {
    FacilityCode: 250,
    FacilityGroupCode: 70,
    icon: 22,
    name: 'Internet'

  },
  {
    FacilityCode: 100,
    FacilityGroupCode: 60,
    icon: 22,
    name: 'Internet'

  },
  {
    FacilityCode: 261,
    facilityGroupCode: 60,
    icon: 22,
    name: 'Internet'
  },
  {
    FacilityCode: 550,
    facilityGroupCode: 70,
    icon: 22,
    name: 'Internet'
  }
]
const codes_petFriendly = [
  {
    FacilityCode: 535,
    FacilityGroupCode: 70,
    icon: 22,
    name: 'Pet Friendly'

  },
  {
    FacilityCode: 540,
    FacilityGroupCode: 70,
    icon: 22,
    name: 'Pet Friendly'

  }
]
const codes_Spa = [
  {
    FacilityCode: 460,
    FacilityGroupCode: 74,
    icon: 12,
    name: 'Spa'

  },
  {
    FacilityCode: 620,
    FacilityGroupCode: 74,
    icon: 30,
    name: 'Spa'

  }
]
const codes_Breakfast = [
  {
    FacilityCode: 35,
    FacilityGroupCode: 80,
    icon: 31,
    name: 'Breakfast'

  },
  {
    FacilityCode: 180,
    FacilityGroupCode: 80,
    icon: 3,
    name: 'Breakfast'

  },
  {
    FacilityCode: 264,
    FacilityGroupCode: 80,
    icon: 3,
    name: 'Breakfast'

  },
  {
    FacilityCode: 30,
    FacilityGroupCode: 80,
    icon: 31,
    name: 'Breakfast'

  }
]
const codes_Parking = [
  {
    FacilityCode: 500,
    FacilityGroupCode: 70,
    icon: 12,
    name: ' parking'

  },
  {
    FacilityCode: 560,
    FacilityGroupCode: 70,
    icon: 12,
    name: ' parking'

  },
  {
    FacilityCode: 330,
    FacilityGroupCode: 70,
    icon: 12,
    name: ' parking'

  }
]
export const amenDirectory = {
  Pool: codes_Pool,
  'Pet Friendly': codes_petFriendly,
  Internet: codes_Internet,
  Spa: codes_Spa,
  Parking: codes_Parking,
  Gym: codes_Gym
}

export const amenitiesToFilter = [
  ...Object.keys(amenDirectory),
  'Restaurant',
  'Bar',
  'Room service'

]

// const thirdarr = [...firstst, ...amncode]

export const amenCodes = [
  ...codes_Pool, ...codes_petFriendly, ...codes_Internet, ...codes_Spa, ...codes_Parking, ...codes_Gym,

  {
    FacilityCode: 200,
    FacilityGroupCode: 71,
    icon: 8,
    name: 'Restaurant'

  },
  {
    FacilityCode: 130,
    FacilityGroupCode: 71,
    icon: 3,
    name: 'Bar'

  },
  {
    FacilityCode: 270,
    FacilityGroupCode: 70,
    icon: 12,
    name: 'Room service'

  }

]

export const objectToMap = [{
  image: 'https://source.unsplash.com/random',
  headLine: 'ASOS DESIGN Maternity lounge jumpsuit',
  descripText: 'nothing yet',
  price: 32

}, {
  image: 'https://source.unsplash.com/random',
  headLine: 'ASOS DESIGN Maternity lounge jumpsuit',
  descripText: 'nothing yet',
  price: 32

}, {
  image: 'https://source.unsplash.com/random',
  headLine: 'ASOS DESIGN Maternity lounge jumpsuit',
  descripText: 'nothing yet',
  price: 32

}, {
  image: 'https://source.unsplash.com/random',
  headLine: 'ASOS DESIGN Maternity lounge jumpsuit',
  descripText: 'nothing yet',
  price: 32

}, {
  image: 'https://source.unsplash.com/random',
  headLine: 'ASOS DESIGN Maternity lounge jumpsuit',
  descripText: 'nothing yet',
  price: 32

}, {
  image: 'https://source.unsplash.com/random',
  headLine: 'ASOS DESIGN Maternity lounge jumpsuit',
  descripText: 'nothing yet',
  price: 32

}, {
  image: 'https://source.unsplash.com/random',
  headLine: 'ASOS DESIGN Maternity lounge jumpsuit',
  descripText: 'nothing yet',
  price: 32

}, {
  image: 'https://source.unsplash.com/random',
  headLine: 'ASOS DESIGN Maternity lounge jumpsuit',
  descripText: 'nothing yet',
  price: 32

}, {
  image: 'https://source.unsplash.com/random',
  headLine: 'ASOS DESIGN Maternity lounge jumpsuit',
  descripText: 'nothing yet',
  price: 32

}

]
export const ShopHomepage = [
  {
    id: 3,
    title: 'Air Max',
    subtitle: 'Deluxe',
    image: travelBag
    // eslint-disable-next-line max-len

  },
  {
    id: 1,
    title: 'Huarache',
    subtitle: 'Gripp',
    image: travelShoe
    // eslint-disable-next-line max-len

  },
  {
    id: 2,
    title: 'Air Max',
    subtitle: '270 P',
    image: swimSuite
    // eslint-disable-next-line max-len

  }

]

export const ActivityHomepage = [
  {
    id: 3,
    title: 'Air Max',
    subtitle: 'Deluxe',
    image: barcaAttraction
    // eslint-disable-next-line max-len

  },
  {
    id: 2,
    title: 'Air Max',
    subtitle: '270 P',
    image: boatHire
    // eslint-disable-next-line max-len

  },
  {
    id: 1,
    title: 'Huarache',
    subtitle: 'Gripp',
    image: aqua
    // eslint-disable-next-line max-len

  }

]
