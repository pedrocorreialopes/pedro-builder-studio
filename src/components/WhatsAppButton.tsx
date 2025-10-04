import { useState } from "react";

const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    const message = encodeURIComponent(
      "Olá! Gostaria de fazer um orçamento para um projeto web."
    );
    window.open(`https://wa.me/5585989002536?text=${message}`, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed bottom-6 right-6 z-50 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full p-4 shadow-glow hover:scale-110 transition-bounce group"
      aria-label="Contato via WhatsApp"
    >
      <i className="fab fa-whatsapp text-3xl"></i>
      {isHovered && (
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-foreground text-background px-4 py-2 rounded-lg whitespace-nowrap text-sm font-medium shadow-soft animate-fade-in">
          Faça um orçamento
        </span>
      )}
    </button>
  );
};

export default WhatsAppButton;
