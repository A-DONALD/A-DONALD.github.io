import React from 'react';
import MediaCard from '@/components/MediaCard'; // Assurez-vous d'ajuster le chemin selon votre structure de fichiers

const Contact = () => {
    const socialMediaLinks = [
        {
            iconSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png',
            networkName: 'LinkedIn',
            link: 'https://www.linkedin.com/in/donald-youngoua-3b573a257/',
        },
        {
            iconSrc: 'https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU',
            networkName: 'GitHub',
            link: 'https://github.com/A-DONALD',
        },
        {
            iconSrc: 'https://c.clc2l.com/c/thumbnail280/t/g/m/gmail-cgKrcq.png',
            networkName: 'Gmail',
            link: 'mailto:donaldyoungoua@gmail.com',
        },
        {
            iconSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/langfr-220px-Instagram_logo_2022.svg.png',
            networkName: 'Instagram',
            link: 'https://instagram.com/donald.y18?igshid=MzMyNGUyNmU2YQ==',
        },
        {
            iconSrc: 'https://img.freepik.com/vecteurs-libre/nouvelle-conception-icone-x-du-logo-twitter-2023_1017-45418.jpg?size=338&ext=jpg&ga=GA1.1.1880011253.1699660800&semt=ais',
            networkName: 'Twitter X',
            link: 'https://x.com/DonaldYoungoua?t=ciaFi8Fwwgi6u1snBa74Hg&s=09',
        },
        {
            iconSrc: 'https://cdn-icons-png.flaticon.com/512/126/126103.png',
            networkName: 'Téléphone',
            link: 'tel:0751382550',
        },
    ];

    return (
        <div id='contact' className="container mx-auto mt-8 p-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Contacts</h2>
            <div className="flex flex-wrap justify-center">
                {socialMediaLinks.map((link, index) => (
                    <MediaCard key={index} {...link} />
                ))}
            </div>
        </div>
    );
};

export default Contact;