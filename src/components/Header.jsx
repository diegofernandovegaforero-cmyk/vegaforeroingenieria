import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

function Header() {
  const handleContactClick = () => {
    toast({
      title: "🚧 Esta funcionalidad aún no está implementada",
      description: "¡Pero no te preocupes! Puedes solicitarla en tu próximo mensaje 🚀",
    });
  };

  return (
    <motion.header 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="https://storage.googleapis.com/hostinger-horizons-assets-prod/60c29e2f-86d2-4e67-b6c6-423241897530/c90855d27558fcbe3ae69b0dd9cfcdb8.jpg" 
              alt="Vega Forero Ingeniería Logo" 
              className="h-12 w-auto"
            />
            <div>
              <h2 className="text-xl font-bold text-gray-900">Vega Forero</h2>
              <p className="text-sm text-gray-600">Ingeniería SAS</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-orange-500 transition-colors">Inicio</a>
            <a href="#servicios" className="text-gray-700 hover:text-orange-500 transition-colors">Servicios</a>
            <a href="#nosotros" className="text-gray-700 hover:text-orange-500 transition-colors">Nosotros</a>
            <a href="#contacto" className="text-gray-700 hover:text-orange-500 transition-colors">Contacto</a>
          </nav>

          <Button 
            onClick={handleContactClick}
            className="gradient-orange text-white hover:opacity-90"
          >
            Cotizar Proyecto
          </Button>
        </div>
      </div>
    </motion.header>
  );
}

export default Header;