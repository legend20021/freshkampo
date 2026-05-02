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

  /* ─── DOM Ready ─── */
  document.addEventListener('DOMContentLoaded', function () {
    initSplash();
    initNav();
    initLang();
    initScrollAnimations();
    initCounters();
    initModal();
    initForm();
    initNavScroll();
    initContactHeroMotion();
    initContactOffices();
  });

  /* ══════════════════════════════════
     SPLASH SCREEN
  ══════════════════════════════════ */
  function initSplash() {
    const splash = document.getElementById('splash');
    if (!splash) return;

    // Show only once per calendar day
    const today = new Date().toDateString();
    const lastSeen = localStorage.getItem('fk_splash_date');
    if (lastSeen === today) {
      splash.style.display = 'none';
      document.body.style.overflow = '';
      // Soft entry overlay on return visits
      var intro = document.getElementById('page-intro');
      if (intro) {
        intro.classList.remove('hidden');
        // Remove from DOM after animation finishes
        setTimeout(function () { intro.classList.add('hidden'); }, 1500);
      }
      return;
    }
    localStorage.setItem('fk_splash_date', today);

    // Lock scroll while showing
    document.body.style.overflow = 'hidden';

    // Auto-dismiss after CSS bar completes (3.8s)
    setTimeout(function () {
      dismissSplash();
    }, 3800);

    // Dismiss button click
    const dismissBtn = splash.querySelector('.splash-dismiss');
    if (dismissBtn) dismissBtn.addEventListener('click', function(e){ e.stopPropagation(); dismissSplash(); });
  }

  function dismissSplash() {
    const splash = document.getElementById('splash');
    if (!splash || splash.classList.contains('hiding') || splash.classList.contains('hidden')) return;
    document.body.style.overflow = '';
    splash.classList.add('hiding');
    setTimeout(function () {
      splash.classList.remove('hiding');
      splash.classList.add('hidden');
    }, 620);
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
    applyLang(currentLang);

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const lang = btn.dataset.lang;
        if (lang === currentLang) return;
        currentLang = lang;
        localStorage.setItem('fk_lang', lang);
        applyLang(lang);
      });
    });
  }

  function applyLang(lang) {
    if (typeof TRANSLATIONS === 'undefined') return;
    const dict = TRANSLATIONS[lang] || TRANSLATIONS['es'];

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
     QUALITY POLICY MODAL
  ══════════════════════════════════ */
  function initModal() {
    const overlay = document.getElementById('qualityModal');
    if (!overlay) return;

    // Triggers
    document.querySelectorAll('[data-modal="quality"]').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        openModal();
      });
    });

    // Close button
    const closeBtn = overlay.querySelector('.modal-close');
    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    // Close on action button
    const actionBtn = overlay.querySelector('.modal-action-close');
    if (actionBtn) actionBtn.addEventListener('click', closeModal);

    // Click outside
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closeModal();
    });

    // ESC key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeModal();
    });
  }

  function openModal() {
    const overlay = document.getElementById('qualityModal');
    if (!overlay) return;
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    const overlay = document.getElementById('qualityModal');
    if (!overlay) return;
    overlay.classList.remove('open');
    document.body.style.overflow = '';
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
