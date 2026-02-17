import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Wrench, Target, Briefcase, Box } from 'lucide-react';

const services = [
  {
    icon: Building2,
    title: "Diseño y Cálculos Estructurales",
    description: "Diseño, análisis y cálculo de estructuras de concreto, acero y madera para proyectos residenciales, comerciales e industriales, garantizando el cumplimiento de normativas."
  },
  {
    icon: Wrench,
    title: "Supervisión Técnica",
    description: "Supervisión y control de calidad en obra, garantizando el cumplimiento de especificaciones técnicas."
  },
  {
    icon: Briefcase,
    title: "Gerencia de Proyectos Mediante Metodología PMBOOK",
    description: "Gestión profesional de proyectos aplicando las mejores prácticas del PMI, garantizando eficiencia y control en cada fase."
  },
  {
    icon: Box,
    title: "Metodología BIM en Nuestros Proyectos",
    description: "Implementación de Building Information Modeling para optimizar diseño, construcción y gestión de proyectos."
  },
  {
    icon: Target,
    title: "Consultoría Especializada",
    description: "Asesoría técnica integral en proyectos de ingeniería civil y eléctrica."
  }
];

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

function Services() {
  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          {...fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nuestros <span className="gradient-text">Servicios</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos soluciones integrales en ingeniería civil y eléctrica, 
            adaptadas a las necesidades específicas de cada proyecto.
          </p>
          <div className="section-divider mx-auto mt-8"></div>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white p-8 rounded-xl shadow-lg card-hover border border-gray-100"
            >
              <div className="gradient-orange w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <service.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Services;