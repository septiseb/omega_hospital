import React from "react";
import Carrousel from "../Carousel";

const MainSection = () => {
  let imgArr = [
    require("../../utils/img/mainSlider/hospital_01.jpeg"),
    require("../../utils/img/mainSlider/hospital_02.jpeg"),
    require("../../utils/img/mainSlider/hospital_03.jpeg"),
    require("../../utils/img/mainSlider/hospital_04.jpeg"),
    require("../../utils/img/mainSlider/hospital_05.jpeg"),
    require("../../utils/img/mainSlider/hospital_06.jpeg"),
  ];

  return (
    <>
      <div className="item-center flex justify-center">
        <div className="flex w-2/3">
          <Carrousel interval={3000}>
            {imgArr.map((im, idx) => (
              <img
                key={idx}
                src={im}
                alt="People working on laptops"
                className="flex rounded-lg"
              />
            ))}
          </Carrousel>
        </div>
      </div>
    </>
  );
};

export default MainSection;
