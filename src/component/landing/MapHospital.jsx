import React from 'react';

const MapHospital = () => {
    return (
        <div className="flex justify-center mt-5 px-2 h-96">
            <iframe className="w-full h-full" title="Omega Hospital San Juan del Rio" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2334.6715438663427!2d-99.96078920493511!3d20.3891050954621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d30b0fce1bf0b3%3A0x26f4206c2d4ebf8a!2sAvenida%20Universidad%2C%20El%20Dorado%2C%2076804%20San%20Juan%20del%20R%C3%ADo%2C%20Qro.!5e0!3m2!1ses!2smx!4v1652233028822!5m2!1ses!2smx"  loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
    );
};

export default MapHospital;