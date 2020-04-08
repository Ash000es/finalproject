import React from 'react'
import { hardHotelObject } from '../assets/HardCode'
import Typography from '@material-ui/core/Typography'

const ConfirmationPage = () => {
  return (
    <>
      <div>
        <h4>Thank you</h4>
        <p>Your payment has been successful and your booking is now confirmed</p>
      </div>
      <p>Check your booking details</p>
      <div>
        <Typography>Hotel name:{hardHotelObject.name}</Typography>
        <Typography>Confirmation number:2209387563</Typography>
        <Typography>Check-in date:{hardHotelObject.CheckinDate}</Typography>
        <Typography>Check-out date:{hardHotelObject.CheckoutDate}</Typography>
      </div>
    </>
  )
}; export default ConfirmationPage
