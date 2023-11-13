"use client"
import Study from '@/components/Study'; // Assurez-vous d'ajuster le chemin selon votre structure de fichiers

const Formation = () => {
    const studies = [
        {
            schoolLogo: 'https://www.aurlom.com/js/tinymce/uploads/logo_esaip_ingenieur_rvb.png',
            title: 'CYCLE INGENIEUR : INFORMATIQUE ET RESEAUX',
            schoolName: "ESAIP - école d'ingénieur",
            period: 'sept 2022 - En cours',
            additionalDetails: "Détails de la formation à l'ESAIP...",
        },
        {
            schoolLogo: 'https://www.deardegree.com/images/15528011405c8ddd74f3409.jpg',
            title: 'ERASMUS : COMPUTER SCIENCE AND ENGINEERING',
            schoolName: 'University of West Bohemia',
            period: 'fev 2023 - mai 2023',
            additionalDetails: "Détails de la formation à l'ESAIP...",
        },
        {
            schoolLogo: 'https://pbs.twimg.com/profile_images/1366294791852548101/XDZ0XjpC_400x400.jpg',
            title: 'CLASSES PREPARATOIRES PCSI',
            schoolName: 'Institut universitaire de la côte',
            period: 'sept 2019 - juin 2022',
            additionalDetails: "Détails de la formation à l'ESAIP...",
        },
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