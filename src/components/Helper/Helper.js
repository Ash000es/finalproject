import { MyProvider, ProjectContext } from '../Provider/Provider'
import React, { useContext, useState } from 'react'

// this function to match each room from bookingAPI to the right image from contentAPI, looping going through two arrays of objects.
// this function is used in file thumbilCarsoel.js

export const getRoomPicture = (resultsarray, hotelsarray) => {
  const [rooms] = project.results.hotels.rooms
  const [images] = project.hotels.images

  for (const room of rooms) {
    for (const image of images) {
      if (room.code === image.roomCode) return [image.path]
      break
    }
  }
}

// function to get hotels codes from results to query db for hotels array results
export const getHotelsCodes = (resultsArray) => {
  const hotelCodes = []
  resultsArray.map(hotel => {
    hotelCodes.push(hotel.code)
  })
  return hotelCodes
}
