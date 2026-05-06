# Creative Coding – Weizenbaum Projekt  
Interaktive Visualisierung zum Zitat von Joseph Weizenbaum  
Autor: Clement Yipdi

## Aufgabenstellung
Im Rahmen des Creative‑Coding‑Praktikums an der TH Brandenburg bestand die Aufgabe darin, ein Zitat aus der Informatikgeschichte als interaktives p5.js‑Design umzusetzen.  
Die Anforderungen lauteten:

- Umsetzung einer Idee in p5.js
- Interaktives Verhalten einbauen

Das von mir verwendete Zitat stammt von **Joseph Weizenbaum**:
"A computer will do what you tell it to do,
but that may be much different from what you had in mind."

## Konzept
Das Projekt visualisiert den Unterschied zwischen menschlichem Denken und maschinischer Interpretation:

- **Human Thinking:**  
  Eine organische, dynamische Form symbolisiert die kreative, intuitive Natur menschlichen Denkens.

- **Starting Point:**  
  Ein statischer Textblock erklärt den Ausgangspunkt und schafft die Verbindung zwischen Mensch und Maschine.

- **Machine Interpretation:**  
  Ein glitch‑artiges Pixelraster zeigt die strukturierte, logische, aber oft unpassende Interpretation der Maschine.

Die drei Titel sind bewusst in Grün gehalten, um eine visuelle Verbindung herzustellen.

##  Interaktivität
Der zentrale Effekt entsteht durch einen **Hover‑Event** in der Mitte des Canvas:

- Die drei Bereiche lösen sich progressiv in Partikel auf  
- Ein eleganter „Blütenblatt‑Effekt“ entsteht  
- Das Zitat erscheint groß und zentriert  
- Verlässt die Maus den Bereich, kehren alle Elemente zurück

So wird die Aussage des Zitats visuell erfahrbar.

##  Technologien
- **p5.js** (JavaScript Creative Coding Framework)
- Perlin Noise für organische Formen
- Pixelgrid + Noise für Glitch‑Effekte
- Partikel‑System für die Transition
- `lerp()` für weiche Animationen
- Hover‑Erkennung über `mouseX` / `mouseY`

##  Live‑Version
Man kann das Projekt hier direkt im Browser anschauen:

 http://clement1234514.me/creative-coding-weizenbaum/

##  Projektstruktur
creative-coding-weizenbaum/
    ├── index.html 
    ├── style.css 
    ├── sketch.js 
    └── README.md

Viel Spaß beim Ausprobieren!

