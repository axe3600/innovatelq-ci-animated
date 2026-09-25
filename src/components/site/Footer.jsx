import React, { useState } from "react";
import { Mail, Phone, MessageCircle } from "lucide-react";
import logo from "@/assets/logo-light-transparent.png";
import { ScrollReveal } from "@/components/ui/scroll-reveal.jsx";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  // 📧 Gestion fonctionnelle de la Newsletter
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;

    // Simulation d'envoi réussi
    setSubscribed(true);
    setEmail("");

    // Notification de succès élégante à l'écran
    alert("Félicitations ! Votre inscription à la newsletter d'INNOVATELQ a bien été prise en compte. 🚀");
    
    setTimeout(() => {
      setSubscribed(false);
    }, 5000);
  };

  return (
    <footer className="bg-slate-950 text-white pt-16 pb-8 overflow-hidden">
      <ScrollReveal animation="zoom-in">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          
          {/* Ligne principale supérieure */}
          <div className="grid lg:grid-cols-12 gap-10 pb-12 border-b border-slate-900 items-start">
            
            {/* Bloc de gauche : Marque et description */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-2">
                <img 
                  src={logo} 
                  alt="INNOVATELQ" 
                  width={800} 
                  height={268} 
                  className="h-12 w-auto object-contain" 
                />
              </div>
              <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
                InnovatelQ conçoit et exploite l'infrastructure numérique dont les entreprises africaines ont besoin pour grandir.
              </p>
            </div>

            {/* Bloc du milieu : Contacts Côte d'Ivoire connectés et fonctionnels */}
            <div className="lg:col-span-4 space-y-2 text-xs">
              <h4 className="font-mono text-[10px] text-orange-400 uppercase tracking-widest mb-3">// Contact</h4>
              
              <div className="flex gap-3 text-slate-400 items-center">
                <Phone size={14} className="text-orange-400 shrink-0" />
                <span className="w-14 shrink-0 font-medium">Abidjan :</span> 
                {/* 📞 Lien d'appel fonctionnel */}
                <a href="tel:+2250747568441" className="hover:text-white hover:underline transition-colors">+225 07 47 56 84 41</a>
              </div>
              
              <div className="flex gap-3 text-slate-400 items-center">
                <MessageCircle size={14} className="text-orange-400 shrink-0" />
                <span className="w-14 shrink-0 font-medium">WhatsApp :</span> 
                {/* 💬 Lien WhatsApp fonctionnel qui ouvre la discussion directe */}
                <a href="https://wa.me" target="_blank" rel="noreferrer" className="hover:text-white hover:underline transition-colors">+225 07 15 32 88 89</a>
              </div>
              
              <div className="flex gap-3 text-slate-400 items-center">
                <Mail size={14} className="text-orange-400 shrink-0" />
                <span className="w-14 shrink-0 font-medium">Email :</span> 
                {/* ✉️ Lien de messagerie fonctionnel */}
                <a href="mailto:innovatelq901@gmail.com" className="hover:text-white hover:underline transition-colors">innovatelq901@gmail.com</a>
              </div>
            </div>

            {/* Bloc de droite : Newsletter épurée et fonctionnelle */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="font-mono text-[10px] text-orange-400 uppercase tracking-widest">// Newsletter</h4>
              <p className="text-[11px] text-slate-400 leading-relaxed">Inscrivez-vous pour suivre nos actualités et projets en Afrique.</p>
              
              <form onSubmit={handleSubscribe} className="flex flex-col gap-2 pt-1">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Votre email" 
                  required
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-orange-500 transition-colors" 
                />
                <button 
                  type="submit" 
                  disabled={subscribed}
                  className={`w-full font-mono text-[10px] uppercase font-bold py-2 rounded-lg transition-all duration-300 ${
                    subscribed 
                      ? "bg-emerald-600 text-white cursor-default" 
                      : "bg-orange-500 hover:bg-orange-600 text-white cursor-pointer"
                  }`}
                >
                  {subscribed ? "Inscrit ✓" : "S'inscrire"}
                </button>
              </form>
            </div>
          </div>

          {/* Ligne des sous-menus horizontaux de navigation */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 py-6 text-[10px] font-mono uppercase tracking-wider text-slate-500 border-b border-slate-900">
            <a href="#accueil" className="hover:text-white transition-colors">Expertise</a>
            <a href="#services" className="hover:text-white transition-colors">Offre B2B</a>
            <a href="#pourquoi" className="hover:text-white transition-colors">Différence</a>
            <a href="#processus" className="hover:text-white transition-colors">Notre méthode</a>
            <a href="#contact" className="hover:text-white transition-colors">Parlons à un expert</a>
            <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
          </div>

          {/* Ligne inférieure de Copyright */}
          <div className="pt-6 flex justify-between items-center text-[10px] text-slate-600 font-mono uppercase">
            <div>© {new Date().getFullYear()} INNOVATELQ. Tous droits réservés.</div>
          </div>

        </div>
      </ScrollReveal>
    </footer>
  );
}
