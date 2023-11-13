import React, { useState } from 'react';

interface StudyProps {
    schoolLogo: string;
    title: string;
    schoolName: string;
    period: string;
    additionalDetails: string;
}

const Study: React.FC<StudyProps> = ({ schoolLogo, title, schoolName, period, additionalDetails }) => {
    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    return (
        <div className="relative mb-4 max-w-80vw md:max-w-480px mx-auto">
            <div className="flex items-center">
                <img src={schoolLogo} alt={schoolName} className="w-12 h-12 rounded-full mr-4" />
                <div>
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
                <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 shadow-md rounded-md">
                    <p>{additionalDetails}</p>
                    <button
                        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={toggleDetails}
                    >
                        Fermer
                    </button>
                </div>
            )}
        </div>
    );
};

export default Study;