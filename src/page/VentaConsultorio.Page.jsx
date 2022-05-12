import React from 'react';
import VentaConsultorio from '../component/ventacompra/VentaConsultorio'
import AdvVenta from '../component/ventacompra/AdvVenta'
import ConsultoriosDetail from '../component/ventacompra/ConsultoriosDetail'

const VentaConsultorioPage = () => {
    return (
        <div>
            <VentaConsultorio />
            <AdvVenta />
            <ConsultoriosDetail />
            <div>
                <a target="_blank" href=" https://wa.me/5214611166531?text=Me%20gustaria%20tener%20más%20información%20sobre%20los%20consultorios." >
                <span className="fixed z-10">
                    <img
                        className="z-10 h-14 w-22 px-2 mb-4 rounded-full fixed bottom-0 right-0 block"
                        src={require("../utils/img/whatsapp_logo.png")}
                        alt=""
                    />
                </span>
                </a>
            </div>
        </div>
    );
};

export default VentaConsultorioPage;