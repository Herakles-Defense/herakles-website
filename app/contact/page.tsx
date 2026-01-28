"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Building2, User, Phone, Send, CheckCircle, XCircle } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  company?: string;
  message: string;
};

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet. Wir melden uns in Kürze bei Ihnen.",
        });
        reset();
      } else {
        setSubmitStatus({
          type: "error",
          message: result.error || "Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black-primary">
      <Header />

      <main className="pt-24">
        {/* Hero */}
        <section className="section-padding bg-gradient-to-b from-black-primary to-black-secondary">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center mb-16"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white-primary">
                Kontakt
              </h1>
              <p className="text-xl text-white-secondary leading-relaxed">
                Haben Sie Fragen zu Herakles? Wir freuen uns auf Ihre Nachricht.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Info Cards */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6"
              >
                <div className="glass-card border-l-4 border-orange-primary">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-orange-primary/10">
                      <Mail className="text-orange-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-orange-primary font-bold mb-2 text-lg">E-Mail</h3>
                      <a
                        href="mailto:info@herakles-defense.com"
                        className="text-xl text-white-primary hover:text-orange-primary transition-colors"
                      >
                        info@herakles-defense.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="glass-card border-l-4 border-orange-primary">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-orange-primary/10">
                      <Building2 className="text-orange-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-orange-primary font-bold mb-2 text-lg">Unternehmen</h3>
                      <p className="text-white-secondary leading-relaxed">
                        Herakles UG (haftungsbeschränkt)<br />
                        Rosenbuschstr. 2<br />
                        80538 München<br />
                        Deutschland
                      </p>
                    </div>
                  </div>
                </div>

                <div className="glass-card border-l-4 border-orange-primary">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-orange-primary/10">
                      <User className="text-orange-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-orange-primary font-bold mb-2 text-lg">Geschäftsführer</h3>
                      <p className="text-white-secondary">
                        Bryan Gundrum und Luca Hemmerle
                      </p>
                    </div>
                  </div>
                </div>

                <div className="glass-card border-l-4 border-orange-primary">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-orange-primary/10">
                      <Phone className="text-orange-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-orange-primary font-bold mb-2 text-lg">Telefon</h3>
                      <p className="text-white-secondary">0171 1061038</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form - Glassmorphism */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="glass-card border-2 border-orange-primary/30"
              >
                <h2 className="text-2xl font-bold mb-6 text-white-primary">Nachricht senden</h2>

                {/* Success/Error Message with Animation */}
                <AnimatePresence mode="wait">
                  {submitStatus && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: -10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className={`mb-6 p-4 rounded-lg flex items-start gap-3 ${
                        submitStatus.type === "success"
                          ? "bg-green-500/10 border-2 border-green-500"
                          : "bg-red-500/10 border-2 border-red-500"
                      }`}
                    >
                      {submitStatus.type === "success" ? (
                        <CheckCircle className="text-green-500 flex-shrink-0" size={24} />
                      ) : (
                        <XCircle className="text-red-500 flex-shrink-0" size={24} />
                      )}
                      <p className={submitStatus.type === "success" ? "text-green-400" : "text-red-400"}>
                        {submitStatus.message}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-white-secondary">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      {...register("name", { required: "Name ist erforderlich" })}
                      className={`w-full px-4 py-3 bg-black-secondary border rounded-lg text-white-primary focus:outline-none transition-colors ${
                        errors.name ? "border-red-500" : "border-white-primary/20 focus:border-orange-primary"
                      }`}
                      placeholder="Ihr Name"
                    />
                    {errors.name && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-2 text-sm text-red-400 flex items-center gap-1"
                      >
                        <XCircle size={14} />
                        {errors.name.message}
                      </motion.p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-white-secondary">
                      E-Mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      {...register("email", {
                        required: "E-Mail ist erforderlich",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Ungültige E-Mail-Adresse",
                        },
                      })}
                      className={`w-full px-4 py-3 bg-black-secondary border rounded-lg text-white-primary focus:outline-none transition-colors ${
                        errors.email ? "border-red-500" : "border-white-primary/20 focus:border-orange-primary"
                      }`}
                      placeholder="ihre.email@beispiel.de"
                    />
                    {errors.email && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-2 text-sm text-red-400 flex items-center gap-1"
                      >
                        <XCircle size={14} />
                        {errors.email.message}
                      </motion.p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2 text-white-secondary">
                      Unternehmen (optional)
                    </label>
                    <input
                      type="text"
                      id="company"
                      {...register("company")}
                      className="w-full px-4 py-3 bg-black-secondary border border-white-primary/20 rounded-lg text-white-primary focus:outline-none focus:border-orange-primary transition-colors"
                      placeholder="Ihr Unternehmen"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-white-secondary">
                      Nachricht *
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      {...register("message", { required: "Nachricht ist erforderlich" })}
                      className={`w-full px-4 py-3 bg-black-secondary border rounded-lg text-white-primary focus:outline-none transition-colors resize-none ${
                        errors.message ? "border-red-500" : "border-white-primary/20 focus:border-orange-primary"
                      }`}
                      placeholder="Ihre Nachricht..."
                    />
                    {errors.message && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-2 text-sm text-red-400 flex items-center gap-1"
                      >
                        <XCircle size={14} />
                        {errors.message.message}
                      </motion.p>
                    )}
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Wird gesendet...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Nachricht senden
                      </>
                    )}
                  </motion.button>

                  <p className="text-sm text-white-secondary/60 text-center">
                    Mit dem Absenden stimmen Sie unserer{" "}
                    <a href="/datenschutz" className="text-orange-primary hover:underline">
                      Datenschutzerklärung
                    </a>{" "}
                    zu.
                  </p>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
