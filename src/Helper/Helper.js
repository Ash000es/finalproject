import { MyProvider, ProjectContext } from '../providers/Provider'
import React, { useContext, useState } from 'react'
import { db, project, setProject, masterLinkLarge, masterLinkSmall, popularCities } from './Constants.js'
import { requestPopularDest } from '../handlers/ApiHandler'

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

// export const handleClick = (hotel.code) => {
//     addToCart(code)=>setProject({...project,addedItems:code})

// }

// }
export const showHotelsOnly = (arr1, arr2, arr3) => {
  if (arr1.length < 1) {
    const res = arr2.filter(hotel => !arr3.includes(hotel.categoryCode))
    // console.log(res, 'filtrest')

    return res
  } else {
    return false
  }
}
export const showHomesOnly = (arr1, arr2, arr3) => {
  if (arr1.length < 1) {
    const res = arr2.filter(hotel => !arr3.includes(hotel.categoryCode))
    // console.log(res, 'filtrest')

    return res
  } else {
    return false
  }
}
export const updatePrice = (arr1, arr2, arr3) => {
  console.log(arr1, 'arr')

  const min = arr1[0]
  const max = arr1[1]

  const status = arr1.every(function (element, index) {
    return element === arr2[index]
  })
  console.log(status, 'look at me')

  if (!status) {
    const results = arr3.filter(hotel => {
      const hotelMinRate = parseInt(hotel.minRate, 10)
      const hotelMaxRate = parseInt(hotel.maxRate, 10)

      if (hotelMinRate >= min && hotelMaxRate <= max) {
        return hotel
      }
    })
    return results
  } else {
    return false
  }
}

export const getAmenitiesArray = (arr1, arr2) => {
  const finalArray = []
  const arr3 = arr1.filter(item => item.facilityGroupCode === 70)
  const arr4 = arr2.filter(item => item.FacilityGroupCode === 70)
  const final = arr3.forEach(itemAPI => arr4.forEach(itemHardCode => {
    if (itemAPI.facilityCode === itemHardCode.FacilityCode) {
      finalArray.push(itemHardCode)
    }
    // console.log(finalArray)
    return finalArray
  }))
  return finalArray
}

export function removeDuplicates (arr) {
  return [...new Set(arr)]
}

// write helper function for the hotel page big carsoul and the search results thum carsoul and each room image

export const getLargePictures = (imageArr, masterLinkLarge) => {
  const hotelsLarge = []
  imageArr.map(imageObject => {
    const imageObjectPath = imageObject.path
    const newPath = `${masterLinkLarge}${imageObjectPath}`

    imageObject = { ...imageObject, path: newPath }

    hotelsLarge.push(imageObject)
  })
  return hotelsLarge
}
export const getSmallPictures = (imageArr, masterLinkSmall) => {
  const hotels = []
  imageArr.forEach(imageObject => {
    const imageObjectPath = imageObject.path
    const newPath = `${masterLinkSmall}${imageObjectPath}`

    imageObject = { ...imageObject, path: newPath }

    hotels.push(imageObject)
  })
  return hotels
}
// export const getSmallPictures = (image, masterLinkSmall) => {
//   const imageObjectPath = image.path
//   const newPath = `${masterLinkSmall}${imageObjectPath}`

//   const imageObject = { ...image, path: newPath }
//   return imageObject
// }
//  imagesArray, props.room, masterLinkSmall)

export const getRoomPicture = (arr1, arr2, masterLinkSmall) => {
  return arr1.map(imageObject => arr2.filter(roomObject => {
    if (imageObject.roomCode === roomObject.code) {
      const newPath = `${masterLinkSmall}${imageObject.path}`
      console.log(newPath, 'newpath')
      return newPath
      // maybe I need to skip  mapping the secound arr?
    }
  }))
}
export const showCancelationPolicy = (room) => {
  room.rates.map(rate => {
    const cancelationArray = rate.cancellationPolicies
    const cancelationFeeFrom = cancelationArray[0].from
    const newDate = cancelationFeeFrom.slice(0, 10)
    const cancelationFee = cancelationArray[0].amount
    const refundableStatus = rate.rateClass
    if (refundableStatus === 'NRF') {
      return 'None refundable'
    } else {
      return `Free Cancelation before ${newDate}`
    }
  })
}
export const roomsCost = (a, b) => {
  return a * b
}

export const handleHomePageSearch = (destination1, state) => {
  const { occupancies, stay, reviews } = state
  const destination = destination1
  const payLoad = { occupancies, destination, stay, reviews }
  return requestPopularDest(payLoad)
}
export const findCheapestHotel = (arr) => {
  // arr.map(des => {
  // console.log(arr, 'god damn')
  return arr.reduce(function (prev, curr) {
    // console.log(typeof prev)
    const changedPrevNumber = parseFloat(prev.minRate)
    const changedCurrNumber = parseFloat(curr.minRate)
    return changedPrevNumber < changedCurrNumber ? prev : curr
  })

  // arr.map(des => {
  //   const lowestRates = [des.minRate]
  //   // const lowestRate = Math.min(...lowestRates)
  //   console.log(lowestRates, 'yop')

  // })

  // return arr.reduce(function (prev, curr) {
  //   if (prev.minRate < curr.minRate) {
  //     return prev.minRate
  //   }
  // })
  // })
}

// cancellationPolicies: [Array(1)
// 0: {amount: "103.68", from: "2020-11-12T16:00:00+01:00"}
// ]

// {
//   "imageTypeCode": "HAB",
//   "path": "00/000016/000016a_hb_ro_253.jpg",
//   "roomCode": "APT.VM-2",
//   "roomType": "APT",
//   "characteristicCode": "VM-2",
//   "order": 253,
//   "visualOrder": 100
// },
