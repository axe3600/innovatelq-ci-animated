import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-transparent.png";

const links = [
  { href: "#accueil", label: "Accueil" },
  { href: "#apropos", label: "À propos" },
  { href: "#services", label: "Services" },
  { href: "#realisations", label: "Réalisations" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      // 🛠️ FIX IMAGE 1 : Application du fond blanc/gris givré translucide haut de gamme constant
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 transform bg-white/70 backdrop-blur-md border-b border-white/20 ${
        scrolled 
          ? "shadow-sm h-20 sm:h-24" 
          : "h-24 sm:h-28"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 flex items-center justify-between h-full py-2">
        
        {/* Logo officiel d'INNOVATELQ */}
        <a href="#accueil" className="flex items-center gap-2 group min-w-0">
          <img
            src={logo}
            alt="INNOVATELQ logo"
            width={800}
            height={268}
            className="h-12 sm:h-14 w-auto object-contain shrink-0 group-hover:scale-105 transition-transform duration-300"
          />
        </a>

        {/* Liens de navigation grisés style Image 1 */}
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-orange-500 transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-orange-500 hover:after:w-full after:transition-all duration-300"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Bouton d'action "Demander un devis" Orange et Blanc à l'identique */}
        <div className="hidden lg:block">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full text-xs font-mono uppercase tracking-widest font-black h-10 px-6 py-2.5 transition-all duration-300 border-2 border-orange-500 bg-orange-500 text-white hover:bg-slate-100 hover:text-orange-500 hover:border-orange-500 shadow-md shadow-orange-500/10 hover:scale-[1.02] cursor-pointer"
          >
            Demander un devis
          </a>
        </div>

        {/* Menu Burger (Mobile) */}
        <button
          className="lg:hidden p-2 rounded-md hover:bg-slate-100/50 shrink-0 transition-colors text-slate-800"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Rideau du menu déroulant (Mobile) calqué sur le même style givré */}
      {open && (
        <div className="lg:hidden bg-white/95 backdrop-blur-lg border-t border-slate-100 shadow-lg animate-fade-up">
          <div className="px-6 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-orange-500 transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center rounded-full text-xs font-mono uppercase tracking-widest font-black px-5 py-3 border-2 border-orange-500 bg-orange-500 text-white hover:bg-slate-100 hover:text-orange-500 hover:border-orange-500 transition-all duration-300 text-center"
            >
              Demander un devis
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
