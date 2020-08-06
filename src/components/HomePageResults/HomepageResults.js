import React, { useState, useEffect, useContext } from 'react'
// import CardDeck from 'react-bootstrap/CardDeck'
// import Card from 'react-bootstrap/Card'
import SearchBar from '../SearchBar/SearchBar'
// import Row from 'react-bootstrap/Row'
import { findCheapestHotel, handleHomePageSearch } from '../../Helper/Helper'
import { MyProvider, ProjectContext } from '../../providers/Provider'
import FirebaseContext from '../../providers/Firebase'
import { fetchPopularDestData } from '../../handlers/ApiHandler'
import { Redirect } from 'react-router'
import { Spinning } from '../Spinner'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    maxWidth: 450,
    maxHeight: 650,
    margin: 20
  },
  media: {
    height: 450
  },
  container: {
    display: 'flex',
    // backgroundColor: 'red',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
    alignContent: 'space-around'

  },
  Popular: {
    border: '1px solid black',
    width: '25%',
    textAlign: 'center',
    fontWeight: '350',
    margin: '1rem auto'
  }

})

const HomePageResults = (props) => {
  const classes = useStyles()
  const [desResults, setDesResults] = useState()
  const [redirect, setRedirect] = useState(false)
  const [isloading, setIsLoading] = useState(false)
  const [popularCities, setPopularCities] = useState([{ code: 'SAT' }, { code: 'BCN' }, { code: 'IBZ' }, { code: 'LIS' }, { code: 'PMI' }, { code: 'MAH' }, { code: 'MKS' }, { code: 'NAP' }, { code: 'TIV' }])
  const db = useContext(FirebaseContext)
  const { project, setProject } = useContext(ProjectContext)
  console.log(desResults, 'des results')

  const [state, setState] = useState(
    {

      stay: {
        checkIn: '2020-11-15',
        checkOut: '2020-11-16'
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
      reviews: [{
        type: 'TRIPADVISOR',
        minRate: 3,
        minReviewCount: 3
      }]

    }
  )

  const ALL_RESULTS = []

  // for (let i = 0; i < popularCities.length; i++) {
  //   const res = await handleHomePageSearch(popularCities[i], state)
  //   ALL_RESULTS.push(res)

  // }
  useEffect(() => {
    const fetchDestinations = async () => {
      const res1 = await handleHomePageSearch(popularCities[0], state)
      // console.log(res1, 'ress')
      const res2 = await handleHomePageSearch(popularCities[1], state)
      const res3 = await handleHomePageSearch(popularCities[2], state)
      const res4 = await handleHomePageSearch(popularCities[3], state)
      const res5 = await handleHomePageSearch(popularCities[4], state)
      const res6 = await handleHomePageSearch(popularCities[5], state)
      const res7 = await handleHomePageSearch(popularCities[6], state)
      const res8 = await handleHomePageSearch(popularCities[7], state)
      const res9 = await handleHomePageSearch(popularCities[8], state)

      return [res1, res2, res3, res4, res5, res6, res7, res8, res9]
    }
    fetchDestinations().then(destinationsResults => {
      setDesResults(destinationsResults)
    })
  }, [])

  const handleClick = (des) => {
    setIsLoading(true)
    fetchPopularDestData(des, db)
      .then((hotelsProject) => {
        setProject(
          { ...project, results: hotelsProject }
        )
      }).then(() => setIsLoading(false)).then(() => setRedirect(true))
    console.log(project, 'project')
  }
  if (redirect) {
    return <Redirect exact push to='/searchresults' />
  }

  return (
    <>
      <h4 className={classes.Popular}>Popular destinations</h4>
      <div className={classes.container}>

        {isloading ? <Spinning />
          : <>
            {
              desResults && desResults.map((des, i) => {
                const cheap = findCheapestHotel(des)
                return (

                  <Card className={classes.root} key={i} des={des} onClick={() => handleClick(des)}>
                    <CardActionArea>
                      <CardMedia
                        component='img'
                        className={classes.media}
                        image='https://source.unsplash.com/random'

                      />
                      <CardContent>
                        <Typography gutterBottom variant='h5' component='h2'>
                          {des[0].destinationName}
                        </Typography>
                        <Typography variant='body2' color='textSecondary' component='p'>
                          Hotels from {cheap.minRate}¢
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size='small' color='primary'>
                        Buy Now
                      </Button>
                      <Button size='small' color='primary'>
                        Add to Cart
                      </Button>
                    </CardActions>
                  </Card>
                )
              })
            }
            </>}
      </div>
    </>

  )
}

export default HomePageResults
