import React, { useState, useMemo } from 'react'
import './HotelCardSearch.css'
import { makeStyles } from '@material-ui/core/styles'
import Accordion from '@material-ui/core/Accordion'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { SearchResultsCarousel } from './SearchResultsCarousel'
import SelectPrice from './SelectPrice'
import { ExtrasList } from './ExtrasList'
import Divider from '@material-ui/core/Divider'

import { searchResultsAmen } from '../Helper/SearchResultsAmen'
import {
  getAmenitiesArray,
  getSmallPictures,
  getUnique,
  labelReturn,
  reviewSummaryReturn,
  isFreeCancelAvailabe,
  constfirstRoomImage
} from '../Helper/Helper'
import { masterLinkSmall } from '../Helper/Constants'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    margin: '2rem auto'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: 'bold'
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(18),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightMedium
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
    flexBasis: '35.33%'
  },
  smallColumn: {
    flexBasis: '15%'
  }
}))

export const HotelCardSearch = (props) => {
  const classes = useStyles()
  const [expanded, setExpanded] = useState(false)
  const [facilitiesArr, setFacilitiesArr] = useState(props.hotel.facilities)
  const imagesarray = props.hotel.images
  const firstImage = constfirstRoomImage(imagesarray)
  if (Object.keys(firstImage)) {
    imagesarray.unshift(firstImage)
  }
  const amenitiesToMap = getAmenitiesArray(facilitiesArr, searchResultsAmen)
  const amenitiesToMap1 = getUnique(amenitiesToMap, 'name')
  const readyImages = useMemo(() => getSmallPictures(imagesarray, masterLinkSmall), [imagesarray])
  const freeCancel = isFreeCancelAvailabe(props.hotel.apiRooms[0].rates)
  const hotelName = props.hotel.name.content
  const hotelName2 = props.hotel.name

  const openExtras = () => {
    if (!expanded) {
      setExpanded(!expanded)
    }
  }

  return (
    <>
      <div className={classes.root}>
        <Accordion className='searchCard' expanded={expanded} square={false}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon onClick={() => setExpanded(!expanded)} />}
            aria-controls='panel1c-content'
            id='panel1c-header'
          >
            {/* first div  */}
            <div id='firstDiv' className={classes.column}>
              <SearchResultsCarousel images={readyImages} />
            </div>
            {/* secound div wrraper  */}
            <div id='secoundDivWrraper' className={classes.column}>
              {/* first inside div  */}
              <div className='firstDiv'>
                <Typography className={classes.secondaryHeading}>
                  {hotelName || hotelName2}
                </Typography>
                <div style={{ FontSize: 14, marginBottom: 1 }}>
                  <p>{props.hotel.address.content.toLowerCase()}</p>
                </div>
                {freeCancel.map((can) => can === 'NOR') ? (
                  <p style={{ color: '#249D3C', fontWeight: '450', fontSize: '0.8rem' }}>
                    Free cancelation available!
                  </p>
                ) : null}
              </div>
              {/* secound inside div  */}
              <div className='secoundDiv'>
                <p style={{ fontSize: 14 }}>Amenities:</p>
                <ul className='secondDivList'>
                  {amenitiesToMap1 &&
                    amenitiesToMap1.map((item, i) => (
                      <li key={i} item={item}>
                        {item.icon}
                        {item.name}{' '}
                      </li>
                    ))}
                </ul>
              </div>
              {/* third inside div  */}

              <div className='thirdDivInner'>
                <div>
                  <p>{labelReturn(props.hotel.categoryCode)}</p>
                </div>
                <Divider orientation='vertical' flexItem />
                <p>{props.hotel.city.content.toLowerCase()}</p>
                <Divider orientation='vertical' flexItem />
                {props.hotel.reviews[0] && reviewSummaryReturn(props.hotel.reviews[0])}
              </div>
              {/* end of secound div wrraper  */}
            </div>

            {/* third div */}
            <div id='thirdDivOutside' className={classes.smallColumn}>
              <SelectPrice done={props.done} hotel={props.hotel} openExtras={openExtras} />
            </div>

            {/* ends here  */}
          </AccordionSummary>

          <AccordionDetails className={classes.details}>
            <ExtrasList />
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  )
}
