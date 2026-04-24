import Layout from "@/components/Layout";

const Datenschutz = () => (
  <Layout>
    <section className="py-20">
      <div className="container max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Datenschutzerklärung</h1>
        <div className="prose prose-lg text-muted-foreground space-y-6">
          <div>
            <h2 className="text-xl font-bold text-foreground">1. Datenschutz auf einen Blick</h2>
            <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">2. Verantwortlicher</h2>
            <p>BSR Wohnungsauflösung Berlin<br />Musterstraße 1<br />10115 Berlin<br />E-Mail: info@bsr-wohnungsaufloesung.de</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">3. Datenerfassung auf dieser Website</h2>
            <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Die Kontaktdaten des Betreibers können Sie dem Impressum entnehmen.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">4. Cookies</h2>
            <p>Unsere Website verwendet Cookies. Beim ersten Besuch werden Sie gefragt, ob Sie Cookies akzeptieren oder ablehnen möchten. Sie können Ihre Cookie-Einstellungen jederzeit ändern.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">5. Kontaktformular</h2>
            <p>Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Formular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage bei uns gespeichert.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">6. Google Maps</h2>
            <p>Diese Seite nutzt den Kartendienst Google Maps. Anbieter ist die Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.</p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Datenschutz;
