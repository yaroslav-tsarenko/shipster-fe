import { PageSchema } from "@/constructor/page-render/types";

const blogSchema: PageSchema = {
    meta: {
        title: "Blog – ShipsterAI Schweizer KI-Logistik",
        description:
            "Einblicke in KI-gestützte Logistik in der Schweiz: Routen, ETA, CO₂, TMS-Integrationen, Carrier-Best Practices und mehr.",
        keywords: [
            "blog", "logistik blog", "ki logistik", "schweiz", "eta", "co2",
            "routenoptimierung", "ltl", "ftl", "paletten", "tms", "edi", "webhooks",
            "frachten", "carrier", "shipper", "leerfahrten", "supply chain"
        ],
        canonical: "/blog",
        ogImage: {
            title: "ShipsterAI Blog",
            description: "Wissen, Cases und Praxis – aus der Schweizer Logistik.",
            bg: "#ffffff",
            color: "#000000",
        },
    },

    blocks: [
        // Hero Intro
        {
            type: "section",
            align: "center",
            gap: "2rem",
            left: {
                type: "text",
                title: "ShipsterAI Blog – Wissen aus der Schweizer KI-Logistik",
                description:
                    "Hier teilen wir, wie KI Carrier und Verlader zusammenbringt: präzisere ETA, weniger Leerfahrten, saubere Dokumente und stabile SLAs. Kurz: planbare, faire Logistik.",
                bullets: [
                    "Praxisnah: Cases, Metriken, Checklisten",
                    "Technik: ETA-Modelle, API/Webhooks, EDI",
                    "Business: Preislogik, Service-Level, Onboarding",
                ],
                centerTitle: true,
                centerDescription: true,
                centerBullets: true,
            },
        },

        // Optional hero visual
        { type: "media", mediaType: "image", src: "image1", width: "100%", height: "420px", alt: "ShipsterAI Blog Hero" },

        // Featured (3 Cards)
        {
            type: "grid",
            columns: 3,
            gap: "1.25rem",
            items: [
                {
                    block: {
                        type: "card",
                        image: "image2",
                        title: "So reduziert KI Leerfahrten (-27%)",
                        description:
                            "Bündelung, Priorisierung, dynamische Regeln: Ein Blick in unsere Engine und reale Pilot-Metriken.",
                        buttonLink: "/blog/ki-leerfahrten-reduktion",
                        buttonText: "Mehr lesen",
                    },
                },
                {
                    block: {
                        type: "card",
                        image: "image3",
                        title: "ETA-Prognosen verständlich erklärt",
                        description:
                            "Von historischen Profilen zu Re-Forecasting bei Störungen – warum ETA mehr als nur Distanz ist.",
                        buttonLink: "/blog/eta-prognosen-erklaert",
                        buttonText: "Mehr lesen",
                    },
                },
                {
                    block: {
                        type: "card",
                        image: "image4",
                        title: "CO₂-Accounting für Transporte",
                        description:
                            "Welche Daten zählen wirklich? Grundlagen, Grenzfälle und Berichte für Kund:innen.",
                        buttonLink: "/blog/co2-accounting-grundlagen",
                        buttonText: "Mehr lesen",
                    },
                },
            ],
        },

        // Latest heading
        {
            type: "text",
            title: "Neueste Artikel",
            description:
                "Aktuelle Beiträge zu Technik, Betrieb und Business – kuratiert für Carrier, Dispo-Teams und Verlader.",
            centerTitle: true,
            centerDescription: true,
        },

        // Latest (16 Cards / 4x4)
        {
            type: "grid",
            columns: 4,
            gap: "1rem",
            items: [
                { block: { type: "card", image: "image2", title: "Dispatch-Playbook für KMU-Carrier", description: "Von Auftragseingang bis POD – ein standardisiertes Tagesmuster.", buttonLink: "/blog/dispatch-playbook-kmu", buttonText: "Lesen" } },
                { block: { type: "card", image: "image1", title: "Datenqualität: 9 typische Fehler", description: "‛Garbage in, garbage out’: Wie du saubere Tracking-Daten sicherst.", buttonLink: "/blog/datenqualitaet-fehler", buttonText: "Lesen" } },
                { block: { type: "card", image: "image3", title: "Preislogik ohne Black-Box", description: "Komponenten statt Pauschalen: fair für Carrier & Kund:innen.", buttonLink: "/blog/preislogik-erklaert", buttonText: "Lesen" } },
                { block: { type: "card", image: "image4", title: "SLA stabil halten", description: "Eskalationen vermeiden mit Re-Forecasting und klaren SOPs.", buttonLink: "/blog/sla-stabil-halten", buttonText: "Lesen" } },
                { block: { type: "card", image: "image3", title: "API & Webhooks – Praxis", description: "Status-Events, POD-Uploads, Anbindung ans TMS in Tagen.", buttonLink: "/blog/api-webhooks-praxis", buttonText: "Lesen" } },
                { block: { type: "card", image: "image2", title: "Onboarding in 10 Schritten", description: "Von Vertrag bis Go-Live – realistische Timeline und Checkliste.", buttonLink: "/blog/onboarding-10-schritte", buttonText: "Lesen" } },
                { block: { type: "card", image: "image1", title: "Paletten: LTL vs. FTL", description: "Wann lohnt sich Bündelung? Metriken aus der Praxis.", buttonLink: "/blog/paletten-ltl-ftl", buttonText: "Lesen" } },
                { block: { type: "card", image: "image4", title: "Telematik integrieren", description: "Datenflüsse, Privacy, Zuverlässigkeit: so gehst du vor.", buttonLink: "/blog/telematik-integration", buttonText: "Lesen" } },
                { block: { type: "card", image: "image2", title: "Kosten vs. Service-Level", description: "Die Balance finden: klare Zielgrössen und Monitoring.", buttonLink: "/blog/kosten-vs-service", buttonText: "Lesen" } },
                { block: { type: "card", image: "image1", title: "Routenplanung im Alpenraum", description: "Besonderheiten in CH/AT/IT: Maut, Zonen, Wetter.", buttonLink: "/blog/routenplanung-alpenraum", buttonText: "Lesen" } },
                { block: { type: "card", image: "image3", title: "Dokumentenfluss & POD", description: "Weniger Rückfragen dank sauberem, digitalem Prozess.", buttonLink: "/blog/dokumentenfluss-pod", buttonText: "Lesen" } },
                { block: { type: "card", image: "image4", title: "Carrier-Profiling", description: "Welche Daten helfen beim Matching wirklich?", buttonLink: "/blog/carrier-profiling", buttonText: "Lesen" } },
                { block: { type: "card", image: "image2", title: "Stadtlogistik: Zeitfenster", description: "Fenster, Zufahrten, Ladezeiten – der Realitätscheck.", buttonLink: "/blog/stadtlogistik-zeitfenster", buttonText: "Lesen" } },
                { block: { type: "card", image: "image1", title: "TMS-Migration leicht gemacht", description: "Shadow-Betrieb, Datenmapping, Rollback-Plan.", buttonLink: "/blog/tms-migration", buttonText: "Lesen" } },
                { block: { type: "card", image: "image3", title: "KPIs, die zählen", description: "On-Time-Rate, Claim-Rate, Kommunikations-Latenz u. a.", buttonLink: "/blog/logistik-kpis", buttonText: "Lesen" } },
                { block: { type: "card", image: "image4", title: "Security & Datenschutz", description: "EU/CH-Hosting, Least-Privilege, Audit-Trails.", buttonLink: "/blog/security-privacy", buttonText: "Lesen" } },
            ],
        },

        // Guides heading
        {
            type: "text",
            title: "Guides & How-tos",
            description:
                "Schritt-für-Schritt-Anleitungen für Dispo-Teams, Fahrer:innen und Kund:innen – sofort umsetzbar.",
            centerTitle: true,
            centerDescription: true,
        },

        // Guides (8 Cards / 4x2)
        {
            type: "grid",
            columns: 4,
            gap: "1rem",
            items: [
                { block: { type: "card", image: "image3", title: "Webhook in 15 Minuten", description: "Statusänderungen live ins eigene System ziehen.", buttonLink: "/blog/webhook-15-minuten", buttonText: "Guide öffnen" } },
                { block: { type: "card", image: "image2", title: "ETA-Warnungen konfigurieren", description: "Wer wird wann wie benachrichtigt? Best-Practice.", buttonLink: "/blog/eta-warnungen-konfigurieren", buttonText: "Guide öffnen" } },
                { block: { type: "card", image: "image1", title: "Saubere Auftragsdaten", description: "Felder, Validierung, Dubletten – der Quick-Check.", buttonLink: "/blog/saubere-auftragsdaten", buttonText: "Guide öffnen" } },
                { block: { type: "card", image: "image4", title: "SLA-Dashboard lesen", description: "Was rot wird, was grün bleibt – fokussiert handeln.", buttonLink: "/blog/sla-dashboard-lesen", buttonText: "Guide öffnen" } },
                { block: { type: "card", image: "image2", title: "CO₂-Report exportieren", description: "Formate, Perioden, Empfänger – in 3 Schritten.", buttonLink: "/blog/co2-report-export", buttonText: "Guide öffnen" } },
                { block: { type: "card", image: "image3", title: "Telematik-Quelle anbinden", description: "Token, Scopes, Grenzen – so bleibt’s stabil.", buttonLink: "/blog/telematik-anbinden", buttonText: "Guide öffnen" } },
                { block: { type: "card", image: "image1", title: "Dispo-SOPs standardisieren", description: "Checklisten, Rollen, Eskalationspfade.", buttonLink: "/blog/dispo-sops", buttonText: "Guide öffnen" } },
                { block: { type: "card", image: "image4", title: "POD-Qualität erhöhen", description: "Bildprüfung, Metadaten, Archiv – weniger Rückfragen.", buttonLink: "/blog/pod-qualitaet", buttonText: "Guide öffnen" } },
            ],
        },

        // Footer CTA
        {
            type: "section",
            align: "center",
            gap: "2rem",
            left: {
                type: "text",
                title: "Noch Fragen oder Themenwunsch?",
                description:
                    "Schreib uns, wenn du einen Deep-Dive möchtest – von KPI-Definitionen bis zu TMS-Integrationen. Wir erweitern den Blog laufend.",
                bullets: ["Kontakt in 1 Minute", "Antwort meist am selben Tag", "Guides & Templates verfügbar"],
                centerTitle: true,
                centerDescription: true,
                centerBullets: true,
            },
        },
    ],
};

export default blogSchema;
