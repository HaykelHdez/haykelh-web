import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Haykel Hernandez — Ventas Conscientes, Liderazgo y Desarrollo Humano",
  description:
    "Haykel Hernandez es emprendedor, autor y mentor especializado en ventas conscientes, identidad y liderazgo personal. Transforma tu forma de pensar, comunicarte y tomar acción.",
};

const stats = [
  { value: "10+", label: "Años de experiencia" },
  { value: "1,000+", label: "Personas mentoreadas" },
  { value: "5+", label: "Países" },
  { value: "∞", label: "Transformaciones" },
];

const pilares = [
  {
    icon: "✦",
    title: "Ventas Conscientes",
    desc: "Vender no es manipular. Es conectar, servir y crear valor genuino desde la autenticidad.",
  },
  {
    icon: "✦",
    title: "Identidad & Liderazgo",
    desc: "Quien eres determina lo que construyes. Primero la identidad, luego la estrategia.",
  },
  {
    icon: "✦",
    title: "Desarrollo Humano",
    desc: "El crecimiento personal y los negocios no están separados. Uno potencia al otro.",
  },
];

const testimonials = [
  {
    quote: "Haykel tiene la capacidad de ver lo que tú no puedes ver en ti mismo. Su mentoría cambió la dirección de mi negocio.",
    author: "Cliente, México",
  },
  {
    quote: "No es un coach más. Es alguien que ha vivido lo que enseña. Eso se siente.",
    author: "Emprendedor, Venezuela",
  },
  {
    quote: "Después de trabajar con Haykel, mis ventas no solo crecieron — aprendí a vender desde un lugar diferente.",
    author: "Consultora, Colombia",
  },
];

export default function Home() {
  return (
    <div style={{ background: "#0A0A0A", color: "#F5F5F0" }}>
      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center justify-center px-6 pt-20"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(212,175,55,0.08) 0%, transparent 70%)",
        }}
      >
        {/* Grid decoration */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-8"
            style={{
              border: "1px solid rgba(212,175,55,0.3)",
              color: "#D4AF37",
              background: "rgba(212,175,55,0.05)",
            }}
          >
            <span>✦</span>
            Emprendedor · Autor · Mentor
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6">
            Vende más{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #A8882A, #D4AF37, #F0D060)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              siendo tú
            </span>
          </h1>

          <p
            className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
            style={{ color: "#888888" }}
          >
            Haykel Hernandez te ayuda a transformar tu forma de pensar, comunicarte
            y vender — desde la conciencia, la identidad y el propósito.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="px-8 py-4 rounded-full font-semibold text-base transition-all duration-200"
              style={{
                background: "linear-gradient(135deg, #A8882A, #D4AF37)",
                color: "#0A0A0A",
              }}
            >
              Trabajar con Haykel →
            </Link>
            <Link
              href="/sobre-mi"
              className="px-8 py-4 rounded-full font-semibold text-base transition-all duration-200"
              style={{
                border: "1px solid #2A2A2A",
                color: "#F5F5F0",
              }}
            >
              Conocer su historia
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div
            className="w-px h-12 animate-pulse"
            style={{ background: "linear-gradient(to bottom, #D4AF37, transparent)" }}
          />
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 px-6" style={{ borderTop: "1px solid #1A1A1A", borderBottom: "1px solid #1A1A1A" }}>
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p
                className="text-4xl md:text-5xl font-bold mb-2"
                style={{
                  background: "linear-gradient(135deg, #A8882A, #D4AF37, #F0D060)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {s.value}
              </p>
              <p className="text-sm" style={{ color: "#888888" }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Photo placeholder */}
          <div
            className="aspect-[4/5] rounded-2xl flex items-center justify-center relative overflow-hidden"
            style={{ background: "#111111", border: "1px solid #2A2A2A" }}
          >
            <div
              className="absolute inset-0 opacity-20"
              style={{
                background: "radial-gradient(ellipse at center, rgba(212,175,55,0.4) 0%, transparent 70%)",
              }}
            />
            <p style={{ color: "#2A2A2A", fontSize: "13px" }}>
              📸 Foto profesional
            </p>
          </div>

          {/* Text */}
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "#D4AF37" }}
            >
              Sobre Haykel
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              La venta más poderosa <br />
              es la que nace de{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #A8882A, #D4AF37)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                quien eres
              </span>
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: "#888888" }}>
              Haykel Hernandez es emprendedor, autor y mentor especializado en ventas
              conscientes, identidad y liderazgo personal. A través de su experiencia
              en ventas, negocios y desarrollo humano, ayuda a personas a transformar
              su forma de pensar, comunicarse y tomar acción.
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: "#888888" }}>
              Su mensaje conecta crecimiento personal, espiritualidad y ventas desde
              una visión más consciente y humana.
            </p>
            <Link
              href="/sobre-mi"
              className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200"
              style={{ color: "#D4AF37" }}
            >
              Conocer su historia completa →
            </Link>
          </div>
        </div>
      </section>

      {/* PILARES / FILOSOFIA */}
      <section
        className="py-24 px-6"
        style={{ background: "#0D0D0D" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#D4AF37" }}>
              Filosofía
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Los tres pilares del método
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pilares.map((p) => (
              <div
                key={p.title}
                className="p-8 rounded-2xl transition-all duration-300 hover:border-yellow-600/30"
                style={{
                  background: "#111111",
                  border: "1px solid #1A1A1A",
                }}
              >
                <p className="text-2xl mb-4" style={{ color: "#D4AF37" }}>{p.icon}</p>
                <h3 className="text-lg font-bold mb-3">{p.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#888888" }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONFERENCIAS PREVIEW */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#D4AF37" }}>
              Speaking
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Keynotes que <br />transforman equipos
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "#888888" }}>
              Haykel lleva a escenarios corporativos y eventos un mensaje que combina
              ventas, liderazgo y desarrollo humano. Sus conferencias no son charlas —
              son experiencias que cambian la forma en que los equipos se perciben y actúan.
            </p>
            <Link
              href="/conferencias"
              className="inline-flex px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200"
              style={{ border: "1px solid #D4AF37", color: "#D4AF37" }}
            >
              Ver temas y disponibilidad
            </Link>
          </div>
          <div
            className="flex-1 rounded-2xl p-8 text-center"
            style={{
              background: "linear-gradient(135deg, rgba(212,175,55,0.05), rgba(212,175,55,0.02))",
              border: "1px solid rgba(212,175,55,0.15)",
            }}
          >
            <p className="text-5xl mb-4">🎤</p>
            <p className="font-bold text-lg mb-2">Conferencias en vivo</p>
            <p className="text-sm" style={{ color: "#888888" }}>
              Corporativos · Eventos · Congresos · Retiros
            </p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-6" style={{ background: "#0D0D0D" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#D4AF37" }}>
              Testimonios
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">Lo que dicen quienes trabajan con Haykel</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl"
                style={{ background: "#111111", border: "1px solid #1A1A1A" }}
              >
                <p className="text-3xl mb-4" style={{ color: "#D4AF37" }}>"</p>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#888888" }}>
                  {t.quote}
                </p>
                <p className="text-xs font-semibold" style={{ color: "#D4AF37" }}>
                  — {t.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section
        className="py-32 px-6 text-center relative overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(212,175,55,0.06) 0%, transparent 70%)",
        }}
      >
        <div className="max-w-2xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest mb-6" style={{ color: "#D4AF37" }}>
            ¿Listo para transformar?
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Empieza a vender desde <br />
            <span
              style={{
                background: "linear-gradient(135deg, #A8882A, #D4AF37, #F0D060)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              quien realmente eres
            </span>
          </h2>
          <p className="text-base mb-10" style={{ color: "#888888" }}>
            Un mensaje, una conversación, puede cambiar la dirección de tu negocio.
          </p>
          <Link
            href="/contacto"
            className="inline-flex px-10 py-5 rounded-full font-semibold text-lg transition-all duration-200"
            style={{
              background: "linear-gradient(135deg, #A8882A, #D4AF37)",
              color: "#0A0A0A",
            }}
          >
            Contactar a Haykel →
          </Link>
        </div>
      </section>
    </div>
  );
}
