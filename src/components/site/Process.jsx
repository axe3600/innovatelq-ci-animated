import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  const [index, setIndex] = useState(4); // L'étape 05 est active par défaut

  // 🔄 EFFET AUTOPLAY : Fait défiler la frise chronologique automatiquement toutes les 4 secondes
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % steps.length);
    }, 4000); // 4000ms = 4 secondes par étape

    return () => clearInterval(timer); // Nettoyage de l'intervalle si l'utilisateur quitte la page
  }, []);

  return (
    <section id="processus" className="py-24 bg-white text-slate-900 overflow-hidden border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        
        {/* En-tête de section avec effet d'apparition au défilement */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs font-mono text-orange-600 uppercase tracking-widest block mb-2">// Notre méthode</span>
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-950 uppercase">DE L'IDÉE À LA COMMERCIALISATION</h2>
        </motion.div>

        {/* Zone de description dynamique animée avec fondu croisé chic */}
        <div className="min-h-[120px] flex items-center justify-center text-center max-w-2xl mx-auto mb-12 px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="space-y-2"
            >
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-orange-500">
                🏆 Étape {steps[index].id} : {steps[index].label}
              </h3>
              <p className="text-base sm:text-lg font-medium text-slate-700 leading-relaxed">
                {steps[index].desc}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* La frise chronologique horizontale interactive et automatisée */}
        <div className="relative mt-8 max-w-4xl mx-auto px-6 py-4">
          {/* Ligne grise en arrière-plan */}
          <div className="absolute top-1/2 left-6 right-6 h-0.5 bg-slate-100 -translate-y-1/2 z-0" />
          
          <div className="flex justify-between relative z-10">
            {steps.map((s, i) => {
              const isActive = index === i;
              return (
                <button
                  key={s.id}
                  onClick={() => setIndex(i)} // L'utilisateur peut toujours cliquer pour forcer le choix
                  className="flex flex-col items-center group relative focus:outline-none cursor-pointer"
                >
                  {/* Numéro au-dessus du bouton radio */}
                  <span className={`text-[10px] font-mono font-bold absolute -top-6 transition-colors duration-300 ${
                    isActive ? "text-orange-500 font-extrabold" : "text-slate-400 group-hover:text-slate-600"
                  }`}>
                    {s.id}
                  </span>
                  
                  {/* Puce bouton radio orbitale animée */}
                  <motion.div 
                    animate={isActive ? { scale: [1, 1.2, 1] } : { scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className={`w-5 h-5 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                      isActive ? "bg-orange-500 border-orange-500 shadow-lg shadow-orange-500/40" : "bg-white border-slate-300 group-hover:border-slate-400"
                    }`}
                  >
                    {isActive && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                  </motion.div>

                  {/* Libellé de l'étape en dessous */}
                  <span className={`text-[11px] font-semibold absolute top-7 whitespace-nowrap hidden sm:block transition-colors duration-300 ${
                    isActive ? "text-slate-900 font-bold" : "text-slate-400 group-hover:text-slate-600"
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
