"use client";

import { useState } from "react";

const tipos = [
  "Conferencia / Keynote",
  "Evento Corporativo",
  "Mentoría",
  "Colaboración",
  "Medios / Prensa",
  "Otro",
];

export default function ContactForm() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    whatsapp: "",
    empresa: "",
    tipo: "",
    mensaje: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("ok");
        setForm({ nombre: "", email: "", whatsapp: "", empresa: "", tipo: "", mensaje: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputStyle = {
    background: "#111111",
    border: "1px solid #2A2A2A",
    color: "#F5F5F0",
    borderRadius: "12px",
    padding: "14px 16px",
    fontSize: "14px",
    width: "100%",
    outline: "none",
    transition: "border-color 0.2s",
  };

  const labelStyle = {
    display: "block",
    fontSize: "12px",
    fontWeight: 600,
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
    marginBottom: "8px",
    color: "#888888",
  };

  if (status === "ok") {
    return (
      <div
        className="p-12 rounded-2xl text-center"
        style={{ background: "#111111", border: "1px solid rgba(212,175,55,0.3)" }}
      >
        <p className="text-4xl mb-4">✦</p>
        <h3 className="text-xl font-bold mb-2" style={{ color: "#D4AF37" }}>¡Mensaje enviado!</h3>
        <p style={{ color: "#888888" }}>El equipo de Haykel te responderá en menos de 48 horas.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 p-8 rounded-2xl"
      style={{ background: "#111111", border: "1px solid #1A1A1A" }}
    >
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label style={labelStyle}>Nombre *</label>
          <input
            required
            type="text"
            placeholder="Tu nombre"
            style={inputStyle}
            value={form.nombre}
            onChange={(e) => setForm({ ...form, nombre: e.target.value })}
            onFocus={(e) => (e.target.style.borderColor = "#D4AF37")}
            onBlur={(e) => (e.target.style.borderColor = "#2A2A2A")}
          />
        </div>
        <div>
          <label style={labelStyle}>Email *</label>
          <input
            required
            type="email"
            placeholder="tu@email.com"
            style={inputStyle}
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            onFocus={(e) => (e.target.style.borderColor = "#D4AF37")}
            onBlur={(e) => (e.target.style.borderColor = "#2A2A2A")}
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label style={labelStyle}>WhatsApp</label>
          <input
            type="tel"
            placeholder="+1 000 000 0000"
            style={inputStyle}
            value={form.whatsapp}
            onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
            onFocus={(e) => (e.target.style.borderColor = "#D4AF37")}
            onBlur={(e) => (e.target.style.borderColor = "#2A2A2A")}
          />
        </div>
        <div>
          <label style={labelStyle}>Empresa / Organización</label>
          <input
            type="text"
            placeholder="Tu empresa"
            style={inputStyle}
            value={form.empresa}
            onChange={(e) => setForm({ ...form, empresa: e.target.value })}
            onFocus={(e) => (e.target.style.borderColor = "#D4AF37")}
            onBlur={(e) => (e.target.style.borderColor = "#2A2A2A")}
          />
        </div>
      </div>

      <div>
        <label style={labelStyle}>Tipo de consulta *</label>
        <select
          required
          style={{ ...inputStyle, cursor: "pointer" }}
          value={form.tipo}
          onChange={(e) => setForm({ ...form, tipo: e.target.value })}
          onFocus={(e) => (e.target.style.borderColor = "#D4AF37")}
          onBlur={(e) => (e.target.style.borderColor = "#2A2A2A")}
        >
          <option value="">Selecciona una opción</option>
          {tipos.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label style={labelStyle}>Mensaje *</label>
        <textarea
          required
          rows={5}
          placeholder="Cuéntame sobre tu proyecto, evento o consulta..."
          style={{ ...inputStyle, resize: "vertical" }}
          value={form.mensaje}
          onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
          onFocus={(e) => (e.target.style.borderColor = "#D4AF37")}
          onBlur={(e) => (e.target.style.borderColor = "#2A2A2A")}
        />
      </div>

      {status === "error" && (
        <p className="text-sm" style={{ color: "#ef4444" }}>
          Hubo un error. Por favor intenta de nuevo o escribe directamente a haykelhernandez@gmail.com
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-4 rounded-full font-semibold text-base transition-all duration-200"
        style={{
          background: status === "loading" ? "#A8882A" : "linear-gradient(135deg, #A8882A, #D4AF37)",
          color: "#0A0A0A",
          cursor: status === "loading" ? "not-allowed" : "pointer",
        }}
      >
        {status === "loading" ? "Enviando..." : "Enviar mensaje →"}
      </button>
    </form>
  );
}
