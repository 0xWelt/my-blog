---
title: Das nächste Kapitel des Ökosystems - Wenn Context zum Evolutionären Code der AGI wird
date: 2026-01-15 00:00:00
cover: https://pic1.zhimg.com/v2-f71be8249d714baa2ee5ccaab20ae8ba_r.jpg
categories:
  - tech
tags:
  - AI
  - Context Engineering
  - AGI
---

> Autor: 0xWelt, kimi-k2-thinking-turbo

AGI war nie die hinter verschlossenen Türen entstandene Schöpfung eines einzelnen Unternehmens, sondern eine Zwei-Wege-Reise zwischen Ökosystem und Intelligenz. Auf dieser Reise entwickelt sich „Context" (Kontext) von einem technischen Konzept zu einer Evolutionstheorie, die von der gesamten Community gemeinsam geschrieben wird. Er ist nicht nur das Fenster, durch das Modelle die Welt verstehen, sondern auch die Leinwand, auf der das Ökosystem die Grenzen der Intelligenz erweitert.

Heute stehen wir an einem weiteren Wendepunkt. Wenn die Community beginnt, strukturierte, szenarienbasierte Context für KI bereitzustellen, anstelle einfacher Prompts oder Tools, wird die Evolutionstrajektorie der AGI stillschweigend neu geschrieben. Werfen wir zunächst einen Blick zurück auf den bisherigen Weg und sehen, wie die Context-Management-Strategie Schritt für Schritt zu dem geworden ist, was sie heute ist.

## Kapitel 1: Das Zeitalter der Zaubersprüche - Die naive Erkundung von System Prompt und User Input

Alles begann im Winter Ende 2022, der die Welt in Brand setzte. Das erste ChatGPT-System wurde auf einer einfachen binären Struktur von „System Prompt + User Input" aufgebaut, die das grundlegendste Muster der Mensch-Computer-Interaktion definierte. Die Community entdeckte bald, dass durch sorgfältig entworfene „Zaubersprüche" – jene langen und präzisen User Prompts – Modelle in bestimmten Bereichen eine überraschende Leistung jenseits ihrer Grundfähigkeiten zeigen konnten.

Ein typischer Fall war das einst populäre „Academic GPT": Benutzer mussten lange Anweisungen eingeben, das Modell auffordern, die Rolle eines Experten für das Polieren akademischer Arbeiten zu spielen, und Dutzende detaillierte Regeln von Grammatik und Logik bis zu Zitierformaten festlegen. Diese Prompts waren wie die Rezepte der Alchemisten, die in der Community mündlich weitergegeben wurden.

Aber die Grenzen dieses Ansatzes wurden schnell offensichtlich:

- **Niedrige Fähigkeitsgrenze**: Zu dieser Zeit befand sich die Instruction-Following-Fähigkeit (Befolgung von Anweisungen) des Modells noch in den Kinderschuhen, komplexe Anweisungen wurden oft fehlerhaft ausgeführt
- **Schlechte Übertragbarkeit**: Für Modell A optimierte „Zaubersprüche" funktionierten auf Modell B oft nicht, jedes neue Modell bedeutete, von vorne zu beginnen
- **Fragmentierte Erfahrung**: Benutzer mussten sich eine große Anzahl von Vorlagen merken und eingeben, die Interaktion war von Natur aus umständlich

Das Erbe dieser Phase ist nahezu leer, aber es hinterlässt eine entscheidende Erkenntnis: Modelle brauchen strukturiertere Fähigkeitsanleitungen, nicht fragmentierte Textzaubersprüche.

![Kapitel 1](https://pic1.zhimg.com/v2-f71be8249d714baa2ee5ccaab20ae8ba_r.jpg)

## Kapitel 2: Der Vormarsch des Workflows - Der industrielle Versuch des Fixed Agent Workflow

2023 eroberten Plattformen wie Dify.ai, Coze und LlamaIndex die Szene und brachten das neue Paradigma des „festen Workflows". Entwickler bauten für bestimmte Szenarien Multi-Turn-Agenten über visuelle Schnittstellen, entwarfen Tool-Aufruf-Ketten und kombinierten sie mit RAG-externen Wissensdatenbanken, um LLMs wirklich in das Agenten-Zeitalter zu führen.

Dies war ein qualitativer Sprung: Modelle gingen von Einzelgesprächen zu langfristigen Aufgaben über, von reiner Textinteraktion zu Tool-Aufrufen. Die Community baute darauf eine unzählige Anzahl von Agenten-Produkten auf, von Open-Source-Automatisierungsassistenten bis hin zu Closed-Source-Branchenwissensdatenbank-Q&A-Systemen. Workflow-Technologie ermöglichte es LLMs, länger zu laufen und mehr Interaktionsfähigkeiten zu erhalten.

Allerdings waren die Mängel ebenso offensichtlich:

- **Fall-für-Fall-Anpassung**: Jede Funktion erforderte einen ganzen schweren Workflow; für eine Tasse Kaffee musste ein komplettes Bestellsystem bereitgestellt werden
- **Hohe Migrationskosten**: Für GPT-4 optimierte Workflows könnten auf Claude sehr unterschiedlich performen
- **Mangel an Flexibilität**: Einmal festgelegt, war es schwierig, auf die dynamischen Veränderungen der realen Welt zu reagieren

Nichtsdestotrotz hinterließ diese Phase wertvolle kognitive Vermögenswerte:

- Mehrfachinteraktionen können die Fähigkeitsobergrenze eines einzelnen LLM überschreiten – hier manifestiert sich das Paradoxon von „je künstlicher, desto intelligenter"
- Agent Workflow ist nicht verschwunden, sondern weiterentwickelt. Heute verwenden wir Harnesses (Rahmen) oder Scaffolds (Gerüste), um ähnliche Konzepte auszudrücken, verleihen Agenten aber mehr autonomen Entscheidungsspielraum

![Kapitel 2](https://picx.zhimg.com/v2-5680bd96bb7f5254d6f6c535f4b455d6_r.jpg)

## Kapitel 3: Die MCP-Revolution - Der Werkzeugkarneval dynamischer Agenten

Von Ende 2024 bis Anfang 2025 fegte eine stille Revolution mit dem MCP-Standard (Model Control Protocol) herein. Dies ist kein völlig neues Konzept – OpenAI hatte bereits im Juni 2023 Tool-Declaration- und Tool-Call-Spezifikationen definiert – aber MCP hat die Kosten für die Tool-Implementierung wirklich auf ein Minimum gesenkt.

Die Community reagierte explosionsartig: Eine große Anzahl von Digital-World-APIs wurde schnell an das MCP-Format angeglichen, von GitHub-Operationen bis zur Essenslieferung, von Datenbankabfragen bis zur Smart-Home-Steuerung. Ein riesiger MCP-Markt formte sich augenblicklich. In der Zwischenzeit zeigten Basismodelle, repräsentiert durch Claude, leistungsstarke Multi-Step-Toolcall-Fähigkeiten und konnten Tools autonom iterieren und aufrufen, um komplexe Aufgaben zu erledigen.

Die Fesseln des Fixed Workflow wurden gebrochen: Agenten benötigten keine voreingestellten starren Prozesse mehr, sondern konnten dynamisch Pfade entsprechend den Zielen planen. Fähigkeitsgrenzen und Generalisierbarkeit verbesserten sich gleichzeitig, AGI schien zum Greifen nah.

Aber Probleme tauchten bald auf:

- **Pseudo-Bedarf-Überflutung**: MCP ist im Wesentlichen nur ein Format-Wrapper für APIs. Für Szenarien mit bestehenden APIs sind die Entwicklungskosten extrem niedrig, was zu der absurden Situation führt, dass es „mehr Entwickler als Benutzer" gibt
- **AGI-Halluzination**: Die Community verfiel in die Wahnvorstellung, dass „das Anschließen genügend MCPs AGI erreichen kann", und ignorierte die Fähigkeitsobergrenze der Modelle selbst
- **Context-Verschmutzung**: Die flache missbräuchliche Nutzung von Tool-Deklarationen führte zu Kontextkatastrophen, bei denen Hunderte von Tool-Definitionen das Fenster belegten und die Instruction-Following-Fähigkeit des Modells ernsthaft herausforderten. Um dies zu mildern, begannen Mainstream-Agent-Frameworks, die Anzahl der Tools zu begrenzen – der Cursor-Editor setzte die Obergrenze einmal auf 80 fest

Krisen gebären Weisheit. Die Erfahrungen dieser Phase veränderten die nachfolgende Designphilosophie tiefgreifend:

- Einheitliche Standards können die gewaltige Kraft der Community entfesseln – Standardisierung ist der Grundstein für den Wohlstand des Ökosystems
- Context-Management muss verfeinert werden – das Aufkommen einfacher Strategien wie „hide tool result" kündigte systematischere Context-Exit-Mechanismen an

![Kapitel 3](https://pic1.zhimg.com/v2-1156e8714d712477c0cb269d74bbe3da_r.jpg)

## Kapitel 4: Der Aufstieg von Skills - Der Dimensionskrieg des Context-Managements

Als die flache Exposition von MCP an ihre Grenzen stieß, entstanden Skills. Dies ist keine einfache Neuanordnung von Tools, sondern eine Dimensionserhöhung der Context-Management-Strategie.

Warum sind Skills besser? Sie erreichen einen dreifachen Durchbruch:

- **Hierarchische Exposition**: Die Organisation flacher Tool-Listen in Baumstrukturen, bei Bedarf erweiterbar, vermeidet Context-Verschmutzung und spart wertvollen Kontextfensterplatz
- **Proaktiver Context**: Das Modell entscheidet autonom, wann und welche Ebene des Contexts abgerufen werden soll, anstatt alle Informationen passiv zu empfangen
- **SOP-Level-Anweisungen**: Nicht nur „was kann getan werden" (MCPs „ich habe ein XX-Tool"), sondern „wie es getan wird" – eingebaute detaillierte Standardbetriebsverfahren, was gleichbedeutend ist mit dem Anbringen intelligenter Patches auf Tools

Noch disruptiver ist, dass viele Skills vollständig in natürlicher Sprache definiert sind, ohne Programmierung. Dies senkt die Eintrittsbarriere für die Community drastisch und ermöglicht es Geschäftsexperten statt Programmierern, Context-Vermögenswerte zum Ökosystem beizutragen. In gewisser Weise ist dies eine Wiedergeburt und Übertreffung der zweiten Phase des Agent Workflow – unter Verwendung der Flexibilität natürlicher Sprache, um die strukturellen Vorteile von Workflows wiederzubeleben.

Aber dies stellt gleichzeitig neue Herausforderungen an das Modell:

- **Proaktive Kontextsteuerungsfähigkeit**: Kann sich das Modell nach Dutzenden von Tool-Aufrufen noch an die Existenz eines bestimmten Skills erinnern, der ursprünglich angewiesen wurde?
- **Langzeitgedächtnisfähigkeit**: Wie bleibt das Bewusstsein für High-Level-Context in tiefen Aufrufketten erhalten?

Die Lehren sind bereits klar:

- Context muss hierarchisch + proaktiv exponiert werden
- Was die Community gemeinsam aufbaut, sind nicht nur Tools, sondern Prozesswissen – SOPs, Best Practices, Domänenmethodik

![Kapitel 4](https://picx.zhimg.com/v2-3616c627dc540fb165ba03ee22003595_r.jpg)

## Laufende Trends: Die verfeinerte Evolution des Context-Managements

Aus der obigen Evolutionsgeschichte können wir drei kontinuierliche Hauptlinien klar erkennen:

### 1. Von flach zu hierarchisch: Der Sieg der Skalierbarkeit

Die Ära des passiven Erwerbs aller Contexts endet. Feinere, ökonomischere und skalierbarere hierarchische Exposition wird zum Mainstream. Dies ist nicht nur eine Ingenieursoptimierung, sondern ein Paradigmenwechsel in der Kognition – Context-Erwerb sollte eine Informationssuche sein, kein Informationsbombardement.

### 2. Kontinuierliche Verbesserung der Modellautonomie

Die Bitter Lesson (bittere Lektion) setzt hier weiterhin ihre Kraft ein: Mit der Verbesserung der Basismodell-Intelligenz und dem kontinuierlichen Durchbrechen der Instruction-Following-Fähigkeiten können Entwickler komplexere Strukturen definieren, und Modelle können sie verstehen und ausführen. Agent Workflow wird „weniger strukturiert" – es entwickelt sich von starren Prozessen, die Code-Definition erfordern, zu flexiblen Skills, die in natürlicher Sprache beschrieben werden. Je weniger Struktur, desto mehr Intelligenz.

### 3. Kontinuierliche Senkung der Community-Teilnahmebarrieren

Die Breite des Ökosystems bestimmt die Höhe der Intelligenz. Wenn das Beitragen von Context keine Programmierfähigkeiten mehr erfordert, wenn Geschäftsexperten Skills direkt in natürlicher Sprache definieren können, wird die Kreativität der Community vollständig entfesselt. Dieser Demokratisierungsprozess erweitert schnell die Fähigkeitsgrenzen der Basismodelle.

## Nächstes Kapitel: Von vordefiniert zu szenario-nativ

Aber die Geschichte ist noch nicht vorbei. Neue Trends keimen, und sie werden die Art und Weise, wie Context bereitgestellt wird, umgestalten.

### Trend 1: Von „vordefiniert" zu „szenariobereitgestellt"

Bisheriger Context war alles vordefiniert: Entwickler schrieben MCP-Server, verpackten Skills, und Benutzer wählten und luden sie manuell. Zukünftiger Context wird proaktiv von Szenarien bereitgestellt.

Stellen Sie sich eine Welt vor: Coffee-Shop-Betreiber müssen keine Apps oder Mini-Programme mehr entwickeln, sondern implementieren lediglich eine „Context-Schnittstelle" – wenn der Agent eines Benutzers einen Geofence betritt oder einen QR-Code im Geschäft scannt, empfängt er automatisch das Context-Paket für dieses Szenario. Dieser Context enthält:

- Menü und Empfehlungen (nicht mehr GUIs für Menschen, sondern strukturierte Daten für Agenten)
- Bestellprotokolle (natürliche Sprache SOPs ähnlich wie Skills)
- Zahlungsprozesse
- Wartezeitmodelle

Von GUIs für Menschen zu Context-Protokollen für Agenten – dies ist ein fundamentaler Wandel im Interaktionsparadigma der digitalen Welt.

### Trend 2: Von „nur rein, nicht raus" zu „flexibler Ausstieg"

Das aktuelle Context-Management ist im Grunde einseitig: laden, laden und wieder laden, bis das Fenster explodiert. Was in Zukunft benötigt wird, ist etwas wie ein Context-Manager ähnlich der Python-`with`-Anweisung: sowohl Eintritt als auch Austritt definieren.

Wenn ein Benutzer ein Coffee-Shop-Szenario verlässt, sollte der Agent automatisch:

- Detaillierte Interaktionsprotokolle archivieren („bestellte einen Latte, Karamell gegen Vanille gewechselt, wenig Eis")
- Die MCPs/Skills dieses Szenarios aus dem aktiven Context entfernen
- Nur eine kondensierte Zusammenfassung beibehalten („35 Yuan bei Blue Bottle Coffee ausgegeben")

Dieser Context-Exit-Mechanismus kann sowohl langfristige Verschmutzung vermeiden als auch präzises Gedächtnis erreichen und ist daher eine unverzichtbare Fähigkeit für langlaufende Agent-Systeme.

## Eine Tasse Kaffee, um die Zukunft zu sehen

Verbinden wir die alte und neue Welt mit einem einfachen Beispiel:

**Altes Paradigma**:

Coffee-Shop betreten → QR-Code scannen → Mini-Programm/H5-Seite springt auf → Benutzer bestellt und bezahlt manuell

**Neues Paradigma**:

Coffee-Shop betreten → Agent entdeckt automatisch Szenario-Context → Informiert Benutzer proaktiv: „Ich habe das Menü von Blue Bottle Coffee erkannt. Soll ich es Ihnen vorstellen?" → Benutzer in natürlicher Sprache: „Ein wenig Eis Americano, äthiopische Bohnen" → Agent schließt Auswahl, Anpassung, Bestellung, Zahlung autonom ab → Prognostiziert Wartezeit und setzt Erinnerung → Bereinigt Context automatisch nach dem Verlassen, behält nur Konsumaufzeichnungen bei

Benutzer kehren zur reinen Intentionsausdruck zurück, alle Zwischenprozesse werden autonom vom Agent unter der Anleitung von szenariobasiertem Context abgeschlossen.

## Schlussfolgerung: Auf dem Weg zu einem Context-nativen intelligenten Ökosystem

Von Zaubersprüchen zu Workflow, von MCP zu Skills und dann zu szenario-nativen Context – wir sehen einen klaren roten Faden: Context entwickelt sich von einem Anhang menschlicher Eingabe zu einer symbiotischen Infrastruktur für das Ökosystem.

Das Passwort zu AGI liegt nicht in der Parameteranzahl eines Closed-Source-Modells, sondern darin, ob die Community eine kontextreiche, dynamische, szenarienbasierte digitale Welt aufbauen kann. Wenn jeder Coffee-Shop, jede Bibliothek, jedes Labor native Context für KI bereitstellt, wird Intelligenz wirklich „emergieren".

Dies ist nicht nur die Evolution der Technologie, sondern auch eine Revolution der Kollaborationsparadigmen. Von Entwicklern, die mehr sind als Benutzer, zu Szenarioteilnehmern, die mehr sind als Entwickler – das nächste Kapitel des Ökosystems wird von allen Wahrern digitaler Räume gemeinsam geschrieben.

**Context ist kein Problem mehr, das Modelle bewältigen müssen, sondern eine Antwort, die die Welt der Intelligenz bietet.**
