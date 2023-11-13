import React from 'react';
import Certificate from '@/components/Certificate'; // Assurez-vous d'ajuster le chemin selon votre structure de fichiers

const Certifications = () => {
    const certificates = [
        {
            title: 'Certification 1',
            imageSrc: '/images/certificate1.jpg', // Remplacez par le chemin de votre image
            organization: 'Organisation 1',
            date: 'Janvier 2022',
            url: 'https://example.com/certificate1',
        },
        {
            title: 'Certification 2',
            imageSrc: '/images/certificate2.jpg', // Remplacez par le chemin de votre image
            organization: 'Organisation 2',
            date: 'Février 2022',
            url: 'https://example.com/certificate2',
        },
        // Ajoutez d'autres certifications ici
    ];

    return (
        <div className='container mx-auto py-16 text-center'>
            <h1 className="text-4xl py-8 font-bold mb-4">Certifications</h1>
            <div className="flex flex-wrap justify-center">
                {certificates.map((certificate, index) => (
                    <Certificate key={index} {...certificate} />
                ))}
            </div>
        </div>
    );
};

export default Certifications;