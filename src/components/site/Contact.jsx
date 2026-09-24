import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Check } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="py-24 bg-white text-slate-900 overflow-hidden border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        
        {/* 📋 PARTIE 1 : En-tête de section style innovatelq.fr */}
        <div className="mb-14 text-left">
          <span className="text-xs font-mono text-orange-500 uppercase tracking-widest block mb-2">// Contact</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-950">
            Le goût de <span className="text-gradient-brand">votre projet</span>
          </h2>
          <p className="mt-2 text-sm text-slate-500">Une idée ? Un besoin ? Notre équipe vous répond sous 48h.</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* 🎴 PARTIE 2 : La carte de coordonnées sombre style innovatelq.fr */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-5 bg-[#171110] text-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-xl relative overflow-hidden group min-h-[500px]"
          >
            <div className="space-y-8 relative z-10">
              <h3 className="text-2xl font-black tracking-tight text-white">Nos coordonnées</h3>
              <p className="text-xs text-slate-400 leading-relaxed">Contactez-nous directement, nous sommes à votre écoute.</p>
              
              <ul className="space-y-6 pt-4">
                <li className="flex items-center gap-4 group/item">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 grid place-items-center shrink-0 group-hover/item:border-orange-500/50 transition-colors duration-300">
                    <Phone size={16} className="text-orange-400" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[10px] uppercase font-mono tracking-wider text-slate-500">Téléphone</div>
                    <a href="tel:+2250747568441" className="text-sm font-semibold text-slate-200 hover:text-orange-400 transition-colors duration-300">+225 07 47 56 84 41</a>
                  </div>
                </li>

                <li className="flex items-center gap-4 group/item">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 grid place-items-center shrink-0 group-hover/item:border-orange-500/50 transition-colors duration-300">
                    <svg xmlns="http://w3.org" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-400">
                      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[10px] uppercase font-mono tracking-wider text-slate-500">WhatsApp</div>
                    <a href="https://wa.me" target="_blank" rel="noreferrer" className="text-sm font-semibold text-slate-200 hover:text-orange-400 transition-colors duration-300">+225 07 15 32 88 89</a>
                  </div>
                </li>

                <li className="flex items-center gap-4 group/item">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 grid place-items-center shrink-0 group-hover/item:border-orange-500/50 transition-colors duration-300">
                    <Mail size={16} className="text-orange-400" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[10px] uppercase font-mono tracking-wider text-slate-500">Email</div>
                    <a href="mailto:innovatelq901@gmail.com" className="text-sm font-semibold text-slate-200 hover:text-orange-400 transition-colors duration-300 break-all">innovatelq901@gmail.com</a>
                  </div>
                </li>

                <li className="flex items-center gap-4 group/item">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 grid place-items-center shrink-0 group-hover/item:border-orange-500/50 transition-colors duration-300">
                    <MapPin size={16} className="text-orange-400" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[10px] uppercase font-mono tracking-wider text-slate-500">Adresse</div>
                    <span className="text-sm font-semibold text-slate-200">Nouveau CHU Angré, Abidjan</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="pt-8 border-t border-white/10 relative z-10">
              <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500 mb-3">Réseaux sociaux</div>
              <div className="flex gap-2.5">
                {["FB", "LN", "IG"].map((net) => (
                  <a key={net} href="#" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:bg-orange-600 hover:border-orange-600 grid place-items-center transition-all duration-300 hover:scale-105 text-xs font-mono font-black text-slate-300 hover:text-white">
                    {net}
                  </a>
                ))}
              </div>
            </div>

            <div className="absolute -bottom-20 -right-20 w-48 h-44 rounded-full bg-orange-500/10 blur-2xl group-hover:bg-orange-500/15 transition-colors duration-500 pointer-events-none" />
          </motion.div>
          {/* 📝 PARTIE 3 : Le grand formulaire blanc multi-champs de la maquette originale */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7 bg-white border border-slate-100 rounded-3xl p-8 sm:p-10 shadow-xl"
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target;
                const fd = new FormData(form);
                
                // Construction du message WhatsApp structuré
                const textMessage = `Nouvelle demande pour INNOVATELQ :\n\n` +
                                    `• Nom : ${fd.get("nom")} ${fd.get("prenom")}\n` +
                                    `• Téléphone : ${fd.get("tel") || "Non spécifié"}\n` +
                                    `• Email : ${fd.get("email")}\n` +
                                    `• Entreprise : ${fd.get("entreprise") || "Non spécifié"}\n` +
                                    `• Objet : ${fd.get("objet")}\n\n` +
                                    `💬 Projet : ${fd.get("description")}`;
                
                const whatsappUrl = `https://wa.me{encodeURIComponent(textMessage)}`;
                window.open(whatsappUrl, "_blank");
                setSent(true);
                setTimeout(() => setSent(false), 4000);
                form.reset();
              }}
              className="space-y-6"
            >
              {/* Rangée 1 : Nom et Prénom */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-700 tracking-wide">Nom *</label>
                  <input name="nom" type="text" required className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm focus:outline-none focus:border-orange-500 focus:bg-white transition-all duration-300" />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-700 tracking-wide">Prénom *</label>
                  <input name="prenom" type="text" required className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm focus:outline-none focus:border-orange-500 focus:bg-white transition-all duration-300" />
                </div>
              </div>

              {/* Rangée 2 : Téléphone et Email */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-700 tracking-wide">Téléphone</label>
                  <input name="tel" type="tel" className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm focus:outline-none focus:border-orange-500 focus:bg-white transition-all duration-300" />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-700 tracking-wide">Email *</label>
                  <input name="email" type="email" required className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm focus:outline-none focus:border-orange-500 focus:bg-white transition-all duration-300" />
                </div>
              </div>

              {/* Rangée 3 : Entreprise et Objet */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-700 tracking-wide">Entreprise</label>
                  <input name="entreprise" type="text" className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm focus:outline-none focus:border-orange-500 focus:bg-white transition-all duration-300" />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-700 tracking-wide">Objet *</label>
                  <input name="objet" type="text" required className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm focus:outline-none focus:border-orange-500 focus:bg-white transition-all duration-300" />
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-700 tracking-wide">Description du projet *</label>
                <textarea name="description" required rows={4} placeholder="Parlez-nous de votre projet..." className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm focus:outline-none focus:border-orange-500 focus:bg-white transition-all duration-300 resize-none" />
              </div>

              {/* Bouton d'action */}
              <div className="pt-2">
                <button 
                  type="submit" 
                  className="w-full sm:w-auto inline-flex items-center gap-2 rounded-full bg-orange-600 hover:bg-orange-700 px-8 py-3.5 text-xs font-mono uppercase tracking-widest font-black text-white transition-all duration-300 shadow-md shadow-orange-600/10 hover:scale-[1.02]"
                >
                  {sent ? (
                    <>Envoi réussi <Check size={14} /></>
                  ) : (
                    <>Envoyer sur WhatsApp <Send size={14} /></>
                  )}
                </button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
