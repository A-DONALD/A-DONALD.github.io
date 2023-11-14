import React from 'react'
import { navLinks } from '@/lib/data'
import Link from 'next/link'
import DownloadButton from '@/components/DownloadBtn'

const Navbar = () => {
    return (
        <nav className='z-[999] relative bg-slate-500 p-4'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between h-16'>
                    <div className='flex items-center'>
                        <div className='flex-shrink-0'>
                            <DownloadButton btnName='Download CV' fileURL="/docs/CV.pdf" dwnldName="CV-Donald-Youngoua.pdf" />
                        </div>
                    </div>
                    <div className='hidden md:block'>
                        <div className='ml-4 flex items-center space-x-4'>
                            {navLinks.map((navlink) => (
                                <Link key={navlink.hash} href={navlink.hash} className='text-white hover:bg-white hover:text-black rounded-lg'>
                                    {navlink.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar