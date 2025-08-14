import { PageSchema } from "@/constructor/page-render/types";

const userAgreementSchema: PageSchema = {
    meta: {
        title: "Nutzungsvereinbarung (AGB) – ShipsterAI Schweiz",
        description:
            "Rechte und Pflichten von Nutzern der ShipsterAI Plattform. Vertragsabschluss, Konto, Preise, Datenschutz, Haftung, Kündigung, Gerichtsstand Schweiz.",
        keywords: [
            "nutzungsvereinbarung","agb","bedingungen","vertrag","shipsterai",
            "schweiz","datenschutz","sicherheit","haftung","kündigung","preise"
        ],
        canonical: "/user-agreement",
        ogImage: {
            title: "ShipsterAI – Nutzungsvereinbarung",
            description: "Transparente Bedingungen. Schweizer Präzision.",
            bg: "#ffffff",
            color: "#000000"
        }
    },
    blocks: [
        {
            type: "text",
            title: "Nutzungsvereinbarung (AGB) – Überblick",
            description:
                "Diese Nutzungsvereinbarung (nachfolgend «Vereinbarung», «AGB») regelt die Nutzung der ShipsterAI Plattform durch Verlader (Kunden) und Carrier (Transportdienstleister) in der Schweiz sowie im EWR. Mit der Registrierung oder Nutzung der Plattform akzeptierst du diese Bedingungen. Die Vereinbarung richtet sich an Unternehmen (B2B). Für einzelne Verbraucherfunktionen können ergänzende Bestimmungen gelten."
        },
        {
            type: "text",
            title: "1. Begriffe",
            bullets: [
                "«Plattform» – die von ShipsterAI betriebene Web- und/oder Mobile-Anwendung.",
                "«Verlader» – Unternehmenskunde, der Fracht beauftragt.",
                "«Carrier» – Transportdienstleister, der Frachtleistungen anbietet.",
                "«Nutzer» – jede natürliche Person, die ein Unternehmenskonto bedient.",
                "«Auftrag» – ein konkreter Transport-Job mit definierten Parametern.",
                "«SLA» – zugesicherte Service-Level (z. B. Reaktionszeit, ETA-Qualität)."
            ]
        },
        {
            type: "text",
            title: "2. Geltungsbereich und Vertragsabschluss",
            description:
                "Diese AGB gelten für sämtliche Funktionen der Plattform, einschliesslich Disposition, Matchmaking, Tracking, Dokumenten- und Abrechnungsfunktionen. Der Vertrag kommt durch Registrierung, Akzeptanz der AGB im Onboarding oder durch Nutzung der Plattform zustande. Individuelle Rahmenverträge gehen im Widerspruch diesen AGB vor; im Übrigen ergänzen sich die Regelwerke."
        },
        {
            type: "text",
            title: "3. Konto, Berechtigungen und Sorgfalt",
            description:
                "Nutzer verwalten ihre Unternehmenskonten eigenverantwortlich. Rollen und Rechte (least-privilege) werden vom Kunde/Carrier vergeben. Zugangsdaten sind vertraulich zu behandeln. Der Kontoinhaber haftet für sämtliche über sein Konto ausgelösten Handlungen, sofern keine missbräuchliche Nutzung durch Dritte trotz angemessener Schutzmassnahmen nachweisbar ist.",
            bullets: [
                "Multi-Faktor-Authentisierung wird empfohlen.",
                "Zugänge von ausscheidenden Mitarbeitenden sind umgehend zu sperren.",
                "Missbrauch oder Verdachtsfälle sind unverzüglich an support@shipster.ai zu melden."
            ]
        },
        {
            type: "text",
            title: "4. Leistungsbeschreibung",
            description:
                "ShipsterAI stellt eine KI-gestützte Logistikplattform bereit, die u. a. Ladungs-/Carrier-Matching, ETA-Prognosen, Preisindikationen, Tracking, Kommunikations- und Abrechnungsfunktionen umfasst. Es handelt sich – sofern nicht ausdrücklich anders vereinbart – um eine «Software-as-a-Service»-Leistung ohne Übertragung von Quellcode."
        },
        {
            type: "text",
            title: "5. Verfügbarkeit und Support",
            description:
                "ShipsterAI erbringt die Services mit angemessener Sorgfalt und strebt hohe Verfügbarkeit an. Wartungsfenster, Incidents und Statusmeldungen werden transparent veröffentlicht. Support wird gemäss den kommunizierten Servicezeiten erbracht. Individuelle SLA können in separaten Vereinbarungen festgelegt werden."
        },
        {
            type: "text",
            title: "6. Preise, Gebühren und Abrechnung",
            description:
                "Es gelten die jeweils aktuellen Preislisten oder vertraglich vereinbarten Tarife. Alle Preise verstehen sich exkl. MWST, sofern nicht anders angegeben. Service-Fees können pro Auftrag oder nutzungsbasiert anfallen. Skonti, Rabatte und Promotions sind nur gültig, wenn ausdrücklich ausgewiesen.",
            bullets: [
                "Rechnungsstellung elektronisch (PDF/E-Rechnung) an die hinterlegte Adresse.",
                "Zahlungsziel gemäss Vertrag/Offerte; sonst 30 Tage netto.",
                "Bei Zahlungsverzug: gesetzliche Verzugszinsen; Mahn-/Inkassokosten möglich."
            ]
        },
        {
            type: "text",
            title: "7. Aufträge zwischen Verlader und Carrier",
            description:
                "Die Plattform vermittelt und unterstützt den Vertragsabschluss zwischen Verlader und Carrier. Der Transportvertrag kommt direkt zwischen diesen Parteien zustande. Pflichten wie Ladungssicherung, Konformität (Gewicht, ADR, Kühlkette etc.), Termineinhaltung, Dokumentation und Haftung richten sich nach dem individuellen Auftrag und anwendbarem Transportrecht (z. B. OR, CMR)."
        },
        {
            type: "text",
            title: "8. Nutzerpflichten und zulässige Nutzung",
            bullets: [
                "Keine rechtswidrigen, irreführenden oder sicherheitsgefährdenden Inhalte/Handlungen.",
                "Keine Umgehung von Sicherheitsmechanismen, kein Scraping, kein Reverse Engineering.",
                "Einhaltung aller Sanktions-, Export- und Zollvorschriften sowie Branchenregeln.",
                "Nur echte, überprüfbare Unternehmens- und Auftragsdaten verwenden."
            ]
        },
        {
            type: "text",
            title: "9. Inhalte, Lizenzen und geistiges Eigentum",
            description:
                "Alle Rechte an der Plattform, Marken, Designs und Modellen verbleiben bei ShipsterAI bzw. deren Lizenzgebern. Nutzern wird eine nicht-exklusive, nicht übertragbare, widerrufliche Nutzungsberechtigung für die Dauer des Vertrags eingeräumt. Vom Nutzer eingestellte Inhalte/Daten verbleiben in dessen Eigentum; der Nutzer erteilt ShipsterAI die notwendigen Nutzungsrechte zur Vertragserfüllung."
        },
        {
            type: "text",
            title: "10. Datenschutz",
            description:
                "ShipsterAI verarbeitet Personendaten nach geltendem Schweizer Datenschutzrecht (DSG) sowie – sofern einschlägig – der DSGVO. Es werden nur jene Daten erhoben, die für Betrieb, Sicherheit, Support oder Abrechnung erforderlich sind. Weitere Details ergeben sich aus der separaten Datenschutzerklärung.",
            bullets: [
                "Grundsätze: Zweckbindung, Datenminimierung, Transparenz.",
                "Technische und organisatorische Massnahmen (TOM), Verschlüsselung in Transit/at-rest.",
                "Auftragsverarbeitungsvertrag (AVV/DPA) bei Bedarf verfügbar."
            ]
        },
        {
            type: "text",
            title: "11. Vertraulichkeit",
            description:
                "Geschäfts- und Betriebsgeheimnisse, Vertragsinhalte, technische Informationen und nicht-öffentliche Daten sind vertraulich zu behandeln. Die Parteien schützen vertrauliche Informationen angemessen vor unbefugtem Zugriff und Offenlegung. Rechtliche Offenlegungspflichten bleiben vorbehalten."
        },
        {
            type: "text",
            title: "12. Sicherheit und Compliance",
            bullets: [
                "Rollen-/Rechtemodell (least-privilege), Protokollierung wesentlicher Vorgänge.",
                "Schwachstellen können verantwortungsvoll gemeldet werden: responsible-disclosure@shipster.ai.",
                "Verpflichtung zu Sorgfalt, Anti-Korruption, fairer Wettbewerbspraxis."
            ]
        },
        {
            type: "text",
            title: "13. Drittanbieter und Integrationen",
            description:
                "Die Plattform kann Dienste, Schnittstellen und Inhalte Dritter nutzen (z. B. Karten, Telematik, EDI, Zahlungsdienstleister). Für deren Verfügbarkeit, AGB und Datenschutz gelten die Bedingungen der Drittanbieter. ShipsterAI wählt Partner sorgfältig aus und strebt stabile Integrationen an, garantiert hierfür jedoch keine dauerhafte Fehlerfreiheit."
        },
        {
            type: "text",
            title: "14. Änderungen der Leistungen und AGB",
            description:
                "ShipsterAI kann Funktionen weiterentwickeln, anpassen oder einstellen, sofern legitime Interessen bestehen (z. B. Sicherheit, Gesetzesänderungen, Performance). Wesentliche Änderungen an AGB werden vorgängig angekündigt. Setzt der Nutzer die Nutzung nach Inkrafttreten fort, gelten die Änderungen als akzeptiert."
        },
        {
            type: "text",
            title: "15. Laufzeit und Kündigung",
            description:
                "Der Vertrag läuft auf unbestimmte Zeit, sofern nicht anders vereinbart. Beide Parteien können mit angemessener Frist ordentlich kündigen. Das Recht zur ausserordentlichen Kündigung aus wichtigem Grund bleibt vorbehalten (z. B. schwere Pflichtverletzung, Zahlungsverzug, Sicherheitsrisiko).",
            bullets: [
                "Nach Vertragsende: Deaktivierung von Zugängen; Datenexport auf Anfrage.",
                "Gesetzliche Aufbewahrungsfristen bleiben unberührt."
            ]
        },
        {
            type: "text",
            title: "16. Gewährleistung",
            description:
                "ShipsterAI erbringt die Leistungen nach dem Stand der Technik und mit angemessener Sorgfalt. Eine bestimmte Marktfähigkeit, Eignung für einen bestimmten Zweck oder unstörbare Verfügbarkeit wird – soweit rechtlich zulässig – nicht zugesichert. Beta-/Preview-Funktionen können Einschränkungen aufweisen."
        },
        {
            type: "text",
            title: "17. Haftung",
            description:
                "ShipsterAI haftet unbeschränkt für Vorsatz und grobe Fahrlässigkeit sowie für Personenschäden nach zwingendem Recht. Für leichte Fahrlässigkeit haftet ShipsterAI nur bei Verletzung wesentlicher Vertragspflichten (Kardinalpflichten), begrenzt auf den typischerweise vorhersehbaren Schaden. Eine Haftung für mittelbare Schäden, entgangenen Gewinn, Datenverlust und Folgeschäden ist – soweit rechtlich zulässig – ausgeschlossen."
        },
        {
            type: "text",
            title: "18. Freistellung",
            description:
                "Der Nutzer stellt ShipsterAI von Ansprüchen Dritter frei, die aus einer vertrags- oder rechtswidrigen Nutzung seines Kontos resultieren (z. B. unzulässige Inhalte, IP-Verletzungen), sofern der Nutzer dies zu vertreten hat."
        },
        {
            type: "text",
            title: "19. Höhere Gewalt",
            description:
                "Keine Partei haftet für die Nichterfüllung vertraglicher Pflichten, wenn diese durch Ereignisse ausserhalb ihres Einflussbereichs verursacht wird (höhere Gewalt), z. B. Naturereignisse, Krieg, Streik, staatliche Massnahmen, flächendeckende Ausfälle von Netzinfrastruktur."
        },
        {
            type: "text",
            title: "20. Export-, Sanktions- und Zollrecht",
            description:
                "Nutzer versichern, dass sie alle anwendbaren Export-, Sanktions-, Zoll- und Handelskontrollgesetze einhalten. ShipsterAI kann Leistungen verweigern oder einschränken, wenn rechtliche Vorgaben dies erfordern."
        },
        {
            type: "text",
            title: "21. Abtretung und Unterbeauftragung",
            description:
                "Rechte und Pflichten aus dieser Vereinbarung dürfen ohne Zustimmung der jeweils anderen Partei nicht abgetreten werden, ausser im Rahmen einer Gesamtrechtsnachfolge. ShipsterAI darf Unterauftragnehmer einsetzen, bleibt aber für deren Leistungserbringung verantwortlich."
        },
        {
            type: "text",
            title: "22. Salvatorische Klausel",
            description:
                "Sollten einzelne Bestimmungen dieser Vereinbarung ganz oder teilweise unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt. Anstelle der unwirksamen Regelung tritt eine wirksame, die dem wirtschaftlichen Zweck am nächsten kommt."
        },
        {
            type: "text",
            title: "23. Anwendbares Recht und Gerichtsstand",
            description:
                "Es gilt materielles Schweizer Recht unter Ausschluss kollisionsrechtlicher Normen und internationaler Übereinkommen (insbesondere CISG). Ausschließlicher Gerichtsstand ist – soweit zulässig – Zürich, Schweiz."
        },
        {
            type: "text",
            title: "24. Verbraucherhinweise (falls anwendbar)",
            description:
                "Soweit in Ausnahmefällen Verbraucherfunktionen bereitgestellt werden, gelten ergänzend die Informationen zum Widerrufsrecht, zur Online-Streitbeilegung (OS-Plattform) und zu besonderen Konsumentenschutzvorschriften gemäss den entsprechenden Hinweisen auf der Website."
        },
        {
            type: "text",
            title: "25. Kontakt",
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
                "Diese Fassung der Nutzungsvereinbarung tritt mit Veröffentlichung in Kraft und ersetzt frühere Fassungen. Massgeblich ist die auf der Website/Plattform veröffentlichte Version."
        }
    ]
};

export default userAgreementSchema;
