/* ============================================================
   FRESHKAMPO 2026 — Main Application JS
   - Splash screen
   - Navigation (mobile + dropdown)
   - Language switcher (ES / EN)
   - Scroll animations
   - Quality policy modal
   - Contact form
   ============================================================ */

(function () {
  'use strict';

  /* ─── State ─── */
  let currentLang = localStorage.getItem('fk_lang') || 'en';
  let languageTransitionTimer = 0;

  /* ─── DOM Ready ─── */
  document.addEventListener('DOMContentLoaded', function () {
    initSplash();
    initNav();
    initHeroVideo();
    initLang();
    initWhatsAppMessages();
    initScrollAnimations();
    initCounters();
    initModal();
    initForm();
    initNavScroll();
    initHeroDepthMotion();
    initContactHeroMotion();
    initContactOffices();
  });

  /* ══════════════════════════════════
     SPLASH SCREEN
  ══════════════════════════════════ */
  function initSplash() {
    const splash = document.getElementById('splash');
    if (!splash) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      splash.classList.add('hidden');
      return;
    }

    window.setTimeout(dismissSplash, 2200);
    const dismissBtn = splash.querySelector('.splash-dismiss');
    if (dismissBtn) dismissBtn.addEventListener('click', dismissSplash);
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') dismissSplash();
    });
  }

  function dismissSplash() {
    const splash = document.getElementById('splash');
    if (!splash || splash.classList.contains('hidden')) return;
    splash.classList.add('hidden');
    document.body.classList.add('splash-revealed');
  }

  /* ══════════════════════════════════
     COUNTER ANIMATION
  ══════════════════════════════════ */
  function initCounters() {
    const counters = document.querySelectorAll('[data-count]');
    if (!counters.length) return;

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        observer.unobserve(el);
        const target = parseInt(el.dataset.count, 10);
        if (Number.isNaN(target)) return;
        const suffix = el.dataset.suffix || '';
        const duration = parseInt(el.dataset.duration, 10) || 1800;
        el.classList.add('is-counting');
        const start = performance.now();
        function update(now) {
          const t = Math.min((now - start) / duration, 1);
          const val = Math.round(easeOut(t) * target);
          el.textContent = val.toLocaleString() + suffix;
          if (t < 1) {
            requestAnimationFrame(update);
          } else {
            el.classList.remove('is-counting');
          }
        }
        requestAnimationFrame(update);
      });
    }, { threshold: 0.35 });

    counters.forEach(function (el) { observer.observe(el); });
  }

  function easeOut(t) { return 1 - Math.pow(1 - t, 3); }

  function initHeroVideo() {
    const video = document.querySelector('.hero-video-bg video');
    if (!video || !window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    video.pause();
    video.removeAttribute('autoplay');
  }

  /* ══════════════════════════════════
     NAVIGATION
  ══════════════════════════════════ */
  function initNav() {
    const toggle = document.querySelector('.nav-toggle');
    const menu   = document.querySelector('.nav-menu');
    if (!toggle || !menu) return;

    var navEl           = toggle.closest('nav') || document.querySelector('.nav');
    var menuContainer   = menu.parentNode;          // .container inside <nav>
    var menuNextSibling = menu.nextElementSibling;  // .nav-actions
    var drawerOverlay   = document.querySelector('.nav-drawer-overlay');

    if (!drawerOverlay) {
      drawerOverlay = document.createElement('button');
      drawerOverlay.type = 'button';
      drawerOverlay.className = 'nav-drawer-overlay';
      drawerOverlay.setAttribute('aria-label', 'Cerrar menu');
      drawerOverlay.setAttribute('aria-hidden', 'true');
      document.body.appendChild(drawerOverlay);
    }

    /* ── Teleport helpers ──────────────────────────────────────────
       Safari / WebKit treat -webkit-backdrop-filter as a containing
       block for position:fixed descendants, collapsing the menu to
       zero height.  Moving the panel to <body> before opening fixes
       this while keeping the desktop layout intact.
    ─────────────────────────────────────────────────────────────── */
    function teleportToBody() {
      if (menu.parentNode !== document.body) {
        document.body.appendChild(menu);
      }
    }
    function returnToNav() {
      if (menu.parentNode === document.body && menuContainer) {
        menuContainer.insertBefore(menu, menuNextSibling);
      }
    }

    function setMenuTop() {
      if (navEl) { menu.style.top = navEl.getBoundingClientRect().bottom + 'px'; }
    }

    var lastScrollY = window.scrollY;

    function closeMenu(skipAnimation) {
      if (!menu.classList.contains('open') && !menu.classList.contains('closing')) return;

      menu.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      drawerOverlay.classList.remove('open');
      document.body.style.overflow = '';

      if (skipAnimation || window.innerWidth > 768) {
        menu.classList.remove('closing');
        menu.style.top = '';
        returnToNav();
      } else {
        menu.classList.add('closing');
        setTimeout(function () {
          menu.classList.remove('closing');
          menu.style.top = '';
          returnToNav();
        }, 240);
      }

      document.querySelectorAll('.nav-item.open').forEach(function (i) { i.classList.remove('open'); });
    }

    function openMenu() {
      if (window.innerWidth <= 768) {
        teleportToBody();
        drawerOverlay.classList.add('open');
      }
      setMenuTop();
      menu.classList.remove('closing');
      toggle.classList.add('open');
      menu.classList.add('open');
      toggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }

    toggle.addEventListener('click', function () {
      const isOpen = menu.classList.contains('open');
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    drawerOverlay.addEventListener('click', function () {
      closeMenu();
    });

    function closeMenuOnGesture() {
      if (window.innerWidth <= 768 && menu.classList.contains('open')) {
        closeMenu(true);
      }
    }

    drawerOverlay.addEventListener('wheel', closeMenuOnGesture, { passive: true });
    drawerOverlay.addEventListener('touchmove', closeMenuOnGesture, { passive: true });
    menu.addEventListener('wheel', closeMenuOnGesture, { passive: true });
    menu.addEventListener('touchmove', closeMenuOnGesture, { passive: true });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('open')) {
        closeMenu();
      }
    });

    document.addEventListener('click', function (e) {
      if (window.innerWidth > 768 || !menu.classList.contains('open')) return;
      if (menu.contains(e.target) || toggle.contains(e.target)) return;
      closeMenu();
    });

    menu.addEventListener('click', function (e) {
      if (window.innerWidth > 768) return;

      var clickedLink = e.target.closest('a');
      if (!clickedLink) return;

      var parentItem = clickedLink.closest('.nav-item');
      var isDropdownTrigger = clickedLink.classList.contains('nav-link') && parentItem && parentItem.querySelector('.dropdown');

      if (!isDropdownTrigger) {
        closeMenu(true);
      }
    });

    window.addEventListener('scroll', function () {
      var currentY = window.scrollY;
      if (window.innerWidth <= 768 && menu.classList.contains('open') && currentY > lastScrollY + 2) {
        closeMenu(true);
      }
      lastScrollY = currentY;
    }, { passive: true });

    // Mobile dropdowns
    document.querySelectorAll('.nav-item').forEach(function (item) {
      var link = item.querySelector('.nav-link');
      if (!link || !item.querySelector('.dropdown')) return;
      link.addEventListener('click', function (e) {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          var isOpen = item.classList.contains('open');
          document.querySelectorAll('.nav-item.open').forEach(function (o) { o.classList.remove('open'); });
          if (!isOpen) { item.classList.add('open'); }
        }
      });
    });

    // Close menu on resize to desktop — return panel to nav for flex layout
    window.addEventListener('resize', function () {
      if (window.innerWidth > 768) {
        menu.classList.remove('open', 'closing');
        menu.style.top = '';
        toggle.classList.remove('open');
        drawerOverlay.classList.remove('open');
        document.body.style.overflow = '';
        returnToNav();
        document.querySelectorAll('.nav-item').forEach(function (i) { i.classList.remove('open'); });
      }
    });

    // Active link — current page
    const current = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
    document.querySelectorAll('.nav-link, .dropdown-link').forEach(function (link) {
      const href = link.getAttribute('href') || '';
      const hrefPage = href.split('/').pop().toLowerCase();
      if (href && href !== '#' && current === hrefPage) {
        link.classList.add('active');
        // Also highlight parent nav-link if this is a dropdown-link
        const parentItem = link.closest('.nav-item');
        if (parentItem && link.classList.contains('dropdown-link')) {
          const parentLink = parentItem.querySelector('.nav-link');
          if (parentLink) parentLink.classList.add('active');
        }
      }
    });
  }

  function initNavScroll() {
    const nav = document.querySelector('.nav');
    if (!nav) return;
    function onScroll() {
      nav.classList.toggle('scrolled', window.scrollY > 20);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  function initHeroDepthMotion() {
    const scene = document.querySelector('.hero-scene');
    if (!scene || window.innerWidth <= 768 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const layers = scene.querySelectorAll('[data-depth]');
    if (!layers.length) return;

    let frame = 0;
    function updateDepth() {
      const bounds = scene.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, (window.innerHeight - bounds.top) / (window.innerHeight + bounds.height)));
      layers.forEach(function (layer) {
        const depth = Number(layer.dataset.depth);
        if (Number.isFinite(depth)) {
          layer.style.setProperty('--layer-shift', ((progress - 0.5) * depth).toFixed(2) + 'px');
        }
      });
      frame = 0;
    }

    function scheduleDepthUpdate() {
      if (frame) return;
      frame = window.requestAnimationFrame(updateDepth);
    }

    window.addEventListener('scroll', scheduleDepthUpdate, { passive: true });
    window.addEventListener('resize', scheduleDepthUpdate);
    scheduleDepthUpdate();
  }

  function initContactHeroMotion() {
    const hero = document.querySelector('.ctc-hero');
    if (!hero) return;

    let ticking = false;

    function updateMotion() {
      const rect = hero.getBoundingClientRect();
      const range = Math.max(1, rect.height + window.innerHeight * 0.35);
      const progress = Math.min(1, Math.max(0, (-rect.top) / range));
      hero.style.setProperty('--hero-scroll', progress.toFixed(3));
      ticking = false;
    }

    function onScroll() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(updateMotion);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    updateMotion();
  }

  function initContactOffices() {
    const cards = Array.from(document.querySelectorAll('.ctc-card--office'));
    if (!cards.length) return;

    const mapPins = Array.from(document.querySelectorAll('.ctc-map-pin[data-office-select]'));
    const windowEl = document.getElementById('ctcOfficeWindow');
    const imageEl = document.getElementById('ctcOfficeImage');
    const numberEl = document.getElementById('ctcOfficeNumber');
    const regionEl = document.getElementById('ctcOfficeRegion');
    const addressEl = document.getElementById('ctcOfficeAddress');
    const phoneEl = document.getElementById('ctcOfficePhone');
    const copyBtn = document.getElementById('ctcOfficeCopyBtn');
    const whatsappBtn = document.getElementById('ctcOfficeWaBtn');
    const toast = document.getElementById('ctcToast');

    let activeId = cards[0].dataset.officeId || '1';
    let toastTimer = null;

    function normalizePhone(phone) {
      return String(phone || '').replace(/[^0-9]/g, '');
    }

    function getToastMessage(type) {
      const lang = document.documentElement.lang === 'en' ? 'en' : 'es';
      const messages = {
        es: {
          copied: 'Numero copiado al portapapeles.',
          whatsapp: 'Abriendo WhatsApp de esta oficina...'
        },
        en: {
          copied: 'Number copied to clipboard.',
          whatsapp: 'Opening WhatsApp for this office...'
        }
      };
      return (messages[lang] && messages[lang][type]) || '';
    }

    function showToast(message) {
      if (!toast || !message) return;
      toast.textContent = message;
      toast.classList.add('is-visible');
      window.clearTimeout(toastTimer);
      toastTimer = window.setTimeout(function () {
        toast.classList.remove('is-visible');
      }, 1700);
    }

    function fallbackCopy(text) {
      const probe = document.createElement('textarea');
      probe.value = text;
      probe.setAttribute('readonly', 'readonly');
      probe.style.position = 'fixed';
      probe.style.opacity = '0';
      document.body.appendChild(probe);
      probe.select();

      let copied = false;
      try {
        copied = document.execCommand('copy');
      } catch (err) {
        copied = false;
      }

      document.body.removeChild(probe);
      return copied;
    }

    function copyPhoneValue(value) {
      const text = String(value || '').trim();
      if (!text) return Promise.resolve(false);

      if (navigator.clipboard && navigator.clipboard.writeText) {
        return navigator.clipboard
          .writeText(text)
          .then(function () { return true; })
          .catch(function () { return fallbackCopy(text); });
      }

      return Promise.resolve(fallbackCopy(text));
    }

    function setActiveOffice(id, shouldScrollCard) {
      const officeId = String(id);
      const card = cards.find(function (item) {
        return item.dataset.officeId === officeId;
      });
      if (!card) return;

      activeId = officeId;

      cards.forEach(function (item) {
        const isActive = item === card;
        item.classList.toggle('is-active', isActive);
        item.setAttribute('aria-pressed', isActive ? 'true' : 'false');
      });

      mapPins.forEach(function (pin) {
        pin.classList.toggle('is-active', pin.dataset.officeSelect === officeId);
      });

      const regionText = (card.querySelector('.ctc-region') || {}).textContent || '';
      const addressHtml = (card.querySelector('.ctc-address-text') || {}).innerHTML || '';
      const phoneText = card.dataset.officePhoneDisplay || ((card.querySelector('.ctc-phone-text') || {}).textContent || '');
      const phoneRaw = card.dataset.officePhoneRaw || phoneText;
      const whatsappPhone = card.dataset.officeWa || normalizePhone(phoneRaw);
      const imageSrc = card.dataset.officeImage || '';

      if (regionEl) regionEl.textContent = regionText.trim();
      if (addressEl) addressEl.innerHTML = addressHtml;
      if (phoneEl) phoneEl.textContent = phoneText.trim();
      if (numberEl) numberEl.textContent = officeId;
      if (copyBtn) copyBtn.dataset.copyPhone = phoneText.trim();
      if (whatsappBtn) whatsappBtn.href = 'https://wa.me/' + whatsappPhone;
      if (imageEl && imageSrc) {
        imageEl.src = imageSrc;
        imageEl.alt = regionText.trim();
      }

      if (windowEl) {
        windowEl.classList.remove('is-updated');
        void windowEl.offsetWidth;
        windowEl.classList.add('is-updated');
      }

      function scrollToOfficeWindow() {
        if (!windowEl) return;
        const rect = windowEl.getBoundingClientRect();
        const topOffset = 78;
        const shouldReveal = rect.top > window.innerHeight * 0.5 || rect.bottom < topOffset;
        if (!shouldReveal) return;

        window.scrollTo({
          top: window.scrollY + rect.top - topOffset,
          behavior: 'auto'
        });
      }

      if (shouldScrollCard && window.innerWidth <= 768) {
        const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        card.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'nearest' });
        scrollToOfficeWindow();
      }
    }

    document.querySelectorAll('[data-office-select]').forEach(function (trigger) {
      trigger.addEventListener('click', function (e) {
        e.preventDefault();
        setActiveOffice(trigger.dataset.officeSelect, true);
      });
    });

    cards.forEach(function (card) {
      card.addEventListener('click', function (e) {
        if (e.target.closest('.ctc-action-btn')) return;
        setActiveOffice(card.dataset.officeId, true);
      });

      card.addEventListener('keydown', function (e) {
        if (e.key !== 'Enter' && e.key !== ' ') return;
        e.preventDefault();
        setActiveOffice(card.dataset.officeId, true);
      });
    });

    document.querySelectorAll('[data-copy-phone]').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        copyPhoneValue(btn.dataset.copyPhone).then(function () {
          showToast(getToastMessage('copied'));
        });
      });
    });

    document.querySelectorAll('[data-whatsapp-link]').forEach(function (link) {
      link.addEventListener('click', function () {
        showToast(getToastMessage('whatsapp'));
      });
    });

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        window.setTimeout(function () {
          setActiveOffice(activeId, false);
        }, 0);
      });
    });

    setActiveOffice(activeId, false);
  }

  /* ══════════════════════════════════
     LANGUAGE SWITCHER
  ══════════════════════════════════ */
  function initLang() {
    applyLang(currentLang, false);

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const lang = btn.dataset.lang;
        if (lang === currentLang) return;
        currentLang = lang;
        localStorage.setItem('fk_lang', lang);
        applyLang(lang, true);
      });
    });
  }

  function applyLang(lang, animate) {
    if (typeof TRANSLATIONS === 'undefined') return;
    const dict = TRANSLATIONS[lang] || TRANSLATIONS['es'];

    if (animate) {
      document.body.classList.add('language-changing');
      window.clearTimeout(languageTransitionTimer);
    }

    // Update all [data-i18n] elements
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.dataset.i18n;
      if (dict[key] !== undefined) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = dict[key];
        } else {
          el.innerHTML = dict[key];
        }
      }
    });

    // Update all [data-i18n-href] links (for lang-aware hrefs if needed)
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      const key = el.dataset.i18nPlaceholder;
      if (dict[key] !== undefined) el.placeholder = dict[key];
    });

    document.querySelectorAll('[data-i18n-aria-label]').forEach(function (el) {
      const key = el.dataset.i18nAriaLabel;
      if (dict[key] !== undefined) el.setAttribute('aria-label', dict[key]);
    });

    // Active lang button
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Update html lang attribute
    document.documentElement.lang = lang;

    // Notify page-level translators listening for language changes
    document.dispatchEvent(new CustomEvent('fk:lang-changed', {
      detail: { lang: lang, dict: dict }
    }));

    // Update page title if data exists
    const titleEl = document.querySelector('[data-i18n-title]');
    if (titleEl) document.title = titleEl.dataset.i18nTitle.replace('{lang}', '');

    if (animate) {
      languageTransitionTimer = window.setTimeout(function () {
        document.body.classList.remove('language-changing');
      }, 340);
    }
  }

  /* ══════════════════════════════════
     SCROLL ANIMATIONS
  ══════════════════════════════════ */
  function initScrollAnimations() {
    const els = document.querySelectorAll('.reveal');
    if (!els.length) return;

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    els.forEach(function (el) { observer.observe(el); });
  }

  /* ══════════════════════════════════
     LEGAL MODALS
  ══════════════════════════════════ */
  function initModal() {
    const overlays = document.querySelectorAll('.modal-overlay');
    if (!overlays.length) return;

    let activeModal = null;
    let returnFocus = null;

    function closeActiveModal() {
      if (!activeModal) return;
      activeModal.classList.remove('open');
      activeModal = null;
      document.body.style.overflow = '';
      if (returnFocus && document.contains(returnFocus)) returnFocus.focus();
      returnFocus = null;
    }

    function showModal(overlay, trigger) {
      if (activeModal) closeActiveModal();
      activeModal = overlay;
      returnFocus = trigger;
      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
      const closeButton = overlay.querySelector('.modal-close');
      if (closeButton) {
        window.setTimeout(function () {
          if (activeModal === overlay && overlay.classList.contains('open')) closeButton.focus();
        }, 100);
      }
    }

    overlays.forEach(function (overlay) {
      overlay.querySelectorAll('.modal-close, .modal-action-close').forEach(function (button) {
        button.addEventListener('click', closeActiveModal);
      });
      overlay.addEventListener('click', function (event) {
        if (event.target === overlay) closeActiveModal();
      });
    });

    document.querySelectorAll('[data-modal]').forEach(function (trigger) {
      const modalId = trigger.dataset.modal === 'privacy' ? 'privacyModal' : 'qualityModal';
      const overlay = document.getElementById(modalId);
      if (!overlay) return;
      trigger.addEventListener('click', function (event) {
        event.preventDefault();
        showModal(overlay, trigger);
      });
    });

    document.addEventListener('keydown', function (event) {
      if (!activeModal) return;
      if (event.key === 'Escape') {
        closeActiveModal();
        return;
      }
      if (event.key !== 'Tab') return;

      const focusable = Array.from(activeModal.querySelectorAll('a[href], button:not(:disabled), [tabindex]:not([tabindex="-1"])'))
        .filter(function (element) { return element.getClientRects().length > 0; });
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    });
  }

  /* ══════════════════════════════════
     CONTEXTUAL WHATSAPP MESSAGE
  ══════════════════════════════════ */
  function initWhatsAppMessages() {
    const widget = document.querySelector('.whatsapp-widget');
    if (!widget) return;

    const bubble = widget.querySelector('.whatsapp-message');
    const message = widget.querySelector('[data-whatsapp-message]');
    const closeButton = widget.querySelector('.whatsapp-message-close');
    const link = widget.querySelector('.floating-whatsapp');
    if (!bubble || !message || !closeButton || !link) return;

    const path = window.location.pathname.toLowerCase();
    const audience = /productores|practicas-agricolas/.test(path)
      ? 'growers'
      : /carreras/.test(path)
        ? 'careers'
        : 'commercial';
    const storageKey = 'fk-wa-tip:' + audience;
    if (sessionStorage.getItem(storageKey)) return;

    const prompts = {
      es: {
        growers: [
          '¿Cultivas berries? Cuéntanos sobre tu producción y sus temporadas.',
          '¿Te interesa sumarte como productor? Hablemos de tu cultivo.',
          'Conversemos sobre tu operación agrícola y cómo podemos colaborar.'
        ],
        careers: [
          '¿Buscas una oportunidad en el sector agrícola? Escríbenos.',
          '¿Te gustaría formar parte de FreshKampo? Hablemos de oportunidades.',
          '¿Quieres trabajar con nosotros? Conversemos por WhatsApp.'
        ],
        commercial: [
          '¿Buscas fruta para tu mercado? Conversemos sobre productos y disponibilidad.',
          '¿Quieres conocer nuestra oferta de berries? Escríbenos.',
          '¿Tienes una consulta comercial? Hablemos por WhatsApp.'
        ]
      },
      en: {
        growers: [
          'Do you grow berries? Tell us about your operation and seasons.',
          'Interested in partnering as a grower? Let’s talk about your crop.',
          'Let’s discuss your farm operation and ways to work together.'
        ],
        careers: [
          'Looking for an opportunity in agriculture? Send us a message.',
          'Interested in joining FreshKampo? Let’s talk about opportunities.',
          'Would you like to work with us? Let’s connect on WhatsApp.'
        ],
        commercial: [
          'Looking for fruit for your market? Ask us about products and availability.',
          'Want to learn about our berry selection? Send us a message.',
          'Have a commercial question? Let’s talk on WhatsApp.'
        ]
      }
    };

    let lang = currentLang === 'es' ? 'es' : 'en';
    let promptIndex = Math.floor(Math.random() * prompts[lang][audience].length);
    let showTimer = 0;
    let hideTimer = 0;

    function updateMessage() {
      message.textContent = prompts[lang][audience][promptIndex];
    }

    function hideMessage() {
      window.clearTimeout(hideTimer);
      bubble.classList.remove('is-visible');
      bubble.setAttribute('aria-hidden', 'true');
    }

    function showMessage() {
      if (sessionStorage.getItem(storageKey)) return;
      if (document.visibilityState === 'hidden') return;
      if (document.querySelector('.modal-overlay.open') || document.querySelector('.nav-menu.open')) {
        showTimer = window.setTimeout(showMessage, 1800);
        return;
      }

      updateMessage();
      bubble.classList.add('is-visible');
      bubble.setAttribute('aria-hidden', 'false');
      sessionStorage.setItem(storageKey, '1');
      hideTimer = window.setTimeout(hideMessage, 7600);
    }

    closeButton.addEventListener('click', hideMessage);
    link.addEventListener('click', hideMessage);
    document.addEventListener('fk:lang-changed', function (event) {
      lang = event.detail.lang === 'es' ? 'es' : 'en';
      promptIndex = Math.floor(Math.random() * prompts[lang][audience].length);
      if (bubble.classList.contains('is-visible')) updateMessage();
    });
    document.addEventListener('visibilitychange', function () {
      if (document.visibilityState !== 'hidden' && !sessionStorage.getItem(storageKey) && !bubble.classList.contains('is-visible')) {
        window.clearTimeout(showTimer);
        showTimer = window.setTimeout(showMessage, 1400);
      }
    });

    showTimer = window.setTimeout(showMessage, 7000 + Math.random() * 8000);
  }

  /* ══════════════════════════════════
     CONTACT FORM
  ══════════════════════════════════ */
  function initForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const btn = form.querySelector('[type="submit"]');
      const original = btn.innerHTML;

      // Basic validation
      let valid = true;
      form.querySelectorAll('[required]').forEach(function (field) {
        field.classList.remove('error');
        if (!field.value.trim()) {
          field.classList.add('error');
          valid = false;
        }
      });

      if (!valid) {
        showFormMsg(form, currentLang === 'es' ? 'Por favor completa los campos requeridos.' : 'Please fill in required fields.', 'error');
        return;
      }

      // Simulate send
      btn.disabled = true;
      btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="spin"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> ' + (currentLang === 'es' ? 'Enviando...' : 'Sending...');

      setTimeout(function () {
        btn.innerHTML = original;
        btn.disabled = false;
        form.reset();
        showFormMsg(form, currentLang === 'es' ? '¡Mensaje enviado exitosamente! Te contactaremos pronto.' : 'Message sent successfully! We will contact you shortly.', 'success');
      }, 1800);
    });
  }

  function showFormMsg(form, msg, type) {
    let el = form.querySelector('.form-message');
    if (!el) {
      el = document.createElement('div');
      el.className = 'form-message';
      form.appendChild(el);
    }
    el.textContent = msg;
    el.className = 'form-message form-message-' + type;
    setTimeout(function () { el.remove(); }, 6000);
  }

  /* ══════════════════════════════════
     UTILITY: smooth scroll for anchors
  ══════════════════════════════════ */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

})();

/* ─── Inline CSS for form feedback & spin ─── */
(function () {
  const s = document.createElement('style');
  s.textContent = `
    .form-message { padding:.75rem 1rem; border-radius:8px; font-size:.875rem; font-weight:500; margin-top:1rem; }
    .form-message-success { background:#DCFCE7; color:#166534; border:1px solid #BBF7D0; }
    .form-message-error   { background:#FEF2F2; color:#991B1B; border:1px solid #FECACA; }
    .form-control.error   { border-color:#EF4444 !important; }
    @keyframes spin { to { transform: rotate(360deg); } }
    .spin { animation: spin .8s linear infinite; display:inline-block; }
  `;
  document.head.appendChild(s);
})();
