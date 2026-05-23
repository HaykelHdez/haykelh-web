import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

const posts: Record<string, {
  titulo: string;
  descripcion: string;
  fecha: string;
  categoria: string;
  tiempo: string;
  contenido: string;
}> = {
  "ventas-conscientes-que-son": {
    titulo: "¿Qué son las ventas conscientes y por qué cambian todo?",
    descripcion: "Vender desde la conciencia no es solo una tendencia — es una ventaja competitiva real. Te explico qué son y cómo aplicarlas.",
    fecha: "2026-05-01",
    categoria: "Ventas Conscientes",
    tiempo: "7 min",
    contenido: `
Las ventas conscientes no son una técnica. Son una filosofía.

Mientras la venta tradicional se basa en presionar, persuadir con trucos y cerrar a cualquier costo, las ventas conscientes parten de una premisa diferente: **el cliente no es un objetivo, es una persona**.

## ¿Qué hace "consciente" a una venta?

Una venta consciente tiene tres características:

**1. Parte de la identidad**
No puedes vender bien algo en lo que no crees. Y no puedes creer genuinamente en algo que no está alineado con quién eres. La primera venta siempre es hacia adentro.

**2. Crea valor real**
La venta consciente no busca cerrar — busca servir. Cuando sirves de verdad, el cierre es una consecuencia natural.

**3. Construye relación**
Una venta que no construye relación es una transacción. Las transacciones se olvidan. Las relaciones se recuerdan y se recomiendan.

## ¿Por qué ahora más que nunca?

El consumidor moderno tiene acceso a toda la información que quiere. No necesita que le vendas — necesita que le guíes. Y guiar requiere autenticidad, no scripts.

La venta consciente no es más lenta ni menos efectiva. Es más sostenible, más ética y, en el largo plazo, más rentable.

## Cómo empezar

El primer paso no es aprender técnicas nuevas. Es hacer una pregunta incómoda: ¿Vendo desde el miedo o desde la convicción?

La respuesta a esa pregunta lo cambia todo.
    `,
  },
  "identidad-antes-que-estrategia": {
    titulo: "Por qué tu identidad importa más que tu estrategia de ventas",
    descripcion: "Antes de cualquier técnica, proceso o embudo, hay una pregunta que define todo: ¿quién crees que eres?",
    fecha: "2026-04-20",
    categoria: "Identidad",
    tiempo: "8 min",
    contenido: `
Cada vez que un emprendedor me dice "necesito una mejor estrategia de ventas", yo pienso lo mismo: probablemente no.

Lo que necesita es una mejor respuesta a una pregunta más fundamental: ¿quién creo que soy?

## La identidad como punto de partida

Tu cerebro actúa de forma consistente con la imagen que tiene de ti mismo. Si en el fondo crees que "vender es manipular", cada intento de vender activará resistencia interna. No importa qué técnica uses.

Si crees que "no soy de los que cobran caro", pondrás precios que confirmen esa creencia.

La identidad no es solo autoestima. Es el sistema operativo desde el cual tomas decisiones.

## El problema de empezar por la estrategia

Cuando alguien empieza por la estrategia sin trabajar la identidad, ocurre algo predecible: aprende técnicas que no aplica, o las aplica de forma inconsistente, o las sabotea inconscientemente.

No es falta de disciplina. Es que la estrategia choca con creencias más profundas.

## Cómo alinear identidad y estrategia

Hay tres preguntas que me gusta hacer:

1. ¿Quién tiene que ser la persona que logra lo que quieres lograr?
2. ¿Qué creen, piensan y hacen esas personas?
3. ¿Qué tengo que dejar de creer para ser esa persona?

La respuesta a esas preguntas es tu hoja de ruta real.

La estrategia viene después. Y cuando viene, funciona.
    `,
  },
};

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return { title: "Artículo no encontrado" };
  return {
    title: `${post.titulo} — Haykel Hernandez`,
    description: post.descripcion,
    alternates: { canonical: `https://haykelh.com/blog/${slug}` },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.titulo,
    description: post.descripcion,
    author: {
      "@type": "Person",
      name: "Haykel Hernandez",
      url: "https://haykelh.com",
    },
    publisher: {
      "@type": "Person",
      name: "Haykel Hernandez",
      url: "https://haykelh.com",
    },
    datePublished: post.fecha,
    url: `https://haykelh.com/blog/${slug}`,
    inLanguage: "es",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://haykelh.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://haykelh.com/blog" },
      { "@type": "ListItem", position: 3, name: post.titulo, item: `https://haykelh.com/blog/${slug}` },
    ],
  };

  const paragraphs = post.contenido.trim().split("\n").filter(Boolean);

  return (
    <div style={{ background: "#0A0A0A", color: "#F5F5F0" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-2xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex gap-2 items-center text-xs mb-8" style={{ color: "#888888" }}>
            <Link href="/" style={{ color: "#888888" }}>Inicio</Link>
            <span>·</span>
            <Link href="/blog" style={{ color: "#888888" }}>Blog</Link>
            <span>·</span>
            <span style={{ color: "#D4AF37" }}>{post.categoria}</span>
          </div>

          {/* Header */}
          <span
            className="text-xs font-semibold px-3 py-1 rounded-full mb-6 inline-block"
            style={{ background: "rgba(212,175,55,0.1)", color: "#D4AF37" }}
          >
            {post.categoria}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">{post.titulo}</h1>
          <p className="text-base mb-8" style={{ color: "#888888" }}>{post.descripcion}</p>

          <div className="flex items-center gap-4 text-xs mb-10 pb-8" style={{ color: "#888888", borderBottom: "1px solid #2A2A2A" }}>
            <span>Haykel Hernandez</span>
            <span>·</span>
            <span>{new Date(post.fecha).toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })}</span>
            <span>·</span>
            <span>{post.tiempo} lectura</span>
          </div>

          {/* Contenido */}
          <div className="prose prose-invert max-w-none space-y-4">
            {paragraphs.map((p, i) => {
              if (p.startsWith("## ")) {
                return (
                  <h2 key={i} className="text-2xl font-bold mt-8 mb-4" style={{ color: "#F5F5F0" }}>
                    {p.replace("## ", "")}
                  </h2>
                );
              }
              if (p.startsWith("**") && p.endsWith("**")) {
                return (
                  <p key={i} className="font-bold text-base" style={{ color: "#D4AF37" }}>
                    {p.replace(/\*\*/g, "")}
                  </p>
                );
              }
              return (
                <p key={i} className="text-base leading-relaxed" style={{ color: "#888888" }}>
                  {p.replace(/\*\*(.*?)\*\*/g, (_, m) => m)}
                </p>
              );
            })}
          </div>

          {/* Author box */}
          <div
            className="mt-12 p-6 rounded-2xl flex gap-4 items-start"
            style={{ background: "#111111", border: "1px solid rgba(212,175,55,0.15)" }}
          >
            <div
              className="w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center font-bold"
              style={{ background: "linear-gradient(135deg, #A8882A, #D4AF37)", color: "#0A0A0A" }}
            >
              H
            </div>
            <div>
              <p className="font-bold mb-1" style={{ color: "#D4AF37" }}>Haykel Hernandez</p>
              <p className="text-sm leading-relaxed" style={{ color: "#888888" }}>
                Emprendedor, autor y mentor especializado en ventas conscientes, identidad y liderazgo personal.
              </p>
              <Link href="/sobre-mi" className="text-xs mt-2 inline-block" style={{ color: "#D4AF37" }}>
                Conocer más →
              </Link>
            </div>
          </div>

          {/* Back */}
          <div className="mt-10">
            <Link href="/blog" className="text-sm" style={{ color: "#888888" }}>
              ← Volver al blog
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
