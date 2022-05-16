import React from 'react';

const MapHospital = () => {
    return (
        <div className="flex justify-center mt-5 px-2 h-96">
            <iframe className="w-full h-full" title="Omega Hospital San Juan del Rio" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3739.87709470744!2d-99.9500764!3d20.387956799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d30ba94f6e42ab%3A0x878adfd975788545!2sOmega%20Centro%20Medico!5e0!3m2!1ses!2smx!4v1652713646287!5m2!1ses!2smx"  loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
    );
};

export default MapHospital;

