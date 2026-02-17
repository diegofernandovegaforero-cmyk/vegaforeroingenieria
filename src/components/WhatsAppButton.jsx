import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

function WhatsAppButton() {
  const phoneNumber = "573212118447"; // WhatsApp numbers usually don't need the leading '+'

  const handleWhatsAppClick = () => {
    const whatsappLink = `https://wa.me/${phoneNumber}`;
    window.open(whatsappLink, '_blank');
    toast({
      title: "¡Abriendo WhatsApp!",
      description: "Serás redirigido para chatear con Vega Forero Ingeniería. 💬",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <Button
        onClick={handleWhatsAppClick}
        className="gradient-orange text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300"
        size="lg"
      >
        <MessageCircle className="h-7 w-7" />
        <span className="sr-only">Contactar por WhatsApp</span>
      </Button>
    </motion.div>
  );
}

export default WhatsAppButton;