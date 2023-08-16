import React from 'react'
import FlightSvg from '../../Components/FlightSvg'
import HotelSvg from '../../Components/HotelSvg'
import TourSvg from '../../Components/TourSvg'
import { useSearchParams  } from 'react-router-dom';
import { Link } from "react-router-dom";


export default function SearchBox() {
    // Getting the Search parameter value
    const [getSearch]  = useSearchParams();
    let search = getSearch.get('search') == null ? 'flight' : getSearch.get('search')

    return (
        <div class=" w-[88%] md:left-[6%] mx-auto block absolute top-1/3 p-6 bg-white border border-gray-200 rounded-3xl shadow hover:bg-gray dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            {/* Search Box heading or menu */}
            <div className='search-box w-full relative'>
                <nav class="md:w-[45%] bg-white shadow shadow-[rgba(0,117,255,.0898711)] rounded-xl absolute -top-[60px] left-[27%] items-center hidden justify-between w-full md:flex md:order-2" id="mobile-menu-language-select">
                    <ul class="flex items-center mx-auto flex-col font-medium py-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li className=''>
                            <Link to="/?search=flight" class="block flex items-center gap-x-2 py-5 text-black rounded md:bg-transparent md:dark:text-blue-500" aria-current="page">
                                {/* <img className={Styles.imgDefalutColor} src={FlightIcon} width={25} height={25} alt="" /> */}
                                <FlightSvg search={search} />
                                <span className='text-[16px]'>Flight</span>
                            </Link>
                        </li>
                        <li className='px-2'>
                            <Link to="/?search=hotel" class="flex items-center py-auto flex gap-x-2 py-5 pl-3  text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                <HotelSvg search={search} />
                                <span className='text-[16px]'>Hotel</span>
                            </Link>
                        </li>
                        <li className=''>
                            <Link to="/?search=tour" class="block flex gap-x-2 py-5 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                <TourSvg search={search} />
                                <span className='text-[16px]'>Tour</span></Link>
                        </li>
                    </ul>
                </nav>

            </div>

            {/*--- Search Box Content-- */}
            <div className='mt-8'>
                {/*---- Flight types --*/}
                <div className="flex gap-x-10">
                    <label className="text-[#3a4856] flex gap-1 items-center cursor-pointer">
                        <input type="radio" className=' cursor-pointer' name="flightType" />
                        <span className='font-semibold'>One Way</span>
                    </label>
                    <label className="flex gap-1 items-center cursor-pointer">
                        <input className=' cursor-pointer' type="radio" name="flightType" />
                        <span className='font-semibold'>Two Way</span>
                    </label>
                    <label className="flex gap-1 items-center cursor-pointer">
                        <input className=' cursor-pointer' type="radio" name="flightType" />
                        <span className='font-semibold'>Multi Way</span>
                    </label>
                </div>

                {/* Boxes */}
                <div>

                </div>
            </div>
        </div>
    )
}
