import React from 'react'
import HomeTopSelectors from '../components/HomeTopSelectors'
import HomeCarousel from '../components/HomeCarousel'
import HomeEarPodes from '../components/HomeEarPodes'

const Home = () => {
  return (
    <>
      <div>
        <HomeTopSelectors />
      </div>
      <div>
        <HomeCarousel />
      </div>
      <div>
        <HomeEarPodes />
      </div>
    </>
  )
}

export default Home