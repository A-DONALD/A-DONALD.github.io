import React from 'react';
import Certificate from '@/components/Certificate'; // Assurez-vous d'ajuster le chemin selon votre structure de fichiers

const Certifications = () => {
    const certificates = [
        {
            title: 'Microsoft certified Azure AI fundamentals',
            imageSrc: '/images/microsoft-certified-azure-ai-fundamentals.png',
            organization: 'Microsoft',
            date: 'Octobre 2023',
            url: 'https://www.credly.com/badges/a207c4dc-09fd-43e7-bc75-2f0b299ffbc7/public_url',
        },
    ];

    return (
        <div className='container py-16 text-center'>
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