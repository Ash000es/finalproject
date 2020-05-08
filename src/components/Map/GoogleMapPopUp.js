import React, { useContext, useState } from 'react'
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps'
import { MyProvider, ProjectContext } from '../Provider'

export const GoogleMapPopUp = () => {
  const { project, setProject } = useContext(ProjectContext)
  const [selectedHotel, setSelectedHotel] = useState(null)
  return (

    <GoogleMap defaultZoom={10} defaultCenter={{ lat: 52.370216, lng: 4.895168 }}>
      {/* need to create object with lat long and feed it to map below */}
      {/* {project.hotels.hotels.map(hotel => {
        return (
          <Marker
            key={hotel.code}
            position={{
              lat: hotel.latitude,
              lng: hotel.longitude
            }}
            onClick={() => { setSelectedHotel(hotel) }}
          />
        )
      })} */}
      {selectedHotel && (
        <InfoWindow
          position={{
            lat: selectedHotel.latitude,
            lng: selectedHotel.longitude
          }}
          onCloseClick={() => setSelectedHotel(null)}
        >
          <p>hotel image</p>
          <p>Hotel name</p>
          <p>hotel price</p>
          <p>Room name</p>
          <p>TA score</p>
        </InfoWindow>
      )}

    </GoogleMap>
  )
}
export const WrapperMap = withScriptjs(withGoogleMap(GoogleMapPopUp))
