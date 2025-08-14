import { PageSchema } from "@/constructor/page-render/types";

const privacyPolicySchema: PageSchema = {
    meta: {
        title: "Datenschutzerklärung – ShipsterAI Schweiz",
        description:
            "Wie ShipsterAI Personendaten verarbeitet: Kategorien, Zwecke, Rechtsgrundlagen (DSG/DSGVO), Aufbewahrung, Empfänger, internationale Übermittlungen, Rechte.",
        keywords: [
            "datenschutz",
            "privacy",
            "dsg",
            "dsgvo",
            "personendaten",
            "schweiz",
            "shipsterai",
            "rechte",
            "auftragsverarbeitung"
        ],
        canonical: "/privacy",
        ogImage: {
            title: "Datenschutzerklärung",
            description: "Transparenz über Verarbeitung & Rechte.",
            bg: "#ffffff",
            color: "#000000"
        }
    },
    blocks: [
        {
            type: "text",
            title: "1. Verantwortlicher & Geltungsbereich",
            description:
                "Diese Datenschutzerklärung beschreibt, wie ShipsterAI («wir», «uns») Personendaten von Nutzern, Verladern (Kunden) und Carriern (Transportdienstleistern) in der Schweiz verarbeitet. Sie gilt für Website, App und verbundene Services."
        },
        {
            type: "text",
            title: "2. Kontaktdaten",
            bullets: [
                "Verantwortlicher: ShipsterAI AG, Beispielstrasse 10, 8005 Zürich, Schweiz",
                "Allgemein: hello@shipster.ai",
                "Datenschutz: privacy@shipster.ai",
                "Security/Responsible Disclosure: responsible-disclosure@shipster.ai"
            ]
        },
        {
            type: "text",
            title: "3. Kategorien von Personendaten",
            bullets: [
                "Stammdaten: Name, Rolle, Firma, Kontaktangaben.",
                "Kontodaten: Logins, Rollen/Rechte, Einwilligungen.",
                "Nutzungs-/Technikdaten: Logfiles, IP (gekürzt, wo möglich), Geräte-/Browser-Infos, Events.",
                "Auftragsdaten: Transportaufträge, Orte, Zeiten, Dokumente, Kommunikation im In-App-Chat.",
                "Zahlungs-/Abrechnungsdaten: Rechnungen, Zahlungsstatus (über Provider), MWST-Angaben.",
                "Supportdaten: Tickets, Fehlerberichte, Korrespondenz.",
                "Marketingpräferenzen: Opt-in/Opt-out, Kampagnen-Interaktionen."
            ]
        },
        {
            type: "text",
            title: "4. Zwecke & Rechtsgrundlagen (DSG/DSGVO)",
            description:
                "Wir verarbeiten Daten nur, wenn dies zulässig ist – z. B. zur Vertragserfüllung, auf Basis einer Einwilligung, aufgrund berechtigter Interessen oder gesetzlicher Pflichten.",
            bullets: [
                "Vertrag/Pre-Contract: Bereitstellung der Plattform, Disposition, Abwicklung, Support.",
                "Berechtigtes Interesse: Sicherheit, Betrugsprävention, Produktverbesserung, Reporting (pseudonymisiert/aggregiert, wo möglich).",
                "Einwilligung: Marketing-Kommunikation, optionale Cookies/Tracking.",
                "Rechtliche Pflichten: Aufbewahrung, Buchhaltung, Auskunft an Behörden."
            ]
        },
        {
            type: "text",
            title: "5. Aufbewahrung",
            description:
                "Wir speichern Personendaten nur so lange, wie es für den Zweck notwendig ist oder gesetzliche Aufbewahrungspflichten bestehen. Danach löschen oder anonymisieren wir die Daten gemäss Policy.",
            bullets: [
                "Operative Daten: während der Vertragsbeziehung und eine angemessene Nachfrist.",
                "Buchhaltungsunterlagen: gemäss schweizerischen Aufbewahrungsfristen.",
                "Logs/Analytik: möglichst kurz, aggregiert/pseudonymisiert wo möglich."
            ]
        },
        {
            type: "text",
            title: "6. Weitergabe an Empfänger",
            description:
                "Wir teilen Daten nur, soweit nötig. Kategorien: Auftragsverarbeiter (Hosting, Analytik, Monitoring), Zahlungsdienstleister, Kommunikations-/Support-Tools, Integrationspartner (z. B. Telematik, Karten).",
            bullets: [
                "Verträge mit Auftragsverarbeitern (AVV/DPA), TOMs, Vertraulichkeit.",
                "Nur minimal erforderliche Daten; Zugriff nach need-to-know."
            ]
        },
        {
            type: "text",
            title: "7. Internationale Datenübermittlungen",
            description:
                "Daten werden vorzugsweise in CH/EU gespeichert. Wenn Übermittlungen in Drittländer nötig sind, setzen wir anerkannte Garantien ein (z. B. Standardvertragsklauseln, Angemessenheitsbeschlüsse) und bewerten Risiken sorgfältig."
        },
        {
            type: "text",
            title: "8. Sicherheit",
            bullets: [
                "Verschlüsselung in Transit/Ruhe (wo sinnvoll).",
                "Rollen-/Rechtemodell (least-privilege), Zugriffskontrollen, MFA-Optionen.",
                "Protokollierung, Monitoring, regelmäßige Sicherheitsreviews.",
                "Vorfallsprozesse inkl. Benachrichtigung gemäss Gesetz."
            ]
        },
        {
            type: "text",
            title: "9. Cookies & ähnliche Technologien",
            description:
                "Details findest du in unserer Cookie-Richtlinie. Nicht notwendige Tracker setzen wir nur mit deiner Einwilligung und bieten dir Wahlmöglichkeiten (CMP)."
        },
        {
            type: "text",
            title: "10. Automatisierte Entscheidungen/Profiling",
            description:
                "Unsere KI unterstützt Matching, ETA und Preisindikationen. Entscheidungen mit rechtlicher Wirkung für dich treffen weiterhin Menschen oder es bestehen geeignete Schutzmassnahmen. Du kannst eine Erklärung anfordern und Einspruch erheben."
        },
        {
            type: "text",
            title: "11. Deine Rechte (DSG/DSGVO)",
            bullets: [
                "Auskunft über verarbeitete Daten",
                "Berichtigung unrichtiger Daten",
                "Löschung («Recht auf Vergessenwerden»), sofern keine Pflichten entgegenstehen",
                "Einschränkung der Verarbeitung",
                "Datenübertragbarkeit (sofern anwendbar)",
                "Widerspruch gegen Verarbeitung aufgrund berechtigter Interessen/Marketing",
                "Widerruf erteilter Einwilligungen mit Wirkung für die Zukunft"
            ]
        },
        {
            type: "text",
            title: "12. Zahlungen",
            description:
                "Zahlungen werden über ausgewiesene Provider abgewickelt. Dabei verarbeiten wir so wenige Personendaten wie möglich und speichern keine vollständigen Kreditkartendaten auf unseren Systemen."
        },
        {
            type: "text",
            title: "13. Minderjährige",
            description:
                "Unsere Dienste richten sich an Geschäftskunden (B2B). Wir zielen nicht auf Minderjährige ab und erheben wissentlich keine Daten von Kindern."
        },
        {
            type: "text",
            title: "14. Änderungen dieser Erklärung",
            description:
                "Wir können diese Erklärung aktualisieren, um sie an rechtliche/technische Änderungen anzupassen. Die jeweils aktuelle Version ist auf dieser Seite abrufbar. Grössere Änderungen kommunizieren wir angemessen."
        },
        {
            type: "text",
            title: "15. Aufsichtsbehörden & Beschwerden",
            description:
                "Du kannst dich bei einer zuständigen Datenschutzaufsichtsbehörde beschweren. Wir begrüssen aber zunächst eine direkte Kontaktaufnahme, um Anliegen rasch zu klären."
        },
        {
            type: "text",
            title: "Stand",
            description: "14. August 2025"
        }
    ]
};

export default privacyPolicySchema;
