import React from 'react'
import '../Extras/Extras.css'

class Extras extends React.Component {
  render () {
    return (
      <div className='Extras'>
        <img src={extras.img} alt='' />
        <p>{extras.title}</p>
        <p>{extras.summary}</p>
        <p>{extras.price}</p>
        const popover = (
        <Popover id='popover-basic'>
          <Popover.Title as='h3'>Popover right</Popover.Title>
          <Popover.Content>
            {extras.description}
          </Popover.Content>
        </Popover>
        );

        const Example = () => (
        <OverlayTrigger trigger='click' placement='right' overlay={popover}>
          <Button variant='success'>read more</Button>
        </OverlayTrigger>
        );

        render(<Example />);
      </div>
    )
  }
}

export default Extras
