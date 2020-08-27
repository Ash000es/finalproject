import { MyProvider, ProjectContext } from '../providers/Provider'
import React, { useContext, useState, useEffect } from 'react'
import { db, project, setProject, masterLinkLarge, masterLinkSmall, popularCities, poshCodes, boldCodes, essentialCodes, homesCodes } from './Constants.js'
import { requestPopularDest } from '../handlers/ApiHandler'
import { maxTime } from 'date-fns/esm'
import { OmitProps } from 'antd/lib/transfer/ListBody'
import CatLabel from '../components/CatLabel'
import ReviewsLabel from '../components/ReviewsLabel'

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
export const constfirstRoomImage = (arr) => {
  return arr.find(image => image.imageTypeCode && image.imageTypeCode === 'HAB')
}

export const roomPictureMatch = (roomArr, imageArr, masterLinkSmall) => {
  const value1 = []
  console.log(roomArr, imageArr, masterLinkSmall)
  roomArr.forEach(room => {
    console.log(room, imageArr, 'hola')
    imageArr.map(image => {
      if (room.code === image.roomCode) {
        const roomPath = image.path
        const newPath = `${masterLinkSmall}${roomPath}`
        const newRoomOb = { ...room, newimage: newPath }
        console.log(newRoomOb, 'Iam newww')
        value1.push(newRoomOb)
      }
    })
  })
  return value1
}
const VeryGood = 'Very good'
const Fabulous = 'Fabulous'
const Superb = 'Superb'
export const reviewSummaryReturn = (reviewsObj) => {
  if (reviewsObj.rate === 3 || reviewsObj.rate === 3.5) {
    return <ReviewsLabel label={VeryGood} reviewsObj={reviewsObj} />
  } else if (reviewsObj.rate === 4 || reviewsObj.rate === 4.5) {
    return <ReviewsLabel label={Fabulous} reviewsObj={reviewsObj} />
  } else if (reviewsObj.rate === 5) {
    return <ReviewsLabel label={Superb} reviewsObj={reviewsObj} />
  }
}
export const labelReturn = (code) => {
  if (poshCodes.includes(code)) {
    return <CatLabel name='Posh' look={{ background: 'rgb(97,39,92)', width: '3.125rem', fontWeight: '450' }} />
  } if (boldCodes.includes(code)) {
    return <CatLabel name='Bold' look={{ background: 'rgb(5,94,112)', width: '3.125rem', fontWeight: '450' }} />
  } if (essentialCodes.includes(code)) {
    return <CatLabel name='Essential' look={{ background: 'rgb(42,120,24)', fontWeight: '450' }} />
  } if (homesCodes.includes(code)) {
    return <CatLabel name='Homelike' look={{ background: 'rgb(244,165,48)', fontWeight: '450' }} />
  } else {
    return null
  }
}
export function useWindowSize () {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined
  })

  useEffect(() => {
    // Handler to call on window resize
    function handleResize () {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    // Add event listener
    window.addEventListener('resize', handleResize)

    // Call handler right away so state gets updated with initial window size
    handleResize()

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, []) // Empty array ensures that effect is only run on mount

  return windowSize
}
export function truncateString (str, num) {
  if (str.length <= num) {
    return str
  }
  return str.slice(0, num) + '...'
}
export const filterAmenSelection = (arr1, arr2, arr3) => {
  console.log(arr1, arr2, arr3, 'Working...')
  const valueToFilter = arr1.length > 0 ? arr1 : arr2

  // function here
  const finalHotels = []
  const hotelsresultsAmen = valueToFilter.map(hotel => {
    const amenAmen = hotel.facilities

    amenAmen.map(hotelResAmen => arr3.filter(amenArr => {
      if (hotelResAmen.facilityCode === amenArr.FacilityCode && hotelResAmen.facilityGroupCode === amenArr.FacilityGroupCode) {
        finalHotels.push(hotel)
      }
    }))
    // return finalHotels
  })
  console.log(finalHotels, 'final hotels')
  return removeDuplicates(finalHotels)
}

export const updateStarRatings = (arr1, arr2, arr3) => {
  console.log('filtering..')
  const valueToFilter = arr1.length >= 1 ? arr1 : arr2
  const res = valueToFilter.filter(hotel => arr3.includes(hotel.categoryName.toLowerCase()))
  console.log(res, 'filtrest hotels with star rating')
  return res
}
export const readyTheArgument = (propey) => {
  const checkMe = propey.target.value
  if (checkMe[1] === Number) {
    return checkMe
  } else {
    return checkMe
  }
}
export const showHotelsOnly = (arr1, arr2, arr3) => {
  const valueToFilter = arr1.length >= 1 ? arr1 : arr2

  const res = valueToFilter.filter(hotel => !arr3.includes(hotel.categoryCode))
  // console.log(res, 'filtrest hotels only')

  return res
}
export const showHomesOnly = (arr1, arr2, arr3) => {
  const valueToFilter = arr1.length >= 1 ? arr1 : arr2
  const res = valueToFilter.filter(hotel => !arr3.includes(hotel.categoryCode))
  // console.log(res, 'filtrest homes only')

  return res
}
// export const updatePrice = (arr1, arr2, arr3) => {
// go through results and remove hotels that are not within the price range
export const updatePrice = (min, max, arr1, arr2) => {
  const resultsToFilter = arr1.length >= 1 ? arr1 : arr2
  console.log('filtering holtes between ', min, max)
  const results = resultsToFilter.filter(hotel => {
    const hotelMinRate = Number(hotel.minRate)
    const hotelMaxRate = Number(hotel.maxRate)

    if (hotelMinRate >= min && hotelMaxRate <= max) {
      return hotel
    }
  })
  return results
}

export const sortbyPrice = (arr1, arr2) => {
  const valueToSort = arr1.length >= 1 ? arr1 : arr2
  return valueToSort.sort(function (a, b) {
    console.log('sorting price..')
    return Number(a.minRate) - Number(b.minRate)
  })
}
export const sortByRecommended = (arr1, arr2) => {
  const valueToSort = arr1.length >= 1 ? arr1 : arr2
  return valueToSort.sort(function (a, b) {
    console.log('sorting recommended..')
    return Number(b.reviews[0].rate) - Number(a.reviews[0].rate) || Number(a.minRate) - Number(b.minRate)
  })
}

export const sortByReview = (arr1, arr2) => {
  const valueToSort = arr1.length >= 1 ? arr1 : arr2
  return valueToSort.sort(function (a, b) {
    console.log('sorting review..')
    return Number(b.reviews[0].rate) - Number(a.reviews[0].rate) || Number(b.reviews[0].reviewCount) - Number(a.reviews[0].reviewCount)
  })
}

export const getAmenitiesArray = (arr1, arr2) => {
  // console.log(arr1, arr2, 'array')
  const finalArray = []
  const arr3 = arr1.filter(item => item.facilityGroupCode === 70 || 60 || 73)
  const arr4 = arr2.filter(item => item.FacilityGroupCode === 70 || 60 || 73)
  const final = arr3.map(itemAPI => arr4.forEach(itemHardCode => {
    if (itemAPI.facilityCode === itemHardCode.FacilityCode) {
      finalArray.push({ name: itemHardCode.name, icon: itemHardCode.icon })
    }

    return finalArray
  }))
  return finalArray
}
export const removy = (arr) => arr.filter((v, i) => arr.indexOf(v) === i)

export function removeDuplicates (arr) {
  return [...new Set(arr)]
}
export function getUnique (arr, comp) {
  // store the comparison  values in array
  const unique = arr.map(e => e[comp])

  // store the indexes of the unique objects
    .map((e, i, final) => final.indexOf(e) === i && i)

  // eliminate the false indexes & return unique objects
    .filter((e) => arr[e]).map(e => arr[e])

  return unique
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

export const convertDates = (startDate, endDate) => {
  const checkIn = startDate._d
  console.log(typeof checkIn, 'type')
  const checkOut = endDate._d
  const datesArray = Array.of(checkIn, checkOut)

  const date1 = datesArray.map(i => i.toLocaleDateString())
  console.log(typeof date1[0], 'look here')
  const date2 = date1.map(i => i.replace('/', '-').replace('/', '-'))
  const date3 = date2.map(i => i.split('-'))
  const date4 = date3.map(i => i.reverse())
  const finalDate = date4.map(i => i.join('-'))
  return finalDate
}
// export const getSmallPictures = (image, masterLinkSmall) => {
//   const imageObjectPath = image.path
//   const newPath = `${masterLinkSmall}${imageObjectPath}`

//   const imageObject = { ...image, path: newPath }
//   return imageObject
// }
//  imagesArray, props.room, masterLinkSmall)
export function isFreeCancelAvailabe (arg) {
  return arg.map(rate => {
    if (rate.rateClass !== 'NRF') {
      return 'NOR'
    }
  })
}

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
export const showCancelationPolicy = (rate) => {
  // room.rates.map(rate => {
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
  // })
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
  return arr.reduce(function (prev, curr) {
    const changedPrevNumber = parseFloat(prev.minRate)
    const changedCurrNumber = parseFloat(curr.minRate)
    return changedPrevNumber < changedCurrNumber ? prev : curr
  })
}

export const sumUp = (accumulator, currentValue) => accumulator + currentValue

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
