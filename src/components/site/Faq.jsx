import React, { useState } from "react";
import { Plus } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const faqs = [
  { q: "Combien de temps dure un projet type ?", a: "Selon la complexité, un projet dure de 3 semaines à plusieurs mois. Nous vous communiquons un planning précis dès la phase de cadrage." },
  { q: "Travaillez-vous avec des clients hors Afrique ?", a: "Oui, nous accompagnons des clients partout dans le monde grâce à nos processus de travail à distance éprouvés." },
  { q: "Proposez-vous de la maintenance après livraison ?", a: "Oui, nous offrons plusieurs formules de maintenance et de support pour garantir la pérennité de vos solutions." },
  { q: "Comment garantissez-vous la sécurité des données ?", a: "Nous suivons les standards internationaux (ISO 27001, OWASP) et intégrons la sécurité dès la conception (Security by Design)." },
];

export function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="py-24 lg:py-32 bg-muted/40 overflow-hidden">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-accent uppercase tracking-widest">
              <span className="w-8 h-px bg-accent" /> FAQ
            </div>
            <h2 className="mt-4 text-4xl lg:text-5xl font-bold leading-tight">
              Questions <span className="text-gradient-brand">fréquentes</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <ScrollReveal key={f.q} animation="fade-up" delay={i * 100}>
                <div className="bg-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:border-accent/40 shadow-sm">
                  <button className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left" onClick={() => setOpen(isOpen ? null : i)}>
                    <span className="font-semibold text-foreground">{f.q}</span>
                    <span className={`w-8 h-8 grid place-items-center rounded-full bg-muted transition-all duration-300 shrink-0 ${isOpen ? "bg-gradient-brand rotate-45" : ""}`}>
                      <Plus size={16} className={isOpen ? "text-white" : "text-foreground"} />
                    </span>
                  </button>
                  <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
