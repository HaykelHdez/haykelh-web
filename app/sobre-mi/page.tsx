import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sobre mí — Haykel Hernandez",
  description:
    "Conoce la historia de Haykel Hernandez: emprendedor, autor y mentor especializado en ventas conscientes, identidad y liderazgo personal.",
  alternates: { canonical: "https://haykelh.com/sobre-mi" },
};

const sobreMiFaq = [
  {
    q: "¿Qué hace exactamente Haykel Hernandez?",
    a: "Haykel es emprendedor, autor y mentor que ayuda a personas y empresas a transformar su manera de vender y liderar a través de las ventas conscientes y el desarrollo humano.",
  },
  {
    q: "¿Cuánto tiempo lleva Haykel en el mundo de las ventas y el desarrollo humano?",
    a: "Haykel cuenta con más de 10 años de experiencia en ventas, negocios y desarrollo humano, habiendo trabajado con personas en más de 5 países.",
  },
  {
    q: "¿Qué hace diferente a Haykel de otros coaches o mentores?",
    a: "Su enfoque integra ventas, espiritualidad y desarrollo humano desde una visión consciente. No enseña técnicas vacías — enseña a vender desde la identidad y el propósito.",
  },
  {
    q: "¿Cómo puedo trabajar con Haykel?",
    a: "Puedes contactarlo directamente desde la página de contacto para explorar conferencias, mentoría personal o programas grupales.",
  },
  {
    q: "¿Haykel ofrece conferencias para empresas?",
    a: "Sí. Haykel imparte keynotes y talleres para equipos corporativos, eventos y congresos en temas de ventas conscientes y liderazgo.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: sobreMiFaq.map(({ q, a }) => ({
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
    { "@type": "ListItem", position: 2, name: "Sobre mí", item: "https://haykelh.com/sobre-mi" },
  ],
};

export default function SobreMi() {
  return (
    <div style={{ background: "#0A0A0A", color: "#F5F5F0" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section
        className="pt-32 pb-20 px-6 text-center"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(212,175,55,0.08) 0%, transparent 70%)",
        }}
      >
        <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#D4AF37" }}>
          Mi historia
        </p>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Sobre{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #A8882A, #D4AF37, #F0D060)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Haykel Hernandez
          </span>
        </h1>
        <p className="text-lg max-w-2xl mx-auto" style={{ color: "#888888" }}>
          Emprendedor, autor y mentor especializado en ventas conscientes,
          identidad y liderazgo personal.
        </p>
      </section>

      {/* Bio completa */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          {/* Foto placeholder */}
          <div
            className="rounded-2xl aspect-[3/4] flex items-center justify-center sticky top-24"
            style={{ background: "#111111", border: "1px solid #2A2A2A" }}
          >
            <p style={{ color: "#2A2A2A", fontSize: "13px" }}>📸 Foto profesional</p>
          </div>

          {/* Texto */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">El punto de partida</h2>
              <p className="text-base leading-relaxed" style={{ color: "#888888" }}>
                Haykel Hernandez no llegó al mundo del desarrollo humano y las ventas desde
                un manual. Llegó desde la experiencia — desde el campo, desde los errores,
                desde la búsqueda de algo más profundo que las cifras y los resultados.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">La visión</h2>
              <p className="text-base leading-relaxed" style={{ color: "#888888" }}>
                Su mensaje conecta crecimiento personal, espiritualidad y ventas desde una
                visión más consciente y humana. Para Haykel, vender no es manipular — es
                conectar, servir y crear valor genuino desde la autenticidad.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">El método</h2>
              <p className="text-base leading-relaxed" style={{ color: "#888888" }}>
                A través de su experiencia en ventas, negocios y desarrollo humano, ayuda a
                personas a transformar su forma de pensar, comunicarse y tomar acción.
                Quien eres determina lo que construyes — primero la identidad, luego la
                estrategia.
              </p>
            </div>

            <div
              className="p-6 rounded-2xl"
              style={{
                background: "linear-gradient(135deg, rgba(212,175,55,0.06), rgba(212,175,55,0.02))",
                border: "1px solid rgba(212,175,55,0.15)",
              }}
            >
              <p className="text-base italic leading-relaxed" style={{ color: "#D4AF37" }}>
                "La venta más poderosa es la que nace de quien eres, no de lo que
                aprendiste a decir."
              </p>
              <p className="text-sm mt-3" style={{ color: "#888888" }}>— Haykel Hernandez</p>
            </div>

            <Link
              href="/contacto"
              className="inline-flex px-8 py-4 rounded-full font-semibold transition-all duration-200"
              style={{
                background: "linear-gradient(135deg, #A8882A, #D4AF37)",
                color: "#0A0A0A",
              }}
            >
              Trabajar con Haykel →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6" style={{ background: "#0D0D0D" }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4 text-center" style={{ color: "#D4AF37" }}>
            Preguntas frecuentes
          </p>
          <h2 className="text-3xl font-bold mb-12 text-center">Lo que más me preguntan</h2>
          <div className="space-y-4">
            {sobreMiFaq.map((item, i) => (
              <details
                key={i}
                className="group rounded-xl p-6 cursor-pointer"
                style={{ background: "#111111", border: "1px solid #1A1A1A" }}
              >
                <summary className="font-semibold text-base list-none flex justify-between items-center">
                  {item.q}
                  <span style={{ color: "#D4AF37" }} className="ml-4 flex-shrink-0">+</span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed" style={{ color: "#888888" }}>
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
