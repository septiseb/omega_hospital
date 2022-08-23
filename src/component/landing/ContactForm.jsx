import React, { useState } from 'react';
import  axios from 'axios';


const ContactForm = () => {

  const [objectForm, setObjectForm] = useState({firstName:"", lastName:"",email:"",phone:"",status:"Cita",howCanWeHelp:""});

  console.log(objectForm);

  const handleChangeForm = (event) =>{
      setObjectForm(prevProps=>({...prevProps,[event.target.name] : event.target.value}))
  }

  const submitForm = (event) =>{
    event.preventDefault();
    setObjectForm({firstName:"", lastName:"",email:"",phone:"",status:"Cita",howCanWeHelp:""} );
  }

  

  return (
    <div className="relative bg-white">
      <div className="lg:absolute lg:inset-0">
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-contain lg:absolute lg:h-full"
            src={require("../../utils/img/laboratorio_info.jpeg")}
            alt="Laboratorios Hospital Omega San Juan del Rio"
          />
        </div>
      </div>
      <div className="relative py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-32 lg:grid lg:grid-cols-2">
        <div className="lg:pr-8">
          <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">¡Queremos saber de ti!</h2>
            <p className="mt-4 text-lg text-gray-500 sm:mt-3">
              ¿Tienes alguna duda, deseas información o quieres enviarnos un comentario? Llena el siguiente formulario o llamanos al 442-582-3235:
            </p>
            <form onSubmit={submitForm}  method="POST" className="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
              <div>
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                  Nombre
                </label>
                <div className="mt-1">
                  <input
                    onChange={handleChangeForm}
                    value={objectForm.firstName}
                    type="text"
                    name="firstName"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full shadow-sm sm:text-sm focus:ring-sky-500 focus:border-sky-500 border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                  Apellido
                </label>
                <div className="mt-1">
                  <input
                    onChange={handleChangeForm}
                    value={objectForm.lastName}
                    type="text"
                    name="lastName"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full shadow-sm sm:text-sm focus:ring-sky-500 focus:border-sky-500 border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <div className="flex justify-between">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Correo
                  </label>
                  <span id="phone-description" className="text-sm text-gray-500">
                    Opcional
                  </span>
                </div>
                <div className="mt-1">
                  <input
                    onChange={handleChangeForm}
                    value={objectForm.email}
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full shadow-sm sm:text-sm focus:ring-sky-500 focus:border-sky-500 border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Teléfono
                </label>
                <div className="mt-1">
                  <input
                    onChange={handleChangeForm}
                    value={objectForm.phone}
                    type="text"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    aria-describedby="phone-description"
                    className="block w-full shadow-sm sm:text-sm focus:ring-sky-500 focus:border-sky-500 border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <div className="flex justify-between">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Asunto
                  </label>
                </div>
                <div className="mt-1">
                  <select 
                  onChange={handleChangeForm}
                  value={objectForm.status}
                  id="status" 
                  name="status"
                  className="block w-full shadow-sm sm:text-sm focus:ring-sky-500 focus:border-sky-500 border-gray-300 rounded-md"
                  >
                    <option value="Cita">Cita</option>
                    <option value="Comentario_Sobre_Servicio">Comentario sobre servicio</option>
                    <option value="Cotizacion">Cotización</option>
                    <option value="Aseguradora">Aseguradora</option>
                    <option value="Otros">Otros</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-2">
                <div className="flex justify-between">
                  <label htmlFor="how-can-we-help" className="block text-sm font-medium text-gray-700">
                    ¿Como te podemos ayudar?
                  </label>
                  <span id="how-can-we-help-description" className="text-sm text-gray-500">
                    Max. 500 caracteres
                  </span>
                </div>
                <div className="mt-1">
                  <textarea
                    onChange={handleChangeForm}
                    value={objectForm.howCanWeHelp}
                    id="how-can-we-help"
                    name="howCanWeHelp"
                    aria-describedby="how-can-we-help-description"
                    rows={4}
                    className="block w-full shadow-sm sm:text-sm focus:ring-sky-500 focus:border-sky-500 border border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="text-right sm:col-span-2">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm