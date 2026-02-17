import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

function ContactSection() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfono",
      info: "+57 3212118447",
      description: "Lunes a Viernes 8:00 AM - 6:00 PM"
    },
    {
      icon: Mail,
      title: "Email",
      info: "vegaforeroingenieria@gmail.com",
      description: "Respuesta en menos de 24 horas"
    },
    {
      icon: MapPin,
      title: "Oficina",
      info: "Huila, Colombia",
      description: "Cita previa requerida"
    }
  ];

  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          {...fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="gradient-text">Contacto</span>
          </h2>
          <p className="text-xl text-gray-600">
            Estamos aquí para ayudarte con tu próximo proyecto de ingeniería
          </p>
          <div className="section-divider mx-auto mt-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {contactInfo.map((contact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg text-center card-hover"
            >
              <div className="gradient-orange w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <contact.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{contact.title}</h3>
              <p className="text-lg font-medium gradient-text mb-2">{contact.info}</p>
              <p className="text-gray-600">{contact.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ContactSection;