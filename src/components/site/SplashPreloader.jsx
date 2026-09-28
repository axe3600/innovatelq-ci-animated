import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function SplashPreloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // ⏳ Animation de la jauge orange de 0 à 100%
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsReady(true);
          return 100;
        }
        
        // Progression fluide par petits bonds
        const increment = Math.floor(Math.random() * 8) + 4;
        const nextProgress = prev + increment;
        
        if (nextProgress >= 100) {
          clearInterval(interval);
          setIsReady(true);
          return 100;
        }
        
        return nextProgress;
      });
    }, 80); // Vitesse de chargement fluide et agréable

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="fixed inset-0 z-55 bg-white flex flex-col items-center justify-center px-6 selection:bg-orange-500 selection:text-white"
    >
      <div className="text-center space-y-8 max-w-md w-full">
        
        {/* 🏢 Nom de marque textuel en Noir Intense */}
        <div className="space-y-2">
          <h1 className="text-4xl font-black tracking-[0.2em] text-slate-950 uppercase">
            INNOVATELQ
          </h1>
          <p className="text-xs font-mono uppercase tracking-[0.25em] text-slate-400">
            CONSTRUISONS L'AFRIQUE NUMÉRIQUE
          </p>
        </div>

        {/* 🍊 Slogan d'entité en Orange */}
        <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.18em] text-orange-500">
          INNOVATION COMPANY PANAFRICAINE
        </p>

        {/* ⚡ Jauge de chargement orange épurée */}
        <div className="space-y-4 pt-6 max-w-xs mx-auto w-full">
          <div className="h-[3px] w-full bg-slate-100 rounded-full overflow-hidden relative border border-slate-200/40">
            <motion.div
              className="absolute left-0 top-0 bottom-0 bg-orange-500 shadow-md shadow-orange-500/30"
              style={{ width: `${progress}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>
          
          {/* 📝 Modification validée : Affiche "Chargement..." puis disparaît complètement à 100% */}
          <div className="text-xs font-mono uppercase tracking-widest font-bold text-slate-500 h-4">
            {progress < 100 ? "Chargement..." : ""}
          </div>
        </div>

        {/* 🎯 Le Bouton d'entrée interactif RESTE LÀ et apparaît à la fin du chargement */}
        <div className="h-16 pt-2 flex items-center justify-center">
          <AnimatePresence>
            {isReady && (
              <motion.button
                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ type: "spring", stiffness: 100, damping: 12 }}
                whileHover={{ scale: 1.05, borderColor: "#ea580c", color: "#ea580c" }}
                whileTap={{ scale: 0.98 }}
                onClick={onComplete}
                className="group flex items-center gap-3 border-2 border-orange-500 text-orange-600 font-mono text-xs uppercase tracking-widest font-black px-8 py-3.5 rounded-full bg-transparent transition-all duration-300 shadow-md shadow-orange-500/5"
              >
                ENTRER
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300 text-orange-500" />
              </motion.button>
            )}
          </AnimatePresence>
        </div>

      </div>
    </motion.div>
  );
}
