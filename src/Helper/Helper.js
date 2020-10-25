import React, { useState, useEffect } from 'react'
import { poshCodes, boldCodes, essentialCodes, homesCodes } from './Constants.js'
import { requestPopularDest } from '../handlers/ApiHandler'

import CatLabel from '../components/CatLabel'
import ReviewsLabel from '../components/ReviewsLabel'

export const constfirstRoomImage = (arr) => {
  return arr.find((image) => image.imageTypeCode && image.imageTypeCode === 'HAB')
}

export const roomPictureMatch = (roomArr, imagesArr, masterLinkSmall) => {
  return roomArr.map((room) => {
    const roomCode = room.code
    const imageArr = imagesArr.filter((image) => image.roomCode && image.roomCode === roomCode)
    const newRoom = { ...room, roomImagePath: imageArr }

    return newRoom
  })
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
    return (
      <CatLabel
        name='Posh'
        look={{
          background: 'rgb(97,39,92)',
          width: '3.125rem',
          fontWeight: '450',
          marginBottom: 0
        }}
      />
    )
  }
  if (boldCodes.includes(code)) {
    return (
      <CatLabel
        name='Bold'
        look={{
          background: 'rgb(5,94,112)',
          width: '3.125rem',
          fontWeight: '450',
          marginBottom: 0
        }}
      />
    )
  }
  if (essentialCodes.includes(code)) {
    return (
      <CatLabel
        name='Essential'
        look={{ background: 'rgb(42,120,24)', fontWeight: '450', marginBottom: 0 }}
      />
    )
  }
  if (homesCodes.includes(code)) {
    return (
      <CatLabel
        name='Homelike'
        look={{ background: 'rgb(244,165,48)', fontWeight: '450', marginBottom: 0 }}
      />
    )
  } else {
    return null
  }
}
export function useWindowSize () {
  // Initialize state with undefined width/height so server and client renders match

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
  const valueToFilter = arr1.length && arr1.length > 0 ? arr1 : arr2
  const finalHotels = []
  valueToFilter.map((hotel) => {
    const amenAmen = hotel.newAmen

    const isitTrue = arr3.every((v) => amenAmen.includes(v))

    if (isitTrue) {
      finalHotels.push(hotel)
    }
  })
  return finalHotels
}

export const updateStarRatings = (arr1, arr2, arr3) => {
  const valueToFilter = arr1.length >= 1 ? arr1 : arr2
  const res = valueToFilter.filter((hotel) => arr3.includes(hotel.categoryName.toLowerCase()))

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

  const res = valueToFilter.filter((hotel) => !arr3.includes(hotel.categoryCode))

  return res
}
export const showHomesOnly = (arr1, arr2, arr3) => {
  const valueToFilter = arr1.length >= 1 ? arr1 : arr2
  const res = valueToFilter.filter((hotel) => !arr3.includes(hotel.categoryCode))

  return res
}

// go through results and remove hotels that are not within the price range
export const updatePrice = (min, max, arr1, arr2) => {
  const resultsToFilter = arr1.length >= 1 ? arr1 : arr2
  console.log('filtering holtes between ', min, max)
  const results = resultsToFilter.filter((hotel) => {
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
    const BB = b.reviews.length ? b.reviews[0].rate : null
    const AA = a.reviews.length ? a.reviews[0].rate : null
    return Number(BB) - Number(AA) || Number(a.minRate) - Number(b.minRate)
  })
}

export const sortByReview = (arr1, arr2) => {
  const valueToSort = arr1.length >= 1 ? arr1 : arr2
  return valueToSort.sort(function (a, b) {
    console.log('sorting review..')
    const BB = b.reviews.length ? b.reviews[0].rate : null
    const AA = a.reviews.length ? a.reviews[0].rate : null
    return Number(BB) - Number(AA) || Number(BB) - Number(AA)
  })
}

export const getAmenitiesArray = (arr1, arr2) => {
  const finalArray = []
  const arr3 = arr1.filter((item) => item.facilityGroupCode === 70 || 60 || 73)
  const arr4 = arr2.filter((item) => item.FacilityGroupCode === 70 || 60 || 73)
  const final = arr3.map((itemAPI) =>
    arr4.forEach((itemHardCode) => {
      if (itemAPI.facilityCode === itemHardCode.FacilityCode) {
        finalArray.push({ name: itemHardCode.name, icon: itemHardCode.icon })
      }

      return finalArray
    })
  )
  return finalArray
}
export const createNewAmenitiesArray = (arr1, arr2) => {
  const finalArray = []
  const arr3 = arr1.filter((item) => item.facilityGroupCode === 70 || 60 || 73)
  const arr4 = arr2.filter((item) => item.FacilityGroupCode === 70 || 60 || 73)
  const final = arr3.map((itemAPI) =>
    arr4.forEach((itemHardCode) => {
      if (itemAPI.facilityCode === itemHardCode.FacilityCode) {
        finalArray.push(itemHardCode.name)
      }

      return finalArray
    })
  )
  return finalArray
}
export const removy = (arr) => arr.filter((v, i) => arr.indexOf(v) === i)

export function removeDuplicates (arr) {
  return [...new Set(arr)]
}
export const removeAmenDuplicates = (arr) => {
  const uniqueSet = new Set(arr)
  const backToArr = [...uniqueSet]
  return backToArr
}
export function getUnique (arr, comp) {
  // store the comparison  values in array
  const unique = arr
    .map((e) => e[comp])

    // store the indexes of the unique objects
    .map((e, i, final) => final.indexOf(e) === i && i)

    // eliminate the false indexes & return unique objects
    .filter((e) => arr[e])
    .map((e) => arr[e])

  return unique
}

// write helper function for the hotel page big carsoul and the search results thum carsoul and each room image

export const getLargePictures = (imageArr, masterLinkLarge) => {
  const hotelsLarge = []
  imageArr.map((imageObject) => {
    const imageObjectPath = imageObject.path
    const newPath = `${masterLinkLarge}${imageObjectPath}`

    imageObject = { ...imageObject, path: newPath }

    hotelsLarge.push(imageObject)
  })
  return hotelsLarge
}
export const getSmallPictures = (imageArr, masterLinkSmall) => {
  const hotels = []
  imageArr.forEach((imageObject) => {
    const imageObjectPath = imageObject.path
    const newPath = `${masterLinkSmall}${imageObjectPath}`

    imageObject = { ...imageObject, path: newPath }

    hotels.push(imageObject)
  })
  return hotels
}

export const convertDates = (startDate, endDate) => {
  const checkIn = startDate._d
  const checkOut = endDate._d
  const datesArray = Array.of(checkIn, checkOut)
  const date1 = datesArray.map((i) => i.toLocaleDateString())
  const date2 = date1.map((i) => i.replace('/', '-').replace('/', '-'))
  const date3 = date2.map((i) => i.split('-'))
  const date4 = date3.map((i) => i.reverse())
  const finalDate = date4.map((i) => i.join('-'))
  return finalDate
}

export function isFreeCancelAvailabe (arg) {
  return arg.map((rate) => {
    if (rate.rateClass !== 'NRF') {
      return 'NOR'
    }
  })
}

export const getRoomPicture = (arr1, arr2, masterLinkSmall) => {
  return arr1.map((imageObject) =>
    arr2.filter((roomObject) => {
      if (imageObject.roomCode === roomObject.code) {
        const newPath = `${masterLinkSmall}${imageObject.path}`

        return newPath
      }
    })
  )
}
export const showCancelationPolicy = (rate) => {
  const cancelationArray = rate.cancellationPolicies
  const cancelationFeeFrom = cancelationArray.length ? cancelationArray[0].from : null
  const newDate = cancelationFeeFrom.slice(0, 10)
  const cancelationFee = cancelationArray.length ? cancelationArray[0].amount : null
  const refundableStatus = rate.rateClass
  if (refundableStatus === 'NRF') {
    return 'None refundable'
  } else {
    return `Free Cancelation before ${newDate}`
  }
}
export const roomsCost = (a, b) => {
  return a * b
}

export const handleHomePageSearch = (destination1, state) => {
  const { occupancies, stay, reviews, dailyRate } = state
  const destination = destination1
  const payLoad = { occupancies, destination, stay, reviews, dailyRate }
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
// const nestedArr = amenitiesName.map(item => {
//   console.log(item, 'item')
//   return amenDirectory[item]
// })

// const res = nestedArr.flat()
// for (let i = 0; i < popularCities.length; i++) {
//   const res = await handleHomePageSearch(popularCities[i], state)
//   ALL_RESULTS.push(res)

// }
// const firstImage = constfirstRoomImage(imagesarray)
// if (Object.keys(firstImage)) {
//   imagesarray.unshift(firstImage)
// }
