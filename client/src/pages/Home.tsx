import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

/**
 * Home Page - Portfolio Landing Page
 * 
 * Design Philosophy: Neomorphism Dinâmico com Gradientes
 * - Paleta: Azul escuro (#1e3a8a) → Roxo (#7c3aed), Ciano (#06b6d4)
 * - Tipografia: Space Grotesk (títulos), Poppins (corpo)
 * - Componentes: Cards com sombras, gradientes diagonais, animações suaves
 * - Interações: Hover eleva elementos, scroll com parallax, fade-in na entrada
 */

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
