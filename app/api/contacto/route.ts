import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { nombre, email, whatsapp, empresa, tipo, mensaje } = body;

    if (!nombre || !email || !tipo || !mensaje) {
      return NextResponse.json({ error: "Campos requeridos faltantes" }, { status: 400 });
    }

    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8" />
        <style>
          body { font-family: Arial, sans-serif; background: #0A0A0A; color: #F5F5F0; margin: 0; padding: 0; }
          .container { max-width: 600px; margin: 0 auto; padding: 40px 20px; }
          .header { text-align: center; padding: 40px 0; border-bottom: 1px solid #2A2A2A; }
          .gold { color: #D4AF37; }
          .label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: #D4AF37; margin-bottom: 6px; }
          .value { font-size: 15px; color: #F5F5F0; margin-bottom: 20px; background: #111; padding: 12px 16px; border-radius: 8px; border-left: 3px solid #D4AF37; }
          .footer { text-align: center; padding-top: 40px; font-size: 12px; color: #888888; border-top: 1px solid #2A2A2A; margin-top: 40px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 class="gold" style="font-size: 24px; margin: 0;">✦ Nuevo Lead</h1>
            <p style="color: #888; margin: 8px 0 0;">haykelh.com — Formulario de contacto</p>
          </div>
          <div style="padding: 30px 0;">
            <div class="label">Nombre</div>
            <div class="value">${nombre}</div>
            <div class="label">Email</div>
            <div class="value"><a href="mailto:${email}" style="color: #D4AF37;">${email}</a></div>
            ${whatsapp ? `<div class="label">WhatsApp</div><div class="value"><a href="https://wa.me/${whatsapp.replace(/\D/g, '')}" style="color: #D4AF37;">${whatsapp}</a></div>` : ""}
            ${empresa ? `<div class="label">Empresa / Organización</div><div class="value">${empresa}</div>` : ""}
            <div class="label">Tipo de consulta</div>
            <div class="value">${tipo}</div>
            <div class="label">Mensaje</div>
            <div class="value" style="white-space: pre-wrap;">${mensaje}</div>
          </div>
          <div class="footer">
            <p>haykelh.com · Digital Authority Blueprint v2.0</p>
          </div>
        </div>
      </body>
      </html>
    `;

    await resend.emails.send({
      from: "Haykel Web <onboarding@resend.dev>",
      to: "haykelhernandez@gmail.com",
      replyTo: email,
      subject: `[haykelh.com] Nuevo lead: ${tipo} — ${nombre}`,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error enviando email:", error);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}
