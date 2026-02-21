# FrueFrue PWA

Mobile-first Social-Brunch Web App (installierbar als App).

## Lokal starten

```bash
cd /Users/konste/Documents/fruefrue-pwa
python3 -m http.server 4173
```

Dann im Browser öffnen: http://localhost:4173

## Deploy (Vercel)

1. Repo zu GitHub pushen.
2. Auf vercel.com importieren.
3. Framework Preset: `Other` (static site).
4. Deploy.

## Eigene Domain

- Eine Domain wie `fruefrue.app`, `fruefrue.social`, `fruefrue.de` registrieren.
- In Vercel unter `Settings -> Domains` verbinden.
- DNS beim Domain-Provider setzen (A/CNAME nach Vercel).

Hinweis: `.fruefrue` ist keine standardmäßig verfügbare TLD. Du kannst aber `fruefrue.xxx` nutzen.
