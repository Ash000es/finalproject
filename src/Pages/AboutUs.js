/**
TODO: this file is completely unncessary.
The real "Page" is: import AboutUs from '../components/AboutUs'
That's what you should move into Pages/
Now you've created un unncessary wrapper component.
It's just an extra file that serves no purpose
 */

import React from 'react'
import AboutUs from '../components/AboutUs'
export const AboutUsPage = () => {
  return (
    <>
      <AboutUs />

    </>
  )
}
