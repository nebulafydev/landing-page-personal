/**
 * About Section - Neomorphism Design
 * Features:
 * - Professional description
 * - Key highlights
 * - Animated cards
 */

export default function About() {
  const highlights = [
    {
      number: '5+',
      label: 'Anos de Experiência',
      icon: '📅',
    },
    {
      number: '50+',
      label: 'Projetos Completados',
      icon: '🚀',
    },
    {
      number: '30+',
      label: 'Clientes Satisfeitos',
      icon: '😊',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Sobre <span className="gradient-text">Mim</span>
          </h2>
          <div className="section-divider max-w-24 mx-auto mb-6" />
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
            Desenvolvedor apaixonado por criar experiências digitais incríveis
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <div className="animate-fade-in-up">
            <p className="text-foreground/70 text-lg leading-relaxed mb-6">
              Sou um desenvolvedor full stack com paixão por criar soluções web modernas e escaláveis. Com mais de 5 anos de experiência, tenho trabalhado com empresas de diversos segmentos para transformar suas ideias em produtos digitais de alta qualidade.
            </p>
            <p className="text-foreground/70 text-lg leading-relaxed mb-6">
              Minha especialidade está em construir interfaces intuitivas com React e TypeScript, combinadas com backends robustos. Acredito que bom design e código limpo são essenciais para criar produtos que realmente fazem diferença.
            </p>
            <p className="text-foreground/70 text-lg leading-relaxed">
              Quando não estou codificando, gosto de contribuir para projetos open source, aprender novas tecnologias e compartilhar conhecimento com a comunidade.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="card-glow p-6 text-center group"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <div className="text-3xl font-bold gradient-text mb-2">
                  {item.number}
                </div>
                <p className="text-foreground/60 text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
