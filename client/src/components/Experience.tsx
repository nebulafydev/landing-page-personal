import { Briefcase, Calendar } from 'lucide-react';

/**
 * Experience Section - Neomorphism Design
 * Features:
 * - Timeline of work experience
 * - Company details and achievements
 * - Animated cards
 */

export default function Experience() {
  const experiences = [
    {
      company: 'Tech Solutions Inc.',
      position: 'Senior Full Stack Developer',
      period: '2022 - Presente',
      duration: '2 anos',
      description: 'Liderança de projetos web de alta complexidade, arquitetura de sistemas e mentoria de desenvolvedores juniores.',
      achievements: [
        'Implementei arquitetura de microserviços reduzindo latência em 40%',
        'Mentoreei 5 desenvolvedores juniores',
        'Liderei migração de legacy code para React/TypeScript',
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'AWS'],
    },
    {
      company: 'Digital Agency Pro',
      position: 'Full Stack Developer',
      period: '2020 - 2022',
      duration: '2 anos',
      description: 'Desenvolvimento de aplicações web para clientes diversos, desde startups até grandes empresas.',
      achievements: [
        'Desenvolvi 15+ projetos web com sucesso',
        'Implementei sistema de pagamento com Stripe',
        'Otimizei performance de aplicações em 35%',
      ],
      technologies: ['React', 'Express', 'MongoDB', 'Next.js', 'Tailwind CSS'],
    },
    {
      company: 'StartUp Innovations',
      position: 'Frontend Developer',
      period: '2019 - 2020',
      duration: '1 ano',
      description: 'Desenvolvimento de interfaces modernas e responsivas para aplicação SaaS.',
      achievements: [
        'Criei design system com 50+ componentes reutilizáveis',
        'Implementei testes unitários aumentando cobertura para 85%',
        'Melhorei UX resultando em aumento de 25% na retenção',
      ],
      technologies: ['React', 'TypeScript', 'Jest', 'Figma', 'CSS-in-JS'],
    },
  ];

  return (
    <section id="experience" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Minha <span className="gradient-text">Experiência</span>
          </h2>
          <div className="section-divider max-w-24 mx-auto mb-6" />
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
            Trajetória profissional com foco em desenvolvimento web e inovação
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12 last:mb-0">
              {/* Timeline Line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-8 top-24 w-0.5 h-32 bg-gradient-to-b from-accent to-transparent" />
              )}

              {/* Timeline Dot */}
              <div className="absolute left-0 top-0 w-16 h-16 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center shadow-lg">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Experience Card */}
              <div className="ml-24 card-glow p-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-1">
                      {exp.position}
                    </h3>
                    <p className="text-accent font-semibold">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2 text-foreground/60 mt-2 md:mt-0">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  {exp.description}
                </p>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Principais Realizações:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-3 text-foreground/70 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
