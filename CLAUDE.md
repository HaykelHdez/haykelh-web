# CLAUDE.md — haykelh-web

## REGLAS DE DEPLOY (OBLIGATORIAS — NO NEGOCIABLES)

1. **NUNCA** `git push origin main` directo. SIEMPRE branch + PR.
2. **NUNCA** `vercel --prod` ni `vercel deploy --prod` manual.
3. Cada cambio: `git checkout -b feat/X origin/main` → push a la branch → `gh pr create` → review → merge → GitHub Actions auto-deploya.
4. Cuando el alias del dominio queda manual-pinned: cada merge requiere `vercel alias set <new-deployment> haykelh.com` con pre-flight curl de paridad.
5. SIEMPRE verificar env vars con `vercel env pull /tmp/v.env` — confirmar que ninguna KEY tenga valor vacío.

## STACK

- Next.js 15 (App Router)
- Tailwind CSS 4
- Framer Motion
- TypeScript
- Resend (email transaccional)
- Supabase (PR Auto-Pilot — Fase 5)
- Vercel (hosting)

## CLIENTE

- Nombre: Haykel Hernandez
- Dominio: haykelh.com
- Tema: Negro (#0A0A0A) + Dorado (#D4AF37)
- Email leads: haykelhernandez@gmail.com
- WhatsApp asistente: +17028496405

## GOTCHAS TECNICOS (Lecciones DAB v2.0)

- Env vars en Vercel pueden quedar vacías si se crean via stdin. Siempre verificar.
- Lambdas no hot-reload env vars — hacer nuevo deploy tras cambiar una var.
- Browser cache puede mostrar 404 fantasma — instruir Cmd+Shift+R al cliente.
- Vercel alias queda manual-pinned tras correr `vercel alias set` manual — pre-flight curl antes de cada alias-swap.
