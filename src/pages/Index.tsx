import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Phone, MessageCircle, ArrowRight, CheckCircle, Star, ClipboardList, Eye, Truck, Sparkles, Home, Package, Trash2, Users } from "lucide-react";
import heroImg from "@/assets/hero-entruempelung.jpg";
import leistungenImg from "@/assets/leistungen-arbeit.jpg";
import preiseImg from "@/assets/preise-beratung.jpg";
import vorherNachherImg from "@/assets/vorher-nachher.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const bezirke = [
  "Mitte", "Friedrichshain-Kreuzberg", "Pankow", "Charlottenburg-Wilmersdorf",
  "Spandau", "Steglitz-Zehlendorf", "Tempelhof-Schöneberg", "Neukölln",
  "Treptow-Köpenick", "Marzahn-Hellersdorf", "Lichtenberg", "Reinickendorf",
];

const ortsteile = [
  "Wedding", "Moabit", "Kreuzberg", "Friedrichshain", "Prenzlauer Berg",
  "Charlottenburg", "Schöneberg", "Tempelhof", "Mariendorf", "Britz",
  "Rudow", "Adlershof", "Köpenick", "Biesdorf", "Kaulsdorf", "Dahlem",
  "Nikolassee", "Grunewald", "Tegel", "Wittenau",
];

const reviews = [
  { text: "Sehr schnell und sauber gearbeitet, absolut empfehlenswert", name: "M. Schmidt" },
  { text: "Faire Preise und super Team", name: "K. Weber" },
  { text: "Wohnung wurde perfekt übergeben", name: "A. Fischer" },
];

const Index = () => (
  <Layout>
    {/* 1. HERO */}
    <section className="relative overflow-hidden bg-primary">
      <div className="absolute inset-0">
        <img src={heroImg} alt="BSR Wohnungsauflösung Berlin Team bei der Arbeit" width={1920} height={1080} className="w-full h-full object-cover opacity-20" />
      </div>
      <div className="container relative z-10 py-16 md:py-24">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary-foreground leading-tight mb-5">
            BSR Wohnungsauflösung Berlin – Schnell, zuverlässig und besenrein übergeben
          </h1>
          <p className="text-base md:text-lg text-primary-foreground/85 mb-8 leading-relaxed">
            Wir sind Ihr professioneller Ansprechpartner für Wohnungsauflösungen, Entrümpelungen und Sperrmüll-Abholungen in ganz Berlin. Unser erfahrenes Team arbeitet schnell, diskret und zuverlässig – egal ob kleine Wohnung oder kompletter Haushalt.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="tel:+4930123456789" className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-6 py-3.5 rounded font-bold text-sm hover:opacity-90 transition-opacity">
              <Phone className="w-5 h-5" /> Jetzt anrufen
            </a>
            <a href="https://wa.me/4930123456789" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[hsl(142,70%,38%)] text-primary-foreground px-6 py-3.5 rounded font-bold text-sm hover:opacity-90 transition-opacity">
              <MessageCircle className="w-5 h-5" /> WhatsApp Anfrage
            </a>
            <Link to="/kontakt" className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-foreground px-6 py-3.5 rounded font-bold text-sm hover:opacity-90 transition-opacity">
              <ArrowRight className="w-5 h-5" /> Kostenloses Angebot
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* 2. LEISTUNGEN */}
    <section className="py-16 md:py-20">
      <div className="container">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4">
          Unsere Leistungen für Wohnungsauflösungen in ganz Berlin im Überblick
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Wir bieten Ihnen einen kompletten Rundum-Service für Wohnungsauflösungen, Entrümpelungen und Sperrmüll. Sie müssen sich um nichts kümmern – wir übernehmen alles von Anfang bis Ende.
        </p>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: Home, title: "Wohnungsauflösung", desc: "Komplett + besenrein" },
              { icon: Package, title: "Entrümpelung", desc: "Keller, Dachboden, Räume" },
              { icon: Trash2, title: "Sperrmüll", desc: "Abholung und Entsorgung" },
              { icon: Users, title: "Haushaltsauflösung", desc: "Umzug, Erbschaft oder Verkauf" },
            ].map((s) => (
              <div key={s.title} className="bg-background border-2 border-border rounded-lg p-5 hover:border-primary hover:shadow-lg transition-all group">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold mb-1">{s.title}</h3>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
          <img src={leistungenImg} alt="Team bei der Wohnungsauflösung Berlin" width={800} height={600} loading="lazy" className="rounded-lg shadow-lg w-full" />
        </div>
      </div>
    </section>

    {/* 3. PREISE */}
    <section className="bg-section-alt py-16 md:py-20">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img src={preiseImg} alt="Kostenlose Beratung für Wohnungsauflösung" width={800} height={600} loading="lazy" className="rounded-lg shadow-lg w-full order-2 md:order-1" />
          <div className="order-1 md:order-2">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Faire und transparente Preise für Ihre Wohnungsauflösung in Berlin
            </h2>
            <p className="text-muted-foreground mb-6">
              Die Kosten hängen von Größe, Aufwand und Zustand der Wohnung ab. Sie erhalten ein klares Festpreis-Angebot ohne versteckte Kosten.
            </p>
            <ul className="space-y-3">
              {["Kostenlose Besichtigung", "Individuelles Angebot", "Festpreis Garantie", "Schnelle Terminvergabe"].map((p) => (
                <li key={p} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center shrink-0">
                    <CheckCircle className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="font-semibold">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* 4. ABLAUF */}
    <section className="py-16 md:py-20">
      <div className="container">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4">
          So läuft Ihre Wohnungsauflösung bei uns Schritt für Schritt ab
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Wir arbeiten mit einem klaren Ablauf, damit Ihre Wohnungsauflösung schnell, sauber und stressfrei durchgeführt wird.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { step: "1", icon: Phone, title: "Anfrage", desc: "Telefon oder Formular" },
            { step: "2", icon: Eye, title: "Besichtigung & Angebot", desc: "Kostenlos vor Ort" },
            { step: "3", icon: Truck, title: "Durchführung", desc: "Professionelle Räumung" },
            { step: "4", icon: Sparkles, title: "Besenreine Übergabe", desc: "Sauber & fertig" },
          ].map((s) => (
            <div key={s.step} className="text-center border-2 border-border rounded-lg p-6 hover:border-primary transition-colors">
              <div className="w-14 h-14 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-black text-2xl mx-auto mb-4">
                {s.step}
              </div>
              <s.icon className="w-7 h-7 text-primary mx-auto mb-3" />
              <h3 className="font-bold mb-1">{s.title}</h3>
              <p className="text-muted-foreground text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* 5. WANN BRAUCHEN SIE */}
    <section className="bg-section-alt py-16 md:py-20">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              In welchen Situationen eine Wohnungsauflösung sinnvoll ist
            </h2>
            <p className="text-muted-foreground mb-6">
              Eine professionelle Wohnungsauflösung wird in vielen Situationen benötigt. Wir unterstützen Sie zuverlässig und diskret.
            </p>
            <ul className="space-y-3">
              {[
                "Nach einem Todesfall / Nachlass",
                "Bei Umzug oder Auswanderung",
                "Bei Messie-Wohnung",
                "Bei Renovierung oder Verkauf",
              ].map((s) => (
                <li key={s} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center shrink-0">
                    <CheckCircle className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="font-semibold">{s}</span>
                </li>
              ))}
            </ul>
          </div>
          <img src={vorherNachherImg} alt="Vorher Nachher Wohnungsauflösung Berlin" width={800} height={600} loading="lazy" className="rounded-lg shadow-lg w-full" />
        </div>
      </div>
    </section>

    {/* 6. STANDORTE */}
    <section className="py-16 md:py-20">
      <div className="container">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4">
          Wohnungsauflösung in ganz Berlin – in allen Bezirken schnell vor Ort
        </h2>
        <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
          Wir sind täglich in ganz Berlin im Einsatz und können kurzfristige Termine anbieten.
        </p>
        <div className="mb-8">
          <h3 className="text-lg font-bold mb-4">Bezirke</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {bezirke.map((b) => {
              const slug = `berlin-${b.toLowerCase().replace(/\s+/g, "-").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/ä/g, "ae")}`;
              return (
                <Link key={b} to={`/standorte/${slug}`} className="flex items-center gap-2 px-4 py-3 bg-background rounded border-2 border-border hover:border-primary transition-all text-sm font-semibold hover:text-primary">
                  <span className="w-2 h-2 bg-primary rounded-full shrink-0" />
                  {b}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="mb-8">
          <h3 className="text-lg font-bold mb-4">Ortsteile (Auswahl)</h3>
          <div className="flex flex-wrap gap-2">
            {ortsteile.map((o) => (
              <span key={o} className="px-3 py-1.5 bg-section-alt rounded-full border border-border text-sm text-muted-foreground">{o}</span>
            ))}
          </div>
        </div>
        <div className="text-center">
          <Link to="/standorte" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded font-bold hover:opacity-90 transition-opacity">
            Alle Standorte ansehen <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>

    {/* 7. KUNDENBEWERTUNGEN */}
    <section className="bg-foreground py-16 md:py-20">
      <div className="container">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-background mb-10">
          Das sagen unsere Kunden über unseren Service
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="bg-background rounded-lg p-6">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground mb-4">„{r.text}"</p>
              <p className="font-bold text-primary text-sm">– {r.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* 8. WARUM WIR */}
    <section className="py-16 md:py-20">
      <div className="container">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4">
          Warum Kunden sich für BSR Wohnungsauflösung entscheiden
        </h2>
        <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
          Unsere Kunden schätzen unsere Erfahrung, Zuverlässigkeit und unseren schnellen Service.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {[
            "Langjährige Erfahrung",
            "Schnelle Termine",
            "Faire Preise",
            "Diskrete Arbeitsweise",
            "Besenreine Übergabe",
            "Umweltgerechte Entsorgung",
          ].map((v) => (
            <div key={v} className="flex items-center gap-3 p-5 rounded-lg border-2 border-border hover:border-primary transition-colors">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center shrink-0">
                <CheckCircle className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold">{v}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* 9. SEO TEXT */}
    <section className="bg-section-alt py-16 md:py-20">
      <div className="container max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Professionelle Wohnungsauflösung in Berlin – Ihr zuverlässiger Partner
        </h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Sie suchen einen erfahrenen Dienstleister für eine <strong className="text-foreground">Wohnungsauflösung in Berlin</strong>? BSR Wohnungsauflösung ist Ihr kompetenter Partner für sämtliche Räumungsarbeiten in der Hauptstadt. Ob <strong className="text-foreground">Entrümpelung Berlin</strong>, <strong className="text-foreground">Sperrmüll Berlin</strong> oder eine komplette <strong className="text-foreground">Haushaltsauflösung Berlin</strong> – wir übernehmen alle Arbeiten professionell, schnell und zu fairen Preisen.
          </p>
          <p>
            Unser erfahrenes Team ist in allen Berliner Bezirken im Einsatz: Von <strong className="text-foreground">Berlin Mitte</strong> über <strong className="text-foreground">Charlottenburg-Wilmersdorf</strong> und <strong className="text-foreground">Friedrichshain-Kreuzberg</strong> bis nach <strong className="text-foreground">Spandau</strong>, <strong className="text-foreground">Steglitz-Zehlendorf</strong> und <strong className="text-foreground">Reinickendorf</strong>. Auch in beliebten Ortsteilen wie <strong className="text-foreground">Prenzlauer Berg</strong>, <strong className="text-foreground">Schöneberg</strong>, <strong className="text-foreground">Wedding</strong>, <strong className="text-foreground">Kreuzberg</strong> und <strong className="text-foreground">Moabit</strong> sind wir regelmäßig vor Ort.
          </p>
          <p>
            Eine Wohnungsauflösung kann aus verschiedenen Gründen notwendig werden: nach einem Todesfall, bei einem Umzug ins Ausland, bei Erbschaft oder wenn eine Immobilie verkauft oder renoviert werden soll. In all diesen Situationen stehen wir Ihnen zur Seite und kümmern uns um die fachgerechte Räumung und Entsorgung sämtlicher Gegenstände.
          </p>
          <p>
            Unser Service umfasst die komplette Wohnungsauflösung inklusive besenreiner Übergabe, die Entrümpelung von Kellern, Dachböden und Garagen, die Abholung und Entsorgung von Sperrmüll sowie die diskrete Räumung von Messie-Wohnungen. Dabei legen wir großen Wert auf umweltgerechte Entsorgung und Recycling. Verwertbare Gegenstände werden nach Möglichkeit gespendet oder recycelt.
          </p>
          <p>
            Der Ablauf ist einfach: Sie kontaktieren uns telefonisch oder über unser Kontaktformular. Wir vereinbaren einen kostenlosen Besichtigungstermin und erstellen Ihnen ein transparentes Festpreis-Angebot ohne versteckte Kosten. Nach Ihrer Zusage führen wir die Räumung zum vereinbarten Termin durch – oft schon innerhalb von 24 bis 48 Stunden. Am Ende übergeben wir Ihnen die Wohnung besenrein.
          </p>
          <p>
            Vertrauen Sie auf BSR Wohnungsauflösung Berlin – Ihr Partner für professionelle Entrümpelung und Haushaltsauflösung in allen Bezirken und Ortsteilen der Hauptstadt. Kontaktieren Sie uns noch heute für ein kostenloses und unverbindliches Angebot!
          </p>
        </div>
      </div>
    </section>

    {/* 10. FAQ */}
    <section className="py-16 md:py-20">
      <div className="container max-w-3xl">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-10">
          Häufige Fragen zur Wohnungsauflösung in Berlin
        </h2>
        <Accordion type="single" collapsible className="space-y-3">
          {[
            { q: "Was kostet eine Wohnungsauflösung?", a: "Der Preis hängt vom Aufwand, der Größe der Wohnung und dem Zustand ab. Wir erstellen Ihnen ein individuelles Festpreis-Angebot nach einer kostenlosen Besichtigung." },
            { q: "Wie schnell sind Termine möglich?", a: "Oft können wir Termine innerhalb von 24–48 Stunden anbieten. Kontaktieren Sie uns für eine schnelle Terminvergabe." },
            { q: "Muss ich bei der Räumung dabei sein?", a: "Nein, das ist nicht notwendig. Wir übernehmen alles komplett für Sie – von der Räumung bis zur besenreinen Übergabe." },
          ].map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border-2 border-border rounded-lg px-6 data-[state=open]:border-primary">
              <AccordionTrigger className="text-left font-bold hover:no-underline hover:text-primary">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>

    {/* 11. KONTAKT CTA */}
    <section className="bg-primary py-16 md:py-20">
      <div className="container text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
          Jetzt Wohnungsauflösung in Berlin anfragen und Termin sichern
        </h2>
        <p className="text-primary-foreground/85 mb-8 max-w-2xl mx-auto">
          Kontaktieren Sie uns jetzt für eine kostenlose Beratung und ein unverbindliches Angebot.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href="tel:+4930123456789" className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-8 py-3.5 rounded font-bold text-sm hover:opacity-90 transition-opacity">
            <Phone className="w-5 h-5" /> Jetzt anrufen
          </a>
          <a href="https://wa.me/4930123456789" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[hsl(142,70%,38%)] text-primary-foreground px-8 py-3.5 rounded font-bold text-sm hover:opacity-90 transition-opacity">
            <MessageCircle className="w-5 h-5" /> WhatsApp schreiben
          </a>
          <Link to="/kontakt" className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-foreground px-8 py-3.5 rounded font-bold text-sm hover:opacity-90 transition-opacity">
            <ClipboardList className="w-5 h-5" /> Anfrage senden
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;
