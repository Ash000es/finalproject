// import React from 'react'
/* const apikey = '2t97t6954dckh4ynkwknr78j'
const sec = 'nDD9BFXf5a'
const D = new Date()
const databaseDestination = this.state.destination.code
// this.fetchHotels(databaseDestination)

const getSignature = () => {
  return Sign(apikey + sec + Math.round(D.getTime() / 1000))
}

const createRequestBody = () => {
  const { occupancies, destination, stay } = this.state
  return {
    stay,
    occupancies,
    destination
  }
}

export const hotelBeds = {

  handleClickButton: () => {

    // console.log(getSignature())
    // console.log(JSON.stringify(createRequestBody()))
    window.fetch('https://cors-anywhere.herokuapp.com/https://api.test.hotelbeds.com/hotel-api/1.0/hotels',
      {
        method: 'POST',
        headers: {
          'Api-key': apikey,
          'X-Signature': getSignature(),
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Accept-Encoding': 'gzip'
        },

        body: JSON.stringify(createRequestBody())
      }).then(res => res.json()).then(Response => {
    //   console.log(Response)
      const { hotels } = Response

    //   console.log(hotels)

    //   this.setState({ results: [hotels] })
    }).then((hotels) => {
      return hotels.hotels.map((hotel) => {
        return {
          code: ,
          name: ,
          categoryCode: ,
          categoryName: ,
          destinationCode: ,
          destinationName: ,
          zoneCode: ,
          zoneName: ,
          latitude: ,
          longitude: ,
          minRate: ,
          maxRate: ,
          currency: ,
          CheckinDate: ,
          CheckoutDate: ,
          rooms: rooms
        }
      })
    }

    )
  }
} */
