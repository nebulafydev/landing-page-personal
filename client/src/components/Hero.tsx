import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

/**
 * Hero Section - Neomorphism Design
 * Features:
 * - Full-screen hero with gradient background
 * - Profile image with glow effect
 * - Social media links
 * - CTA button with animation
 */

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/images/hero-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="container relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left animate-fade-in-up">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-medium">
              👋 Bem-vindo ao meu portfólio
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Desenvolvedor
            <span className="gradient-text block">Full Stack</span>
          </h1>

          <p className="text-lg md:text-xl text-foreground/70 mb-8 max-w-2xl">
            Transformo ideias em soluções digitais inovadoras. Especializado em React, TypeScript e arquitetura de aplicações modernas.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start">
            <button className="button-gradient flex items-center justify-center gap-2 group">
              Ver Meus Projetos
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-6 py-3 rounded-lg font-semibold border border-accent/30 text-accent hover:bg-accent/10 transition-all duration-300">
              Baixar CV
            </button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center lg:justify-start">
            <a
              href="#"
              className="w-12 h-12 rounded-lg bg-secondary hover:bg-accent/20 border border-accent/20 flex items-center justify-center text-accent transition-all duration-300 hover:scale-110"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-lg bg-secondary hover:bg-accent/20 border border-accent/20 flex items-center justify-center text-accent transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-lg bg-secondary hover:bg-accent/20 border border-accent/20 flex items-center justify-center text-accent transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Right Content - Profile Image */}
        <div className="flex-1 flex justify-center animate-slide-in-left">
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            {/* Glow Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-cyan-500/30 rounded-3xl blur-3xl" />

            {/* Profile Card */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden card-glow">
              <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-cyan-500/10 flex items-center justify-center">
                {/* Placeholder for profile image */}
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 mx-auto mb-4" />
                  <p className="text-foreground/50">Sua Foto Aqui</p>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-4 -right-4 bg-accent text-background px-6 py-3 rounded-2xl shadow-lg font-semibold">
              Disponível
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-sm text-foreground/50">Scroll para explorar</span>
          <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-foreground/50 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
