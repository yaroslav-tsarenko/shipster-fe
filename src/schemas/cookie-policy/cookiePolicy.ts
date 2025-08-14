import { PageSchema } from "@/constructor/page-render/types";

const cookiePolicySchema: PageSchema = {
    meta: {
        title: "Cookie-Richtlinie – ShipsterAI Schweiz",
        description:
            "Erfahre, welche Cookies ShipsterAI verwendet, zu welchen Zwecken, mit welchen Laufzeiten und wie du deine Einwilligung verwaltest.",
        keywords: [
            "cookies",
            "cookie richtlinie",
            "datenschutz",
            "tracking",
            "einwilligung",
            "schweiz",
            "shipsterai"
        ],
        canonical: "/cookie-policy",
        ogImage: {
            title: "Cookie-Richtlinie",
            description: "Transparente Informationen zu Cookies & Consent.",
            bg: "#ffffff",
            color: "#000000"
        }
    },
    blocks: [
        {
            type: "text",
            title: "Cookie-Richtlinie – Überblick",
            description:
                "Diese Cookie-Richtlinie erklärt, wie ShipsterAI («wir», «uns») Cookies und ähnliche Technologien auf der Plattform einsetzt. Sie ergänzt unsere Datenschutzerklärung. Durch Klicken auf «Akzeptieren» im Banner oder die weitere Nutzung der Website willigst du – soweit erforderlich – in die Verwendung der nicht notwendigen Cookies ein."
        },
        {
            type: "text",
            title: "Was sind Cookies?",
            description:
                "Cookies sind kleine Textdateien, die auf deinem Gerät gespeichert werden, wenn du Websites besuchst. Sie helfen, Funktionen bereitzustellen (z. B. Login-Sitzungen), Nutzungsverhalten zu verstehen und Services zu verbessern. Neben Cookies verwenden wir ggf. Local Storage, Session Storage und Pixel (gemeinsam «Tracker»)."
        },
        {
            type: "text",
            title: "Cookie-Kategorien",
            bullets: [
                "Notwendig (essenziell) – erforderlich für Kernfunktionen (Login, Sicherheit, Zahlungsfluss). Ohne sie funktioniert die Plattform nicht korrekt.",
                "Funktional – merkt sich deine Einstellungen (Sprache, Layout, Präferenzen).",
                "Performance/Analytics – misst Nutzung, Fehler und Ladezeiten, um die Stabilität zu verbessern (z. B. aggregierte Statistiken).",
                "Marketing/Ads – nur falls aktiviert: Reichweitenmessung, Kampagnen-Attribution, interessenbasierte Inhalte.",
                "Sicherheit/Anti-Missbrauch – Erkennung ungewöhnlicher Muster, Schutz vor Betrug und Bot-Traffic."
            ]
        },
        {
            type: "text",
            title: "Typische Cookies & Laufzeiten (Beispiele)",
            bullets: [
                "shipster_session – Zweck: Login-Sitzung (notwendig) Laufzeit: Session",
                "csrf_token – Zweck: Schutz vor CSRF (notwendig) Laufzeit: Session",
                "consent_state – Zweck: speichert deine Consent-Wahl (notwendig) Laufzeit: 6–12 Monate",
                "ui_prefs – Zweck: Sprache/Theme (funktional) Laufzeit: 6 Monate",
                "perf_metrics – Zweck: Performance-Metriken (analytics) Laufzeit: 1–3 Monate",
                "campaign_src – Zweck: Kampagnen-Attribution (marketing) Laufzeit: 1–3 Monate"
            ]
        },
        {
            type: "text",
            title: "Drittanbieter & ähnliche Technologien",
            description:
                "Wir können Dienste von Drittanbietern einsetzen (z. B. Karten, Analytik, Zahlungen, Fehlerverfolgung). Diese Anbieter verwenden eigene Cookies/IDs. Wir wählen Partner sorgfältig und achten auf Datenschutz. Details findest du in der Datenschutzerklärung und – sofern vorhanden – im Consent-Banner (CMP) unter «Details».",
            bullets: [
                "Analytik (aggregiert, pseudonymisiert, IP-Maskierung sofern möglich)",
                "Fehler-/Crash-Reporting",
                "Bezahl-/Abrechnungsprovider",
                "Eingebettete Medien (z. B. Video-CDN)"
            ]
        },
        {
            type: "text",
            title: "Einwilligung & Widerruf",
            description:
                "Nicht notwendige Cookies setzen wir nur mit deiner Einwilligung. Du kannst deine Wahl jederzeit über den Link «Cookie-Einstellungen» im Footer anpassen oder Cookies in deinem Browser löschen/blockieren. Ein Widerruf wirkt für die Zukunft; bereits verarbeitete Daten bleiben unberührt."
        },
        {
            type: "text",
            title: "Cookies im Browser verwalten (Kurz-Anleitung)",
            bullets: [
                "Chrome: Einstellungen → Datenschutz und Sicherheit → Cookies und andere Websitedaten",
                "Safari (macOS/iOS): Einstellungen → Datenschutz → Website-Daten verwalten",
                "Firefox: Einstellungen → Datenschutz & Sicherheit → Cookies und Website-Daten",
                "Edge: Einstellungen → Cookies und Websiteberechtigungen"
            ]
        },
        {
            type: "text",
            title: "Do Not Track & Opt-Out",
            description:
                "Wenn dein Browser «Do Not Track» (DNT) sendet, versuchen wir – sofern technisch angemessen – dies zu respektieren. Bitte beachte: Nicht alle Drittanbieter erkennen DNT zuverlässig; nutze gegebenenfalls deren eigene Opt-Out-Mechanismen."
        },
        {
            type: "text",
            title: "Änderungen dieser Richtlinie",
            description:
                "Wir können diese Richtlinie anpassen (z. B. bei neuen Diensten oder rechtlichen Vorgaben). Massgeblich ist die auf dieser Seite veröffentlichte Version. Grössere Änderungen kommunizieren wir im Banner oder per Hinweis in der App."
        },
        {
            type: "text",
            title: "Kontakt",
            bullets: [
                "Allgemeine Fragen: hello@shipster.ai",
                "Datenschutz: privacy@shipster.ai",
                "Adresse: ShipsterAI AG Beispielstrasse 10 8005 Zürich Schweiz"
            ]
        },
        {
            type: "text",
            title: "Stand",
            description: "14. August 2025"
        }
    ]
};

export default cookiePolicySchema;
