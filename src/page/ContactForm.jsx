import React from 'react';
import Nav from '../component/Nav'
import ContactForm from '../component/landing/ContactForm'
import Footer from '../component/Footer';

const ContactFormPage = () => {
    return (
        <>
            <Nav />
            <div className="py-8">
                <ContactForm />
            </div>
            <Footer />
        </>
    );
};

export default ContactFormPage;