import SkillCard from '@/components/SkillCard';
import React from 'react';

const Skills = () => {
    return (
        <div id='skills' className="container mx-auto py-16 text-center">
            <h1 className="text-4xl font-bold mb-4">Skills</h1>
            <div className="flex flex-wrap items-center justify-center md:flex-row flex-col">
                <div className="w-full md:w-1/2 text-center mb-8 md:mb-0">
                    <h2 className="text-2xl py-4 font-bold mb-4">Code Skills</h2>
                    <div>
                        <SkillCard title="JavaScript" />
                        <SkillCard title="Java" />
                        <SkillCard title="Python" />
                        <SkillCard title="HTML - CSS" />
                        <SkillCard title="React" />
                        <SkillCard title="Next JS" />
                    </div>
                </div>

                <div className="w-full md:w-1/2 text-center">
                    <h2 className="text-2xl py-4 font-bold mb-4">Soft Skills</h2>
                    <div>
                        <SkillCard title="Communication" />
                        <SkillCard title="Travail en équipe" />
                        <SkillCard title="Sens de l’observation" />
                        <SkillCard title="Prise de décision" />
                        <SkillCard title="Autonome" />
                        <SkillCard title="Ponctualité" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;