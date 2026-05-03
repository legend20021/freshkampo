/* ============================================================
   PAGE I18N OVERRIDES — FreshKampo
   Extends global data-i18n with selector-based page translations
   ============================================================ */

(function () {
  'use strict';

  var PAGE_RULES = {
    'disponibilidad.html': {
      es: [
        { s: '.dispo-hero .badge', v: 'Disponibilidad' },
        { s: '.dispo-hero h1', v: 'Fruta fresca,<br>todo el ano' },
        { s: '.dispo-hero .container > p', v: 'Nuestra red de cultivo en multiples zonas de Mexico, Marruecos y Sudamerica nos permite garantizar disponibilidad constante en los mercados internacionales.' },
        { s: '.dispo-hero-stat span', v: ['productos', 'zonas de cultivo', 'meses al ano'] },
        { s: '.dispo-hero-prod', v: ['🍓 Fresa', '🍇 Arandano', '🍇 Zarzamora', '🍒 Frambuesa', '🥑 Aguacate', '🍈 Higo', '🌿 Esparrago'] },

        { s: '.dispo-map-header .badge', v: 'Cobertura geografica' },
        { s: '.dispo-map-header h2', v: 'Nuestras zonas de cultivo' },
        { s: '.dispo-map-header p', v: 'Cultivamos en regiones que presentan la geografia y clima ideal para producir fruta con calidad de clase mundial.' },

        { s: '.dispo-cal-header .badge', v: 'Temporadas' },
        { s: '.dispo-cal-header h2', v: 'Calendario de Disponibilidad' },
        { s: '.dispo-cal-header p', v: 'Consulta nuestra disponibilidad mensual por tipo de cultivo y zona de produccion.' },
        { s: '.dispo-cal-card-title', v: ['Berries - Temporadas de cosecha', 'Berries - Temporadas de cosecha', 'Otros productos - Temporadas de cosecha'] },
        { s: '.dispo-cal-badge.conv', v: 'Convencional', all: true },
        { s: '.dispo-cal-badge.org', v: '🌱 Organico', all: true },
        { s: '.dispo-chip', v: ['🍓 Fresa', '🍇 Arandano', '🍇 Zarzamora', '🍒 Frambuesa', '🍓 Fresa', '🍇 Arandano', '🍇 Zarzamora', '🍒 Frambuesa', '🥑 Aguacate', '🍈 Higo', '🌿 Esparrago'] },
        { s: '.dispo-legend-item', v: '<span style="display:inline-block;width:13px;height:13px;border-radius:50%;background:#b5b5b5;flex-shrink:0;"></span>Sin disponibilidad' },

        { s: '.cta-section h2', v: '¿Quieres saber mas sobre nuestros productos?' },
        { s: '.cta-section p', v: 'Contactanos y descubre como FreshKampo puede abastecer tus mercados con fruta de clase mundial.' },
        { s: '.cta-actions a:nth-child(2)', v: 'Ver productos', mode: 'text' }
      ],
      en: [
        { s: '.dispo-hero .badge', v: 'Availability' },
        { s: '.dispo-hero h1', v: 'Fresh fruit,<br>all year long' },
        { s: '.dispo-hero .container > p', v: 'Our growing network across Mexico, Morocco, and South America allows us to ensure consistent supply in international markets.' },
        { s: '.dispo-hero-stat span', v: ['products', 'growing zones', 'months per year'] },
        { s: '.dispo-hero-prod', v: ['🍓 Strawberry', '🍇 Blueberry', '🍇 Blackberry', '🍒 Raspberry', '🥑 Avocado', '🍈 Fig', '🌿 Asparagus'] },

        { s: '.dispo-map-header .badge', v: 'Geographic coverage' },
        { s: '.dispo-map-header h2', v: 'Our growing regions' },
        { s: '.dispo-map-header p', v: 'We cultivate in regions with ideal geography and climate to produce world-class fruit.' },

        { s: '.dispo-cal-header .badge', v: 'Seasons' },
        { s: '.dispo-cal-header h2', v: 'Availability Calendar' },
        { s: '.dispo-cal-header p', v: 'Check monthly availability by crop type and production region.' },
        { s: '.dispo-cal-card-title', v: ['Berries - Harvest seasons', 'Berries - Harvest seasons', 'Other products - Harvest seasons'] },
        { s: '.dispo-cal-badge.conv', v: 'Conventional', all: true },
        { s: '.dispo-cal-badge.org', v: '🌱 Organic', all: true },
        { s: '.dispo-chip', v: ['🍓 Strawberry', '🍇 Blueberry', '🍇 Blackberry', '🍒 Raspberry', '🍓 Strawberry', '🍇 Blueberry', '🍇 Blackberry', '🍒 Raspberry', '🥑 Avocado', '🍈 Fig', '🌿 Asparagus'] },
        { s: '.dispo-legend-item', v: '<span style="display:inline-block;width:13px;height:13px;border-radius:50%;background:#b5b5b5;flex-shrink:0;"></span>No availability' },

        { s: '.cta-section h2', v: 'Want to know more about our products?' },
        { s: '.cta-section p', v: 'Contact us and discover how FreshKampo can supply your markets with world-class fruit.' },
        { s: '.cta-actions a:nth-child(2)', v: 'View products', mode: 'text' }
      ]
    },

    'productores.html': {
      es: [
        { s: '.pr-breadcrumb a', v: 'Inicio', mode: 'text' },
        { s: '.pr-hero h1', v: 'Crece tu empresa agricola<br>con nosotros.' },
        { s: '.pr-hero-lead', v: 'Si eres productor de berries, aguacate, higo o esparrago, en FreshKampo encuentras una plataforma solida para profesionalizar tu operacion, escalar con orden y llegar a mercados internacionales con confianza.' },
        { s: '.pr-hero-note', v: 'Tu crecimiento tambien es nuestro' },
        { s: '.pr-hero-card-kicker', v: 'Con quien trabajamos' },
        { s: '.pr-hero-card h2', v: 'Productores e inversionistas listos para construir una operacion de clase mundial.' },
        { s: '.pr-hero-card p:not(.pr-hero-card-kicker)', v: 'Desde proyectos nuevos hasta ranchos consolidados, te acompanamos para llegar al siguiente nivel con estrategia, mercado y ejecucion.' },

        { s: '.pr-watch-head h2', v: 'Conoce la experiencia FreshKampo para productores' },
        { s: '.pr-watch-close', v: '<span class="x" aria-hidden="true">&times;</span>Ocultar' },
        { s: '.pr-watch-foot', v: 'Si prefieres verlo en YouTube, abre este enlace: <a href="https://www.youtube.com/watch?v=fYy_ApparZI" target="_blank" rel="noopener noreferrer">Ver en YouTube</a>' },

        { s: '.pr-intro-copy .badge', v: 'Perfil ideal' },
        { s: '.pr-intro-copy h2', v: 'Tu empresa agricola puede crecer con estructura, control y rentabilidad.' },
        { s: '.pr-intro-copy p', v: 'Nos interesa conocerte si buscas una construccion profesional de negocio agricola. No importa si estas evaluando entrar a la industria o si ya operas decenas de hectareas: te ayudamos a consolidar un camino claro de crecimiento.' },
        { s: '.pr-intro-aside h3', v: 'Perfil de colaboracion ideal' },
        { s: '.pr-intro-aside p', v: 'Nos integramos con equipos que desean crecer con orden, disciplina operativa y vision de largo plazo.' },
        { s: '.pr-intro-aside li', v: [
          'Productores de berries, aguacate, higo y esparrago.',
          'Equipos que buscan estandarizar calidad e inocuidad.',
          'Inversionistas que quieren ejecutar con acompanamiento experto.',
          'Operaciones que quieren pasar de volumen a valor sostenible.'
        ] },

        { s: '.pr-platform-head .badge', v: 'Plataforma de negocio' },
        { s: '.pr-platform-head h2', v: 'Plataforma integral de construccion de negocio agricola' },
        { s: '.pr-platform-copy', v: [
          '<strong>Construimos empresa, no solo ventas.</strong> Te ayudamos a pasar de una operacion reactiva a una organizacion con direccion, indicadores y decisiones estrategicas por temporada.',
          '<strong>Ecosistema integrado para crecer.</strong> Comercializacion, genetica, asesoria tecnica, financiamiento y mejores practicas trabajan juntos para sostener valor en cada hectarea.'
        ] },
        { s: '.pr-platform-list li', v: [
          'Ruta clara de crecimiento desde planeacion hasta venta internacional.',
          'Acompanamiento cercano para profesionalizar equipos y procesos.',
          'Herramientas para proteger rentabilidad y reducir riesgos operativos.'
        ] },

        { s: '.pr-business-kicker', v: ['Canal internacional', 'Ventaja varietal'] },
        { s: '.pr-business-copy h3', v: ['Comercializacion', 'Genetica'] },

        { s: '.pr-highlight-card strong', v: 'Mas del 90% de nuestros productores se quedan con nosotros cada temporada.' },
        { s: '.pr-highlight-card p', v: 'Esa permanencia se construye con resultados, acompanamiento real y relaciones de largo plazo.' },

        { s: '.pr-advisory-head .badge', v: 'Asesoria' },
        { s: '.pr-advisory-head h2', v: 'Te damos herramientas robustas para operar mejor y crecer con control.' },
        { s: '.pr-advisory-head p', v: 'Cuando te unes a la familia FreshKampo cuentas con un equipo multidisciplinario que trabaja contigo de forma continua. Nuestro objetivo es que cada decision en campo y en oficina tenga impacto directo en rentabilidad, estabilidad operativa y crecimiento sostenible.' },
        { s: '.pr-tool-kicker', v: ['Acompanamiento en campo', 'Control de valor', 'Cumplimiento global', 'Vision empresarial'] },

        { s: '.pr-growth-copy h3', v: ['Financiamiento', 'Mejores practicas'] },

        { s: '.pr-join-head .badge', v: 'Unete a la familia' },
        { s: '.pr-join-head h2', v: 'Crece tu empresa agricola con nosotros' },
        { s: '.pr-join-head p', v: 'Agenda una platica inicial y conversemos sobre tu operacion. Estamos listos para ayudarte a construir el siguiente nivel de tu negocio.' },
        { s: 'label[for="nombre"]', v: 'Nombre <span>*</span>' },
        { s: 'label[for="email"]', v: 'E-mail <span>*</span>' },
        { s: 'label[for="celular"]', v: 'Celular <span>*</span>' },
        { s: 'label[for="cultivo"]', v: 'Cultivo principal' },
        { s: 'label[for="comentarios"]', v: 'Comentarios' },
        { s: '#cultivo', attr: 'placeholder', v: 'Ej. Zarzamora / Aguacate' },
        { s: '#comentarios', attr: 'placeholder', v: 'Cuentanos en que etapa esta tu operacion y que tipo de apoyo necesitas.' },
        { s: '.pr-join-form button[type="submit"]', v: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> Quiero crecer como productor' }
      ],
      en: [
        { s: '.pr-breadcrumb a', v: 'Home', mode: 'text' },
        { s: '.pr-hero h1', v: 'Grow your agricultural business<br>with us.' },
        { s: '.pr-hero-lead', v: 'If you are a grower of berries, avocado, fig, or asparagus, at FreshKampo you will find a strong platform to professionalize your operation, scale with structure, and access international markets with confidence.' },
        { s: '.pr-hero-note', v: 'Your growth is ours too' },
        { s: '.pr-hero-card-kicker', v: 'Who we work with' },
        { s: '.pr-hero-card h2', v: 'Growers and investors ready to build a world-class operation.' },
        { s: '.pr-hero-card p:not(.pr-hero-card-kicker)', v: 'From new projects to established ranches, we help you reach the next level with strategy, market access, and execution.' },

        { s: '.pr-watch-head h2', v: 'Discover the FreshKampo experience for growers' },
        { s: '.pr-watch-close', v: '<span class="x" aria-hidden="true">&times;</span>Hide' },
        { s: '.pr-watch-foot', v: 'If you prefer to watch it on YouTube, open this link: <a href="https://www.youtube.com/watch?v=fYy_ApparZI" target="_blank" rel="noopener noreferrer">Watch on YouTube</a>' },

        { s: '.pr-intro-copy .badge', v: 'Ideal profile' },
        { s: '.pr-intro-copy h2', v: 'Your agricultural business can scale with structure, control, and profitability.' },
        { s: '.pr-intro-copy p', v: 'We want to meet you if you are looking for professional agricultural business development. Whether you are evaluating entry into the industry or already operating dozens of hectares, we help you build a clear growth path.' },
        { s: '.pr-intro-aside h3', v: 'Ideal collaboration profile' },
        { s: '.pr-intro-aside p', v: 'We integrate with teams that want to grow with structure, operational discipline, and long-term vision.' },
        { s: '.pr-intro-aside li', v: [
          'Growers of berries, avocado, fig, and asparagus.',
          'Teams seeking to standardize quality and food safety.',
          'Investors who want to execute with expert support.',
          'Operations moving from volume to sustainable value.'
        ] },

        { s: '.pr-platform-head .badge', v: 'Business platform' },
        { s: '.pr-platform-head h2', v: 'Integrated platform to build your agricultural business' },
        { s: '.pr-platform-copy', v: [
          '<strong>We build companies, not just sales.</strong> We help you move from reactive operations to an organization with direction, KPIs, and strategic seasonal decisions.',
          '<strong>An integrated ecosystem for growth.</strong> Commercialization, genetics, technical advisory, financing, and best practices work together to sustain value per hectare.'
        ] },
        { s: '.pr-platform-list li', v: [
          'Clear growth path from planning to international sales.',
          'Close support to professionalize teams and processes.',
          'Tools to protect profitability and reduce operational risk.'
        ] },

        { s: '.pr-business-kicker', v: ['International channel', 'Varietal advantage'] },
        { s: '.pr-business-copy h3', v: ['Commercialization', 'Genetics'] },

        { s: '.pr-highlight-card strong', v: 'More than 90% of our growers stay with us season after season.' },
        { s: '.pr-highlight-card p', v: 'That retention is built on results, real support, and long-term relationships.' },

        { s: '.pr-advisory-head .badge', v: 'Advisory' },
        { s: '.pr-advisory-head h2', v: 'We provide robust tools to operate better and grow with control.' },
        { s: '.pr-advisory-head p', v: 'When you join the FreshKampo family, you gain a multidisciplinary team working with you continuously. Our goal is for every field and office decision to impact profitability, operational stability, and sustainable growth.' },
        { s: '.pr-tool-kicker', v: ['Field support', 'Value control', 'Global compliance', 'Business vision'] },

        { s: '.pr-growth-copy h3', v: ['Financing', 'Best practices'] },

        { s: '.pr-join-head .badge', v: 'Join the family' },
        { s: '.pr-join-head h2', v: 'Grow your agricultural business with us' },
        { s: '.pr-join-head p', v: 'Schedule an initial conversation and let us review your operation. We are ready to help you build the next stage of your business.' },
        { s: 'label[for="nombre"]', v: 'Name <span>*</span>' },
        { s: 'label[for="email"]', v: 'E-mail <span>*</span>' },
        { s: 'label[for="celular"]', v: 'Mobile <span>*</span>' },
        { s: 'label[for="cultivo"]', v: 'Main crop' },
        { s: 'label[for="comentarios"]', v: 'Comments' },
        { s: '#cultivo', attr: 'placeholder', v: 'Ex. Blackberry / Avocado' },
        { s: '#comentarios', attr: 'placeholder', v: 'Tell us what stage your operation is in and what kind of support you need.' },
        { s: '.pr-join-form button[type="submit"]', v: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> I want to grow as a grower' }
      ]
    },

    'integracion-vertical.html': {
      es: [
        { s: '.iv-hero .breadcrumb a', v: 'Inicio', mode: 'text' },
        { s: '.iv-hero .badge', v: 'Integracion Vertical' },
        { s: '.iv-hero h1', v: 'Integracion vertical<br>de principio a fin' },
        { s: '.iv-hero .container > p', v: 'Controlamos cada eslabon de la cadena de suministro para garantizar la mas alta calidad e inocuidad.' },

        { s: '.iv-platform-text .badge', v: 'Cadena completa' },
        { s: '.iv-platform-text h2', v: 'Plataforma Global<br>de Suministro' },
        { s: '.iv-platform-text p', v: 'Estamos integrados verticalmente desde el campo y a traves de todos los eslabones de la cadena de suministro para proveer frutos de calidad a supermercados en Norteamerica, Europa y el Medio Oriente.' },

        { s: '.iv-split-text h2', v: ['Genetica Diferenciada', 'Proveeduria Creciente', 'Mejores Practicas Agricolas', 'Logistica Agil', 'Comercializacion Internacional'] },
        { s: '.iv-banner-text h2', v: 'Calidad e Inocuidad<br>Certificada' },
        { s: '.iv-banner-actions a:nth-child(2)', v: 'Ver certificaciones', mode: 'text' },
        { s: '.iv-logos-bar-label', v: 'Certificados', mode: 'text' },
        { s: '.iv-logos-bar-cert-name', v: ['PRIMUS GFS', 'GLOBAL G.A.P.'] },
        { s: '.iv-logos-bar-cert-desc', v: ['Inocuidad alimentaria en campo', 'Buenas practicas agricolas'] },

        { s: '.iv-footer-cta .badge', v: 'Nuestra historia' },
        { s: '.iv-footer-cta h2', v: 'Llevamos mas de 15 anos en el mercado<br>entregando fruta fresca a todo el mundo.' },
        { s: '.iv-footer-cta p', v: 'Descubre como comenzo FreshKampo y el camino que nos trajo hasta donde estamos hoy.' },
        { s: '.iv-footer-cta .btn', v: 'Conoce nuestra historia', mode: 'text' }
      ],
      en: [
        { s: '.iv-hero .breadcrumb a', v: 'Home', mode: 'text' },
        { s: '.iv-hero .badge', v: 'Vertical Integration' },
        { s: '.iv-hero h1', v: 'End-to-end<br>vertical integration' },
        { s: '.iv-hero .container > p', v: 'We control every link of the supply chain to guarantee top quality and food safety.' },

        { s: '.iv-platform-text .badge', v: 'End-to-end chain' },
        { s: '.iv-platform-text h2', v: 'Global Supply<br>Platform' },
        { s: '.iv-platform-text p', v: 'We are vertically integrated from the field through every supply chain stage to deliver premium fruit to supermarkets in North America, Europe, and the Middle East.' },

        { s: '.iv-split-text h2', v: ['Differentiated Genetics', 'Growing Supplier Base', 'Best Agricultural Practices', 'Agile Logistics', 'International Commercialization'] },
        { s: '.iv-banner-text h2', v: 'Certified Quality<br>& Food Safety' },
        { s: '.iv-banner-actions a:nth-child(2)', v: 'View certifications', mode: 'text' },
        { s: '.iv-logos-bar-label', v: 'Certified', mode: 'text' },
        { s: '.iv-logos-bar-cert-name', v: ['PRIMUS GFS', 'GLOBAL G.A.P.'] },
        { s: '.iv-logos-bar-cert-desc', v: ['Field food safety', 'Good agricultural practices'] },

        { s: '.iv-footer-cta .badge', v: 'Our story' },
        { s: '.iv-footer-cta h2', v: 'More than 15 years in the market,<br>delivering fresh fruit worldwide.' },
        { s: '.iv-footer-cta p', v: 'Discover how FreshKampo started and the path that brought us to where we are today.' },
        { s: '.iv-footer-cta .btn', v: 'Read our story', mode: 'text' }
      ]
    },

    'certificaciones.html': {
      es: [
        { s: '.cert-hero .breadcrumb a', v: 'Inicio', mode: 'text' },
        { s: '.cert-hero .badge', v: 'Calidad certificada' },
        { s: '.cert-hero h1', v: 'Aseguramos<br>nuestra calidad' },
        { s: '.cert-hero .container > p', v: 'Contamos con certificaciones internacionales de calidad, inocuidad, organico y comercio etico reconocidas en todo el mundo.' },
        { s: '.cert-cat-label.calidad', v: 'Calidad' },
        { s: '.cert-cat-label.inocuidad', v: 'Inocuidad Alimentaria' },
        { s: '.cert-cat-label.organico', v: 'Producto Organico' },
        { s: '.cert-section-head h2', v: ['Seguridad en cada etapa', 'Certificaciones organicas internacionales'] },
        { s: '.cert-section-head p', v: ['Contamos con certificaciones de inocuidad que garantizan que hemos sido auditados y cumplimos con las normas establecidas nacional e internacionalmente.', 'Nuestros productos organicos cuentan con las certificaciones para comercializarlos en Mexico, Estados Unidos, Canada, la Union Europea y el Medio Oriente.'] },
        { s: '.cta-section h2', v: '¿Preguntas sobre nuestras certificaciones?' },
        { s: '.cta-section p', v: 'Nuestro equipo de calidad e inocuidad esta disponible para responder cualquier duda sobre nuestros estandares y procesos.' },
        { s: '.cta-actions a:nth-child(1)', v: 'Contactanos', mode: 'text' },
        { s: '.cta-actions a:nth-child(2)', v: 'Calidad e Inocuidad', mode: 'text' }
      ],
      en: [
        { s: '.cert-hero .breadcrumb a', v: 'Home', mode: 'text' },
        { s: '.cert-hero .badge', v: 'Certified quality' },
        { s: '.cert-hero h1', v: 'We guarantee<br>our quality' },
        { s: '.cert-hero .container > p', v: 'We hold international certifications in quality, food safety, organic compliance, and ethical trade recognized worldwide.' },
        { s: '.cert-cat-label.calidad', v: 'Quality' },
        { s: '.cert-cat-label.inocuidad', v: 'Food Safety' },
        { s: '.cert-cat-label.organico', v: 'Organic Product' },
        { s: '.cert-section-head h2', v: ['Safety at every stage', 'International organic certifications'] },
        { s: '.cert-section-head p', v: ['We hold food safety certifications that guarantee we have been audited and comply with national and international standards.', 'Our organic products are certified for commercialization in Mexico, the United States, Canada, the European Union, and the Middle East.'] },
        { s: '.cta-section h2', v: 'Questions about our certifications?' },
        { s: '.cta-section p', v: 'Our quality and food safety team is available to answer any questions about our standards and processes.' },
        { s: '.cta-actions a:nth-child(1)', v: 'Contact us', mode: 'text' },
        { s: '.cta-actions a:nth-child(2)', v: 'Quality & Food Safety', mode: 'text' }
      ]
    },

    'calidad-inocuidad.html': {
      es: [
        { s: '.cq-hero .breadcrumb a', v: 'Inicio', mode: 'text' },
        { s: '.cq-hero .badge', v: 'Calidad e Inocuidad' },
        { s: '.cq-hero h1', v: 'Inocuidad en cada etapa,<br>calidad en cada fruto' },
        { s: '.cq-hero-lead', v: 'Nuestros productos cumplen los mas estrictos estandares internacionales de calidad e inocuidad alimentaria en toda la cadena de suministro.' },
        { s: '.cq-stat span', v: ['Productores certificados', 'Estandar reconocido', '17025 labs', 'Cert. organicas'] },
        { s: '.cq-hero-card h4', v: 'Certificaciones activas' },
        { s: '.cq-hero-card p', v: 'Instalaciones y productores con certificaciones vigentes en los principales estandares globales.' },

        { s: '.cq-policy-banner-eyebrow', v: 'Documento oficial' },
        { s: '.cq-policy-banner-title', v: 'Politica de Calidad &amp; Inocuidad' },
        { s: '.cq-policy-banner-meta', v: 'Meridian Fruits SPR de RL de CV - Version 3 - 2026' },
        { s: '.cq-policy-banner-btn span', v: 'Ver politica completa' },

        { s: '.section-header.centered .badge', v: 'Proceso de calidad' },
        { s: '.section-header.centered h2', v: 'Tres lineas de control' },
        { s: '.section-header.centered p', v: 'Supervisamos la calidad e inocuidad en campo, durante el almacenamiento y a lo largo de toda la cadena de suministro.' },

        { s: '.cq-split-grid h2', v: [
          'Acompanamos a cada productor desde la raiz',
          'Sistema de inspeccion en instalaciones de frio',
          'Campos optimos para cosechar fruta segura',
          'Solo los pesticidas aprobados para cada mercado destino',
          'Cumplimiento 100 % antes del primer embarque',
          'Prefrio y conservacion con las mejores practicas'
        ] },

        { s: '.cq-dark-text h2', v: 'La seguridad de nuestros consumidores es nuestra maxima prioridad' },
        { s: '.cq-panel-label', v: 'Certificaciones de inocuidad' },

        { s: '.cq-organic .badge', v: 'Productos Organicos' },
        { s: '.cq-organic-grid h2', v: 'Produccion organica certificada en cuatro mercados' },

        { s: '.cta-section h2', v: '¿Preguntas sobre nuestros estandares?' },
        { s: '.cta-section p', v: 'Nuestro equipo de calidad e inocuidad esta disponible para responder todas tus preguntas.' },
        { s: '.cta-actions a:nth-child(1)', v: 'Contactanos', mode: 'text' }
      ],
      en: [
        { s: '.cq-hero .breadcrumb a', v: 'Home', mode: 'text' },
        { s: '.cq-hero .badge', v: 'Quality & Food Safety' },
        { s: '.cq-hero h1', v: 'Safety at every stage,<br>quality in every fruit' },
        { s: '.cq-hero-lead', v: 'Our products meet the strictest international quality and food safety standards across the entire supply chain.' },
        { s: '.cq-stat span', v: ['Certified growers', 'Recognized standard', '17025 labs', 'Organic certs'] },
        { s: '.cq-hero-card h4', v: 'Active certifications' },
        { s: '.cq-hero-card p', v: 'Facilities and growers with active certifications under the main global standards.' },

        { s: '.cq-policy-banner-eyebrow', v: 'Official document' },
        { s: '.cq-policy-banner-title', v: 'Quality &amp; Food Safety Policy' },
        { s: '.cq-policy-banner-meta', v: 'Meridian Fruits SPR de RL de CV - Version 3 - 2026' },
        { s: '.cq-policy-banner-btn span', v: 'View full policy' },

        { s: '.section-header.centered .badge', v: 'Quality process' },
        { s: '.section-header.centered h2', v: 'Three control lines' },
        { s: '.section-header.centered p', v: 'We monitor quality and food safety in the field, during storage, and throughout the full supply chain.' },

        { s: '.cq-split-grid h2', v: [
          'We support every grower from the root',
          'Inspection system in cold facilities',
          'Optimal fields for safe harvests',
          'Only approved pesticides by destination market',
          '100% compliance before the first shipment',
          'Pre-cooling and preservation with best practices'
        ] },

        { s: '.cq-dark-text h2', v: 'Our consumers\' safety is our highest priority' },
        { s: '.cq-panel-label', v: 'Food safety certifications' },

        { s: '.cq-organic .badge', v: 'Organic products' },
        { s: '.cq-organic-grid h2', v: 'Certified organic production across four markets' },

        { s: '.cta-section h2', v: 'Questions about our standards?' },
        { s: '.cta-section p', v: 'Our quality and food safety team is available to answer all your questions.' },
        { s: '.cta-actions a:nth-child(1)', v: 'Contact us', mode: 'text' }
      ]
    },

    'historia.html': {
      es: [
        { s: '.hs-breadcrumb a', v: 'Inicio', mode: 'text' },
        { s: '.hs-hero h1', v: 'Mas que una empresa,<br>somos una familia' },
        { s: '.hs-hero-lead', v: 'En FreshKampo, mas que una empresa, somos una familia. Llevamos mas de 15 anos cumpliendo nuestra promesa de entregar berries frescas, ricas, nutritivas y cultivadas en armonia con el medio ambiente.' },
        { s: '.hs-hero-actions .btn', v: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" width="18" height="18"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg> Ver video' },
        { s: '.hs-hero-chip', v: 'Una historia real de crecimiento' },
        { s: '.hs-panel-kicker', v: 'Nuestra esencia' },
        { s: '.hs-hero-panel h2', v: 'Una historia de esfuerzo, dedicacion y pasion.' },
        { s: '.hs-hero-panel p:not(.hs-panel-kicker)', v: 'Desde Periban, Michoacan, hacia multiples mercados internacionales, avanzamos etapa por etapa con una sola idea: crecer juntos.' },
        { s: '.hs-step-media', attr: 'aria-label', v: 'Abrir imagen en grande', all: true },
        { s: '#hsLightbox', attr: 'aria-label', v: 'Imagen ampliada de historia' },
        { s: '#hsLightboxClose', attr: 'aria-label', v: 'Cerrar imagen' },

        { s: '.hs-watch-head h2', v: 'Asi inicio FreshKampo y asi seguimos creciendo en 2026' },

        { s: '.hs-timeline-head .badge', v: 'Nuestra historia' },
        { s: '.hs-timeline-head h2', v: 'Un camino real que sigue creciendo' },
        { s: '.hs-timeline-head p', v: 'Replanteamos el recorrido para que se viva como una historia secuencial: conectada, clara y con cada hito apareciendo al ritmo del scroll.' },
        { s: '.hs-step-title', v: [
          'Nace FreshKampo',
          'Nuestra primera venta internacional',
          'Primer Congreso Nacional de Berries',
          'Presencia global',
          'Integracion vertical hacia USA',
          'Presencia en el Viejo Mundo',
          'Produccion en Marruecos',
          'Mas de 230 colaboradores',
          'Seguimos creciendo con vision global'
        ] },

        { s: '.hs-next-kicker', v: 'En adelante' },
        { s: '.hs-next-story h2', v: 'Esto es solo el comienzo' },
        { s: '.hs-next-story p', v: 'Contribuir a que el mundo cada dia tenga acceso a mas frutos FreshKampo nos mueve a alcanzar el siguiente nivel. Nuestra historia continua con la misma pasion que nos trajo hasta aqui.' },

        { s: '.cta-section h2', v: 'Te gustaria construir el siguiente capitulo con nosotros?' },
        { s: '.cta-section p', v: 'Estamos listos para seguir creciendo con clientes, productores y aliados que compartan esta vision.' },
        { s: '.cta-actions a:nth-child(1)', v: 'Contactanos', mode: 'text' }
      ],
      en: [
        { s: '.hs-breadcrumb a', v: 'Home', mode: 'text' },
        { s: '.hs-hero h1', v: 'More than a company,<br>we are a family' },
        { s: '.hs-hero-lead', v: 'At FreshKampo, we are more than a company, we are a family. For over 15 years we have fulfilled our promise to deliver fresh, nutritious berries grown in harmony with the environment.' },
        { s: '.hs-hero-actions .btn', v: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" width="18" height="18"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg> Watch video' },
        { s: '.hs-hero-chip', v: 'A real story of growth' },
        { s: '.hs-panel-kicker', v: 'Our essence' },
        { s: '.hs-hero-panel h2', v: 'A story of effort, dedication, and passion.' },
        { s: '.hs-hero-panel p:not(.hs-panel-kicker)', v: 'From Periban, Michoacan, to multiple international markets, we have advanced step by step with one idea: grow together.' },
        { s: '.hs-step-media', attr: 'aria-label', v: 'Open image', all: true },
        { s: '#hsLightbox', attr: 'aria-label', v: 'Expanded history image' },
        { s: '#hsLightboxClose', attr: 'aria-label', v: 'Close image' },

        { s: '.hs-watch-head h2', v: 'How FreshKampo started and how we continue growing in 2026' },

        { s: '.hs-timeline-head .badge', v: 'Our story' },
        { s: '.hs-timeline-head h2', v: 'A real journey that keeps growing' },
        { s: '.hs-timeline-head p', v: 'We redesigned the journey so it feels sequential: connected, clear, and with each milestone appearing as you scroll.' },
        { s: '.hs-step-title', v: [
          'FreshKampo is founded',
          'Our first international sale',
          'First National Berries Congress',
          'Global presence',
          'Vertical integration into the USA',
          'Presence in the Old World',
          'Production in Morocco',
          'More than 230 team members',
          'We keep growing with a global vision'
        ] },

        { s: '.hs-next-kicker', v: 'What comes next' },
        { s: '.hs-next-story h2', v: 'This is only the beginning' },
        { s: '.hs-next-story p', v: 'Helping the world access more FreshKampo fruit drives us to the next level. Our story continues with the same passion that brought us here.' },

        { s: '.cta-section h2', v: 'Would you like to build the next chapter with us?' },
        { s: '.cta-section p', v: 'We are ready to keep growing with clients, growers, and partners who share this vision.' },
        { s: '.cta-actions a:nth-child(1)', v: 'Contact us', mode: 'text' }
      ]
    },

    'productos.html': {
      es: [
        { s: '.products-subnav .pnav-label', v: ['Fresa', 'Frambuesa', 'Zarzamora', 'Arandano', 'Higo', 'Aguacate', 'Esparrago'] },
        { s: '.product-title-row h2', v: ['🍓 Fresa', '🍒 Frambuesa', '🍇 Zarzamora', '🍇 Arandano', '🍈 Higo', '🥑 Aguacate', '🌿 Esparrago'] },
        { s: '.product-valor-label', v: '<span>💡</span> Nuestro valor', all: true },
        { s: '.clients-strip-header .badge', v: 'Nuestros clientes' },
        { s: '.clients-strip-header h2', v: 'Presentes en los mejores supermercados del mundo' },
        { s: '.clients-strip-header p', v: 'Nuestros productos llevan frescura a las cadenas de retail internacionales mas exigentes.' },
        { s: '.cta-actions a:nth-child(2)', v: 'Disponibilidad', mode: 'text' }
      ],
      en: [
        { s: '.products-subnav .pnav-label', v: ['Strawberry', 'Raspberry', 'Blackberry', 'Blueberry', 'Fig', 'Avocado', 'Asparagus'] },
        { s: '.product-title-row h2', v: ['🍓 Strawberry', '🍒 Raspberry', '🍇 Blackberry', '🍇 Blueberry', '🍈 Fig', '🥑 Avocado', '🌿 Asparagus'] },
        { s: '.ptype-conv', v: '✓ Conventional', all: true },
        { s: '.ptype-org', v: '🌱 Organic', all: true },
        { s: '.product-valor-label', v: '<span>💡</span> Our value', all: true },
        { s: '.clients-strip-header .badge', v: 'Our clients' },
        { s: '.clients-strip-header h2', v: 'Present in the world\'s top supermarkets' },
        { s: '.clients-strip-header p', v: 'Our products bring freshness to the most demanding international retail chains.' },
        { s: '.cta-actions a:nth-child(2)', v: 'Availability', mode: 'text' }
      ]
    },

    'carreras.html': {
      es: [
        { s: '.hero h1', v: 'Tu siguiente gran paso comienza en <em>FreshKampo</em>' },
        { s: '.hero-stats .hero-stat-label', v: ['Colaboradores globales', 'Anos de plataforma de negocio', 'Regiones con operacion activa'] },
        { s: '.hero-card-title', v: 'Mision FreshKampo' },
        { s: '.hero-card-copy', v: 'Generamos un impacto positivo al ofrecer berries y productos frescos de alta calidad, saludables y confiables.' },
        { s: '.hero-card-list li', v: ['Ejecucion con enfoque en resultados', 'Promocion interna y crecimiento real', 'Trabajo colaborativo con proposito'] },
        { s: '.hero-products-mini-title', v: 'Areas con vacantes frecuentes' },
        { s: '.hero-chip', v: ['Comercial', 'Operaciones', 'Calidad', 'Logistica', 'Finanzas', 'Talento Humano'] },

        { s: '.mv-tag', v: ['Mision', 'Vision'] },
        { s: '.benefits-infographic-card figcaption', v: ['Pilares estrategicos y propuesta de valor FreshKampo.', 'Cultura, ejecucion y talento en movimiento.'] },
        { s: '.identity-block h3', v: ['Valores', 'Pilares estrategicos'] },
        { s: '.identity-block p', v: [
          'Cada dia vivimos nuestros valores. Buscamos talento que refleje estos comportamientos y quiera trabajar con personas que actuan igual.',
          'Estamos en el mercado desde 2004 y hemos construido una plataforma solida. Trabajar en FreshKampo es construir sobre bases firmes.'
        ] },

        { s: '#equipo .badge', v: 'Areas de oportunidad' },
        { s: '#equipo .btn.btn-outline', v: 'Postularme', mode: 'text' },
        { s: '#equipo .product-card-title', v: ['Comercial', 'Calidad e Inocuidad', 'Logistica', 'Operaciones', 'Finanzas', 'Talento Humano'] },
        { s: '#equipo .product-card-desc', v: [
          'Gestiona cuentas estrategicas, precios y expansion en mercados internacionales.',
          'Asegura estandares globales, auditorias y mejora continua en toda la cadena.',
          'Coordina flujos criticos de empaque, transporte y entrega con precision operativa.',
          'Ejecuta procesos de alto ritmo con indicadores claros y enfoque en productividad.',
          'Convierte datos en decisiones rentables para sostener el crecimiento global.',
          'Atrae, desarrolla y acompana perfiles que elevan el nivel de la organizacion.'
        ] },

        { s: '#proceso .badge', v: 'Como avanzamos contigo' },
        { s: '.why-feature-title', v: ['Postulacion estructurada', 'Entrevistas con lideres', 'Oferta y objetivos', 'Onboarding metodico'] },
        { s: '.why-feature-desc', v: [
          'Revisamos tu perfil contra criterios del rol, nivel de experiencia y potencial de crecimiento.',
          'Evaluamos capacidad de ejecucion, criterio y ajuste cultural con el equipo.',
          'Definimos expectativas claras, responsabilidades y metricas de exito.',
          'Tus primeros 90 dias siguen una ruta definida con acompanamiento cercano.'
        ] },

        { s: '.vchain-eyebrow', v: 'Ruta de contratacion' },
        { s: '.vchain-title', v: '4 etapas para unirte al equipo' },

        { s: '.benefit-title', v: [
          'Compensacion competitiva',
          '52 semanas al ano',
          'Flexibilidad remota',
          'Crecimiento profesional',
          'Aprende de los mejores',
          '0 a 100 en tiempo record',
          'Bienestar fisico y mental'
        ] },
        { s: '.benefit-desc', v: [
          'Sueldos por encima de la industria, bonos por desempeno y prestaciones completas.',
          'Estabilidad laboral durante todo el ano para planear tu vida y carrera con certidumbre.',
          'Esquemas hibridos segun el rol, con enfoque total en resultados y productividad.',
          'Plan de carrera formal, capacitacion continua y metodo de desarrollo estructurado.',
          'Programas de mentoria con coaches internos y feedback continuo formal.',
          'Plan de integracion y capacitacion estructurado para tus primeros 90 dias.',
          'Programas de bienestar, deporte y acompanamiento psicologico profesional.'
        ] },

        { s: '.contact-office-region', v: ['Etapa 1', 'Etapa 2', 'Etapa 3'] },
        { s: '.careers-step-time', v: ['2-4 dias', '5-8 dias', '7-10 dias'] },
        { s: '.contact-office-detail', v: [
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg> Completa el formulario con informacion clara, logros medibles y tu area de interes.',
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> Revisamos tu ajuste tecnico y cultural para asegurar una buena coincidencia con el rol.',
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Si hay compatibilidad, avanzamos a oferta y onboarding con objetivos definidos para tus primeros 90 dias.'
        ] },
        { s: '.careers-step-tip', v: [
          'Incluye resultados concretos para acelerar tu evaluacion.',
          'Recibiras retroalimentacion y siguientes pasos con claridad.',
          'Estaremos contigo de cerca en toda la integracion.'
        ] },

        { s: 'label[for="asunto"]', v: 'Area de interes <span>*</span>' },
        { s: '#asunto option', v: ['- Selecciona -', 'Comercial', 'Operaciones', 'Calidad e Inocuidad', 'Logistica', 'Finanzas', 'Talento Humano'] },

        { s: '#yt-modal', attr: 'aria-label', v: 'Video FreshKampo' },
        { s: '#yt-modal-close', attr: 'aria-label', v: 'Cerrar video' }
      ],
      en: [
        { s: '.hero h1', v: 'Your next big step starts at <em>FreshKampo</em>' },
        { s: '.hero-stats .hero-stat-label', v: ['Global team members', 'Years of business platform', 'Regions with active operations'] },
        { s: '.hero-card-title', v: 'FreshKampo Mission' },
        { s: '.hero-card-copy', v: 'We create positive impact by offering high-quality, fresh, healthy, and trustworthy berries and produce.' },
        { s: '.hero-card-list li', v: ['Execution with a results-driven mindset', 'Internal promotion and real career growth', 'Purpose-driven collaborative work'] },
        { s: '.hero-products-mini-title', v: 'Areas with frequent openings' },
        { s: '.hero-chip', v: ['Commercial', 'Operations', 'Quality', 'Logistics', 'Finance', 'Human Resources'] },

        { s: '.mv-tag', v: ['Mission', 'Vision'] },
        { s: '.benefits-infographic-card figcaption', v: ['Strategic pillars and FreshKampo value proposition.', 'Culture, execution, and talent in motion.'] },
        { s: '.identity-block h3', v: ['Values', 'Strategic pillars'] },
        { s: '.identity-block p', v: [
          'Every day we live our values. We seek talent that reflects these behaviors and wants to work alongside people who act the same way.',
          'We have been in the market since 2004 and built a solid platform. Working at FreshKampo means building on strong foundations.'
        ] },

        { s: '#equipo .badge', v: 'Areas of opportunity' },
        { s: '#equipo .btn.btn-outline', v: 'Apply', mode: 'text' },
        { s: '#equipo .product-card-title', v: ['Commercial', 'Quality &amp; Food Safety', 'Logistics', 'Operations', 'Finance', 'Human Resources'] },
        { s: '#equipo .product-card-desc', v: [
          'Manage strategic accounts, pricing, and expansion in international markets.',
          'Ensure global standards, audits, and continuous improvement across the full chain.',
          'Coordinate critical packing, transport, and delivery flows with operational precision.',
          'Execute high-pace processes with clear indicators and productivity focus.',
          'Turn data into profitable decisions that sustain global growth.',
          'Attract, develop, and support profiles that raise the organization\'s standards.'
        ] },

        { s: '#proceso .badge', v: 'How we move forward with you' },
        { s: '.why-feature-title', v: ['Structured application', 'Interviews with leaders', 'Offer &amp; objectives', 'Methodical onboarding'] },
        { s: '.why-feature-desc', v: [
          'We review your profile against role criteria, experience level, and growth potential.',
          'We evaluate execution ability, judgment, and team cultural fit.',
          'We define clear expectations, responsibilities, and measurable success metrics.',
          'Your first 90 days follow a defined roadmap with close support.'
        ] },

        { s: '.vchain-eyebrow', v: 'Hiring roadmap' },
        { s: '.vchain-title', v: '4 steps to join the team' },

        { s: '.benefit-title', v: [
          'Competitive compensation',
          '52 weeks a year',
          'Remote flexibility',
          'Professional growth',
          'Learn from the best',
          '0 to 100 in record time',
          'Physical &amp; mental well-being'
        ] },
        { s: '.benefit-desc', v: [
          'Above-industry salaries, performance bonuses, and full statutory benefits.',
          'Year-round employment stability so you can plan your life and career with confidence.',
          'Hybrid arrangements by role, with full focus on results and productivity.',
          'Formal career path, ongoing training, and a structured development method.',
          'Mentoring programs with internal coaches and ongoing formal feedback.',
          'Formal onboarding and training plan structured for your first 90 days.',
          'Wellness programs, sports activities, and psychological support services.'
        ] },

        { s: '.contact-office-region', v: ['Stage 1', 'Stage 2', 'Stage 3'] },
        { s: '.careers-step-time', v: ['2-4 days', '5-8 days', '7-10 days'] },
        { s: '.contact-office-detail', v: [
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg> Complete the form with clear information, measurable achievements, and your area of interest.',
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> We review your technical and cultural fit to ensure a strong match with the role.',
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> If there\'s a match, we move to offer and onboarding with defined objectives for your first 90 days.'
        ] },
        { s: '.careers-step-tip', v: [
          'Include concrete results to speed up your evaluation.',
          'You will receive clear feedback and next steps.',
          'We will stay close to you throughout integration.'
        ] },

        { s: 'label[for="asunto"]', v: 'Area of interest <span>*</span>' },
        { s: '#asunto option', v: ['- Select -', 'Commercial', 'Operations', 'Quality &amp; Food Safety', 'Logistics', 'Finance', 'Human Resources'] },

        { s: '#yt-modal', attr: 'aria-label', v: 'FreshKampo video' },
        { s: '#yt-modal-close', attr: 'aria-label', v: 'Close video' }
      ]
    },

    'aviso-privacidad.html': {
      es: [
        { s: '.breadcrumb a', v: 'Inicio', mode: 'text' },
        { s: '.breadcrumb span', v: 'Aviso de Privacidad', mode: 'text' },
        { s: '.page-hero h1', v: 'Aviso de Privacidad', mode: 'text' },
        { s: '.page-hero p', v: 'Meridian Fruits SPR de RL de CV', mode: 'text' },
        { s: '.prose h3', v: [
          '1. Responsable del tratamiento',
          '2. Datos personales que recabamos',
          '3. Finalidades del tratamiento',
          '4. Transferencia de datos personales',
          '5. Derechos ARCO',
          '6. Uso de cookies',
          '7. Cambios al aviso de privacidad',
          '8. Linea Etica'
        ] },
        { s: '.prose p:last-child', v: 'Ultima actualizacion: Enero 2026. © 2026 FreshKampo - Meridian Fruits SPR de RL de CV.' }
      ],
      en: [
        { s: '.breadcrumb a', v: 'Home', mode: 'text' },
        { s: '.breadcrumb span', v: 'Privacy Notice', mode: 'text' },
        { s: '.page-hero h1', v: 'Privacy Notice', mode: 'text' },
        { s: '.page-hero p', v: 'Meridian Fruits SPR de RL de CV', mode: 'text' },

        { s: '.prose > p:first-child', v: 'In compliance with the Federal Law on Protection of Personal Data Held by Private Parties and its regulations, MERIDIAN FRUITS SPR DE RL DE CV ("FreshKampo"), with address at Km 0.5 Carr. Periban Los Reyes, SN, Los Camichines, 60440, Periban, Michoacan, Mexico, provides this Privacy Notice.' },
        { s: '.prose h3', v: [
          '1. Data controller',
          '2. Personal data we collect',
          '3. Processing purposes',
          '4. Transfer of personal data',
          '5. ARCO rights',
          '6. Use of cookies',
          '7. Changes to this privacy notice',
          '8. Ethics Hotline'
        ] },

        { s: '.prose h3:nth-of-type(1) + p', v: 'FreshKampo is responsible for the use and protection of your personal data. We inform you of the following:' },
        { s: '.prose h3:nth-of-type(1) + p + ul li', v: [
          '<strong>Company name:</strong> Meridian Fruits SPR de RL de CV',
          '<strong>Address:</strong> Km 0.5 Carr. Periban Los Reyes, SN, Los Camichines, 60440, Periban, Mich., Mexico',
          '<strong>Phone:</strong> +52 (354) 551-2416'
        ] },

        { s: '.prose h3:nth-of-type(2) + p', v: 'For the purposes stated in this privacy notice, we may collect your personal data in different ways: when you provide it directly, when you visit our website or use online services, and when we obtain data from other lawful sources.' },
        { s: '.prose h3:nth-of-type(2) + p + p', v: 'Personal data we may collect includes:' },
        { s: '.prose h3:nth-of-type(2) + p + p + ul li', v: [
          'Full name',
          'Email address',
          'Contact phone number',
          'Company name and details',
          'Postal address',
          'Professional and employment information'
        ] },

        { s: '.prose h3:nth-of-type(3) + p', v: 'Your personal data will be used for the following purposes:' },
        { s: '.prose h3:nth-of-type(3) + p + ul li', v: [
          'Respond to information requests about our products and services',
          'Manage commercial relationships with customers and suppliers',
          'Process job applications and human resources management',
          'Comply with legal and contractual obligations',
          'Send commercial and marketing communications (with prior consent)',
          'Improve our services and user experience'
        ] },

        { s: '.prose h3:nth-of-type(4) + p', v: 'FreshKampo does not share, sell, assign, or transfer your personal data to third parties without consent, except in cases provided by law or when necessary to comply with legal or contractual obligations.' },
        { s: '.prose h3:nth-of-type(5) + p', v: 'You have the right to Access, Rectify, Cancel, or Oppose (ARCO) the processing of your personal data under applicable law.' },
        { s: '.prose h3:nth-of-type(5) + p + p', v: 'To exercise ARCO rights, send a request to our privacy department by email or directly at our offices with the information required by law.' },
        { s: '.prose h3:nth-of-type(6) + p', v: 'Our website may use cookies and tracking technologies to improve your experience. You may configure your browser to reject cookies, although some functionalities may be affected.' },
        { s: '.prose h3:nth-of-type(7) + p', v: 'We reserve the right to update this privacy notice at any time due to legal updates, internal policies, or new service requirements. Changes will be published on our website.' },
        { s: '.prose h3:nth-of-type(8) + p', v: 'To report any issue related to your personal data or any irregularity, please use our <a href="https://alzalavozfreshkampo.ethicsglobal.com/" target="_blank" rel="noopener" style="color:var(--c-primary);font-weight:600;">FreshKampo Ethics Hotline</a>.' },
        { s: '.prose p:last-child', v: 'Last update: January 2026. © 2026 FreshKampo - Meridian Fruits SPR de RL de CV.' }
      ]
    }
  };

  function currentPageName() {
    var path = window.location.pathname || '';
    var parts = path.split('/').filter(Boolean);
    if (!parts.length) return 'index.html';
    return parts[parts.length - 1].toLowerCase();
  }

  function setNodeValue(node, value, mode, attr) {
    if (attr) {
      node.setAttribute(attr, value);
      if (attr === 'value') node.value = value;
      return;
    }
    if (mode === 'text') {
      node.textContent = value;
      return;
    }
    node.innerHTML = value;
  }

  function applyRules(rules) {
    if (!Array.isArray(rules)) return;

    rules.forEach(function (rule) {
      if (!rule || !rule.s) return;
      var nodes = Array.prototype.slice.call(document.querySelectorAll(rule.s));
      if (!nodes.length) return;

      var mode = rule.mode || 'html';
      var attr = rule.attr || '';

      if (Array.isArray(rule.v)) {
        rule.v.forEach(function (value, index) {
          if (nodes[index]) setNodeValue(nodes[index], value, mode, attr);
        });
        return;
      }

      if (rule.all) {
        nodes.forEach(function (node) {
          setNodeValue(node, rule.v, mode, attr);
        });
        return;
      }

      setNodeValue(nodes[0], rule.v, mode, attr);
    });
  }

  function resolveLang(explicitLang) {
    if (explicitLang === 'es' || explicitLang === 'en') return explicitLang;
    return document.documentElement.lang === 'en' ? 'en' : 'es';
  }

  function applyPageI18n(lang) {
    var page = currentPageName();
    var config = PAGE_RULES[page];
    if (!config) return;

    var resolvedLang = resolveLang(lang);
    var rules = config[resolvedLang] || config.es || [];
    applyRules(rules);
  }

  document.addEventListener('fk:lang-changed', function (event) {
    var lang = event && event.detail ? event.detail.lang : null;
    applyPageI18n(lang);
  });

  document.addEventListener('DOMContentLoaded', function () {
    applyPageI18n(null);
  });
})();
