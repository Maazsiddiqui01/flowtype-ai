
# FlowType Landing Page

## Overview
A dark, minimal, premium landing page for FlowType — a local-first AI dictation app for Windows.

## Design System
- **Background:** #0F172A (dark navy), surfaces #111827 / #1F2937
- **Primary:** #1E1B4B (deep indigo), Accent: #6366F1
- **Text:** #E5E7EB, Muted: #9CA3AF
- **8px spacing system, 12–16px rounded corners, subtle transitions**

## Structure (single-page, 6 sections)

### 1. Navbar
- Logo ("FlowType"), GitHub link, Download CTA button
- Sticky, subtle backdrop blur on scroll

### 2. Hero
- Large bold title: "FlowType"
- Tagline: "Dictate, clean, and paste without babysitting the app"
- Subtext about local Whisper + AI cleanup
- Two CTAs: "Download for Windows" (primary indigo) + "View on GitHub" (secondary outline)
- Subtle gradient glow accent behind title

### 3. Demo
- Video placeholder with thumbnail overlay and play button
- Caption: "See FlowType in action — press a key, speak, get clean text"
- Lazy-loaded video element

### 4. Features (grid of 5 cards)
- Local Whisper Transcription
- AI Cleanup (grammar, filler removal)
- Global Hotkey Dictation
- Custom Vocabulary & Modes
- Privacy-First (local processing)
- Each card: icon, title, short description, subtle surface background

### 5. How It Works (3-step horizontal flow)
- Step 1: Press Shortcut → Step 2: Speak → Step 3: Get Clean Text
- Numbered steps with icons and connecting lines/arrows

### 6. Open Source
- Headline encouraging contributions
- GitHub link button
- Brief text about the project being open-source

### 7. Footer
- GitHub, License (MIT), Credits
- Minimal, single row

## Technical
- Component-per-section structure (`Navbar`, `Hero`, `Demo`, `Features`, `HowItWorks`, `OpenSource`, `Footer`)
- Tailwind CSS with custom CSS variables for the color palette
- `prefers-reduced-motion` respected for animations
- Intersection Observer for fade-in animations
- Responsive: desktop-first, fluid down to mobile
