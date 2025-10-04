const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <i className="fas fa-code mr-2"></i>
              Pedro Dev
            </h3>
            <p className="text-background/80 mb-4">
              Transformando ideias em experiências digitais incríveis
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/80 hover:text-background transition-smooth text-xl"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/80 hover:text-background transition-smooth text-xl"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://wa.me/5585989002536"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/80 hover:text-background transition-smooth text-xl"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("inicio");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-background/80 hover:text-background transition-smooth"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("projetos");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-background/80 hover:text-background transition-smooth"
                >
                  Projetos
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("precos");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-background/80 hover:text-background transition-smooth"
                >
                  Preços
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("contato");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-background/80 hover:text-background transition-smooth"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-background/80">
                <i className="fas fa-envelope"></i>
                <a
                  href="mailto:pedro.correialopesfilho@gmail.com"
                  className="hover:text-background transition-smooth"
                >
                  pedro.correialopesfilho@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-background/80">
                <i className="fab fa-whatsapp"></i>
                <a
                  href="https://wa.me/5585989002536"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-background transition-smooth"
                >
                  +55 (85) 98900-2536
                </a>
              </li>
              <li className="flex items-center gap-2 text-background/80">
                <i className="fas fa-map-marker-alt"></i>
                <span>Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/80">
            © {currentYear} Pedro Correia Lopes. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
