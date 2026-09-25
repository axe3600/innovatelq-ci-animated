import React, { useEffect, useRef, useState } from "react";

export function ScrollReveal({ children, animation = "fade-up", delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // ⚡ MODIFICATION : On synchronise la visibilité en temps réel.
        // Si l'élément entre dans l'écran, il s'anime. S'il sort (en montant ou descendant), il se réinitialise !
        setIsVisible(entry.isIntersecting);
      },
      { 
        threshold: 0.1,
        // Petite marge pour éviter que l'élément ne clignote sur les bords de l'écran
        rootMargin: "-20px 0px -20px 0px"
      }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const animations = {
    "fade-up": "opacity-0 translate-y-8",
    "fade-left": "opacity-0 translate-x-8",
    "fade-right": "opacity-0 -translate-x-8",
    "zoom-in": "opacity-0 scale-95",
  };

  const visibleClasses = "opacity-100 translate-y-0 translate-x-0 scale-100";

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        isVisible ? visibleClasses : animations[animation]
      }`}
    >
      {children}
    </div>
  );
}
