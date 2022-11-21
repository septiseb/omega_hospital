import React from 'react';

const MainSection = () => {
    return (
        <main>
          <div>
            {/* Hero card */}
            <div className="relative">
              <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gray-100" />
              <div className="mx-auto">
                <div className="relative shadow-xl sm:overflow-hidden ">
                  <div className="absolute inset-0">
                    <img
                      className="h-full w-full object-cover"
                      src={require("../../utils/img/dir_portada_page.jpg")}
                      alt="People working on laptops"
                    />
                    <div className="absolute inset-0 bg-sky-700 mix-blend-multiply" />
                  </div>
                  <div className="relative px-4 py-12 sm:px-6 sm:py-16 lg:py-22 lg:px-8">
                    <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                      <span className="block text-white">Directorio</span>
                    </h1>
                    <p className="mx-auto mt-6 max-w-lg text-center text-xl text-indigo-100 sm:max-w-3xl">
                    Encuentra a tu doctor dentro de la gran variedad de especialidades y subespecialidades que Omega Centro Médico tiene para ti:
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      );
};

export default MainSection;