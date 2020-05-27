import React, { useState } from 'react'

export const ProjectContext = React.createContext()

const ProjectProvider = (props) => {
  const [project, setProject] = useState(
    {
      results: [],
      currentHotel: {},
      currentRoomSelection: [],
      redirect: false,
      cartOpen: false,
      cartItems: []
    })
  console.log(project, setProject)
  return (
    <ProjectContext.Provider value={{ project, setProject }}>

      {props.children}

    </ProjectContext.Provider>

  )
}
export default ProjectProvider
