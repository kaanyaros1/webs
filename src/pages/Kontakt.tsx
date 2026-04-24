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
              <a href="tel:+4930123456789" className="flex items-center gap-4 bg-card border border-border rounded-lg p-6 hover:border-primary/30 hover:shadow-md transition-all">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-bold">Telefon</div>
                  <div className="text-muted-foreground">030 123 456 789</div>
                </div>
              </a>

              <a href="https://wa.me/4930123456789" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-card border border-border rounded-lg p-6 hover:border-primary/30 hover:shadow-md transition-all">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-bold">WhatsApp</div>
                  <div className="text-muted-foreground">Schreiben Sie uns direkt</div>
                </div>
              </a>

              <a href="mailto:info@bsr-wohnungsaufloesung.de" className="flex items-center gap-4 bg-card border border-border rounded-lg p-6 hover:border-primary/30 hover:shadow-md transition-all">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-bold">E-Mail</div>
                  <div className="text-muted-foreground">info@bsr-wohnungsaufloesung.de</div>
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
              <div className="rounded-lg overflow-hidden border border-border">
                <iframe
                  title="Standort Berlin"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d155422.2574!2d13.2846504!3d52.5069296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e373f035901%3A0x42120465b5e3b70!2sBerlin!5e0!3m2!1sde!2sde!4v1680000000000"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
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
