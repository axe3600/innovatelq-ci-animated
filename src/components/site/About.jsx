import React from "react";
import { motion } from "framer-motion";

// 🔌 Importation de la vidéo MP4 depuis ton dossier assets
import aboutVideo from "@/assets/Video/Innovatelq-carte.mp4";

export function About() {
  return (
    <section id="apropos" className="py-24 lg:py-32 bg-white text-slate-900 overflow-hidden border-b border-slate-100 w-full">
      {/* Largeur maximale écran pour un étalement total */}
      <div className="mx-auto max-w-full px-4 sm:px-8 lg:px-12">
        
        {/* Disposition verticale avec espacement aéré */}
        <div className="flex flex-col items-center gap-14 w-full">
          
          {/* 📝 Bloc du Haut : Textes */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="w-full max-w-4xl text-center space-y-6 px-4"
          >
            {/* Titre d'introduction */}
            <div className="text-2xl sm:text-3xl font-black text-orange-600 uppercase tracking-widest">
              L'ADN d'InnovatelQ
            </div>

            {/* Titre Principal */}
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-950 leading-tight">
              Nous ne vendons pas une promesse. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-600">
                Nous vendons une preuve.
              </span>
            </h2>

            {/* Paragraphe descriptif centré */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium max-w-3xl mx-auto">
              Avant de proposer une solution à un client, nous l'avons construite, testée et exploitée nous-mêmes. Chaque produit du portefeuille InnovatelQ est né d'un problème réel observé sur le terrain — jamais d'un modèle importé.
            </p>
          </motion.div>

          {/* 🎬 Bloc du Bas : Lecteur Vidéo Étalé */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="w-full max-w-none flex justify-center shrink-0 px-2 md:px-6" 
          >
            {/* Conteneur principal avec format vidéo cinéma */}
            <div className="w-full max-w-[1550px] rounded-3xl overflow-hidden shadow-2xl border border-slate-100 bg-slate-50 relative group aspect-video">
              
              {/* 🎥 Balise vidéo configurée en plein écran */}
              <video
                src={aboutVideo}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover rounded-3xl group-hover:scale-[1.002] transition-transform duration-500"
              />
              
              {/* Superposition du gradient blanc/10 d'origine */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent pointer-events-none" />
              
              {/* 🌀 🚀 BADGE ENCORE PLUS GRAND : Passage à w-40 h-40 et ajustement du positionnement négatif */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                className="absolute -bottom-8 -left-8 w-40 h-40 rounded-full bg-orange-500 flex flex-col items-center justify-center p-6 text-center shadow-2xl border-2 border-white/40 z-10 cursor-pointer select-none hover:bg-orange-600 transition-colors"
              >
                <span className="text-xs font-mono font-black uppercase tracking-widest leading-tight text-white">
                  Expertise <br /> digitale
                </span>
              </motion.div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
