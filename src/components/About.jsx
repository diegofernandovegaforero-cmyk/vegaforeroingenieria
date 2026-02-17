import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
function About() {
  const handleToastClick = () => {
    toast({
      title: "🚧 Esta funcionalidad aún no está implementada",
      description: "¡Pero no te preocupes! Puedes solicitarla en tu próximo mensaje 🚀"
    });
  };
  return <section id="nosotros" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }}>
            <img className="w-full h-auto rounded-2xl shadow-xl" alt="Equipo de ingenieros trabajando en oficina moderna" src="https://images.unsplash.com/photo-1610187475479-3e5d67195c83" />
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          x: 50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Sobre <span className="gradient-text">Nosotros</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Vega Forero Ingeniería SAS nace en agosto de 2016, siendo un proyecto familiar 
                conformado en la ciudad de Pitalito, Huila. Es la visión de Marisol Forero Guzmán, 
                de enaltecer el legado familiar y ofrecer servicios de calidad, lo que brinda los 
                cimientos iniciales para que el ingeniero civil Alejandro Vega Forero solidifique la empresa.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">Somos una empresa comprometida con la ingeniería de calidad, dedicada a la prestación de servicios de construcción, remodelación, adecuación y consultoría en el sector público. Paralelamente, desarrollamos proyectos en el sector privado, garantizando altos estándares de calidad, seguridad y responsabilidad ambiental. Nuestros servicios incluyen vivienda unifamiliar, vivienda multifamiliar y diseño y construcción.</p>
              <p className="text-lg text-gray-600 leading-relaxed font-semibold">
                En el sector privado nuestros productos son: Vivienda Familiar, Vivienda Multifamiliar, Diseño y Construcción de Vivienda. Somos Pioneros en esta Forma.
              </p>
            </div>

            <div className="space-y-4">
              {["Equipo multidisciplinario de ingenieros certificados", "Tecnología de vanguardia en diseño y cálculo", "Cumplimiento estricto de normativas NSR-10 y RETIE", "Atención personalizada y seguimiento continuo"].map((item, index) => <motion.div key={index} initial={{
              opacity: 0,
              x: 20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.6,
              delay: index * 0.1
            }} viewport={{
              once: true
            }} className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-orange-500 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </motion.div>)}
            </div>

            <Button onClick={handleToastClick} size="lg" className="gradient-orange text-white hover:opacity-90">
              Conocer Más
            </Button>
          </motion.div>
        </div>
      </div>
    </section>;
}
export default About;