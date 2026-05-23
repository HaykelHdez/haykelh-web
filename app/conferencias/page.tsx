import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Conferencias y Keynotes — Haykel Hernandez",
  description:
    "Contratar a Haykel Hernandez como conferencista. Keynotes sobre ventas conscientes, liderazgo e identidad para empresas, congresos y eventos.",
  alternates: { canonical: "https://haykelh.com/conferencias" },
};

const temas = [
  {
    title: "Vende siendo tú",
    desc: "Cómo construir una carrera de ventas sostenible desde la autenticidad, la identidad y la conciencia. Para equipos comerciales que quieren ir más allá de las técnicas.",
    publico: "Equipos de ventas · Startups · Empresas",
  },
  {
    title: "Liderazgo desde adentro",
    desc: "El liderazgo real no es el que se impone — es el que irradia. Una conferencia sobre identidad, propósito y la diferencia entre gestionar personas y inspirarlas.",
    publico: "Directivos · Gerentes · Líderes de equipo",
  },
  {
    title: "La transformación que tu negocio necesita empieza en ti",
    desc: "Cuando el negocio no crece, casi nunca es un problema de estrategia. Es un problema de creencias, identidad y forma de ver el mundo. Esta conferencia va a la raíz.",
    publico: "Emprendedores · Congresos · Retiros",
  },
  {
    title: "Espiritualidad y negocios: la ventaja que nadie enseña",
    desc: "Integrar la dimensión espiritual en el mundo del emprendimiento no es un lujo — es una ventaja competitiva. Una charla sobre conciencia, intuición y decisión.",
    publico: "Emprendedores · Líderes espirituales · Coaches",
  },
];

const faqConferencias = [
  {
    q: "¿En qué países ha dado conferencias Haykel Hernandez?",
    a: "Haykel ha llevado su mensaje a más de 5 países, incluyendo Venezuela, México, Colombia y otros países de Latinoamérica, tanto en formato presencial como virtual.",
  },
  {
    q: "¿Cuánto dura una conferencia típica de Haykel?",
    a: "Las keynotes oscilan entre 45 minutos y 2 horas, dependiendo del formato del evento. También ofrece talleres y sesiones más profundas de medio día o día completo.",
  },
  {
    q: "¿Cómo se puede contratar a Haykel para un evento?",
    a: "El proceso es sencillo: completa el formulario en la página de contacto indicando la fecha, formato y audiencia del evento. El equipo de Haykel responde en menos de 48 horas.",
  },
  {
    q: "¿Hace conferencias virtuales?",
    a: "Sí. Haykel imparte keynotes y talleres tanto en formato presencial como virtual, adaptando la experiencia a cada plataforma.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqConferencias.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://haykelh.com" },
    { "@type": "ListItem", position: 2, name: "Conferencias", item: "https://haykelh.com/conferencias" },
  ],
};

export default function Conferencias() {
  return (
    <div style={{ background: "#0A0A0A", color: "#F5F5F0" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section
        className="pt-32 pb-20 px-6 text-center"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(212,175,55,0.08) 0%, transparent 70%)" }}
      >
        <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#D4AF37" }}>Speaking</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Conferencias &{" "}
          <span style={{ background: "linear-gradient(135deg, #A8882A, #D4AF37, #F0D060)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Keynotes
          </span>
        </h1>
        <p className="text-lg max-w-2xl mx-auto mb-10" style={{ color: "#888888" }}>
          Haykel lleva a escenarios corporativos y eventos un mensaje que transforma la
          manera en que equipos y líderes se perciben, comunican y venden.
        </p>
        <Link
          href="/contacto"
          className="inline-flex px-8 py-4 rounded-full font-semibold"
          style={{ background: "linear-gradient(135deg, #A8882A, #D4AF37)", color: "#0A0A0A" }}
        >
          Solicitar disponibilidad →
        </Link>
      </section>

      {/* Temas */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4 text-center" style={{ color: "#D4AF37" }}>Temas</p>
          <h2 className="text-3xl font-bold mb-12 text-center">Conferencias disponibles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {temas.map((t, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl"
                style={{ background: "#111111", border: "1px solid #1A1A1A" }}
              >
                <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#D4AF37" }}>
                  {t.publico}
                </p>
                <h3 className="text-xl font-bold mb-4">{t.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#888888" }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6" style={{ background: "#0D0D0D" }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4 text-center" style={{ color: "#D4AF37" }}>FAQ</p>
          <h2 className="text-3xl font-bold mb-12 text-center">Preguntas sobre conferencias</h2>
          <div className="space-y-4">
            {faqConferencias.map((item, i) => (
              <details key={i} className="rounded-xl p-6 cursor-pointer" style={{ background: "#111111", border: "1px solid #1A1A1A" }}>
                <summary className="font-semibold text-base list-none flex justify-between items-center">
                  {item.q}
                  <span style={{ color: "#D4AF37" }} className="ml-4">+</span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed" style={{ color: "#888888" }}>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">¿Tienes un evento próximo?</h2>
          <p className="mb-8" style={{ color: "#888888" }}>
            Comparte los detalles de tu evento y el equipo de Haykel te responde en menos de 48 horas.
          </p>
          <Link
            href="/contacto"
            className="inline-flex px-8 py-4 rounded-full font-semibold"
            style={{ background: "linear-gradient(135deg, #A8882A, #D4AF37)", color: "#0A0A0A" }}
          >
            Contactar ahora →
          </Link>
        </div>
      </section>
    </div>
  );
}
