import React from 'react';
import Nav from '../component/Nav';
import MainSection from '../component/landing/MainSection';
import GradientFeature from '../component/landing/GradientFeature';
import Footer from '../component/Footer';
import MapHospital from '../component/landing/MapHospital';


const MainPage = () => {
    return (
        <>
            <Nav />
            <MainSection />
            <GradientFeature />
            <MapHospital />
            <Footer />
        </>
    );
};

export default MainPage;