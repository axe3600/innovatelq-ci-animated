import React from "react";
import { motion } from "framer-motion";
import { Globe, Smartphone, ShoppingCart, Check } from "lucide-react";
import serviceWeb from "@/assets/service-web.jpg";
import serviceMobile from "@/assets/service-mobile.jpg";
import serviceEcommerce from "@/assets/service-ecommerce.jpg";

const services = [
  { icon: Globe, title: "Site Vitrine", desc: "Sites web professionnels, rapides et élégants pour présenter votre activité et convertir vos visiteurs.", image: serviceWeb, features: ["Design premium sur mesure", "100% responsive", "Optimisé SEO"] },
  { icon: Smartphone, title: "Application Mobile", desc: "Applications iOS et Android performantes pour engager vos utilisateurs partout, à tout moment.", image: serviceMobile, features: ["iOS & Android natif", "UX fluide et moderne", "Notifications push"] },
  { icon: ShoppingCart, title: "E-commerce", desc: "Boutiques en ligne complètes avec paiement sécurisé, gestion de stock et back-office intuitif.", image: serviceEcommerce, features: ["Paiement sécurisé", "Gestion des commandes", "Tableau de bord complet"] },
];

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-white text-slate-900 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono text-orange-600 uppercase tracking-widest block mb-2">// Nos services</span>
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950">
            Des solutions digitales <span className="text-gradient-brand">clé en main.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, index) => (
            <motion.article 
              key={s.title}
              // 💫 Animation Chic : Apparition progressive décalée par rapport à l'index de la carte
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group bg-slate-50 border border-slate-200/80 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-orange-500/20 transition-all duration-300 h-full flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <img src={s.image} alt={s.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
                <div className="absolute top-4 left-4 w-11 h-11 rounded-xl bg-orange-500 shadow-md flex items-center justify-center text-white">
                  <s.icon size={20} />
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <h3 className="text-xl font-bold tracking-tight text-slate-950">{s.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{s.desc}</p>
                  <ul className="space-y-2 pt-2">
                    {s.features.map(f => (
                      <li key={f} className="flex items-center gap-2 text-xs text-slate-700">
                        <Check size={14} className="text-orange-500 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <motion.a 
                  href="#contact"
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 rounded-xl border border-orange-500/30 text-center text-xs font-bold text-orange-600 bg-white group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 transition-all duration-300 block shadow-sm"
                >
                  PARLER DE MON PROJET →
                </motion.a>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
