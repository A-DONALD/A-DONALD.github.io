import React from 'react';

interface ProjectCardProps {
    title: string;
    imageSrc: string;
    details: string;
    projectLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, imageSrc, details, projectLink }) => {
    return (
        <div className="bg-slate-200 p-4 mb-4 mx-2 shadow-md rounded-md">
            <img src={imageSrc} alt={title} className="w-full h-40 object-cover mb-2 rounded-md" />
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-600 mb-2">{details}</p>
            <a href={projectLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                Voir le projet
            </a>
        </div>
    );
};

export default ProjectCard;