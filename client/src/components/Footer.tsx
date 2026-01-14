/**
 * Footer Component - Neomorphism Design
 * Features:
 * - Copyright information
 * - Quick links
 * - Social media links
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { label: 'Sobre', href: '#about' },
    { label: 'Projetos', href: '#projects' },
    { label: 'Habilidades', href: '#skills' },
    { label: 'Contato', href: '#contact' },
  ];

  return (
    <footer className="border-t border-border bg-background/50 backdrop-blur-md">
      <div className="container py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <span className="font-bold text-lg gradient-text">Portfolio</span>
            </div>
            <p className="text-foreground/60 text-sm">
              Desenvolvedor full stack criando soluções digitais inovadoras.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-foreground/60 hover:text-accent transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Redes Sociais</h3>
            <div className="flex gap-3">
              {['Github', 'LinkedIn', 'Twitter'].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-secondary hover:bg-accent/20 border border-border hover:border-accent/30 flex items-center justify-center text-foreground/60 hover:text-accent transition-all duration-300 text-xs font-semibold"
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="section-divider mb-6" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-foreground/60">
          <p>&copy; {currentYear} Seu Nome. Todos os direitos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-accent transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Termos de Serviço
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
