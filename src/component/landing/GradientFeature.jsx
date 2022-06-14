import React from 'react';
import { Icon } from '@iconify/react';


const features = [
  {
    name: 'Área de Urgencias',
    description: 'Contamos con servicios de atención médica inmediata.',
    icon: <Icon icon="medical-icon:i-ambulance" className="h-6 w-6 text-black" aria-hidden="true" />,
  },
  {
    name: 'Área de Recuperación',
    description: 'Tenemos una área especial para los pacientes despúes de quírofano.',
    icon: <Icon icon="medical-icon:i-inpatient" className="h-6 w-6 text-black" aria-hidden="true" />,
  },
  {
    name: 'Laboratorio',
    description: 'Obten alguno de los estudios clínicos para monitorer el estado de salud.',
    icon: <Icon icon="medical-icon:i-laboratory" className="h-6 w-6 text-black" aria-hidden="true" />,
  },
  {
    name: 'Quirófano',
    description: 'Contamos con distintas salas para la operación de los pacientes.',
    icon: <Icon icon="medical-icon:i-surgery" className="h-6 w-6 text-black" aria-hidden="true" />,
  },
  {
    name: 'Cuidados Intensivos',
    description: 'Disponemos de atención médica que proporciona atención a pacientes con problemas graves de salud.',
    icon: <Icon icon="medical-icon:i-care-staff-area" className="h-6 w-6 text-black" aria-hidden="true" />,
  },
  {
    name: 'Imagenología',
    description: 'Poseemos equipo para obtener imágenes de áreas del interior del cuerpo.',
    icon: <Icon icon="medical-icon:i-cath-lab" className="h-6 w-6 text-black" aria-hidden="true" />,
  },
  {
    name: 'Farmacia',
    description: 'Obtén tus medicamentos necesarios en nuestra farmacia.',
    icon: <Icon icon="medical-icon:i-health-services" className="h-6 w-6 text-black" aria-hidden="true" />,
  },
  {
    name: 'Área de Tococirugía',
    description: 'Disponemos con una área para uso exclusivo para el parto y mujeres embarazadas.',
    icon: <Icon icon="medical-icon:i-ultrasound" className="h-6 w-6 text-black" aria-hidden="true" />,
  },
]


const GradientFeature = () => {
  return (
    <div className=" mt-12 bg-gradient-to-r from-sky-300 to-sky-200">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-black tracking-tight">Servicios Médicos</h2>
          <h3 className="mt-4 max-w-6xl text-lg text-gray-800">
            Conoce sobre todos los servicios médicos que contamos en nuestro centro médico, contamos con una gran variedad:
          </h3>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name}>
              <div>
                <span className="flex items-center justify-center h-12 w-12 rounded-md bg-gray-400 bg-opacity-10">
                  {feature.icon}
                </span>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-medium text-black">{feature.name}</h3>
                <p className="mt-2 text-base text-gray-700">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center -mt-16 pb-10">
        <a href="/servicios_medicos">
        <button
          type="button"
          className="flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
        >
          Más Servicios
        </button>
        </a>
      </div>
    </div>
  );
};

export default GradientFeature;