import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

const bezirke = [
  "Berlin Mitte",
  "Berlin Friedrichshain-Kreuzberg",
  "Berlin Pankow",
  "Berlin Charlottenburg-Wilmersdorf",
  "Berlin Spandau",
  "Berlin Steglitz-Zehlendorf",
  "Berlin Tempelhof-Schöneberg",
  "Berlin Neukölln",
  "Berlin Treptow-Köpenick",
  "Berlin Marzahn-Hellersdorf",
  "Berlin Lichtenberg",
  "Berlin Reinickendorf",
];

const StandorteBlock = () => (
  <section className="bg-section-alt py-16">
    <div className="container">
      <div className="flex items-center gap-3 mb-8">
        <MapPin className="w-7 h-7 text-primary" />
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          Unsere Einsatzgebiete in Berlin
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {bezirke.map((bezirk) => {
          const slug = bezirk.toLowerCase().replace(/\s+/g, "-").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/ä/g, "ae");
          return (
            <Link
              key={bezirk}
              to={`/standorte/${slug}`}
              className="flex items-center gap-2 px-4 py-3 bg-background rounded-md border border-border hover:border-primary hover:shadow-md transition-all group"
            >
              <MapPin className="w-4 h-4 text-primary shrink-0" />
              <span className="text-sm font-medium group-hover:text-primary transition-colors">
                Wohnungsauflösung {bezirk}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  </section>
);

export default StandorteBlock;
