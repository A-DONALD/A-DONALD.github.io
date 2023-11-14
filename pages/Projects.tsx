import React from 'react';
import Projectcard from '@/components/Projectcard';
import { projects } from '@/lib/data';

const Projects = () => {
    return (
        <div id='projects' className='container mx-auto py-16 text-center'>
            <h1 className="text-4xl py-8 font-bold mb-4">Projects</h1>
            <div className="flex flex-wrap justify-center">
                {projects.map((project, index) => (
                    <Projectcard key={index} {...project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;