
import StarRateIcon from '@material-ui/icons/StarRate'
import React from 'react'
import SelectRoom from '../components/SelectRoom'
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
// cont
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
    name: 'Fitness'

  },
  {
    FacilityCode: 308,
    FacilityGroupCode: 60,
    icon: 12,
    name: 'Fitness room'

  }

]
const codes_Air_conditioning = [
  {
    FacilityCode: 20,
    FacilityGroupCode: 30,
    icon: 3,
    name: 'EC'

  },
  {
    FacilityCode: 180,
    FacilityGroupCode: 60,
    icon: 24,
    name: 'Individually adjustable air conditioning'

  }
]
const codes_Pool = [
  {
    FacilityCode: 306,
    FacilityGroupCode: 60,
    icon: 29,
    name: 'Outdoor swimming pool'

  },
  {
    FacilityCode: 326,
    FacilityGroupCode: 60,
    icon: 8,
    name: 'Private Pool'

  },
  {
    FacilityCode: 363,
    FacilityGroupCode: 73,
    icon: 29,
    name: 'Outdoor freshwater pool'

  },
  {
    FacilityCode: 364,
    FacilityGroupCode: 73,
    icon: 29,
    name: 'Outdoor saltwater pool'

  },
  {
    FacilityCode: 365,
    FacilityGroupCode: 73,
    icon: 29,
    name: 'Outdoor heated pool'

  },
  {
    FacilityCode: 360,
    FacilityGroupCode: 73,
    icon: 29,
    name: 'Indoor freshwater pool'

  },

  {
    FacilityCode: 361,
    FacilityGroupCode: 73,
    icon: 29,
    name: 'Indoor saltwater pool'

  },
  {
    FacilityCode: 362,
    FacilityGroupCode: 73,
    icon: 29,
    name: 'Indoor heated pool'

  },
  {
    FacilityCode: 313,
    FacilityGroupCode: 60,
    icon: 29,
    name: 'Indoor swimming pool'

  },
  {
    FacilityCode: 573,
    FacilityGroupCode: 70,
    icon: 8,
    name: 'Private pool'

  }
]

const codes_Internet = [
  {
    FacilityCode: 250,
    FacilityGroupCode: 70,
    icon: 22,
    name: 'Wired Internet'

  },
  {
    FacilityCode: 100,
    FacilityGroupCode: 60,
    icon: 22,
    name: 'Internet access'

  },
  {
    FacilityCode: 261,
    facilityGroupCode: 60,
    icon: 22,
    name: 'Wi-fi'
  },
  {
    FacilityCode: 550,
    facilityGroupCode: 70,
    icon: 22,
    name: 'Wi-fi'
  }
]
const codes_petFriendly = [
  {
    FacilityCode: 535,
    FacilityGroupCode: 70,
    icon: 22,
    name: 'Small pets allowed (under 5 kg)'

  },
  {
    FacilityCode: 540,
    FacilityGroupCode: 70,
    icon: 22,
    name: 'Large pets allowed (over 5 kg)'

  }
]
const codes_Spa = [
  {
    FacilityCode: 460,
    FacilityGroupCode: 74,
    icon: 12,
    name: 'Spa treatments'

  },
  {
    FacilityCode: 620,
    FacilityGroupCode: 74,
    icon: 30,
    name: 'Spa centre'

  }
]
const codes_Breakfast = [
  {
    FacilityCode: 35,
    FacilityGroupCode: 80,
    icon: 31,
    name: 'Continental breakfast'

  },
  {
    FacilityCode: 180,
    FacilityGroupCode: 80,
    icon: 3,
    name: 'Hot breakfast'

  },
  {
    FacilityCode: 264,
    FacilityGroupCode: 80,
    icon: 3,
    name: 'Breakfast a la carte'

  },
  {
    FacilityCode: 30,
    FacilityGroupCode: 80,
    icon: 31,
    name: 'Breakfast buffet'

  }
]
export const amenDirectory = {
  Pool: codes_Pool,
  Internet: codes_Internet,
  'Pet Friendly': codes_petFriendly,
  Spa: codes_Spa,
  'Air Conditioning': codes_Air_conditioning,
  Gym: codes_Gym
}

export const vcCodes = ['3LL', '4LL', '5LL', 'VILLA', 'AT3', 'VTV']
export const hotelcodes = ['3EST', '4EST', '5EST', '4LUX', '5LUX', 'APTH3', 'APTH4', 'APTH5', 'BB3', 'BB4', 'BB5', 'BOU', 'SUP', 'HIST', 'RSORT', 'H5_5', 'H4_4', 'H3_5', 'H3S', 'HR4', 'HR5', 'HRS']
export const categoryCodes = ['3EST', '4EST', '4LUX', '5EST', '5LUX', 'SUP', 'HIST', 'RSORT', 'H5_5', 'H4_4', 'H3_5', 'H3S', 'BOU', 'BB4', 'BB5', 'BB3', 'HR4', 'HR5', 'HRS', '3LL', '4LL', '5LL', 'APTH3', 'APTH4', 'APTH5', 'AT3', 'VILLA', 'VTV']
export const amenitiesToFilter = [
  ...Object.keys(amenDirectory),
  'Restaurant',
  'Bar',
  'Room service',
  'concierge'

]
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
// const thirdarr = [...firstst, ...amncode]

export const amenCodes = [
  ...codes_Pool, ...codes_Internet, ...codes_petFriendly, ...codes_Spa, ...codes_Gym, ...codes_Air_conditioning,
  {
    FacilityCode: 130,
    FacilityGroupCode: 71,
    icon: 3,
    name: 'Bar'

  },
  {
    FacilityCode: 200,
    FacilityGroupCode: 71,
    icon: 8,
    name: 'Restaurant'

  },
  {
    FacilityCode: 270,
    FacilityGroupCode: 70,
    icon: 12,
    name: 'Room service'

  }

]
