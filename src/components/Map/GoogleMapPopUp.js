import React, { useContext, useState } from 'react'
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps'
import { MyProvider, ProjectContext } from '../../Helper/Provider'

export const GoogleMapPopUp = (props) => {
  const { project, setProject } = useContext(ProjectContext)
  const [selectedhotel, setSelectedHotel] = useState(null)

  const locationsArray = project.results
  const firstLat = parseFloat(props.lat)
  const firstLong = parseFloat(props.long)
  const latlongObject = {
    lat: firstLat,
    lng: firstLong
  }
  console.log(latlongObject, 'llobject')

  return (

    <GoogleMap defaultZoom={10} defaultCenter={latlongObject}>

      {locationsArray && locationsArray.map(hotel => {
        const laty = parseFloat(hotel.latitude)
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
