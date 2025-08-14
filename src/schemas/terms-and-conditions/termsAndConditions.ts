import { PageSchema } from "@/constructor/page-render/types";

const termsSchema: PageSchema = {
    meta: {
        title: "Allgemeine Geschäftsbedingungen – ShipsterAI Schweiz",
        description:
            "AGB für die Nutzung der KI-Logistikplattform ShipsterAI in der Schweiz: Leistungen, Preise, Pflichten, Datenschutz, Haftung, Kündigung, Gerichtsstand.",
        keywords: [
            "agb",
            "terms and conditions",
            "bedingungen",
            "vertrag",
            "shipsterai",
            "schweiz",
            "logistik",
            "datenschutz",
            "haftung",
            "kündigung",
            "preise"
        ],
        canonical: "/terms",
        ogImage: {
            title: "ShipsterAI – AGB",
            description: "Transparente Bedingungen. Schweizer Präzision.",
            bg: "#ffffff",
            color: "#000000"
        }
    },
    blocks: [
        {
            type: "text",
            title: "Allgemeine Geschäftsbedingungen (AGB) – Überblick",
            description:
                "Diese AGB regeln die Nutzung der ShipsterAI Plattform durch Verlader (Kunden) und Carrier (Transportdienstleister) in der Schweiz und – soweit anwendbar – im EWR. Mit der Registrierung oder Nutzung der Plattform akzeptierst du diese Bedingungen. Die AGB richten sich primär an Unternehmen (B2B)."
        },
        {
            type: "text",
            title: "1. Begriffe",
            bullets: [
                "«Plattform» – die von ShipsterAI betriebene Web-/Mobile-Anwendung.",
                "«Verlader» – Unternehmenskunde, der Transportleistungen beauftragt.",
                "«Carrier» – Transportdienstleister, der Leistungen anbietet und ausführt.",
                "«Nutzer» – natürliche Person, die ein Unternehmenskonto bedient.",
                "«Auftrag» – konkreter Transportjob inkl. Parametern und Dokumenten.",
                "«SLA» – vereinbarte Service-Level (z. B. Reaktionszeit, ETA-Güte)."
            ]
        },
        {
            type: "text",
            title: "2. Geltungsbereich & Vertragsabschluss",
            description:
                "Diese AGB gelten für sämtliche Funktionen (Disposition, Matchmaking, Tracking, Kommunikation, Abrechnung). Der Vertrag kommt durch Registrierung, explizite AGB-Bestätigung oder Nutzung der Plattform zustande. Abweichende Individualvereinbarungen haben Vorrang; im Übrigen ergänzen sich Regelungen."
        },
        {
            type: "text",
            title: "3. Accounts, Rollen & Sorgfaltspflichten",
            description:
                "Unternehmen verwalten Zugänge, Rollen und Berechtigungen eigenständig (least-privilege). Zugangsdaten sind vertraulich zu behandeln. Der Kontoinhaber haftet für Handlungen, die über sein Konto erfolgen, sofern keine unbefugte Nutzung trotz angemessener Schutzmassnahmen nachgewiesen wird.",
            bullets: [
                "Empfohlen: MFA, starke Passwörter, regelmässige Rechteprüfungen.",
                "Zugänge ausscheidender Mitarbeitenden sofort sperren.",
                "Missbrauchsverdacht umgehend an support@shipster.ai melden."
            ]
        },
        {
            type: "text",
            title: "4. Leistungsbeschreibung",
            description:
                "ShipsterAI stellt eine KI-gestützte Logistikplattform bereit: intelligentes Ladungs-/Carrier-Matching, ETA-Prognosen, Preisindikationen, Tracking, Dokumentenfluss, In-App-Chat sowie Abrechnungsunterstützung. Sofern nicht anders vereinbart, handelt es sich um SaaS ohne Quellcodeüberlassung."
        },
        {
            type: "text",
            title: "5. Verfügbarkeit, Wartung & Support",
            description:
                "ShipsterAI erbringt Services mit angemessener Sorgfalt und strebt hohe Verfügbarkeit an. Geplante Wartungen und Incidents werden transparent kommuniziert. Support erfolgt gemäss veröffentlichten Servicezeiten; individuelle SLA können separat vereinbart werden."
        },
        {
            type: "text",
            title: "6. Preise, Gebühren & Abrechnung",
            description:
                "Es gelten aktuelle Preislisten bzw. vertraglich vereinbarte Tarife (exkl. MWST). Gebühren können je Auftrag oder nutzungsbasiert anfallen. Promotions, Skonti und Rabatte gelten nur bei ausdrücklicher Ausweisung.",
            bullets: [
                "Elektronische Rechnungsstellung (PDF/E-Rechnung) an die hinterlegte Adresse.",
                "Zahlungsziel gemäss Vertrag/Offerte; mangels Regelung 30 Tage netto.",
                "Bei Verzug: gesetzliche Verzugszinsen, Mahn-/Inkassokosten möglich."
            ]
        },
        {
            type: "text",
            title: "7. Aufträge zwischen Verlader & Carrier",
            description:
                "Die Plattform unterstützt den Abschluss von Transportverträgen zwischen Verlader und Carrier. Der Transportvertrag kommt direkt zwischen diesen Parteien zustande. Pflichten (z. B. Ladungssicherung, ADR, Kühlkette), Termine, Dokumentation und Haftung richten sich nach Auftrag und anwendbarem Recht (z. B. OR, CMR)."
        },
        {
            type: "text",
            title: "8. Zulässige Nutzung",
            bullets: [
                "Keine rechtswidrigen, irreführenden, sicherheitsgefährdenden Inhalte oder Handlungen.",
                "Keine Umgehung von Sicherheitsmechanismen; kein Scraping oder Reverse Engineering.",
                "Einhaltung von Sanktions-, Export-, Zoll- und Branchenvorschriften.",
                "Nur wahrheitsgemässe, verifizierbare Unternehmens- und Auftragsdaten."
            ]
        },
        {
            type: "text",
            title: "9. Inhalte, Rechte & geistiges Eigentum",
            description:
                "Alle Rechte an Plattform, Marken, Designs und Modellen liegen bei ShipsterAI bzw. Lizenzgebern. Nutzern wird eine nicht-exklusive, nicht übertragbare, widerrufliche Nutzungsberechtigung für die Vertragsdauer eingeräumt. Vom Nutzer bereitgestellte Daten bleiben in dessen Eigentum; ShipsterAI erhält die für Betrieb/Erfüllung nötigen Nutzungsrechte."
        },
        {
            type: "text",
            title: "10. Datenschutz (DSG/DSGVO)",
            description:
                "ShipsterAI verarbeitet Personendaten nach Schweizer DSG und – wo einschlägig – DSGVO. Es gelten die Grundsätze der Zweckbindung, Datenminimierung und Transparenz. Details enthält die separate Datenschutzerklärung.",
            bullets: [
                "Technische & organisatorische Massnahmen (Verschlüsselung, Protokollierung).",
                "Datenhosting in CH/EU; Auftragsverarbeitungsvertrag (AVV/DPA) bei Bedarf.",
                "Betroffenenrechte werden gemäss Gesetz respektiert."
            ]
        },
        {
            type: "text",
            title: "11. Sicherheit & Compliance",
            bullets: [
                "Rollen-/Rechtemodell (least-privilege), Audit-Trails, Monitoring.",
                "Responsible Disclosure an: responsible-disclosure@shipster.ai.",
                "Verpflichtung zu Sorgfalt, Anti-Korruption und fairem Wettbewerb."
            ]
        },
        {
            type: "text",
            title: "12. Drittanbieter & Integrationen",
            description:
                "Die Plattform nutzt ggf. Dienste Dritter (z. B. Karten, Telematik, EDI, Payment). Deren Verfügbarkeit, AGB und Datenschutz liegen in der Verantwortung der Drittanbieter. ShipsterAI wählt Partner sorgfältig und strebt stabile Integrationen an, garantiert jedoch keine durchgehende Fehlerfreiheit."
        },
        {
            type: "text",
            title: "13. Zahlungsabwicklung & Steuern",
            description:
                "Zahlungen erfolgen über ausgewiesene Provider. Steuern, Abgaben und Zölle sind vom jeweiligen Vertragspartner zu tragen, sofern nicht abweichend vereinbart."
        },
        {
            type: "text",
            title: "14. Änderungen der Leistungen & AGB",
            description:
                "ShipsterAI kann Funktionen weiterentwickeln, anpassen oder einstellen, sofern legitime Interessen bestehen (Sicherheit, Recht, Performance). Wesentliche AGB-Änderungen werden vorab angekündigt. Die Weiternutzung nach Inkrafttreten gilt als Zustimmung."
        },
        {
            type: "text",
            title: "15. Laufzeit & Kündigung",
            description:
                "Der Vertrag läuft auf unbestimmte Zeit, sofern nicht anders geregelt. Ordentliche Kündigung durch beide Parteien mit angemessener Frist möglich. Ausserordentliche Kündigung bei wichtigem Grund (schwere Pflichtverletzung, Verzug, Sicherheitsrisiko) vorbehalten.",
            bullets: [
                "Nach Vertragsende: Deaktivierung von Zugängen; Datenexport auf Anfrage.",
                "Gesetzliche Aufbewahrungsfristen bleiben unberührt."
            ]
        },
        {
            type: "text",
            title: "16. Gewährleistung",
            description:
                "ShipsterAI erbringt Leistungen nach dem Stand der Technik und mit angemessener Sorgfalt. Eine bestimmte Marktfähigkeit, Eignung für einen konkreten Zweck oder unterbrechungsfreie Verfügbarkeit wird – soweit rechtlich zulässig – nicht zugesichert. Beta-/Preview-Funktionen können limitiert sein."
        },
        {
            type: "text",
            title: "17. Haftung",
            description:
                "ShipsterAI haftet unbeschränkt für Vorsatz/grobe Fahrlässigkeit sowie Personenschäden nach zwingendem Recht. Bei leichter Fahrlässigkeit besteht Haftung nur bei Verletzung wesentlicher Vertragspflichten (Kardinalpflichten), begrenzt auf den typischerweise vorhersehbaren Schaden. Mittelbare Schäden, entgangener Gewinn und Datenverlust sind – soweit zulässig – ausgeschlossen."
        },
        {
            type: "text",
            title: "18. Freistellung",
            description:
                "Nutzer stellt ShipsterAI von Ansprüchen Dritter frei, die aus vertrags- oder rechtswidriger Nutzung seines Kontos resultieren (z. B. unzulässige Inhalte, IP-Verletzungen), sofern der Nutzer dies zu vertreten hat."
        },
        {
            type: "text",
            title: "19. Höhere Gewalt",
            description:
                "Keine Partei haftet für Nichterfüllung, wenn diese durch Ereignisse ausserhalb ihres Einflussbereichs verursacht wird (Naturereignisse, Krieg, Streik, staatliche Massnahmen, grossflächige Netzausfälle)."
        },
        {
            type: "text",
            title: "20. Export-, Sanktions- & Zollrecht",
            description:
                "Nutzer gewährleisten die Einhaltung aller anwendbaren Export-, Sanktions-, Zoll- und Handelskontrollgesetze. ShipsterAI kann Leistungen verweigern/einschränken, wenn rechtliche Vorgaben dies erfordern."
        },
        {
            type: "text",
            title: "21. Vertraulichkeit",
            description:
                "Nicht-öffentliche Informationen (Geschäfts-/Betriebsgeheimnisse, Verträge, technische Details) sind vertraulich zu behandeln. Gesetzliche Offenlegungspflichten bleiben vorbehalten."
        },
        {
            type: "text",
            title: "22. Abtretung, Unterbeauftragung",
            description:
                "Rechte/Pflichten dürfen ohne Zustimmung der anderen Partei nicht abgetreten werden (ausser bei Gesamtrechtsnachfolge). ShipsterAI darf Unterauftragnehmer einsetzen und bleibt für deren Leistung verantwortlich."
        },
        {
            type: "text",
            title: "23. Salvatorische Klausel",
            description:
                "Sollte eine Bestimmung ganz/teilweise unwirksam sein, bleibt die Wirksamkeit der übrigen unberührt. Anstelle der unwirksamen Regelung gilt eine wirksame, die dem wirtschaftlichen Zweck am nächsten kommt."
        },
        {
            type: "text",
            title: "24. Anwendbares Recht & Gerichtsstand",
            description:
                "Es gilt materielles Schweizer Recht unter Ausschluss kollisionsrechtlicher Normen und des CISG. Ausschliesslicher Gerichtsstand – soweit zulässig – ist Zürich, Schweiz."
        },
        {
            type: "text",
            title: "25. Streitbeilegung",
            description:
                "Die Parteien bemühen sich zunächst um eine gütliche Einigung. Falls keine Einigung erzielt wird, können die Parteien – sofern vereinbart – ein Mediations- oder Schiedsverfahren gemäss separater Klausel anstrengen."
        },
        {
            type: "text",
            title: "26. Kontakt",
            bullets: [
                "Allgemein: hello@shipster.ai",
                "Support: support@shipster.ai",
                "Vertrieb/Demos: sales@shipster.ai",
                "Sicherheit: responsible-disclosure@shipster.ai",
                "Adresse: ShipsterAI AG • Beispielstrasse 10 • 8005 Zürich • Schweiz"
            ]
        },
        {
            type: "text",
            title: "Inkrafttreten",
            description:
                "Diese Fassung der AGB tritt mit Veröffentlichung in Kraft und ersetzt frühere Fassungen. Massgeblich ist die auf der Website/Plattform veröffentlichte Version."
        }
    ]
};

export default termsSchema;
