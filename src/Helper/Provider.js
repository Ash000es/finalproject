import React, { useState } from 'react'

export const ProjectContext = React.createContext()

const ProjectProvider = (props) => {
  const [project, setProject] = useState(
    {
      results: [],
      currentHotel: {},
      currentSelectionPrice: {},
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
