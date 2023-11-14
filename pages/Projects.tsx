import React from 'react';
import ProjectCard from '@/components/ProjectCard';

const Projects = () => {
    const projects = [
        {
            title: 'iOS Backup Extractor',
            imageSrc: 'https://www.numeriguide.com/wp-content/uploads/bdce3dac75f21fc605aea0a7cf48342a.jpe',
            details: 'This is an python implementation of an extractor of iOS backup',
            projectLink: 'https://github.com/A-DONALD/iBackup-Extractor',
        },
        {
            title: 'AI - Classifier',
            imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/2048px-Python.svg.png',
            details: 'Python implementation of text classificator with Machine Learning (Scikit-Learn)',
            projectLink: 'https://github.com/A-DONALD/AI-Classifier',
        },
        {
            title: 'AI - Classifier Web Edition',
            imageSrc: 'https://cdn-icons-png.flaticon.com/512/1383/1383411.png',
            details: 'Update of AI-Classifier with Web interface (not GUI) using FLASK',
            projectLink: 'https://github.com/A-DONALD/AI-Classifier-WebEdition',
        },
        {
            title: "Donald's Portfolio",
            imageSrc: 'https://miro.medium.com/v2/resize:fit:1400/1*94Z17dA4rkLL5pOon2ZbCw.jpeg',
            details: 'This is my portfolio creating with Next JS',
            projectLink: 'https://github.com/A-DONALD/A-DONALD.github.io',
        },
    ];

    return (
        <div className='container mx-auto py-16 text-center'>
            <h1 className="text-4xl py-8 font-bold mb-4">Projects</h1>
            <div className="flex flex-wrap justify-center">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;