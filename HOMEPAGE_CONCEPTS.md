# Herakles Defense - Homepage Layout Konzepte

**Datum:** 2026-01-28
**Status:** Design Phase
**Autor:** Claude Sonnet 4.5

---

## Analyse: Konkurrenz Design-Patterns

### Shield AI
- **Hero:** Full-width visuals mit overlay text
- **Layout:** Asymmetrische Grid-Systeme mit Card-based components
- **Farben:** Lime Green (#9DFF20) Akzent auf dunklem Hintergrund
- **Spacing:** Clamp-based responsive typography, großzügige Abstände
- **Besonderheit:** Hover micro-interactions, mobile-first thinking

### Anduril
- **Hero:** Animated typing cursor effect ("HelloWar")
- **Layout:** 2fr 1fr asymmetrische Grids, modular components
- **Interaktivität:** Draggable timelines, animated charts
- **Typography:** Helvetica Now Display, bold 5rem H1
- **Besonderheit:** Bewegungsbasiertes Storytelling statt statischer Bilder

### Skydio
- **Hero:** 16:9 video/image mit centered overlay
- **Layout:** 6-column responsive grid, stack layouts
- **Media:** Video-heavy, Swiper carousels für Produkt-Showcases
- **Spacing:** Consistent --space-3 (1.5rem) gaps
- **Besonderheit:** Fluid typography scaling (3rem to 6rem), animated stats

---

## Gemeinsame Design-Prinzipien (alle Konzepte)

### Beibehaltene Elemente:
1. **Textaufteilung bleibt gleich:**
   - Problem → Facts → Lösung → Technical Advantages
   - Textinhalt wird NICHT geändert

2. **Mission Vision Hero Background:**
   - `bg-gradient-to-br from-orange-primary/10 via-black-primary to-black-secondary`
   - Radial gradient overlay: `rgba(255,107,53,0.15)`
   - Animated Grid Pattern (50px x 50px, orange, 10% opacity)

3. **"Die Lösung" vertikal:**
   - Kann beibehalten werden
   - ABER: Linke Seite braucht Bild (interceptor-product oder interceptor-action)

---

## Konzept 1: "Asymmetric Hero Grid"
**Inspiration:** Shield AI + Anduril asymmetric layouts

### Hero Section
```
┌─────────────────────────────────────────┐
│  Vision Background (Gradient + Grid)   │
│  ┌────────────┬──────────────────────┐ │
│  │            │  HERAKLES DEFENSE    │ │
│  │  Hero      │  Das erste...        │ │
│  │  Image     │  Anti-FPV-System     │ │
│  │  (60%)     │                      │ │
│  │            │  [Button] [Button]   │ │
│  └────────────┴──────────────────────┘ │
└─────────────────────────────────────────┘
```

**Layout:**
- 2-column Grid: `60% Image | 40% Text`
- Image: `interceptor-action.webp` (dramatisch, in Aktion)
- Text: Rechts aligned, glassmorphism card
- Buttons: Horizontal layout mit icons
- Background: Vision-style gradient + grid pattern

### Problem Section (Facts)
```
┌─────────────────────────────────────────┐
│  Problem: FPV-Kamikaze-Drohnen         │
│                                         │
│  ┌──────┐  ┌──────┐  ┌──────┐         │
│  │ 42%  │  │ $500 │  │ C-UAS│         │
│  │Facts │  │Facts │  │ Limit│         │
│  └──────┘  └──────┘  └──────┘         │
└─────────────────────────────────────────┘
```

**Layout:** 3-column grid (bleibt) - Gradient Border Cards

### Die Lösung - Vertical Timeline mit Image
```
┌───────────────────────────────────────────┐
│  Die Lösung: Herakles                     │
│  ┌────────────┬───────────────────────┐   │
│  │            │  1. Früherkennung     │   │
│  │            │  KI detektiert...     │   │
│  │  Product   ├───────────────────────┤   │
│  │  Image     │  2. Autonomer Abfang  │   │
│  │  (sticky)  │  FPV-Interceptor...   │   │
│  │            ├───────────────────────┤   │
│  │            │  3. Kosteneffizienz   │   │
│  │            │  Unter $1000...       │   │
│  └────────────┴───────────────────────┘   │
└───────────────────────────────────────────┘
```

**Layout:**
- 2-column: `40% Sticky Image | 60% Vertical Timeline`
- Image: `interceptor-product.webp` mit sticky position
- Timeline: Vertikale Steps mit orange Linie verbunden
- Cards: Glassmorphism mit icons

### Technical Advantages
```
┌─────────────────────────────────────────┐
│  ┌──────┐  ┌──────┐  ┌──────┐         │
│  │ Icon │  │ Icon │  │ Icon │         │
│  │Title │  │Title │  │Title │         │
│  │Text  │  │Text  │  │Text  │         │
│  └──────┘  └──────┘  └──────┘         │
│                                         │
│  ┌──────┐  ┌──────┐  ┌──────┐         │
│  │ Icon │  │ Icon │  │ Icon │         │
│  └──────┘  └──────┘  └──────┘         │
└─────────────────────────────────────────┘
```

**Layout:** 2-row, 3-column grid (bleibt) - Gradient Border Cards

---

## Konzept 2: "Split-Screen Dynamic"
**Inspiration:** Anduril modular sections

### Hero Section
```
┌───────────────────┬───────────────────┐
│                   │                   │
│  [Large Image]    │  HERAKLES         │
│  interceptor-     │  Das erste...     │
│  action.webp      │                   │
│  (Full height)    │  Stats Grid:      │
│                   │  [120km/h] [4min] │
│                   │  [500m+]   [<50ms]│
│                   │                   │
│                   │  [CTA Buttons]    │
└───────────────────┴───────────────────┘
```

**Layout:**
- 50/50 Split-screen
- Left: Full-height image mit overlay gradient
- Right: Text + animated stats grid + CTAs
- Background: Vision gradient auf BEIDEN Seiten
- Grid pattern nur auf Text-Seite

### Problem Section
**Diagonal Card Layout:**
```
┌─────────────────────────────────────────┐
│  Problem: FPV-Kamikaze-Drohnen         │
│                                         │
│     ┌──────┐                           │
│     │ 42%  │    ┌──────┐              │
│     │Facts │    │ $500 │    ┌──────┐  │
│     └──────┘    │Facts │    │C-UAS │  │
│                 └──────┘    │Limit │  │
│                             └──────┘  │
└─────────────────────────────────────────┘
```

**Layout:** Diagonal gestaffelt, cards mit subtle rotation

### Die Lösung - Horizontal Scroll Cards
```
┌───────────────────────────────────────────┐
│  Die Lösung: Herakles                     │
│  ┌─────────────────────────────────────┐  │
│  │ [<] [Früh.] [Abfang] [Kosten] [>]  │  │
│  │      erkenn                          │  │
│  │      ung                             │  │
│  └─────────────────────────────────────┘  │
│                                           │
│  [Large Product Image Below]              │
│  interceptor-product.webp                 │
└───────────────────────────────────────────┘
```

**Layout:**
- Horizontal scrollable cards (Swiper-style)
- Large product image unten centered
- Cards: Glassmorphism mit step numbers

### Technical Advantages - Bento Grid
```
┌─────────────────────────────────────────┐
│  ┌─────────┬──────┐  ┌──────┐         │
│  │         │Icon  │  │Icon  │         │
│  │ Large   │Title │  │Title │         │
│  │ Feature │      │  │      │         │
│  │         ├──────┤  ├──────┤         │
│  │         │Icon  │  │Icon  │         │
│  │         │Title │  │Title │         │
│  └─────────┴──────┘  └──────┘         │
└─────────────────────────────────────────┘
```

**Layout:** Bento-Grid (ungleiche Größen), 1 large + 4 small

---

## Konzept 3: "Fullwidth Cinematic"
**Inspiration:** Skydio video-heavy approach

### Hero Section
```
┌─────────────────────────────────────────┐
│  [Fullwidth Background Video/Image]     │
│                                         │
│         HERAKLES DEFENSE                │
│    Das erste dezentrale Anti-FPV       │
│         System für Infanterie           │
│                                         │
│    [Primary Button] [Secondary Button]  │
│                                         │
│  ↓ Scroll Indicator (animated)          │
└─────────────────────────────────────────┘
```

**Layout:**
- Fullwidth hero (100vh)
- Centered text overlay mit glassmorphism backdrop
- Background: hero-background.webp mit parallax effect
- Vision gradient overlay + grid pattern
- Animated scroll indicator am unteren Rand

### Problem Section - Image + Text Alternating
```
┌───────────────────────────────────────────┐
│  ┌────────────────┬──────────────────┐    │
│  │  Image:        │  42% der         │    │
│  │  tactical-     │  Fahrzeugverlu   │    │
│  │  diagram.webp  │  ste...          │    │
│  └────────────────┴──────────────────┘    │
│  ┌──────────────────┬────────────────┐    │
│  │  $500 reichen    │  Image:        │    │
│  │  für FPV...      │  interceptor   │    │
│  └──────────────────┴────────────────┘    │
│  ┌────────────────┬──────────────────┐    │
│  │  Image:        │  C-UAS Systeme   │    │
│  │  technology    │  zu langsam...   │    │
│  └────────────────┴──────────────────┘    │
└───────────────────────────────────────────┘
```

**Layout:**
- Alternating image/text rows
- 50/50 split jede row
- Links/rechts alternierend
- Glassmorphism cards

### Die Lösung - Fullwidth Steps mit Background Images
```
┌───────────────────────────────────────────┐
│  [Background: interceptor-action.webp]    │
│  ┌─────────────────────────────────────┐  │
│  │  1. Früherkennung                   │  │
│  │  KI-gestützte Sensorik detektiert   │  │
│  └─────────────────────────────────────┘  │
└───────────────────────────────────────────┘
┌───────────────────────────────────────────┐
│  [Background: interceptor-product.webp]   │
│  ┌─────────────────────────────────────┐  │
│  │  2. Autonomer Abfang                │  │
│  │  FPV-Interceptor startet autonom    │  │
│  └─────────────────────────────────────┘  │
└───────────────────────────────────────────┘
```

**Layout:**
- Fullwidth sections mit background images
- Parallax scroll effect
- Centered text cards mit starkem blur backdrop

### Technical Advantages - Stats Showcase
```
┌─────────────────────────────────────────┐
│  [Centered Large Number Animation]      │
│           120-160 km/h                  │
│        Geschwindigkeit                  │
│                                         │
│  ┌──────┐  ┌──────┐  ┌──────┐         │
│  │Stats │  │Stats │  │Stats │         │
│  └──────┘  └──────┘  └──────┘         │
└─────────────────────────────────────────┘
```

**Layout:**
- Large centered animated stat
- Grid darunter mit kleineren stats
- CountUp animations on scroll

---

## Konzept 4: "Modular Blocks" (Apple-inspired)
**Inspiration:** Apple product pages

### Hero Section
```
┌─────────────────────────────────────────┐
│  Vision Gradient Background             │
│  ┌─────────────────────────────────┐    │
│  │  HERAKLES DEFENSE               │    │
│  │  Das erste dezentrale           │    │
│  │  Anti-FPV-System                │    │
│  │                                 │    │
│  │  [Large Product Image]          │    │
│  │  interceptor-product.webp       │    │
│  │                                 │    │
│  │  [Button] [Button]              │    │
│  └─────────────────────────────────┘    │
└─────────────────────────────────────────┘
```

**Layout:**
- Single column centered
- Text → Large product image → Buttons
- Maximal clean, viel whitespace
- Vision gradient background

### Problem Section - Large Text + Small Cards
```
┌───────────────────────────────────────────┐
│  ┌─────────────────────────────────────┐  │
│  │  FPV-Kamikaze-Drohnen sind die     │  │
│  │  größte Bedrohung moderner         │  │
│  │  Kriegsführung                     │  │
│  └─────────────────────────────────────┘  │
│                                           │
│  ┌──────┐  ┌──────┐  ┌──────┐           │
│  │ 42%  │  │ $500 │  │C-UAS │           │
│  └──────┘  └──────┘  └──────┘           │
└───────────────────────────────────────────┘
```

**Layout:**
- Large heading text (4xl-6xl) im card
- Small stat cards darunter als secondary info

### Die Lösung - Tabbed Interface
```
┌───────────────────────────────────────────┐
│  Die Lösung: Herakles                     │
│  ┌─────────────────────────────────────┐  │
│  │ [Früherkennung] [Abfang] [Kosten]  │  │
│  └─────────────────────────────────────┘  │
│  ┌─────────────────────────────────────┐  │
│  │  ┌──────────┬───────────────────┐   │  │
│  │  │  Image   │  KI-gestützte      │   │  │
│  │  │          │  Sensorik...       │   │  │
│  │  └──────────┴───────────────────┘   │  │
│  └─────────────────────────────────────┘  │
└───────────────────────────────────────────┘
```

**Layout:**
- Tab navigation oben
- Tab content: Image + Text split
- Smooth transitions zwischen tabs
- Clean, Apple-style tabs

### Technical Advantages - Icon Grid
```
┌─────────────────────────────────────────┐
│  ┌────┬────┬────┐                       │
│  │    │    │    │                       │
│  │Icon│Icon│Icon│                       │
│  │    │    │    │                       │
│  ├────┼────┼────┤                       │
│  │    │    │    │                       │
│  │Icon│Icon│Icon│                       │
│  │    │    │    │                       │
│  └────┴────┴────┘                       │
└─────────────────────────────────────────┘
```

**Layout:**
- Simple 3x2 grid
- Large icons (48px)
- Title + short description
- Minimal design

---

## Konzept 5: "Magazine Editorial"
**Inspiration:** High-end editorial layouts

### Hero Section
```
┌───────────────────┬───────────────────┐
│                   │                   │
│  HERAKLES         │                   │
│  DEFENSE          │                   │
│                   │  [Hero Image]     │
│  Das erste        │  interceptor      │
│  dezentrale...    │  -action.webp     │
│                   │                   │
│  [Buttons]        │                   │
│                   │                   │
└───────────────────┴───────────────────┘
```

**Layout:**
- 40/60 split (Text/Image)
- Text: Large editorial typography
- Image: Bleeding to edge
- Vision gradient nur auf Text-Seite
- Sophisticated, magazine-like

### Problem Section - Overlapping Cards
```
┌─────────────────────────────────────────┐
│  Problem Section                        │
│                                         │
│  ┌──────────┐                          │
│  │  42%     │  ┌──────────┐           │
│  │  Card    │  │  $500    │           │
│  │          │  │  Card    │           │
│  └──────────┘  │          │  ┌──────┐ │
│                └──────────┘  │C-UAS │ │
│                              │Card  │ │
│                              └──────┘ │
└─────────────────────────────────────────┘
```

**Layout:**
- Overlapping glassmorphism cards
- Z-index layering
- Subtle drop shadows
- Editorial spacing

### Die Lösung - Large Numbers + Text
```
┌───────────────────────────────────────────┐
│  ┌─────────────────────────────────────┐  │
│  │  01                                 │  │
│  │  ┌────────┬──────────────────────┐ │  │
│  │  │ Image  │  Früherkennung       │ │  │
│  │  │        │  KI detektiert...    │ │  │
│  │  └────────┴──────────────────────┘ │  │
│  └─────────────────────────────────────┘  │
│  ┌─────────────────────────────────────┐  │
│  │  02                                 │  │
│  │  ┌────────┬──────────────────────┐ │  │
│  │  │ Image  │  Autonomer Abfang    │ │  │
│  │  └────────┴──────────────────────┘ │  │
│  └─────────────────────────────────────┘  │
└───────────────────────────────────────────┘
```

**Layout:**
- Large numbers (01, 02, 03) als heading
- Image + Text split pro step
- Different images pro step
- Editorial whitespace

### Technical Advantages - Feature Showcase
```
┌─────────────────────────────────────────┐
│  ┌──────────────────┬────────────────┐  │
│  │  Large Feature   │  ┌──────────┐ │  │
│  │  Card            │  │ Feature  │ │  │
│  │  (with image)    │  │ Small    │ │  │
│  │                  │  └──────────┘ │  │
│  │                  │  ┌──────────┐ │  │
│  │                  │  │ Feature  │ │  │
│  │                  │  │ Small    │ │  │
│  └──────────────────┴──┴──────────┘  │
└─────────────────────────────────────────┘
```

**Layout:**
- Asymmetric grid
- 1 large feature + 4 small features
- Magazine-style layout

---

## Empfehlung: Konzept 1 zuerst implementieren

**Begründung:**
1. **Balance:** Gute Mischung aus modern und professional
2. **Images:** Nutzt bestehende Bilder effektiv
3. **User Experience:** Klare visuelle Hierarchie
4. **Vision Background:** Hero bekommt den gewünschten Vision-style
5. **Lösung-Section:** Sticky image löst das "zu leer" Problem
6. **Implementierbar:** Technisch straightforward mit Framer Motion

**Nächste Schritte:**
1. Konzept 1 implementieren
2. Deploy für User-Feedback
3. Basierend auf Feedback: Konzept 2-5 als Alternative bereithalten

---

## Technische Umsetzung (Konzept 1)

### Components Needed:
- ✅ Hero: 2-column grid mit Vision background
- ✅ Problem: 3-column grid (existing)
- ⚠️  Solution: NEW - 2-column mit sticky image
- ✅ Tech Advantages: 2-row 3-column grid (existing)

### New Components:
- `StickyImageSection.tsx` - For solution timeline
- Updated hero layout mit asymmetric grid

### Images to Use:
- Hero: `interceptor-action.webp`
- Solution: `interceptor-product.webp` (sticky)
- Facts: No images (cards only)
- Advantages: Icons only

---

**Status:** Ready for Implementation
**Next Action:** Implement Concept 1
