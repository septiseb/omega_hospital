import React from 'react';
import Nav from '../component/Nav';
import MainSection from '../component/landing/MainSection';
import GradientFeature from '../component/landing/GradientFeature';
import Footer from '../component/Footer';
import MapHospital from '../component/MapHospital';


const MainPage = () => {
    return (
        <>
            <Nav />
            <div className="mt-12" >
                <MainSection />
                <GradientFeature />
                <MapHospital />
                <Footer />
            </div>
        </>
    );
};

export default MainPage;