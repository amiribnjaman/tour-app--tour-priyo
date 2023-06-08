import React from 'react'
import BannerImage from '../../Assets/Images/banner.jpg'
import Navbar from '../../Shared/Navbar'

export default function Banner() {
  return (
    <div> 
      <div  className='relative top-0 left-0' style={{ height: '100vh' }}>
      <div className=''>
        <Navbar />

      </div>
        <img src={BannerImage} alt="" width='100%' style={{ height: '100%' }} />
      </div>
    </div>
  )
}
