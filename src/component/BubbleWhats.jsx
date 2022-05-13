import React from 'react';

const BubbleWhats = () => {
    return (
        <div>
        <a target="_blank" href=" https://wa.me/5214425823235?text=Me%20gustaria%20tener%20más%20información%20sobre%20los%20consultorios." >
        <span className="fixed z-10">
            <img
                className="z-10 h-14 w-22 px-2 mb-4 rounded-full fixed bottom-0 right-0 block"
                src={require("../utils/img/whatsapp_logo.png")}
                alt="Contacta Omega Centro Médico Ventas de Consultorio"
            />
        </span>
        </a>
    </div>
    );
};

export default BubbleWhats;