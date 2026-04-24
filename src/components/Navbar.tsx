import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

const navItems = [
  { label: "Startseite", path: "/" },
  { label: "Dienstleistungen", path: "/dienstleistungen" },
  { label: "FAQ", path: "/faq" },
  { label: "Blog", path: "/blog" },
  { label: "Über uns", path: "/ueber-uns" },
  { label: "Kontakt", path: "/kontakt" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background text-foreground shadow-sm border-b border-border">
      <div className="container flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-primary text-primary-foreground px-2.5 py-1 rounded font-black text-xl tracking-tight">BSR</div>
          <span className="text-base md:text-lg font-bold text-foreground">Wohnungsauflösung</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-0.5">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-3 py-2 rounded text-sm font-semibold transition-colors hover:text-primary ${
                location.pathname === item.path ? "text-primary" : "text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a href="tel:+4930123456789" className="hidden lg:flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded font-bold text-sm hover:opacity-90 transition-opacity">
          <Phone className="w-4 h-4" />
          030 123 456 789
        </a>

        <div className="flex items-center gap-2 lg:hidden">
          <a href="tel:+4930123456789" className="bg-primary text-primary-foreground p-2 rounded">
            <Phone className="w-5 h-5" />
          </a>
          <button onClick={() => setOpen(!open)} className="p-2">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="lg:hidden bg-background border-t border-border pb-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className={`block px-6 py-3 text-sm font-semibold transition-colors hover:text-primary hover:bg-accent ${
                location.pathname === item.path ? "text-primary bg-accent" : "text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
