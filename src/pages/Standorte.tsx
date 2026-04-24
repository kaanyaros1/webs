import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

const bezirke = [
  "Mitte", "Friedrichshain-Kreuzberg", "Pankow", "Charlottenburg-Wilmersdorf",
  "Spandau", "Steglitz-Zehlendorf", "Tempelhof-Schöneberg", "Neukölln",
  "Treptow-Köpenick", "Marzahn-Hellersdorf", "Lichtenberg", "Reinickendorf",
];

const ortsteile = [
  "Wedding", "Moabit", "Gesundbrunnen", "Tiergarten", "Hansaviertel",
  "Kreuzberg", "Friedrichshain", "Prenzlauer Berg", "Weißensee", "Karow",
  "Buch", "Blankenburg", "Charlottenburg", "Wilmersdorf", "Halensee",
  "Grunewald", "Westend", "Schmargendorf", "Schöneberg", "Tempelhof",
  "Mariendorf", "Marienfelde", "Lichtenrade", "Britz", "Buckow",
  "Rudow", "Neukölln", "Gropiusstadt", "Adlershof", "Köpenick",
  "Friedrichshagen", "Rahnsdorf", "Grünau", "Bohnsdorf", "Oberschöneweide",
  "Niederschöneweide", "Altglienicke", "Biesdorf", "Kaulsdorf", "Mahlsdorf",
  "Hellersdorf", "Marzahn", "Ahrensfelde", "Karlshorst", "Rummelsburg",
  "Fennpfuhl", "Friedrichsfelde", "Hohenschönhausen", "Falkenberg",
  "Dahlem", "Nikolassee", "Wannsee", "Zehlendorf", "Lichterfelde",
  "Lankwitz", "Steglitz", "Tegel", "Wittenau", "Reinickendorf",
  "Frohnau", "Hermsdorf", "Waidmannslust", "Lübars", "Märkisches Viertel",
  "Spandau", "Haselhorst", "Siemensstadt", "Staaken", "Gatow", "Kladow",
];

const Standorte = () => (
  <Layout>
    <section className="bg-secondary text-secondary-foreground py-12 md:py-16">
      <div className="container">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
          <span className="text-primary">Wohnungsauflösung</span> in allen Berliner Bezirken & Ortsteilen
        </h1>
        <p className="text-secondary-foreground/80 text-lg max-w-2xl">
          Wir sind in ganz Berlin für Sie da – schnell, zuverlässig und zu fairen Preisen.
        </p>
      </div>
    </section>

    <section className="py-16">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Alle 12 Berliner Bezirke</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mb-16">
          {bezirke.map((b) => {
            const slug = `berlin-${b.toLowerCase().replace(/\s+/g, "-").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/ä/g, "ae")}`;
            return (
              <Link key={b} to={`/standorte/${slug}`} className="flex items-center gap-3 px-5 py-4 bg-card rounded-lg border border-border hover:border-primary hover:shadow-lg transition-all group">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span className="font-bold group-hover:text-primary transition-colors">Wohnungsauflösung Berlin {b}</span>
              </Link>
            );
          })}
        </div>

        <h2 className="text-2xl md:text-3xl font-bold mb-6">Ortsteile in Berlin</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
          {ortsteile.map((o) => (
            <div key={o} className="flex items-center gap-2 px-4 py-3 bg-card rounded border border-border text-sm font-medium">
              <MapPin className="w-3 h-3 text-primary shrink-0" />
              {o}
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Standorte;
