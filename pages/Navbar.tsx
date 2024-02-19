"use client"

import React, { useState } from 'react'
import { navLinks } from '@/lib/data'
import Link from 'next/link'
import DownloadButton from '@/components/DownloadBtn'

const Navbar = () => {

    const [isClick, setisClick] = useState(false);

    const toogleNavbar = () => {
        setisClick(!isClick);
    }

    return (
        <nav className='z-[999] sticky top-0 border-4 border-slate-500 bg-slate-100 rounded-xl m-1 p-4'>
            <div className='max-w-7xl mx-auto px-4 sm:px-2 lg:px-4'>
                <div className='flex items-center justify-between h-6'>
                    <div className='flex items-center'>
                        <div className='flex-shrink-0 text-lg border-2 text-slate-800 hover:bg-slate-200 hover:text-white hover:border-slate-500 rounded-lg p-1'>
                            <DownloadButton btnName='Download CV' fileURL="/docs/CV.pdf" dwnldName="CV-Donald-Youngoua.pdf" />
                        </div>
                    </div>
                    <div className='hidden md:block'>
                        <div className='flex items-center space-x-2'>
                            {navLinks.map((navlink) => (
                                <Link key={navlink.hash} href={navlink.hash} className='text-lg border-2 text-slate-800 hover:bg-slate-200 hover:text-white hover:border-slate-500 rounded-lg p-1'>
                                    {navlink.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className='md:hidden flex items-center'>
                        <button className='inline-flex  items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white' onClick={toogleNavbar}>
                            {isClick ? (
                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            {isClick && (
                <div className='md:hidden mt-2'>
                    <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                        {navLinks.map((navlink) => (
                            <Link key={navlink.hash} href={navlink.hash} className='text-lg border-2 block text-slate-800 hover:bg-slate-200 hover:text-white hover:border-slate-500 rounded-lg p-1'>
                                {navlink.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar