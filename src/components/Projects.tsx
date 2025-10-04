import { Card, CardContent } from "@/components/ui/card";

const Projects = () => {
  const categories = [
    {
      title: "Plataformas Educacionais",
      icon: "fa-graduation-cap",
      color: "primary",
      projects: [
        {
          name: "EduLearn Pro",
          description: "Sistema completo de gestão educacional",
          icon: "fa-book-open",
        },
        {
          name: "Quiz Master",
          description: "Plataforma interativa de quizzes",
          icon: "fa-question-circle",
        },
      ],
    },
    {
      title: "Portfólios",
      icon: "fa-briefcase",
      color: "secondary",
      projects: [
        {
          name: "Creative Studio",
          description: "Portfólio para designers e artistas",
          icon: "fa-palette",
        },
        {
          name: "Dev Showcase",
          description: "Portfólio moderno para desenvolvedores",
          icon: "fa-code",
        },
      ],
    },
    {
      title: "Jogos",
      icon: "fa-gamepad",
      color: "accent",
      projects: [
        {
          name: "Puzzle Adventure",
          description: "Jogo de quebra-cabeças HTML5",
          icon: "fa-puzzle-piece",
        },
        {
          name: "Memory Master",
          description: "Jogo de memória interativo",
          icon: "fa-brain",
        },
      ],
    },
    {
      title: "Projetos Diversos",
      icon: "fa-rocket",
      color: "primary",
      projects: [
        {
          name: "E-commerce Plus",
          description: "Loja virtual completa e responsiva",
          icon: "fa-shopping-cart",
        },
        {
          name: "Blog Modern",
          description: "Sistema de blog com CMS integrado",
          icon: "fa-blog",
        },
        {
          name: "Dashboard Analytics",
          description: "Painel de controle e análises",
          icon: "fa-chart-line",
        },
      ],
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      primary: "bg-primary/10 border-primary/30 hover:border-primary",
      secondary: "bg-secondary/10 border-secondary/30 hover:border-secondary",
      accent: "bg-accent/10 border-accent/30 hover:border-accent",
    };
    return colors[color as keyof typeof colors] || colors.primary;
  };

  const getIconColor = (color: string) => {
    const colors = {
      primary: "text-primary",
      secondary: "text-secondary",
      accent: "text-accent",
    };
    return colors[color as keyof typeof colors] || colors.primary;
  };

  return (
    <section id="projetos" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Meus Projetos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conheça alguns dos projetos desenvolvidos com tecnologia de ponta e design moderno
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {categories.map((category, idx) => (
            <Card
              key={idx}
              className={`${getColorClasses(
                category.color
              )} border-2 shadow-soft hover:shadow-hover transition-smooth animate-scale-in`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`text-4xl ${getIconColor(category.color)}`}>
                    <i className={`fas ${category.icon}`}></i>
                  </div>
                  <h3 className="text-2xl font-bold">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.projects.map((project, projIdx) => (
                    <div
                      key={projIdx}
                      className="flex items-start gap-4 p-4 rounded-lg bg-background/50 hover:bg-background transition-smooth group cursor-pointer"
                    >
                      <div
                        className={`text-2xl ${getIconColor(
                          category.color
                        )} group-hover:scale-110 transition-bounce`}
                      >
                        <i className={`fas ${project.icon}`}></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-1 group-hover:text-primary transition-smooth">
                          {project.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
