import Layout from "@/components/Layout";
import { Users, Award, ThumbsUp, Leaf } from "lucide-react";

const stats = [
  { icon: Users, value: "500+", label: "Zufriedene Kunden" },
  { icon: Award, value: "10+", label: "Jahre Erfahrung" },
  { icon: ThumbsUp, value: "100%", label: "Festpreisgarantie" },
  { icon: Leaf, value: "♻️", label: "Umweltgerecht" },
];

const UeberUns = () => (
  <Layout>
    <section className="py-20">
      <div className="container">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Über uns</h1>
        <div className="max-w-3xl mb-16">
          <p className="text-lg text-muted-foreground mb-4">
            BSR Wohnungsauflösung ist Ihr erfahrener Partner für Wohnungsauflösungen, Entrümpelungen und Haushaltsauflösungen in Berlin. Seit über 10 Jahren unterstützen wir Privatpersonen, Hausverwaltungen und Nachlassverwalter mit professionellem Service.
          </p>
          <p className="text-lg text-muted-foreground mb-4">
            Unser Team besteht aus erfahrenen Fachkräften, die mit Sorgfalt und Respekt arbeiten. Wir legen großen Wert auf Transparenz, faire Preise und umweltgerechte Entsorgung.
          </p>
          <p className="text-lg text-muted-foreground">
            Egal ob kleine Wohnung oder großes Haus – wir kümmern uns um alles, damit Sie sich um nichts sorgen müssen.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="bg-card border border-border rounded-lg p-6 text-center">
              <s.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold text-foreground mb-1">{s.value}</div>
              <div className="text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default UeberUns;
