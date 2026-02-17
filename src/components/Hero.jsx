import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail } from 'lucide-react'; // Import Phone and Mail for button
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast'; // Import toast

const stats = [{
  number: "150+",
  label: "Proyectos Completados"
}, {
  number: "8+",
  label: "Años de Experiencia"
}, {
  number: "100%",
  label: "Clientes Satisfechos"
}, {
  number: "24/7",
  label: "Soporte Técnico"
}];
const fadeInUp = {
  initial: {
    opacity: 0,
    y: 60
  },
  animate: {
    opacity: 1,
    y: 0
  },
  transition: {
    duration: 0.6
  }
};
function Hero() {
  const handleToastClick = () => {
    toast({
      title: "🚧 Esta funcionalidad aún no está implementada",
      description: "¡Pero no te preocupes! Puedes solicitarla en tu próximo mensaje 🚀"
    });
  };
  return <section id="inicio" className="pt-20 pb-16 hero-pattern">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8
        }} className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Soluciones de{' '}
                <span className="gradient-text">Ingeniería</span>{' '}
                de Vanguardia
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">Somos especialistas en diseño y construcción. Gerenciamos y llevamos a la culminación con éxito todo tipo de proyectos de ingeniería civil </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={handleToastClick} size="lg" className="gradient-orange text-white hover:opacity-90 group">
                Iniciar Proyecto
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button onClick={handleToastClick} variant="outline" size="lg" className="border-orange-500 text-orange-500 hover:bg-orange-50">
                Ver Servicios
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              {stats.map((stat, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: 0.2 + index * 0.1
            }} className="text-center">
                  <div className="text-3xl font-bold gradient-text">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>)}
            </div>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          x: 50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="relative">
            <div className="relative z-10">
              <img className="w-full h-auto rounded-2xl shadow-2xl" alt="Proyecto de ingeniería estructural moderno" src="https://images.unsplash.com/photo-1568201635633-989f64b31c57" />
            </div>
            <div className="absolute -top-4 -right-4 w-full h-full gradient-orange rounded-2xl opacity-20"></div>
          </motion.div>
        </div>
      </div>
    </section>;
}
export default Hero;