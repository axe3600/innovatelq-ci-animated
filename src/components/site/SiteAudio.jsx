import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX, ArrowUp } from "lucide-react";

export function SiteAudio() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // Gestion de l'affichage du bouton de retour en haut au scroll
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    
    // Démarrage automatique au premier clic de l'utilisateur sur le site
    const startAudio = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
      }
    };
    window.addEventListener("pointerdown", startAudio, { once: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("pointerdown", startAudio);
    };
  }, [isPlaying]);

  const toggleMute = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  return (
    // 🛠️ FIX ALIGNEMENT : On place le conteneur du son et de la flèche plus haut (bottom-24) 
    // et bien serré sur la droite (right-4) pour ne plus écraser le badge WhatsApp (qui reste à bottom-5 right-5).
    <div className="fixed bottom-24 right-4 z-50 flex flex-col gap-3 items-center">
      
      {/* 🚀 Bouton Retour en haut discret et surélevé */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-800 shadow-md hover:border-orange-500 hover:text-orange-500 transition-colors cursor-pointer"
          >
            <ArrowUp size={16} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* 🎵 Bouton d'activation/désactivation du son surélevé */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleMute}
        className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-white shadow-xl border border-slate-800 relative group cursor-pointer"
      >
        {isPlaying ? <Volume2 size={16} className="text-orange-500" /> : <VolumeX size={16} className="text-slate-400" />}
        
        {/* Halo d'onde orange quand la musique tourne */}
        {isPlaying && (
          <span className="absolute -inset-1 rounded-full border border-orange-500/25 animate-ping pointer-events-none" />
        )}
      </motion.button>

      <audio ref={audioRef} src="/site-sound.mp3" loop preload="auto" />
    </div>
  );
}
