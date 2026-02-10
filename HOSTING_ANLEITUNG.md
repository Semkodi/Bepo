# Anleitung zur Veröffentlichung (Hosting)

Deine Website wurde erfolgreich gebaut. Folge diesen Schritten, um sie online zu bringen:

## 1. Klassisches Hosting (z.B. IONOS)
1. Baue die Seite mit `npm run build` (bereits erledigt).
2. Öffne den Ordner `dist` in deinem Projekt.
3. Lade alle Dateien aus diesem Ordner per FTP (z.B. mit FileZilla) auf deinen Server hoch.
4. Fertig! Deine Seite ist unter deiner Domain erreichbar.

## 2. Modernes Hosting (Vercel / Netlify) - Empfohlen
Diese Anbieter sind für kleine Webseiten meistens kostenlos und sehr schnell:
1. Lade dein Projekt auf GitHub hoch.
2. Verbinde dein GitHub-Konto mit [Vercel](https://vercel.com/) oder [Netlify](https://www.netlify.com/).
3. Wähle das Repository "Bepo" aus.
4. Klicke auf "Deploy".
5. Jedes Mal, wenn du den Code änderst, aktualisiert sich die Website von selbst.

## Wichtige Dateien für den Server
Stelle sicher, dass folgende Dateien im Hauptverzeichnis deines Webspace liegen:
- `index.html`
- `assets/` (Ordner mit CSS/JS)
- `vite.svg` (und andere Bilder)
