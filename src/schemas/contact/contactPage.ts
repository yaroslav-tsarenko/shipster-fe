// src/schemas/contact-page/contactSchema.ts
import { PageSchema } from "@/constructor/page-render/types";

const contactSchema: PageSchema = {
    meta: {
        title: "Kontakt – ShipsterAI Schweizer KI-Logistik",
        description:
            "Nimm Kontakt mit ShipsterAI auf: Vertrieb & Demos, technischer Support, Partnerschaften, Presse, Karriere. Schweizer Team, schnelle Reaktionszeiten, DE/FR/IT.",
        keywords: [
            "kontakt","support","vertrieb","demo","partnerschaften","presse","karriere",
            "schweiz","logistik","ki","tracking","eta","co2","sicherheit","datenschutz"
        ],
        canonical: "/contact",
        ogImage: {
            title: "ShipsterAI – Kontakt",
            description: "Wir sind für dich da. Schnell. Verlässlich. Schweiz-orientiert.",
            bg: "#ffffff",
            color: "#000000",
        },
    },

    blocks: [
        // HERO
        {
            type: "media",
            mediaType: "image",
            src: "image11",
            width: "100%",
            height: "420px",
            alt: "ShipsterAI Kontakt – Schweizer Team",
        },

        // INTRO
        {
            type: "section",
            align: "center",
            gap: "2rem",
            left: {
                type: "text",
                title: "Wir sind für dich da – persönlich & lösungsorientiert",
                description:
                    "Ob Demo, Support-Fall oder Partnerschaft: Unser Schweizer Team antwortet schnell, präzis und verbindlich. Wir sprechen DE/FR/IT und orientieren uns an deinen SLAs.",
                bullets: [
                    "Antwort in der Regel innerhalb von 24h (werktags)",
                    "DE/FR/IT, optional EN – je nach Region/Hub",
                    "Dedizierte Ansprechpartner für Carrier & Verlader"
                ],
                centerTitle: true,
                centerDescription: true,
                centerBullets: true
            }
        },

        // SCHNELLE WEGE (Cards)
        {
            type: "grid",
            columns: 3,
            gap: "1.25rem",
            items: [
                {
                    block: {
                        type: "card",
                        image: "image1",
                        title: "Vertrieb & Demos",
                        description:
                            "Produkt-Tour, Pilot in der Schweiz, Pricing & Rollout-Plan.",
                        buttonLink: "mailto:sales@shipster.ai",
                        buttonText: "sales@shipster.ai"
                    }
                },
                {
                    block: {
                        type: "card",
                        image: "image2",
                        title: "Technischer Support",
                        description:
                            "Tickets, Störungen, Integrationen, EDI/API – wir helfen.",
                        buttonLink: "mailto:support@shipster.ai",
                        buttonText: "support@shipster.ai"
                    }
                },
                {
                    block: {
                        type: "card",
                        image: "image3",
                        title: "Partnerschaften",
                        description:
                            "TMS/ERP-Integrationen, Telematik, Reseller, Beratung.",
                        buttonLink: "mailto:partners@shipster.ai",
                        buttonText: "partners@shipster.ai"
                    }
                },
                {
                    block: {
                        type: "card",
                        image: "image4",
                        title: "Presse & Medien",
                        description:
                            "Statements, Factsheets, Bildmaterial, Interviews.",
                        buttonLink: "mailto:press@shipster.ai",
                        buttonText: "press@shipster.ai"
                    }
                },
                {
                    block: {
                        type: "card",
                        image: "image5",
                        title: "Karriere",
                        description:
                            "Wir wachsen – Engineering, Operations, Sales, Support.",
                        buttonLink: "/careers",
                        buttonText: "Offene Rollen"
                    }
                },
                {
                    block: {
                        type: "card",
                        image: "image6",
                        title: "Allgemeine Anfragen",
                        description:
                            "Nicht sicher, wo anfangen? Wir routen es intern richtig.",
                        buttonLink: "mailto:hello@shipster.ai",
                        buttonText: "hello@shipster.ai"
                    }
                }
            ]
        },

        // BÜROS & REACHABILITY
        {
            type: "section",
            left: {
                type: "text",
                title: "Büros & Erreichbarkeit",
                description:
                    "Wir arbeiten hybrid Schweiz/EU – mit Fokus auf schnelle, stabile Kommunikation. Vor Ort Termine sind nach Absprache möglich.",
                bullets: [
                    "Zürich (Hauptstandort), Basel, Genf",
                    "Öffnungszeiten: Mo–Fr 08:30–18:00 CET/CEST",
                    "Sprachen: DE/FR/IT • Reaktionszeit i. d. R. < 24h"
                ]
            },
            right: {
                type: "media",
                mediaType: "image",
                src: "image12",
                width: "100%",
                height: "360px",
                alt: "Büro Schweiz"
            }
        },

        // OFFICE CARDS
        {
            type: "grid",
            columns: 3,
            gap: "1rem",
            items: [
                {
                    block: {
                        type: "card",
                        image: "image7",
                        title: "Zürich",
                        description:
                            "ShipsterAI Zürich • Kreis 5\nBesuche nach Terminvereinbarung.",
                        buttonLink: "/locations/zurich",
                        buttonText: "Anfahrt & Termine"
                    }
                },
                {
                    block: {
                        type: "card",
                        image: "image8",
                        title: "Genf",
                        description:
                            "ShipsterAI Genf • Nähe Cornavin\nFR/DE – je nach Bedarf.",
                        buttonLink: "/locations/geneva",
                        buttonText: "Anfahrt & Termine"
                    }
                },
                {
                    block: {
                        type: "card",
                        image: "image9",
                        title: "Basel",
                        description:
                            "ShipsterAI Basel • Dreiländereck\nIndustrie & Pharma Fokus.",
                        buttonLink: "/locations/basel",
                        buttonText: "Anfahrt & Termine"
                    }
                }
            ]
        },

        // HOW TO REACH FAST
        {
            type: "section",
            right: {
                type: "media",
                mediaType: "video",
                src: "video2",
                width: "100%",
                height: "320px",
                controls: true,
                loop: true,
                autoPlay: false,
                muted: true
            },
            left: {
                type: "text",
                title: "So erreichst du uns am schnellsten",
                description:
                    "Beschreibe dein Anliegen möglichst konkret (Kunde, Region, Zeitfenster, SLA, Screenshots/IDs). Wir priorisieren nach Dringlichkeit und Impact.",
                bullets: [
                    "Ticket/Email mit klaren Stichworten",
                    "Screenshots, Job-IDs, Zeitstempel",
                    "Rückrufnummer & Erreichbarkeit angeben"
                ]
            }
        },

        // KANÄLE & REAKTIONSZEITEN
        {
            type: "grid",
            columns: 4,
            gap: "1rem",
            items: [
                { block: { type: "card", image: "image10", title: "E-Mail Support", description: "support@shipster.ai – Standardkanal für technische Themen.", buttonLink: "mailto:support@shipster.ai", buttonText: "Jetzt schreiben" } },
                { block: { type: "card", image: "image13", title: "Telefon (nach Termin)", description: "Wir rufen dich zurück – ohne Warteschleife.", buttonLink: "tel:+41440000000", buttonText: "+41 44 000 00 00" } },
                { block: { type: "card", image: "image14", title: "In-App Chat", description: "Im Produkt verfügbar – ideal bei Live-Operationen.", buttonLink: "/app", buttonText: "Zum Login" } },
                { block: { type: "card", image: "image15", title: "Statusseite", description: "Wartungen & Incidents transparent veröffentlicht.", buttonLink: "/status", buttonText: "Status prüfen" } }
            ]
        },

        // DATENSCHUTZ & SECURITY
        {
            type: "section",
            left: {
                type: "text",
                title: "Datenschutz & Sicherheit – ohne Kompromisse",
                description:
                    "Wir verarbeiten Daten nach EU/CH-Standards und dem Prinzip der Datenminimierung. Zugriffskontrollen, Audit-Trails und Verschlüsselung sind Standard.",
                bullets: [
                    "EU/CH-Hosting, Verschlüsselung at-rest & in-transit",
                    "Rollen & Rechte (least privilege), Audit-Trails",
                    "Sicherheitsvorfälle: responsible-disclosure@shipster.ai"
                ]
            },
            right: {
                type: "media",
                mediaType: "image",
                src: "image16",
                width: "100%",
                height: "340px",
                alt: "Security & Compliance"
            }
        },

        // SOCIAL / COMMUNITY
        {
            type: "text",
            title: "Folge uns & bleib auf dem Laufenden",
            description:
                "Produkt-News, Release-Notes, Praxisberichte aus der Schweizer Logistik. Wir teilen, was wirklich hilft.",
            centerTitle: true,
            centerDescription: true
        },
        {
            type: "grid",
            columns: 4,
            gap: "1rem",
            items: [
                { block: { type: "card", image: "image17", title: "LinkedIn", description: "Updates, Jobs, Kundenstories.", buttonLink: "https://linkedin.com/company/shipsterai", buttonText: "LinkedIn öffnen" } },
                { block: { type: "card", image: "image18", title: "YouTube", description: "Kurzvideos & Demos.", buttonLink: "https://youtube.com/@shipsterai", buttonText: "YouTube öffnen" } },
                { block: { type: "card", image: "image19", title: "X (Twitter)", description: "Kurz-Updates & Hinweise.", buttonLink: "https://twitter.com/shipsterai", buttonText: "X öffnen" } },
                { block: { type: "card", image: "image20", title: "Newsletter", description: "Selten, aber nützlich – wirklich.", buttonLink: "/newsletter", buttonText: "Abonnieren" } }
            ]
        },

        // GALLERY / TEAM IMPRESSIONS
        { type: "slider", images: ["image21","image22","image23","image24","image25","image26"] },

        // RECHNUNGSDATEN & FIRMENINFO
        {
            type: "section",
            align: "center",
            gap: "2rem",
            left: {
                type: "text",
                title: "Rechnungsadresse & Firmenangaben",
                description:
                    "ShipsterAI AG • Beispielstrasse 10 • 8005 Zürich • Schweiz\nUID: CHE-123.456.789 • MWST-Nr. auf Anfrage • Bankverbindung & Zahlungsbedingungen im Angebot/Vertrag.",
                bullets: [
                    "E-Rechnungen & PDF-Rechnungen möglich",
                    "Bestellnummer/PO bitte im Betreff angeben",
                    "Zahlungsziel gemäss Vertrag (Standard 30 Tage netto)"
                ],
                centerTitle: true,
                centerDescription: true,
                centerBullets: true
            }
        },

        // FAQ
        {
            type: "text",
            title: "Häufige Kontaktanliegen",
            description:
                "Einige Antworten vorweg – damit du schneller ans Ziel kommst. Für alles Weitere sind wir gerne direkt für dich da.",
            centerTitle: true,
            centerDescription: true
        },
        {
            type: "faq",
            items: [
                {
                    question: "Wie schnell antwortet ihr in der Regel?",
                    answer:
                        "Werktags antworten wir in der Regel innerhalb von 24 Stunden. Dringende Störungen priorisieren wir; nutze dafür bitte den Support-Kanal mit Kennzeichnung 'PRIO'."
                },
                {
                    question: "Gibt es eine Notfallnummer?",
                    answer:
                        "Bei produktiven Störungen mit direktem SLA-Impact rufen wir dich nach Eingang des Tickets an. Bitte Telefonnummer und Erreichbarkeit angeben."
                },
                {
                    question: "Welche Sprachen unterstützt ihr?",
                    answer:
                        "Deutsch, Französisch, Italienisch (regionabhängig). Englisch ist optional verfügbar – insbesondere bei Integrationen."
                },
                {
                    question: "Wie buche ich eine Produkt-Demo?",
                    answer:
                        "Schreibe uns an sales@shipster.ai mit ein paar Stichworten (Teamgrösse, Region, Use-Cases). Wir schlagen dir 2–3 Timeslots vor."
                },
                {
                    question: "Wie melde ich einen Sicherheitsvorfall?",
                    answer:
                        "Nutze responsible-disclosure@shipster.ai und beschreibe reproduzierbare Schritte (Proof of Concept, Scope). Wir antworten mit Priorisierung und nächstem Schritt."
                }
            ]
        },

        // FINAL CTA
        {
            type: "section",
            align: "center",
            gap: "2rem",
            left: {
                type: "text",
                title: "Lass uns sprechen",
                description:
                    "Ob Pilot, Integration oder Prozess-Tuning – wir helfen dir, schneller und stabiler zu liefern. Buche einen Termin oder schreib uns direkt.",
                bullets: [
                    "Kostenlose Erstberatung",
                    "Realistische Roadmap statt Buzzwords",
                    "Planbare KPIs & sauberes Controlling"
                ],
                centerTitle: true,
                centerDescription: true,
                centerBullets: true
            }
        }
    ]
};

export default contactSchema;
