import React from "react";
import { ArrowUpRight } from "lucide-react";
import ecommerceImg from "@/assets/portfolio-ecommerce.png";
import mobileImg from "@/assets/portfolio-mobile.png";
import erpImg from "@/assets/portfolio-erp.png";
import crmImg from "@/assets/portfolio-crm.png";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const projects = [
  { title: "Plateforme e-commerce", cat: "Développement Web", desc: "Boutique en ligne complète avec paiement intégré et back-office.", image: ecommerceImg },
  { title: "App mobile logistique", cat: "Mobile", desc: "Suivi temps réel des livraisons et gestion des tournées.", image: mobileImg },
  { title: "ERP industriel", cat: "ERP sur mesure", desc: "Pilotage production, stocks et finance pour une PME performante.", image: erpImg },
  { title: "CRM commercial", cat: "CRM", desc: "Gestion complète du cycle de vente et de la relation client.", image: crmImg },
];

export function Portfolio() {
  return (
    <section id="realisations" className="py-24 lg:py-32 bg-muted/40 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <ScrollReveal animation="fade-up">
          <div className="flex flex-wrap items-end justify-between gap-6 max-w-4xl">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-accent uppercase tracking-widest">
                <span className="w-8 h-px bg-accent" /> Nos réalisations
              </div>
              <h2 className="mt-4 text-4xl lg:text-5xl font-bold leading-tight">
                Des projets qui <span className="text-gradient-brand">font la différence</span>
              </h2>
            </div>
          </div>
        </ScrollReveal>

        <div className="mt-14 grid sm:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((p, index) => (
            <ScrollReveal key={p.title} animation={index % 2 === 0 ? "fade-right" : "fade-left"} delay={100}>
              <article className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:shadow-elegant hover:-translate-y-2 transition-all duration-500 h-full">
                <div className="aspect-[16/10] relative overflow-hidden bg-neutral-950">
                  <img src={p.image} alt={p.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 rounded-full bg-white/95 backdrop-blur px-3 py-1 text-xs font-semibold text-foreground shadow-sm">
                    {p.cat}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
