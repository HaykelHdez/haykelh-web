"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/sobre-mi", label: "Sobre mí" },
  { href: "/conferencias", label: "Conferencias" },
  { href: "/blog", label: "Blog" },
  { href: "/prensa", label: "Prensa" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(10,10,10,0.95)"
          : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #2A2A2A" : "none",
      }}
    >
      <nav className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-bold text-xl tracking-tight"
          style={{ color: "#D4AF37" }}
        >
          Haykel<span style={{ color: "#F5F5F0" }}>H</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium transition-colors duration-200"
                  style={{
                    color: isActive ? "#D4AF37" : "#888888",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#D4AF37")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = isActive ? "#D4AF37" : "#888888")
                  }
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA desktop */}
        <Link
          href="/contacto"
          className="hidden md:inline-flex items-center px-5 py-2 text-sm font-semibold rounded-full transition-all duration-200"
          style={{
            background: "linear-gradient(135deg, #A8882A, #D4AF37)",
            color: "#0A0A0A",
          }}
        >
          Trabajar conmigo
        </Link>

        {/* Hamburger mobile */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span
            className="block w-6 h-0.5 transition-all duration-300"
            style={{
              background: "#D4AF37",
              transform: open ? "rotate(45deg) translateY(8px)" : "none",
            }}
          />
          <span
            className="block w-6 h-0.5 transition-all duration-300"
            style={{
              background: "#D4AF37",
              opacity: open ? 0 : 1,
            }}
          />
          <span
            className="block w-6 h-0.5 transition-all duration-300"
            style={{
              background: "#D4AF37",
              transform: open ? "rotate(-45deg) translateY(-8px)" : "none",
            }}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden px-6 pb-8 pt-4 flex flex-col gap-1"
          style={{ background: "rgba(10,10,10,0.98)", borderTop: "1px solid #2A2A2A" }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base font-medium py-3 border-b"
              style={{ color: pathname === link.href ? "#D4AF37" : "#F5F5F0", borderColor: "#1A1A1A" }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contacto"
            className="mt-2 text-center py-3 rounded-full font-semibold"
            style={{
              background: "linear-gradient(135deg, #A8882A, #D4AF37)",
              color: "#0A0A0A",
            }}
          >
            Trabajar conmigo
          </Link>
        </div>
      )}
    </header>
  );
}
