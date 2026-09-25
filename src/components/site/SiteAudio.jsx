import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX, ArrowUp } from "lucide-react";

export function SiteAudio() {
  const audioRef = useRef(null);
  
  // Récupération de l'état mémorisé
  const [isPlaying, setIsPlaying] = useState(() => {
    const savedAudioState = localStorage.getItem("innovatelq_audio_playing");
    return savedAudioState === "true"; 
  });
  
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);

    if (audioRef.current) {
      audioRef.current.load();
    }

    // 🚀 ACTION AUTOMATIQUE : Dès que l'utilisateur clique ou scrolle n'importe où sur la page,
    // si la mémoire dit "true", on force la lecture du MP3 automatiquement !
    const forceAutoplayOnInteraction = () => {
      const audio = audioRef.current;
      const isCurrentlySavedTrue = localStorage.getItem("innovatelq_audio_playing") === "true";
      
      if (audio && isCurrentlySavedTrue) {
        audio.play()
          .then(() => {
            // Lecture réussie, on retire les écouteurs pour ne pas surcharger le site
            removeInteractionListeners();
          })
          .catch(() => {
            // Échec temporaire du navigateur
          });
      }
    };

    const addInteractionListeners = () => {
      window.addEventListener("pointerdown", forceAutoplayOnInteraction);
      window.addEventListener("scroll", forceAutoplayOnInteraction);
      window.addEventListener("keydown", forceAutoplayOnInteraction);
    };

    const removeInteractionListeners = () => {
      window.removeEventListener("pointerdown", forceAutoplayOnInteraction);
      window.removeEventListener("scroll", forceAutoplayOnInteraction);
      window.removeEventListener("keydown", forceAutoplayOnInteraction);
    };

    // Si la mémoire est active, on guette le premier geste de l'utilisateur
    if (isPlaying) {
      addInteractionListeners();
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      removeInteractionListeners();
    };
  }, [isPlaying]);

  // Synchronisation manuelle au clic du bouton
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.play()
        .then(() => {
          localStorage.setItem("innovatelq_audio_playing", "true");
        })
        .catch(() => {});
    } else {
      audio.pause();
      localStorage.setItem("innovatelq_audio_playing", "false");
    }
  }, [isPlaying]);

  const toggleAudio = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <div className="fixed bottom-24 right-4 z-50 flex flex-col gap-3 items-center">
      
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-800 shadow-md hover:border-orange-500 hover:text-orange-500 transition-colors cursor-pointer focus:outline-none"
          >
            <ArrowUp size={16} />
          </motion.button>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleAudio}
        className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-white shadow-xl border border-slate-800 relative group cursor-pointer focus:outline-none"
      >
        {isPlaying ? (
          <Volume2 size={16} className="text-orange-500" />
        ) : (
          <VolumeX size={16} className="text-slate-400" />
        )}
        
        {isPlaying && (
          <span className="absolute -inset-1 rounded-full border border-orange-500/25 animate-ping pointer-events-none" />
        )}
      </motion.button>

      <audio ref={audioRef} src="/site-sound.mp3" loop preload="auto" />
    </div>
  );
}
