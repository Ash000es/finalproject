import Sign from 'js-sha256'
import { apikey, sec } from '../Keys.json'
import { getAmenitiesArray } from '../components/Helper'
import { amenities } from '../components/Constants/amenities'

export const requestAvailableHotels = (db, { occupancies, destination, stay, reviews }) => {
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
    const hotelIDS = apiHotelResults.map(hotel => hotel.code)
    const dbHotels = fetchHotels(destination.code, hotelIDS, db)

    const hotelsProject = mapResultToHotel(dbHotels, apiHotelResults)
    return hotelsProject
  })
}

const fetchHotels = (destination, hotelIDS, db) => {
  const hotels = []

  db.collection('hotels-limited').where('destinationCode', '==', destination).where('categoryCode', '==', '4EST')

    .onSnapshot(querySnapshot => {
      querySnapshot.forEach((hotel) => {
        const hotelData = hotel.data()
        // if hotelData.code
        if (hotelIDS.includes(hotelData.code)) {
          hotels.push(hotel.data())
          console.log(hotels, 'pus')
        }
      })
      return hotels
    })
}
const mapResultToHotel = (arr1, arr2) => {
  arr1.map(dbHotel => arr2.map(apiHotel => {
    if (dbHotel.code === apiHotel.code) {
      return {

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
