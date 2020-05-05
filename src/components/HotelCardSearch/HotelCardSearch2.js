import React, { useContext, useState } from 'react'
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
import { amenities } from '../assets/amenities'
import { Link } from 'react-router-dom'
import { MyProvider, ProjectContext } from '../Provider/Provider'

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

export const DetailedExpansionPanel = (props) => {
  const classes = useStyles()
  const { project, setProject } = useContext(ProjectContext)
  // const hotel={project.hotels}
  const {hotelsDB} = project.hotels
  // not sure destructuring facilites like below works? otherwise I will have to take hotelDB and map it to get to facilites like in the commented line, can I just chain forEach on it or it has to be inside the map? 
  const {facilites} = hotelsDB.facilites
  const finalAmenitiesArray = []
  // hotelsDB.map(hotel=> hotel.facilites).forEach(facility=> carry on same as the below)
  const getamenitiesArray = () => {
    facilites.forEach(facility => amenities.forEach(amenity => {
      if (facility.facilityCode === amenity.FacilityCode && facility.facilityGroupCode === amenity.FacilityGroupCode) {
        return finalAmenitiesArray.push(amenity)
      } else {
        return null
      }
    }))
    
  }

  return (
    <>

      <div className={classes.root}>
        <ExpansionPanel defaultExpanded>
          <ExpansionPanelSummary

            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1c-content'
            id='panel1c-header'
            className='bigDiv'
            //  'https://source.unsplash.com/random'
          >
            <div className={classes.column} id='cardImage'>
              {/* <ControlledCarousel1 /> */}

            </div>
            <div className='threeCon'>
              <Typography className={classes.secondaryHeading} id='typo'>{props.hotel.categoryCode.content}</Typography>
              <div className={classes.column} id='ament'>

                <ul style={{ listStyleType: 'none' }} id=' amentItems'> {hardHotelObject.hotelAmenities.map(item =>
                  <li key={amenities.title}>{amenities.icon}{amenities.name}  </li>
                )}
                </ul>
              </div>

              <div className='labelBar'>
                <p>{hardHotelObject.label.posh}</p>
                <Divider orientation='vertical' flexItem />
                <p>{props.hotel.address.content}</p>
                <Divider orientation='vertical' flexItem />
                <p>{props.hotel.city.content}</p>
              </div>
            </div>

            <div id='bookButton' className={classes.column} style={{ width: '170px' }}>
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
