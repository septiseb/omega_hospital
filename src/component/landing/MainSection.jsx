import React from 'react';
import Carrousel from '../Carousel';

const MainSection = () => {
    let imgArr = [require("../../utils/img/mainSlider/hospital.jpeg")
        , require("../../utils/img/mainSlider/servicios_apertura.jpeg")]


    return (
        <>
            <div className="flex justify-center item-center ">
                <div className="flex item-center w-2/3">
                    <Carrousel interval={3000}>{imgArr.map((im, idx) => (<img
                        key={idx}
                        src={im}
                        alt="People working on laptops"
                        className="rounded-lg"
                    />))}</Carrousel>
                </div>
            </div>
        </>
    );
};

export default MainSection;