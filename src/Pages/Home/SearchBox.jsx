import React, { useEffect, useState } from 'react'
import FlightSvg from '../../Components/FlightSvg'
import HotelSvg from '../../Components/HotelSvg'
import TourSvg from '../../Components/TourSvg'
import { useSearchParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import Styles from '../Global.module.css'
import SwapImg from '../../Assets/Images/swap.svg'

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



const card1 = (
    <React.Fragment>
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                From
            </Typography>

            <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
                Word of the Day
            </Typography>
        </CardContent>
        {/* <CardActions>
            <Button size="small">Learn More</Button>
        </CardActions> */}
    </React.Fragment>
);
const card2 = (
    <React.Fragment>
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                To
            </Typography>

            <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
                Dta
            </Typography>
        </CardContent>
        {/* <CardActions>
            <Button size="small">Learn More</Button>
        </CardActions> */}
    </React.Fragment>
);


export default function SearchBox() {
    // Getting the Search parameter value
    const [getSearch] = useSearchParams();
    const [flightType, setFlightType] = useState(null)
    let search = getSearch.get('search') == null ? 'flight' : getSearch.get('search')

    // Use effect for the setting initial value
    useEffect(() => {
        setFlightType('one-way')
    }, [])

    // Handle Flight Type and Get the value from flight type radio selection
    const handleFilghtType = e => {
        setFlightType(e.target.value)
    }

    return (
        <div className="pb-11 w-[88%] md:left-[6%] mx-auto block absolute top-1/3 p-6 bg-white border border-gray-200 rounded-3xl shadow hover:bg-gray dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            {/* Search types heading or menu */}
            <div className='search-box w-full relative'>
                <nav class="md:w-[45%] bg-white shadow shadow-[rgba(0,117,255,.0898711)] rounded-xl absolute -top-[60px] left-[27%] items-center hidden justify-between w-full md:flex md:order-2" id="mobile-menu-language-select">
                    <ul class="flex items-center mx-auto flex-col font-medium py-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row  md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li className=''>
                            <Link to="/?search=flight" className={`flex items-center gap-x-2 py-5 px-6 text-black md:bg-transparent md:dark:text-blue-500 ${search == 'flight' ? ' border-b-[2px] border-[#FCCD03]' : 'border-b-[2px] border-transparent'}`} aria-current="page">
                                {/* <img className={Styles.imgDefalutColor} src={FlightIcon} width={25} height={25} alt="" /> */}
                                <FlightSvg search={search} />
                                <span className='text-[16px]'>Flight</span>
                            </Link>
                        </li>
                        <li className='px-2'>
                            <Link to="/?search=hotel"  className={`flex items-center gap-x-2 py-5 px-6 text-black md:bg-transparent md:dark:text-blue-500 ${search == 'hotel' ? ' border-b-[2px] border-[#FCCD03]' : 'border-b-[2px] border-transparent'}`}>
                                <HotelSvg search={search} />
                                <span className='text-[16px]'>Hotel</span>
                            </Link>
                        </li>
                        <li className=''>
                            <Link to="/?search=tour"  className={`flex items-center gap-x-2 py-5 px-6 text-black md:bg-transparent md:dark:text-blue-500 ${search == 'tour' ? ' border-b-[2px] border-[#FCCD03]' : 'border-b-[2px] border-transparent'}`}>
                                <TourSvg search={search} />
                                <span className='text-[16px]'>Tour</span></Link>
                        </li>
                    </ul>
                </nav>

            </div>

            {/*--- Search Box Content-- */}
            <div className='mt-6'>
                {/*---- Flight Route types --*/}
                <div className="flex gap-x-8 ml-2" onChange={handleFilghtType}>
                    <label className="text-[#3a4856] flex gap-1 items-center cursor-pointer">
                        <input className={`font-bold border-2 cursor-pointer ${flightType == 'one-way' ? ' ' : 'text-[#BAC4D2] border-[#BAC4D2]'}`} defaultChecked type="radio" name="flightType" value='one-way' />
                        <span className={`text-[16px] font-semibold ${flightType == 'one-way' ? 'text-[#1C3C6B]' : 'text-[#BAC4D2]'}`}>One Way</span>
                    </label>
                    <label className="flex gap-1 items-center cursor-pointer">
                        <input className={`font-bold border-2 cursor-pointer ${flightType == 'round-way' ? ' bg-[#1C3C6B]' : 'text-[#BAC4D2] border-[#BAC4D2]'}`} type="radio" name="flightType" value='round-way' />
                        <span className={`text-[16px] font-semibold ${flightType == 'round-way' ? 'text-[#1C3C6B]' : 'text-[#BAC4D2]'}`}>Round Way</span>
                    </label>
                    <label className="flex gap-1 items-center cursor-pointer">
                        <input className={`font-bold border-2 cursor-pointer ${flightType == 'multi-city' ? ' bg-[#1C3C6B]' : 'text-[#BAC4D2] border-[#BAC4D2]'}`} type="radio" name="flightType" value='multi-city' />
                        <span className={`text-[16px] font-semibold ${flightType == 'multi-city' ? 'text-[#1C3C6B]' : 'text-[#BAC4D2]'}`}>Multi City</span>
                    </label>
                </div>

                {/* Flight option Boxes */}
                <div className='flex gap-2 mt-2'>
                    {/* Selection Destination */}
                    <div className='flex md:w-[50%]'>
                        <div className='border px-4 py-2 rounded-xl md:w-1/2'>
                            <h4 className='text-xs text-[#5d6974] uppercase'>FROM</h4>
                            <h2 className='font-bold text-[20px] text-[#1c3c6b] leading-none'>Dhaka</h2>
                            <h5 className='text-[12px] text-[#5d6974]'>DAC, Hazrat Shazalal Internation Air..</h5>
                        </div>
                        <div className='relative top-[25%] right-[18px] '>
                            <img src={SwapImg} alt="" />
                        </div>
                        <div className='border pr-4 pl-6 py-2 rounded-xl -ml-8  md:w-1/2'>
                            <h4 className='text-xs text-[#5d6974] uppercase'>To</h4>
                            <h2 className='font-bold text-[20px] text-[#1c3c6b] leading-none'>Cox's Bazar</h2>
                            <h5 className='text-[13px] text-[#5d6974]'>CXB, Cox's Bazar Airport</h5>
                        </div>
                    </div>

                    {/* Date Selection */}
                    <div className='flex border gap-2 rounded-xl md:w-[35%]'>
                        <div className='px-5 py-2 w-1/2'>
                            <h4 className='text-xs text-[#5d6974] uppercase'>JOURNEY DATE</h4>
                            <h2 className='text-[13px] text-[#5d6974] leading-none'><span className='font-bold text-[20px] text-[#1c3c6b]'>22</span> Aug'23</h2>
                            <h5 className='text-xs text-[#5d6974] '>Tuesday</h5>
                        </div>
                        <div className='h-full w-[1px] bg-slate-200'></div>
                        <div className='pl-3 pr-5 py-2 w-1/2'>
                            <h4 className='text-xs text-[#5d6974] uppercase'>RETURN DATE</h4>
                            {/* <h2 className='text-[13px] text-[#5d6974] leading-none'><span className='font-bold text-[20px] text-[#1c3c6b]'>23</span> Aug'23</h2>
                            <h5 className='text-xs text-[#5d6974] '>Wednesday</h5> */}
                            <h4 className='text-xs mt-1 text-[#5d6974] '>Save more on return flight</h4>
                        </div>
                    </div>

                    {/* Travelar Class */}
                    <div className='border px-4 py-2 rounded-xl md:w-[20%]'>
                        <div>
                            <h4 className='text-xs text-[#5d6974] uppercase'>TRAVELER, CLASS</h4>
                            <h2 className='font-bold text-[20px] text-[#1c3c6b] leading-none'>1 Traveler</h2>
                            <h5 className='text-xs text-[#5d6974]'>Economy</h5>
                        </div>
                    </div>

                </div>

                {/*-------------Search Button--------------*/}
                <button className='bg-[#FCCD03] block absolute -bottom-[10%] left-[42%] py-3 px-[50px] text-lg font-semibold rounded-lg'>Search</button>
            </div>
        </div>
    )
}
