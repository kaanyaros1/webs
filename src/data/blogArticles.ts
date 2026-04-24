import blogKostenImg from "@/assets/blog-kosten-entruempelung.jpg";

export type BlogArticleData = {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  image: string;
  content: { heading?: string; text?: string; list?: string[] }[];
};

export const blogArticles: BlogArticleData[] = [
  {
    title: "Kosten einer Entrümpelung in Berlin realistisch einschätzen",
    date: "10. April 2025",
    excerpt: "Was kostet eine Entrümpelung wirklich? Wir erklären die wichtigsten Kostenfaktoren und geben Ihnen Richtwerte für Berlin.",
    slug: "kosten-entruempelung-berlin",
    image: blogKostenImg,
    content: [
      { heading: "Was beeinflusst die Kosten?", text: "Die Kosten einer Entrümpelung hängen von verschiedenen Faktoren ab. Dazu gehören die Größe der Wohnung, der Füllgrad, die Erreichbarkeit und ob Sondermüll entsorgt werden muss." },
      { heading: "Richtwerte für Berlin", list: ["1-Zimmer-Wohnung: ab 300 €", "2-Zimmer-Wohnung: ab 500 €", "3-Zimmer-Wohnung: ab 800 €", "Haus / größere Objekte: individuelles Angebot"] },
      { heading: "Festpreisgarantie bei BSR", text: "Bei BSR Wohnungsauflösung erhalten Sie immer ein transparentes Festpreisangebot. Nach einer kostenlosen Besichtigung wissen Sie genau, was auf Sie zukommt – ohne versteckte Kosten." },
    ],
  },
  {
    title: "Wohnungsauflösung nach Todesfall – sensibel und professionell",
    date: "5. April 2025",
    excerpt: "Eine Nachlassräumung erfordert Fingerspitzengefühl. So gehen wir bei BSR mit dieser besonderen Situation um.",
    slug: "wohnungsaufloesung-nach-todesfall",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&w=800&q=80",
    content: [
      { heading: "Einfühlsame Vorgehensweise", text: "Der Verlust eines Angehörigen ist eine schwere Zeit. Wir wissen das und gehen bei jeder Nachlassräumung mit größter Sorgfalt und Respekt vor. Persönliche Gegenstände werden gesondert behandelt." },
      { heading: "Unser Ablauf bei Nachlassräumungen", list: ["Erstes Beratungsgespräch – telefonisch oder vor Ort", "Gemeinsame Besichtigung der Wohnung", "Aussortieren von Wertgegenständen und Erinnerungsstücken", "Fachgerechte Räumung und besenreine Übergabe"] },
      { text: "Sprechen Sie uns an – wir nehmen uns die Zeit, die Sie brauchen, und unterstützen Sie in dieser schwierigen Phase." },
    ],
  },
  {
    title: "Haushaltsauflösung ohne emotionale Überforderung",
    date: "1. April 2025",
    excerpt: "Tipps und Ratschläge, wie Sie eine Haushaltsauflösung emotional bewältigen und professionelle Hilfe nutzen können.",
    slug: "haushaltsaufloesung-emotional",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&w=800&q=80",
    content: [
      { heading: "Warum es emotional schwer sein kann", text: "Eine Haushaltsauflösung bedeutet oft Abschied nehmen – von einem Zuhause, von Erinnerungen, manchmal von einem ganzen Lebensabschnitt. Das ist völlig normal und kein Grund, sich zu schämen." },
      { heading: "Praktische Tipps", list: ["Beginnen Sie mit Räumen, die weniger emotional belastet sind", "Bitten Sie Freunde oder Familie um Unterstützung", "Nehmen Sie sich genug Zeit – hetzen Sie sich nicht", "Übergeben Sie die schwere Arbeit an Profis"] },
      { text: "Unser Team arbeitet diskret und respektvoll. Wir übernehmen die körperliche Arbeit, damit Sie sich auf das Wesentliche konzentrieren können." },
    ],
  },
  {
    title: "Wohnungsauflösung Berlin Friedrichshain – Schnell vor Ort",
    date: "28. März 2025",
    excerpt: "Friedrichshain zählt zu unseren Haupteinsatzgebieten. Erfahren Sie, wie wir in Ihrem Bezirk arbeiten.",
    slug: "wohnungsaufloesung-friedrichshain",
    image: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&w=800&q=80",
    content: [
      { heading: "Unser Service in Friedrichshain", text: "Friedrichshain-Kreuzberg gehört zu den beliebtesten Bezirken Berlins – und auch zu unseren aktivsten Einsatzgebieten. Von der kleinen Altbauwohnung bis zum großen WG-Haushalt sind wir hier regelmäßig unterwegs." },
      { heading: "Besonderheiten im Bezirk", list: ["Viele Altbauten mit engen Treppenhäusern – kein Problem für unser erfahrenes Team", "Kurzfristige Termine oft möglich", "Enge Abstimmung mit Hausverwaltungen", "Parkgenehmigungen für Transporter organisieren wir"] },
      { text: "Rufen Sie uns an und vereinbaren Sie einen Besichtigungstermin in Friedrichshain – kostenlos und unverbindlich." },
    ],
  },
  {
    title: "Entrümpelung Keller und Dachboden – Das müssen Sie wissen",
    date: "25. März 2025",
    excerpt: "Keller und Dachböden sind oft die größte Herausforderung. So planen Sie die Entrümpelung richtig.",
    slug: "entruempelung-keller-dachboden",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&w=800&q=80",
    content: [
      { heading: "Warum Keller und Dachböden besonders sind", text: "Im Keller und auf dem Dachboden sammeln sich über Jahre Dinge an, die oft vergessen werden. Alte Möbel, Kartons, Elektrogeräte – manchmal sogar Gefahrstoffe wie Lacke oder Chemikalien." },
      { heading: "Worauf Sie achten sollten", list: ["Sondermüll muss fachgerecht entsorgt werden", "Schwere Gegenstände erfordern professionelles Equipment", "Zugangswege müssen freigehalten werden", "Vorab-Besichtigung hilft bei der Kostenschätzung"] },
      { text: "Wir übernehmen die komplette Keller- und Dachbodenräumung für Sie – inklusive Sondermüllentsorgung." },
    ],
  },
  {
    title: "Sperrmüll in Berlin richtig entsorgen – Tipps vom Profi",
    date: "20. März 2025",
    excerpt: "Sperrmüll einfach auf die Straße stellen? Das kann teuer werden. Hier die legalen Alternativen.",
    slug: "sperrmuell-berlin-entsorgen",
    image: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&w=800&q=80",
    content: [
      { heading: "Die legale Sperrmüllentsorgung", text: "In Berlin ist das wilde Abstellen von Sperrmüll eine Ordnungswidrigkeit und kann mit Bußgeldern von bis zu 10.000 Euro geahndet werden. Es gibt jedoch einfache und legale Wege." },
      { heading: "Ihre Optionen", list: ["Kostenlose Abholung über die BSR (lange Wartezeiten möglich)", "Selbstanlieferung bei Recyclinghöfen", "Professionelle Sperrmüllabholung durch uns – schnell und flexibel", "Kombination mit einer Entrümpelung spart Kosten"] },
      { text: "Wir holen Ihren Sperrmüll ab – oft schon innerhalb von 24 bis 48 Stunden. Rufen Sie uns einfach an." },
    ],
  },
  {
    title: "Messie-Wohnung räumen – So gehen Profis vor",
    date: "15. März 2025",
    excerpt: "Die Räumung einer Messie-Wohnung erfordert Erfahrung und Diskretion. Unser Vorgehen im Detail.",
    slug: "messie-wohnung-raeumen",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&w=800&q=80",
    content: [
      { heading: "Diskretion an erster Stelle", text: "Die Räumung einer Messie-Wohnung ist eine besondere Herausforderung – sowohl logistisch als auch emotional. Wir arbeiten absolut diskret und ohne Wertung." },
      { heading: "Unser professioneller Ablauf", list: ["Vertrauliche Erstberatung am Telefon", "Besichtigung zur Einschätzung des Aufwands", "Schrittweise Räumung mit Sichtung der Gegenstände", "Desinfektion und Grundreinigung bei Bedarf", "Besenreine Übergabe an Vermieter"] },
      { text: "Wir haben langjährige Erfahrung mit Messie-Wohnungen in ganz Berlin und helfen Ihnen schnell und unkompliziert." },
    ],
  },
  {
    title: "Wohnungsauflösung Berlin Charlottenburg – Unser Service",
    date: "10. März 2025",
    excerpt: "In Charlottenburg-Wilmersdorf sind wir regelmäßig im Einsatz. Alles zu Ablauf und Kosten.",
    slug: "wohnungsaufloesung-charlottenburg",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&w=800&q=80",
    content: [
      { heading: "Charlottenburg-Wilmersdorf – unser Einsatzgebiet", text: "Der Bezirk Charlottenburg-Wilmersdorf ist geprägt von großzügigen Altbauwohnungen und einer gehobenen Wohngegend. Unsere Teams kennen die Besonderheiten des Bezirks bestens." },
      { heading: "Was wir für Sie tun", list: ["Komplette Wohnungsauflösung mit besenreiner Übergabe", "Entrümpelung von Kellern und Dachböden", "Entsorgung von Sperrmüll und Elektrogeräten", "Wertanrechnung für gut erhaltene Möbel"] },
      { text: "Kontaktieren Sie uns für ein kostenloses Angebot – wir sind schnell in Charlottenburg vor Ort." },
    ],
  },
  {
    title: "Umweltfreundliche Entsorgung bei der Wohnungsauflösung",
    date: "5. März 2025",
    excerpt: "Nachhaltigkeit ist uns wichtig. Erfahren Sie, wie wir bis zu 90% der Materialien recyceln.",
    slug: "umweltfreundliche-entsorgung",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&w=800&q=80",
    content: [
      { heading: "Nachhaltigkeit bei der Entrümpelung", text: "Viele Menschen denken, dass bei einer Entrümpelung alles auf den Müll kommt. Bei uns ist das anders. Wir trennen sorgfältig und recyceln, was möglich ist." },
      { heading: "So funktioniert unsere nachhaltige Entsorgung", list: ["Gut erhaltene Möbel gehen an soziale Einrichtungen", "Elektrogeräte werden fachgerecht recycelt", "Metall, Holz und Papier werden getrennt entsorgt", "Sondermüll wird vorschriftsmäßig behandelt", "Bis zu 90% Recycling-Quote"] },
      { text: "Nachhaltigkeit und professionelle Entrümpelung schließen sich nicht aus – ganz im Gegenteil." },
    ],
  },
  {
    title: "5 Fehler bei der Wohnungsauflösung vermeiden",
    date: "1. März 2025",
    excerpt: "Diese häufigen Fehler kosten Zeit und Geld. Mit unseren Tipps läuft Ihre Auflösung reibungslos.",
    slug: "fehler-wohnungsaufloesung-vermeiden",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&w=800&q=80",
    content: [
      { heading: "Die 5 häufigsten Fehler", list: ["Zu spät anfangen – planen Sie mindestens 2 Wochen ein", "Keinen Überblick über die Menge haben", "Sondermüll im Hausmüll entsorgen (Bußgeld!)", "Zu viele Helfer ohne Koordination", "Besenreine Übergabe vergessen"] },
      { heading: "So machen Sie es richtig", text: "Beauftragen Sie ein professionelles Unternehmen wie BSR Wohnungsauflösung. Wir kümmern uns um alles – von der Planung bis zur Übergabe. So sparen Sie Zeit, Nerven und oft auch Geld." },
    ],
  },
  {
    title: "Wohnungsauflösung bei Umzug ins Ausland",
    date: "25. Februar 2025",
    excerpt: "Sie wandern aus und müssen Ihren Haushalt schnell auflösen? So organisieren Sie alles stressfrei.",
    slug: "wohnungsaufloesung-umzug-ausland",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&w=800&q=80",
    content: [
      { heading: "Wenn die Zeit drängt", text: "Ein Umzug ins Ausland bringt viele organisatorische Herausforderungen mit sich. Die Wohnungsauflösung sollte dabei nicht zur zusätzlichen Belastung werden." },
      { heading: "Unser Express-Service", list: ["Kurzfristige Termine innerhalb von 24–48 Stunden", "Komplett-Service ohne Ihre Anwesenheit möglich", "Schlüsselübergabe an Vermieter inklusive", "Nachsendeadresse für Post organisieren", "Besenreine Übergabe garantiert"] },
      { text: "Wir haben bereits viele Kunden unterstützt, die kurzfristig ins Ausland gezogen sind. Verlassen Sie sich auf unser erfahrenes Team." },
    ],
  },
  {
    title: "Was passiert mit den Möbeln nach der Entrümpelung?",
    date: "20. Februar 2025",
    excerpt: "Spende, Verkauf oder Entsorgung – wir erklären die verschiedenen Wege für Ihre Einrichtung.",
    slug: "moebel-nach-entruempelung",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&w=800&q=80",
    content: [
      { heading: "Drei Wege für Ihre Möbel", text: "Nicht alles, was bei einer Entrümpelung anfällt, muss entsorgt werden. Wir prüfen jeden Gegenstand und finden die beste Lösung." },
      { heading: "Unsere Optionen", list: ["Spende an soziale Einrichtungen und Sozialkaufhäuser", "Verkauf gut erhaltener Möbel mit Wertanrechnung", "Fachgerechtes Recycling von Materialien", "Entsorgung nur als letzte Option"] },
      { text: "So reduzieren wir nicht nur den Müll, sondern können Ihnen oft auch Kosten sparen. Fragen Sie uns danach!" },
    ],
  },
  {
    title: "Wohnungsauflösung Berlin Neukölln – Erfahrungsbericht",
    date: "15. Februar 2025",
    excerpt: "Ein Einblick in einen typischen Auftrag in Neukölln – von der Anfrage bis zur besenreinen Übergabe.",
    slug: "wohnungsaufloesung-neukoelln",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&w=800&q=80",
    content: [
      { heading: "Der Auftrag", text: "Frau M. aus Neukölln kontaktierte uns, weil sie die Wohnung ihrer verstorbenen Mutter auflösen musste. Die 3-Zimmer-Wohnung war voll möbliert und enthielt viele persönliche Gegenstände." },
      { heading: "Unser Vorgehen", list: ["Kostenlose Besichtigung am selben Tag", "Aussortieren persönlicher Erinnerungsstücke mit der Familie", "Komplette Räumung in nur einem Tag", "Besenreine Übergabe an den Vermieter"] },
      { text: "Frau M. war begeistert: 'Alles ging so schnell und unkompliziert. Das Team war sehr einfühlsam. Vielen Dank!'" },
    ],
  },
  {
    title: "Besenreine Übergabe – Was bedeutet das genau?",
    date: "10. Februar 2025",
    excerpt: "Der Begriff besenrein sorgt oft für Verwirrung. Hier klären wir, was Vermieter wirklich erwarten.",
    slug: "besenreine-uebergabe-erklaert",
    image: "https://images.unsplash.com/photo-1600585153490-76fb20a32601?auto=format&w=800&q=80",
    content: [
      { heading: "Definition: Besenrein", text: "Besenrein bedeutet, dass die Wohnung grob gereinigt und von allen Einrichtungsgegenständen befreit ist. Grober Schmutz, Spinnweben und Staub müssen entfernt sein." },
      { heading: "Was dazu gehört", list: ["Alle Möbel und Gegenstände sind entfernt", "Böden sind gefegt (nicht zwingend gewischt)", "Keine Abfälle oder Reste in der Wohnung", "Küche und Bad sind grob gereinigt", "Lampen und Gardinen sind entfernt (sofern nicht fest installiert)"] },
      { heading: "Was NICHT dazu gehört", text: "Eine besenreine Übergabe ist keine professionelle Grundreinigung. Fenster müssen nicht geputzt, Wände nicht gestrichen werden – es sei denn, der Mietvertrag sagt etwas anderes." },
    ],
  },
  {
    title: "Wohnungsauflösung Berlin Pankow – Schnell und fair",
    date: "5. Februar 2025",
    excerpt: "Pankow gehört zu den am stärksten nachgefragten Bezirken. Unser Team ist regelmäßig vor Ort.",
    slug: "wohnungsaufloesung-pankow",
    image: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&w=800&q=80",
    content: [
      { heading: "Pankow – unser starkes Einsatzgebiet", text: "Pankow ist Berlins einwohnerreichster Bezirk und umfasst beliebte Ortsteile wie Prenzlauer Berg, Weißensee und Pankow-Zentrum. Wir sind hier fast täglich im Einsatz." },
      { heading: "Warum Kunden in Pankow uns wählen", list: ["Schnelle Terminvergabe – oft innerhalb von 24 Stunden", "Faire Festpreise ohne Überraschungen", "Erfahrung mit Altbauten und engen Treppenhäusern", "Kompletter Service inklusive besenreiner Übergabe"] },
      { text: "Ob Prenzlauer Berg, Weißensee oder Karow – wir sind in ganz Pankow für Sie da. Kontaktieren Sie uns noch heute!" },
    ],
  },
];
