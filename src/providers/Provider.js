
import React, { useState } from 'react'

export const ProjectContext = React.createContext()

const ProjectProvider = (props) => {
  const [project, setProject] = useState(
    {
      results: [],
      cartItems: []

    })

  return (
    <ProjectContext.Provider value={{ project, setProject }}>

      {props.children}

    </ProjectContext.Provider>

  )
}
export default ProjectProvider
