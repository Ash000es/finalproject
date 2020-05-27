import React, { useContext, useState } from 'react'
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps'
import { MyProvider, ProjectContext } from '../../Helper/Provider'

export const GoogleMapPopUp = (props) => {
  const { project, setProject } = useContext(ProjectContext)
  const [selectedhotel, setSelectedHotel] = useState(null)
  console.log(project, 'project from map')
  const locationsArray = project.results
  console.log(locationsArray, 'array to map')
  return (

    <GoogleMap defaultZoom={10} defaultCenter={{ lat: 38.906986, lng: 1.421416 }}>

      {locationsArray && locationsArray.map(hotel =>

        (

          <Marker
            key={hotel.code}
            hotel={hotel}
            position={{
              lat: hotel.latitude,
              lng: hotel.longitude
            }}
            // position={{ lat: 38.906986, lng: 1.421416 }}
            onClick={() => setSelectedHotel(hotel)}
          />

        )
      )}

      {selectedhotel && (

        <InfoWindow
          position={{
            lat: selectedhotel.latitude,
            lng: selectedhotel.longitude
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
