import React from 'react';
import VentaConsultorio from '../component/ventacompra/VentaConsultorio'
import AdvVenta from '../component/ventacompra/AdvVenta'
import ConsultoriosDetail from '../component/ventacompra/ConsultoriosDetail'
import BubbleWhats from '../component/BubbleWhats';
import MapHospital from '../component/landing/MapHospital';


const RentaConsultorioPage = () => {
    return (
        <div>
            <div>
                <VentaConsultorio>Te Rentamos tus Consultorios</VentaConsultorio>
                <AdvVenta />
                <ConsultoriosDetail />
                <BubbleWhats />
                <div className="mb-10">
                    <MapHospital />
                </div>
                <footer className="bg-gray flex justify-center h-10">
                    <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
                        &copy; 2022, Omega Centro Médico.
                        <u>
                            <a href={require("../utils/Aviso_Privacidad_Omega.pdf")}>
                                Aviso de Privacidad
                            </a>
                        </u>
                    </p>
                </footer>
            </div>
        </div>
    );
};

export default RentaConsultorioPage;