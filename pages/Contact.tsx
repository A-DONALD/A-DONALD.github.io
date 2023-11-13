import React from 'react';
import MediaCard from '@/components/MediaCard'; // Assurez-vous d'ajuster le chemin selon votre structure de fichiers

const Contact = () => {
    const socialMediaLinks = [
        {
            iconSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png', // Remplacez par le chemin de votre image
            networkName: 'LinkedIn',
            link: 'https://www.linkedin.com/in/donald-youngoua-3b573a257/',
        },
        {
            iconSrc: 'https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU', // Remplacez par le chemin de votre image
            networkName: 'GitHub',
            link: 'https://github.com/A-DONALD',
        },
        {
            iconSrc: 'https://c.clc2l.com/c/thumbnail280/t/g/m/gmail-cgKrcq.png', // Remplacez par le chemin de votre image
            networkName: 'Gmail',
            link: 'mailto:donaldyoungoua@gmail.com',
        },
        {
            iconSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/langfr-220px-Instagram_logo_2022.svg.png', // Remplacez par le chemin de votre image
            networkName: 'Instagram',
            link: 'https://instagram.com/donald.y18?igshid=MzMyNGUyNmU2YQ==',
        },
        {
            iconSrc: 'https://img.freepik.com/vecteurs-libre/nouvelle-conception-icone-x-du-logo-twitter-2023_1017-45418.jpg?size=338&ext=jpg&ga=GA1.1.1880011253.1699660800&semt=ais', // Remplacez par le chemin de votre image
            networkName: 'Twitter X',
            link: 'https://x.com/DonaldYoungoua?t=ciaFi8Fwwgi6u1snBa74Hg&s=09',
        },
        // Ajoutez d'autres réseaux sociaux ici
    ];

    return (
        <div className="container mx-auto mt-8 p-8">
            <h2 className="text-3xl font-bold mb-6">Réseaux Sociaux</h2>
            <div className="flex flex-wrap justify-center">
                {socialMediaLinks.map((link, index) => (
                    <MediaCard key={index} {...link} />
                ))}
            </div>
        </div>
    );
};

export default Contact;