import { PageSchema } from "@/constructor/page-render/types";

const aboutSchema: PageSchema = {
    meta: {
        title: "Über ShipsterAI – Schweizer KI-Logistikplattform",
        description:
            "AI-powered Logistik aus der Schweiz: Carrier finden passende Kunden, Kunden finden verifizierte Carrier. Präzise ETA, faires Pricing, Transparenz und weniger Leerkilometer.",
        keywords: [
            "logistik", "logistikplattform", "ki", "ai", "schweiz", "dach",
            "frachten", "carrier", "shipper", "verlader", "disposition",
            "routenoptimierung", "route optimization", "eta", "track & trace",
            "co2", "leerfahrten", "ftl", "ltl", "paletten", "preisprognose",
            "tms", "erp", "api", "webhooks", "edi", "pod", "digitale dokumente",
            "sla", "dispatch", "matching engine", "telematik", "integrationen",
            "kmu logistik", "supply chain visibility", "frachtbörse schweiz"
        ],
        canonical: "/about",
        ogImage: {
            title: "Über ShipsterAI",
            description: "Schweizer Präzision. KI im Kern. Sichtbare Logistik.",
            bg: "#ffffff",
            color: "#000000",
        },
    },

    blocks: [
        // HERO (zentriert)
        {
            type: "section",
            align: "center",
            gap: "2.5rem",
            left: {
                type: "text",
                title: "Wir machen Schweizer Logistik sichtbar – schnell, fair, zuverlässig",
                description:
                    "ShipsterAI ist eine KI-gestützte Logistikplattform aus der Schweiz. Carrier finden in Minuten lukrative Aufträge; Verlader buchen geprüfte Carrier mit klaren Preisen, präziser ETA und vollständigem Track & Trace. Unser Ziel: weniger Leerfahrten, weniger Koordinationsaufwand, mehr Planbarkeit.",
                bullets: [
                    "Carrier ⇄ Kunden: Matching in < 60 Sekunden",
                    "Transparente Preise in CHF, keine versteckten Aufschläge",
                    "ETA-Prognosen & Live-Tracking für jedes Handling-Schritt",
                ],
                centerTitle: true,
                centerDescription: true,
                centerBullets: true,
            },
        },

        // VISUELLES HERO-BILD
        { type: "media", mediaType: "image", src: "image1", width: "100%", height: "420px", alt: "ShipsterAI – Schweizer KI-Logistik" },

        // MISSION
        {
            type: "section",
            left: {
                type: "text",
                title: "Unsere Mission",
                description:
                    "Wir bauen die leichteste Art, Logistik zu betreiben: datengetrieben, verständlich und ohne Black-Box-Magie. Ob KMU-Carrier oder Enterprise-Shipper – ShipsterAI legt den Fokus auf Nutzbarkeit im Alltag: weniger Telefon, weniger Tabellen, mehr Ergebnis.",
                bullets: [
                    "Datenbasierte Disposition statt Bauchgefühl",
                    "Sichtbarkeit für Fahrer, Dispo, Kunde – in einem Portal",
                    "Schweizer Service, Schweizer Zuverlässigkeit",
                ],
            },
            right: { type: "media", mediaType: "image", src: "image2", width: "100%", height: "360px", alt: "Mission & Werte" },
        },

        // PAINS → WERTBEITRAG
        {
            type: "grid",
            columns: 3,
            gap: "1.25rem",
            items: [
                {
                    block: {
                        type: "text",
                        title: "Weniger Leerfahrten",
                        description:
                            "Unsere Matching-Engine bündelt Strecken und Kapazitäten. Das senkt Leerkilometer spürbar und erhöht die Marge – messbar pro Fahrzeug und Tour.",
                        bullets: ["Bündelung ähnlicher Relationen", "Kapazitätsfenster & Restriktionen", "Stop-Reihenfolge mit Heuristik"],
                    },
                },
                {
                    block: {
                        type: "text",
                        title: "Planbare Qualität",
                        description:
                            "Klare SLA, saubere ETA-Prognosen und Re-Forecasting bei Störungen. Probleme werden früher sichtbar – bevor sie zu Eskalationen werden.",
                        bullets: ["ETA-Modelle aus Live & Historie", "Events je Status (Load, POD, Delay)", "Benachrichtigungen & Webhooks"],
                    },
                },
                {
                    block: {
                        type: "text",
                        title: "Fair & transparent",
                        description:
                            "Preise folgen nachvollziehbaren Regeln. Keine willkürlichen Zuschläge: Wir zeigen, woraus sich der Vorschlag zusammensetzt.",
                        bullets: ["Komponenten-basiertes Pricing", "CHF-Abrechnung", "Klarer Audit-Trail"],
                    },
                },
            ],
        },

        // FÜR CARRIER
        {
            type: "section",
            left: {
                type: "text",
                title: "Für Carrier: Mehr Auslastung, weniger Aufwand",
                description:
                    "Hinterlege Fahrzeugtypen, Routen und Zeitfenster – ShipsterAI findet passende Frachten. Dokumente, POD und Rechnungen laufen digital; du behältst Kontrolle über Preisannahmen und SLA.",
                bullets: [
                    "Intelligente Ladungsvorschläge mit Priorisierung",
                    "Digitale Dokumente (POD), Status & Chat mit Kunden",
                    "Flotten-KPIs: Auslastung, Leerkilometer, Schnittpreise",
                ],
            },
            right: { type: "media", mediaType: "image", src: "image3", width: "100%", height: "360px", alt: "Carrier Vorteile" },
        },

        // FÜR SHIPPER
        {
            type: "section",
            right: {
                type: "text",
                title: "Für Kunden (Shipper): Buchen in Minuten, verfolgen in Echtzeit",
                description:
                    "Erfasse Fracht, erhalte Preis & ETA, buche verifizierte Carrier. Track & Trace, Dokumente und Rechnungen im Portal – ohne E-Mail-Ping-Pong.",
                bullets: ["Verifizierte Schweizer Carrier", "ETA & CO₂-Schätzung pro Sendung", "Self-Service Portal & Export"],
            },
            left: { type: "media", mediaType: "image", src: "image4", width: "100%", height: "360px", alt: "Shipper Vorteile" },
        },

        // DISPO-COCKPIT
        {
            type: "section",
            left: {
                type: "text",
                title: "Cockpit für Disponenten",
                description:
                    "Das Cockpit priorisiert Aufgaben: Konflikte, Verzögerungen, fehlende Dokumente. Statt Feuerwehreinsätze organisierst du Stabilität.",
                bullets: ["Prioritäten-Liste statt 20 Browser-Tabs", "SLA-Warnungen & Eskalationslogik", "Chat & Aufgaben mit Zeitstempeln"],
            },
            right: { type: "media", mediaType: "image", src: "image2", width: "100%", height: "340px", alt: "Dispo Cockpit" },
        },

        // TECHNIK – KI ENGINE
        {
            type: "grid",
            columns: 3,
            gap: "1.25rem",
            items: [
                {
                    block: {
                        type: "text",
                        title: "Matching-Engine",
                        description:
                            "Clustering von Routen, Kapazitäten und Zeitfenstern. Regeln + ML sorgen für robuste Vorschläge – jederzeit übersteuerbar.",
                        bullets: ["Soft/Hard-Constraints", "Regionale Präferenzen", "Manuelle Feineinstellung"],
                    },
                },
                {
                    block: {
                        type: "text",
                        title: "ETA-Prognosen",
                        description:
                            "Live-Telematik, historische Muster und Verkehrsfenster liefern realistische Eintreffzeiten mit Re-Forecasting.",
                        bullets: ["Anomalie-Erkennung", "Wetter & Peak-Saisons", "Stop-Sequencing"],
                    },
                },
                {
                    block: {
                        type: "text",
                        title: "Preismodell",
                        description:
                            "Komponenten-basiert (Distanz, Dichte, Tageszeit, Handling). Die Kalkulation bleibt transparent – für Carrier und Kunde.",
                        bullets: ["CHF-Tarifierung", "Zonen & Maut", "Rabatte via Regeln statt ‚Magie‘"],
                    },
                },
            ],
        },

        // SICHERHEIT / COMPLIANCE
        {
            type: "section",
            left: {
                type: "text",
                title: "Sicherheit, Datenschutz & Compliance",
                description:
                    "Wir handeln nach dem Prinzip ‚Privacy by Design‘. Datenhaltung in EU/CH, Least-Privilege-Zugriffe, revisionssichere Protokolle.",
                bullets: ["Rollen & Rechte", "Verschlüsselung at-rest & in-transit", "Audit-Trails, Export & Aufbewahrung"],
            },
            right: { type: "media", mediaType: "image", src: "image1", width: "100%", height: "340px", alt: "Security & Compliance" },
        },

        // INTEGRATIONEN
        {
            type: "grid",
            columns: 3,
            gap: "1.25rem",
            items: [
                {
                    block: {
                        type: "text",
                        title: "APIs",
                        description:
                            "REST-APIs mit sauberer Authentifizierung. Stammdaten, Aufträge, Events – alles les-/schreibbar über Endpunkte.",
                        bullets: ["OAuth-Flows", "Ratenlimits", "Beispiele & SDKs"],
                    },
                },
                {
                    block: {
                        type: "text",
                        title: "Webhooks",
                        description:
                            "Echtzeit-Events für Statuswechsel, ETA-Updates, Dokumente. So bleiben TMS/ERP automatisch synchron.",
                        bullets: ["Signierte Payloads", "Retry-Strategien", "Versionierte Schemata"],
                    },
                },
                {
                    block: {
                        type: "text",
                        title: "EDI & Dateien",
                        description:
                            "Unterstützung gängiger EDI-Formate und sichere Datei-Pipelines – kompatibel mit Schweizer Branchenstandards.",
                        bullets: ["EDIFACT/INVOIC", "CSV/Excel Exports", "SFTP/HTTPS Pipelines"],
                    },
                },
            ],
        },

        // NACHHALTIGKEIT
        {
            type: "section",
            left: {
                type: "text",
                title: "Nachhaltigkeit als Default",
                description:
                    "Jede vermiedene Leerfahrt senkt Kosten und CO₂. Wir zeigen Emissionen je Sendung und optimieren Bündelungen – ökonomisch und ökologisch sinnvoll.",
                bullets: ["CO₂-Schätzung pro Auftrag", "Bündelung & Umwege-Budget", "Berichte für Nachhaltigkeitsziele"],
            },
            right: { type: "media", mediaType: "image", src: "image3", width: "100%", height: "320px", alt: "Nachhaltigkeit" },
        },

        // KENNZAHLEN / IMPACT
        {
            type: "grid",
            columns: 4,
            gap: "1rem",
            items: [
                { block: { type: "card", image: "image2", title: "Matching < 60 s", description: "Von Auftrag zur Empfehlung in Sekunden.", buttonLink: "/demo", buttonText: "Demo" } },
                { block: { type: "card", image: "image3", title: "-18–27% Leerkilometer", description: "Typische Reduktion in Piloten.", buttonLink: "/impact", buttonText: "Mehr" } },
                { block: { type: "card", image: "image4", title: "Planbare ETA", description: "Re-Forecasting bei Abweichungen.", buttonLink: "/sla", buttonText: "SLA" } },
                { block: { type: "card", image: "image1", title: "CHF & Transparenz", description: "Faire, nachvollziehbare Preise.", buttonLink: "/pricing", buttonText: "Preise" } },
            ],
        },

        // STORY & TEAMWERTE
        {
            type: "grid",
            columns: 3,
            gap: "1.25rem",
            items: [
                {
                    block: {
                        type: "text",
                        title: "Entstehung",
                        description:
                            "Begonnen als Tool für die eigene Dispo, gewachsen zur Plattform. Wir bleiben pragmatisch: weniger Theorie, mehr Wirkung im Alltag.",
                    },
                },
                {
                    block: {
                        type: "text",
                        title: "Team & Kultur",
                        description:
                            "Ingenieure, Operatoren, Data-Leute. Gemeinsamer Nenner: Respekt vor der Arbeit auf der Strasse und Liebe zu klaren Systemen.",
                        bullets: ["Kurze Wege", "Messbare Ergebnisse", "Qualität vor Hype"],
                    },
                },
                {
                    block: {
                        type: "text",
                        title: "Service & Support",
                        description:
                            "Schweizer Supportzeiten, Notfall-Bereitschaft für SLA-Kunden. Dokumentation, Schulungen und Onboarding-Guides inklusive.",
                        bullets: ["CH-Zeitzone", "SLA-Optionen", "Enablement-Material"],
                    },
                },
            ],
        },

        // TESTIMONIALS
        {
            type: "grid",
            columns: 2,
            gap: "1.25rem",
            items: [
                {
                    block: {
                        type: "card",
                        image: "image1",
                        title: "„Weniger Feuerlöschen“",
                        description:
                            "„Mit ShipsterAI sieht die Dispo Engpässe früher. Wir greifen gezielt ein, statt überall ein bisschen.“ – Operations-Leiter, Spedition",
                        buttonLink: "/cases",
                        buttonText: "Case lesen",
                    },
                },
                {
                    block: {
                        type: "card",
                        image: "image4",
                        title: "„Besser für Kunden“",
                        description:
                            "„Endlich echtes Track & Trace und saubere Dokumente. Das senkt Rückfragen spürbar.“ – Logistikleiterin, Retail CH",
                        buttonLink: "/cases",
                        buttonText: "Case lesen",
                    },
                },
            ],
        },

        // ZEITLEISTE
        {
            type: "grid",
            columns: 4,
            gap: "1rem",
            items: [
                { block: { type: "text", title: "2023", description: "Prototyp, ETA-Modelle, erste Piloten." } },
                { block: { type: "text", title: "2024", description: "Portal & App ausgebaut, Integrationen & APIs." } },
                { block: { type: "text", title: "2025", description: "DACH-Rollout, mehr Optimierer & Reports." } },
                { block: { type: "text", title: "Roadmap", description: "Telematik-Partner, CO₂-Zertifikate, dynamische SLAs." } },
            ],
        },

        // CTA
        {
            type: "section",
            align: "center",
            gap: "2rem",
            left: {
                type: "text",
                title: "Bereit für einen Pilot in der Schweiz?",
                description:
                    "Starte mit echten Aufträgen innerhalb weniger Tage. Keine langen Bindungen, klare Ergebnisse. Wir begleiten dich beim Setup.",
                bullets: ["Onboarding in Tagen", "Transparente Preise", "Support aus der Schweiz"],
                centerTitle: true,
                centerDescription: true,
                centerBullets: true,
            },
        },

        // VISUELLER SLIDER
        { type: "slider", images: ["image2", "image3", "image4"] },

        // FAQ (erweitert)
        {
            type: "faq",
            items: [
                { question: "Unterstützt ihr KMU-Carrier?", answer: "Ja. Einfaches Onboarding, faire CHF-Preise, sofort nutzbar." },
                { question: "Welche Frachttypen?", answer: "LTL, FTL, Paletten – inklusive Temperaturhinweise und Zusatzservices." },
                { question: "Wie transparent ist die Preisbildung?", answer: "Komponenten-basiert und erklärbar. Keine versteckten Aufschläge." },
                { question: "Welche Integrationen?", answer: "TMS/ERP via REST-API, Webhooks und EDI. Dateien via SFTP/HTTPS." },
                { question: "Wie sieht Sicherheit aus?", answer: "EU/CH-Hosting, Verschlüsselung, Rollen & Rechte, Audit-Trails." },
                { question: "Gibt es SLAs?", answer: "Ja, für Enterprise – inkl. Bereitschaft und Reaktionszeiten." },
            ],
        },
    ],
};

export default aboutSchema;
