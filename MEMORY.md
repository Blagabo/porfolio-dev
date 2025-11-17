# CareerCanvas Theme Notes

## Arquitectura General
- Base layout en `layouts/_default/baseof.html` carga parciales `head`, `color-variables`, `nav` y `footer`, además de CSS compilado de Tailwind y JS (`scripts.js`, `dynamic-colors.js`, `gsap-animations.js`, `pexels-background.js`).
- `index.html` incluye parciales `hero`, `about`, `skills`, `experience`, `technical`, `contact`, cada uno consumiendo `.Site.Params` y páginas de contenido como `about`, `skills`, `experience`, `contact`.
- `nav.html` maneja menús jerárquicos, enlaces con hash, selector de idiomas y toggles de modo oscuro (desktop/mobile). Scripts internos usan `localStorage` y scroll inteligente.
- `about.html`, `skills.html`, `experience.html`, `technical.html`, `contact.html` implementan tarjetas, modales, timeline, grids con Devicon y formulario Formspree.
- `list.html` y `single.html` definen vistas de blog/proyectos con sidebars pegajosos y tarjetas responsive. Shortcodes (`layouts/shortcodes`) incluyen `gallery`, `youtube`, `vimeo`, etc.

## Sistema de Colores
- Configuración completa en `example-config.toml` (`[params.colors.base|semantic|light|dark|hero|skills|experience|contact|navigation|content|effects]`). `COLOR_CUSTOMIZATION.md` documenta la arquitectura de tres niveles.
- `color-variables.html` inicializa CSS custom properties con la primera paleta o fallback y define overrides para `.dark`.
- `color-config.html` serializa `params.color_palettes` a `window.HUGO_COLOR_PALETTES`, consumido por `dynamic-colors.js`.
- `assets/css/main.css` redefine clases Tailwind (texto, fondos, bordes) para usar variables (`--color-primary`, etc.), añade componentes (`card-hover`, `.hero-name`, `.quick-fact-card`) y utilidades (`section[data-animate]`).
- `assets/css/semantic-colors.css` provee clases semánticas (`bg-primary`, `text-warning`, variantes dark) basadas en las variables.
- `theme.toml` expone colores por defecto si la instancia no define `params.colors`.

## Scripts Clave
- `dynamic-colors.js` rota paletas (aleatorio o query `?palette=`), aplica variables, expone `window.DynamicColors` y usa datos de Hugo si existen.
- `pexels-config.html` inserta queries en `data-queries` y hace fetch a `/api/config` para obtener `pexelsApiKey` y `formspreeEndpoint`.
- `pexels-background.js` es la clase que aplica imágenes aleatorias como background del hero, con overlay, control de repetición (Set de IDs) y fallback al gradiente.
- `gsap-animations.js` inicializa animaciones del hero: valores iniciales, shapes flotantes, tracking del mouse, lighting de `.quick-fact-card`, efecto typewriter (`.typewriter` + `.typing-cursor`) y usa GSAP con fallback CDN.
- `scripts.js` maneja el toggle del menú móvil y el IntersectionObserver que añade `.fade-in-visible` a `section[data-animate]`.

## Contenido y Datos
- `.Site.Params` incluye `name`, `tagline`, `hero_location`, URLs de CV, redes sociales, `profile_image`, `social[]`, etc. El formulario usa `email`, `linkedin_url`, `github_url`, `collab_tags`, `emergency_contact`.
- Secciones como `skills`, `experience`, `technical`, `contact`, `about` requieren páginas en `content/` con `Params` (`intro`, `domains`, `positions`, `technical_groups`, `quickfacts`, etc.).
- Multilenguaje: `nav` usa `.Site.Home.AllTranslations` y orden fijo `fr`, `en`, `es` para mostrar banderas.

## Cosas a Replicar en Otro Framework
1. Mantener la jerarquía de parciales/componentes para reusar datos y permitir localización.
2. Respetar clases/IDs usados por GSAP (`data-animation`, `.hero-section`, `.typewriter`, `.quick-fact-card`, `.hero-text-element`).
3. Reimplementar el sistema de colores basado en CSS variables y la carga dinámica de paletas.
4. Reproducir las interacciones JS: menú móvil, scroll a secciones, toggle dark mode, IntersectionObserver, Formspree fetch, Pexels background.
5. Conservar la estructura de contenido (pages/params) para no romper la configuración existente.
