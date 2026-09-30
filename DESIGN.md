# Portfolio UI system

## Direction

A bright, restrained portfolio for reading project scope and outcomes. Preserve the existing routes, section order, content and blue identity. Actual architecture diagrams are the visual material; do not introduce decorative numbers, gradients or artificial illustrations.

- `DESIGN_VARIANCE: 4`
- `MOTION_INTENSITY: 4`
- `VISUAL_DENSITY: 5`

## Foundations

- Tokens live in `src/index.css`: ink `#202936`, muted `#46515f`, accent `#245fc6`, surface `#f7f8fa`, line `#dde2e8`, panel white. Secondary copy is deliberately darker for readability. `lime` is a compatibility alias for accent, not green.
- Pretendard Variable is self-hosted through the npm package and Vite. Unicode subsets and `font-display: swap` avoid loading a single large full font.
- Name: 60px mobile / 72px desktop, tracking 0. Section titles: 30px / 36px. Detail title: 30px / 48px. Body: 16px with 28–32px line height; card body 15px. Metadata and chips: 13–14px. Do not use 10px labels.
- Reading width stays around 70ch. Headings keep Korean words together and balance wrapping; prose uses natural wrapping.
- Page width: 1024px, horizontal padding 20px / 24px. Section spacing: 56px / 64px. Distinguish groups by whitespace and hairlines, not stacked containers.
- Keep colored skill chips meaningful. Static skill rows do not float or appear clickable. Cards use one 16px radius and a border, without stacked shadows.
- Keep the name and role together in the hero. On desktop (1024px+), the hero fills the viewport below the 64px header, centers its main content vertically and keeps social links at the bottom. Use a minimum height so short windows and enlarged text can expand without clipping; mobile keeps its natural content height.
- Experience badges use soft accent with dark blue text. Result/progress summaries are unboxed: a 14px semibold ink label with a thin trailing divider, followed by 16px semibold ink copy. Numbers use the same styling as their sentence, including troubleshooting results. Reuse 32px icon surfaces, 10px action radii, 8px icon radii and 6px chips instead of inventing section-specific treatments.
- Lucide icons use one 1.75px stroke. Icons supplement text; decorative icons are hidden from assistive technology.

## Interaction and motion

- Fixed header remains 64px tall. Desktop current-section underline animates only its transform for 200ms with the shared ease-in-out curve; label color reflects state immediately. Keyboard navigation is immediate. IntersectionObserver tracks sections, including Mini Projects as part of Projects.
- Cards remain entirely clickable with separate external links. Links and buttons have visible keyboard focus; touch controls aim for at least 44px. Skip-to-content is the first keyboard link.
- Press feedback: scale 0.98, 160ms press / 100ms release. Card hover uses a brief border-color response, not moving cards or arrows. Touch devices do not inherit hover feedback.
- Hero entrance: one small 200ms settling motion on an unanchored home arrival. Scroll entrance (`Reveal animate`) is an explicit opt-in for section headings, skill categories, project cards, career entries, AI content groups and complete detail sections: 300ms, 12px travel, at most 60ms sibling delay. Never animate each sentence or nest animated groups. Content already in view starts visible; focus reveals pending groups immediately. Career timeline lines and markers remain stationary.
- Reveal uses IntersectionObserver layout snapshots rather than reading geometry synchronously for each component. Each group appears once; revealed content never re-hides on scrolling or motion preference changes. Without IntersectionObserver, all content stays visible.
- Keep transition properties on the shared `.reveal` class, not just the pending state. Verify intermediate opacity/position frames on entry; class changes and final visibility alone do not prove an animation ran.
- Respect live `prefers-reduced-motion` changes. Reduced motion disables entrance, moving indicators, press scale and smooth menu scrolling while keeping color/state feedback. Keyboard modality disables animated scrolling for all internal links and suppresses entrance/press motion. Avoid `transition: all` and permanent `will-change`.
- AI execution steps and source references are flat lists separated by whitespace or hairlines, not cards within panels. Shared secondary headings use 16–18px semibold type; footer metadata is 13px.
- Project details include section jump links and architecture-original links. At desktop widths the local table of contents sticks below the 64px global header (z-index 30 versus 40); section scroll margins reserve 192px at tablet widths and 144px on wide screens. On mobile the local navigation remains in normal document flow. Intrinsic image dimensions reserve layout space. PNG originals remain intact; lossless WebP copies serve details, and smaller thumbnails serve large card images. `picture` keeps the PNG fallback.
- Vercel caches Vite's hashed `/assets/` files for a year with `immutable`; HTML stays outside this rule so new deployments can load new asset filenames.

## Maintenance

Content remains in `src/data`. Image dimensions are optional metadata (`architectureWidth`, `architectureHeight`, gallery `width`, `height`); include them when adding images. Do not put review checklists or unverified claims into the UI.

Project lists sort by most recent end date, then start date. All cards reserve a 192px preview area. Where no real image exists, `cover` metadata supplies a restrained Lucide icon and factual subject labels, never a fabricated architecture diagram. Implementation flow labels and pipeline terms use semibold ink for emphasis.
