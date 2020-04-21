import React from 'react'
import './HotelCardSearch.css'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Chip from '@material-ui/core/Chip'
import Button from '@material-ui/core/Button'
import ControlledCarousel1 from '../thumbilCarousel/thumbilCarousel'
import { hardHotelObject } from '../assets/HardCode'
import ErrorRadios from '../radioButton/radioButton'
import { SingleLineGridList } from '../ExtrasList/ExtrasList'
import { DropDownFilter } from '../DropDownFilter/DropDownFilter'
import Card from 'react-bootstrap/Card'
import Divider from '@material-ui/core/Divider'
import Row from 'react-bootstrap/Row'
import ListItem from '@material-ui/core/ListItem'
import Image from 'react-bootstrap/Image'
import List from '@material-ui/core/List'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15)
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20
  },
  details: {
    alignItems: 'center'
  },
  column: {
    flexBasis: '100%'
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2)
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline'
    }
  }
}))

export const DetailedExpansionPanel = () => {
  const classes = useStyles()

  return (
    <>

      <div className={classes.root}>
        <ExpansionPanel defaultExpanded>
          <ExpansionPanelSummary

            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1c-content'
            id='panel1c-header'
          >
            <div style={{ background: 'red' }} className={classes.column} id='cardImage'>
              <Image src='https://source.unsplash.com/random' rounded style={{ width: '16.875rem', height: '16.875rem' }} />
            </div>
            <Typography style={{ background: 'yellow' }} className={classes.secondaryHeading}>{hardHotelObject.name}</Typography>
            <div className={classes.column} id='ament' style={{ background: 'red' }}>

              <ul style={{ listStyleType: 'none' }} id=' amentItems'> {hardHotelObject.hotelAmenities.map(item =>
                <li key={item.title}>{item.Icon}{item.title}  </li>
              )}
              </ul>
            </div>

            <div style={{ background: 'green' }}>
              <p>{hardHotelObject.label.posh}</p>
              <Divider orientation='vertical' flexItem />
              <p>{hardHotelObject.zoneName}</p>
              <Divider orientation='vertical' flexItem />
              <p>{hardHotelObject.categoryName}</p>
            </div>

            <div style={{ background: 'blue' }} id='bookButton' className={classes.column}>
              <ErrorRadios />
            </div>
          </ExpansionPanelSummary>

          <ExpansionPanelDetails className={classes.details}>
            <div className={classes.column}>
              <SingleLineGridList />
            </div>
          </ExpansionPanelDetails>

        </ExpansionPanel>
      </div>
    </>
  )
}
