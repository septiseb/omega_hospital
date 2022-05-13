import React from 'react';
import Carrousel from '../Carousel';

const MainSection = () => {
    let imgArr = [require("../../utils/img/portada_logo.jpg")
        , require("../../utils/img/portada_logo.jpg")]
    return (
        <div className="relative h-1/2">
            <div className="absolute inset-x-0 bottom-0" />
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
                    <div className="relative inset-0">
                        <Carrousel interval={3000}>{imgArr.map((im,idx) => (<img
                            className="h-full w-full object-cover"
                            key={idx}
                            src={im}
                            alt="People working on laptops"
                        />))}</Carrousel>


                        <div className="absolute inset-0 bg-gradient-to-r from-sky-50 to-sky-50 mix-blend-multiply" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainSection;