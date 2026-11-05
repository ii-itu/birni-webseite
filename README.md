# mirko-birnstein.at

Website der Praxis für Psychotherapie **Mirko Birnstein, MSc** – gebaut mit [Astro 7](https://astro.build) und TypeScript, gehostet als **Cloudflare Worker (Static Assets)**.

## Entwicklung

```bash
npm install
npm run dev        # lokaler Dev-Server auf http://localhost:4321
npm run build      # Typprüfung (astro check) + statischer Build nach ./dist
npm run preview    # Build lokal im Cloudflare-Worker-Runtime (wrangler dev)
npm run deploy     # Build + Deploy zu Cloudflare (wrangler deploy)
```

Für das Deployment einmalig `npx wrangler login` ausführen (oder `CLOUDFLARE_API_TOKEN` setzen).

## Struktur

| Pfad | Inhalt |
| --- | --- |
| `src/data/site.ts` | **Alle zentralen Inhalte**: Kontaktdaten, Navigation, Schwerpunkte, Werdegang, Preise, Kassenzuschüsse |
| `src/pages/` | Seiten (Startseite, Über mich, Ablauf & Kosten, Kontakt, Impressum, Datenschutz, 404) |
| `src/components/` | Header, Footer, Icons, Hero, Kontakt-CTA |
| `src/styles/global.css` | Design-Tokens (Farben `#39a6de` / `#e0f1fc` der bisherigen Seite) und Basis-Styles |
| `src/assets/` | Porträtfotos (werden beim Build automatisch optimiert) |
| `public/_headers` | Security-Header (CSP etc.) und Caching |
| `public/_redirects` | Weiterleitungen alter WordPress-URLs |
| `wrangler.jsonc` | Cloudflare-Worker-Konfiguration |

## Datenschutz

Keine Cookies, kein Tracking, Schriften (Inter, Fraunces) werden selbst gehostet. Die OpenStreetMap-Karte auf der Kontaktseite wird erst nach Klick geladen – daher ist kein Cookie-Banner nötig.

## Eigene Domain

In `wrangler.jsonc` den Block `routes` einkommentieren, sobald die Domain `mirko-birnstein.at` in Cloudflare verwaltet wird.
