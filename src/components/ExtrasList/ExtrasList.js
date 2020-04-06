import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import SimplePopover from '../PopOverButton/PopOverButton'
import { extras } from '../App/App'
import FloatingActionButtonSize from '../AddButton/AddButton'

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
    color: theme.palette.primary.contrastText
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
      {console.log('yaay', extras)}

      <GridList
        className={classes.gridList} cols={3}

      >
        {extras.map((extra) => (
          <GridListTile key={extra.title}>

            <img src={extra.image} alt='' />

            <GridListTileBar

              title={extra.title}
              subtitle={extra.price}
              classes={{
                root: classes.titleBar,
                title: classes.title
              }}
              actionIcon={
                <>
                  <FloatingActionButtonSize />
                  <SimplePopover sum={extra.summary} />

                </>

              }

            />
          </GridListTile>

        ))}

      </GridList>
    </div>
  )
}
