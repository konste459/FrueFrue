# FrueFrue PWA

Mobile-first Social-Brunch Web App (installierbar als App).

## Lokal starten

```bash
cd /Users/konste/Documents/fruefrue-pwa
python3 -m http.server 4173
```

Dann im Browser öffnen: http://localhost:4173

## Supabase aktivieren

Die App kann lokal weiter mit `localStorage` laufen. Fuer echte Syncs zwischen Geraeten brauchst du Supabase.

1. In Supabase SQL Editor den Inhalt aus `/Users/konste/Documents/fruefrue-pwa/supabase-schema.sql` ausfuehren
2. In `/Users/konste/Documents/fruefrue-pwa/config.js` eintragen:

```js
window.FRUEFRUE_CONFIG = {
  supabase: {
    url: "https://DEIN-PROJEKT.supabase.co",
    anonKey: "DEIN-ANON-KEY",
    table: "fruefrue_state"
  }
};
```

3. Danach neu deployen

Dann werden Events, Nutzer, Polls, Programmpunkte, Votes und weitere App-Daten zwischen Geraeten synchronisiert.

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
