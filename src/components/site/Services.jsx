import React from "react";
import { Globe, Smartphone, ShoppingCart, ArrowUpRight, Check } from "lucide-react";
import serviceWeb from "@/assets/service-web.jpg";
import serviceMobile from "@/assets/service-mobile.jpg";
import serviceEcommerce from "@/assets/service-ecommerce.jpg";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const services = [
  { icon: Globe, title: "Site Vitrine", desc: "Sites web professionnels, rapides et élégants pour présenter votre activité et convertir vos visiteurs.", image: serviceWeb, features: ["Design premium sur mesure", "100% responsive", "Optimisé SEO"] },
  { icon: Smartphone, title: "Application Mobile", desc: "Applications iOS et Android performantes pour engager vos utilisateurs partout, à tout moment.", image: serviceMobile, features: ["iOS & Android natif", "UX fluide et moderne", "Notifications push"] },
  { icon: ShoppingCart, title: "E-commerce", desc: "Boutiques en ligne complètes avec paiement sécurisé, gestion de stock et back-office intuitif.", image: serviceEcommerce, features: ["Paiement sécurisé", "Gestion des commandes", "Tableau de bord complet"] },
];

export function Services() {
  return (
    <section id="services" className="py-20 sm:py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <ScrollReveal animation="fade-up">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-accent uppercase tracking-widest">
              <span className="w-8 h-px bg-accent" /> Nos services
            </div>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Des solutions digitales <span className="text-gradient-brand">clé en main</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="mt-12 sm:mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((s, index) => (
            <ScrollReveal key={s.title} animation="fade-up" delay={index * 150}>
              <article className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card transition-all duration-500 hover:-translate-y-2 hover:shadow-elegant hover:border-accent/50">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={s.image} alt={s.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-2xl bg-white/95 backdrop-blur grid place-items-center shadow-lg">
                    <s.icon size={22} className="text-accent" />
                  </div>
                </div>
                <div className="p-6 sm:p-7">
                  <h3 className="text-xl font-bold">{s.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
