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
            schoolLogo: '/images/school2.png',
            title: 'Formation 2',
            schoolName: 'École 2',
            period: '2018 - 2019',
            additionalDetails: 'Détails de la formation 2...',
        },
        // Ajoutez d'autres formations ici
    ];

    return (
        <div className="flex flex-col items-center">
            {studies.map((study, index) => (
                <Study key={index} {...study} />
            ))}
        </div>
    );
};

export default Formation;