import React from 'react';
import VentaConsultorio from '../component/ventacompra/VentaConsultorio'
import AdvVenta from '../component/ventacompra/AdvVenta'
import ConsultoriosDetail from '../component/ventacompra/ConsultoriosDetail'
import BubbleWhats from '../component/BubbleWhats';
import MapHospital from '../component/MapHospital';
import {  OfficeBuildingIcon, ColorSwatchIcon, CurrencyDollarIcon, EmojiHappyIcon, CheckCircleIcon, MapIcon } from '@heroicons/react/outline'
import Seo from '../component/SEO';


const features = [
  {
    name: 'Ubicación Privilegiada y de Alta Afluencia',
    description: 'Garantiza el máximo alcance de tus servicios médicos adquiriendo un consultorio en una zona con alta afluencia y gran accesibilidad vehicular.',
    icon: MapIcon,
  },
  {
    name: 'Terminados de Alta Calidad y Durabilidad',
    description:
      'Brinda más valor a pacientes con un consultorio de excelentes terminados y accesorios de gran nivel que mejoren la percepción de tus servicios.',
    icon: CheckCircleIcon,
  },
  {
    name: 'Amplio Catálogo de Servicios Hospitalarios',
    description:
      'Mejora la cobertura del consultorio con quirófanos, laboratorios, rayos X, terapia intesiva, área de vacunación, ultrasonidos, UCIN y más.',
    icon: ColorSwatchIcon,
  },
  {
    name: 'Instalaciones de Primer Nivel',
    description:
      'Accede a instalaciones modernas y amenidades más cómodas, pensadas en brindar la máxima ergonomía para los médicos y sus pacientes.',
    icon: OfficeBuildingIcon,
  },
  {
    name: 'Flexibilidad de Presupuesto',
    description:
      'Elimina la pesada carga de una inversión en bienes raices y accede a un modelo de renta para dar más flexibilidad a tu presupuesto.',
    icon: EmojiHappyIcon
  },
  {
    name: 'Beneficios Fiscales',
    description:
      'Tranfiere el pago de la renta de tu consultorio médico a tus gastos operacionales y disminuye la carga fiscal de tus obligaciones.',
    icon: CurrencyDollarIcon,
  }
]

const keywords = ["Renta de consultorios", "Renta de consultorio", "Renta de consultorio medico", "Renta de consultorio en hospital", "Renta de consultorio en querétaro", "Renta de consultorio en san juan", "Renta de consultorio en san juan del rio", "Alquiler de consultorio", "Alquiler de consultorio médico", "Alquiler de consultorio en hospital", "Alquiler de consultorio en querétaro", "Alquiler de consultorio en san juan", "Alquiler de consultorio en san juan del rio", "Alquiler de consultorio dental", "Alquiler de consultorio odontologico", "Alquiler de consultorio amueblado"]


const RentaConsultorioPage = () => {
  return (
    <div>
      <Seo
        title="Renta de consultorios médicos | Instalaciones de primera y la mejor ubicación"
        description="Renta de consultorios médicos en Querétaro. Instalaciones de primer nivel en una ubicación inigualable. Aumenta el alcance de tus servicios médicos en Omega Centro Médico."
        pathSlug="renta_consultorios"
        keywords={keywords}
      />
      <div>
        <VentaConsultorio
          subtitle="Impulsa tu patrimonio y aumenta el impacto de tus servicios médicos en los consultorios de Omega Centro Médico."
          benefit={["Pregunta por la disponibilidad y opciones de renta."]}
        >
          Renta de consultorios
        </VentaConsultorio>
        <AdvVenta
          title="¿Por qué rentar un consultorio en Omega Centro Médico?"
          features={features}
        />
        <ConsultoriosDetail
          title="Conoce los consultorios médicos en renta"
          subtitle="Descubre y elige el consultorio médico que mejor se adapte a tus necesidades:"
        />
        <BubbleWhats />
        <div className="mb-10">
          <MapHospital />
        </div>
        <footer className="bg-gray flex justify-center h-10">
          <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
            &copy; 2022, Omega Centro Médico.
            <br />
            <u className="text-center flex justify-center">
              <a href={require("../utils/Aviso_Privacidad_Omega.pdf")}>
                Aviso de Privacidad
              </a>
            </u>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default RentaConsultorioPage;