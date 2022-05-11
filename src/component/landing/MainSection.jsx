import React from 'react';
import Carrousel from '../Carousel';

const MainSection = () => {
    let imgArr = [<img
        className="h-full w-full object-cover"
        src={require("../../utils/img/portada_logo.jpg")}
        alt="People working on laptops"
    />,<img
    className="h-full w-full object-cover"
    src={require("../../utils/img/portada_logo.jpg")}
    alt="People working on laptops"
/>]
    return (
        <div className="relative h-1/2">
            <div className="absolute inset-x-0 bottom-0" />
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
                    <div className="relative inset-0">
                    <Carrousel slides={imgArr} />

                       
                        <div className="absolute inset-0 bg-gradient-to-r from-sky-50 to-sky-50 mix-blend-multiply" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainSection;