import React from 'react'
import BannerImage from '../../Assets/Images/banner.jpg'
import Navbar from '../../Shared/Navbar'

export default function Banner() {
  return (
    <div>
      {/* <Navbar /> */}
      <div style={{ height: '100vh' }}>

        <img src={BannerImage} alt="" width='100%' style={{ height: '100%' }} />
      </div>
    </div>
  )
}
