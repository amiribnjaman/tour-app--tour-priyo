import React from 'react'

export default function SearchBox() {
    return (
        <div class=" w-[88%] md:left-[6%] mx-auto block absolute top-1/3 p-6 bg-white border border-gray-200 rounded-3xl shadow hover:bg-gray dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

            {/* Search Box heading or menu */}
            <div className='w-full relative'>
                <nav class="md:w-2/5 bg-white shadow rounded-xl px-5 py-6 absolute -top-[60px] left-[30%] items-center hidden justify-between w-full md:flex md:w-auto md:order-2" id="mobile-menu-language-select">
                    <ul class="flex mx-auto flex-col font-medium py-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li className='px-5'>
                            <a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Flight</a>
                        </li>
                        <li className='px-5'>
                            <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Hotel</a>
                        </li>
                        <li className='px-5'>
                            <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Tour</a>
                        </li>
                    </ul>
                </nav>

                {/* Search Box */}
                <div className='pt-10 pb-5'>
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                    <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </div>

            </div>
        </div>
    )
}
