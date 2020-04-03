import React from 'react'

import { extras } from '../App/App'
class Extras extends React.Component {
  state = { }

  render () {
    return (
      <>
        <div className='card bg-dark text-white'>
          <img src='https://source.unsplash.com/random' className='card-img' alt='...' />
          <div className='card-img-overlay'>
            <h5 className='card-title'>{extras[0].title}</h5>
            <p className='card-text'>Try our new kings breakfast at a discounted rate</p>

          </div>
          <div className='card-body'>
            <p>{extras[0].price} Euros</p>

            <button type='button' className='btn btn-primary'>Add</button>
            <a tabIndex='0' className='btn btn-sm btn-success' role='button' data-toggle='popover' data-trigger='focus' title='Dismissible popover' data-content={extras[0].summary}>Learn more</a>

          </div>
        </div>
      </>

    )
  }
}; export default Extras
