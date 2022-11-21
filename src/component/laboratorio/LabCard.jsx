import React from 'react'

const studies = [{
    Ranking: 1,
    Estudio: "17 HIDROXICORTICOSTEROIDES",
    Filtro_1: "",
    Filtro_2: "",
    Descripcion: "Recolectar orina de 24 h. Eliminar la primera micción de la mañana y a partir de la segunda micción recolectar en un frasco limpio sin conservador durante todo el día hasta la primera micción del día siguiente, manteniendo la muestra refrigerada durante la recolección.",
    Preparacion_Estudio: "",
    Dias_de_Resultado: "",
    Precio: "537.00",
    Promocion: "no",
    Pct_Promocion: "",
    Precio_Promocions: ""
  }, {
    Ranking: 1,
    Estudio: "17 HIDROXICORTICOSTEROIDES",
    Filtro_1: "",
    Filtro_2: "",
    Descripcion: "Recolectar orina de 24 h. Eliminar la primera micción de la mañana y a partir de la segunda micción recolectar en un frasco limpio sin conservador durante todo el día hasta la primera micción del día siguiente, manteniendo la muestra refrigerada durante la recolección.",
    Preparacion_Estudio: "",
    Dias_de_Resultado: "",
    Precio: "537.00",
    Promocion: "no",
    Pct_Promocion: "",
    Precio_Promocions: ""
  },
  {
    Ranking: 1,
    Estudio: "17 HIDROXICORTICOSTEROIDES",
    Filtro_1: "",
    Filtro_2: "",
    Descripcion: "Recolectar orina de 24 h. Eliminar la primera micción de la mañana y a partir de la segunda micción recolectar en un frasco limpio sin conservador durante todo el día hasta la primera micción del día siguiente, manteniendo la muestra refrigerada durante la recolección.",
    Preparacion_Estudio: "",
    Dias_de_Resultado: "",
    Precio: "537.00",
    Promocion: "no",
    Pct_Promocion: "",
    Precio_Promocions: ""
  },
]


const includedFeatures = [
    'Private forum access',
    'Member resources',
    'Entry to annual conference',
    'Official member t-shirt',
  ]

  
const LabCard = () => {
  return (  
  <>
  {studies.map(s=>(
          <div className="relative  my-6 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-lg  overflow-hidden border-2 border-sky-500 rounded-lg  shadow-lg lg:flex lg:max-w-none">
            <div className="flex-1 px-6 py-8 lg:p-12">
              <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight"><u>{studies[0].Estudio}</u></h3>
              <p className="mt-6 text-base text-gray-500">
                  {studies[0].Descripcion}
              </p>
              <div className="mt-8">
                <div className="flex items-center">
                  <h4 className="flex-shrink-0 pr-4 text-base font-semibold text-indigo-600">
                    What's included
                  </h4>
                  <div className="flex-1 border-t-2 border-gray-200" />
                </div>
                <ul role="list" className="mt-8 space-y-5 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5 lg:space-y-0">
                  {includedFeatures.map((feature) => (
                    <li key={feature} className="flex items-start lg:col-span-1">
                      <div className="flex-shrink-0">
                      </div>
                      <p className="ml-3 text-sm text-gray-700">{feature}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-gray-50 py-8 px-6 text-center lg:flex lg:flex-shrink-0 lg:flex-col lg:justify-center lg:p-12">
              <p className="text-lg font-medium leading-6 text-gray-900">Precio</p>
              <div className="mt-4 flex items-center justify-center text-5xl font-bold tracking-tight text-gray-900">
                <span>${studies[0].Precio}</span>
              </div>
              <p className="mt-4 text-sm">
                <a href="#" className="font-medium text-gray-500 underline">
                  Learn about our membership policy
                </a>
              </p>
              <div className="mt-6">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="flex items-center justify-center rounded-md border border-transparent bg-gray-800 px-5 py-3 text-base font-medium text-white hover:bg-gray-900"
                  >
                    Get Access
                  </a>
                </div>
              </div>
              <div className="mt-4 text-sm">
                <a href="#" className="font-medium text-gray-900">
                  Get a free sample <span className="font-normal text-gray-500">(20MB)</span>
                </a>
              </div>
            </div>
          </div>
        </div>
  ))}
  </>


  )
}

export default LabCard;