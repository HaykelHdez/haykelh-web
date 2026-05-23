import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contacto — Haykel Hernandez",
  description:
    "Contacta a Haykel Hernandez para conferencias, mentoría, colaboraciones o medios. Respuesta en menos de 48 horas.",
  alternates: { canonical: "https://haykelh.com/contacto" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://haykelh.com" },
    { "@type": "ListItem", position: 2, name: "Contacto", item: "https://haykelh.com/contacto" },
  ],
};

export default function Contacto() {
  return (
    <div style={{ background: "#0A0A0A", color: "#F5F5F0" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section
        className="pt-32 pb-20 px-6"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(212,175,55,0.08) 0%, transparent 70%)" }}
      >
        <div className="max-w-5xl mx-auto text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#D4AF37" }}>
            Hablemos
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Trabajar con{" "}
            <span style={{ background: "linear-gradient(135deg, #A8882A, #D4AF37, #F0D060)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Haykel
            </span>
          </h1>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "#888888" }}>
            Completa el formulario o escribe directamente. El equipo responde en menos de 48 horas.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-10">
          {/* Sidebar info */}
          <div className="md:col-span-2 space-y-6">
            <div className="p-6 rounded-2xl" style={{ background: "#111111", border: "1px solid #1A1A1A" }}>
              <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#D4AF37" }}>Puedo ayudarte con</p>
              {[
                "Conferencias y Keynotes corporativas",
                "Mentoría personal 1:1",
                "Eventos y congresos",
                "Colaboraciones y alianzas",
                "Entrevistas y medios",
              ].map((item, i) => (
                <p key={i} className="text-sm py-2 flex gap-2 items-center" style={{ color: "#888888", borderBottom: i < 4 ? "1px solid #1A1A1A" : "none" }}>
                  <span style={{ color: "#D4AF37" }}>✦</span> {item}
                </p>
              ))}
            </div>

            <div className="p-6 rounded-2xl" style={{ background: "#111111", border: "1px solid #1A1A1A" }}>
              <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#D4AF37" }}>WhatsApp directo</p>
              <a
                href="https://wa.me/17028496405"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm font-medium transition-colors duration-200"
                style={{ color: "#F5F5F0" }}
              >
                <span className="text-2xl">💬</span>
                +1 (702) 849-6405
              </a>
              <p className="text-xs mt-2" style={{ color: "#888888" }}>Lun – Vie, 9am – 6pm</p>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-3">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
