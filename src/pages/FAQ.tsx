import Layout from "@/components/Layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Was kostet eine Wohnungsauflösung in Berlin?", a: "Die Kosten hängen von der Wohnungsgröße, dem Umfang der Räumung und der Menge des Inventars ab. Wir bieten kostenlose Besichtigungen und Festpreise ohne versteckte Kosten." },
  { q: "Wie schnell können Sie einen Termin anbieten?", a: "In der Regel können wir innerhalb von 24–48 Stunden eine Besichtigung durchführen. Kurzfristige Räumungen sind oft innerhalb weniger Tage möglich." },
  { q: "Wird die Wohnung besenrein übergeben?", a: "Ja, selbstverständlich. Nach der Räumung wird die Wohnung besenrein hinterlassen. Auf Wunsch führen wir auch eine Endreinigung durch." },
  { q: "Was passiert mit brauchbaren Gegenständen?", a: "Verwertbare Gegenstände werden sortiert und können gespendet, verkauft oder dem Recycling zugeführt werden. Das kann den Gesamtpreis reduzieren." },
  { q: "Übernehmen Sie auch Nachlassräumungen?", a: "Ja, wir führen Nachlassräumungen mit besonderer Sorgfalt und Diskretion durch. Wir nehmen Rücksicht auf die emotionale Situation." },
  { q: "Entsorgen Sie auch Sondermüll?", a: "Ja, wir entsorgen auch Sondermüll wie Farben, Lacke oder Elektrogeräte fachgerecht und umweltgerecht nach allen gesetzlichen Vorgaben." },
  { q: "In welchen Bezirken sind Sie tätig?", a: "Wir sind in allen 12 Berliner Bezirken tätig – von Mitte bis Reinickendorf. Sehen Sie unsere Einsatzgebiete unten auf der Seite." },
];

const FAQ = () => (
  <Layout>
    <section className="py-20">
      <div className="container max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Häufig gestellte Fragen</h1>
        <p className="text-muted-foreground mb-10">Hier finden Sie Antworten auf die häufigsten Fragen rund um unsere Dienstleistungen.</p>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold hover:text-primary">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  </Layout>
);

export default FAQ;
