import React, { useState } from 'react'
import HotelList from '../HotelList/HoteList'
import HotelPage from '../Hotelpage/HotelPage'
import SearchBar from '../SearchBar/SearchBar'
export const ProjectContext = React.createContext()

const ProjectProvider = (props) => {
  const [project, setProject] = useState(
    {
      results: {},
      hotels: [],
      redirect: false
    })
  console.log(project, setProject)
  return (
    <ProjectContext.Provider value={{ project, setProject }}>

      {props.children}

    </ProjectContext.Provider>

  )
}
export default ProjectProvider