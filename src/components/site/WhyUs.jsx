import React from "react";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/scroll-reveal.jsx";

const points = [
  { num: "01", label: "Les autres vendent des prestations.", bold: "Nous créons des actifs." },
  { num: "02", label: "Les autres développent des sites web.", bold: "Nous développons des entreprises." },
  { num: "03", label: "Les autres réalisent un projet.", bold: "Nous construisons un écosystème." }
];

export function WhyUs() {
  return (
    // 🛠️ FIX BOSS : Passage sur une couleur de fond gris clair épurée (bg-slate-100) ni trop foncée ni invisible
    <section id="pourquoi" className="py-24 lg:py-32 bg-slate-100 text-slate-900 overflow-hidden border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* 🌀 L'Orbite Tournante Infinie en style lumineux blanc/orange */}
          <div className="lg:col-span-5 flex justify-center relative min-h-[300px]">
            <ScrollReveal animation="zoom-in">
              <div className="relative w-64 h-64 border border-orange-200 rounded-full flex items-center justify-center">
                
                {/* Anneau pointillé en rotation permanente */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                  className="absolute inset-0 border-2 border-dashed border-orange-300/60 rounded-full"
                />
                
                {/* 💡 EFFET RELIEF : Le noyau central reste en blanc pur (bg-white) pour flotter au-dessus du fond gris clair */}
                <div className="w-32 h-32 bg-white border border-orange-100 rounded-full shadow-lg flex items-center justify-center p-4 text-center z-10">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-600">Venture Studio</span>
                </div>

                {/* Satellite orbital orange en movement fluide permanent */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                  className="absolute w-4 h-4 bg-orange-500 rounded-full top-0 left-1/2 -translate-x-1/2 shadow-sm"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Contenu textuel Noir et Orange */}
          <div className="lg:col-span-7 space-y-8">
            <ScrollReveal animation="fade-left">
              <span className="text-xs font-mono text-orange-600 uppercase tracking-wildest">// Ce qui nous différencie</span>
              <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 mt-2">
                Nous ne facturons pas des heures. <br />
                <span className="text-gradient-brand">Nous construisons des actifs.</span>
              </h2>
            </ScrollReveal>

            <div className="space-y-6 pt-4 border-t border-slate-300/80">
              {points.map((p, i) => (
                <ScrollReveal key={p.num} animation="fade-up" delay={i * 100}>
                  <div className="flex gap-4 items-start">
                    {/* 💡 Les pastilles de chiffres passent aussi en blanc pur (bg-white) pour ressortir sur le gris clair */}
                    <span className="text-xs font-mono text-orange-600 bg-white w-7 h-7 rounded-lg flex items-center justify-center shrink-0 font-bold border border-slate-200 shadow-sm">
                      {p.num}
                    </span>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      {p.label} <span className="block font-bold text-slate-900 mt-0.5">{p.bold}</span>
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
