import React, { useContext, useState } from 'react'
import { InputNumber } from 'antd'

const NewOccSelector = (props) => {
  function onChange (value) {

  }
  let style
  const style1 = {
    height: 48
    // width: '6rem'

  }
  const style2 = {
    height: 36,
    width: 52.8
  }
  const style3 = {
    // height: '2rem',
    // width: '8.9rem'
    height: 48
  }
  const screenWidth = props.width
  if (screenWidth <= 992) {
    style = style2
  } if (screenWidth <= 779) {
    style = style3
  } if (screenWidth > 992) {
    style = style1
  }

  return (
    <>

      <InputNumber style={style} type='number' size='large' min={0} max={10} defaultValue={0} onChange={props.onChange} />
    </>
  )
}; export default NewOccSelector