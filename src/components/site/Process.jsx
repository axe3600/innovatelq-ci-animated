import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe } from "lucide-react";

const steps = [
  { id: "01", label: "Idée", desc: "Identification d'un problème sectoriel réel et récurrent sur le marché africain." },
  { id: "02", label: "MVP", desc: "Création d'une première version fonctionnelle minimale testée à petite échelle." },
  { id: "03", label: "Exploitation réelle", desc: "Déploiement en conditions réelles d'utilisation pour valider l'usage et les données." },
  { id: "04", label: "Données", desc: "Analyse des metrics, retours d'expérience et stabilisation des architectures." },
  { id: "05", label: "Modèle rentable", desc: "Validation du pricing, optimisation des coûts et rentabilisation du service." },
  { id: "06", label: "Solution réplicable", desc: "Structuration logicielle propre permettant de dupliquer la solution dans d'autres pays." },
  { id: "07", label: "Commercialisation", desc: "Lancement à grande échelle avec ouverture aux institutions et entreprises." }
];

export function Process() {
  const [index, setIndex] = useState(0);

  // 🔄 EFFET AUTOPLAY : Défilement automatique toutes les 4 secondes
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % steps.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="processus" className="py-24 bg-slate-100 text-slate-900 overflow-hidden border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        
        {/* En-tête de section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs font-mono text-orange-600 uppercase tracking-widest block mb-2">// Notre méthode</span>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-950 uppercase break-words">DE L'IDÉE À LA COMMERCIALISATION</h2>
        </motion.div>

        {/* Zone de description dynamique */}
        {/* 🚀 TEXTE AGRANDI : min-h augmenté pour accueillir le texte plus grand confortablement */}
        <div className="min-h-[140px] flex items-center justify-center text-center max-w-3xl mx-auto mb-16 px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="space-y-3"
            >
              {/* 🚀 TITRE ÉTAPE AGRANDI : text-xs -> text-sm/text-base */}
              <h3 className="text-sm sm:text-base font-mono font-bold uppercase tracking-wider text-orange-500">
                🏆 Étape {steps[index].id} : {steps[index].label}
              </h3>
              {/* 🚀 DESCRIPTION AGRANDIE : text-base/lg -> text-xl/text-2xl */}
              <p className="text-xl sm:text-2xl font-semibold text-slate-800 leading-relaxed">
                {steps[index].desc}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* La frise chronologique horizontale interactive */}
        <div className="relative mt-12 max-w-4xl mx-auto px-7 py-4">
          
          {/* 1. Ligne de liaison grise (S'aligne parfaitement de bout en bout entre les centres des puces) */}
          <div className="absolute top-1/2 left-11 right-11 h-1 bg-slate-300/60 -translate-y-1/2 z-0 rounded-full" />
          
          {/* 2. 🚀 LIGNE ORANGE INTERACTIVE CORRIGÉE : S'arrête pile au centre mathématique de la puce active sans déborder */}
          <motion.div 
            initial={{ width: "0%" }}
            animate={{ 
              width: `${(index / (steps.length - 1)) * 100}%` 
            }}
            transition={{ type: "spring", stiffness: 60, damping: 15 }}
            className="absolute top-1/2 left-11 h-1 bg-orange-500 -translate-y-1/2 z-0 origin-left rounded-full"
            style={{
              // Largeur maximale restreinte à la zone interne réelle (entre le centre de la 1ère et la dernière puce)
              maxWidth: "calc(100% - 5.5rem)" 
            }}
          />
          
          <div className="flex justify-between relative z-10 w-full">
            {steps.map((s, i) => {
              const isActive = index === i;
              const isPast = i <= index;

              return (
                <button
                  key={s.id}
                  onClick={() => setIndex(i)}
                  className="flex flex-col items-center group relative focus:outline-none cursor-pointer"
                >
                  {/* Numéro au-dessus */}
                  <span className={`text-[10px] font-mono font-bold absolute -top-7 transition-colors duration-300 ${
                    isActive ? "text-orange-500 font-extrabold" : isPast ? "text-orange-400" : "text-slate-400 group-hover:text-slate-600"
                  }`}>
                    {s.id}
                  </span>
                  
                  {/* BOUTON RADIO AGRANDI */}
                  <motion.div 
                    animate={isActive ? { scale: 1.1 } : { scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all duration-300 z-10 ${
                      isActive 
                        ? "bg-orange-500 border-orange-500 shadow-lg shadow-orange-500/40" 
                        : isPast 
                          ? "bg-orange-500/10 border-orange-500" 
                          : "bg-white border-slate-300 group-hover:border-slate-400"
                    }`}
                  >
                    {/* MINI-GLOBE GÉANT */}
                    {isActive ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                        className="text-white flex items-center justify-center"
                      >
                        <Globe size={14} strokeWidth={2.5} />
                      </motion.div>
                    ) : (
                      <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                        isPast ? "bg-orange-500" : "bg-transparent group-hover:bg-slate-300"
                      }`} />
                    )}
                  </motion.div>

                  {/* Libellé en dessous */}
                  <span className={`text-[11px] font-semibold absolute top-10 whitespace-nowrap hidden sm:block transition-colors duration-300 ${
                    isActive ? "text-slate-900 font-bold" : isPast ? "text-slate-600" : "text-slate-400 group-hover:text-slate-600"
                  }`}>
                    {s.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
