import React from 'react';

const HeaderMedService = () => {
    return (
        <main>
          <div>
            {/* Hero card */}
            <div className="relative">
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gray-100" />
              <div className="mx-auto">
                <div className="relative shadow-xl sm:overflow-hidden ">
                  <div className="absolute inset-0">
                    <img
                      className="h-full w-full object-cover"
                      src={require("../../utils/img/ser_portada_page.jpg")}
                      alt="People working on laptops"
                    />
                    <div className="absolute inset-0 bg-sky-700 mix-blend-multiply" />
                  </div>
                  <div className="relative px-4 py-12 sm:px-6 sm:py-16 lg:py-22 lg:px-8">
                    <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                      <span className="block text-white">Servicios</span>
                    </h1>
                    <p className="mx-auto mt-6 max-w-lg text-center text-xl text-indigo-100 sm:max-w-3xl">
                    Todos los servicios disponibles que contamos dentro de las instalaciones
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      );
};

export default HeaderMedService;