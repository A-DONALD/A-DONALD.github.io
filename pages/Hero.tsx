import React from 'react'
import Image from 'next/image'

const Hero = () => {
    return (
        <section id="about" className="h-screen flex items-center">
            <div className="container mx-auto py-8">
                <div className="flex items-center">
                    <div className="w-1/2 pl-8">
                        <div className="relative rounded-full overflow-hidden w-96 h-96">
                            <Image
                                src="/images/profilepic.jpg"
                                alt="profile picture"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                    </div>
                    <div className="content-center w-1/2">
                        <h2 className="text-4xl font-bold mb-4">À propos de moi</h2>
                        <p className="text-lg">
                            Bienvenue sur mon portfolio! Je suis un étudiant en informatique et réseau passionné
                            par le développement web. Mon parcours inclut des projets excitants et des formations
                            enrichissantes dans le domaine. Je suis spécialisé dans...
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero