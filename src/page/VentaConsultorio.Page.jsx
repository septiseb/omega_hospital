import React from 'react';
import VentaConsultorio from '../component/ventacompra/VentaConsultorio'
import AdvVenta from '../component/ventacompra/AdvVenta'
import ConsultoriosDetail from '../component/ventacompra/ConsultoriosDetail'
import BubbleWhats from '../component/BubbleWhats';
import MapHospital from '../component/landing/MapHospital';

const VentaConsultorioPage = () => {
    return (
        <div>
            <VentaConsultorio>Preventa de Consultorios</VentaConsultorio>
            <AdvVenta />
            <ConsultoriosDetail />
            <BubbleWhats />
            <div className="mb-10">
                <MapHospital />
            </div>
        </div>
    );
};

export default VentaConsultorioPage;