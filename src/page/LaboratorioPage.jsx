import React from 'react';
import Footer from '../component/Footer';
import MainLab from '../component/laboratorio/MainLab';
import Nav from '../component/Nav';

const LaboratorioPage = () => {
    return (
        <div>
            <Nav />
            <MainLab />
            <Footer />
        </div>
    );
};

export default LaboratorioPage;