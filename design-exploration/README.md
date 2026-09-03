# CAREERFLYGHT VISUAL PROTOTYPES EXPLORATION

Welcome to the **CareerFlyght Visual Prototypes Exploration Suite**.

This directory contains five independently viewable, interactive HTML/CSS/JavaScript visual prototypes. Each prototype embodies a radically distinct design philosophy, visual metaphor, typography system, colour strategy, and interaction model.

---

## PROTOTYPE DIRECTORY STRUCTURE

```
/design-exploration/
├── concept-01/          # Concept 01: The Architectural Monolith
│   ├── index.html
│   ├── styles.css
│   └── script.js
├── concept-02/          # Concept 02: The Swiss Taxonomy
│   ├── index.html
│   ├── styles.css
│   └── script.js
├── concept-03/          # Concept 03: The Human Monograph
│   ├── index.html
│   ├── styles.css
│   └── script.js
├── concept-04/          # Concept 04: The Career Atlas
│   ├── index.html
│   ├── styles.css
│   └── script.js
├── concept-05/          # Concept 05: Contemporary Asymmetry
│   ├── index.html
│   ├── styles.css
│   └── script.js
└── README.md            # This instruction file
```

---

## HOW TO VIEW THE PROTOTYPES

Each prototype can be served locally using any simple HTTP server without requiring build tools or dependencies.

### Option 1: Python HTTP Server
Run the python HTTP server command from the repository root:

```bash
python3 -m http.server 8000
```

Then open your browser and navigate to:

* **Concept 01 (Architectural Monolith):** [http://localhost:8000/design-exploration/concept-01/](http://localhost:8000/design-exploration/concept-01/)
* **Concept 02 (Swiss Taxonomy):** [http://localhost:8000/design-exploration/concept-02/](http://localhost:8000/design-exploration/concept-02/)
* **Concept 03 (Human Monograph):** [http://localhost:8000/design-exploration/concept-03/](http://localhost:8000/design-exploration/concept-03/)
* **Concept 04 (Career Atlas):** [http://localhost:8000/design-exploration/concept-04/](http://localhost:8000/design-exploration/concept-04/)
* **Concept 05 (Contemporary Asymmetry):** [http://localhost:8000/design-exploration/concept-05/](http://localhost:8000/design-exploration/concept-05/)

---

## KEY FEATURES TO INSPECT IN EACH PROTOTYPE

Every prototype includes a top **Prototype Inspection Toolbar** containing:
1. **Concept Tag & Name**
2. **Interactive Viewport Switcher:** `[ Desktop View | Mobile View ]`

### Interactive Elements per Prototype:

* **Concept 01 (The Architectural Monolith):**
  * Click on any vertical monolithic row in Section 02 to expand its spatial descriptor.
  * Click `[ Perspective: NEEV ↔ VEEN ]` in Section 04 to experience 3D perspective rotation of the structural pillars.

* **Concept 02 (The Swiss Taxonomy):**
  * Hover over any Sector Cell in the 2x7 Matrix Grid to inspect real-time diagnostic metrics in the bottom panel.
  * Click `[ VECTOR_MODE: NEEV ↔ VEEN ]` in Section 04 to trigger matrix quadrant axis inversion.

* **Concept 03 (The Human Monograph):**
  * Click `▶ Listen to Oral History` in Section 03 to test the simulated biographical audio player.
  * Click `[ The Builder's Arc ↔ The Visionary's Arc ]` in Section 04 to re-order the Lifeline Currents stack.

* **Concept 04 (The Career Atlas):**
  * Click on map nodes (STEM, IT, Finance, Biomed, Gov, Business) to inspect coordinate waypoint details.
  * Click `[ Mode: Dead Reckoning ↔ True North ]` to rotate the compass needle 180°.

* **Concept 05 (Contemporary Asymmetry):**
  * Hover over the asymmetric masonry stack cards in Section 02.
  * Click `[ RE-ORDER STACK ]` in Section 04 to trigger 3D physical deck re-shuffling.
