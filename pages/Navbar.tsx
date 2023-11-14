import React from 'react'
import { navLinks } from '../lib/data'
import Link from 'next/link'
import Downloadbutton from '../components/Downloadbtn'

const Navbar = () => {
    return (
        <nav className='z-[999] relative border-4 border-slate-500 bg-slate-100 rounded-xl m-1 p-4'>
            <div className='max-w-7xl mx-auto px-4 sm:px-2 lg:px-4'>
                <div className='flex items-center justify-between h-8'>
                    <div className='flex items-center'>
                        <div className='flex-shrink-0 text-lg border-2 text-slate-800 hover:bg-slate-200 hover:text-white hover:border-slate-500 rounded-lg p-2'>
                            <Downloadbutton btnName='Download CV' fileURL="/docs/CV.pdf" dwnldName="CV-Donald-Youngoua.pdf" />
                        </div>
                    </div>
                    <div className='hidden md:block'>
                        <div className='ml-4 flex items-center space-x-4'>
                            {navLinks.map((navlink) => (
                                <Link key={navlink.hash} href={navlink.hash} className='text-lg border-2 text-slate-800 hover:bg-slate-200 hover:text-white hover:border-slate-500 rounded-lg p-2'>
                                    {navlink.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className='hidden md:block'>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar