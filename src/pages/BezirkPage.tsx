import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import { bezirkeData } from "@/data/bezirke";
import { Phone, MessageCircle, Mail, MapPin, CheckCircle, Star, Clock, ChevronRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const BezirkPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const bezirk = bezirkeData.find((b) => b.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (!bezirk) return;
    document.title = bezirk.metaTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", bezirk.metaDescription);
    else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content = bezirk.metaDescription;
      document.head.appendChild(m);
    }
  }, [bezirk]);

  if (!bezirk) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Bezirk nicht gefunden</h1>
          <Link to="/standorte" className="text-primary hover:underline">Zurück zu allen Standorten</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* HERO */}
      <section className="bg-primary text-primary-foreground py-12 md:py-20">
        <div className="container">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 leading-tight uppercase">{bezirk.heroTitle}</h1>
          <div className="flex flex-wrap gap-3 mb-6">
            <a href="tel:+4930123456" className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-bold hover:opacity-90 transition">
              <Phone className="w-5 h-5" /> Jetzt anrufen
            </a>
            <a href="https://wa.me/4930123456" className="inline-flex items-center gap-2 bg-background text-foreground px-6 py-3 rounded-lg font-bold hover:opacity-90 transition">
              <MessageCircle className="w-5 h-5" /> WhatsApp
            </a>
          </div>
          <div className="flex items-center gap-1 text-primary-foreground/90">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
            <span className="ml-2 font-semibold">4.9 / 5 basierend auf zahlreichen zufriedenen Kunden in Berlin</span>
          </div>
        </div>
      </section>

      {/* EINLEITUNG */}
      <section className="py-12 md:py-16">
        <div className="container max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Einleitung</h2>
          {bezirk.einleitung.map((p, i) => (
            <p key={i} className="text-muted-foreground mb-4 leading-relaxed">{p}</p>
          ))}
          <Link to="/kontakt" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-bold hover:opacity-90 transition mt-4">
            <Mail className="w-5 h-5" /> Jetzt unverbindlich anfragen
          </Link>
        </div>
      </section>

      {/* EINSATZGEBIETE */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Einsatzgebiete in Berlin {bezirk.name}</h2>
          <p className="font-semibold mb-3">Wir sind täglich in folgenden Ortsteilen im Einsatz:</p>
          <ul className="grid sm:grid-cols-2 gap-2 mb-6">
            {bezirk.ortsteile.map((o) => (
              <li key={o} className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <span className="font-medium">{o}</span>
              </li>
            ))}
          </ul>
          <p className="font-semibold mb-3">Typische Straßen und Einsatzorte:</p>
          <ul className="grid sm:grid-cols-2 gap-1 mb-6">
            {bezirk.strassen.map((s) => (
              <li key={s} className="flex items-center gap-2 text-muted-foreground">
                <ChevronRight className="w-3 h-3 text-primary shrink-0" />
                {s}
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground italic">{bezirk.ortsteileHinweis}</p>
        </div>
      </section>

      {/* LEISTUNGEN */}
      <section className="py-12 md:py-16">
        <div className="container max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Unsere Leistungen – alles aus einer Hand</h2>
          <p className="text-muted-foreground mb-4">Wir übernehmen die komplette Wohnungsauflösung von Anfang bis Ende.</p>
          <ul className="space-y-2">
            {bezirk.leistungen.map((l) => (
              <li key={l} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>{l}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* KOSTEN */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Kosten einer Wohnungsauflösung</h2>
          <p className="text-muted-foreground mb-4">{bezirk.kostenText}</p>
          <ul className="space-y-2 mb-6">
            {bezirk.kostenFaktoren.map((f) => (
              <li key={f} className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-primary shrink-0" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
            <p className="font-bold text-primary">👉 Sie erhalten immer ein transparentes Festpreis-Angebot ohne versteckte Kosten.</p>
          </div>
        </div>
      </section>

      {/* TERMINE */}
      <section className="py-12 md:py-16">
        <div className="container max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Wie schnell sind Termine möglich?</h2>
          <p className="text-muted-foreground mb-4">{bezirk.terminText}</p>
          <Link to="/kontakt" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-bold hover:opacity-90 transition">
            <Clock className="w-5 h-5" /> Jetzt Termin sichern
          </Link>
        </div>
      </section>

      {/* ANWESENHEIT */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Müssen Sie vor Ort sein?</h2>
          <p className="text-muted-foreground">{bezirk.anwesenheitText}</p>
        </div>
      </section>

      {/* MÖBEL */}
      <section className="py-12 md:py-16">
        <div className="container max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Umgang mit Möbeln und Gegenständen</h2>
          <p className="text-muted-foreground mb-4">Alle Gegenstände werden sorgfältig sortiert und fachgerecht behandelt.</p>
          <ul className="space-y-2">
            {bezirk.moebelPunkte.map((p) => (
              <li key={p} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* TODESFALL */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Wohnungsauflösung nach Todesfall</h2>
          <p className="text-muted-foreground">{bezirk.todText}</p>
        </div>
      </section>

      {/* ABLAUF */}
      <section className="py-12 md:py-16">
        <div className="container max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Ablauf</h2>
          <div className="space-y-4">
            {bezirk.ablauf.map((step, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shrink-0">{i + 1}</div>
                <span className="font-medium text-lg">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WARUM WIR */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Warum wir</h2>
          <ul className="space-y-3">
            {bezirk.warumWir.map((w) => (
              <li key={w} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                <span className="font-medium">{w}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ KURZ */}
      <section className="py-12 md:py-16">
        <div className="container max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Häufige Fragen</h2>
          {bezirk.faqKurz.map((f, i) => (
            <div key={i} className="mb-4 p-4 bg-muted/30 rounded-lg">
              <p className="font-bold mb-1">{f.q}</p>
              <p className="text-muted-foreground">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* EXTREMER FAQ BEREICH */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Ausführliche FAQ – Wohnungsauflösung Berlin {bezirk.name}</h2>
          <Accordion type="single" collapsible className="space-y-2">
            {bezirk.faqExtrem.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-background rounded-lg border border-border px-4">
                <AccordionTrigger className="text-left font-semibold text-sm md:text-base py-4">
                  {f.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                  {f.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-black mb-4">Jetzt kostenlos anfragen – Wohnungsauflösung Berlin {bezirk.name}</h2>
          <p className="mb-8 text-primary-foreground/80 max-w-xl mx-auto">Wir beraten Sie unverbindlich und erstellen Ihnen ein transparentes Festpreis-Angebot.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="tel:+4930123456" className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition">
              <Phone className="w-5 h-5" /> Anrufen
            </a>
            <a href="https://wa.me/4930123456" className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition">
              <MessageCircle className="w-5 h-5" /> WhatsApp
            </a>
            <Link to="/kontakt" className="inline-flex items-center gap-2 bg-secondary/80 text-secondary-foreground px-8 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition">
              <Mail className="w-5 h-5" /> Anfrage senden
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BezirkPage;
