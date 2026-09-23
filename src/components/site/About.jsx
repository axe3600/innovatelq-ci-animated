import React from "react";
import { Target, Eye, Heart, Handshake } from "lucide-react";
import aboutTeam from "@/assets/about-team.jpg";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const pillars = [
  { icon: Target, title: "Notre mission", text: "Accompagner les entreprises africaines dans leur transformation digitale grâce à des solutions numériques innovantes, sécurisées et performantes." },
  { icon: Eye, title: "Notre vision", text: "Devenir la référence technologique en Afrique en démocratisant l'accès aux outils numériques de dernière génération." },
  { icon: Heart, title: "Nos valeurs", text: "Excellence, innovation, intégrité, proximité client et amélioration continue au cœur de chaque projet." },
  { icon: Handshake, title: "Notre engagement", text: "Un accompagnement sur mesure, une écoute attentive et un partenariat durable pour la réussite de vos ambitions." },
];

export function About() {
  return (
    <section id="apropos" className="py-20 sm:py-24 lg:py-32 bg-muted/40 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          
          <ScrollReveal animation="fade-right">
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-elegant group">
                <img
                  src={aboutTeam}
                  alt="Équipe INNOVATELQ au travail"
                  width={1400}
                  height={1000}
                  loading="lazy"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-transparent" />
              </div>
              <div className="hidden sm:block absolute -bottom-6 -right-4 bg-background rounded-2xl shadow-elegant p-5 border border-border max-w-[240px]">
                <div className="text-3xl font-bold text-gradient-brand">+5 ans</div>
                <div className="text-xs text-muted-foreground mt-1">d'expertise au service des entreprises africaines</div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-left" delay={200}>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-accent uppercase tracking-widest">
                <span className="w-8 h-px bg-accent" /> À propos
              </div>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                L'expertise digitale au service <span className="text-gradient-brand">de votre croissance</span>
              </h2>
              <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
                INNOVATELQ est une entreprise technologique basée à Abidjan, dédiée à la conception de solutions numériques modernes. Nous combinons expertise, innovation et proximité pour transformer vos idées en produits digitaux à fort impact.
              </p>
            </div>
          </ScrollReveal>
        </div>

        <div className="mt-14 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {pillars.map((p, index) => (
            <ScrollReveal key={p.title} animation="fade-up" delay={index * 150}>
              <div className="group h-full bg-background rounded-2xl p-6 border border-border hover:border-accent/40 hover:-translate-y-2 hover:shadow-elegant transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-accent/10 group-hover:bg-gradient-brand grid place-items-center transition-all duration-300">
                  <p.icon size={22} className="text-accent group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="mt-5 text-lg font-bold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
