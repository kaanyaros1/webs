import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 bg-secondary text-secondary-foreground p-6 shadow-2xl border-t border-sidebar-border">
      <div className="container flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="text-sm max-w-2xl">
          <p>
            Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten.{" "}
            <Link to="/datenschutz" className="text-primary underline hover:opacity-80">Datenschutz</Link>
          </p>
        </div>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={handleReject}
            className="px-5 py-2 text-sm font-medium border border-border rounded-md hover:bg-sidebar-accent transition-colors"
          >
            Ablehnen
          </button>
          <button
            onClick={handleAccept}
            className="px-5 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity"
          >
            Akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
