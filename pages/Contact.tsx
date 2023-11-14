import React from 'react';
import Mediacard from '../components/Mediacard';
import { contactsLinks } from '../lib/data';

const Contact = () => {
    return (
        <div id='contact' className="container mx-auto mt-8 p-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Contacts</h2>
            <div className="flex flex-wrap justify-center">
                {contactsLinks.map((contact, index) => (
                    <Mediacard key={index} {...contact} />
                ))}
            </div>
        </div>
    );
};

export default Contact;