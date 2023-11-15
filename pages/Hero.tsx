import React from 'react'
import Image from 'next/image'

const Hero = () => {
    return (
        <section id="about" className=" h-screen flex items-center">
            <div className="container mx-auto text-center">
                <div className="flex flex-wrap justify-center items-center">
                    <div className="w-full md:w-1/2 content-center">
                        <div className="relative border-2 border-slate-300 hover:border-4 hover:border-orange-400 rounded-full overflow-hidden w-96 h-96">
                            <Image
                                src="/images/profilepic.jpg"
                                alt="profile picture"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 content-center">
                        <h2 className="text-4xl text-black font-bold mb-4 hover:text-5xl hover:text-orange-300">Donald Youngoua</h2>
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