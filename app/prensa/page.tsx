import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prensa y Medios — Haykel Hernandez",
  description:
    "Cobertura de medios y artículos de prensa sobre Haykel Hernandez. Media kit disponible para periodistas y productores.",
  alternates: { canonical: "https://haykelh.com/prensa" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://haykelh.com" },
    { "@type": "ListItem", position: 2, name: "Prensa", item: "https://haykelh.com/prensa" },
  ],
};

// Artículos de prensa — actualizar con URLs reales
const articulos: { titulo: string; medio: string; fecha: string; url: string; descripcion: string }[] = [
  // Agregar artículos reales aquí
];

const bioCorta =
  "Haykel Hernandez es emprendedor, autor y mentor especializado en ventas conscientes, identidad y liderazgo personal. Transforma la manera en que personas y equipos piensan, se comunican y toman acción.";

const bioLarga =
  "Haykel Hernandez es emprendedor, autor y mentor con más de 10 años de experiencia en ventas, negocios y desarrollo humano. Especializado en ventas conscientes, identidad y liderazgo personal, ha trabajado con personas en más de 5 países, ayudándolas a transformar su forma de pensar, comunicarse y tomar acción. Su mensaje integra crecimiento personal, espiritualidad y ventas desde una visión más consciente y humana, conectando con emprendedores, equipos corporativos y líderes que buscan resultados reales desde la autenticidad.";

export default function Prensa() {
  return (
    <div style={{ background: "#0A0A0A", color: "#F5F5F0" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section
        className="pt-32 pb-20 px-6 text-center"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(212,175,55,0.08) 0%, transparent 70%)" }}
      >
        <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#D4AF37" }}>Medios</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Prensa &{" "}
          <span style={{ background: "linear-gradient(135deg, #A8882A, #D4AF37, #F0D060)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Media Kit
          </span>
        </h1>
        <p className="text-lg max-w-2xl mx-auto" style={{ color: "#888888" }}>
          Recursos para periodistas, productores y medios de comunicación.
        </p>
      </section>

      {/* Bio para medios */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl" style={{ background: "#111111", border: "1px solid #1A1A1A" }}>
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#D4AF37" }}>
              Bio corta (para programas y presentaciones)
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#888888" }}>{bioCorta}</p>
          </div>
          <div className="p-8 rounded-2xl" style={{ background: "#111111", border: "1px solid #1A1A1A" }}>
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#D4AF37" }}>
              Bio larga (para artículos y prensa)
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#888888" }}>{bioLarga}</p>
          </div>
        </div>
      </section>

      {/* Temas de entrevista */}
      <section className="py-16 px-6" style={{ background: "#0D0D0D" }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4 text-center" style={{ color: "#D4AF37" }}>
            Temas de entrevista
          </p>
          <h2 className="text-3xl font-bold mb-10 text-center">Haykel puede hablar sobre...</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              "Ventas conscientes y ética en los negocios",
              "Identidad personal como base del emprendimiento",
              "Liderazgo humano en equipos comerciales",
              "Espiritualidad aplicada a los negocios",
              "El futuro del desarrollo humano y la IA",
              "Cómo construir una marca personal auténtica",
            ].map((tema, i) => (
              <div
                key={i}
                className="p-5 rounded-xl text-sm"
                style={{ background: "#111111", border: "1px solid #1A1A1A", color: "#888888" }}
              >
                <span style={{ color: "#D4AF37" }}>✦ </span>{tema}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Artículos */}
      {articulos.length > 0 && (
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-widest mb-4 text-center" style={{ color: "#D4AF37" }}>Cobertura</p>
            <h2 className="text-3xl font-bold mb-10 text-center">Apariciones en medios</h2>
            <div className="space-y-4">
              {articulos.map((a, i) => (
                <a
                  key={i}
                  href={a.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-6 rounded-xl transition-all duration-200 group"
                  style={{ background: "#111111", border: "1px solid #1A1A1A" }}
                >
                  <div>
                    <p className="text-xs mb-1" style={{ color: "#D4AF37" }}>{a.medio} · {a.fecha}</p>
                    <p className="font-semibold group-hover:text-yellow-300 transition-colors">{a.titulo}</p>
                    <p className="text-sm mt-1" style={{ color: "#888888" }}>{a.descripcion}</p>
                  </div>
                  <span style={{ color: "#D4AF37" }} className="ml-4">→</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Placeholder cuando no hay artículos */}
      {articulos.length === 0 && (
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="p-16 rounded-2xl" style={{ background: "#111111", border: "1px solid #1A1A1A" }}>
              <p className="text-4xl mb-4">📰</p>
              <p className="text-lg font-bold mb-2">Cobertura en medios próximamente</p>
              <p style={{ color: "#888888" }}>Los artículos de prensa aparecerán aquí una vez publicados.</p>
            </div>
          </div>
        </section>
      )}

      {/* Contacto para prensa */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">¿Medios o prensa?</h2>
          <p className="mb-8" style={{ color: "#888888" }}>
            Para solicitudes de entrevistas, fotos de alta resolución o información adicional,
            contacta directamente.
          </p>
          <a
            href="mailto:haykelhernandez@gmail.com"
            className="inline-flex px-8 py-4 rounded-full font-semibold"
            style={{ background: "linear-gradient(135deg, #A8882A, #D4AF37)", color: "#0A0A0A" }}
          >
            haykelhernandez@gmail.com
          </a>
        </div>
      </section>
    </div>
  );
}
