/**
 * Skills Section - Neomorphism Design
 * Features:
 * - Skill categories
 * - Progress indicators
 * - Interactive cards
 */

export default function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      icon: '🎨',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vue.js'],
    },
    {
      category: 'Backend',
      icon: '⚙️',
      skills: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB'],
    },
    {
      category: 'Ferramentas',
      icon: '🛠️',
      skills: ['Git', 'Docker', 'AWS', 'Figma', 'VS Code'],
    },
    {
      category: 'Soft Skills',
      icon: '💡',
      skills: ['Liderança', 'Comunicação', 'Resolução de Problemas', 'Trabalho em Equipe'],
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Minhas <span className="gradient-text">Habilidades</span>
          </h2>
          <div className="section-divider max-w-24 mx-auto mb-6" />
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
            Tecnologias e competências que utilizo para criar soluções inovadoras
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="card-glow p-8 group cursor-pointer"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">
                {category.category}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="text-foreground/60 text-sm flex items-center gap-2 group/item"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent group-hover/item:scale-150 transition-transform" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
