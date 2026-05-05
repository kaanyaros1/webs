import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://wohnungsaufloesung-bsr.de";

interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  noindex?: boolean;
  jsonLd?: object | object[];
}

const setMeta = (selector: string, attr: string, value: string, create: () => HTMLElement) => {
  let el = document.head.querySelector(selector) as HTMLElement | null;
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
};

const SEO = ({ title, description, canonicalPath, noindex, jsonLd }: SEOProps) => {
  const location = useLocation();
  const path = canonicalPath ?? location.pathname;
  const canonical = SITE_URL + (path === "/" ? "/" : path.replace(/\/$/, ""));

  useEffect(() => {
    document.title = title;

    setMeta('meta[name="description"]', "content", description, () => {
      const m = document.createElement("meta");
      m.setAttribute("name", "description");
      return m;
    });

    setMeta('meta[property="og:title"]', "content", title, () => {
      const m = document.createElement("meta");
      m.setAttribute("property", "og:title");
      return m;
    });
    setMeta('meta[property="og:description"]', "content", description, () => {
      const m = document.createElement("meta");
      m.setAttribute("property", "og:description");
      return m;
    });
    setMeta('meta[property="og:url"]', "content", canonical, () => {
      const m = document.createElement("meta");
      m.setAttribute("property", "og:url");
      return m;
    });
    setMeta('meta[name="twitter:title"]', "content", title, () => {
      const m = document.createElement("meta");
      m.setAttribute("name", "twitter:title");
      return m;
    });
    setMeta('meta[name="twitter:description"]', "content", description, () => {
      const m = document.createElement("meta");
      m.setAttribute("name", "twitter:description");
      return m;
    });

    setMeta('meta[name="robots"]', "content", noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large", () => {
      const m = document.createElement("meta");
      m.setAttribute("name", "robots");
      return m;
    });

    let link = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", canonical);

    // JSON-LD
    document.head.querySelectorAll('script[data-seo-jsonld="true"]').forEach((n) => n.remove());
    if (jsonLd) {
      const arr = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      arr.forEach((obj) => {
        const s = document.createElement("script");
        s.type = "application/ld+json";
        s.setAttribute("data-seo-jsonld", "true");
        s.text = JSON.stringify(obj);
        document.head.appendChild(s);
      });
    }
  }, [title, description, canonical, noindex, JSON.stringify(jsonLd)]);

  return null;
};

export default SEO;
