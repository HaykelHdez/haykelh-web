import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Próximamente — Haykel Hernandez",
  description: "Algo grande está por llegar. Haykel Hernandez — Ventas Conscientes, Liderazgo y Desarrollo Humano.",
  robots: { index: false, follow: false },
};

export default function Proximamente() {
  return (
    <div
      style={{ background: "#0A0A0A", color: "#F5F5F0", minHeight: "100vh" }}
      className="flex flex-col items-center justify-center px-6 text-center relative overflow-hidden"
    >
      {/* Grid decoration */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gold radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(212,175,55,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-xl mx-auto flex flex-col items-center gap-8">

        {/* Logo */}
        <p className="text-2xl font-bold tracking-tight">
          <span style={{ color: "#D4AF37" }}>Haykel</span>
          <span style={{ color: "#F5F5F0" }}>H</span>
        </p>

        {/* Separator */}
        <div
          className="w-12 h-px"
          style={{ background: "linear-gradient(90deg, transparent, #D4AF37, transparent)" }}
        />

        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest"
          style={{
            border: "1px solid rgba(212,175,55,0.3)",
            color: "#D4AF37",
            background: "rgba(212,175,55,0.05)",
          }}
        >
          <span>✦</span>
          Emprendedor · Autor · Mentor
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
          Algo grande{" "}
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, #A8882A, #D4AF37, #F0D060)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            está por llegar
          </span>
        </h1>

        {/* Description */}
        <p
          className="text-base md:text-lg leading-relaxed max-w-md"
          style={{ color: "#888888" }}
        >
          Estamos construyendo algo especial. Ventas conscientes, liderazgo y
          desarrollo humano — de una forma que no has visto antes.
        </p>

        {/* Divider */}
        <div
          className="w-full h-px"
          style={{ background: "linear-gradient(90deg, transparent, #2A2A2A, transparent)" }}
        />

        {/* Instagram CTA */}
        <div className="flex flex-col items-center gap-3">
          <p className="text-xs uppercase tracking-widest" style={{ color: "#444444" }}>
            Mientras tanto, sígueme aquí
          </p>
          <a
            href="https://instagram.com/yosoyhaykel"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200"
            style={{
              border: "1px solid rgba(212,175,55,0.4)",
              color: "#D4AF37",
              background: "rgba(212,175,55,0.05)",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            @yosoyhaykel
          </a>
        </div>

        {/* Footer note */}
        <p className="text-xs" style={{ color: "#333333" }}>
          © {new Date().getFullYear()} Haykel Hernandez · haykelh.com
        </p>
      </div>
    </div>
  );
}
