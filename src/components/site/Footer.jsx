import React, { useState } from "react";
import { Mail, Phone, MessageCircle, Star } from "lucide-react";
import logo from "@/assets/logo-light-transparent.png";
import { ScrollReveal } from "@/components/ui/scroll-reveal.jsx";

// 🚀 IMPORTATION DU COMPOSANT QR IMAGE DANS TON DOSSIER ASSETS
import qrInnovatelq from "@/assets/Code QR/Qr Innovatelq.svg";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  // 📧 Gestion de la Newsletter
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;

    setSubscribed(true);
    setEmail("");

    alert("Félicitations ! Votre inscription à la newsletter d'INNOVATELQ a bien été prise en compte. 🚀");
    
    setTimeout(() => {
      setSubscribed(false);
    }, 5000);
  };

  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10 overflow-hidden w-full">
      <ScrollReveal animation="zoom-in">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          
          <div className="flex flex-col lg:flex-row lg:justify-between items-start gap-10 pb-16 border-b border-slate-900 w-full">
            
            {/* Bloc 1 : Logo & Description */}
            <div className="space-y-5 lg:w-[28%] shrink-0">
              <div className="flex items-center gap-2">
                <img 
                  src={logo} 
                  alt="INNOVATELQ" 
                  width={800} 
                  height={268} 
                  className="h-14 w-auto object-contain" 
                />
              </div>
              <p className="text-sm text-slate-400 leading-relaxed font-medium">
                InnovatelQ conçoit et exploite l'infrastructure numérique dont les entreprises africaines ont besoin pour grandir.
              </p>
            </div>

            {/* Bloc 2 : Contacts */}
            <div className="space-y-4 lg:w-[24%] shrink-0">
              <h4 className="font-mono text-xs text-orange-400 uppercase tracking-widest font-bold">// Contact</h4>
              
              <div className="space-y-3 text-sm">
                <div className="flex gap-3 text-slate-400 items-center">
                  <Phone size={16} className="text-orange-400 shrink-0" />
                  <span className="w-20 shrink-0 font-bold text-slate-300">Abidjan :</span> 
                  <a href="tel:+2250747568441" className="hover:text-white hover:underline transition-colors font-semibold text-slate-200">+225 07 47 56 84 41</a>
                </div>
                
                <div className="flex gap-3 text-slate-400 items-center">
                  <MessageCircle size={16} className="text-orange-400 shrink-0" />
                  <span className="w-20 shrink-0 font-bold text-slate-300">WhatsApp :</span> 
                  <a href="https://wa.me" target="_blank" rel="noreferrer" className="hover:text-white hover:underline transition-colors font-semibold text-slate-200">+225 07 15 32 88 89</a>
                </div>
                
                <div className="flex gap-3 text-slate-400 items-center">
                  <Mail size={16} className="text-orange-400 shrink-0" />
                  <span className="w-20 shrink-0 font-bold text-slate-300">Email :</span> 
                  <a href="mailto:innovatelq901@gmail.com" className="hover:text-white hover:underline transition-colors font-semibold text-slate-200">innovatelq901@gmail.com</a>
                </div>
              </div>
            </div>

            {/* Bloc 3 : Newsletter */}
            <div className="space-y-4 max-w-sm lg:w-[25%] shrink-0">
              <h4 className="font-mono text-xs text-orange-400 uppercase tracking-widest font-bold">// Newsletter</h4>
              <p className="text-sm text-slate-400 leading-relaxed font-medium">Inscrivez-vous pour nous suivre dans nos actualités.</p>
              <form onSubmit={handleSubscribe} className="flex flex-col gap-3 pt-1">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Votre email" 
                  required
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-500 transition-colors placeholder-slate-500" 
                />
                <button 
                  type="submit" 
                  disabled={subscribed}
                  className={`w-full font-mono text-xs uppercase font-black py-3 rounded-xl transition-all duration-300 tracking-widest ${
                    subscribed 
                      ? "bg-emerald-600 text-white cursor-default" 
                      : "bg-orange-500 hover:bg-orange-600 text-white cursor-pointer shadow-lg shadow-orange-500/10"
                  }`}
                >
                  {subscribed ? "Inscrit ✓" : "S'inscrire"}
                </button>
              </form>
            </div>

            {/* 🛠 BLOC 4 : INCORPORATION DIRECTE DE TON COMPOSANT IMAGE SVG REÇU DU DOSSIER */}
            <div className="flex justify-center lg:justify-end lg:w-[15%] shrink-0">
              <div className="flex flex-col items-center justify-center bg-slate-900 border border-slate-800 p-4 rounded-xl w-36 shadow-2xl">
                
                {/* Utilisation de ta ressource image physique directement importée */}
                <div className="bg-white p-2.5 rounded-xl shadow-md flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-300">
                  <img
                    src={qrInnovatelq}
                    alt="Code QR Innovatelq"
                    className="w-[110px] h-[110px] object-contain"
                  />
                </div>
                
                <div className="mt-3 flex flex-col items-center gap-1">
                  <span className="text-[10px] font-bold text-slate-300 tracking-wider uppercase font-mono">Votre avis</span>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={10} className="fill-orange-400 text-orange-400" />
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Ligne des sous-menus horizontaux de navigation */}
          <div className="flex flex-wrap gap-x-8 gap-y-3 py-8 text-xs font-mono uppercase tracking-widest text-slate-400 border-b border-slate-900">
            <a href="#accueil" className="hover:text-white transition-colors font-medium">Expertise</a>
            <a href="#services" className="hover:text-white transition-colors font-medium">Offre B2B</a>
            <a href="#pourquoi" className="hover:text-white transition-colors font-medium">Différence</a>
            <a href="#processus" className="hover:text-white transition-colors font-medium">Notre méthode</a>
            <a href="#contact" className="hover:text-white transition-colors font-medium">Parlons à un expert</a>
            <a href="#" className="hover:text-white transition-colors font-medium">Mentions Légales</a>
          </div>

          <div className="pt-8 flex justify-between items-center text-xs text-slate-500 font-mono uppercase tracking-wider">
            <div>© {new Date().getFullYear()} INNOVATELQ. Tous droits réservés.</div>
          </div>

        </div>
      </ScrollReveal>
    </footer>
  );
}
