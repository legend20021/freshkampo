# FreshKampo 2026 — Entregable Web
## Sitio Web Profesional — Refresh Completo

---

## Estructura del proyecto

```
freshkampo-2026/
│
├── index.html                  ← Homepage principal
├── productos.html              ← Detalle de todos los productos
├── disponibilidad.html         ← Calendarios de disponibilidad
├── integracion-vertical.html   ← Plataforma global / cadena de suministro
├── certificaciones.html        ← Todas las certificaciones
├── calidad-inocuidad.html      ← Política y procesos de calidad
├── historia.html               ← Timeline de la empresa
├── productores.html            ← Programa para productores
├── carreras.html               ← Oportunidades de empleo
├── contacto.html               ← Formulario y oficinas
├── aviso-privacidad.html       ← Aviso legal de privacidad
│
├── css/
│   └── style.css               ← Sistema de diseño completo (tokens, componentes, responsive)
│
├── js/
│   ├── i18n.js                 ← Todas las traducciones ES / EN
│   ├── nav.js                  ← Header + Footer + Modal compartidos (injector)
│   └── app.js                  ← Splash, nav mobile, language switcher, scroll anims, forms
│
├── assets/
│   └── img/
│       └── README.md           ← Guía de imágenes requeridas
│
├── sitemap.xml                 ← Sitemap SEO completo
├── robots.txt                  ← Directivas para bots de búsqueda
└── .htaccess                   ← Configuración Apache: HTTPS, caché, compresión, seguridad
```

---

## Funcionalidades implementadas

### Diseño
- ✅ Paleta de colores profesional 2026 (verde FreshKampo + dorado)
- ✅ Tipografía Inter (Google Fonts) — ultra legible
- ✅ Diseño completamente responsive (mobile-first)
- ✅ Animaciones suaves al hacer scroll (Intersection Observer)
- ✅ Hover states en todos los elementos interactivos
- ✅ Splash screen con Política de Calidad (auto-dismiss 3.2s)

### Navegación
- ✅ Barra superior con teléfono, Línea Ética y redes sociales
- ✅ Menú sticky con dropdowns animados
- ✅ Menú hamburguesa para mobile
- ✅ Breadcrumbs en páginas internas

### Idiomas
- ✅ Switch ES / EN integrado en la página (sin Google Translate)
- ✅ Persistencia del idioma seleccionado (localStorage)
- ✅ 100% del contenido traducible en js/i18n.js

### SEO
- ✅ Meta tags completos en cada página (title, description, canonical)
- ✅ Open Graph para redes sociales
- ✅ Sitemap.xml completo
- ✅ robots.txt configurado
- ✅ .htaccess: HTTPS forzado, caché de assets, compresión gzip, headers de seguridad
- ✅ Semántica HTML5 correcta (header, nav, main, section, article, footer)
- ✅ Atributos ARIA para accesibilidad

### Páginas
- ✅ 11 páginas completas con contenido real
- ✅ Formularios de contacto, carreras y productores
- ✅ Modal de Política de Calidad & Inocuidad (también accesible desde footer)
- ✅ Calendarios de disponibilidad interactivos
- ✅ Timeline animado en Historia
- ✅ Cards de oficinas con todos los datos de contacto
- ✅ Redes sociales (LinkedIn, Facebook, Instagram)
- ✅ Línea Ética enlazada correctamente

---

## Pasos para publicar

1. **Agregar imágenes** — Ver `assets/img/README.md`
2. **Subir al servidor** — Todo el contenido de esta carpeta al directorio raíz del hosting
3. **Verificar dominio** — Actualizar `freshkampo.com` en hosting DNS
4. **Google Search Console** — Registrar el sitio y enviar `sitemap.xml`
5. **Google Analytics** — Agregar el código GA4 en el `<head>` de cada página

### Agregar Google Analytics (GA4)
Inserta antes de `</head>` en cada página:
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## Credenciales de redes sociales actuales
- LinkedIn: linkedin.com/company/freshkampo/
- Facebook: facebook.com/FreshKampo
- Instagram: instagram.com/freshkampo
- Línea Ética: alzalavozfreshkampo.ethicsglobal.com

---

## Tecnologías usadas
- HTML5 semántico
- CSS3 (custom properties, grid, flexbox, animations)
- JavaScript vanilla (ES6+) — sin dependencias externas
- Google Fonts (Inter + Playfair Display)
- SVG inline para todos los íconos (sin dependencias de icon fonts)

---

Desarrollado con ❤️ — 2026
