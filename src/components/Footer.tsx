import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-foreground text-background py-8">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm text-background/60">
        © {new Date().getFullYear()} BSR Wohnungsauflösung Berlin. Alle Rechte vorbehalten.
      </p>
      <nav className="flex items-center gap-6">
        <Link to="/impressum" className="text-sm text-background/60 hover:text-primary transition-colors">Impressum</Link>
        <Link to="/datenschutz" className="text-sm text-background/60 hover:text-primary transition-colors">Datenschutz</Link>
        <button onClick={() => { localStorage.removeItem("cookieConsent"); window.location.reload(); }} className="text-sm text-background/60 hover:text-primary transition-colors">
          Cookie-Einstellungen
        </button>
      </nav>
    </div>
  </footer>
);

export default Footer;
