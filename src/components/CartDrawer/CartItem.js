import React, { useState, useContext } from 'react'
import { MyProvider, ProjectContext } from '../Provider/Provider'
import Toast from 'react-bootstrap/Toast'

export const CartItem = () => {
  // onClick function to either remove or take you to hotel page via router, also set results to that hotel object
  const { project, setProject } = useContext(ProjectContext)
  const { hotelsArray } = project.hotels.hotels

  return (
    <div>
      {hotelsArray.map(hotel => {
        return (
          <Toast hotel={hotel} key={hotel}>
            <Toast.Header hotel={hotel} key={hotel}>
              <img src='https://source.unsplash.com/random' className='rounded mr-2' alt='' style={{ width: 300 }} />
              <strong className='mr-auto'>Hotel Madrid</strong>
              <small hotel={hotel} key={hotel}>324$</small>
            </Toast.Header>
            <Toast.Body hotel={hotel} key={hotel}>From 23-07-20 to 30-07-20</Toast.Body>
          </Toast>
        )
      })}

    </div>
  )
}
