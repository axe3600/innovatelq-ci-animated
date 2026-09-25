import React from "react";
import { motion } from "framer-motion";

// 🔌 Importation des véritables logos depuis ton nouveau sous-dossier /assets/Logo/
import logoFree from "@/assets/Logo/free.webp";
import logoTact from "@/assets/Logo/tact-office.webp";
import logoGd from "@/assets/Logo/gd-associes.webp";
import logoPaipro from "@/assets/Logo/paipro-jeunes.webp";
import logoOrange from "@/assets/Logo/orange.webp";
import logoWave from "@/assets/Logo/wave.webp";
import logoAlgo from "@/assets/Logo/algo-advice-xp.webp";
import logoBiu from "@/assets/Logo/british-international-univ.webp";

const stats = [
  { value: "100+", text: "Entreprises accompagnées" },
  { value: "50+", text: "Projets réalisés" },
  { value: "2", text: "Pays — Côte d'Ivoire & Sénégal" },
  { value: "∞", text: "Ambition continentale" }
];

// Tableau regroupant tes logos importés pour automatiser le carrousel infini
const partnerLogos = [
  { src: logoFree, alt: "Free" },
  { src: logoTact, alt: "Tact Office" },
  { src: logoGd, alt: "GD Associés" },
  { src: logoPaipro, alt: "Paipro Jeunes" },
  { src: logoOrange, alt: "Orange" },
  { src: logoWave, alt: "Wave" },
  { src: logoAlgo, alt: "Algo Advice" },
  { src: logoBiu, alt: "British International University" }
];

export function Impact() {
  return (
    <section className="py-24 bg-white text-slate-900 overflow-hidden border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        
        {/* 📊 Section 1 : Indicateurs d'Impact */}
        <div className="mb-14">
          <span className="text-xs font-mono text-orange-600 uppercase tracking-widest block mb-2">// Impact</span>
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-950 mb-4">
            Des solutions qui créent un impact durable.
          </h2>
          <p className="text-sm text-slate-500 max-w-xl leading-relaxed">
            Chaque produit du portefeuille InnovatelQ suit la même discipline : résoudre un problème concret, le pouver sur le terrain, puis l'exploiter à grande échelle.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-24">
          {stats.map((s, index) => (
            <motion.div 
              key={s.text}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-50 border border-slate-200/60 rounded-2xl p-6 hover:border-orange-500/20 hover:bg-slate-100/50 transition-all duration-300"
            >
              <div className="text-3xl font-black text-orange-500">{s.value}</div>
              <div className="text-xs font-medium text-slate-600 mt-1">{s.text}</div>
            </motion.div>
          ))}
        </div>

        {/* ⚙️ Section 2 : Les Références (Le Ticker Défilant à l'identique du Sénégal) */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono text-orange-600 uppercase tracking-widest block mb-2">// Références</span>
          <h3 className="text-3xl font-extrabold text-slate-950 tracking-tight">Ils nous font confiance</h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">
            Nous collaborons avec les meilleurs — opérateurs, cabinets, universités et acteurs majeurs de l'innovation.
          </p>
        </div>

        {/* 🎬 Le Ticker avec l'effet d'ombrage translucide fondu sur les bords gauche/droite */}
        <div className="relative w-full py-4 overflow-hidden before:absolute before:left-0 before:top-0 before:bottom-0 before:w-24 before:bg-gradient-to-r before:from-white before:to-transparent before:z-20 after:absolute after:right-0 after:top-0 after:bottom-0 after:w-24 after:bg-gradient-to-l after:from-white after:to-transparent after:z-20">
          
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 28, repeat: Infinity }}
            className="flex gap-6 whitespace-nowrap w-max"
          >
            {/* On duplique le tableau de logos pour assurer la continuité visuelle infinie sans coupure */}
            {[...partnerLogos, ...partnerLogos, ...partnerLogos].map((logo, i) => (
              <div 
                key={i} 
                className="w-48 h-22 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center p-5 hover:border-orange-500/30 hover:shadow-md transition-all duration-300 shrink-0 select-none overflow-hidden"
              >
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  className="h-11 w-auto max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-500" 
                  loading="lazy"
                />
              </div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
}
