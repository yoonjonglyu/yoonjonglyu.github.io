# ISA Archive

ISA Archive is a **personal archive website designed to systematically organize development work, utility packages, and project records**.  
Rather than a simple portfolio, it is built as a **continuously growing and maintainable archive of professional work history**.

🔗 https://yoonjonglyu.github.io/

---

## Purpose

- Organize **Work, Packages, and Projects** with a clear and scalable information architecture
- Document each outcome with **explainable context (problem → solution → design decisions)**
- Build a **long-term maintainable structure** with SEO, metadata, and archiving in mind

---

## Main Sections

### 1. Work
A curated space showcasing representative works.

- Project overview
- Technology stack
- Core problems and solutions
- Page-level metadata management for SEO

### 2. Archive
A structured record of development work the author has directly contributed to.

- **Package**
  - Utility libraries distributed via npm or similar platforms
  - Internal documentation–focused, no external article links
- **Project**
  - Personal or collaborative projects
  - Includes experimental and exploratory work

Each item consists of a **list page and a detailed article page**.

### 3. Resume
A summarized view of career history and work experience.

- Automatically rendered from Work data
- Minimal manual maintenance

---

## Tech Stack

- **Next.js (App Router)**
- **TypeScript**
- **Contentlayer (MDX-based content management)**
- **React**
- **CSS Modules**
- **Metadata API (SEO / Open Graph automation)**

---

## Architectural Highlights

### Content-Centered Architecture
- All works are managed as **MDX-based documents**
- UI layers focus strictly on content presentation

### Metadata Automation
- Page-level `generateMetadata`
- SEO optimization for Work and Archive detail pages
- Extensible strategy for Open Graph image generation

### Scalable Classification System
- Clear separation between Work, Archive, Package, and Project
- Designed for future expansion with categories and tags

---

## Directory Structure (Overview)

```txt
app/
 ├─ work/
 │   └─ [slug]/
 ├─ archive/
 │   ├─ package/
 │   │   └─ [slug]/
 │   └─ project/
 │       └─ [slug]/
 ├─ resume/
 └─ layout.tsx

content/
 ├─ works/
 ├─ packages/
 └─ projects/
```
---
## AUTHOR
- ISA(Yoonjong Ryu)
---
## LINK
- [website](https://yoonjonglyu.github.io/)
- [storybook: v.2.0.0](https://64ee73e8852cf4ea07ac0a39-kfakumochy.chromatic.com/)
---
## CHANGE LOG  
- [Storybook: v.1.0.0](https://64ee73e8852cf4ea07ac0a39-bibuwbzxbx.chromatic.com/)
> Basic design demonstration.