import React from 'react';
import Carrousel from '../Carousel';

const imgCarrousel = [
  require('../../utils/img/consultorio/omega_info.jpeg'),
  require('../../utils/img/consultorio/omega_frontal.jpeg'),
  require('../../utils/img/consultorio/consultorio.jpeg'),
  require('../../utils/img/consultorio/consultorio_01.jpeg'),
  //require('../../utils/img/consultorio/tercerpiso.png')
]

const VentaConsultorio = ({children}) => {


  return (
    <div className="bg-gray-50 -mt-24">
      <div className="relative overflow-hidden">
        <div className="absolute inset-y-0 h-full w-full" aria-hidden="true">
          <div className="relative h-full">
            <svg
              className="absolute right-full transform translate-y-1/3 translate-x-1/4 md:translate-y-1/2 sm:translate-x-1/2 lg:translate-x-full"
              width={404}
              height={784}
              fill="none"
              viewBox="0 0 404 784"
            >
              <defs>
                <pattern
                  id="e229dbec-10e9-49ee-8ec3-0286ca089edf"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={784} fill="url(#e229dbec-10e9-49ee-8ec3-0286ca089edf)" />
            </svg>
            <svg
              className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 sm:-translate-x-1/2 md:-translate-y-1/2 lg:-translate-x-3/4"
              width={404}
              height={784}
              fill="none"
              viewBox="0 0 404 784"
            >
              <defs>
                <pattern
                  id="d2a68204-c383-44b1-b99f-42ccff4e5365"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={784} fill="url(#d2a68204-c383-44b1-b99f-42ccff4e5365)" />
            </svg>
          </div>
        </div>

        <div className="relative pt-6 pb-16 sm:pb-24">
          <div className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">{children}</span>
                <span className="block text-sky-700">En San Juan del Rio</span>
              </h1>
              <h3 className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-4xl">
                No pierdas la oportunidad de invertir en el Hospital Omega Centro Médico. 
                <h2 className='font-extrabold text-xl mt-2'>Apártalo con solo $5,000 pesos.</h2> 
                Y obtén la escrituración en Diciembre 2022.
              </h3>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex flex-col" aria-hidden="true">
            <div className="flex-1" />
            <div className="flex-1 w-full bg-sky-700" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 -mt-16 w-1/2">
            <Carrousel interval={8000}>
              {imgCarrousel.map(im => (<img
                className="relative rounded-lg shadow-lg"
                src={im}
                alt="App screenshot"
              />))}
            </Carrousel>

          </div>
        </div>
      </div>
      <div className="bg-sky-700">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-12 sm:px-6 lg:px-8">
        </div>
      </div>
    </div>
  )
}

export default VentaConsultorio;