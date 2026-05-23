import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Haykel Hernandez — Conscious Sales, Leadership & Human Development",
  description:
    "Haykel Hernandez is an entrepreneur, author, and mentor specializing in conscious sales, identity, and personal leadership. Transform the way you think, communicate, and take action.",
  alternates: {
    canonical: "https://haykelh.com/en",
    languages: { "es-ES": "https://haykelh.com", "en-US": "https://haykelh.com/en" },
  },
};

const enPersonSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://haykelh.com/en/#person",
  name: "Haykel Hernandez",
  url: "https://haykelh.com/en",
  description: "Entrepreneur, author and mentor specializing in conscious sales, identity and personal leadership.",
  jobTitle: "Entrepreneur, Author & Mentor",
  knowsAbout: ["Conscious Sales", "Human Development", "Personal Leadership", "Identity", "Entrepreneurship"],
  knowsLanguage: ["es", "en"],
  sameAs: [
    "https://instagram.com/haykelh",
    "https://linkedin.com/in/haykelh",
    "https://tiktok.com/@haykelh",
    "https://youtube.com/@haykelh",
  ],
};

export default function EnglishHome() {
  return (
    <div style={{ background: "#0A0A0A", color: "#F5F5F0" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(enPersonSchema) }} />

      {/* Language switcher */}
      <div className="fixed top-20 right-6 z-40">
        <Link
          href="/"
          className="text-xs font-semibold px-3 py-1.5 rounded-full"
          style={{ border: "1px solid #2A2A2A", color: "#888888" }}
        >
          🇻🇪 ES
        </Link>
      </div>

      {/* Hero */}
      <section
        className="min-h-screen flex items-center justify-center px-6 pt-20 text-center"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(212,175,55,0.08) 0%, transparent 70%)" }}
      >
        <div className="max-w-4xl mx-auto">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-8"
            style={{ border: "1px solid rgba(212,175,55,0.3)", color: "#D4AF37", background: "rgba(212,175,55,0.05)" }}
          >
            <span>✦</span> Entrepreneur · Author · Mentor
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight mb-6">
            Sell more{" "}
            <span style={{ background: "linear-gradient(135deg, #A8882A, #D4AF37, #F0D060)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              being yourself
            </span>
          </h1>

          <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10" style={{ color: "#888888" }}>
            Haykel Hernandez helps you transform the way you think, communicate, and sell —
            from consciousness, identity, and purpose.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="px-8 py-4 rounded-full font-semibold text-base"
              style={{ background: "linear-gradient(135deg, #A8882A, #D4AF37)", color: "#0A0A0A" }}
            >
              Work with Haykel →
            </Link>
            <Link
              href="/en/about"
              className="px-8 py-4 rounded-full font-semibold text-base"
              style={{ border: "1px solid #2A2A2A", color: "#F5F5F0" }}
            >
              His story
            </Link>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="py-20 px-6 text-center" style={{ borderTop: "1px solid #1A1A1A" }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#D4AF37" }}>About</p>
          <h2 className="text-3xl font-bold mb-6">
            The most powerful sale is the one born from who you are
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "#888888" }}>
            Haykel Hernandez is an entrepreneur, author, and mentor specializing in conscious sales,
            identity, and personal leadership. Through his experience in sales, business, and human
            development, he helps people transform the way they think, communicate, and take action.
            His message connects personal growth, spirituality, and sales from a more conscious and
            human perspective.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Ready to transform?</h2>
          <p className="mb-8" style={{ color: "#888888" }}>
            One message, one conversation, can change the direction of your business.
          </p>
          <Link
            href="/contacto"
            className="inline-flex px-10 py-5 rounded-full font-semibold text-lg"
            style={{ background: "linear-gradient(135deg, #A8882A, #D4AF37)", color: "#0A0A0A" }}
          >
            Contact Haykel →
          </Link>
        </div>
      </section>
    </div>
  );
}
