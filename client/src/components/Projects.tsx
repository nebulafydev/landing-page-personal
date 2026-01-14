import { ExternalLink, Github } from 'lucide-react';

/**
 * Projects Section - Neomorphism Design
 * Features:
 * - Project cards with gradients
 * - Technology tags
 * - Links to live projects and repos
 */

export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Plataforma de e-commerce completa com carrinho, pagamento e dashboard administrativo.',
      image: '/images/project-bg-1.jpg',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Task Management App',
      description: 'Aplicação de gerenciamento de tarefas com colaboração em tempo real e notificações.',
      image: '/images/project-bg-2.jpg',
      technologies: ['React', 'Firebase', 'Tailwind CSS', 'WebSocket'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'AI Chat Interface',
      description: 'Interface de chat inteligente com integração de IA para análise de sentimentos.',
      image: '/images/project-bg-1.jpg',
      technologies: ['Next.js', 'TypeScript', 'OpenAI', 'Prisma'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Analytics Dashboard',
      description: 'Dashboard de análise de dados com gráficos interativos e relatórios em tempo real.',
      image: '/images/project-bg-2.jpg',
      technologies: ['React', 'D3.js', 'Express', 'MongoDB'],
      liveUrl: '#',
      githubUrl: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Meus <span className="gradient-text">Projetos</span>
          </h2>
          <div className="section-divider max-w-24 mx-auto mb-6" />
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
            Projetos que demonstram minha experiência e capacidade de resolver problemas complexos
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group cursor-pointer"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Project Card */}
              <div className="card-glow overflow-hidden h-full flex flex-col">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-2 text-foreground group-hover:gradient-text transition-all">
                    {project.title}
                  </h3>
                  <p className="text-foreground/60 text-sm mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <a
                      href={project.liveUrl}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-accent/10 border border-accent/30 text-accent hover:bg-accent/20 transition-all duration-300 text-sm font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Ver Projeto
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-secondary hover:bg-secondary/80 border border-border text-foreground transition-all duration-300 text-sm font-medium"
                    >
                      <Github className="w-4 h-4" />
                      Código
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
