import React from 'react';
import Footer from '../component/Footer';
import Nav from '../component/Nav';
import FilterTab from '../component/directoriomedico/FilterTab'
import DoctorCard from '../component/directoriomedico/DoctorCard'
import MainSection from '../component/directoriomedico/MainSection';


const DirectorioMedico = () => {
    return (
        <>
            <Nav />
            <MainSection />
            <FilterTab />
            <Footer />
        </>
    );
};

export default DirectorioMedico;