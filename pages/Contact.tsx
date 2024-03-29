import React from 'react';
import MediaCard from '@/components/MediaCard';
import { contactsLinks } from '@/lib/data';

const Contact = () => {
    return (
        <div id='contact' className="container mx-auto py-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Contacts</h2>
            <div className="flex flex-wrap justify-center">
                {contactsLinks.map((contact, index) => (
                    <MediaCard key={index} {...contact} />
                ))}
            </div>
        </div>
    );
};

export default Contact;