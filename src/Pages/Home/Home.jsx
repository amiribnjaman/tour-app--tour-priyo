import React, { useEffect, useState } from 'react'
import Banner from "./Banner";
import Navbar from '../../Shared/Navbar';
import DealSection from './DealSectoin'
import PopularDestination from './PopularDestination';
import PopularTours from './PopularTours';
import SecondaryNav from '../../Shared/SecondaryNav';

export default function Home() {
  const [showMenuMiddleOption, setShowMenuMiddleOption] = useState(false);

  // Handle Menu scroll
  const handleMenuScroll = () => {
    if (window.scrollY > 200) {
      setShowMenuMiddleOption(true);
    } else {
      setShowMenuMiddleOption(false);
    }
  };

  console.log(showMenuMiddleOption);

  // Handle menuBgHandle Scroll
  //   const menuBgHandle = () => {
  //     if (window.scrollY > 3510) {
  //
  //     } else {
  //
  //     }
  //   }

  useEffect(() => {
    document.addEventListener("scroll", handleMenuScroll);
    // document.addEventListener("scroll", menuBgHandle);
  }, [showMenuMiddleOption]);


  return (
    <div>
      {showMenuMiddleOption && <SecondaryNav />}
      <Banner>
        <Navbar />
      </Banner>
      <DealSection />
      <PopularDestination />
      <PopularTours />
    </div>
  );
}
