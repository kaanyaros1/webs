import Layout from "@/components/Layout";
import { Truck, Shield, Clock, Star, Recycle, Home } from "lucide-react";

const services = [
  { icon: Truck, title: "Wohnungsauflösung", desc: "Komplette Räumung und Auflösung von Wohnungen jeder Größe. Wir kümmern uns um alles – von der Planung bis zur besenreinen Übergabe." },
  { icon: Shield, title: "Entrümpelung", desc: "Professionelle Entrümpelung von Kellern, Dachböden, Garagen und Wohnungen. Schnell und gründlich." },
  { icon: Clock, title: "Haushaltsauflösung", desc: "Komplette Auflösung von Haushalten inkl. Sortierung, Entsorgung und Verwertung brauchbarer Gegenstände." },
  { icon: Star, title: "Nachlassräumung", desc: "Einfühlsame und diskrete Nachlassräumung. Wir gehen respektvoll mit dem Besitz Ihrer Angehörigen um." },
  { icon: Recycle, title: "Sperrmüllentsorgung", desc: "Fachgerechte Entsorgung von Sperrmüll und Altgeräten. Umweltgerecht und nach allen Vorschriften." },
  { icon: Home, title: "Renovierung nach Räumung", desc: "Auf Wunsch übernehmen wir auch Renovierungsarbeiten nach der Räumung für eine einzugsfertige Wohnung." },
];

const Dienstleistungen = () => (
  <Layout>
    <section className="py-20">
      <div className="container">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Unsere Dienstleistungen</h1>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Wir bieten ein umfassendes Leistungsspektrum rund um Wohnungsauflösung und Entrümpelung in Berlin.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <div key={s.title} className="bg-card border border-border rounded-lg p-8 hover:shadow-lg hover:border-primary/30 transition-all">
              <s.icon className="w-12 h-12 text-primary mb-5" />
              <h2 className="text-xl font-bold mb-3">{s.title}</h2>
              <p className="text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Dienstleistungen;
