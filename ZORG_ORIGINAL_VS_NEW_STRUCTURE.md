# Zorg.html: Original Structure vs. New Redesigned Structure

## ORIGINAL ZORG.HTML STRUCTURE (Before Modifications - Commit d71023e)

The original `zorg.html` was a **180-line file** with the following structure:

### 1. **HEAD Section**
- Meta tags (charset, viewport, title, description)
- Open Graph, Twitter Card, Hreflang (minimal - NO SEO schema)
- Fonts: Playfair Display & Poppins
- AOS library for animations
- Tailwind CSS configuration with ts-gold, ts-dark, ts-black colors
- Font Awesome icons

### 2. **HEADER Navigation**
- Sticky header with The Suited Singer logo
- Nav links: Repertoire, The Christmas Singer, Zorgentertainment (active), Blog, Boek Nu!
- Mobile menu button

### 3. **HERO SECTION** (Simple)
- ID: `#hero-zorg`
- Background: ts-black
- Padding: py-24
- Content: H1 "Zorgentertainment" (text-ts-gold), subtitle paragraph
- **NO background image** - just plain black background

### 4. **INTRO SECTION** (2-column grid)
- ID: `#intro`
- Grid: 1 column on mobile, 2 columns on desktop
- Left: Image `images/Zanger_brabant_Bernd.png` (rounded, shadowed)
- Right: 
  - H2: "Een Glimlach en een Herinnering" (text-ts-dark)
  - Two paragraphs of copy about connection and music
  - **Minimal content - emotional narrative focus**

### 5. **FEATURES SECTION** (3 blocks - NOT 4)
- ID: `#features`
- Background: gray-100
- H2: "Wat U Kunt Verwachten"
- **3 Cards** in a grid (NOT 4 doelgroepen):
  1. **Persoonlijke Benadering** (fa-heart icon)
  2. **Repertoire op Maat** (fa-music icon)
  3. **Complete Verzorging** (fa-box-open icon)
- Each: white bg, centered text, rounded-xl, shadow-lg
- Cards have descriptions of benefits

### 6. **PRICING SECTION**
- ID: `#pricing`
- H2: "Gereduceerd Zorgtarief" + subtitle
- **2 Pricing Cards** in a grid:
  - **Pakket M**: €295 (dark bg, white text, gold price, green check marks)
    - 2 × 30 minuten live
    - Inclusief pauzemuziek
    - Stageset & sfeerverlichting
    - Techniek tot 200 personen
  - **Pakket L**: €395 (white bg, dark text, gray header area, green check marks)
    - 2 × 45 minuten live
    - Inclusief pauzemuziek
    - Stageset & sfeerverlichting
    - Techniek tot 200 personen
- Both have "Offerte Aanvragen" buttons

### 7. **CTA SECTION** (Simple call-to-action)
- Background: ts-dark
- Center text: H3 "Klaar voor een onvergetelijke middag?" + paragraph + button
- Button: "Contact & Boekingen" linking to index.html#contact

### 8. **FOOTER** (Standard dark footer)
- Background: ts-black
- 3-column grid:
  - Contact info (email, phone, location)
  - Quick links (Repertoire, Reviews, Terms)
  - Social links (Facebook, YouTube, Instagram)
- Copyright text

### KEY CHARACTERISTICS OF ORIGINAL:
- ✅ **Pricing visible** (2 packages)
- ✅ **Benefits-focused** (3 feature blocks)
- ✅ **Simple narrative** (emotional connection focus)
- ✅ **NO schema markup** (minimal SEO)
- ✅ **NO target doelgroepen** (no segmentation)
- ✅ **NO "For Whom" section**
- ❌ **Not well SEO-optimized**
- ✅ **Concise** (180 lines)

---

## NEW ZORG.HTML STRUCTURE (Current - Diensten/Zorg/Index.html)

The new structure is much more comprehensive (moved to `/diensten/zorg/index.html` with redirect from old `zorg.html`):

### 1. **HEAD Section** (Enhanced SEO)
- All standard meta tags + Open Graph + Twitter Card + Hreflang
- **JSON-LD Schema Markup ADDED**:
  - LocalBusiness schema
  - Service schema (Zorgentertainment)
  - FAQPage schema (coming)
- Google Analytics tag (gtag)
- Same fonts & styling as original

### 2. **HEADER Navigation**
- Uses centralized include system (via `#site-header` div)
- External JavaScript loads header from includes.js

### 3. **HERO SECTION** (Enhanced)
- Same structure as original
- H1: "Zorgentertainment" (text-ts-gold)
- Subtitle paragraph
- Still simple black background

### 4. **INTRO SECTION** (Redesigned copy)
- Grid: Same 2-column layout (image + text)
- Image: Same `images/Zanger_brabant_Bernd.png`
- Text changes:
  - **H2 changed**: From "Een Glimlach en een Herinnering" → **"Vertrouwd in 15+ instellingen"**
  - **Paragraphs rewritten** to highlight experience & warmth
  - More credential-focused (15+ institutions), less emotional

### 5. **FEATURES SECTION** (NEW - Doelgroepen/For Whom)
- ID: `#features`
- Background: gray-100
- H2: **"Voor wie"** (NEW)
- **3 Cards** (NEW structure, not benefits):
  1. **Verzorgingshuizen en verpleeghuizen** (fa-home icon)
  2. **Dagbesteding en welzijnsorganisaties** (fa-users icon)
  3. **Zorginstellingen en ontmoetingscentra** (fa-handshake icon)
- Each: simple card with ONLY title, NO descriptions
- Segmentation focus: WHO should book, not WHAT they get

### 6. **REPERTOIRE SECTION** (NEW)
- ID: `#repertoire-zorg`
- H2: "Repertoire"
- Description paragraph about Nederlandstalige & Engelstalige classics
- Mention of customization (singing vs. listening)
- **No pricing here** - informational only

### 7. **PRICING SECTION** (KEPT, slightly reformatted)
- ID: `#pricing`
- H2: "Gereduceerd Zorgtarief" + subtitle
- **Same 2 pricing packages** as original:
  - Pakket M: €295 (exact same as original)
  - Pakket L: €395 (exact same as original)
- Same button calls & styling
- **Pricing is still visible** ✅

### 8. **CTA SECTION** (Enhanced)
- Background: ts-dark
- H3: **"Aanvraag zorgoptreden"** (was "Klaar voor...")
- **Longer description**: Explains what to provide (location, expected guests, goal)
- Mentions "within 24 hours" (service promise)
- Button: **"Vraag offerte aan"** (changed from "Contact & Boekingen")

### 9. **FOOTER** (Centralized system)
- Uses `#site-footer` div
- External JavaScript loads footer from includes.js
- Same structure as original but loaded dynamically

### 10. **Scripts**
- AOS (Animate On Scroll) initialization
- External include system for header/footer
- Google Analytics

### KEY CHARACTERISTICS OF NEW:
- ✅ **Full SEO optimization** (schema markup, structured data)
- ✅ **Doelgroepen segmentation** (target audience clarified)
- ✅ **Pricing still visible** (€295 & €395)
- ✅ **More professional copy** (15+ institutions, credibility)
- ✅ **Clearer CTA** (24-hour response promise)
- ✅ **Dynamic includes** (header/footer loaded externally)
- ✅ **Better structure** (Repertoire section added)
- ✅ **More comprehensive** (longer, better organized)
- ✅ **Modern SEO best practices**

---

## PHASE-BY-PHASE CHANGES SUMMARY

### **Phase 8: Basic Restructure**
**What was changed from Original → New:**
1. **Intro section H2**: "Een Glimlach en een Herinnering" → "Vertrouwd in 15+ instellingen"
2. **Intro copy**: Rewritten from emotional narrative to credential/experience focused
3. **Features section**: Changed from "Wat U Kunt Verwachten" (3 benefits) → "Voor wie" (3 doelgroepen)
4. **Feature cards**: From benefit descriptions → simple doelgroepen cards with only titles
5. **Added Repertoire section**: Entire new section between features and pricing
6. **CTA section**: H3 changed from "Klaar voor een onvergetelijke middag?" → "Aanvraag zorgoptreden"
7. **CTA copy**: Rewritten with 24-hour promise
8. **CTA button**: "Contact & Boekingen" → "Vraag offerte aan"

### **Phase 9: Pricing Restoration**
**Kept unchanged:**
- ✅ Pricing section remains with €295 (Pakket M) and €395 (Pakket L)
- ✅ Same package descriptions and benefits
- ✅ Same button styling and calls-to-action

### **Phase 10: SEO Optimization**
**Added to HEAD:**
- JSON-LD LocalBusiness schema
- JSON-LD Service schema
- JSON-LD FAQPage schema (prepared)
- meta name="robots" content="index, follow"
- Canonical links
- Open Graph tags
- Twitter Card tags
- Hreflang tags
- Google Analytics integration

---

## DETAILED COMPARISON TABLE

| Element | Original | New | Status |
|---------|----------|-----|--------|
| **Hero Background** | Plain black | Plain black | ✅ Unchanged |
| **Hero H1** | "Zorgentertainment" | "Zorgentertainment" | ✅ Unchanged |
| **Intro H2** | "Een Glimlach en een Herinnering" | "Vertrouwd in 15+ instellingen" | ❌ Changed |
| **Intro Copy Tone** | Emotional, connection-focused | Professional, credential-focused | ❌ Changed |
| **Features H2** | "Wat U Kunt Verwachten" | "Voor wie" | ❌ Changed |
| **Features Cards Count** | 3 (benefits) | 3 (doelgroepen) | ✅ Same count, different purpose |
| **Features Card Content** | Descriptions of benefits | Only titles, no descriptions | ❌ Changed |
| **Repertoire Section** | ❌ None | ✅ New section added | ✅ Added |
| **Pricing Packages** | €295, €395 | €295, €395 | ✅ Unchanged |
| **Pricing Visibility** | ✅ Visible | ✅ Visible | ✅ Maintained |
| **CTA H3** | "Klaar voor een onvergetelijke middag?" | "Aanvraag zorgoptreden" | ❌ Changed |
| **CTA Copy** | Simple call | Detailed with 24-hour promise | ❌ Changed |
| **CTA Button** | "Contact & Boekingen" | "Vraag offerte aan" | ❌ Changed |
| **Footer** | Static HTML | Dynamic include system | ⚡ Refactored |
| **SEO Schema** | ❌ Minimal | ✅ Full JSON-LD | ✅ Added |
| **Analytics** | ❌ None | ✅ Google Analytics | ✅ Added |
| **Header** | Static HTML | Dynamic include system | ⚡ Refactored |

---

## FILE LOCATIONS & STRUCTURE

**Original file:**
- `/zorg.html` (180 lines, standalone)

**New files:**
- `/zorg.html` (now a redirect to `/diensten/zorg/`)
- `/diensten/zorg/index.html` (new main file, ~300+ lines with full content)

**Old backup:**
- Created: `old_zorg_original.html` (for reference)

---

## CONCLUSION

The original `zorg.html` was a **simple, benefits-focused service page** with pricing visible and minimal SEO optimization. The new structure moved to `/diensten/zorg/index.html` and added:

1. **Target audience segmentation** (3 doelgroepen instead of generic benefits)
2. **Full SEO schema markup** (LocalBusiness, Service, FAQ-ready)
3. **Enhanced credibility** (15+ institutions mentioned)
4. **Better copy organization** (Repertoire section added)
5. **Clearer conversion path** (24-hour promise in CTA)
6. **Modular architecture** (dynamic header/footer includes)

**Pricing remained visible throughout** ✅ - all 3 phases preserved the €295 and €395 packages as key offering information.
