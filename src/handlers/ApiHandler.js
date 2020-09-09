
import Sign from 'js-sha256'
import { categoryCodes } from '../Helper/Constants.js'

let keys
if (process.env.NODE_ENV === 'production') {
  keys = process.env
} else {
  keys = require('../keys.json')
}
const { REACT_APP_apikey, REACT_APP_sec } = keys

export function requestAvailableHotels (db, { occupancies, destination, stay, reviews, dailyRate }) {
  const D = new Date()

  const getSignature = () => {
    return Sign(REACT_APP_apikey + REACT_APP_sec + Math.round(new Date().getTime() / 1000))
  }

  const createRequestBody = () => {
    return {
      stay,
      occupancies,
      destination,
      reviews,
      dailyRate
    }
  }
  console.log(getSignature())

  console.log('fetching api..')
  return window.fetch('https://cors-anywhere.herokuapp.com/https://api.test.hotelbeds.com/hotel-api/1.0/hotels',
    {
      method: 'POST',
      headers: {
        'Api-Key': REACT_APP_apikey,
        'X-Signature': getSignature(),
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Accept-Encoding': 'gzip'
      },

      body: JSON.stringify(createRequestBody())
    }).then(res => {
    return res.json()
  }).then(Res => {
    const { hotels } = Res

    const checkInDate = hotels.checkIn
    const checkInOut = hotels.checkOut
    const hotelsOnly = hotels.hotels

    const insertDates = hotelsOnly.map(hotel => {
      const apiRooms = hotel.rooms
      const hotelRoom = apiRooms.map(room => {
        const roomRatesArray = room.rates.map(rate => {
          const mySellingRate1 = (rate.net * 113) / 100
          const mySellingRate = parseFloat(mySellingRate1).toFixed(2)
          const newRateObject = { ...rate, mySellingRate }

          return newRateObject
        })
        const newRoom = { ...room, rates: roomRatesArray }
        return newRoom
      })

      const newHotel = { ...hotel, checkInDate, checkInOut, apiRooms: hotelRoom }
      return newHotel
    })
    const apiHotelResults1 = insertDates
    const apiHotelResults = apiHotelResults1.filter(hotel => categoryCodes.includes(hotel.categoryCode))
    const hotelIDS = apiHotelResults.map(hotel => hotel.code)
    return fetchHotels(destination.code, hotelIDS, db)
      .then(dbHotels => {
        const hotelsProject = mapResultToHotel(apiHotelResults, dbHotels)

        return hotelsProject
      })
  })
}

const fetchHotels = (destination, hotelIDS, db) => {
  console.log('fetching db..')
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

const mapResultToHotel = (a1, a2) =>
  a2.map(itm => ({
    ...a1.find((item) => (item.code === itm.code) && item),
    ...itm
  }))
  // popular destinations initial handler
export function requestPopularDest ({ occupancies, destination, stay, reviews }) {
  const D = new Date()

  const getSignature = () => {
    return Sign(REACT_APP_apikey + REACT_APP_sec + Math.round(D.getTime() / 1000))
  }

  const createRequestBody = () => {
    return {
      stay,
      occupancies,
      destination,
      reviews
    }
  }

  return window.fetch('https://cors-anywhere.herokuapp.com/https://api.test.hotelbeds.com/hotel-api/1.0/hotels',
    {
      method: 'POST',
      headers: {
        'Api-Key': REACT_APP_apikey,
        'X-Signature': getSignature(),
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Accept-Encoding': 'gzip'
      },

      body: JSON.stringify(createRequestBody())
    })
    .then(res => {
      return res.json()
    })
    .then(Response => {
      const { hotels } = Response

      const checkInDate = hotels.checkIn
      const checkInOut = hotels.checkOut
      const hotelsOnly = hotels.hotels

      const insertDates = hotelsOnly.map(hotel => {
        const apiRooms = hotel.rooms
        const hotelRoom = apiRooms.map(room => {
          const roomRatesArray = room.rates.map(rate => {
            const mySellingRate1 = (rate.net * 113) / 100
            const mySellingRate = parseFloat(mySellingRate1).toFixed(2)
            const newRateObject = { ...rate, mySellingRate }

            return newRateObject
          })
          const newRoom = { ...room, rates: roomRatesArray }
          return newRoom
        })

        const newHotel = { ...hotel, checkInDate, checkInOut, apiRooms: hotelRoom }

        return newHotel
      })

      const apiHotelResults1 = insertDates
      const apiHotelResults = apiHotelResults1.filter(hotel => categoryCodes.includes(hotel.categoryCode))
      return apiHotelResults
    })
}
// popular destinations secound handler
export const fetchPopularDestData = (des, db) => {
  console.log('fetching api..')
  const destinationCode = des[0].destinationCode
  const hotelIDS = des.map(hotel => hotel.code)
  return fetchHotels(destinationCode, hotelIDS, db)
    .then(dbHotels => {
      const hotelsProject = mapResultToHotel(dbHotels, des)

      return hotelsProject
    })
}

export const fetchCurrentHotelNewAvail = (db, { stay, occupancies, hotels }) => {
  const D = new Date()

  const getSignature = () => {
    return Sign(REACT_APP_apikey + REACT_APP_sec + Math.round(D.getTime() / 1000))
  }

  const createRequestBody = () => {
    return {
      stay,
      occupancies,
      hotels
    }
  }

  return window.fetch('https://cors-anywhere.herokuapp.com/https://api.test.hotelbeds.com/hotel-api/1.0/hotels',
    {
      method: 'POST',
      headers: {
        'Api-Key': REACT_APP_apikey,
        'X-Signature': getSignature(),
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Accept-Encoding': 'gzip'
      },

      body: JSON.stringify(createRequestBody())
    }).then(res => res.json())
}
// const mapResultToHotel = (dbHotels, apiHotelResults) => {
//   const final = []
//   dbHotels.forEach(dbHotel => apiHotelResults.forEach(apiHotel => {
//     // const { address, images, description, interestPoints, lastUpdate, license } = dbHotel
//     const address = dbHotel.address
//     const images = dbHotel.images
//
//     const description = dbHotel.description
//     const interestPoints = dbHotel.interestPoints
//     const lastUpdate = dbHotel.lastUpdate
//     const license = dbHotel.license
//     const amenities1 = dbHotel.facilities
//     const amenities2 = removeDuplicates(amenities1)
//

//     if (dbHotel.code === apiHotel.code) {
//       apiHotel = { ...apiHotel, amenities2, address, images, description, interestPoints, lastUpdate, license }
//
//       final.push(apiHotel)
//     }
//   }))
//   return final
// }
