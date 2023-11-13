"use client"

interface CertificateProps {
    title: string;
    imageSrc: string;
    organization: string;
    date: string;
    url: string;
}

const Certificate: React.FC<CertificateProps> = ({ title, imageSrc, organization, date, url }) => {
    const handleClick = () => {
        window.open(url, '_blank');
    };

    return (
        <div className="bg-white p-4 mb-4 mx-2 shadow-md rounded-md cursor-pointer" onClick={handleClick}>
            <img src={imageSrc} alt={title} className="w-full h-40 object-cover mb-2 rounded-md" />
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-600 mb-2">{organization}</p>
            <p className="text-gray-600 mb-2">{date}</p>
        </div>
    );
};

export default Certificate;