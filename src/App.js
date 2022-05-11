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

function App() {
  return (
      <Router>
        <Routes>
          <Route exact path='/' element={<MainPage />} />
          <Route exact path='/aviso-de-privacidad' element={<MainPage />} />
          <Route exact path='/venta-consultorios' element={<VentaConsultorioPage />} />
          <Route exact path='/renta-consultorios' element={<RentaConsultorioPage />} />
          <Route exact path='/servicios-medicos' element={<ServiciosMedicosPage />} />
          <Route exact path='/laboratorio' element={<LaboratorioPage />} />
          <Route exact path='/nosotros' element={<NosotrosPage />} />
          <Route exact path='/contacto' element={<ContactFormPage />} />
        </Routes>
      </Router>
  );
}

export default App;
