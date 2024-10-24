import React, { Fragment, useState, useEffect } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import DoctorCard from "./DoctorCard";
import { getDirectory } from "../../services/api/sheets";
import {
  transformArray,
  transformFilter,
} from "../../services/functions/googleTransform";
import { classNames } from "../../services/functions/textFormat";

const FilterTab = () => {
  const [open, setOpen] = useState(false);
  const [filters, setFilters] = useState([]);
  const [doctors, setDoctors] = useState([]);

  const handleChange = (e) => {
    setFilters((prevFilters) =>
      prevFilters.map((filter) => {
        if (filter.id === e.target.name) {
          let options = filter.options.map((option) =>
            option.value === e.target.value
              ? { ...option, checked: !option.checked }
              : option
          );
          return { ...filter, options };
        }
        return filter;
      })
    );
  };

  const onDelete = (obj) => {
    setFilters((prevFilters) =>
      prevFilters.map((filter) => {
        if (filter.options.map((opt) => opt.name).includes(obj.name)) {
          let options = filter.options.map((option) =>
            option.label === obj.label
              ? { ...option, checked: !option.checked }
              : option
          );
          return { ...filter, options };
        }
        return filter;
      })
    );
  };

  useEffect(() => {
    getDirectory().then((r) => {
      const directory = transformArray(r.data.values);
      const filterOption = transformFilter(directory, [
        "Especialidad",
        "Subespecialidad",
      ]);
      setDoctors(directory);
      setFilters(filterOption);
    });
  }, []);

  const actFilter = filters
    .map((filter) => filter.options)
    .flat()
    .filter((filter) => filter.checked);

  return (
    <>
      <div className="bg-white">
        {/* Mobile filter dialog */}
        <Transition.Root show={open} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 sm:hidden"
            onClose={setOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 flex z-40">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-12 flex flex-col overflow-y-auto">
                  <div className="px-4 flex items-center justify-between">
                    <h2 className="text-lg font-medium text-gray-900">
                      Filtros
                    </h2>
                    <button
                      type="button"
                      className="-mr-2 w-10 h-10 bg-white p-2 rounded-md flex items-center justify-center text-gray-400"
                      onClick={() => setOpen(false)}
                    >
                      <span className="sr-only">Cerrar Menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4">
                    {filters.map((section) => (
                      <Disclosure
                        as="div"
                        key={section.name}
                        className="border-t border-gray-200 px-4 py-6"
                      >
                        {({ open }) => (
                          <>
                            <h3 className="-mx-2 -my-3 flow-root">
                              <Disclosure.Button className="px-2 py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400">
                                <span className="font-medium text-gray-900">
                                  {section.name}
                                </span>
                                <span className="ml-6 flex items-center">
                                  <ChevronDownIcon
                                    className={classNames(
                                      open ? "-rotate-180" : "rotate-0",
                                      "h-5 w-5 transform"
                                    )}
                                    aria-hidden="true"
                                  />
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div
                                    key={option.value}
                                    className="flex items-center"
                                  >
                                    <input
                                      id={`filter-mobile-${section.id}-${optionIdx}`}
                                      name={`${section.id}`}
                                      defaultValue={option.value}
                                      type="checkbox"
                                      onChange={handleChange}
                                      defaultChecked={option.checked}
                                      className="h-4 w-4 border-gray-300 rounded text-sky-600 focus:ring-sky-500"
                                    />
                                    <label
                                      htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                      className="ml-3 text-sm text-gray-500"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>
        {/* Filters */}
        <section aria-labelledby="filter-heading">
          <h2 id="filter-heading" className="sr-only">
            Filtros
          </h2>

          {/* Active filters */}
          <div className="bg-gray-100">
            <div className="max-w-7xl mx-auto py-3 px-4 sm:flex sm:items-center sm:px-6 lg:px-8">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Filtros
                <span className="sr-only">, activo</span>
              </h3>

              <div
                aria-hidden="true"
                className="hidden w-px h-5 bg-gray-300 sm:block sm:ml-4"
              />

              <div className="mt-2 sm:mt-0 sm:ml-4">
                <div className="-m-1 flex flex-wrap items-center">
                  {actFilter.map((activeFilter, idx) => (
                    <span
                      key={idx}
                      className="m-1 inline-flex rounded-full border border-gray-200 items-center py-1.5 pl-3 pr-2 text-sm font-medium bg-white text-gray-900"
                    >
                      <span>{activeFilter.label}</span>
                      <button
                        type="button"
                        className="flex-shrink-0 ml-1 h-4 w-4 p-1 rounded-full inline-flex text-gray-400 hover:bg-gray-200 hover:text-gray-500"
                        onClick={() => onDelete(activeFilter)}
                      >
                        <span className="sr-only">
                          Remover filtro para {activeFilter.label}
                        </span>
                        <svg
                          className="h-2 w-2"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 8 8"
                        >
                          <path
                            strokeLinecap="round"
                            strokeWidth="1.5"
                            d="M1 1l6 6m0-6L1 7"
                          />
                        </svg>
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10 bg-white border-b-2 border-gray-300 p-2 mb-4">
            <div className="max-w-7xl mx-auto px-4 flex items-center justify-end sm:px-6 lg:px-8">
              <button
                type="button"
                className="inline-block text-sm font-medium text-gray-700 hover:text-gray-900 sm:hidden"
                onClick={() => setOpen(true)}
              >
                Filtros
              </button>

              <div className="hidden sm:block">
                <div className="flow-root">
                  <Popover.Group className="-mx-4 flex items-center divide-x divide-gray-200">
                    {filters.map((section, sectionIdx) => (
                      <Popover
                        key={sectionIdx}
                        className="px-4 relative inline-block text-left"
                      >
                        <Popover.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                          <span>{section.name}</span>
                          {section.options.filter((option) => option.checked)
                            .length ? (
                            <span className="ml-1.5 rounded py-0.5 px-1.5 bg-gray-200 text-xs font-semibold text-gray-700 tabular-nums">
                              {
                                section.options.filter(
                                  (option) => option.checked
                                ).length
                              }
                            </span>
                          ) : null}
                          <ChevronDownIcon
                            className="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                            aria-hidden="true"
                          />
                        </Popover.Button>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Popover.Panel className="origin-top-right absolute right-0 mt-2 bg-white rounded-md shadow-2xl p-4 ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <form className="space-y-4">
                              {section.options.map((option, optionIdx) => (
                                <div
                                  key={option.value}
                                  className="flex items-center"
                                >
                                  <input
                                    id={`filter-${section.id}-${optionIdx}`}
                                    name={`${section.id}`}
                                    defaultValue={option.value}
                                    type="checkbox"
                                    onChange={handleChange}
                                    defaultChecked={option.checked}
                                    className="h-4 w-4 border-gray-300 rounded text-sky-600 focus:ring-sky-500"
                                  />
                                  <label
                                    htmlFor={`filter-${section.id}-${optionIdx}`}
                                    className="ml-3 pr-6 text-sm font-medium text-gray-900 whitespace-nowrap"
                                  >
                                    {option.label}
                                  </label>
                                </div>
                              ))}
                            </form>
                          </Popover.Panel>
                        </Transition>
                      </Popover>
                    ))}
                  </Popover.Group>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <DoctorCard
        doctors={doctors.filter((doctor) => {
          const filter = filters.reduce((ac, cv, i) => {
            ac[cv.name] = cv.options
              .filter((f) => f.checked)
              .map((f) => f.label);
            return ac;
          }, {});

          for (var key in filter) {
            if (!filter[key].length) continue;
            if (doctor[key] === undefined || !filter[key].includes(doctor[key]))
              return false;
          }
          return true;
        })}
      />
    </>
  );
};

export default FilterTab;
