import { PageSchema } from "@/constructor/page-render/types";

const pricingSchema: PageSchema = {
    meta: {
        title: "Preise – ShipsterAI Schweizer KI-Logistik",
        description:
            "Transparente CHF-Preise ohne versteckte Aufschläge. Pläne für KMU-Carrier und Enterprise-Shipper: Lite, Pro, Enterprise. Add-ons für Tracking, EDI, SLAs.",
        keywords: [
            "preise", "pricing", "kosten", "logistikpreise", "frachten", "schweiz", "chf",
            "ki logistik", "carrier preise", "shipper preise", "tms", "api", "webhooks",
            "edi", "sla", "track & trace", "eta", "co2", "leerfahrten", "ltl", "ftl", "paletten"
        ],
        canonical: "/pricing",
        ogImage: {
            title: "ShipsterAI – Preise",
            description: "Transparente CHF-Preise. Fair. Erklärbar. Skalierbar.",
            bg: "#ffffff",
            color: "#000000",
        },
    },

    blocks: [
        // HERO
        {
            type: "section",
            align: "center",
            gap: "2.25rem",
            left: {
                type: "text",
                title: "Transparente Preise in CHF – einfach starten, sauber skalieren",
                description:
                    "Unsere Preislogik ist erklärbar: Keine versteckten Zuschläge, klare Komponenten, monatlich kündbar (ausser Enterprise). Der Service-Anteil ist bereits eingerechnet.",
                bullets: [
                    "Start in Tagen – ohne lange Bindung (Lite/Pro)",
                    "CHF-Abrechnung, MWST separat/wo nötig",
                    "Komponenten-basiertes Pricing statt Black-Box",
                ],
                centerTitle: true,
                centerDescription: true,
                centerBullets: true,
            },
        },

        // VISUAL
        { type: "media", mediaType: "image", src: "image2", width: "100%", height: "420px", alt: "Pricing Hero" },

        // PLÄNE (Cards)
        {
            type: "grid",
            columns: 3,
            gap: "1.5rem",
            items: [
                {
                    block: {
                        type: "card",
                        image: "image1",
                        title: "Lite",
                        description:
                            "Für KMU-Carrier & erste Piloten.\n\n• 1–5 Fahrzeuge\n• Basis-Matching & Aufträge\n• Track & Trace (Standard)\n• Digitale Dokumente (POD)\n• E-Mail-Benachrichtigungen\n• Support per Ticket\n\nab CHF 149/Monat",
                        buttonLink: "/sign-up?plan=lite",
                        buttonText: "Jetzt starten",
                    },
                },
                {
                    block: {
                        type: "card",
                        image: "image3",
                        title: "Pro",
                        description:
                            "Für wachsende Flotten & Shipper-Teams.\n\n• bis 50 Fahrzeuge\n• Priorisierte Matching-Engine\n• ETA-Prognosen & Re-Forecasting\n• Webhooks & REST-API\n• Rollen & Rechte\n• Support per Chat + Onboarding\n\nab CHF 590/Monat",
                        buttonLink: "/sign-up?plan=pro",
                        buttonText: "Kostenlos testen",
                    },
                },
                {
                    block: {
                        type: "card",
                        image: "image4",
                        title: "Enterprise",
                        description:
                            "Für komplexe Operationen & Integrationen.\n\n• >50 Fahrzeuge / Multi-Standorte\n• Individuelle Regeln & KPIs\n• EDI, SFTP-Pipelines, ERP/TMS-Integrationen\n• Mandanten, Zonen, Mautlogik\n• SLA & Bereitschaft\n• Dedizierter Customer Success\n\nauf Anfrage",
                        buttonLink: "/contact?topic=enterprise",
                        buttonText: "Angebot anfragen",
                    },
                },
            ],
        },

        // WAS IST DRIN (allgemeine Inklusivleistungen)
        {
            type: "section",
            left: {
                type: "text",
                title: "Alle Pläne enthalten",
                description:
                    "Wir liefern die wichtigsten Bausteine ab Werk: Stabiler Betrieb, Datensicherheit und klare Sichtbarkeit über den gesamten Sendungsverlauf.",
                bullets: [
                    "Auftragsverwaltung & Status-Events",
                    "Digitale Dokumente (POD) & Archiv",
                    "Standard-Reports & Exporte",
                    "Datenschutz EU/CH, Verschlüsselung",
                ],
            },
            right: { type: "media", mediaType: "image", src: "image1", width: "100%", height: "340px", alt: "Inklusive Leistungen" },
        },

        // VERGLEICH (Text-Spalten)
        {
            type: "grid",
            columns: 3,
            gap: "1.25rem",
            items: [
                {
                    block: {
                        type: "text",
                        title: "Lite – für den Einstieg",
                        description:
                            "Konzentriert auf das Wesentliche: Matching, einfache Dispo und Standard-Tracking. Ideal für kleine Teams oder zum risikofreien Testen.",
                        bullets: ["Basis-Matching", "Standard-Tracking", "Ticket-Support", "POD & Exporte"],
                    },
                },
                {
                    block: {
                        type: "text",
                        title: "Pro – für Wachstum",
                        description:
                            "Mehr Automatisierung und Integrationen: bessere ETA, Webhooks, Rollen & Rechte, detailliertere KPIs.",
                        bullets: ["Priorisierte Engine", "ETA & Re-Forecasting", "API/Webhooks", "Rollen & Rechte"],
                    },
                },
                {
                    block: {
                        type: "text",
                        title: "Enterprise – für Komplexität",
                        description:
                            "Massgeschneiderte Regeln, Mandanten, EDI/SFTP, Maut & Zonen, dedizierter Support und SLA-Bereitschaft.",
                        bullets: ["EDI/SFTP", "Mandanten & Standorte", "SLA & Bereitschaft", "Individuelle KPIs/Reports"],
                    },
                },
            ],
        },

        // PREISLOGIK ERKLÄRT
        {
            type: "section",
            left: {
                type: "text",
                title: "Wie berechnen wir Preise?",
                description:
                    "Wir kombinieren monatliche Plattformgebühren (Plan) mit optionalen Nutzungsanteilen (z. B. Event-/Auftragsvolumen) in klaren Stufen. Keine willkürlichen ‚Aufschläge‘ – der Service-Anteil ist bereits enthalten.",
                bullets: [
                    "Plan (fix) + Nutzung (klar gestaffelt)",
                    "Komponenten-basiertes Pricing (Distanz, Handling, Zeitfenster)",
                    "Transparente CHF-Rechnungen, monatlich",
                ],
            },
            right: { type: "media", mediaType: "image", src: "image2", width: "100%", height: "320px", alt: "Preislogik" },
        },

        // ADD-ONS
        {
            type: "section",
            right: {
                type: "text",
                title: "Add-ons – modular erweiterbar",
                description:
                    "Baue genau die Fähigkeiten aus, die du brauchst: von CO₂-Berichten bis zu EDI-Zertifizierung und erweiterter Sicherheit.",
                bullets: [
                    "CO₂-Berichte & Nachhaltigkeits-Reports",
                    "Erweiterte ETA-Modelle / Branchen-Tuning",
                    "Zusatz-Integrationen (ERP/TMS/Telematik)",
                    "Erweiterte Security-Pakete & Audit",
                ],
            },
            left: { type: "media", mediaType: "image", src: "image3", width: "100%", height: "320px", alt: "Add-ons" },
        },

        // CASE-METRIKEN / NUTZEN
        {
            type: "grid",
            columns: 4,
            gap: "1rem",
            items: [
                { block: { type: "card", image: "image2", title: "-18–27% Leerkilometer", description: "Reduktion in Piloten dank Bündelung & Priorisierung.", buttonLink: "/cases", buttonText: "Cases" } },
                { block: { type: "card", image: "image1", title: "Planbare ETA", description: "Re-Forecasting bei Störungen, weniger Eskalationen.", buttonLink: "/sla", buttonText: "SLA" } },
                { block: { type: "card", image: "image3", title: "Weniger Rückfragen", description: "Track & Trace + saubere Dokumente senken Aufwand.", buttonLink: "/product", buttonText: "Mehr" } },
                { block: { type: "card", image: "image4", title: "CHF-Transparenz", description: "Preise nachvollziehbar – für Carrier und Kunden.", buttonLink: "/about", buttonText: "Warum wir" } },
            ],
        },

        // HÄUFIGE FRAGEN
        {
            type: "faq",
            items: [
                { question: "Gibt es Einrichtungsgebühren?", answer: "Für Lite/Pro nein. Bei Enterprise je nach Integrationsumfang." },
                { question: "Wie lange ist die Bindung?", answer: "Lite/Pro monatlich kündbar. Enterprise nach Vertrag." },
                { question: "Sind APIs & Webhooks im Pro enthalten?", answer: "Ja. API-Zugriff und Webhooks sind Teil von Pro/Enterprise." },
                { question: "Wie funktioniert der Support?", answer: "Lite via Tickets, Pro zusätzlich Chat, Enterprise mit SLA & Bereitschaft." },
                { question: "Was kostet EDI/SFTP?", answer: "Als Add-on oder im Enterprise-Paket – abhängig von Schnittstellen & Volumen." },
            ],
        },

        // CTA
        {
            type: "section",
            align: "center",
            gap: "2rem",
            left: {
                type: "text",
                title: "Bereit, mit ShipsterAI zu starten?",
                description:
                    "Wähle den Plan, der heute passt – upgrade später, wenn du mehr Automatisierung und Integrationen brauchst.",
                bullets: ["Kostenlos testen (Pro)", "Onboarding in wenigen Tagen", "Support aus der Schweiz"],
                centerTitle: true,
                centerDescription: true,
                centerBullets: true,
            },
        },
        { type: "slider", images: ["image1", "image3", "image4"] },
    ],
};

export default pricingSchema;
