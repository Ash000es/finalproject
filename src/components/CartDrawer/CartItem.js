import React, { useState, useContext } from 'react'
import { MyProvider, ProjectContext } from '../Provider/Provider'

export const Cartitem = () => {
  // onClick function to either remove or take you to hotel page via router, also set results to that hotel object
  const { project, setProject } = useContext(ProjectContext)
  return (
    <div>
      <h5>HO HO</h5>
    </div>
  )
}
