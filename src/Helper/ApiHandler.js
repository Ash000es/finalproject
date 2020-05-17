import Sign from 'js-sha256'
import { apikey, sec } from '../Keys.json'
import { getAmenitiesArray, getSmallPictures } from './Helper'
import { amenities } from './amenities'
import { masterLinkLarge, masterLinkSmall } from './Constants.js'

export function requestAvailableHotels (db, { occupancies, destination, stay, reviews }) {
  const D = new Date()

  const getSignature = () => {
    return Sign(apikey + sec + Math.round(D.getTime() / 1000))
  }

  const createRequestBody = () => {
    return {
      stay,
      occupancies,
      destination,
      reviews
    }
  }

  console.log(getSignature())
  console.log(JSON.stringify(createRequestBody()))
  return window.fetch('https://cors-anywhere.herokuapp.com/https://api.test.hotelbeds.com/hotel-api/1.0/hotels',
    {
      method: 'POST',
      headers: {
        'Api-Key': apikey,
        'X-Signature': getSignature(),
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Accept-Encoding': 'gzip'
      },

      body: JSON.stringify(createRequestBody())
    }).then(res => res.json()).then(Response => {
    console.log(Response)
    const { hotels } = Response
    const categoryCodes = ['3EST', '4EST', '4LUX', '5EST', '5LUX', 'SUP', 'HIST', 'RSORT', 'H5_5', 'H4_4', 'H3_5', 'H3S', 'BOU', 'BB4', 'BB5', 'BB3', 'HR4', 'HR5', 'HRS', '3LL', '4LL', '5LL', 'APTH3', 'APTH4', 'APTH5', 'AT3', 'VILLA', 'VTV']

    const apiHotelResults1 = hotels.hotels
    const apiHotelResults = apiHotelResults1.filter(hotel => categoryCodes.includes(hotel.categoryCode))

    console.log(apiHotelResults)
    const hotelIDS = apiHotelResults.map(hotel => hotel.code)
    console.log(hotelIDS)
    return fetchHotels(destination.code, hotelIDS, db)
      .then(dbHotels => {
        console.log('dbHotel', dbHotels)
        const hotelsProject = mapResultToHotel(dbHotels, apiHotelResults)
        console.log(hotelsProject, 'hotelsproject')
        return hotelsProject
      })
  })
}

const fetchHotels = (destination, hotelIDS, db) => {
  console.log('fetching..')
  const hotels = []
  return new Promise(resolve => {
    db.collection('hotels-limited').where('destinationCode', '==', destination)
      .onSnapshot(querySnapshot => {
        querySnapshot.forEach((hotel) => {
          const hotelData = hotel.data()
          if (hotelIDS.includes(hotelData.code)) {
            hotels.push(hotel.data())
          }
        })
        resolve(hotels)
      })
  })
}
const mapResultToHotel = (dbHotels, apiHotelResults) => {
  const final = []
  dbHotels.forEach(dbHotel => apiHotelResults.forEach(apiHotel => {
    const address = dbHotel.address
    const images = dbHotel.images
    // const images1 = getSmallPictures(images, masterLinkSmall)
    const amenities1 = dbHotel.facilities
    const amenities2 = getAmenitiesArray(amenities1, amenities)
    if (dbHotel.code === apiHotel.code) {
      apiHotel = { ...apiHotel, images, amenities2, address }
      console.log(apiHotel, 'new')
      final.push(apiHotel)
    }
  }))
  return final
}

// const mapResultToHotel = (a1, a2) =>
//   a1.map(itm => ({
//     ...a2.find((item) => (item.code === itm.code) && item),
//     ...itm
//   }))
