import { MyProvider, ProjectContext } from './Provider'
import React, { useContext, useState } from 'react'
import { db, project, setProject } from './Constants/Constants.js'

// this function to match each room from bookingAPI to the right image from contentAPI, looping going through two arrays of objects.
// this function is used in file thumbilCarsoel.js

// export const getRoomPicture = (resultsarray, hotelsarray) => {
//   const [rooms] = project.results.hotels.rooms
//   const [images] = project.hotels.images

//   for (const room of rooms) {
//     for (const image of images) {
//       if (room.code === image.roomCode) return [image.path]
//       break
//     }
//   }
// }

// function to get hotels codes from results to query db for hotels array results
// export const getHotelsCodes = (resultsArray) => {
//   const hotelCodes = []
//   resultsArray.map(hotel => {
//     hotelCodes.push(hotel.code)
//   })
//   return hotelCodes
// }
// export const handleClick = (hotel.code) => {
//     addToCart(code)=>setProject({...project,addedItems:code})

// }

// export const fetchHotels = (destination) => {
//   console.log('searchME')

//   // map the results and get an array of hotel IDS getHotelsCodes()
//   const arrayCodes = [663, 1431, 1446, 6940, 576022, 585184]
//   db.collection('hotels-limited').where('destinationCode', '==', destination).where('categoryCode', '==', '4EST')

//     .onSnapshot(querySnapshot => {
//       const hotels = []
//       querySnapshot.forEach((hotel) => {
//         const hotelData = hotel.data()
//         // if hotelData.code
//         if (arrayCodes.includes(hotelData.code)) {
//           hotels.push(hotel.data())
//         }
//       })

//       console.log(hotels)
//       setProject({ ...project, hotels })
//     })
// }
export function mergeArrayObjects (arr1, arr2) {
  return arr1.map((item, i) => {
    if (item.code === arr2[i].code) {
      // merging two objects
      return Object.assign({}, item, arr2[i])
    }
  })
}
export const getAmenitiesArray = (arr1, arr2) => {
  arr1.results.facilites.forEach(facility => arr2.forEach(amenity => {
    if (facility.facilityCode === amenity.FacilityCode && facility.facilityGroupCode === amenity.FacilityGroupCode) {
      return amenity
    }
  }))
}