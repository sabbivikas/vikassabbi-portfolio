# Rebrand: farza.com-style prose portfolio

Turn the site from a card-grid portfolio into a single narrow column of narrative prose, with every project, role, book, and article woven in as an inline link. Keep all existing extras (dark mode toggle, terminal easter egg, reading progress bar, Lemon Slice widget, Appstar bar).

## Visual direction

- Plain white background, one left-aligned column ~560px wide, generous top margin, no centering of text.
- Big lowercase bold headline: `hi, i'm vikas.`
- Body copy in medium gray, ~17px, relaxed line height, short paragraphs separated by blank space.
- Links in bright blue (`#2196f3`-ish), no underline, underline or slight darken on hover.
- No cards, no borders, no shadows, no grids, no status dots.
- Simple text nav row at the very top: `home · substack · github · linkedin · email` in blue.
- Same treatment in dark mode: near-black background, light gray body text, same blue links.

## New page structure (one flow, no headings with emoji chips)

1. **Top nav** — plain text links.
2. **Headline** — `hi, i'm vikas.`
3. **Prose body** — paragraphs, in this order:
   - who i am / what i care about (from the current about copy, tightened)
   - what i'm doing now: product engineer at woz (yc w25), founder in residence at founders inc, founder of chatrasahaya.org
   - what i've built: dino initiative, tryducky, aura, hireai, org research, vihari.earth, ammamma.online, makesomethingwonderful.co and the rest of the current creations list — each as an inline link inside sentences rather than a card
   - writing: twinkle stories, the tales of nani — inline links
   - past roles: wabi, the residency sf, spawn, betteryou, ibm — one short paragraph
   - education: cleveland state, sathyabama — one line
   - press: the csu newsroom, engaged scholarship, the cauldron, storycorps, hacker noon pieces — one paragraph of inline links
   - philosophy close: vasudhaiva kutumbakam / the world is one family
4. **Resume line** — inline `view resume` / `download pdf` links (viewer toggle preserved).
5. **Lemon Slice widget** kept in place, below the prose.
6. **p.s. contact line** at the bottom, farza-style.

Nothing in the current content is dropped — it is all rewritten as sentences instead of cards.

## Technical notes

- `src/index.css`: replace the light/dark token values with paper-white / near-black plus a blue `--primary` for links; add a prose-link style. Keep tokens semantic (no hardcoded colors in components).
- `src/pages/Index.tsx`: replace the section stack with a single `<main>` prose column; keep `ReadingProgress`, `Header`, and the Lemon Slice widget mount.
- New `src/components/sections/Bio.tsx` holding the prose. Delete `About`, `CreationsSection`, `StoriesSection`, `ExperienceSection`, `EducationSection`, `MediaSection`, `PhilosophySection`, `ProjectCard`, `Section`, `AnimatedPhilosophy`.
- `ResumeSection.tsx`: strip card/button chrome down to inline text links, keep the inline PDF viewer toggle.
- `Header.tsx`: swap the icon row for text links; keep the terminal-game trigger and theme toggle as small text/icon affordances at the far left.
- `ProfileHeader.tsx` folded into the new headline + nav; file removed.
- `index.html`: update `<title>` and meta description to match the new voice.
- Global `lowercase` styling stays, matching the reference.
