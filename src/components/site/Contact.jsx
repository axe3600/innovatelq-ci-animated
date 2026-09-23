import React, { useState } from "react";
import { Mail, MapPin, Phone, Send, Facebook, Linkedin, Instagram, Check, MessageCircle } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="py-20 sm:py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <ScrollReveal animation="fade-up">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-accent uppercase tracking-widest">
              <span className="w-8 h-px bg-accent" /> Contact
            </div>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Parlons de <span className="text-gradient-brand">votre projet</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="mt-12 sm:mt-14 grid lg:grid-cols-5 gap-6 lg:gap-8 items-start">
          <div className="lg:col-span-2 w-full h-full">
            <ScrollReveal animation="fade-right" delay={150}>
              <div className="bg-card-dark text-white rounded-3xl p-6 sm:p-8 relative overflow-hidden h-full shadow-lg group">
                <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-accent/20 blur-3xl group-hover:bg-accent/30 transition-colors duration-500" />
                <div className="relative z-10">
                  <h3 className="text-xl sm:text-2xl font-bold">Nos coordonnées</h3>
                  <ul className="mt-8 space-y-5">
                    <li className="flex items-start gap-4 group/item">
                      <div className="w-11 h-11 rounded-xl bg-white/10 grid place-items-center shrink-0 group-hover/item:bg-gradient-brand transition-all duration-300">
                        <Phone size={18} className="text-accent group-hover/item:text-white" />
                      </div>
                      <div>
                        <div className="text-xs text-white/60">Téléphone</div>
                        <a href="tel:+2250747568441" className="text-sm font-medium hover:text-accent transition-colors">+225 07 47 56 84 41</a>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 group/item">
                      <div className="w-11 h-11 rounded-xl bg-white/10 grid place-items-center shrink-0 group-hover/item:bg-gradient-brand transition-all duration-300">
                        <Mail size={18} className="text-accent group-hover/item:text-white" />
                      </div>
                      <div>
                        <div className="text-xs text-white/60">Email</div>
                        <a href="mailto:innovatelq081@gmail.com" className="text-sm font-medium hover:text-accent transition-colors">innovatelq081@gmail.com</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-3 w-full">
            <ScrollReveal animation="fade-left" delay={300}>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.target;
                  const fd = new FormData(form);
                  const message = `Nouvelle demande depuis le site:\nNom: ${fd.get("nom")}\nProjet: ${fd.get("description")}`;
                  const url = `https://wa.me{encodeURIComponent(message)}`;
                  window.open(url, "_blank");
                  setSent(true);
                  setTimeout(() => setSent(false), 4000);
                  form.reset();
                }}
                className="bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-elegant space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-foreground/80 mb-2">Nom *</label>
                    <input name="nom" required className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-accent transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-foreground/80 mb-2">Description *</label>
                  <textarea name="description" required rows={4} className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-accent transition-all resize-none" />
                </div>
                <button type="submit" className="w-full sm:w-auto inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-semibold text-white shadow-brand hover:scale-105 transition-all duration-300">
                  {sent ? <>Envoi réussi <Check size={16} /></> : <>Envoyer sur WhatsApp <Send size={16} /></>}
                </button>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
