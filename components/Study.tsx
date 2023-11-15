import React, { useState, useRef } from 'react';
import useClickOutside from '@/hook/ClickOuside';

interface StudyProps {
    schoolLogo: string;
    title: string;
    schoolName: string;
    period: string;
    additionalDetails: string;
}

const Study: React.FC<StudyProps> = ({ schoolLogo, title, schoolName, period, additionalDetails }) => {

    const [showDetails, setShowDetails] = useState(false);
    const detailsRef = useRef<HTMLDivElement>(null);

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    const closeDetails = () => {
        setShowDetails(false);
    };

    useClickOutside(detailsRef, closeDetails);

    return (
        <div className="relative bg-slate-200 rounded-full p-4 mb-4 max-w-80vw md:max-w-480px mx-auto">
            <div className="flex items-center">
                <img src={schoolLogo} alt={schoolName} className="w-24 h-24 rounded-full mr-4" />
                <div className='ml-4'>
                    <h3 className="text-lg font-bold">{title}</h3>
                    <p>{schoolName}</p>
                    <p>{period}</p>
                    <button
                        className="text-blue-500 hover:underline"
                        onClick={toggleDetails}
                    >
                        Voir plus
                    </button>
                </div>
            </div>

            {showDetails && (
                <div className="fixed top-0 left-0 w-full h-full z-40 flex items-center justify-center">
                    <div ref={detailsRef} className='bg-white p-4 mb-4 mx-2 w-[480] shadow-md rounded-md cursor-pointer border-4 border-slate-300'>
                        <div className="flex items-center justify-center mb-2">
                            <img src={schoolLogo} alt={schoolName} className=" w-80 object-cover rounded-md" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">{title}</h3>
                        <p className="text-gray-600 mb-2">{schoolName}</p>
                        <p className="text-gray-600 mb-2">{period}</p>
                        <p>{additionalDetails}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Study;
