import React from 'react'

const Navbar = () => {
    const links = [
        {
            name: 'About Me',
            hash: '#about',
        },
        {
            name: 'Skills',
            hash: '#skills',
        },
        {
            name: 'Projects',
            hash: '#projects',
        },
        {
            name: 'Formation',
            hash: '#formations',
        },
        {
            name: 'Certifications',
            hash: '#certifications',
        },
        {
            name: 'Contacts',
            hash: '#contact',
        },
    ];
    return (
        <header>
            <div>Navbar</div>
        </header>
    )
}

export default Navbar