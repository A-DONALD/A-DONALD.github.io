"use client"

import Study from '@/components/Study';
import { studies } from '@/lib/data'

const Formation = () => {
    return (
        <div id='formation' className='container py-4 text-center'>
            <h1 className="text-4xl py-8 font-bold mb-4">Formations</h1>
            <div className="flex flex-col items-center">
                {studies.map((study, index) => (
                    <Study key={index} {...study} />
                ))}
            </div>
        </div>
    );
};

export default Formation;