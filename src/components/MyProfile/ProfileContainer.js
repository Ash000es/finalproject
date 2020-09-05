import React from 'react'
import SimpleMenu from './SimpleMenu'
import FormExample from './FormExample'
import MyFav from './MyFav'
import MyBookings from './MyBookings'

class ProfileContainer extends React.Component {
  constructor (props) {
    super(props)

    this.state = { comp: '' }

    this.handleChange = this.handleChange.bind(this)
    this.getStepContent = this.getStepContent.bind(this)
  }

  handleChange (name) {
    console.log('profilecontainer', name)
    this.setState({ comp: name })
  }

   getStepContent = () => {
     console.log(this.state.comp)
     switch (this.state.comp) {
       case 'Profile':
         return <MyFav />
       case 'My account':
         return <MyBookings />
       case 'My settings':
         return <FormExample />
       default:
         return null
     }
   }

   render () {
     return (
       <>
         <SimpleMenu onSelect={this.handleChange} />
         <div>{this.getStepContent()}</div>
       </>

     )
   }
}

export default ProfileContainer
