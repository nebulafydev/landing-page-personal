import { useState } from 'react';
import { Menu, X } from 'lucide-react';

/**
 * Header Component - Neomorphism Design
 * Features:
 * - Responsive navigation
 * - Smooth scroll to sections
 * - Mobile menu toggle
 * - Gradient accent on active section
 */

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Sobre', href: '#about' },
    { label: 'Habilidades', href: '#skills' },
    { label: 'Experiência', href: '#experience' },
    { label: 'Projetos', href: '#projects' },
    { label: 'Contato', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <nav className="container flex items-center justify-between h-16">
        {/* Logo */}
        <button
          onClick={handleLogoClick}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity duration-300 cursor-pointer"
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center">
            <span className="text-white font-bold text-lg">P</span>
          </div>
          <span className="font-bold text-lg gradient-text hidden sm:inline">Portfolio</span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className="text-sm font-medium text-foreground/70 hover:text-accent transition-colors duration-300 relative group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 group-hover:w-full transition-all duration-300" />
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <button className="hidden md:block button-gradient">
          Vamos Conversar
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <div className="container py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="block w-full text-left px-4 py-2 rounded-lg text-foreground/70 hover:bg-secondary hover:text-accent transition-all duration-300"
              >
                {item.label}
              </button>
            ))}
            <button className="w-full button-gradient mt-4">
              Vamos Conversar
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
