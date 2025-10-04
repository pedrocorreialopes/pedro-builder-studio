import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 gradient-hero animate-gradient-shift bg-200% -z-10"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Crie qualquer site como um{" "}
            <span className="relative inline-block">
              <span className="relative z-10">profissional</span>
              <span className="absolute bottom-2 left-0 w-full h-4 bg-accent/50 -z-10 transform -skew-x-12"></span>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto font-light">
            Com a interface moderna do nosso construtor, transforme suas ideias em realidade digital
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => scrollToSection("projetos")}
              size="lg"
              className="bg-white text-primary hover:bg-white/90 shadow-glow hover:scale-105 transition-bounce text-lg px-8 py-6"
            >
              <i className="fas fa-rocket mr-2"></i>
              Saiba Mais
            </Button>
            <Button
              onClick={() => scrollToSection("contato")}
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-primary transition-smooth text-lg px-8 py-6"
            >
              <i className="fas fa-play mr-2"></i>
              Experimente Agora
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card rounded-lg p-6 animate-scale-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-foreground/80">Projetos Entregues</div>
            </div>
            <div className="glass-card rounded-lg p-6 animate-scale-in" style={{ animationDelay: "0.4s" }}>
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-foreground/80">Satisfação do Cliente</div>
            </div>
            <div className="glass-card rounded-lg p-6 animate-scale-in" style={{ animationDelay: "0.6s" }}>
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-foreground/80">Suporte Dedicado</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
