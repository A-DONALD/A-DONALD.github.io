import React from 'react';
import ProjectCard from '@/components/ProjectCard'; // Assurez-vous d'ajuster le chemin selon votre structure de fichiers

const Projects = () => {
    const projects = [
        {
            title: 'Projet 1',
            imageSrc: '/images/project1.jpg', // Remplacez par le chemin de votre image
            details: 'Description du projet 1...',
            projectLink: 'https://example.com/project1',
        },
        {
            title: 'Projet 2',
            imageSrc: '/images/profilepic.jpg', // Remplacez par le chemin de votre image
            details: 'Description du projet 1...',
            projectLink: 'https://example.com/project1',
        },
        // Ajoutez d'autres projets ici
    ];

    return (
        <div className="flex flex-wrap justify-center">
            {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
            ))}
        </div>
    );
};

export default Projects;