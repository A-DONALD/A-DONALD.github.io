"use client"

import { useState } from "react";

interface MediaCardProps {
    iconSrc: string;
    networkName: string;
    link: string;
}

const Mediacard: React.FC<MediaCardProps> = ({
    iconSrc,
    networkName,
    link,
}) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleClick = () => {
        window.open(link, "_blank");
    };

    return (
        <div
            className={`relative w-64 h-64 rounded-md p-4 m-4 text-center transition-all duration-300 border-4 ${isHovered ? `border-orange-400` : ``}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
        >
            <div className="relative h-3/4">
                {/* Image du réseau social */}
                <img
                    src={iconSrc}
                    alt={networkName}
                    className={`w-40 h-40 mx-auto mt-4 rounded-3xl object-cover transition-all duration-300`}
                />
            </div>
            <div className="absolute inset-x-0 bottom-0">
                {/* Texte du réseau social */}
                <p
                    className={`text-4xl font-bold flex items-center justify-center transition-all duration-300 ${isHovered ? "opacity-100 text-black" : "opacity-70 text-gray-600"
                        }`}
                >
                    {networkName}
                </p>
            </div>
        </div>
    );
};

export default Mediacard;