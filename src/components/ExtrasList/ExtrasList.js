import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import IconButton from '@material-ui/core/IconButton'
import StarBorderIcon from '@material-ui/icons/StarBorder'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { Example } from '../PopOverButton/PopOverButton'
 import { extras } from '../App/App'
import OutlinedCard from '../GridlistCard/GridListCard'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper

  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)'
  },
  title: {
    color: theme.palette.primary.light
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
  }
}))

const tileData = [
  {
    img: 'https://source.unsplash.com/random',
    title: 'Image',
    author: 'author'
  },
  {
    img: 'https://source.unsplash.com/random',
    title: 'Image',
    author: 'author'
  },
  {
    img: 'https://source.unsplash.com/random',
    title: 'Image',
    author: 'author'
  }

]


export const SingleLineGridList = () => {
  const classes = useStyles()

  return (

    <div className={classes.root}>
      {console.log('extras', extras)}

      <GridList
        className={classes.gridList} cols={3}
      >
        {extras.map((extra, i) => (
          <GridListTile key={extra[i].image}>

            <img src={extra[i].image} alt='' />

            <GridListTileBar

              title={extra[i].title}
              classes={{
                root: classes.titleBar,
                title: classes.title
              }}
              actionIcon={
               
                <Example sum={extra[i].summary} />

              }

            />
          </GridListTile>

        ))}

      </GridList>
    </div>
  )
}