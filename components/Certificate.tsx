"use client"

import { useState } from "react";

interface CertificateProps {
    title: string;
    imageSrc: string;
    organization: string;
    date: string;
    url: string;
}

const Certificate: React.FC<CertificateProps> = ({ title, imageSrc, organization, date, url }) => {
    const [isHovered, setIsHovered] = useState(false)

    const handleClick = () => {
        window.open(url, '_blank');
    };
    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div
            className={`bg-white p-4 mb-4 mx-2 w-80 shadow-md rounded-md cursor-pointer border-4 ${isHovered ? "border-r-slate-600 border-t-slate-600 border-b-orange-600 border-l-orange-600" : "border-white"}`}
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="flex items-center justify-center mb-2">
                <img src={imageSrc} alt={title} className=" h-72 w-72 object-cover rounded-md" />
            </div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-600 mb-2">{organization}</p>
            <p className="text-gray-600 mb-2">{date}</p>
        </div>
    );
};

export default Certificate;