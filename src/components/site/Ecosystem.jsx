import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// 🔌 Importation de tes véritables logos depuis ton nouveau sous-dossier /assets/Logo Eco/
import logoKotekka from "@/assets/Logo Eco/kotekka.webp";
import logoMovao from "@/assets/Logo Eco/movao.webp";
import logoMalaika from "@/assets/Logo Eco/malaika.webp";
import logoMenuvia from "@/assets/Logo Eco/menuvia.webp";
import logoHappychill from "@/assets/Logo Eco/happychill.webp";
import logoSlash from "@/assets/Logo Eco/slash.webp";
import logoLivraison from "@/assets/Logo Eco/happy-livraison.webp";
// 🛠️ FIX APPLIQUÉ : Alignement sur le nom exact "afrikababa.webp" vu sur ton explorateur
import logoBaka from "@/assets/Logo Eco/afrikababa.webp"; 

// 📋 Tableau complet des 8 entités officielles d'INNOVATELQ avec leurs logos dédiés
const entities = [
  { id: "kotekka", name: "Kotekka", tag: "Solution", label: "E-Commerce", desc: "Solution InnovatelQ — le Shopify de l'Afrique : plateforme pour créer, gérer et développer sa boutique en ligne.", logo: logoKotekka },
  { id: "movao", name: "MOVAO", tag: "Filiale", label: "Transport & Billetterie", desc: "Filiale InnovatelQ — plateforme d'achat de billets en ligne pour simplifier les déplacements et réservations en Afrique.", logo: logoMovao },
  { id: "malaika", name: "Malaïka", tag: "Filiale", label: "E-Santé", desc: "Filiale InnovatelQ — service de médecin en ligne pour consulter à distance et accéder aux soins plus facilement.", logo: logoMalaika },
  { id: "menuvia", name: "MenuVia", tag: "Solution", label: "Restauration", desc: "Solution InnovatelQ — gestion de restaurant avec menus digitaux et commandes via QR code, pensée pour le terrain africain.", logo: logoMenuvia },
  { id: "happychill", name: "Happychill", tag: "Filiale", label: "Lifestyle E-Com", desc: "Filiale InnovatelQ — marque e-commerce lifestyle, de la commande en ligne à une expérience fluide pour le consommateur.", logo: logoHappychill },
  { id: "slash", name: "Slash.", tag: "Filiale", label: "Food Tech", desc: "Filiale InnovatelQ — commande de nourriture avec paiement différé en fin de mois, pour plus de flexibilité au quotidien.", logo: logoSlash },
  { id: "happylivraison", name: "Happy Livraison", tag: "Filiale", label: "Logistique", desc: "Filiale InnovatelQ — service de livraison en ligne pour acheminer les commandes rapidement et efficacement.", logo: logoLivraison },
  { id: "afrikabaka", name: "Afrikabaka", tag: "Filiale", label: "Sourcing Asie", desc: "Filiale InnovatelQ — commande de produits depuis l'Asie vers l'Afrique, avec une chaîne d'approvisionnement simplifiée.", logo: logoBaka }
];

export function Ecosystem() {
  const [activeIndex, setActiveIndex] = useState(0);

  // 🔄 Rotation automatique fluide toutes les 5 secondes
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % entities.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const activeEntity = entities[activeIndex];

  return (
    <section id="ecosysteme" className="py-24 bg-[#090d16] text-white overflow-hidden border-b border-slate-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        
        {/* En-tête officiel de section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-orange-400 uppercase tracking-widest block mb-2">// Écosystème</span>
          <h2 className="text-4xl font-extrabold tracking-tight text-white uppercase">Les entreprises que nous construisons</h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-3 max-w-2xl mx-auto leading-relaxed">
            Chaque entité ci-dessous est une filiale ou une solution portée par InnovatelQ — pas un simple projet livré et oublié, mais une entreprise numérique autonome, pensée pour durer et grandir sur le continent.
          </p>
        </div>

        {/* 🌀 LE CARROUSEL 3D HORIZONTAL AVEC 8 CARTES SYNCHRONISÉES (100% TAILWIND & FRAMER MOTION) */}
        <div className="relative h-80 w-full flex items-center justify-center overflow-visible mb-16 [perspective:1200px]">
          <div className="relative w-full max-w-lg h-64 flex items-center justify-center">
            
            {entities.map((e, i) => {
              // 📐 Alignement circulaire dynamique pour gérer l'écartement de 8 entités simultanées
              let offset = i - activeIndex;
              if (offset < -entities.length / 2) offset += entities.length;
              if (offset > entities.length / 2) offset -= entities.length;

              const isActive = i === activeIndex;
              const absOffset = Math.abs(offset);

              // Masquer les cartes trop éloignées en arrière-plan pour un rendu impeccable
              if (absOffset > 2) return null;

              return (
                <motion.div
                  key={e.id}
                  onClick={() => setActiveIndex(i)}
                  style={{ transformOrigin: "center center", zIndex: 100 - absOffset }}
                  animate={{
                    x: offset * 250, // Ajustement de l'écartement horizontal
                    scale: isActive ? 1.05 : 0.78, // Échelle proportionnelle
                    rotateY: offset * -42, // Inclinaison 3D issue de ton DevTools (42.24deg)
                    opacity: isActive ? 1 : 0.45 - absOffset * 0.05, // Opacité progressive
                  }}
                  transition={{ type: "spring", stiffness: 85, damping: 14 }}
                  className={`absolute w-60 h-64 rounded-2xl cursor-pointer select-none transition-all duration-500 overflow-hidden border bg-[linear-gradient(155deg,rgba(45,106,79,0.08)_0%,rgba(29,29,27,0.96)_55%,#1d1d1b_100%)] ${
                    isActive 
                      ? "border-orange-500 shadow-2xl shadow-orange-500/25 scale-[1.02]" 
                      : "border-white/10 hover:border-white/20"
                  }`}
                >
                  {/* Trame de grille décorative extraite */}
                  <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]" />

                  {/* Structure interne de la carte identique à ton inspection */}
                  <div className="relative flex h-full flex-col p-5 justify-between z-10">
                    
                    {/* Badge de catégorie supérieur */}
                    <div>
                      <span className={`inline-block rounded-full px-2.5 py-0.5 text-[0.6rem] font-bold tracking-[0.2em] uppercase border ${
                        e.tag === "Solution" 
                          ? "bg-sky-500/10 text-sky-400 border-sky-500/20" 
                          : "bg-orange-500/15 text-orange-400 border-orange-500/20"
                      }`}>
                        {e.tag}
                      </span>
                    </div>

                    {/* Conteneur d'image logo central (bg-black/20) */}
                    <div className="flex flex-1 items-center justify-center py-3">
                      <div className="flex h-24 w-full items-center justify-center rounded-xl px-3 bg-black/30 border border-white/5 shadow-inner">
                        <img 
                          alt={e.name} 
                          src={e.logo} 
                          className="h-11 w-auto max-w-full object-contain filter brightness-110" 
                          loading="lazy"
                        />
                      </div>
                    </div>

                    {/* Zone d'information inférieure */}
                    <div className="border-t border-white/5 pt-3">
                      <p className="text-sm font-bold text-white tracking-tight">{e.name}</p>
                      <p className="mt-0.5 text-[0.65rem] tracking-[0.15em] text-white/50 uppercase font-mono">
                        {e.label}
                      </p>
                    </div>

                  </div>
                </motion.div>
              );
            })}

          </div>
        </div>

        {/* 📄 ZONE DE DESCRIPTION DYNAMIQUE INFÉRIEURE */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#0e1422] border border-slate-850 rounded-2xl p-6 sm:p-8 relative overflow-hidden min-h-[130px] shadow-2xl">
            <div className="absolute top-0 left-0 w-1 h-full bg-orange-500" />
            <AnimatePresence mode="wait">
              <motion.div
                key={activeEntity.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-3"
              >
                <div className="flex flex-wrap gap-2.5 items-center">
                  <h4 className="text-xl font-black text-white tracking-tight">{activeEntity.name}</h4>
                  <span className={`text-[9px] font-bold px-2.5 py-0.5 rounded-full font-mono border ${
                    activeEntity.tag === "Solution"
                      ? "bg-sky-500/10 text-sky-400 border-sky-500/20"
                      : "bg-orange-500/10 text-orange-400 border-orange-500/20"
                  }`}>
                    {activeEntity.label}
                  </span>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed max-w-3xl">
                  {activeEntity.desc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}

