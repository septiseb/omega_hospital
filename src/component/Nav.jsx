import React, { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import {
    MenuIcon,
    XIcon,
} from '@heroicons/react/outline'
import { Icon } from '@iconify/react';


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const solutions = [
    {
        name: 'Urgencias',
        href: '/servicios_medicos#urgencia',
        icon: <Icon icon="medical-icon:i-ambulance" className="h-6 w-6" aria-hidden="true" />,
    },
    {
        name: 'Laboratorio',
        href: '/servicios_medicos#laboratorios',
        icon: <Icon icon="medical-icon:i-laboratory" className="h-6 w-6" aria-hidden="true" />,
    },
    { name: 'Quirófano', href: '/servicios_medicos#quirofano', icon: <Icon icon="medical-icon:i-surgery" className="h-6 w-6" aria-hidden="true" /> },
    {
        name: 'Farmacia',
        href: '/servicios_medicos#farmacia',
        icon: <Icon icon="medical-icon:i-health-services" className="h-6 w-6" aria-hidden="true" />,
    },
]

const Nav = () => {
    return (
        <>
            <header>
                <nav className="relative bg-gray-100">
                    <Popover className="relative ">
                        <div className="flex items-center max-w-7xl mx-auto px-12 py-4 sm:px-6 md:justify-center md:space-x-16 lg:px-12">
                            <div className="flex justify-end item-end pr-16">
                                <a href="/">
                                    <span className="sr-only">Omega Hospital</span>

                                    <img
                                        className="h-8 sm:h-12"
                                        src={require("../utils/img/omega_logo.png")}
                                        alt=""
                                    />
                                </a>
                            </div>
                            <div className="flex justify-center -my-2 md:hidden" >
                                <Popover.Button className="bg-white rounded-md py-4 px-8 inline-flex items-center justify-center text-black-400 hover:text-black-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-600">
                                    <span className="sr-only">Abrir Menu</span>
                                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                                </Popover.Button>
                            </div>
                            <Popover.Group as="nav" className="flex justify-center hidden md:flex space-x-10">
                                <Popover className="relative">
                                    {({ open }) => (
                                        <>
                                            <Popover.Button
                                                className={classNames(
                                                    open ? 'text-black-900' : 'text-black-400',
                                                    'group bg-bg-sky-200 rounded-md inline-flex items-center text-base font-medium hover:text-black-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-600'
                                                )}
                                            >
                                                <span className="">Servicios Médicos</span>
                                                <ChevronDownIcon
                                                    className={classNames(
                                                        open ? 'text-black-400' : 'text-black-400',
                                                        'ml-2 h-5 w-5 group-hover:text-black-400'
                                                    )}
                                                    aria-hidden="true"
                                                />
                                            </Popover.Button>

                                            <Transition
                                                as={Fragment}
                                                enter="transition ease-out duration-200"
                                                enterFrom="opacity-0 translate-y-1"
                                                enterTo="opacity-100 translate-y-0"
                                                leave="transition ease-in duration-150"
                                                leaveFrom="opacity-100 translate-y-0"
                                                leaveTo="opacity-0 translate-y-1"
                                            >
                                                <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-2xl lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                                                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                                        <div className="relative grid gap-6 bg-sky-100 px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                                                            {solutions.map((item) => (
                                                                <a
                                                                    key={item.name}
                                                                    href={item.href}
                                                                    className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                                                                >
                                                                    <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-sky-400 to-sky-600 text-white sm:h-12 sm:w-12">
                                                                        {item.icon}
                                                                    </div>
                                                                    <div className="ml-4">
                                                                        <p className="text-base font-medium text-black-900">{item.name}</p>
                                                                    </div>
                                                                </a>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </Popover.Panel>
                                            </Transition>
                                        </>
                                    )}
                                </Popover>

                                <a href="/laboratorio" className="text-base font-medium text-black-400 hover:text-black-900">
                                    Laboratorio
                                </a>
                                <a href="/nosotros" className="text-base font-medium text-black-400 hover:text-black-900">
                                    Nosotros
                                </a>
                                <a href="/contacto" className="text-base font-medium text-black-400 hover:text-black-900">
                                    Contacto
                                </a>
                            </Popover.Group>

                        </div>

                        <Transition
                            as={Fragment}
                            enter="duration-200 ease-out"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="duration-100 ease-in"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Popover.Panel
                                focus
                                className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                            >
                                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                                    <div className="pt-5 pb-6 px-5">
                                        <div className="flex items-center justify-between">
                                            <div className="-mr-2">
                                                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-black-400 hover:text-black-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-600">
                                                    <span className="sr-only">Close menu</span>
                                                    <XIcon className="h-6 w-6" aria-hidden="true" />
                                                </Popover.Button>
                                            </div>
                                        </div>
                                        <div className="mt-6">
                                            <nav className="grid grid-cols-1 gap-7">
                                                {solutions.map((item) => (
                                                    <a
                                                        key={item.name}
                                                        href={item.href}
                                                        className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                                                    >
                                                        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-sky-400 to-sky-600 text-white">
                                                            {item.icon}
                                                        </div>
                                                        <div className="ml-4 text-base font-medium text-black-900">{item.name}</div>
                                                    </a>
                                                ))}
                                            </nav>
                                        </div>
                                    </div>
                                    <div className="py-6 px-5">
                                        <div className="grid grid-cols-2 gap-4">
                                            <a href="/laboratorio" className="text-base font-medium text-black-900 hover:text-black-700">
                                                Laboratorio
                                            </a>
                                            <a href="/nosotros" className="text-base font-medium text-black-900 hover:text-black-700">
                                                Nosotros
                                            </a>
                                            <a href="/contacto" className="text-base font-medium text-black-900 hover:text-black-700">
                                                Contacto
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </Popover>
                </nav>
            </header>
        </>
    );
};

export default Nav;