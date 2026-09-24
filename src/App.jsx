import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { SplashPreloader } from "./components/site/SplashPreloader";
import { Navbar } from "./components/site/Navbar";
import { Hero } from "./components/site/Hero";
import { About } from "./components/site/About";
import { Services } from "./components/site/Services";
import { WhyUs } from "./components/site/WhyUs";
import { Ecosystem } from "./components/site/Ecosystem";
import { Process } from "./components/site/Process";
import { Portfolio } from "./components/site/Portfolio";
import { Testimonials } from "./components/site/Testimonials";
import { Faq } from "./components/site/Faq";
import { Contact } from "./components/site/Contact";
import { Footer } from "./components/site/Footer";
import { WhatsAppFab } from "./components/site/WhatsAppFab";
import { SiteAudio } from "./components/site/SiteAudio";
import { Impact } from "./components/site/Impact";


export default function App() {
  // 🔌 State local permettant de gérer si le Splash Screen est affiché ou non
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="relative min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-orange-500 selection:text-white">
      
      {/* 🎬 Le rideau Splash Preloader Blanc & Orange réactif */}
      <AnimatePresence mode="wait">
        {showSplash && (
          <SplashPreloader onComplete={() => setShowSplash(false)} />
        )}
      </AnimatePresence>

      {/* 🎵 Outils globaux d'arrière-plan */}
      <SiteAudio />
      <WhatsAppFab />
      
      {/* 🧭 En-tête de navigation */}
      <Navbar />
      
      {/* 🏗️ Contenu principal du site web (Devient actif après avoir cliqué sur Entrer) */}
      <main className="bg-white">
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Ecosystem />
        <Process />
        <Portfolio />
        <Testimonials />
        <Faq />
        <Impact />
        <Contact />
      </main>
      
      {/* 🏢 Pied de page */}
      <Footer />
    </div>
  );
}
