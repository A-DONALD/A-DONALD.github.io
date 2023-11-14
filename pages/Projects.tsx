import React from 'react';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/lib/data';

const Projects = () => {
    return (
        <div id='projects' className='container mx-auto py-4 text-center'>
            <h1 className="text-4xl py-2 font-bold mb-2">Projects</h1>
            <div className="flex flex-wrap justify-center">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;