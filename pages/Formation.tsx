"use client"
import Study from '@/components/Study'; // Assurez-vous d'ajuster le chemin selon votre structure de fichiers

const Formation = () => {
    const studies = [
        {
            schoolLogo: 'https://www.aurlom.com/js/tinymce/uploads/logo_esaip_ingenieur_rvb.png',
            title: 'Formation 1',
            schoolName: 'École 1',
            period: '2020 - 2021',
            additionalDetails: 'Détails de la formation 1...',
        },
        {
            schoolLogo: 'https://pbs.twimg.com/profile_images/1366294791852548101/XDZ0XjpC_400x400.jpg',
            title: 'Formation 2',
            schoolName: 'École 2',
            period: '2018 - 2019',
            additionalDetails: 'Détails de la formation 2...',
        },
        // Ajoutez d'autres formations ici
    ];

    return (
        <div className='container mx-auto py-16 text-center'>
            <h1 className="text-4xl py-8 font-bold mb-4">Formations</h1>
            <div className="flex flex-col items-center">
                {studies.map((study, index) => (
                    <Study key={index} {...study} />
                ))}
            </div>
        </div>
    );
};

export default Formation;