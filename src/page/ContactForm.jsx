import React from 'react';
import Nav from '../component/Nav'
import ContactForm from '../component/landing/ContactForm'
import Footer from '../component/Footer';
import Seo from '../component/SEO';

const keywords = ["Contacto Omega", "Contacto Omega centro médico"]


const ContactFormPage = () => {
    return (
        <>
            <Seo
                title="Contacto | Centro de comunicación con Omega"
                description="Contacta a nuestro personal administrativo y agentes comerciales en Omega Centro Médico."
                pathSlug="contacto"
                keywords={keywords}
            />
            <Nav />
            <div className="py-8">
                <ContactForm />
            </div>
            <Footer />
        </>
    );
};

export default ContactFormPage;