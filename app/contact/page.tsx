"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { useForm } from "react-hook-form";

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
    <div className="min-h-screen">
      <Header />

      <main className="pt-24">
        <section className="section-padding bg-gradient-to-b from-primary to-secondary">
          <div className="container-custom max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center">
              Kontakt
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div className="bg-secondary p-6 rounded-lg">
                  <h3 className="text-accent font-bold mb-2 text-lg">E-Mail</h3>
                  <a
                    href="mailto:info@herakles-defense.com"
                    className="text-xl hover:text-accent transition-colors"
                  >
                    info@herakles-defense.com
                  </a>
                </div>

                <div className="bg-secondary p-6 rounded-lg">
                  <h3 className="text-accent font-bold mb-2 text-lg">Unternehmen</h3>
                  <p className="text-neutral/80">
                    Hive Guard UG (haftungsbeschränkt)<br />
                    Rosenbuschstr. 2<br />
                    80538 München<br />
                    Deutschland
                  </p>
                </div>

                <div className="bg-secondary p-6 rounded-lg">
                  <h3 className="text-accent font-bold mb-2 text-lg">Geschäftsführer</h3>
                  <p className="text-neutral/80">
                    Bryan Gundrum und Luca Hemmerle
                  </p>
                </div>

                <div className="bg-secondary p-6 rounded-lg">
                  <h3 className="text-accent font-bold mb-2 text-lg">Telefon</h3>
                  <p className="text-neutral/80">0171 1061038</p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-secondary p-8 rounded-lg">
                <h2 className="text-2xl font-bold mb-6">Nachricht senden</h2>

                {submitStatus && (
                  <div
                    className={`mb-6 p-4 rounded-lg ${
                      submitStatus.type === "success"
                        ? "bg-green-900/50 border border-green-500"
                        : "bg-red-900/50 border border-red-500"
                    }`}
                  >
                    <p className="text-neutral">{submitStatus.message}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      {...register("name", { required: "Name ist erforderlich" })}
                      className="w-full px-4 py-3 bg-primary border border-secondary rounded-lg text-neutral focus:outline-none focus:border-accent transition-colors"
                      placeholder="Ihr Name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
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
                      className="w-full px-4 py-3 bg-primary border border-secondary rounded-lg text-neutral focus:outline-none focus:border-accent transition-colors"
                      placeholder="ihre.email@beispiel.de"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Unternehmen (optional)
                    </label>
                    <input
                      type="text"
                      id="company"
                      {...register("company")}
                      className="w-full px-4 py-3 bg-primary border border-secondary rounded-lg text-neutral focus:outline-none focus:border-accent transition-colors"
                      placeholder="Ihr Unternehmen"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Nachricht *
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      {...register("message", { required: "Nachricht ist erforderlich" })}
                      className="w-full px-4 py-3 bg-primary border border-secondary rounded-lg text-neutral focus:outline-none focus:border-accent transition-colors resize-none"
                      placeholder="Ihre Nachricht..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Wird gesendet..." : "Nachricht senden"}
                  </button>

                  <p className="text-sm text-neutral/60 text-center">
                    Mit dem Absenden stimmen Sie unserer{" "}
                    <a href="/datenschutz" className="text-accent hover:underline">
                      Datenschutzerklärung
                    </a>{" "}
                    zu.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
