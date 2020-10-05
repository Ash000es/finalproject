import React, { useState, useEffect, useContext } from 'react'
import { findCheapestHotel, handleHomePageSearch } from '../Helper/Helper'
import { MyProvider, ProjectContext } from '../providers/Provider'
import FirebaseContext from '../providers/Firebase'
import { fetchPopularDestData } from '../handlers/ApiHandler'
import { Redirect } from 'react-router'
import { Spinning } from './Spinner'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import barcelona from '../assets/barcelona.jpg'
import ibiza from '../assets/ibiza.jpg'
import lisbon from '../assets/lisbon.jpg'
import majorca from '../assets/majorca.jpg'
import monto3 from '../assets/monto3.jpg'
import santorini from '../assets/santorini.jpg'
import napoli from '../assets/napoli.jpg'
import menorca from '../assets/menorca.jpg'
import mykonos from '../assets/mykonos.jpg'

const useStyles = makeStyles((theme) => ({
  root: {

    margin: '1rem ',
    [theme.breakpoints.up(992)]: {
      maxWidth: 280,
      maxHeight: 250
    },

    [theme.breakpoints.down(992)]: {
      maxWidth: 650,
      maxHeight: 280
    }
  },
  media: {

    borderRadius: 5,
    [theme.breakpoints.up(992)]: {
      maxWidth: 260,
      height: 150
    },

    [theme.breakpoints.down(992)]: {
      maxWidth: 650,
      maxHeight: 190
    }
  },
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
    flexShrink: 1,
    margin: '1rem auto'
  },
  Button: {
    color: '#0088BC'
  },
  cardText: {
    maxheight: '4.375rem'
  },
  Popular: {
    display: 'flex',
    justifyContent: 'center',
    fontWeight: 'medium',
    margin: '1rem auto',
    fontSize: '1.2rem',
    padding: '0.0625rem',
    maxWidth: '100%',
    minWidth: 100,
    textDecoration: 'underline'
  }
}))

const HomePageResults = (props) => {
  const screenWidth = props.width
  const classes = useStyles()
  const [desResults, setDesResults] = useState()
  const [redirect, setRedirect] = useState(false)
  const [isloading, setIsLoading] = useState(false)
  const [popularCities, setPopularCities] = useState([
    { code: 'SAT' },
    { code: 'BCN' },
    { code: 'IBZ' },
    { code: 'LIS' },
    { code: 'PMI' },
    { code: 'MAH' },
    { code: 'MKS' },
    { code: 'NAP' },
    { code: 'TIV' }
  ])
  const popularImages = [
    santorini,
    barcelona,
    ibiza,
    lisbon,
    majorca,
    menorca,
    mykonos,
    napoli,
    monto3
  ]
  const db = useContext(FirebaseContext)
  const { project, setProject } = useContext(ProjectContext)

  const [state, setState] = useState({
    stay: {
      checkIn: '2021-05-15',
      checkOut: '2021-05-16'
    },
    occupancies: [
      {
        rooms: 1,
        adults: 1,
        children: 0
      }
    ],
    destination: {
      code: ''
    },
    reviews: [
      {
        type: 'TRIPADVISOR',
        minRate: 3,
        minReviewCount: 3
      }
    ]
  })

  useEffect(() => {
    const fetchDestinations = async () => {
      const res1 = handleHomePageSearch(popularCities[0], state)
      const res2 = handleHomePageSearch(popularCities[1], state)
      const res3 = handleHomePageSearch(popularCities[2], state)
      const res4 = handleHomePageSearch(popularCities[3], state)
      const res5 = handleHomePageSearch(popularCities[4], state)
      const res6 = handleHomePageSearch(popularCities[5], state)
      const res7 = handleHomePageSearch(popularCities[6], state)
      const res8 = handleHomePageSearch(popularCities[7], state)
      const res9 = handleHomePageSearch(popularCities[8], state)

      return [await res1, await res2, await res3, await res4, await res5, await res6, await res7, await res8, await res9]
    }
    fetchDestinations().then(destinationsResults => {
      setDesResults(destinationsResults)
    })
  }, [])

  const handleClick = (des) => {
    setIsLoading(true)
    fetchPopularDestData(des, db)
      .then((hotelsProject) => {
        setProject({ ...project, results: hotelsProject })
      })
      .then(() => setIsLoading(false))
      .then(() => setRedirect(true))
  }
  if (redirect) {
    return <Redirect exact push to='/searchresults' />
  }

  return (
    <>
      <div className={classes.Popular}>
        <p>Popular destinations</p>
      </div>

      <div className={classes.container}>
        {isloading ? (
          <Spinning />
        ) : (
          <>
            {desResults &&
              desResults.map((des, i) => {
                const cheap = findCheapestHotel(des)
                return (
                  <Card className={classes.root} key={i} des={des} onClick={() => handleClick(des)}>
                    <CardActionArea>
                      <CardMedia
                        component='img'
                        className={classes.media}
                        image={popularImages[i]}
                      />

                      <CardContent className={classes.cardText}>
                        <Typography gutterBottom variant='h5' component='h2'>
                          {des.length && des[0].destinationName}
                        </Typography>
                        <Typography variant='body2' color='textSecondary' component='p'>
                          Stay from {cheap.minRate}$
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                )
              })}
          </>
        )}
      </div>
    </>
  )
}

export default HomePageResults
