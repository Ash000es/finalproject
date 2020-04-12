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
    console.log(name)
    this.setState({ comp: name })
  }

   getStepContent = () => {
     switch (this.state.comp) {
       case 'profile':
         return <MyFav />
       case 'my account':
         return <MyBookings />
       case 'my settings':
         return <FormExample />
       default:
         return 'Error'
     }
   }

   render () {
     return (
       <>
         <SimpleMenu onClick={this.handleChange} />
         <div>{this.getStepContent}</div>
       </>

     )
   }
}

export default ProfileContainer
