/* ============================================================
   FRESHKAMPO 2026 — Shared Header/Footer Injector
   Injects nav + footer + modal into inner pages automatically
   ============================================================ */

(function () {
  /* Detect path depth for assets (inner pages need ../ prefix) */
  function assetPath(path) {
    var depth = window.location.pathname.split('/').filter(function(s){ return s; }).length;
    /* If on root or just one level, assets are in assets/ directly */
    return path;
  }

  const CERTS = [
    {img:'assets/img/logo-certificado-01.png', alt:'ISO 9001'},
    {img:'assets/img/logo-certificado-02.png', alt:'Primus GFS'},
    {img:'assets/img/logo-certificado-03.png', alt:'IFS Food'},
    {img:'assets/img/logo-certificado-04.jpg', alt:'NOP USDA Organic'},
    {img:'assets/img/logo-certificado-05.jpg', alt:'EU Organic'},
    {img:'assets/img/logo-certificado-06.jpg', alt:'COR Canadá'},
    {img:'assets/img/logo-certificado-07.jpg', alt:'LPO Francia'},
    {img:'assets/img/certificaciones-09.png',  alt:'SMETA'},
    {img:'assets/img/logo-certificado-09.png', alt:'Rainforest Alliance'},
  ];

  const WHATSAPP_CTA = `
<div class="whatsapp-widget">
  <div class="whatsapp-message" role="status" aria-live="polite" aria-atomic="true" aria-hidden="true">
    <button class="whatsapp-message-close" type="button" data-i18n-aria-label="whatsapp-close-label" aria-label="Cerrar mensaje">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"/></svg>
    </button>
    <span class="whatsapp-message-kicker">FreshKampo</span>
    <p data-whatsapp-message></p>
  </div>
  <a class="floating-whatsapp" href="https://wa.me/15593857123" target="_blank" rel="noopener noreferrer" data-i18n-aria-label="whatsapp-accessible-label" aria-label="Contacta a FreshKampo por WhatsApp">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/><path d="M9.5 9.5c.4 2.2 2.2 4 4.5 4.5"/></svg>
    <span class="whatsapp-accessible-label" data-i18n="whatsapp-cta">Contáctanos</span>
  </a>
</div>`;

  function buildCertTicker() {
    /* Double items for seamless loop */
    var all = CERTS.concat(CERTS);
    return all.map(function(c){
      return '<img src="' + c.img + '" alt="' + c.alt + '" class="trust-cert-img" title="' + c.alt + '">';
    }).join('');
  }

  const NAV_HTML = `
<nav class="nav" role="navigation" aria-label="Main navigation">
  <div class="container">
    <a href="index.html" class="nav-logo" aria-label="FreshKampo home">
      <img src="assets/img/logo-freshkampo-white.svg" alt="FreshKampo" class="nav-logo-img" onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
      <span class="nav-logo-text" style="display:none">Fresh<span>Kampo</span></span>
    </a>
    <ul id="site-nav-menu" class="nav-menu">
      <li class="nav-item"><a href="index.html" class="nav-link"><span data-i18n="nav-home">Inicio</span></a></li>
      <li class="nav-item">
        <a href="productos.html" class="nav-link" aria-haspopup="true">
          <span data-i18n="nav-products">Productos</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" width="14" height="14"><polyline points="6 9 12 15 18 9"/></svg>
        </a>
        <div class="dropdown">
          <a href="productos.html" class="dropdown-link"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><circle cx="11" cy="11" r="8"/><circle cx="11" cy="11" r="3"/></svg><span data-i18n="nav-fruit">Fruta</span></a>
          <a href="disponibilidad.html" class="dropdown-link"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg><span data-i18n="nav-availability">Disponibilidad</span></a>
        </div>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link" aria-haspopup="true">
          <span data-i18n="nav-why">¿Por qué FreshKampo?</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" width="14" height="14"><polyline points="6 9 12 15 18 9"/></svg>
        </a>
        <div class="dropdown">
          <a href="integracion-vertical.html" class="dropdown-link"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg><span data-i18n="nav-integration">Integración Vertical</span></a>
          <a href="certificaciones.html" class="dropdown-link"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg><span data-i18n="nav-certifications">Certificaciones</span></a>
          <a href="calidad-inocuidad.html" class="dropdown-link"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0 1 12 2.944a11.955 11.955 0 0 1-8.618 3.04A12.02 12.02 0 0 0 3 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg><span data-i18n="nav-quality">Calidad e Inocuidad</span></a>
          <a href="historia.html" class="dropdown-link"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg><span data-i18n="nav-history">Historia</span></a>
        </div>
      </li>
      <li class="nav-item"><a href="productores.html" class="nav-link"><span data-i18n="nav-producers">Productores</span></a></li>
      <li class="nav-item"><a href="carreras.html" class="nav-link"><span data-i18n="nav-careers">Carreras</span></a></li>
      <li class="nav-item nav-mobile-cta"><a href="contacto.html" class="nav-link nav-link-cta"><span data-i18n="nav-contact">Contáctanos</span></a></li>
      <li class="nav-item nav-social-row" aria-label="Redes sociales">
        <div class="nav-social-title">Redes sociales</div>
        <div class="nav-social-links">
          <a href="https://www.linkedin.com/company/freshkampo/" target="_blank" rel="noopener" class="nav-social-link" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
          <a href="https://www.facebook.com/FreshKampo" target="_blank" rel="noopener" class="nav-social-link" aria-label="Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
          <a href="https://www.instagram.com/freshkampo" target="_blank" rel="noopener" class="nav-social-link" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
          </a>
        </div>
      </li>
    </ul>
    <div class="nav-actions">
      <div class="lang-switcher nav-lang nav-lang-header" role="group" aria-label="Idioma / Language">
        <button class="lang-btn active" type="button" data-lang="es" aria-label="Español">ES</button>
        <button class="lang-btn" type="button" data-lang="en" aria-label="English">EN</button>
      </div>
      <a href="contacto.html" class="btn btn-primary" data-i18n="nav-contact">Contáctanos</a>
      <button class="nav-toggle" type="button" aria-label="Toggle menu" aria-controls="site-nav-menu" aria-expanded="false"><span></span><span></span><span></span></button>
    </div>
  </div>
</nav>`;

  const FOOTER_HTML = `
<footer role="contentinfo">
  <div class="container">
    <div class="footer-top">
      <div class="footer-brand">
        <div class="footer-logo">
          <img src="assets/img/logo-footer.svg" alt="FreshKampo" onerror="this.outerHTML='<span>Fresh<span style=\'color:var(--c-accent)\'>Kampo</span></span>'">
        </div>
        <p class="footer-desc" data-i18n="footer-desc">Comercializamos productos frescos de alta calidad, conectando los mejores campos de México con el mundo.</p>
        <div class="footer-social">
          <a href="https://www.linkedin.com/company/freshkampo/" target="_blank" rel="noopener" class="footer-social-btn" aria-label="LinkedIn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></a>
          <a href="https://www.facebook.com/FreshKampo" target="_blank" rel="noopener" class="footer-social-btn" aria-label="Facebook"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
          <a href="https://www.instagram.com/freshkampo" target="_blank" rel="noopener" class="footer-social-btn" aria-label="Instagram"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
        </div>
      </div>
      <div>
        <div class="footer-col-title" data-i18n="footer-col1">Productos</div>
        <nav class="footer-links">
          <a href="productos.html" class="footer-link" data-i18n="footer-link-fruit">Fruta fresca</a>
          <a href="disponibilidad.html" class="footer-link" data-i18n="footer-link-availability">Disponibilidad</a>
        </nav>
      </div>
      <div>
        <div class="footer-col-title" data-i18n="footer-col2">Empresa</div>
        <nav class="footer-links">
          <a href="integracion-vertical.html" class="footer-link" data-i18n="footer-link-integration">Integración Vertical</a>
          <a href="certificaciones.html" class="footer-link" data-i18n="footer-link-certs">Certificaciones</a>
          <a href="historia.html" class="footer-link" data-i18n="footer-link-history">Historia</a>
          <a href="productores.html" class="footer-link" data-i18n="footer-link-producers">Productores</a>
          <a href="carreras.html" class="footer-link" data-i18n="footer-link-careers">Carreras</a>
          <a href="contacto.html" class="footer-link" data-i18n="footer-link-contact">Contacto</a>
        </nav>
      </div>
      <div>
        <div class="footer-col-title" data-i18n="footer-col3">Legal</div>
        <nav class="footer-links">
          <a href="aviso-privacidad.html" class="footer-link" data-modal="privacy" data-i18n="footer-link-privacy">Aviso de Privacidad</a>
          <a href="#" class="footer-link" data-modal="quality" data-i18n="footer-link-quality">Política de Calidad</a>
        </nav>
      </div>
    </div>
    <div class="footer-bottom">
      <span data-i18n="footer-copy">© 2026 FreshKampo — Meridian Fruits SPR de RL de CV. Todos los derechos reservados.</span>
    </div>
  </div>
</footer>`;

  const MODAL_HTML = `
<div id="qualityModal" class="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="modal-title">
  <div class="modal modal-policy">
    <div class="modal-header">
      <div class="modal-header-top">
        <span class="modal-badge" data-i18n="modal-badge">Política de Calidad &amp; Inocuidad</span>
        <button class="modal-close" data-i18n-aria-label="modal-close-label" aria-label="Cerrar">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>
      <div class="modal-header-identity">
        <div class="modal-header-shield">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="var(--c-accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="22" height="22"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
        </div>
        <div>
          <h2 id="modal-title" class="modal-title" data-i18n="modal-title">FreshKampo</h2>
          <p class="modal-subtitle" data-i18n="modal-subtitle">Meridian Fruits SPR de RL de CV</p>
        </div>
      </div>
      <div class="modal-header-meta" aria-hidden="true">
        <span class="modal-header-pill">Certificaciones vigentes</span>
        <span class="modal-header-pill">Gestión integral de riesgos</span>
      </div>
    </div>

    <div class="modal-body">
      <div class="modal-intro-card">
        <p data-i18n="modal-intro">En MERIDIAN FRUITS SPR DE RL de CV, comercializamos productos frescos para el deleite de nuestros clientes y consumidores con nuestro firme compromiso de satisfacer sus requerimientos y expectativas. Comprometidos con la calidad e inocuidad de nuestros productos en toda la cadena de suministro y con la mejora continua basados en los siguientes principios:</p>
      </div>

      <div class="modal-block">
        <div class="modal-section-head">
          <span class="modal-section-eyebrow">Principios rectores</span>
        </div>
        <div class="modal-principles">
          <div class="principle-item">
            <div class="principle-num">1</div>
            <div class="principle-body">
              <strong class="principle-title">Desarrollo de productores</strong>
              <p class="principle-text" data-i18n="principle1">Desarrollamos productores confiables, brindando acompañamiento todo el ciclo de producción.</p>
            </div>
          </div>
          <div class="principle-item">
            <div class="principle-num">2</div>
            <div class="principle-body">
              <strong class="principle-title">Libertad de operar</strong>
              <p class="principle-text" data-i18n="principle2">Asegurar la libertad de operar a través del cumplimiento de la normativa aplicable y de la excelencia de nuestros sistemas de calidad para mantener la confianza con nuestros clientes.</p>
            </div>
          </div>
          <div class="principle-item">
            <div class="principle-num">3</div>
            <div class="principle-body">
              <strong class="principle-title">Cadena de suministro eficiente</strong>
              <p class="principle-text" data-i18n="principle3">Comprometidos con una cadena de suministros eficiente a través de una gestión efectiva de nuestros procesos operativos y evaluando riesgos de manera constante.</p>
            </div>
          </div>
          <div class="principle-item">
            <div class="principle-num">4</div>
            <div class="principle-body">
              <strong class="principle-title">Seguridad de la información</strong>
              <p class="principle-text" data-i18n="principle4">Implementamos políticas y controles de seguridad en nuestros procesos, con un buen uso de herramientas tecnológicas disponibles que respaldan la integridad, confidencialidad y disponibilidad de la información.</p>
            </div>
          </div>
          <div class="principle-item">
            <div class="principle-num">5</div>
            <div class="principle-body">
              <strong class="principle-title">Ambiente laboral</strong>
              <p class="principle-text" data-i18n="principle5">Promovemos un ambiente positivo y espacio laboral seguro.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="modal-block">
        <div class="modal-section-head">
          <span class="modal-section-eyebrow">Certificaciones vigentes</span>
        </div>
        <div class="modal-cert-grid">
          <div class="modal-cert-item">
            <img src="assets/img/logo-cert-primus.png" alt="Primus GFS" loading="lazy">
            <span>Primus GFS</span>
          </div>
          <div class="modal-cert-item">
            <img src="assets/img/logo-cert-primus-gap.png" alt="Global G.A.P." loading="lazy">
            <span>Global G.A.P.</span>
          </div>
          <div class="modal-cert-item">
            <img src="assets/img/logo-cert-ifs.png" alt="IFS Broker" loading="lazy">
            <span>IFS Broker</span>
          </div>
          <div class="modal-cert-item">
            <img src="assets/img/logo-cert-iso9001.png" alt="ISO 9001" loading="lazy">
            <span>ISO 9001</span>
          </div>
        </div>
      </div>

      <div class="modal-meta-bar">
        <div class="modal-meta-item">
          <span class="modal-meta-label">Fecha de emisión</span>
          <strong class="modal-meta-value" data-i18n="modal-date">20 de mayo de 2026</strong>
        </div>
        <div class="modal-meta-sep"></div>
        <div class="modal-meta-item">
          <span class="modal-meta-label">Versión</span>
          <strong class="modal-meta-value" data-i18n="modal-version">Versión 3</strong>
        </div>
        <div class="modal-meta-sep"></div>
        <div class="modal-meta-item">
          <span class="modal-meta-label">Empresa</span>
          <strong class="modal-meta-value">Meridian Fruits SPR de RL de CV</strong>
        </div>
      </div>
    </div>

    <div class="modal-actions">
      <button class="btn btn-primary modal-action-close" style="width:100%;justify-content:center;gap:.6rem;" data-i18n="modal-close-btn">
        Cerrar
      </button>
    </div>
  </div>
</div>`;

  const PRIVACY_MODAL_HTML = `
<div id="privacyModal" class="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="privacy-modal-title">
  <div class="modal modal-policy privacy-modal">
    <div class="modal-header">
      <div class="modal-header-top">
        <span class="modal-badge" data-i18n="privacy-modal-badge">Documento legal</span>
        <button class="modal-close" type="button" data-i18n-aria-label="modal-close-label" aria-label="Cerrar">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>
      <div class="modal-header-identity">
        <div class="modal-header-shield" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="var(--c-accent)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="22" height="22"><path d="M12 3 19 6v5c0 4.8-3 8-7 10-4-2-7-5.2-7-10V6l7-3Z"/><path d="M9 12h6M12 9v6"/></svg>
        </div>
        <div>
          <h2 id="privacy-modal-title" class="modal-title" data-i18n="privacy-modal-title">Aviso de Privacidad</h2>
          <p class="modal-subtitle" data-i18n="privacy-modal-subtitle">Documento oficial en español</p>
        </div>
      </div>
    </div>
    <div class="modal-body privacy-content" lang="es">
      <p class="privacy-copy">En cumplimiento con lo dispuesto por la <strong>Ley Federal de Protección de Datos Personales en Posesión de los Particulares</strong> (LFPDPPP) y su Reglamento, <strong>MERIDIAN FRUITS SPR DE RL DE CV</strong> (en adelante "FreshKampo"), con domicilio en Km 0.5 Carr. Peribán Los Reyes, SN, Los Camichines, 60440, Peribán, Michoacán, México, pone a su disposición el presente Aviso de Privacidad.</p>

      <section class="privacy-section">
        <h3>1. Responsable del tratamiento</h3>
        <p>FreshKampo es responsable del uso y protección de sus datos personales, y al respecto le informamos lo siguiente:</p>
        <ul>
          <li><strong>Razón social:</strong> Meridian Fruits SPR de RL de CV</li>
          <li><strong>Domicilio:</strong> Km 0.5 Carr. Peribán Los Reyes, SN, Los Camichines, 60440, Peribán, Mich., México</li>
          <li><strong>Teléfono:</strong> +52 (354) 551-2416</li>
        </ul>
      </section>

      <section class="privacy-section">
        <h3>2. Datos personales que recabamos</h3>
        <p>Para las finalidades señaladas en este aviso de privacidad, podemos recabar sus datos personales de distintas formas: cuando usted nos los proporciona directamente, cuando visita nuestro sitio de internet o utiliza nuestros servicios en línea, y cuando obtenemos información a través de otras fuentes que están permitidas por la ley.</p>
        <p>Los datos personales que podemos recabar incluyen:</p>
        <ul>
          <li>Nombre completo</li>
          <li>Correo electrónico</li>
          <li>Teléfono de contacto</li>
          <li>Nombre y datos de la empresa</li>
          <li>Dirección postal</li>
          <li>Información profesional y laboral</li>
        </ul>
      </section>

      <section class="privacy-section">
        <h3>3. Finalidades del tratamiento</h3>
        <p>Sus datos personales serán utilizados para las siguientes finalidades:</p>
        <ul>
          <li>Atender solicitudes de información sobre nuestros productos y servicios</li>
          <li>Gestionar relaciones comerciales con clientes y proveedores</li>
          <li>Procesar solicitudes de empleo y gestión de recursos humanos</li>
          <li>Dar cumplimiento a obligaciones legales y contractuales</li>
          <li>Enviar comunicaciones comerciales y de marketing (con su consentimiento previo)</li>
          <li>Mejorar nuestros servicios y experiencia de usuario</li>
        </ul>
      </section>

      <section class="privacy-section">
        <h3>4. Transferencia de datos personales</h3>
        <p>FreshKampo no comparte, vende, cede ni transfiere sus datos personales a terceros sin su consentimiento, salvo en los casos previstos en el artículo 37 de la LFPDPPP o cuando resulte necesario para dar cumplimiento a obligaciones contractuales o legales.</p>
      </section>

      <section class="privacy-section">
        <h3>5. Derechos ARCO</h3>
        <p>Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las condiciones del uso que les damos (Acceso). Asimismo, es su derecho solicitar la corrección de su información personal en caso de que esté desactualizada, sea inexacta o incompleta (Rectificación); que la eliminemos de nuestros registros o bases de datos cuando considere que la misma no está siendo utilizada conforme a los principios, deberes y obligaciones previstas en la normativa (Cancelación); así como oponerse al uso de sus datos personales para fines específicos (Oposición). Estos derechos se conocen como los derechos ARCO.</p>
        <p>Para ejercer cualquiera de los derechos ARCO, usted deberá enviar una solicitud al correo electrónico de nuestro departamento de privacidad o directamente a nuestras oficinas, con la información requerida por la ley.</p>
      </section>

      <section class="privacy-section">
        <h3>6. Uso de cookies</h3>
        <p>Nuestro sitio web puede utilizar cookies y otras tecnologías de seguimiento para mejorar la experiencia del usuario. Puede configurar su navegador para rechazar cookies, aunque esto podría afectar algunas funcionalidades del sitio.</p>
      </section>

      <section class="privacy-section">
        <h3>7. Cambios al aviso de privacidad</h3>
        <p>Nos reservamos el derecho de efectuar en cualquier momento modificaciones o actualizaciones al presente aviso de privacidad, en atención a novedades legislativas, políticas internas o nuevos requerimientos para la prestación u ofrecimiento de nuestros servicios o productos. Estas modificaciones estarán disponibles a través de nuestro sitio web.</p>
      </section>

      <section class="privacy-section">
        <h3>8. Línea Ética</h3>
        <p>Para reportar cualquier situación relacionada con el uso de sus datos personales o cualquier otra irregularidad, puede utilizar nuestra <a href="https://alzalavozfreshkampo.ethicsglobal.com/" target="_blank" rel="noopener noreferrer">Línea Ética FreshKampo</a>.</p>
      </section>

      <p class="privacy-updated">Última actualización: Enero 2026. © 2026 FreshKampo — Meridian Fruits SPR de RL de CV.</p>
    </div>
    <div class="modal-actions privacy-modal-actions">
      <a href="aviso-privacidad.html" class="privacy-full-link" data-i18n="privacy-modal-full">Abrir aviso completo</a>
      <button class="btn btn-primary modal-action-close" type="button" data-i18n="modal-close-btn">Cerrar</button>
    </div>
  </div>
</div>`;

  document.addEventListener('DOMContentLoaded', function () {
    // Only inject on pages that have a placeholder
    const navSlot    = document.getElementById('nav-slot');
    const footerSlot = document.getElementById('footer-slot');
    const modalSlot  = document.getElementById('modal-slot');

    if (navSlot)    navSlot.outerHTML    = NAV_HTML;
    if (footerSlot) footerSlot.outerHTML = FOOTER_HTML;
    if (modalSlot)  modalSlot.outerHTML  = MODAL_HTML + PRIVACY_MODAL_HTML;
    if (!document.querySelector('.floating-whatsapp')) {
      document.body.insertAdjacentHTML('beforeend', WHATSAPP_CTA);
    }

    /* Inject cert logos into trust ticker */
    const ticker = document.getElementById('trust-ticker');
    if (ticker) ticker.innerHTML = buildCertTicker();

  });
})();
