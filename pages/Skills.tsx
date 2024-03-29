import React from 'react';
import { codeSkills } from '@/lib/data';
import { softSkills } from '@/lib/data';
import SkillCard from '@/components/SkillCard';

const Skills = () => {
    return (
        <div id='skills' className="container mx-auto py-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Skills</h1>
            <div className="flex flex-wrap items-center justify-center md:flex-row flex-col">
                <div className="w-full md:w-1/2 text-center mb-8 md:mb-0">
                    <h2 className="text-2xl py-4 font-bold mb-4">Code Skills</h2>
                    <div>
                        {codeSkills.map((code, index) => (
                            <SkillCard key={index} {...code} />
                        ))}
                    </div>
                </div>

                <div className="w-full md:w-1/2 text-center">
                    <h2 className="text-2xl py-4 font-bold mb-4">Soft Skills</h2>
                    <div>
                        {softSkills.map((soft, index) => (
                            <SkillCard key={index} {...soft} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;