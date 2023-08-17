import React from 'react'
import Banner from "./Banner";
import Navbar from '../../Shared/Navbar';
import DealSection from './DealSectoin'

export default function Home() {
  return (
    <div>
        <Banner>
            <Navbar />
        </Banner>
        <DealSection />
    </div>
  )
}
