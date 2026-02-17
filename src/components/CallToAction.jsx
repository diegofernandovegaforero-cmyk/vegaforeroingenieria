import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

function CallToAction() {
  const phoneNumber = "+57 3212118447";
  const emailAddress = "vegaforeroingenieria@gmail.com";

  const handlePhoneClick = () => {
    window.location.href = `tel:${phoneNumber.replace(/\s/g, '')}`;
    toast({
      title: `Llamando a ${phoneNumber}`,
      description: "¡Conectando con Vega Forero Ingeniería! 📞",
    });
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${emailAddress}`;
    toast({
      title: `Abriendo correo para ${emailAddress}`,
      description: "¡Prepara tu mensaje para Vega Forero Ingeniería! 📧",
    });
  };

  return (
    <section className="py-20 gradient-orange">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            ¿Listo para Iniciar tu Proyecto?
          </h2>
          <p className="text-xl text-white/90 leading-relaxed">
            Contáctanos hoy mismo y recibe una cotización personalizada. 
            Nuestro equipo de expertos está listo para hacer realidad tu visión.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handlePhoneClick}
              size="lg" 
              variant="outline"
              className="bg-white text-orange-500 border-white hover:bg-gray-50"
            >
              <Phone className="mr-2 h-5 w-5" />
              Llamar Ahora
            </Button>
            <Button 
              onClick={handleEmailClick}
              size="lg" 
              variant="outline"
              className="bg-white text-orange-500 border-white hover:bg-gray-50"
            >
              <Mail className="mr-2 h-5 w-5" />
              Enviar Email
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CallToAction;