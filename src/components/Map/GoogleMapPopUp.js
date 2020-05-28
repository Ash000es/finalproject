import React, { useContext, useState } from 'react'
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps'
import { MyProvider, ProjectContext } from '../../Helper/Provider'

export const GoogleMapPopUp = (props) => {
  const { project, setProject } = useContext(ProjectContext)
  const [selectedhotel, setSelectedHotel] = useState(null)
  console.log(project, 'project from map')
  const locationsArray = project.results
  console.log(typeof locationsArray[0].latitude, 'array to map')
  return (

    <GoogleMap defaultZoom={10} defaultCenter={{ lat: 38.906986, lng: 1.421416 }}>

      {locationsArray && locationsArray.map(hotel => {
        console.log(hotel, 'yay')
        const laty = parseFloat(hotel.latitude)
        console.log(typeof laty, 'laty here')
        const longy = parseFloat(hotel.longitude)
        return (

          <Marker
            key={hotel.code}
            position={{
              lat: laty,
              lng: longy
            }}
            // position={{ lat: 38.906986, lng: 1.421416 }}
            onClick={() => setSelectedHotel(hotel)}
          />

        )
      }
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
