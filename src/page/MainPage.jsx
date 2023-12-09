import React from 'react';
import Nav from '../component/Nav';
import MainSection from '../component/landing/MainSection';
import GradientFeature from '../component/landing/GradientFeature';
import Footer from '../component/Footer';
import MapHospital from '../component/MapHospital';
import Seo from '../component/SEO';

const keywords = ["Omega Hospital", "Omega Centro Médico", "Hospital Omega", "Hospital Querétaro","Hospital San Juan Del Rio","Omega Hospital Querétaro","Hospital Omega Querétaro","Hospital Omega San Juan Del Rio","Omega Hospital San Juan Del Rio" ]

const MainPage = () => {
    return (
        <>  
        <Seo 
         title="Hospital Centro Médico Omega | Servicios médicos integrales"
         description="Accede a los mejores médicos y profesionales de la salud de San Juan del Río. Somos un hospital integral que cubre múltiples servicios médicos y de emergencias. Omega Centro Médico."
         pathSlug=""
         keywords={keywords}
        />
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