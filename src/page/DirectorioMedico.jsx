import React from 'react';
import Footer from '../component/Footer';
import Nav from '../component/Nav';
import FilterTab from '../component/directoriomedico/FilterTab'
import DoctorCard from '../component/directoriomedico/DoctorCard'


const DirectorioMedico = () => {
    return (
        <>
            <Nav />
            <FilterTab />
            <Footer />
        </>
    );
};

export default DirectorioMedico;