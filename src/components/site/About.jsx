import React from "react";
import { motion } from "framer-motion";
import aboutTeam from "@/assets/about-team.jpg";

export function About() {
  return (
    <section id="apropos" className="py-24 lg:py-32 bg-white text-slate-900 overflow-hidden border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* 📝 Bloc de Gauche : Textes officiels animés au scroll */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="text-xs font-mono text-orange-600 uppercase tracking-widest">
              // L'ADN d'InnovatelQ
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
              Nous ne vendons pas une promesse. <br />
              <span className="text-gradient-brand">Nous vendons une preuve.</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Avant de proposer une solution à un client, nous l'avons construite, testée et exploitée nous-mêmes. Chaque produit du portefeuille InnovatelQ est né d'un problème réel observé sur le terrain — jamais d'un modèle importé.
            </p>
          </motion.div>

          {/* 📸 Bloc de Droite : Image stylisée asymétrique avec sa pastille tournante */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl max-w-md lg:max-w-lg"
            >
              <img
                src={aboutTeam}
                alt="Équipe INNOVATELQ au travail"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent" />
              
              {/* 🌀 Badge orange "Expertise" en rotation infinie comme l'orbite de WhyUs */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                className="absolute -bottom-5 -left-5 w-24 h-24 rounded-full bg-orange-500 flex items-center justify-center p-3 text-center shadow-lg border border-white/25 z-10 cursor-pointer"
              >
                <span className="text-[9px] font-mono font-black uppercase tracking-wider leading-tight text-white">
                  Expertise <br /> digitale
                </span>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
