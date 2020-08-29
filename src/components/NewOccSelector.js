import React, { useContext, useState } from 'react'
import { useTheme, makeStyles, createMuiTheme, ThemeProvider, MuiThemeProvider } from '@material-ui/core/styles'
import { green } from '@material-ui/core/colors'
import { InputNumber } from 'antd'
import 'antd/dist/antd.css'
import './SearchBar.css'

const NewOccSelector = (props) => {
  let style
  const screenWidth = props.width
  const style1 = {
    height: 48,
    width: 90
  }
  const style2 = {
    height: 36,
    width: 52.8

  }
  const style3 = {
    height: 50,
    width: 70
  }

  if (screenWidth > 992) {
    style = style1
  } if (screenWidth <= 992 && screenWidth >= 835) {
    style = style2
  } if (screenWidth < 835 && screenWidth >= 463) {
    style = style3
  }

  return (
    <>

      <InputNumber style={style} type='number' min={0} max={10} defaultValue={0} onChange={props.onChange} />
    </>
  )
}; export default NewOccSelector
