import Sign from 'js-sha256'
import { apikey, sec } from '../Keys.json'
import { getAmenitiesArray } from '../components/Helper'
import { amenities } from '../components/Constants/amenities'

// TODO: THIS IS NOT A COMPONENT. SHOULD GO INTO UTILS OR HELPER OR HANDLER FOLDER
export async function requestAvailableHotels (db, { occupancies, destination, stay, reviews }) {
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

    const apiHotelResults = hotels.hotels
    console.log(apiHotelResults)
    const hotelIDS = apiHotelResults.map(hotel => hotel.code)
    console.log(hotelIDS)
    return fetchHotels(destination.code, hotelIDS, db)
      .then(dbHotels => {
        console.log('dbHotel', dbHotels)
        const hotelsProject = mapResultToHotel(dbHotels, apiHotelResults)
        console.log('hotelsProject', hotelsProject)
        return hotelsProject
      })
  })
}

const fetchHotels = (destination, hotelIDS, db) => {
  console.log('fetching..')
  const hotels = []

  // TODO: I created a promise, this is just for you to see how it's done. Instead of return I use resolve()
  return new Promise((resolve) => {
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
const mapResultToHotel = (arr1, arr2) => {
  console.log('arr1', arr1)
  arr1.map(dbHotel => arr2.map(apiHotel => {
    if (dbHotel.code === apiHotel.code) {
      return {
        // TODO: are these all the values or just the ones you want?
        // remember that you can use destructuring: 
        // const {code, name} = apiHotel

        // then you can write it like this instead:

        /*

        {
          code,
          name
          ...
        }
        
         */

        // TODO: add a field for icon and images
        // icon: getAmenityIcon() can return the icon component
        code: apiHotel.code,
        name: apiHotel.name,
        categoryCode: apiHotel.categoryCode,
        categoryName: apiHotel.categoryName,
        rooms: apiHotel.rooms,
        currency: apiHotel.currencey,
        destinationCode: apiHotel.destinationCode,
        destinationName: apiHotel.destinationName,
        latitude: apiHotel.latitude,
        longitude: apiHotel.longitude,
        maxRate: apiHotel.maxRate,
        minRate: apiHotel.minRate,
        reviews: apiHotel.reviews,
        zoneCode: apiHotel.zoneCode,
        zoneName: apiHotel.zoneName,
        accommodationType: dbHotel.accommodationTypeCode,
        address: dbHotel.address,
        postalCode: dbHotel.postalCode,
        boardCodes: dbHotel.boardCodes,
        description: dbHotel.description,
        countryCode: dbHotel.countryCode,
        email: dbHotel.email,
        phones: dbHotel.phones,
        lastUpdate: dbHotel.lastUpdate,
        license: dbHotel.license,
        ranking: dbHotel.ranking,
        segmentCodes: dbHotel.segmentCodes,
        stateCode: dbHotel.stateCode,
        images: dbHotel.images,
        amenities: getAmenitiesArray(dbHotel, amenities)

      }
    }
  }))
}
