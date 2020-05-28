import React, { useContext, useState } from 'react'
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps'
import { MyProvider, ProjectContext } from '../../Helper/Provider'

export const GoogleMapPopUp = (props) => {
  console.log(props, 'props from map')
  const { project, setProject } = useContext(ProjectContext)
  const [selectedhotel, setSelectedHotel] = useState(null)

  const firstLaty = parseFloat(props.lat)
  const firstLong = parseFloat(props.long)
  const firstLatLong = {
    lat: firstLaty,
    lng: firstLong
  }

  const hotelsArray = project.results
  if (selectedhotel) {
    console.log(typeof selectedhotel.latitude)
  }

  return (

    <GoogleMap defaultZoom={10} defaultCenter={firstLatLong}>

      {hotelsArray && hotelsArray.map(hotel => {
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
      }
      )}

      {selectedhotel &&
      (
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
