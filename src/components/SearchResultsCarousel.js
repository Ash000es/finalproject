import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './HotelCardSearch.css'

export const SearchResultsCarousel = (props) => {
  const styleToShow = props.currentSelection

  const ValueToMap = () => {
    if (props.currentSelection) {
      return props.currentSelection
    } else {
      return props.images
    }
  }
  const finalValue = ValueToMap(props)
  const [index, setIndex] = useState(0)
  const [newimages, setNewImages] = useState(finalValue)
  const [isloading, setIsLoading] = useState(true)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }

  const handleImageError = (i) => {
    const filteredImages = [...newimages]
    filteredImages.splice(i, 1)

    setNewImages(filteredImages)
  }

  return (
    <div
      className={styleToShow && styleToShow.length ? 'outer-wrapper-hotelpage' : 'outer-wrapper'}
    >
      <div className={styleToShow && styleToShow.length ? 'frame-hotelpage' : 'frame'}>
        <Carousel activeIndex={index} onSelect={handleSelect} interval={null} touch pause='hover'>
          {newimages.map((image, i) => {
            const imagLink = image.path

            return (
              <Carousel.Item
                key={i}
                image={image}
                id={styleToShow && styleToShow.length ? 'frame-hotelpage' : ''}
              >
                <img
                  src={imagLink}
                  alt='Hotel Pictures'
                  id='caroImage'
                  onLoad={() => setIsLoading(false)}
                  onError={() => handleImageError(i)}
                />
                {isloading && 'Loading'}
              </Carousel.Item>
            )
          })}
        </Carousel>
      </div>
    </div>
  )
}
