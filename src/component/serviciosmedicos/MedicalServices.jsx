import React from 'react';
import MedicalServiceCard from './MedicalServiceCard';

const services = [
    {
        id: "hospitalizacion", title: "Hospitalización", description: "Ofrecemos el servicio destinado al internamiento de pacientes, previa autorización del médico tratante,  para establecer un diagnóstico, recibir tratamiento y dar seguimiento a su padecimiento.", img: require("../../utils/img/servicios/hospitalizacion.jpeg")
    }, {
        id: "quirofano", title: "Quirófano", description: "Tenemos dos áreas dentro del Hospital donde se opera, o se interviene quirúrgicamente, a los pacientes. Funciona las 24 horas del día, los siete días de la semana y allí se atienden intervenciones programadas o de urgencia, con internación o ambulatorias.", img: require("../../utils/img/servicios/quirogano.jpeg")
    }, {
        id: "laboratorios", title: "Laboratorios", description: "Proveemos servicios donde los profesionales y técnicos en análisis clínicos, analizan muestras biológicas humanas que contribuyen al estudio, prevención, diagnóstico y tratamiento de las enfermedades; para lo cual se obtienen muestras biológicas diversas, como sangre, orina, heces, líquido sinovial (articulaciones), líquido cefalorraquídeo, exudados faríngeos y vaginales, entre otros.", img: require("../../utils/img/servicios/laboratorio.jpeg")
    }, {
        id: "uci", title: "Terapia Intensiva", description: "Brindamos atención a pacientes que tienen alguna condición de salud que pone en riesgo la vida y por tal razón necesitan control y monitorización permanente.", img: require("../../utils/img/servicios/uci.jpeg")
    }, {
        id: "pediatria", title: "   ", description: " Ofrecemos la especialdiad médica enfocada en la salud y las enfermedades de los niños. Se trata de una especialidad médica que se centra en los pacientes desde el momento del nacimiento hasta la adolescencia, sin que exista un límite preciso que determine el final de su validez.", img: require("../../utils/img/servicios/pediatria.jpeg")
    }, {
        id: "ginecologia", title: "Ginecología y Obstetricia", description: "Contamos con la especialidad médica que se especializa en brindar atención a las mujeres a lo largo de su vida, incluyendo el embarazo y el parto, además brindan diagnósticos y tratamientos para enfermedades de los órganos reproductores femeninos.", img: require("../../utils/img/servicios/gine.jpeg")
    }, {
        id: "traumatologia", title: "Traumatología y Ortopedia", description: "Tenemos servicios dedicados al diagnóstico, tratamiento, rehabilitación y prevención de lesiones y enfermedades que afectan al sistema músculo esquelético. Este complejo sistema abarca huesos, articulaciones, ligamentos, tendones, músculos y nervios.", img: require("../../utils/img/servicios/trauma.jpeg")
    }, {
        id: "medicina", title: "Medicina Interna", description: "Existen dentro del hospital especialidades médicas que se encarga de la atención integral del adulto, así como del diagnóstico y tratamiento no quirúrgico y la prevención de las enfermedades. Lo más característico de esta especialidad es la visión global de la persona enferma.", img: require("../../utils/img/servicios/interna.jpeg")
    },
    {
        id: "farmacia", title: "Farmacia", description: "Contamos especialmente con una unidad médica y personal responsable se encarga de la correcta conservación, custodia, organización y mantiene un sistema eficaz de dispensación de los medicamentos prescritos por el médico tratante de acuerdo a las instrucciones emitidas.", img: require("../../utils/img/servicios/farmacia.jpeg")
    },
    {
        id: "urgencia", title: "Urgencias", description: "Contamos con un área responsable de dar atención médica y quirúrgica a los pacientes que requieren de una atención inmediata. A diferencia de un consultorio médico, no requiere de cita y se puede acudir en cualquier momento. Nuestra área de urgencia estama operando 24/7.", img: require("../../utils/img/servicios/urgencias.jpeg")
    }
]
const MedicalServices = () => {
    return (
        <>
            {services.map((service, idx) => (
                <div key={service.id}>
                    <MedicalServiceCard services={service} idx={idx} />
                </div>
            )
            )}
        </>
    );
};

export default MedicalServices;