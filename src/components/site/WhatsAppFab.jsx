import React from "react";
import { MessageCircle } from "lucide-react";

// 💡 L'exportation nommée correspond exactement à ce que demande App.jsx
export function WhatsAppFab() {
  return (
    <a
      href="https://wa.me"
      target="_blank"
      rel="noreferrer"
      aria-label="Contacter sur WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-brand hover:scale-105 transition-all duration-300 animate-in fade-in zoom-in"
    >
      <div className="relative flex h-5 w-5 items-center justify-center">
        {/* Effet de halo vert qui pulse derrière l'icône pour attirer l'œil */}
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/40 opacity-75"></span>
        <MessageCircle size={20} className="relative" />
      </div>
      <span className="hidden sm:inline text-sm font-semibold">WhatsApp</span>
    </a>
  );
}
