import React from 'react';
import Certificate from '@/components/Certificate';
import { certificates } from '@/lib/data';

const Certifications = () => {
    return (
        <div id='certifications' className='container py-16 text-center'>
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