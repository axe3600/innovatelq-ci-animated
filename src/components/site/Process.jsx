import React from "react";
import { ClipboardList, FileText, Code2, Rocket } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const steps = [
  { icon: ClipboardList, title: "Analyse des besoins", desc: "Nous étudions vos enjeux, objectifs et contraintes pour cadrer le projet." },
  { icon: FileText, title: "Proposition & conception", desc: "Devis détaillé, planning et architecture validés ensemble." },
  { icon: Code2, title: "Développement & tests", desc: "Réalisation itérative avec contrôle qualité, sécurité et performances." },
  { icon: Rocket, title: "Déploiement & support", desc: "Mise en production maîtrisée, formation et assistance continue." },
];

export function Process() {
  return (
    <section id="processus" className="py-20 lg:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <ScrollReveal animation="fade-up">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-accent uppercase tracking-widest">
              <span className="w-8 h-px bg-accent" /> Notre processus
            </div>
            <h2 className="mt-4 text-3xl lg:text-4xl font-bold leading-tight">
              Une méthodologie <span className="text-gradient-brand">éprouvée</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <ScrollReveal key={s.title} animation="fade-up" delay={i * 125}>
              <div className="group relative h-full bg-card border border-border rounded-2xl p-6 hover:border-accent/40 hover:shadow-elegant hover:-translate-y-1 transition-all duration-300">
                <span className="absolute top-4 right-4 text-3xl font-bold text-accent/10 group-hover:text-accent/20 transition-colors duration-300">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="w-11 h-11 rounded-xl bg-accent/10 group-hover:bg-gradient-brand grid place-items-center transition-all duration-300">
                  <s.icon size={20} className="text-accent group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="mt-4 text-base font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
