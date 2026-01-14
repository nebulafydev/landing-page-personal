import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

/**
 * Contact Section - Neomorphism Design
 * Features:
 * - Contact form
 * - Contact information
 * - Social links
 */

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'seu.email@exemplo.com',
      href: 'mailto:seu.email@exemplo.com',
    },
    {
      icon: Phone,
      label: 'Telefone',
      value: '+55 (11) 99999-9999',
      href: 'tel:+5511999999999',
    },
    {
      icon: MapPin,
      label: 'Localização',
      value: 'São Paulo, Brasil',
      href: '#',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Vamos <span className="gradient-text">Conversar</span>
          </h2>
          <div className="section-divider max-w-24 mx-auto mb-6" />
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
            Tenho interesse em oportunidades freelance e projetos interessantes. Sinta-se livre para entrar em contato!
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <a
                  key={index}
                  href={info.href}
                  className="card-glow p-6 flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center group-hover:bg-accent/20 transition-all duration-300 flex-shrink-0">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {info.label}
                    </h3>
                    <p className="text-foreground/60 group-hover:text-accent transition-colors">
                      {info.value}
                    </p>
                  </div>
                </a>
              );
            })}

            {/* Social Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Redes Sociais</h3>
              <div className="flex gap-4">
                {['Github', 'LinkedIn', 'Twitter'].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-12 h-12 rounded-lg bg-secondary hover:bg-accent/20 border border-border hover:border-accent/30 flex items-center justify-center text-foreground/60 hover:text-accent transition-all duration-300"
                  >
                    <span className="text-sm font-semibold">{social[0]}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="card-glow p-8">
            <div className="space-y-6">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/20 transition-all duration-300"
                  required
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu.email@exemplo.com"
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/20 transition-all duration-300"
                  required
                />
              </div>

              {/* Message Input */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Sua mensagem aqui..."
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/20 transition-all duration-300 resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full button-gradient flex items-center justify-center gap-2 group"
              >
                Enviar Mensagem
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
