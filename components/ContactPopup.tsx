"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Loader2, CheckCircle } from "lucide-react";

interface ContactPopupProps {
  open: boolean;
  onClose: () => void;
}

export default function ContactPopup({ open, onClose }: ContactPopupProps) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  function update(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error();
      setStatus("sent");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  function handleClose() {
    onClose();
    setTimeout(() => setStatus("idle"), 300);
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-bg-card border border-border-dark rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border-dark">
                <h2 className="font-display text-2xl font-bold text-cream">
                  Nous contacter
                </h2>
                <button
                  onClick={handleClose}
                  className="text-text-muted hover:text-cream transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Body */}
              <div className="p-6">
                {status === "sent" ? (
                  <div className="text-center py-8">
                    <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
                    <p className="text-cream text-lg font-medium mb-2">
                      Message envoy&eacute; !
                    </p>
                    <p className="text-text-muted">
                      Nous vous r&eacute;pondrons dans les plus brefs d&eacute;lais.
                    </p>
                    <button
                      onClick={handleClose}
                      className="mt-6 bg-brand hover:bg-brand-light text-white rounded-full px-6 py-2.5 font-medium transition-colors"
                    >
                      Fermer
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm text-text-muted mb-1">
                        Nom *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => update("name", e.target.value)}
                        className="w-full bg-bg-dark border border-border-dark rounded-lg px-4 py-2.5 text-cream placeholder:text-text-muted focus:outline-none focus:border-brand transition-colors"
                        placeholder="Votre nom"
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-text-muted mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                        className="w-full bg-bg-dark border border-border-dark rounded-lg px-4 py-2.5 text-cream placeholder:text-text-muted focus:outline-none focus:border-brand transition-colors"
                        placeholder="votre@email.fr"
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-text-muted mb-1">
                        T&eacute;l&eacute;phone
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => update("phone", e.target.value)}
                        className="w-full bg-bg-dark border border-border-dark rounded-lg px-4 py-2.5 text-cream placeholder:text-text-muted focus:outline-none focus:border-brand transition-colors"
                        placeholder="06 00 00 00 00"
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-text-muted mb-1">
                        Message *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={form.message}
                        onChange={(e) => update("message", e.target.value)}
                        className="w-full bg-bg-dark border border-border-dark rounded-lg px-4 py-2.5 text-cream placeholder:text-text-muted focus:outline-none focus:border-brand transition-colors resize-none"
                        placeholder="Votre message..."
                      />
                    </div>

                    {status === "error" && (
                      <p className="text-red-400 text-sm">
                        Une erreur est survenue. Veuillez r&eacute;essayer.
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="w-full bg-brand hover:bg-brand-light disabled:opacity-60 text-white rounded-full py-3 font-medium transition-colors flex items-center justify-center gap-2"
                    >
                      {status === "sending" ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          Envoyer
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
