import React, { useEffect, useState } from "react";
import { getLaboratory } from "../../services/api/sheets";
import LabCard from "./LabCard";
import MainLab from "./MainLab";
import FilterLab from "./FilterTab";
import { transformArray } from "../../services/functions/googleTransform";

const LabSection = () => {
  const [labs, setLabs] = useState([{}]);

  useEffect(() => {
    getLaboratory().then((r) => {
      const laboratory = transformArray(r.data.values);
      setLabs(laboratory);
    });
  }, []);

 

  return (
    <>
      <MainLab />
      <FilterLab />
      {labs.map((lab, idx)=>(
        <LabCard key={idx} lab={lab}  />
      ))}
      
    </>
  );
};

export default LabSection;
