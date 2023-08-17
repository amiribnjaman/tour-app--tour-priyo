import React from 'react'
import { Link } from 'react-router-dom'
import campaignDiscount from '../../Assets/Images/campaign-discount.jpg'

export default function DealSectoin() {
    return (
        <div className='w-[88%] mx-auto mt-20 mb-14 '>
            {/*------------Deal Section Header---------- */}
            <div className='flex justify-between'>
                <div>
                    <h3 className='text-3xl font-bold text-[#1C3C6B]'>Hot Deals</h3>
                </div>
                <div>
                    <ul className='flex gap-1 bg-white rounded-full px-2.5 py-1.5'>
                        <li>
                            <Link className='py-1 px-6 text-sm bg-[#ECF3FE] rounded-full'>All</Link>
                        </li>
                        <li>
                            <Link className='py-1 px-6 text-sm hover:bg-[#ECF3FE] rounded-full'>Flight</Link>
                        </li>
                        <li>
                            <Link className='py-1 px-6 text-sm hover:bg-[#ECF3FE] rounded-full'>Hotel</Link>
                        </li>
                        <li>
                            <Link className='py-1 px-6 text-sm hover:bg-[#ECF3FE] rounded-full'>Tour</Link>
                        </li>
                        <li>
                            <Link className='py-1 px-6 text-sm hover:bg-[#ECF3FE] rounded-full'>Others</Link>
                        </li>
                    </ul>
                </div>
            </div>

            
        </div>
    )
}
