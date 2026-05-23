import Link from "next/link";

const links = [
  { href: "/sobre-mi", label: "Sobre mí" },
  { href: "/conferencias", label: "Conferencias" },
  { href: "/blog", label: "Blog" },
  { href: "/prensa", label: "Prensa" },
  { href: "/contacto", label: "Contacto" },
];

const social = [
  { href: "https://instagram.com/haykelh", label: "Instagram" },
  { href: "https://tiktok.com/@haykelh", label: "TikTok" },
  { href: "https://youtube.com/@haykelh", label: "YouTube" },
  { href: "https://linkedin.com/in/haykelh", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "#0A0A0A",
        borderTop: "1px solid #2A2A2A",
      }}
      className="py-16 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Top */}
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-12">
          {/* Brand */}
          <div className="max-w-xs">
            <p className="text-2xl font-bold mb-3" style={{ color: "#D4AF37" }}>
              Haykel Hernandez
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#888888" }}>
              Ventas conscientes, liderazgo y desarrollo humano. Transforma tu
              forma de pensar, comunicarte y tomar acción.
            </p>
          </div>

          {/* Nav */}
          <div className="flex gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#D4AF37" }}>
                Páginas
              </p>
              <ul className="flex flex-col gap-3">
                {links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm transition-colors duration-200 hover:text-yellow-500"
                      style={{ color: "#888888" }}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#D4AF37" }}>
                Redes
              </p>
              <ul className="flex flex-col gap-3">
                {social.map((s) => (
                  <li key={s.href}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm transition-colors duration-200 hover:text-yellow-500"
                      style={{ color: "#888888" }}
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div style={{ borderTop: "1px solid #2A2A2A" }} className="pt-6 flex flex-col md:flex-row justify-between gap-3">
          <p className="text-xs" style={{ color: "#888888" }}>
            © {new Date().getFullYear()} Haykel Hernandez. Todos los derechos reservados.
          </p>
          <p className="text-xs" style={{ color: "#888888" }}>
            haykelh.com
          </p>
        </div>
      </div>
    </footer>
  );
}
