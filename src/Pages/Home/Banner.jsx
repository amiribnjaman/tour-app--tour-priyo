import React from 'react'
import BannerImage from '../../Assets/Images/homepage-bg.png'
import Navbar from '../../Shared/Navbar'
import SearchBox from './SearchBox'

export default function Banner() {
  return (
    <div> 
      <div  className='relative top-0 left-0' style={{ height: '100vh' }}>
      <div className=''>
        <Navbar />
        <SearchBox />
      </div>
        <img src={BannerImage} alt="" width='100%' style={{ height: '100%' }} />
      </div>
    </div>
  )
}
