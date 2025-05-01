import React from 'react';

export const ContactButton = () => {
    const scrollToContact = () => {
        const contactoSection = document.getElementById("contacto");
        if (contactoSection) {
            contactoSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <button
            onClick={scrollToContact}
            className='bg-gray-950 w-52 text-2xl h-16 flex justify-center items-center text-indigo-50 rounded-4xl hover:bg-indigo-50 hover:text-gray-950 cursor-pointer transition-all'
        >
            Contacto
        </button>
    );
};
