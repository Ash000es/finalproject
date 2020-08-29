import React, { useContext, useState } from 'react'
import { useTheme, makeStyles, createMuiTheme, ThemeProvider, MuiThemeProvider } from '@material-ui/core/styles'
import { green } from '@material-ui/core/colors'
import { InputNumber } from 'antd'
import 'antd/dist/antd.css'
import './SearchBar.css'

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920
    }
  }
})

const NewOccSelector = (props) => {
  const styles = theme => ({
    root: {
      // padding: theme.spacing(1),
      [theme.breakpoints.up('md')]: {
        width: 90,
        height: 48
      },
      [theme.breakpoints.between('sm', 'md')]: {
        width: 36,
        height: 52.8
      },
      [theme.breakpoints.up('laptop')]: {
        backgroundColor: green[500]
      }
    }
  })
  const classes = styles()

  return (
    <>

      <InputNumber style={{ root: classes.root }} type='number' min={0} max={10} defaultValue={0} onChange={props.onChange} />
    </>
  )
}; export default NewOccSelector

// let style
// const screenWidth = props.width
// const style1 = {
//   height: 48,
//   width: 90
// }
// const style2 = {
//   height: 36,
//   width: 52.8
// }

// if (screenWidth > 992) {
//   style = style1
// } if (screenWidth <= 992) {
//   style = style2
// }
