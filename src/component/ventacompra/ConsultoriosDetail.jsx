import React from 'react';

let urlWame = "https://wa.me/5214425823235?text="
const consultorio = [
    {
        name: 'Consultorio 205',
        m2: '22.75 m2',
        imageUrl:
            require("../../utils/img/consultorio/consultorio.jpeg"),
        plano: require('../../utils/img/consultorio/consultorio_205.pdf'),
        available:true,
        wameUrl: "Me%20gustaria%20tener%20más%20información%20sobre%20el%20Consultorio%20205",
    },
    {
        name: 'Consultorio 320',
        m2: '22.87 m2',
        imageUrl:
            require("../../utils/img/consultorio/consultorio.jpeg"),
        plano: require('../../utils/img/consultorio/consultorio_320.pdf'),
        available:true,
        wameUrl: "Me%20gustaria%20tener%20más%20información%20sobre%20el%20Consultorio%20320",
    },
    {
        name: 'Consultorio 321',
        m2: '22.87 m2',
        imageUrl:
            require("../../utils/img/consultorio/consultorio.jpeg"),
        plano: require('../../utils/img/consultorio/consultorio_321.pdf'),
        available:true,
        wameUrl: "Me%20gustaria%20tener%20más%20información%20sobre%20el%20Consultorio%20321",
    },
    {
        name: 'Consultorio 322',
        m2: '23.70 m2',
        imageUrl:
            require("../../utils/img/consultorio/consultorio.jpeg"),
        plano: require('../../utils/img/consultorio/consultorio_322.pdf'),
        available:true,
        wameUrl: "Me%20gustaria%20tener%20más%20información%20sobre%20el%20Consultorio%20322",
    },
    {
        name: 'Consultorio 323',
        m2: '35.70 m2',
        imageUrl:
            require("../../utils/img/consultorio/consultorio.jpeg"),
        plano: require('../../utils/img/consultorio/consultorio_323.pdf'),
        available:true,
        wameUrl: "Me%20gustaria%20tener%20más%20información%20sobre%20el%20Consultorio%20323",
    },
    {
        name: 'Consultorio 324',
        m2: '34.43 m2',
        imageUrl:
            require("../../utils/img/consultorio/consultorio.jpeg"),
        plano: require('../../utils/img/consultorio/consultorio_324.pdf'),
        available:true,
        wameUrl: "Me%20gustaria%20tener%20más%20información%20sobre%20el%20Consultorio%20324",
    }
]

const ConsultorioDetail = () => {
    return (
        <div className="bg-white">
            <div className="relative overflow-hidden">
                <div className="absolute inset-y-0 h-full w-full hidden lg:contents" aria-hidden="true">
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
                            className="absolute z-0 left-full transform -translate-y-3/4 -translate-x-1/4 sm:-translate-x-1/2 md:-translate-y-1/2 lg:-translate-x-3/4"
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

                <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
                    <div className="space-y-12">
                        <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
                            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Conoce los consultorios disponibles</h2>
                            <p className="text-xl text-gray-500">
                                Tenemos una variedad de consultorios que se ajustan a tus necesidades, aprovecha nuestra preventa para obtener mejores precios.
                            </p>
                        </div>
                        <ul
                            className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
                        >
                            {consultorio.map((person) => (
                                <li key={person.name} className="z-0">
                                    <div className="space-y-4">
                                        <div className="aspect-w-3 aspect-h-2 ">
                                            <div className="flex justify-center items-center">
                                            <img className="object-cover shadow-lg rounded-lg backdrop-blur-xl drop-shadow-sm z-0"  src={person.imageUrl} alt={person.name} />
                                            <img className="absolute z-40  opacity-50 w-1/3" src={require('../../utils/img/omega_logo.png')} alt="Omega Hospital No Disponible"/>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <div className="text-lg leading-6 font-medium space-y-1">
                                                <h3>{person.name}</h3>
                                                <p className="text-sky-600">{person.m2}</p>
                                            </div>
                                            <ul className="flex space-x-5">
                                                <li>
                                                    <a href={person.plano} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-gray-500">
                                                        <button
                                                            type="button"
                                                            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                                                        >
                                                            Ver Planos
                                                        </button>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href={urlWame + person.wameUrl} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-gray-500">
                                                        <button
                                                            type="button"
                                                            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-sky-700 hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-600"
                                                        >
                                                            Contactanos
                                                        </button>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConsultorioDetail