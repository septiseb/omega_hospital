import React from "react";
import { OfficeBuildingIcon, PhoneIcon } from "@heroicons/react/solid";
import { MdLocalHospital } from "react-icons/md";

const DoctorCard = ({ doctors }) => {
  return (
    <>
      <ul className="mx-8 my-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {doctors.map((doctor, idx) => (
          <li
            key={idx}
            className="col-span-1 bg-white rounded-lg border-sky-200 border shadow divide-y divide-gray-200 text-wrap"
          >
            <div className="w-full flex items-center justify-between p-6 space-x-4 text-wrap">
              <MdLocalHospital className="w-8 h-8 flex-shrink-0 text-sky-600" />
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3">
                  <h3 className="text-gray-900 text-lg font-medium text-wrap w-full sm:w-auto">
                    {doctor.Nombre} {doctor.Apellido}
                  </h3>
                  <span className="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                    {doctor.Cedula}
                  </span>
                </div>
                <p className="mt-1 text-gray-800 text-m italic text-wrap w-full sm:w-auto">
                  {doctor.Especialidad}
                  {doctor.Subespecialidad
                    ? " en " + doctor.Subespecialidad
                    : null}
                </p>
                <p className="mt-2 text-gray-500 text-sm overflow-hidden h-10 text-wrap w-full sm:w-auto">
                  {doctor.Descripcion}
                </p>
              </div>
            </div>
            <div>
              <div className="-mt-px flex divide-x divide-gray-200">
                <div className="w-0 flex-1 flex">
                  <div className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500">
                    <OfficeBuildingIcon
                      className="w-5 h-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <div className="flex flex-col">
                      <span className="ml-3">Consultorio:</span>
                      <span className="ml-3 text-center">
                        {doctor.Consultorio}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="-ml-px w-0 flex-1 flex">
                  <a
                    href={`tel:${doctor.Telefono}`}
                    className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                  >
                    <PhoneIcon
                      className="w-5 h-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-3">Llamar</span>
                  </a>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default DoctorCard;
