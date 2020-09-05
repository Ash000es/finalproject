import React, { useState } from 'react'
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps'

export const GoogleMapPopUp = (props) => {
  const [selectedhotel, setSelectedHotel] = useState(null)
  const [hotelsArray, setHotelsArray] = useState(props.mapHotelsResults)
  const firstLaty = parseFloat(props.lat)
  const firstLong = parseFloat(props.long)
  const firstLatLong = {
    lat: firstLaty,
    lng: firstLong
  }

  return (
    <GoogleMap defaultZoom={10} defaultCenter={firstLatLong}>
      {hotelsArray.length &&
        hotelsArray.map((hotel) => {
          const laty = parseFloat(hotel.latitude)
          const longy = parseFloat(hotel.longitude)
          const newHotel = { ...hotel, latitude: laty, longitude: longy }
          return (
            <Marker
              key={newHotel.code}
              position={{
                lat: newHotel.latitude,
                lng: newHotel.longitude
              }}
              onClick={() => setSelectedHotel(newHotel)}
            />
          )
        })}
      {Object.keys(hotelsArray).length ? (
        <Marker
          position={{
            lat: firstLaty,
            lng: firstLong
          }}
          onClick={() => setSelectedHotel(hotelsArray)}
        />
      ) : null}

      {selectedhotel && (
        <InfoWindow
          position={{
            lat: parseFloat(selectedhotel.latitude),
            lng: parseFloat(selectedhotel.longitude)
          }}
          onCloseClick={() => setSelectedHotel(null)}
        >
          <div>
            <p>hotel image</p>
            <p>hotel nam</p>
            <p>hotel price</p>
            <p>Room name</p>
            <p>TA score</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  )
}
export const WrapperMap = withScriptjs(withGoogleMap(GoogleMapPopUp))
