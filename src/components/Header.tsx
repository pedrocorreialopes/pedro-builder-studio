import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("inicio")}
            className="text-2xl font-bold gradient-text hover:scale-105 transition-smooth"
          >
            <i className="fas fa-code mr-2"></i>
            Pedro Dev
          </button>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("projetos")}
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Projetos
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Contato
            </button>
            <Button
              onClick={() => scrollToSection("precos")}
              className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-soft hover:shadow-hover transition-smooth"
            >
              Ver Preços
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-2xl text-foreground"
          >
            <i className={`fas ${isMobileMenuOpen ? "fa-times" : "fa-bars"}`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden pb-6 animate-fade-in">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-foreground hover:text-primary transition-smooth font-medium text-left py-2"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("projetos")}
                className="text-foreground hover:text-primary transition-smooth font-medium text-left py-2"
              >
                Projetos
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="text-foreground hover:text-primary transition-smooth font-medium text-left py-2"
              >
                Contato
              </button>
              <Button
                onClick={() => scrollToSection("precos")}
                className="bg-accent hover:bg-accent/90 text-accent-foreground w-full"
              >
                Ver Preços
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
