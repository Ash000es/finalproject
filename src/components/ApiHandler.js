// TODO: THIS IS NOT A COMPONENT. SHOULD GO INTO UTILS OR HELPER OR HANDLER FOLDER
import Sign from 'js-sha256'
import { apikey, sec } from '../Keys.json'
import { getAmenitiesArray, getSmallPictures } from '../components/Helper'
import { amenities } from '../components/Constants/amenities'
import { masterLinkLarge, masterLinkSmall } from './Constants/Constants.js'

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

// const mapResultToHotel = (arr1, arr2) => {
//   const apihotel = arr2.map(apih => apih)
//   return arr1.map(hotel => {
//     if (hotel.code === apihotel.code) {
//       return [{
//         images: hotel.images,
//         amenities: hotel.facilities,
//         rooms: apihotel.rooms

//       }]
//     }
//   })
// }

// const IDSapi = apiHotelResults.map(ids => ids.code)
// return dbHotels.forEach(dbHotel => apiHotelResults.forEach(apiHotel => {
//   if (dbHotel.code === apiHotel.code) {
// return {

//   code: apiHotel.code,
//   name: apiHotel.name,
//   categoryCode: apiHotel.categoryCode,
//   categoryName: apiHotel.categoryName,
//   rooms: apiHotel.rooms,
//   currency: apiHotel.currencey,
//   destinationCode: apiHotel.destinationCode,
//   destinationName: apiHotel.destinationName,
//   latitude: apiHotel.latitude,
//   longitude: apiHotel.longitude,
//   maxRate: apiHotel.maxRate,
//   minRate: apiHotel.minRate,
//   reviews: apiHotel.reviews,
//   zoneCode: apiHotel.zoneCode,
//   zoneName: apiHotel.zoneName,
//   accommodationType: dbHotel.accommodationTypeCode,
//   address: dbHotel.address,
//   postalCode: dbHotel.postalCode,
//   boardCodes: dbHotel.boardCodes,
//   description: dbHotel.description,
//   countryCode: dbHotel.countryCode,
//   email: dbHotel.email,
//   phones: dbHotel.phones,
//   lastUpdate: dbHotel.lastUpdate,
//   license: dbHotel.license,
//   ranking: dbHotel.ranking,
//   segmentCodes: dbHotel.segmentCodes,
//   stateCode: dbHotel.stateCode,
//   images: dbHotel.images,
//   facilities: dbHotel.facilities

// }

// const mapResultToHotel = (arr1, arr2) => {
//   return arr1.map(dbHotel=>)
// }
// {
//       if (dbHotel.code === apiHotel.code) {
//         console.log(dbHotel.code, 'dbcode')
//         console.log(apiHotel.code, 'apicode')
//         return {

//           code: apiHotel.code,
//           name: apiHotel.name,
//           categoryCode: apiHotel.categoryCode

//         }
//       }
//     }))
// }
// const mapResultToHotel = (a1, a2) =>
//   a1.map(itm => ({
//     ...a2.find((item) => (item.code === itm.code) && item),
//     ...itm
//   }))

// const mapResultToHotel = (arr1, arr2) => {
//   return arr1.map((dbHotel, i) => {
//     if (dbHotel[i].code === arr2[i].code) {
//       // merging two objects
//       return Object.assign({}, dbHotel[i], arr2[i])
//     }
//   })
// }
