import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const plans = [
    {
      name: "Landing Page",
      price: "R$ 1.500",
      description: "Perfeito para começar",
      icon: "fa-rocket",
      color: "primary",
      features: [
        "Design responsivo",
        "Até 5 seções",
        "Formulário de contato",
        "SEO básico",
        "1 revisão incluída",
        "Prazo: 5-7 dias",
      ],
    },
    {
      name: "Site Completo",
      price: "R$ 3.500",
      description: "Solução profissional",
      icon: "fa-star",
      color: "accent",
      popular: true,
      features: [
        "Design personalizado",
        "Até 10 páginas",
        "Blog integrado",
        "SEO avançado",
        "Painel administrativo",
        "3 revisões incluídas",
        "Prazo: 15-20 dias",
      ],
    },
    {
      name: "E-commerce",
      price: "R$ 5.500",
      description: "Para vender online",
      icon: "fa-shopping-cart",
      color: "secondary",
      features: [
        "Loja completa",
        "Até 100 produtos",
        "Gateway de pagamento",
        "Painel de vendas",
        "Sistema de cupons",
        "SEO e-commerce",
        "5 revisões incluídas",
        "Prazo: 30 dias",
      ],
    },
  ];

  const handleWhatsApp = (planName: string) => {
    const message = encodeURIComponent(
      `Olá! Tenho interesse no plano ${planName}. Gostaria de mais informações.`
    );
    window.open(`https://wa.me/5585989002536?text=${message}`, "_blank");
  };

  const getColorClasses = (color: string, isPrimary = false) => {
    const colors = {
      primary: isPrimary
        ? "bg-primary hover:bg-primary/90 text-primary-foreground"
        : "bg-primary/10 border-primary/30 text-primary",
      secondary: isPrimary
        ? "bg-secondary hover:bg-secondary/90 text-secondary-foreground"
        : "bg-secondary/10 border-secondary/30 text-secondary",
      accent: isPrimary
        ? "bg-accent hover:bg-accent/90 text-accent-foreground"
        : "bg-accent/10 border-accent/30 text-accent",
    };
    return colors[color as keyof typeof colors] || colors.primary;
  };

  return (
    <section id="precos" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Planos e Preços
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Escolha o plano ideal para o seu projeto
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <Card
              key={idx}
              className={`shadow-soft hover:shadow-hover transition-smooth animate-scale-in relative ${
                plan.popular
                  ? "border-2 border-accent scale-105 md:scale-110"
                  : "border-2 border-border"
              }`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold shadow-soft">
                  Mais Popular
                </div>
              )}

              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${getColorClasses(
                      plan.color
                    )} mb-4`}
                  >
                    <i className={`fas ${plan.icon} text-2xl`}></i>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground mb-4">
                    {plan.description}
                  </p>
                  <div className="text-4xl font-bold gradient-text mb-2">
                    {plan.price}
                  </div>
                  <p className="text-sm text-muted-foreground">pagamento único</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-start gap-3">
                      <i
                        className={`fas fa-check-circle mt-1 ${getColorClasses(
                          plan.color
                        )}`}
                      ></i>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={() => handleWhatsApp(plan.name)}
                  className={`w-full ${getColorClasses(
                    plan.color,
                    true
                  )} shadow-soft hover:shadow-hover transition-smooth`}
                >
                  <i className="fab fa-whatsapp mr-2"></i>
                  Contratar Agora
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Precisa de algo personalizado?{" "}
            <button
              onClick={() => {
                const element = document.getElementById("contato");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-primary hover:text-primary/80 font-semibold transition-smooth underline"
            >
              Entre em contato
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
