import React from 'react';
import {
  BrowserRouter as Router,
  Route, Routes
} from "react-router-dom";


import ContactFormPage from './page/ContactForm';
import LaboratorioPage from './page/LaboratorioPage';
import MainPage from './page/MainPage'
import NosotrosPage from './page/NosotrosPage';
import RentaConsultorioPage from './page/RentaConsultorio.Page';
import ServiciosMedicosPage from './page/ServiciosMedicosPage';
import VentaConsultorioPage from './page/VentaConsultorio.Page';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<MainPage />} />
        <Route exact path='/' element={<MainPage />} />
        <Route exact path='/aviso_de_privacidad' element={<MainPage />} />
        <Route exact path='/venta_consultorios' element={<VentaConsultorioPage />} />
        <Route exact path='/renta_consultorios' element={<RentaConsultorioPage />} />
        <Route exact path='/servicios_medicos' element={<ServiciosMedicosPage />} />
        <Route exact path='/laboratorio' element={<LaboratorioPage />} />
        <Route exact path='/nosotros' element={<NosotrosPage />} />
        <Route exact path='/directorio_medico' element={<RentaConsultorioPage />} />
        <Route exact path='/contacto' element={<ContactFormPage />} />
      </Routes>
    </Router>
  );
}

export default App;
