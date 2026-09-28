import React from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  { name: "Aïcha Diallo", role: "Directrice Générale, RetailPlus", text: "INNOVATELQ a transformé notre gestion interne avec un ERP parfaitement adapté. Équipe professionnelle et à l'écoute." },
  { name: "Jean-Marc Kouassi", role: "CEO, LogiTrans", text: "Notre application mobile est un vrai succès. Qualité, performance et respect des délais au rendez-vous." },
  { name: "Fatou Sarr", role: "Responsable SI, BankSecure", text: "Un audit cybersécurité complet et pertinent. Nous avons considérablement renforcé notre posture de sécurité." },
  { name: "Ibrahim Ndiaye", role: "Fondateur, ShopAfrique", text: "Site e-commerce rapide, design premium et référencement au top. Nos ventes en ligne ont explosé." },
];

export function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-[#090d16] text-white overflow-hidden border-t border-slate-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-mono text-orange-400 uppercase tracking-widest block mb-2">// Témoignages</span>
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight">
            Ce que disent <span className="text-gradient-brand">nos clients.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, index) => (
            <motion.figure 
              key={t.name}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ y: -6, borderColor: "rgba(255,138,61,0.4)" }}
              className="group relative bg-[#0e1420] border border-slate-800 rounded-2xl p-8 transition-all duration-300 h-full flex flex-col justify-between shadow-2xl"
            >
              <Quote size={40} className="text-orange-500/5 absolute top-6 right-6" />
              
              <div>
                <div className="flex gap-1 text-orange-400">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <blockquote className="mt-5 text-sm sm:text-base text-slate-300 leading-relaxed italic">
                  « {t.text} »
                </blockquote>
              </div>

              {/* 🛠️ APPLIQUÉ & SÉCURISÉ : Plus aucun texte ne peut dépasser du cercle d'initiales orange */}
              <figcaption className="mt-8 border-t border-slate-800/60 pt-4 flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-gradient-to-r from-orange-500 to-orange-700 flex items-center justify-center text-white font-bold text-xs shrink-0 shadow-md">
                  {t.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-bold text-sm text-slate-100 truncate">{t.name}</div>
                  <div className="text-xs text-orange-400 truncate mt-0.5">{t.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>

      </div>
    </section>
  );
}
