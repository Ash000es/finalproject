// TODO: this file is not a helper. It should be in a folder called handlers

import Sign from 'js-sha256'
import { apikey, sec } from '../Keys.json'
import { removeDuplicates } from '../Helper/Helper'
import { amenities } from '../Helper/amenities'
import { masterLinkLarge, masterLinkSmall, categoryCodes } from '../Helper/Constants.js'
import { TableCell } from '@material-ui/core'

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

  // console.log(getSignature())
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

    const checkInDate = hotels.checkIn
    const checkInOut = hotels.checkOut
    const hotelsOnly = hotels.hotels

    const insertDates = hotelsOnly.map(hotel => {
      const hotelRoom = hotel.rooms.map(room => {
        const roomRatesArray = room.rates.map(rate => {
          const mySellingRate = (rate.net * 113) / 100
          const newRateObject = { ...rate, mySellingRate }
          // console.log(newRateObject, 'new rate')
          return newRateObject
        })
        const newRoom = { ...room, rates: roomRatesArray }
        return newRoom
      })
      // console.log(hotelRoom, 'newrooms')

      const newHotel = { ...hotel, checkInDate, checkInOut, rooms: hotelRoom }
      return newHotel
    })
    const apiHotelResults1 = insertDates
    // console.log(apiHotelResults1, 'changes')
    // const marginRanking = hotels.hotels.rooms.map(room => {
    //   room.rates.map(rate => {
    //   if (rate.sellingRate) {
    //     const marginValue = (rate.sellingRate - rate.net) - rate.net * 100
    //     return marginValue
    //   }

    //   })
    // })

    const apiHotelResults = apiHotelResults1.filter(hotel => categoryCodes.includes(hotel.categoryCode))

    // console.log(apiHotelResults)
    const hotelIDS = apiHotelResults.map(hotel => hotel.code)
    // console.log(hotelIDS)
    return fetchHotels(destination.code, hotelIDS, db)
      .then(dbHotels => {
        // console.log('dbHotel', dbHotels)
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
// const mapResultToHotel = (dbHotels, apiHotelResults) => {
//   const final = []
//   dbHotels.forEach(dbHotel => apiHotelResults.forEach(apiHotel => {
//     // const { address, images, description, interestPoints, lastUpdate, license } = dbHotel
//     const address = dbHotel.address
//     const images = dbHotel.images
//     console.log(images, ' images in api hand')
//     const description = dbHotel.description
//     const interestPoints = dbHotel.interestPoints
//     const lastUpdate = dbHotel.lastUpdate
//     const license = dbHotel.license
//     const amenities1 = dbHotel.facilities
//     const amenities2 = removeDuplicates(amenities1)
//     // console.log(amenities2, 'iam 2')

//     if (dbHotel.code === apiHotel.code) {
//       apiHotel = { ...apiHotel, amenities2, address, images, description, interestPoints, lastUpdate, license }
//       // console.log(apiHotel, 'new')
//       final.push(apiHotel)
//     }
//   }))
//   return final
// }

const mapResultToHotel = (a1, a2) =>
  a2.map(itm => ({
    ...a1.find((item) => (item.code === itm.code) && item),
    ...itm
  }))
  // popular destinations initial handler
export function requestPopularDest ({ occupancies, destination, stay, reviews }) {
  // console.log({ occupancies, destination, stay, reviews }, 'populardest()')
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

  // console.log(getSignature())
  // console.log(JSON.stringify(createRequestBody()))
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

    const checkInDate = hotels.checkIn
    const checkInOut = hotels.checkOut
    const hotelsOnly = hotels.hotels

    const insertDates = hotelsOnly.map(hotel => {
      const hotelRoom = hotel.rooms.map(room => {
        const roomRatesArray = room.rates.map(rate => {
          // const numberOfRooms = rate.roomNumber
          const mySellingRate = (rate.net * 113) / 100
          const newRateObject = { ...rate, mySellingRate }
          // console.log(newRateObject, 'new rate')
          return newRateObject
        })
        const newRoom = { ...room, rates: roomRatesArray }
        return newRoom
      })
      // console.log(hotelRoom, 'newrooms')

      const newHotel = { ...hotel, checkInDate, checkInOut, rooms: hotelRoom }
      return newHotel
    })

    const apiHotelResults1 = insertDates
    // console.log(apiHotelResults1, 'changes')

    const apiHotelResults = apiHotelResults1.filter(hotel => categoryCodes.includes(hotel.categoryCode))
    return apiHotelResults
  })
}
// popular destinations secound handler
export const fetchPopularDestData = (des, db) => {
  console.log(des, 'lp[')
  const destinationCode = des[0].destinationCode
  console.log(destinationCode)

  const hotelIDS = des.map(hotel => hotel.code)
  return fetchHotels(destinationCode, hotelIDS, db)
    .then(dbHotels => {
      console.log('dbHotel', dbHotels)
      const hotelsProject = mapResultToHotel(dbHotels, des)
      console.log(hotelsProject, 'hotelsproject')
      return hotelsProject
    })
}
