# Design system

## Direction

FreshKampo's visual language follows the journey from field to market: warm paper surfaces, deep forest-green structure, berry-red emphasis, and real farm and harvest imagery. The homepage opens with a full-bleed, muted field video, a clear international buyer proposition, and visible certification and product proof. Existing routes, bilingual content, and substantiated business claims remain in place.

## Typography and color

- **Display:** Fraunces, used for editorial headlines and section titles.
- **Interface and body:** DM Sans, used for navigation, supporting copy, controls, and labels.
- **Paper:** `#f7f4ec`; **forest:** `#193326`; **berry:** `#b94a48`; supporting colors and shadows are defined in `css/refresh.css`.

## Layout and photography

The homepage pairs a concise buyer-focused message with a restrained full-bleed field video and a single compact certification surface; available products sit directly beneath it as a lighter chip row. A poster image preserves the composition when video is unavailable or reduced motion is requested. Social links sit in the desktop navigation and in the mobile menu, never over the hero. The language control remains in the top navigation. Product cards use repository photography rather than emoji decoration. Shared navigation, page heroes, content surfaces, and calls to action follow the same palette and type scale.

## Motion and accessibility

Transitions use short, eased color, shadow, and transform changes. The homepage splash has an explicit skip control, dismisses after about 2.2 seconds, and reveals the hero with a brief fade; it does not lock page scrolling. The homepage background video is muted, inline, and replaced by its poster when reduced motion is requested. Hero depth motion is limited to desktop and respects reduced-motion preferences. Focus-visible styles, responsive navigation controls, and reduced-motion fallbacks are defined in the shared stylesheet and existing scripts.

## Shared actions and page chrome

The homepage is the only route with a splash screen. Navigation, footer, quality policy, and privacy notice modals are injected into shared slots across all routes; the privacy notice also remains available as a standalone page. Social links and language selection are integrated into shared navigation; the site-wide WhatsApp action remains icon-only, with an accessible label and an occasional, localized message tailored to growers, job seekers, or commercial visitors.

## Implementation

`css/refresh.css` is loaded after the existing page stylesheet on all HTML routes. It supplies the shared tokens, typography, responsive treatment, and motion preferences without replacing the static HTML/CSS/JavaScript architecture or existing page routes.
