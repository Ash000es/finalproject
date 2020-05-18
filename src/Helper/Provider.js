import React, { useState } from 'react'
import HotelList from '../components/HotelList/HoteList'
import HotelPage from '../components/Hotelpage/HotelPage'
import SearchBar from '../components/SearchBar/SearchBar'
export const ProjectContext = React.createContext()

const ProjectProvider = (props) => {
  const [project, setProject] = useState(
    {
      results: [],
      currentHotel: {},
      redirect: false,
      cartOpen: false,
      cartItems: [],
      totalPrice: 0
    })
  console.log(project, setProject)
  return (
    <ProjectContext.Provider value={{ project, setProject }}>

      {props.children}

    </ProjectContext.Provider>

  )
}
export default ProjectProvider
