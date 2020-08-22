import React, { useContext, useState } from 'react'
import { InputNumber } from 'antd'

const NewOccSelector = (props) => {
  function onChange (value) {

  }
  let style
  const style1 = {
    // height: '3rem',
    // width: '6rem'

  }
  const style2 = {
    // height: '2rem'
    // width: '2rem'
  }
  const style3 = {
    // height: '2rem',
    // width: '8.9rem'
  }
  const screenWidth = props.width
  if (screenWidth <= 928) {
    style = style2
  } if (screenWidth <= 455) {
    style = style3
  } if (screenWidth > 928) {
    style = style1
  }

  return (
    <>

      <InputNumber style={style} type='number' min={0} max={10} defaultValue={0} onChange={props.onChange} />
    </>
  )
}; export default NewOccSelector
