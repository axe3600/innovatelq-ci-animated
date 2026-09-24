import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

// 🔌 IMPORTATION MAGIQUE : On importe la vidéo pour que Vite gère correctement le chemin d'accès
import heroVideo from "@/assets/Video/Innovatelq-Video.mp4";

export function Hero() {
  const sectionRef = useRef(null);

  function handlePointerMove(e) {
    const section = sectionRef.current;
    if (!section) return;
    const rect = section.getBoundingClientRect();
    const mx = ((e.clientX - rect.left) / rect.width) * 100;
    const my = ((e.clientY - rect.top) / rect.height) * 100;
    section.style.setProperty("--mx", `${mx}%`);
    section.style.setProperty("--my", `${my}%`);
  }

  return (
    <section
      id="accueil"
      ref={sectionRef}
      onPointerMove={handlePointerMove}
      className="relative isolate overflow-hidden min-h-[85vh] flex items-center pt-36 pb-20 bg-neutral-950 border-b border-neutral-900"
      style={{ "--mx": "50%", "--my": "50%" }}
    >
      {/* 🎥 FIX BOSCO : Suppression du voile blanc et de la fusion pour révéler la vidéo à 100% de sa puissance */}
      <div className="absolute inset-0 -z-30 overflow-hidden bg-neutral-950">
        <video
          className="w-full h-full object-cover opacity-70 select-none pointer-events-none"
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
      </div>

      {/* Un léger dégradé noir transparent sur le côté gauche pour assurer un contraste parfait sur les textes */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-r from-black/80 via-black/30 to-transparent pointer-events-none" />

      {/* Lueur orange interactive au passage de la souris */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none transition-opacity duration-300"
        style={{
          background: "radial-gradient(800px circle at var(--mx) var(--my), rgba(255,138,61,0.1), rgba(234,88,12,0.02) 50%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl space-y-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-xs font-mono uppercase tracking-wider text-orange-400">
            <Sparkles size={12} />
            Solutions numériques nouvelle génération
          </div>

          {/* Écritures adaptées en Blanc et Orange pour ressortir sur la vidéo nette */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-[1.05]">
            Propulsez votre <br />
            entreprise dans <span className="text-stroke-orange">l'ère digitale.</span>
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-2xl leading-relaxed">
            INNOVATELQ conçoit des solutions numériques sur mesure pour accompagner votre transformation avec performance et sécurité.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#services"
              className="group inline-flex items-center gap-2 rounded-full bg-orange-600 px-6 py-3.5 text-sm font-semibold text-white hover:bg-orange-700 transition-all duration-300 shadow-md shadow-orange-600/10"
            >
              Demander un devis
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-black/40 backdrop-blur px-6 py-3.5 text-sm font-semibold text-slate-200 hover:bg-slate-800 transition-all duration-300"
            >
              Nous contacter ↗
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
