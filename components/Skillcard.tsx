import React, { ReactNode } from 'react';

interface CardProps {
    title: string;
    icon: ReactNode; // ReactNode permet d'accepter n'importe quel élément React, y compris des icônes
}

const SkillCard: React.FC<CardProps> = ({ title, icon }) => {
    return (
        <div className="mb-4 p-4 h-24 w-4/6 bg-slate-300 rounded-md shadow-md mx-auto">
            <div className="flex items-center mb-2 justify-center">
                <div className="mr-2">{icon}</div>
                <h3 className="text-lg font-semibold">{title}</h3>
            </div>
            {/* Ajoutez ici d'autres informations si nécessaire */}
        </div>
    );
};

export default SkillCard;