import React from "react";
import { motion } from "framer-motion";
import ecommerceImg from "@/assets/portfolio-ecommerce.png";
import mobileImg from "@/assets/portfolio-mobile.png";
import erpImg from "@/assets/portfolio-erp.png";
import crmImg from "@/assets/portfolio-crm.png";

const projects = [
  { title: "Plateforme e-commerce", cat: "Développement Web", desc: "Boutique en ligne complète avec paiement intégré et back-office.", image: ecommerceImg },
  { title: "App mobile logistique", cat: "Mobile", desc: "Suivi temps réel des livraisons et gestion des tournées.", image: mobileImg },
  { title: "ERP industriel", cat: "ERP sur mesure", desc: "Pilotage production, stocks et finance pour une PME performante.", image: erpImg },
  { title: "CRM commercial", cat: "CRM", desc: "Gestion complète du cycle de vente et de la relation client.", image: crmImg },
];

export function Portfolio() {
  return (
    <section id="realisations" className="py-24 lg:py-32 bg-white text-slate-900 overflow-hidden border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono text-orange-600 uppercase tracking-widest block mb-2">// Nos réalisations</span>
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight">
            Des projets qui <span className="text-gradient-brand">font la différence.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {projects.map((p, index) => (
            <motion.article 
              key={p.title}
              // 💫 Entrées croisées alternées gauche/droite asymétriques très chic
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="group relative overflow-hidden rounded-3xl bg-slate-50 border border-slate-200 shadow-sm flex flex-col justify-between h-full"
            >
              <div className="aspect-[16/10] relative overflow-hidden bg-slate-900">
                <motion.img 
                  src={p.image} 
                  alt={p.title} 
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full object-cover object-center" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 rounded-full bg-white/95 border border-slate-200 px-3 py-1 text-[10px] font-mono font-bold text-slate-800 uppercase tracking-wider shadow-sm">
                  {p.cat}
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="text-lg font-bold tracking-tight text-slate-950">{p.title}</h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">{p.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
