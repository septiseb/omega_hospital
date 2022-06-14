import React from 'react';
import Footer from '../component/Footer';
import Nav from '../component/Nav';
import HeaderMedService from '../component/serviciosmedicos/HeaderMedService'
import MedicalServices from '../component/serviciosmedicos/MedicalServices'


const ServiciosMedicosPage = () => {
    return (
        <>
            <Nav />
            <div>
            <HeaderMedService />
            <MedicalServices />
            </div>
            <Footer />
        </>
    );
};

export default ServiciosMedicosPage;