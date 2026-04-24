import Layout from "@/components/Layout";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { blogArticles } from "@/data/blogArticles";

const Blog = () => (
  <Layout>
    {/* Hero Banner */}
    <section className="relative bg-primary py-16 md:py-24">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/80" />
      <div className="container relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Blog</h1>
        <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
          Tipps, Ratgeber und Neuigkeiten rund um Wohnungsauflösung und Entrümpelung in Berlin
        </p>
      </div>
    </section>

    {/* Articles Grid */}
    <section className="py-16 md:py-20">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogArticles.map((a) => (
            <Link to={`/blog/${a.slug}`} key={a.slug} className="block">
              <article className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-xl hover:border-primary/40 transition-all group h-full">
                <div className="aspect-[3/2] overflow-hidden bg-muted">
                  <img
                    src={a.image}
                    alt={a.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                    <Calendar className="w-4 h-4" />
                    {a.date}
                  </div>
                  <h2 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors leading-tight">
                    {a.title}
                  </h2>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{a.excerpt}</p>
                  <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                    Weiterlesen <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Blog;
