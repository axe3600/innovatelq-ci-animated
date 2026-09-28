import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/scroll-reveal.jsx";

const points = [
  { num: "01", label: "Les autres vendent des prestations.", bold: "Nous créons des actifs." },
  { num: "02", label: "Les autres développent des sites web.", bold: "Nous développons des entreprises." },
  { num: "03", label: "Les autres réalisent un projet.", bold: "Nous construisons un écosystème." }
];

export function WhyUs() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Rotation automatique toutes les 4 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % points.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="pourquoi" className="py-24 lg:py-32 bg-slate-100 text-slate-900 overflow-hidden border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* 🌀 Système Orbital Automatique (Cartes toujours horizontales) */}
          <div className="lg:col-span-6 min-w-0 flex justify-center relative min-h-[360px] sm:min-h-[520px] items-center">
            <ScrollReveal animation="zoom-in">
              <div className="relative w-[450px] h-[450px] flex items-center justify-center scale-[0.65] sm:scale-100">
                
                {/* Grand halo lumineux dynamique */}
                <div className="absolute w-72 h-72 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

                {/* Cercle guide de l'orbite */}
                <div className="absolute w-[340px] h-[340px] border border-slate-300/60 rounded-full pointer-events-none" />

                {/* ─── L'ANNEAU D'ORBITE EN ROTATION ─── */}
                <motion.div 
                  animate={{ rotate: -activeIndex * 120 }} // Amène la carte active au sommet (0°)
                  transition={{ type: "spring", stiffness: 50, damping: 15 }}
                  className="absolute w-[340px] h-[340px] rounded-full flex items-center justify-center"
                >
                  {points.map((p, index) => {
                    const angle = index * 120;
                    const isActive = index === activeIndex;

                    return (
                      <div
                        key={p.num}
                        style={{
                          // Positionnement initial autour de l'anneau
                          transform: `rotate(${angle}deg) translateY(-175px) rotate(-${angle}deg)`,
                          zIndex: isActive ? 40 : 10
                        }}
                        className="absolute flex items-center justify-center"
                      >
                        {/* ─── LA CARTE (Correction : reste strictement verticale) ─── */}
                        <motion.div
                          animate={{ 
                            scale: isActive ? 1.12 : 0.9,
                            opacity: isActive ? 1 : 0.4,
                            // FIX CRUCIAL : Annule exactement la rotation du parent pour rester à 0° (droit)
                            rotate: activeIndex * 120 
                          }}
                          transition={{ type: "spring", stiffness: 50, damping: 15 }}
                          onClick={() => setActiveIndex(index)}
                          className={`w-56 p-5 rounded-xl text-left cursor-pointer transition-all duration-500 ${
                            isActive 
                              ? "bg-[#141414] border-2 border-orange-500 shadow-[0_0_35px_rgba(249,115,22,0.4)]" 
                              : "bg-[#141414]/90 border border-slate-700/30 shadow-sm"
                          }`}
                        >
                          {/* Chiffre */}
                          <span className={`text-xs font-mono font-bold block mb-2 tracking-wider transition-colors duration-300 ${
                            isActive ? "text-orange-400" : "text-slate-500"
                          }`}>
                            {p.num}
                          </span>
                          
                          {/* Texte descriptif */}
                          <p className={`text-[11px] font-medium leading-relaxed mb-1.5 transition-colors duration-300 ${
                            isActive ? "text-slate-200" : "text-slate-400"
                          }`}>
                            {p.label}
                          </p>
                          
                          {/* Message fort clé */}
                          <p className={`text-[12px] font-bold leading-tight transition-colors duration-300 ${
                            isActive ? "text-amber-300" : "text-slate-500"
                          }`}>
                            {p.bold}
                          </p>
                        </motion.div>
                      </div>
                    );
                  })}
                </motion.div>

                {/* ─── LE NOYAU CENTRAL FIXE (Venture Studio) ─── */}
                <div className="w-28 h-28 bg-white border border-slate-200 shadow-2xl rounded-full flex flex-col items-center justify-center p-3 text-center z-20 pointer-events-none">
                  <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-slate-400">
                    InnovatelQ
                  </span>
                  <span className="text-xs font-black uppercase tracking-wider text-orange-600 mt-0.5">
                    Venture <br /> Studio
                  </span>
                </div>

              </div>
            </ScrollReveal>
          </div>

          {/* Contenu textuel statique à Droite */}
          <div className="lg:col-span-6 min-w-0 space-y-8">
            <ScrollReveal animation="fade-left">
              <span className="text-xs font-mono text-orange-600 uppercase tracking-wildest">// Ce qui nous différencie</span>
              <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 mt-2 leading-tight">
                Nous ne facturons pas des heures. <br />
                <span className="text-gradient-brand">Nous construisons des actifs.</span>
              </h2>
            </ScrollReveal>

            <div className="space-y-6 pt-4 border-t border-slate-300/80">
              {points.map((p, i) => {
                const isSelected = i === activeIndex;
                return (
                  <ScrollReveal key={p.num} animation="fade-up" delay={i * 100}>
                    <div 
                      onClick={() => setActiveIndex(i)}
                      className={`flex gap-4 items-start p-3 rounded-xl cursor-pointer transition-all duration-300 ${
                        isSelected ? "bg-white shadow-md border border-slate-200/60 scale-[1.02]" : "opacity-60 hover:opacity-90"
                      }`}
                    >
                      <span className={`text-xs font-mono w-7 h-7 rounded-lg flex items-center justify-center shrink-0 font-bold border transition-colors ${
                        isSelected ? "bg-orange-500 text-white border-orange-500" : "bg-white text-orange-600 border-slate-200"
                      }`}>
                        {p.num}
                      </span>
                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                        {p.label}
                        <span className="block font-bold text-slate-900 mt-0.5">{p.bold}</span>
                      </p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
