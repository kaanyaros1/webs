import Layout from "@/components/Layout";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Kontakt = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      <section className="py-20">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Kontakt</h1>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            Kontaktieren Sie uns für eine kostenlose Beratung und ein unverbindliches Angebot.
          </p>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Kontaktdaten */}
            <div className="space-y-6">
              <a href="tel:+4930208482810" className="flex items-center gap-4 bg-card border border-border rounded-lg p-6 hover:border-primary/30 hover:shadow-md transition-all">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-bold">Telefon</div>
                  <div className="text-muted-foreground">030 208 482 810</div>
                </div>
              </a>

              <a href="https://wa.me/4915216118885" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-card border border-border rounded-lg p-6 hover:border-primary/30 hover:shadow-md transition-all">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-bold">WhatsApp</div>
                  <div className="text-muted-foreground">Schreiben Sie uns direkt</div>
                </div>
              </a>

              <a href="mailto:info@wohnungsaufloesung-bsr.de" className="flex items-center gap-4 bg-card border border-border rounded-lg p-6 hover:border-primary/30 hover:shadow-md transition-all">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-bold">E-Mail</div>
                  <div className="text-muted-foreground">info@wohnungsaufloesung-bsr.de</div>
                </div>
              </a>

              <div className="flex items-center gap-4 bg-card border border-border rounded-lg p-6">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-bold">Standort</div>
                  <div className="text-muted-foreground">Berlin, Deutschland</div>
                </div>
              </div>

              {/* Google Maps */}
              <div className="rounded-lg overflow-hidden border border-border relative">
                <iframe
                  title="BSR Wohnungsauflösung Berlin – Standort auf Google Maps"
                  src="https://www.google.com/maps?q=BSR+Wohnungsauflösung+%26+Entrümpelung+Berlin+-+Sperrmüll+Abholung,+Seestraße+40,+13353+Berlin&output=embed"
                  width="100%"
                  height="250"
                  style={{ border: 0, pointerEvents: "none" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <a
                  href="https://maps.app.goo.gl/RonPZ4wWWd1cLhDZ7?g_st=ic"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Auf Google Maps öffnen"
                  className="absolute inset-0 flex items-end justify-center pb-3 bg-foreground/0 hover:bg-foreground/10 transition-colors"
                >
                  <span className="bg-primary text-primary-foreground px-4 py-2 rounded font-bold text-sm shadow-lg flex items-center gap-2">
                    <MapPin className="w-4 h-4" /> Auf Google Maps öffnen
                  </span>
                </a>
              </div>
            </div>

            {/* Formular */}
            <div className="bg-card border border-border rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Anfrage senden</h2>
              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-primary text-5xl mb-4">✓</div>
                  <h3 className="text-xl font-bold mb-2">Vielen Dank!</h3>
                  <p className="text-muted-foreground">Wir melden uns schnellstmöglich bei Ihnen.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Name *</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Ihr Name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">E-Mail *</label>
                    <input required type="email" className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder="ihre@email.de" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Telefon</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder="030 ..." />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Nachricht *</label>
                    <textarea required rows={5} className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none" placeholder="Beschreiben Sie Ihr Anliegen..." />
                  </div>
                  <button type="submit" className="w-full bg-primary text-primary-foreground py-3 rounded-md font-bold hover:opacity-90 transition-opacity">
                    Anfrage absenden
                  </button>
                  <p className="text-xs text-muted-foreground text-center">
                    Mit Absenden stimmen Sie unserer{" "}
                    <Link to="/datenschutz" className="text-primary underline">Datenschutzerklärung</Link> zu.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Kontakt;
