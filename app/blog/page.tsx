import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — Haykel Hernandez",
  description:
    "Artículos sobre ventas conscientes, liderazgo personal, identidad y desarrollo humano por Haykel Hernandez.",
  alternates: { canonical: "https://haykelh.com/blog" },
};

const articulos = [
  {
    slug: "ventas-conscientes-que-son",
    titulo: "¿Qué son las ventas conscientes y por qué cambian todo?",
    descripcion: "Vender desde la conciencia no es solo una tendencia — es una ventaja competitiva real. Te explico qué son y cómo aplicarlas.",
    fecha: "2026-05-01",
    categoria: "Ventas Conscientes",
    tiempo: "7 min",
  },
  {
    slug: "identidad-antes-que-estrategia",
    titulo: "Por qué tu identidad importa más que tu estrategia de ventas",
    descripcion: "Antes de cualquier técnica, proceso o embudo, hay una pregunta que define todo: ¿quién crees que eres?",
    fecha: "2026-04-20",
    categoria: "Identidad",
    tiempo: "8 min",
  },
  {
    slug: "liderazgo-personal-emprendedores",
    titulo: "Liderazgo personal: el activo más subestimado del emprendedor",
    descripcion: "El negocio crece cuando el emprendedor crece. Una guía práctica sobre liderazgo desde adentro.",
    fecha: "2026-04-10",
    categoria: "Liderazgo",
    tiempo: "6 min",
  },
  {
    slug: "espiritualidad-y-negocios",
    titulo: "Espiritualidad y negocios: la conexión que nadie te enseñó",
    descripcion: "Integrar la dimensión espiritual en tu empresa no es misticismo — es claridad, intuición y decisión.",
    fecha: "2026-03-28",
    categoria: "Desarrollo Humano",
    tiempo: "9 min",
  },
  {
    slug: "como-vender-sin-presionar",
    titulo: "Cómo vender sin presionar y sin sentirte manipulador",
    descripcion: "La venta presión muere. La venta consciente conecta. Aquí el cambio de mentalidad que lo hace posible.",
    fecha: "2026-03-15",
    categoria: "Ventas Conscientes",
    tiempo: "7 min",
  },
  {
    slug: "mentalidad-abundancia-ventas",
    titulo: "Mentalidad de abundancia en las ventas: más que pensamiento positivo",
    descripcion: "Abundancia no es creer que todo lloverá del cielo. Es un sistema de creencias que cambia cómo prospectas, presentas y cierras.",
    fecha: "2026-03-01",
    categoria: "Mentalidad",
    tiempo: "8 min",
  },
  {
    slug: "comunicacion-persuasiva-autentica",
    titulo: "Comunicación persuasiva auténtica: habla y que te crean",
    descripcion: "La comunicación que convierte no es la más elaborada — es la más genuina. Claves para comunicar desde la verdad.",
    fecha: "2026-02-18",
    categoria: "Comunicación",
    tiempo: "6 min",
  },
  {
    slug: "miedos-emprendedor-ventas",
    titulo: "Los 5 miedos que frenan a los emprendedores en las ventas",
    descripcion: "El miedo al rechazo, al juicio, a pedir dinero... Los identificamos y los desmontamos uno por uno.",
    fecha: "2026-02-05",
    categoria: "Mentalidad",
    tiempo: "10 min",
  },
];

const categorias = [...new Set(articulos.map((a) => a.categoria))];

export default function Blog() {
  return (
    <div style={{ background: "#0A0A0A", color: "#F5F5F0" }}>
      {/* Hero */}
      <section
        className="pt-32 pb-16 px-6 text-center"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(212,175,55,0.08) 0%, transparent 70%)" }}
      >
        <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#D4AF37" }}>Ideas & perspectivas</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          El{" "}
          <span style={{ background: "linear-gradient(135deg, #A8882A, #D4AF37, #F0D060)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Blog
          </span>
        </h1>
        <p className="text-lg max-w-xl mx-auto" style={{ color: "#888888" }}>
          Ventas conscientes, liderazgo, identidad y desarrollo humano. Sin relleno.
        </p>
      </section>

      {/* Categorías */}
      <section className="px-6 pb-8">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-3 justify-center">
          {categorias.map((cat) => (
            <span
              key={cat}
              className="px-4 py-1.5 rounded-full text-xs font-semibold"
              style={{ border: "1px solid #2A2A2A", color: "#888888" }}
            >
              {cat}
            </span>
          ))}
        </div>
      </section>

      {/* Grid de artículos */}
      <section className="py-10 px-6 pb-24">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {articulos.map((a) => (
            <Link
              key={a.slug}
              href={`/blog/${a.slug}`}
              className="group p-7 rounded-2xl flex flex-col gap-3 transition-all duration-200 hover:border-yellow-600/30 hover:shadow-lg hover:shadow-yellow-900/10"
              style={{ background: "#111111", border: "1px solid #1A1A1A" }}
            >
              <div className="flex items-center justify-between">
                <span
                  className="text-xs font-semibold px-3 py-1 rounded-full"
                  style={{ background: "rgba(212,175,55,0.1)", color: "#D4AF37" }}
                >
                  {a.categoria}
                </span>
                <span className="text-xs" style={{ color: "#888888" }}>{a.tiempo} lectura</span>
              </div>
              <h2 className="font-bold text-lg leading-snug group-hover:text-yellow-300 transition-colors">
                {a.titulo}
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: "#888888" }}>
                {a.descripcion}
              </p>
              <p className="text-xs mt-auto" style={{ color: "#2A2A2A" }}>
                {new Date(a.fecha).toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
