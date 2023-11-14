import React from 'react'
import { navLinks } from '@/lib/data'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className='z-[999] relative bg-slate-500 p-4'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between h-16'>
                    <div className='flex items-center'>
                        {navLinks.map((navlink) => (
                            <div key={navlink.hash} className=''>
                                <Link href={navlink.hash} className='text-white'>{navlink.name}</Link>
                            </div>
                        ))}
                    </div>
                    <div className='flex items-center'>
                        <div className='flex items-center'>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar