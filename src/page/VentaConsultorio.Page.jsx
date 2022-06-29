import React from 'react';
import VentaConsultorio from '../component/ventacompra/VentaConsultorio'
import AdvVenta from '../component/ventacompra/AdvVenta'
import ConsultoriosDetail from '../component/ventacompra/ConsultoriosDetail'
import BubbleWhats from '../component/BubbleWhats';
import MapHospital from '../component/MapHospital';
import { MapIcon,CashIcon, OfficeBuildingIcon, CreditCardIcon, ColorSwatchIcon, CheckCircleIcon } from '@heroicons/react/outline'
import Seo from '../component/SEO';

const features = [
    {
      name: 'Gran Retorno de Inversión',
      description: 'Invierte en bienes raices y haz rendir tu capital adquiriendo un consultorio en una zona gran plusvalía con la opción a ofrecerlo en Venta.',
      icon: CashIcon,
    },
    {
      name: 'Opciones Flexibles de Compra',
      description:
        'Aplica a un crédito de hasta 5 años con Santander, y logra obtener flujo de efectivo positivo a partir de que se ocupe el consultorio.',
      icon: CreditCardIcon,
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
        name: 'Ubicación Privilegiada y de Alta Afluencia',
        description:
          'Garantiza el máximo alcance de los servicios médicos adquiriendo un consultorio en una zona con alta afluencia y gran accesibilidad vehicular.',
        icon: MapIcon,
      },
      {
        name: 'Terminados de Alta Calidad y Durabilidad',
        description:
          'Brinda más valor a pacientes con un consultorio de excelentes terminados y accesorios de gran nivel que mejoren la percepción de los servicios.',
        icon: CheckCircleIcon,
      }
  ]

const keywords = ["Venta de consultorios", "Venta de consultorio", "Venta de consultorio medico", "Venta de consultorio en hospital", "Venta de consultorio en querétaro", "Venta de consultorio en san juan", "Venta de consultorio en san juan del rio", "Alquiler de consultorio", "Alquiler de consultorio médico", "Alquiler de consultorio en hospital", "Alquiler de consultorio en querétaro", "Alquiler de consultorio en san juan", "Alquiler de consultorio en san juan del rio", "Alquiler de consultorio dental", "Alquiler de consultorio odontologico", "Alquiler de consultorio amueblado"]

const VentaConsultorioPage = () => {
    return (
        <div>
            <Seo  
            title="Venta de consultorios médicos | Instalaciones de primera y la mejor ubicación"
            description="Venta de consultorios médicos en Querétaro. Gran oportunidad de inversión en uno de los Centro Médicos más modernos del estado. Programa una llamada con nuestros agentes."
             pathSlug="venta_consultorios"
             keywords={keywords}
             />
            <VentaConsultorio 
            subtitle="Invierte en los consultorios médicos más modernos de Querétaro y haz crecer  tu patrimonio con Omega Centro Médico."
            benefit={["¡Apártalo con tan solo $5,000 pesos!","Y obtén la escrituración en Diciembre 2022."]}
            >
                Venta de Consultorios
            </VentaConsultorio>
            <AdvVenta
            title="¿Por qué comprar un consultorio en Omega Centro Médico?"
            features={features}
            />
            <ConsultoriosDetail 
            title="Conoce los consultorios médicos en venta"
            subtitle="Descubre y elige el consultorio médico que mejor se adapte a tus necesidades y apartalo garantizando el mejor precio posible:"
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
    );
};

export default VentaConsultorioPage;