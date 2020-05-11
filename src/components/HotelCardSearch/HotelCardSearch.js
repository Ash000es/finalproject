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
import ThumbilCarousel from '../thumbilCarousel'
import { hardHotelObject } from '../assets/HardCode'
import SelectPrice from '../SelectPrice'
import { SingleLineGridList } from '../ExtrasList'
import { DropDownFilter } from '../DropDownFilter/DropDownFilter'
import Card from 'react-bootstrap/Card'
import Divider from '@material-ui/core/Divider'
import Row from 'react-bootstrap/Row'
import ListItem from '@material-ui/core/ListItem'
import Image from 'react-bootstrap/Image'
import List from '@material-ui/core/List'
import { amenities } from '../assets/amenities'
import { Link } from 'react-router-dom'
import { MyProvider, ProjectContext } from '../Provider'

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

export const HotelCardSearch = (props) => {
  const classes = useStyles()
  const { project, setProject } = useContext(ProjectContext)
  console.log(project, 'I am project from card search')
  // this line above prints a project with results only while hotels is empty

  const finalAmenitiesArray = []
  console.log(finalAmenitiesArray, 'I am finalarray')
  // hotelsDB.map(hotel=> hotel.facilites).forEach(facility=> carry on same as the below)
  const getAmenitiesArray = () => {
    project.results.facilites.forEach(facility => amenities.forEach(amenity => {
      if (facility.facilityCode === amenity.FacilityCode && facility.facilityGroupCode === amenity.FacilityGroupCode) {
        return finalAmenitiesArray.push(amenity)
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
            //  '
          >
            <div className={classes.column} id='cardImage'>
              {/* <ThumbilCarousel /> */}
              <img src='https://source.unsplash.com/random' alt='nothing' />

            </div>
            <div className='threeCon'>
              <Typography className={classes.secondaryHeading} id='typo'>{props.hotel.categoryCode.content}</Typography>
              <div className={classes.column} id='ament'>
                {/*
                <ul style={{ listStyleType: 'none' }} id=' amentItems'> {finalAmenitiesArray.map(item =>
                  <li key={item.title}>{item.icon}{item.name}  </li>
                )}
                </ul> */}
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
              <SelectPrice />
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
