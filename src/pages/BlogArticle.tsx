import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Calendar, ArrowLeft, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { blogArticles } from "@/data/blogArticles";

const BlogArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = blogArticles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <Layout>
        <section className="py-20">
          <div className="container text-center">
            <h1 className="text-3xl font-bold mb-4">Artikel nicht gefunden</h1>
            <p className="text-muted-foreground mb-8">Dieser Beitrag existiert leider nicht.</p>
            <Link to="/blog">
              <Button variant="outline">
                <ArrowLeft className="w-4 h-4 mr-2" /> Zurück zum Blog
              </Button>
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-primary py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/80" />
        <div className="container relative z-10">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground mb-6 transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" /> Zurück zum Blog
          </Link>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 max-w-4xl">
            {article.title}
          </h1>
          <div className="flex items-center gap-2 text-primary-foreground/70 text-sm">
            <Calendar className="w-4 h-4" />
            {article.date}
          </div>
        </div>
      </section>

      {/* Image */}
      <div className="container -mt-8 relative z-10 mb-12">
        <div className="rounded-lg overflow-hidden shadow-xl max-w-4xl bg-muted">
          <img
            src={article.image}
            alt={article.title}
            className="w-full aspect-[2/1] object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <section className="pb-16 md:pb-20">
        <div className="container">
          <div className="max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {article.excerpt}
              </p>

              {article.content.map((block, i) => (
                <div key={i} className="mb-8">
                  {block.heading && (
                    <h2 className="text-2xl font-bold mb-4 text-foreground">{block.heading}</h2>
                  )}
                  {block.text && (
                    <p className="text-muted-foreground leading-relaxed mb-4">{block.text}</p>
                  )}
                  {block.list && (
                    <ul className="space-y-2 mb-4">
                      {block.list.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-muted-foreground">
                          <span className="text-primary font-bold mt-0.5">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-12 bg-primary/10 border border-primary/20 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-3">
                Jetzt kostenlos beraten lassen
              </h3>
              <p className="text-muted-foreground mb-6">
                Kontaktieren Sie uns für ein unverbindliches Angebot – schnell und unkompliziert.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+4930123456789">
                  <Button size="lg" className="w-full sm:w-auto">
                    <Phone className="w-4 h-4 mr-2" /> Jetzt anrufen
                  </Button>
                </a>
                <a href="https://wa.me/4930123456789" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogArticle;
