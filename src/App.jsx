import React from "react";
import { Navbar } from "./components/site/Navbar";
import { Hero } from "./components/site/Hero";
import { About } from "./components/site/About";
import { Services } from "./components/site/Services";
import { WhyUs } from "./components/site/WhyUs";
import { Process } from "./components/site/Process";
import { Portfolio } from "./components/site/Portfolio";
import { Testimonials } from "./components/site/Testimonials";
import { Faq } from "./components/site/Faq";
import { Contact } from "./components/site/Contact";
import { Footer } from "./components/site/Footer";
import { WhatsAppFab } from "./components/site/WhatsAppFab";
import { SiteAudio } from "./components/site/SiteAudio";

export default function App() {
  return (
    <div className="relative min-h-screen bg-background font-sans antialiased selection:bg-accent selection:text-white">
      {/* 🎵 Outils globaux en arrière-plan */}
      <SiteAudio />
      <WhatsAppFab />

      {/* 🧭 En-tête de navigation fixe */}
      <Navbar />
      
      {/* 🏗️ Corps principal contenant toutes les sections animées */}
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Process />
        <Portfolio />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      
      {/* 🏢 Pied de page global */}
      <Footer />
    </div>
  );
}
