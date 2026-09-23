import React from "react";
import { Facebook, Linkedin, Instagram, Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import logo from "@/assets/logo-light-transparent.png";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14 sm:py-16">
        <ScrollReveal animation="zoom-in">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <div className="flex items-center gap-2">
                <img src={logo} alt="INNOVATELQ" width={800} height={268} className="h-20 sm:h-24 w-auto object-contain" />
              </div>
              <p className="mt-4 text-sm text-primary-foreground/70 leading-relaxed">
                Solutions numériques innovantes, sécurisées et performantes pour accompagner votre transformation digitale.
              </p>
              <div className="mt-5 flex gap-2">
                {[Facebook, Linkedin, Instagram].map((Icon, i) => (
                  <a key={i} href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-gradient-brand grid place-items-center transition-all duration-300 hover:scale-110">
                    <Icon size={15} />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-sm uppercase tracking-wider border-b border-white/10 pb-2">Liens rapides</h4>
              <ul className="mt-4 space-y-3 text-sm text-primary-foreground/70">
                {[
                  ["#accueil", "Accueil"],
                  ["#apropos", "À propos"],
                  ["#services", "Services"],
                  ["#realisations", "Réalisations"],
                  ["#faq", "FAQ"],
                  ["#contact", "Contact"],
                ].map(([h, l]) => (
                  <li key={l}><a href={h} className="hover:text-accent transition-colors duration-300 block py-0.5">{l}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-sm uppercase tracking-wider border-b border-white/10 pb-2">Nos services</h4>
              <ul className="mt-4 space-y-3 text-sm text-primary-foreground/70">
                {["Site vitrine", "Application mobile", "E-commerce"].map((s) => (
                  <li key={s}><a href="#services" className="hover:text-accent transition-colors duration-300 block py-0.5">{s}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-sm uppercase tracking-wider border-b border-white/10 pb-2">Coordonnées</h4>
              <ul className="mt-4 space-y-4 text-sm text-primary-foreground/70">
                <li className="flex items-start gap-3 group/link">
                  <Phone size={16} className="text-accent mt-0.5 shrink-0" />
                  <a href="tel:+2250747568441" className="hover:text-accent transition-colors duration-300 break-all group-hover/link:translate-x-1 transition-transform">+225 07 47 56 84 41</a>
                </li>
                <li className="flex items-start gap-3 group/link">
                  <MessageCircle size={16} className="text-accent mt-0.5 shrink-0" />
                  <a href="https://wa.me" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors duration-300 break-all group-hover/link:translate-x-1 transition-transform">WhatsApp : +225 07 15 32 88 89</a>
                </li>
                <li className="flex items-start gap-3 group/link">
                  <Mail size={16} className="text-accent mt-0.5 shrink-0" />
                  <a href="mailto:innovatelq901@gmail.com" className="hover:text-accent transition-colors duration-300 break-all group-hover/link:translate-x-1 transition-transform">innovatelq901@gmail.com</a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="text-accent mt-0.5 shrink-0" />
                  <span className="text-primary-foreground/70">Nouveau CHU Angré, Abidjan</span>
                </li>
              </ul>
            </div>
          </div>
        </ScrollReveal>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/60">
          <div>© {new Date().getFullYear()} INNOVATELQ. Tous droits réservés.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent transition-colors duration-300">Mentions légales</a>
            <a href="#" className="hover:text-accent transition-colors duration-300">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
