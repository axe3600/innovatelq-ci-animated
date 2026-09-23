import React from "react";
import { Award, Sparkles, Lightbulb, Lock, HeartHandshake, Smile } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const items = [
  { icon: Award, title: "Expertise technique", desc: "Des ingénieurs expérimentés maîtrisant les technologies les plus avancées." },
  { icon: Sparkles, title: "Solutions sur mesure", desc: "Chaque projet est unique et conçu selon vos besoins spécifiques." },
  { icon: Lightbulb, title: "Innovation", desc: "Nous adoptons les meilleures pratiques et technologies émergentes." },
  { icon: Lock, title: "Sécurité", desc: "Vos données et systèmes protégés selon les standards les plus stricts." },
  { icon: HeartHandshake, title: "Accompagnement dédié", desc: "Un interlocuteur unique à vos côtés tout au long du projet." },
  { icon: Smile, title: "Satisfaction client", desc: "Votre réussite est notre priorité et le moteur de nos efforts." },
];

export function WhyUs() {
  return (
    <section id="pourquoi" className="relative py-20 lg:py-24 bg-gradient-dark text-white overflow-hidden">
      <div className="absolute inset-0 -z-0 opacity-30" style={{
        backgroundImage: "radial-gradient(circle at 30% 20%, oklch(0.72 0.19 48 / 0.35) 0%, transparent 45%), radial-gradient(circle at 80% 80%, oklch(0.72 0.19 48 / 0.25) 0%, transparent 45%)"
      }} />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <ScrollReveal animation="fade-up">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-accent uppercase tracking-widest">
              <span className="w-8 h-px bg-accent" /> Pourquoi nous choisir
            </div>
            <h2 className="mt-4 text-3xl lg:text-4xl font-bold leading-tight">
              6 raisons de nous faire <span className="text-gradient-brand">confiance</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, index) => (
            <ScrollReveal key={it.title} animation="fade-up" delay={(index % 3) * 150}>
              <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur p-5 hover:bg-white/[0.06] hover:border-accent/40 hover:-translate-y-1 transition-all duration-300">
                <div className="w-11 h-11 rounded-xl bg-accent/15 group-hover:bg-gradient-brand grid place-items-center transition-all duration-300">
                  <it.icon size={20} className="text-accent group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="mt-4 text-base font-bold">{it.title}</h3>
                <p className="mt-2 text-sm text-white/65 leading-relaxed">{it.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
