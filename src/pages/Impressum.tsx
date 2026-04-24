import Layout from "@/components/Layout";

const Impressum = () => (
  <Layout>
    <section className="py-20">
      <div className="container max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Impressum</h1>
        <div className="prose prose-lg text-muted-foreground space-y-6">
          <div>
            <h2 className="text-xl font-bold text-foreground">Angaben gemäß § 5 TMG</h2>
            <p>BSR Wohnungsauflösung Berlin<br />Musterstraße 1<br />10115 Berlin</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">Kontakt</h2>
            <p>Telefon: 030 123 456 789<br />E-Mail: info@bsr-wohnungsaufloesung.de</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p>Max Mustermann<br />Musterstraße 1<br />10115 Berlin</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">Haftungsausschluss</h2>
            <p>Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.</p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Impressum;
