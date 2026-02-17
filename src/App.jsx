import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import CallToAction from '@/components/CallToAction';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

function App() {
  return (
    <>
      <Helmet>
        <title>Vega Forero Ingeniería - Soluciones Integrales en Ingeniería Civil y Eléctrica</title>
        <meta name="description" content="Empresa especializada en diseño estructural, cálculos de ingeniería, supervisión técnica e instalaciones eléctricas. Más de 8 años de experiencia en Colombia." />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Header />
        <Hero />
        <Services />
        <About />
        <CallToAction />
        <ContactSection />
        <Footer />
        <WhatsAppButton />
        <Toaster />
      </div>
    </>
  );
}

export default App;