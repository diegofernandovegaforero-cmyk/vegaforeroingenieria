import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

function Footer() {
  const contactPhone = "+57 3212118447";
  const contactEmail = "vegaforeroingenieria@gmail.com";
  const contactOffice = "Huila, Colombia";

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="https://storage.googleapis.com/hostinger-horizons-assets-prod/60c29e2f-86d2-4e67-b6c6-423241897530/c90855d27558fcbe3ae69b0dd9cfcdb8.jpg" 
                alt="Vega Forero Ingeniería Logo" 
                className="h-10 w-auto"
              />
              <div>
                <span className="text-lg font-bold">Vega Forero</span>
                <p className="text-sm text-gray-400">Ingeniería SAS</p>
              </div>
            </div>
            <p className="text-gray-400">
              Soluciones integrales en ingeniería civil y eléctrica con más de 8 años de experiencia.
            </p>
          </div>

          <div>
            <span className="text-lg font-semibold mb-4 block">Servicios</span>
            <ul className="space-y-2 text-gray-400">
              <li>Diseño Estructural</li>
              <li>Cálculos de Ingeniería</li>
              <li>Supervisión Técnica</li>
              <li>Instalaciones Eléctricas</li>
            </ul>
          </div>

          <div>
            <span className="text-lg font-semibold mb-4 block">Contacto</span>
            <div className="space-y-2 text-gray-400">
              <p className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                {contactPhone}
              </p>
              <p className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                {contactEmail}
              </p>
              <p className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                {contactOffice}
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Vega Forero Ingeniería SAS. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;