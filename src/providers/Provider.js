// TODO: this is a provider. Either put it in components together with your Firebaseprovider or
// create a new folder under src/ for providers

import React, { useState } from 'react'

export const ProjectContext = React.createContext()

const ProjectProvider = (props) => {
  const [project, setProject] = useState(
    {
      results: [],
      cartItems: []

    })
  console.log(project, 'project results')
  return (
    <ProjectContext.Provider value={{ project, setProject }}>

      {props.children}

    </ProjectContext.Provider>

  )
}
export default ProjectProvider
