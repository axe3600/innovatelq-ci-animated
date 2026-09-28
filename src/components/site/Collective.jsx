import React from "react";
import { motion } from "framer-motion";
import { Globe, ArrowUpRight, Zap, Shield, Sparkles } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal.jsx";

// 🚀 IMPORTS DES RESSOURCES PHYSIQUES (Carte & Vidéo de fond)
import worldMapImg from "../../assets/africa-map.webp"; 
import collectiveBgVideo from "../../assets/Video/Innovatelq-collectif.mp4";

const ecosystemBoxes = [
  { id: 1, label: "Créativité", detail: "Design & Innovation", icon: <Sparkles size={14} /> },
  { id: 2, label: "Europe & Afrique", detail: "Impact Global", icon: <Globe size={14} /> },
  { id: 3, label: "Performance", detail: "Solutions Scalables", icon: <Zap size={14} /> },
  { id: 4, label: "Sécurité", detail: "Infrastructure Stable", icon: <Shield size={14} /> }
];

export function Collective() {
  return (
    /* 🚀 RECONVERSION : Arrière-plan de la section en gris ultra-transparent avec flou doux */
    <section id="collectif" className="py-24 lg:py-32 text-white overflow-hidden relative border-b border-zinc-900 w-full min-h-screen flex items-center justify-center bg-zinc-900/10 backdrop-blur-[2px]">
      
      {/* 🎥 LECTEUR VIDÉO INTERACTIF EN ARRIÈRE-PLAN PLEIN ÉCRAN */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <video
          src={collectiveBgVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-75"
        />
        
        {/* 🔒 VOILE GRIS TRANSPARENT */}
        <div className="absolute inset-0 bg-zinc-900/30 backdrop-blur-sm" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.02)_0%,rgba(9,9,11,0.6)_90%)]" />
      </div>

      {/* Grandes lueurs d'ambiance diffuses (superposées à la vidéo) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[140px] pointer-events-none z-1" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[100px] pointer-events-none animate-pulse z-1" />

      {/* 🏢 CONTENU GLOBAL */}
      <div className="mx-auto max-w-7xl px-6 lg:px-10 relative z-10 w-full">
        
        {/* En-tête de section centré */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <ScrollReveal animation="fade-up">
            <span className="text-xs font-mono text-orange-500 uppercase tracking-wildest block mb-3">
              // LE COLLECTIF
            </span>
            
            {/* Titre "Collectif" coloré en Orange */}
            <h2 className="text-5xl sm:text-6xl font-black tracking-tight text-orange-500 mb-6 uppercase">
              Collectif
            </h2>
            
            {/* Paragraphe principal configuré en blanc pur éclatant (text-white) */}
            <p className="text-sm sm:text-base text-white leading-relaxed mb-6 font-bold opacity-100">
              Au fil de nos projets — Saveat, MOVAO, Slash, MenuVia, Malaika, Happy Livraison, 
              Afrikabaka, Kotekka, la production audiovisuelle, le conseil, le marketing — nous 
              observons un fil conducteur : identifier un problème, concevoir une solution, la tester, 
              puis la déployer à grande échelle. C'est cette logique qui constitue l'ADN d'InnovateLQ.
            </p>
            
            {/* Paragraphe secondaire en dégradé subtil */}
            <p className="text-sm sm:text-base text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500 font-bold leading-relaxed">
              Nous créons. We test. We improve. We industrialize. We replicate. Every initiative of the collective 
              responds to this same dynamic ; transforming an idea into a solution, a solution into a product, a 
              product into a replicable model for <span className="text-white underline decoration-orange-500 underline-offset-4">Europe and Africa</span>.
            </p>
          </ScrollReveal>
        </div>

        {/* ─── SYSTÈME GRAVITATIONNEL AVEC CARTE ET COMPOSANTS SATÉLLITES ─── */}
        <div className="flex justify-center items-center min-h-[650px] relative my-6">
          <ScrollReveal animation="zoom-in">
            <div className="relative w-[600px] h-[600px] flex items-center justify-center scale-90 sm:scale-100">
              
              {/* HALO CENTRAL RÉACTIVÉ : Augmentation de l'opacité orange sous la carte */}
              <div className="absolute w-[450px] h-[450px] bg-orange-500/20 rounded-full blur-3xl pointer-events-none" />

              {/* L'ANNEAU D'ORBITE MODIFIÉ : border-2 et opacité augmentée à orange-500/40 pour une visibilité nette */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
                className="absolute w-[520px] h-[520px] border-2 border-dashed border-orange-500/40 rounded-full flex items-center justify-center"
              >
                {ecosystemBoxes.map((box, index) => {
                  const angle = index * 90;
                  return (
                    <div
                      key={box.id}
                      style={{
                        transform: `rotate(${angle}deg) translateY(-260px) rotate(-${angle}deg)`,
                      }}
                      className="absolute"
                    >
                      {/* 🚀 FIX RENDU HOVER NOIR : 
                          - Par défaut : bg-white/10 (blanc transparent givré)
                          - Au survol : group-hover:bg-zinc-950/95 (devient noir mat et opaque)
                          - group-hover:border-orange-500/50 pour un contour net sur le noir */}
                      <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
                        whileHover={{ scale: 1.05, border: "1px solid rgba(249, 115, 22, 0.7)", background: "black" }}
                        className="w-48 p-4 bg-white/10 border border-white/20 rounded-xl shadow-[0_4px_25px_rgba(0,0,0,0.25)] backdrop-blur-md cursor-pointer transition-all duration-300 hover:shadow-[0_0_25px_rgba(249,115,22,0.4)] group-hover:bg-zinc-950/95 group-hover:border-orange-500/50 text-left group"
                      >
                        <div className="flex items-center gap-2 mb-1">
                          {/* Icône claire par défaut, orange sur le hover */}
                          <div className="w-6 h-6 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-white group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 transition-all duration-300">
                            {box.icon}
                          </div>
                          {/* Titre blanc par défaut, orange au survol */}
                          <span className="text-xs font-bold text-white group-hover:text-orange-400 transition-colors">
                            {box.label}
                          </span>
                        </div>
                        {/* Détail gris clair par défaut, blanc-gris au survol pour rester lisible sur le fond noir */}
                        <p className="text-[10px] text-zinc-200 font-medium leading-normal pl-0.5 group-hover:text-zinc-400 transition-colors">
                          {box.detail}
                        </p>
                      </motion.div>
                    </div>
                  );
                })}
              </motion.div>

              {/* LE CŒUR CENTRAL : DIMENSIONS ET CONTOUR ORANGE AUTOUR DE LA CARTE */}
              <div className="w-[440px] h-[340px] relative flex items-center justify-center z-20 pointer-events-none select-none">
                <motion.img
                  animate={{ opacity: [0.85, 0.95, 0.85] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  src={worldMapImg} 
                  alt="Africa Map Collective"
                  className="w-full h-full object-contain filter invert-[0.35] brightness-115 contrast-100 opacity-80 drop-shadow-[0_0_25px_rgba(249,115,22,0.85)]"
                />
              </div>

            </div>
          </ScrollReveal>
        </div>

        {/* ─── BOUTONS D'ACTION DU BAS ─── */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6">
          <ScrollReveal animation="fade-up" delay={150}>
            <a 
              href="#solutions" 
              className="inline-flex items-center justify-center rounded-full bg-slate-900/40 backdrop-blur-sm border border-zinc-800 hover:border-zinc-600 px-8 py-3.5 text-xs font-mono uppercase tracking-wildest font-bold text-zinc-400 hover:text-white transition-all duration-300"
            >
              Découvrir nos solutions
            </a>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-up" delay={250}>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 px-8 py-3.5 text-xs font-mono uppercase tracking-wildest font-black text-white transition-all duration-300 shadow-lg shadow-orange-600/10 hover:scale-[1.02]"
            >
              Speak to an expert <ArrowUpRight size={14} />
            </a>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
