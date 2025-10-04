import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create mailto link
    const mailtoLink = `mailto:pedro.correialopesfilho@gmail.com?subject=Contato de ${encodeURIComponent(
      formData.name
    )}&body=${encodeURIComponent(
      `Nome: ${formData.name}\nEmail: ${formData.email}\n\nMensagem:\n${formData.message}`
    )}`;

    window.location.href = mailtoLink;

    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Olá! Gostaria de fazer um orçamento para um projeto web."
    );
    window.open(`https://wa.me/5585989002536?text=${message}`, "_blank");
  };

  return (
    <section id="contato" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Entre em Contato
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Vamos transformar sua ideia em realidade
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6 animate-scale-in">
            <Card className="shadow-soft hover:shadow-hover transition-smooth border-primary/20">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="text-4xl text-primary">
                    <i className="fas fa-briefcase"></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">
                      Vendas, Contas e Faturamento
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Para orçamentos e informações comerciais
                    </p>
                    <Button
                      onClick={handleWhatsApp}
                      className="bg-accent hover:bg-accent/90 text-accent-foreground"
                    >
                      <i className="fab fa-whatsapp mr-2"></i>
                      Faça um Orçamento
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-hover transition-smooth border-secondary/20">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="text-4xl text-secondary">
                    <i className="fas fa-headset"></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Suporte Técnico</h3>
                    <p className="text-muted-foreground mb-4">
                      Estamos aqui para ajudar com qualquer dúvida técnica
                    </p>
                    <div className="flex flex-col gap-2">
                      <a
                        href="mailto:pedro.correialopesfilho@gmail.com"
                        className="text-secondary hover:text-secondary/80 transition-smooth"
                      >
                        <i className="fas fa-envelope mr-2"></i>
                        pedro.correialopesfilho@gmail.com
                      </a>
                      <a
                        href="https://wa.me/5585989002536"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-secondary hover:text-secondary/80 transition-smooth"
                      >
                        <i className="fab fa-whatsapp mr-2"></i>
                        +55 (85) 98900-2536
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="shadow-soft hover:shadow-hover transition-smooth animate-scale-in border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Envie uma Mensagem</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Nome
                  </label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Seu nome"
                    className="w-full"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="seu@email.com"
                    className="w-full"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Mensagem
                  </label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Conte-me sobre seu projeto..."
                    rows={6}
                    className="w-full"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-soft hover:shadow-hover transition-smooth"
                >
                  <i className="fas fa-paper-plane mr-2"></i>
                  {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
