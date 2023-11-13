import SkillCard from '@/components/SkillCard';
import React from 'react';

const Skills = () => {
    return (
        <div className="container mx-auto py-16 text-center">
            <h1 className="text-4xl font-bold mb-4">Skills</h1>
            <div className="flex items-center justify-center">
                {/* Partie Code Skills (Langages de programmation) */}
                <div className="w-1/2 pr-4 text-center">
                    <h2 className="text-2xl py-4 font-bold mb-4">Code Skills</h2>
                    <div>
                        <SkillCard title="JavaScript" icon={<i className="fab fa-js"></i>} />
                        <SkillCard title="React" icon={<i className="fab fa-react"></i>} />
                        {/* Ajoutez d'autres compétences en programmation ici */}
                    </div>
                </div>

                {/* Partie Soft Skills */}
                <div className="w-1/2 pl-4 text-center">
                    <h2 className="text-2xl py-4 font-bold mb-4">Soft Skills</h2>
                    <div>
                        <SkillCard title="Communication" icon={<i className="fas fa-comments"></i>} />
                        <SkillCard title="Collaboration" icon={<i className="fas fa-users"></i>} />
                        {/* Ajoutez d'autres compétences non techniques ici */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;