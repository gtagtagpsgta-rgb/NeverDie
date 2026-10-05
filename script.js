/* ============================================================
   NEVERDIE CLIENT — MAIN SCRIPT  v5.0
   ============================================================ */

'use strict';

/* ── STATE ── */
let currentLang = CONFIG.defaultLanguage;
let authTab = 'login'; // 'login' | 'register'

/* ════════════════════════════════════════
   INIT
════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  applyColors();
  buildLangDropdown();
  setLanguage(currentLang);   // внутри вызывает buildFeatures + buildPricing
  buildScreenshots();
  populateContact();
  setupNavScroll();
  setupReveal();
  setupCursorGlow();
  setupSmoothLinks();

  buildHeroShowcase();

  refreshAuthUI();

  // Закрытие модалей по Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeAllModals();
  });
});

/* ════════════════════════════════════════
   COLORS → CSS Variables
════════════════════════════════════════ */
function applyColors() {
  const c = CONFIG.colors;
  const s = document.documentElement.style;
  s.setProperty('--primary',       c.primary);
  s.setProperty('--primary-light', c.primaryLight);
  s.setProperty('--primary-dark',  c.primaryDark);
  s.setProperty('--secondary',     c.secondary);
  s.setProperty('--bg',            c.bg);
  s.setProperty('--bg-card',       c.bgCard);
  s.setProperty('--bg-card-hover', c.bgCardHover);
  s.setProperty('--text',          c.text);
  s.setProperty('--text-muted',    c.textMuted);
  s.setProperty('--border',        c.border);
  s.setProperty('--success',       c.success);
  s.setProperty('--glow',          c.glow);
}

/* ════════════════════════════════════════
   CURSOR GLOW
════════════════════════════════════════ */
function setupCursorGlow() {
  const glow = document.getElementById('cursorGlow');
  if (!glow || window.matchMedia('(hover: none)').matches) {
    if (glow) glow.style.display = 'none';
    return;
  }

  let mx = -9999, my = -9999;
  let cx = -9999, cy = -9999;

  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

  (function tick() {
    cx += (mx - cx) * 0.07;
    cy += (my - cy) * 0.07;
    glow.style.left = cx + 'px';
    glow.style.top  = cy + 'px';
    requestAnimationFrame(tick);
  })();
}

/* ════════════════════════════════════════
   NAVBAR SCROLL EFFECT
════════════════════════════════════════ */
function setupNavScroll() {
  const nav = document.getElementById('navbar');
  const toggle = () => nav.classList.toggle('scrolled', window.scrollY > 36);
  window.addEventListener('scroll', toggle, { passive: true });
  toggle();
}

/* ════════════════════════════════════════
   SMOOTH SCROLL LINKS
════════════════════════════════════════ */
function setupSmoothLinks() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const href = a.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* ════════════════════════════════════════
   REVEAL ON SCROLL (IntersectionObserver)
════════════════════════════════════════ */
let revealObs = null;

function setupReveal() {
  revealObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObs.unobserve(entry.target); // наблюдаем только один раз
      }
    });
  }, { threshold: 0.07, rootMargin: '0px 0px -20px 0px' });

  observeRevealElements();
}

function observeRevealElements() {
  document.querySelectorAll('.reveal:not(.visible)').forEach(el => revealObs?.observe(el));
}

/* ════════════════════════════════════════
   LANGUAGE SYSTEM
════════════════════════════════════════ */
function buildLangDropdown() {
  const dropdown = document.getElementById('langDropdown');
  dropdown.innerHTML = CONFIG.languages.map(l => `
    <div class="lang-option ${l.code === currentLang ? 'active' : ''}" onclick="setLanguage('${l.code}')">
      <span class="lang-flag">${l.flag}</span>
      <span>${l.full}</span>
      <span class="lang-code-badge">${l.label}</span>
    </div>
  `).join('');
}

function toggleLangDropdown() {
  document.getElementById('langBtn').classList.toggle('open');
  document.getElementById('langDropdown').classList.toggle('open');
}

// Закрыть при клике вне
document.addEventListener('click', e => {
  const sel = document.getElementById('langSelector');
  if (sel && !sel.contains(e.target)) closeLangDropdown();
});

function closeLangDropdown() {
  document.getElementById('langBtn')?.classList.remove('open');
  document.getElementById('langDropdown')?.classList.remove('open');
}

function setLanguage(lang) {
  currentLang = lang;

  const t   = CONFIG.i18n[lang];
  const nav = CONFIG.nav.links[lang];
  const found = CONFIG.languages.find(l => l.code === lang);

  // Обновить кнопку языка
  document.getElementById('langLabel').textContent = found?.label ?? lang.toUpperCase();
  document.getElementById('langFlag').textContent  = found?.flag  ?? '';

  // Активный язык в дропдауне
  document.querySelectorAll('.lang-option').forEach((el, i) => {
    el.classList.toggle('active', CONFIG.languages[i]?.code === lang);
  });

  // Все элементы [data-i18n]
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (/^nav\d+$/.test(key)) {
      const idx = parseInt(key.slice(3));
      if (nav[idx] !== undefined) el.textContent = nav[idx];
    } else if (t[key] !== undefined) {
      el.textContent = t[key];
    }
  });

  // Мобильное меню
  document.querySelectorAll('[data-mob-i18n]').forEach(el => {
    const key = el.getAttribute('data-mob-i18n');
    if (/^nav\d+$/.test(key)) {
      const idx = parseInt(key.slice(3));
      if (nav[idx] !== undefined) el.textContent = nav[idx];
    }
  });

  // Hero
  const taglineEl = document.getElementById('heroTagline');
  const quoteEl   = document.getElementById('heroQuote');
  const hintEl    = document.getElementById('heroVideoHint');
  if (taglineEl) taglineEl.textContent = CONFIG.clientTagline[lang] ?? CONFIG.clientTagline.ru;
  if (quoteEl)   quoteEl.textContent   = CONFIG.heroQuote[lang]     ?? CONFIG.heroQuote.ru;
  if (hintEl)    hintEl.textContent    = CONFIG.video.placeholder[lang] ?? CONFIG.video.placeholder.ru;

  // Кнопки в hero
  const heroBtnBuy = document.getElementById('heroBtnBuy');
  if (heroBtnBuy) heroBtnBuy.innerHTML = `
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
      <line x1="3" y1="6" x2="21" y2="6"/>
      <path d="M16 10a4 4 0 01-8 0"/>
    </svg>
    ${t.buyNowHero}
  `;
  const heroBtnLearn = document.getElementById('heroBtnLearn');
  if (heroBtnLearn) heroBtnLearn.textContent = t.learnMore;

  // Footer
  const footerTagline = document.getElementById('footerTagline');
  const footerCopy    = document.getElementById('footerCopy');
  if (footerTagline) footerTagline.textContent = CONFIG.clientTagline[lang] ?? CONFIG.clientTagline.ru;
  if (footerCopy)    footerCopy.textContent    = t.footerCopy;

  // Auth modal + nav auth button + profile
  refreshAuthTexts();
  refreshAuthUI();
  refreshProfileTexts();
  if (window.refreshSettingsTexts) window.refreshSettingsTexts();

  // Hero showcase badge
  const badge = document.getElementById('heroFreeBadge');
  if (badge) badge.textContent = t.free;

  // html lang attr
  document.documentElement.lang = lang;

  closeLangDropdown();

  // Перестроить динамические секции
  buildFeatures();
  buildPricing();
  buildFaq();
}

/* ════════════════════════════════════════
   FEATURES — иконки и карточки
════════════════════════════════════════ */
const FEATURE_ICONS = [
  // Красивый интерфейс
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="3"/>
    <path d="M3 9h18M9 21V9"/>
  </svg>`,
  // Гибкая настройка
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>
  </svg>`,
  // Оптимизация
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="22,12 18,12 15,21 9,3 6,12 2,12"/>
  </svg>`,
  // Обновления
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="23,4 23,10 17,10"/>
    <path d="M20.49 15a9 9 0 11-2.12-9.36L23 10"/>
  </svg>`,
  // Поддержка
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
  </svg>`,
  // Обход античита
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <polyline points="9,12 11,14 15,10"/>
  </svg>`
];

function buildFeatures() {
  const grid  = document.getElementById('featuresGrid');
  if (!grid) return;
  const items = CONFIG.features[currentLang] ?? CONFIG.features.ru;

  grid.innerHTML = items.map((f, i) => `
    <div class="feature-card reveal reveal-d${(i % 6) + 1}">
      <div class="feature-icon-wrap">
        ${FEATURE_ICONS[i] ?? FEATURE_ICONS[0]}
      </div>
      <div class="feature-title">${f.title}</div>
      <div class="feature-desc">${f.desc}</div>
    </div>
  `).join('');

  observeRevealElements();
}

/* ════════════════════════════════════════
   HERO-ВИТРИНА — автокарусель скриншотов
   ════════════════════════════════════════ */
let heroShotIdx = 0;
let heroShotTimer = null;

function buildHeroShowcase() {
  const img = document.getElementById('heroShot');
  if (!img) return;
  const shots = CONFIG.screenshots || [];
  if (!shots.length) return;

  shots.forEach(s => { const pre = new Image(); pre.src = s.url; });

  const dots = document.getElementById('heroShotDots');
  if (dots) {
    dots.innerHTML = shots.map((_, i) =>
      `<span class="${i === 0 ? 'active' : ''}" onclick="heroShotGo(${i})"></span>`
    ).join('');
  }

  const badge = document.getElementById('heroFreeBadge');
  if (badge) badge.textContent = (CONFIG.i18n[currentLang] || {}).free ?? 'FREE';

  restartHeroShotTimer();
}

function heroShotGo(i) {
  const img = document.getElementById('heroShot');
  const shots = CONFIG.screenshots || [];
  if (!img || !shots.length) return;
  heroShotIdx = ((i % shots.length) + shots.length) % shots.length;

  document.querySelectorAll('#heroShotDots span').forEach((el, k) => {
    el.classList.toggle('active', k === heroShotIdx);
  });

  img.style.opacity = '0';
  setTimeout(() => {
    img.src = shots[heroShotIdx].url;
    img.alt = shots[heroShotIdx].alt || '';
    const show = () => { img.style.opacity = '1'; };
    if (img.complete) show();
    else { img.onload = show; setTimeout(show, 800); }
  }, 220);

  restartHeroShotTimer();
}

function restartHeroShotTimer() {
  if (heroShotTimer) clearInterval(heroShotTimer);
  const shots = CONFIG.screenshots || [];
  if (document.getElementById('heroShot') && shots.length > 1) {
    heroShotTimer = setInterval(() => heroShotGo(heroShotIdx + 1), 4500);
  }
}

/* ════════════════════════════════════════
   SCREENSHOTS
   ════════════════════════════════════════ */
function buildScreenshots() {
  const grid  = document.getElementById('screenshotsGrid');
  if (!grid) return;
  const shots = CONFIG.screenshots;

  grid.innerHTML = shots.map((s, i) => `
    <div class="screenshot-item ${i === 0 ? 'screenshot-main' : ''} reveal reveal-d${i + 1}">
      <img
        src="${s.url}"
        alt="${s.alt}"
        loading="lazy"
        onerror="this.closest('.screenshot-item').style.display='none'"
      />
    </div>
  `).join('');

  observeRevealElements();
}

/* ════════════════════════════════════════
   FAQ — аккордеон
   ════════════════════════════════════════ */
function buildFaq() {
  const list = document.getElementById('faqList');
  if (!list) return;
  const items = CONFIG.faq[currentLang] ?? CONFIG.faq.ru;

  list.innerHTML = items.map((item, i) => `
    <div class="faq-item reveal reveal-d${(i % 4) + 1}" onclick="toggleFaq(this)">
      <button class="faq-q">
        <span>${escapeHtml(item.q)}</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <polyline points="6,9 12,15 18,9"></polyline>
        </svg>
      </button>
      <div class="faq-a"><p>${escapeHtml(item.a)}</p></div>
    </div>
  `).join('');

  observeRevealElements();
}

function toggleFaq(el) {
  const wasOpen = el.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(o => o.classList.remove('open'));
  if (!wasOpen) el.classList.add('open');
}

/* ════════════════════════════════════════
   PRICING
   ════════════════════════════════════════ */
function buildPricing() {
  const grid = document.getElementById('pricingGrid');
  if (!grid) return;
  const t    = CONFIG.i18n[currentLang];

  grid.innerHTML = CONFIG.pricing.plans.map((plan, i) => {
    const dur   = plan.duration[currentLang] ?? plan.duration.ru;
    const feats = plan.features[currentLang] ?? plan.features.ru;
    const priceHtml = (plan.price === 0)
      ? `<span class="free-price">${t.free}</span>`
      : `<span class="currency"></span>${Number(plan.price).toFixed(2)}`;
    const periodHtml = (plan.price === 0) ? t.freePeriod : '';

    return `
      <div class="pricing-card ${plan.popular ? 'popular' : ''} reveal reveal-d${i + 1}">
        <div class="pricing-duration">${dur}</div>
        <div class="pricing-price">
          ${priceHtml}
        </div>
        <div class="pricing-period">${periodHtml}</div>
        <ul class="pricing-features">
          ${feats.map(f => `
            <li>
              <span class="check">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                  <polyline points="20,6 9,17 4,12"/>
                </svg>
              </span>
              ${f}
            </li>
          `).join('')}
        </ul>
        <button
          class="btn btn-primary"
          style="width:100%;"
          onclick="handleDownload()"
        >
          ${t.btnDownload}
        </button>
      </div>
    `;
  }).join('');

  observeRevealElements();
}

/* ════════════════════════════════════════
   СКАЧИВАНИЕ — только после входа.
   Ссылка на лаунчер задаётся в config.js → download.url
   ════════════════════════════════════════ */
function handleDownload() {
  const t = CONFIG.i18n[currentLang];
  const session = getSession();

  if (!session) {
    showToast(t.needLogin, 'error');
    openAuth();
    return;
  }

  const url = CONFIG.download && CONFIG.download.url;
  if (!url) {
    showToast(t.noDownloadUrl, 'error');
    return;
  }

  const a = document.createElement('a');
  a.href = url;
  a.download = (CONFIG.download && CONFIG.download.fileName) || 'neverdie.exe';
  a.target = '_blank';
  a.rel = 'noopener';
  document.body.appendChild(a);
  a.click();
  a.remove();
  showToast(t.downloading, 'success');
}

/* ════════════════════════════════════════
   VIDEO EMBED (только через config.js)
   Пользователь сайта НЕ вводит ссылку —
   только владелец в CONFIG.video.url
════════════════════════════════════════ */
function embedVideo(url) {
  const videoId = extractYouTubeId(url);
  if (!videoId) return;

  const src = `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&color=white`;
  const iframe = `<iframe
    src="${src}"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
    loading="lazy"
    title="Neverdie Client — Gameplay"
  ></iframe>`;

  const heroFrame     = document.getElementById('heroVideoFrame');
  const sectionEmbed  = document.getElementById('videoContainer');
  if (heroFrame)    heroFrame.innerHTML    = iframe;
  if (sectionEmbed) sectionEmbed.innerHTML = iframe;
}

function extractYouTubeId(url) {
  if (!url) return null;
  const patterns = [
    /[?&]v=([a-zA-Z0-9_-]{11})/,
    /youtu\.be\/([a-zA-Z0-9_-]{11})/,
    /embed\/([a-zA-Z0-9_-]{11})/,
    /shorts\/([a-zA-Z0-9_-]{11})/,
    /^([a-zA-Z0-9_-]{11})$/
  ];
  for (const re of patterns) {
    const m = url.match(re);
    if (m) return m[1];
  }
  return null;
}

/* ════════════════════════════════════════
   CONTACTS — только Telegram
   ════════════════════════════════════════ */
function populateContact() {
  const telegram = CONFIG.contact && CONFIG.contact.telegram;
  const supportBot = (CONFIG.contact && CONFIG.contact.supportBot) || telegram;

  const tgCard = document.getElementById('supportTelegramCard');
  if (tgCard && supportBot) tgCard.href = supportBot;

  const channelCard = document.getElementById('supportChannelCard');
  if (channelCard && telegram) channelCard.href = telegram;

  const footerTelegram = document.getElementById('footerTelegram');
  if (footerTelegram && telegram) footerTelegram.href = telegram;
}

/* ════════════════════════════════════════
   MOBILE MENU
════════════════════════════════════════ */
function toggleMobileMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
  document.getElementById('hamburger').classList.toggle('open');
}
function closeMobileMenu() {
  document.getElementById('mobileMenu').classList.remove('open');
  document.getElementById('hamburger').classList.remove('open');
}

/* ════════════════════════════════════════
   LEGAL MODALS
════════════════════════════════════════ */
const MODAL_IDS = {
  privacy: 'modalPrivacy',
  terms:   'modalTerms',
  rules:   'modalRules',
  auth:    'modalAuth',
  profile: 'modalProfile'
};

const LEGAL_BODY_IDS = {
  privacy: 'legalPrivacyBody',
  terms:   'legalTermsBody',
  rules:   'legalRulesBody'
};

function openModal(key) {
  closeAllModals();
  const id = MODAL_IDS[key];
  if (!id) return;
  if (LEGAL_BODY_IDS[key]) renderLegal(key);
  document.getElementById(id)?.classList.add('open');
  document.body.style.overflow = 'hidden';
}

/* Текст документов из config.js → legal.* */
function renderLegal(key) {
  const el = document.getElementById(LEGAL_BODY_IDS[key]);
  if (!el) return;
  const text = (CONFIG.legal && CONFIG.legal[key]) || '';
  if (!text.trim()) {
    el.innerHTML = '<p class="legal-empty">—</p>';
    return;
  }
  el.innerHTML = text
    .split(/\n\s*\n/)
    .map(p => `<p>${escapeHtml(p).replace(/\n/g, '<br>')}</p>`)
    .join('');
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function closeModal(key) {
  const id = MODAL_IDS[key];
  if (!id) return;
  document.getElementById(id)?.classList.remove('open');
  document.body.style.overflow = '';
}

function closeAllModals() {
  Object.values(MODAL_IDS).forEach(id => {
    document.getElementById(id)?.classList.remove('open');
  });
  document.body.style.overflow = '';
}

function closeModalOutside(event, modalId) {
  if (event.target.id === modalId) {
    document.getElementById(modalId)?.classList.remove('open');
    document.body.style.overflow = '';
  }
}

/* ════════════════════════════════════════
   TOAST NOTIFICATIONS
════════════════════════════════════════ */
let toastTimer = null;

function showToast(msg, type = 'success') {
  const toast    = document.getElementById('toast');
  const toastMsg = document.getElementById('toastMsg');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = msg;
  toast.className = `toast ${type} show`;

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3500);
}

/* ════════════════════════════════════════
   АВТОРИЗАЦИЯ — правила как в лаунчере:
   ник 3–16 (латиница, цифры, _), пароль минимум 4 символа.
   Аккаунты хранятся только в этом браузере (localStorage),
   общего сервера с лаунчером нет.
   ════════════════════════════════════════ */
const AUTH_USERS_KEY   = 'nd_users';
const AUTH_SESSION_KEY = 'nd_session';
const NICK_RE = /^[A-Za-z0-9_]{3,16}$/;

function nextUserId() {
  let s = 0;
  try { s = parseInt(localStorage.getItem('nd_seq') || '0', 10) || 0; } catch (e) {}
  s += 1;
  try { localStorage.setItem('nd_seq', String(s)); } catch (e) {}
  return s;
}

function ensureUserId(users, key) {
  const entry = users[key];
  if (entry && !entry.id) {
    entry.id = nextUserId();
    saveUsers(users);
  }
  return entry;
}

function loadUsers() {
  try { return JSON.parse(localStorage.getItem(AUTH_USERS_KEY)) || {}; }
  catch (e) { return {}; }
}
function saveUsers(u) {
  try { localStorage.setItem(AUTH_USERS_KEY, JSON.stringify(u)); } catch (e) {}
}
function getSession() {
  try { return localStorage.getItem(AUTH_SESSION_KEY) || null; }
  catch (e) { return null; }
}
function setSession(nick) {
  try {
    if (nick) localStorage.setItem(AUTH_SESSION_KEY, nick);
    else localStorage.removeItem(AUTH_SESSION_KEY);
  } catch (e) {}
}

function randomSalt() {
  const a = new Uint8Array(16);
  if (window.crypto && window.crypto.getRandomValues) window.crypto.getRandomValues(a);
  else for (let i = 0; i < a.length; i++) a[i] = Math.floor(Math.random() * 256);
  return [...a].map(b => b.toString(16).padStart(2, '0')).join('');
}

async function hashPassword(salt, password) {
  const data = salt + ':' + password;
  try {
    if (window.crypto && window.crypto.subtle) {
      const buf = await window.crypto.subtle.digest('SHA-256', new TextEncoder().encode(data));
      return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, '0')).join('');
    }
  } catch (e) {}
  let h = 0x811c9dc5;
  for (let i = 0; i < data.length; i++) { h ^= data.charCodeAt(i); h = Math.imul(h, 0x01000193) >>> 0; }
  return 'fnv1a-' + h.toString(16);
}

function openAuth() {
  const err = document.getElementById('authError');
  if (err) { err.textContent = ''; err.classList.remove('show'); }
  refreshAuthTexts();
  openModal('auth');
  setTimeout(() => document.getElementById('authNick')?.focus(), 50);
}

function switchAuthTab(tab) {
  authTab = tab;
  refreshAuthTexts();
  const err = document.getElementById('authError');
  if (err) { err.textContent = ''; err.classList.remove('show'); }
}

function refreshAuthTexts() {
  const t = CONFIG.i18n[currentLang];
  const isLogin = authTab === 'login';
  const title = document.getElementById('authTitle');
  const tabL  = document.getElementById('authTabLogin');
  const tabR  = document.getElementById('authTabRegister');
  const nick  = document.getElementById('authNick');
  const pass  = document.getElementById('authPassword');
  const rep   = document.getElementById('authRepeat');
  const sub   = document.getElementById('authSubmit');
  if (title) title.textContent = isLogin ? t.authLogin : t.authRegister;
  if (tabL)  { tabL.textContent = t.authLogin;    tabL.classList.toggle('active', isLogin); }
  if (tabR)  { tabR.textContent = t.authRegister; tabR.classList.toggle('active', !isLogin); }
  if (nick) nick.placeholder = t.authNick;
  if (pass) pass.placeholder = t.authPassword;
  if (rep)  { rep.placeholder = t.authRepeat; rep.style.display = isLogin ? 'none' : ''; }
  if (sub)  sub.textContent = isLogin ? t.authLoginBtn : t.authRegisterBtn;
}

function refreshAuthUI() {
  const t = CONFIG.i18n[currentLang];
  const session = getSession();
  const navBtn = document.getElementById('navAuthBtn');
  const mobLink = document.getElementById('mobAuthLink');
  const navProfile = document.getElementById('navProfileBtn');
  const mobProfile = document.getElementById('mobProfileLink');
  if (navBtn)  navBtn.textContent  = session || t.navLogin;
  if (mobLink) mobLink.textContent = session || t.navLogin;
  if (navProfile) {
    navProfile.style.display = session ? '' : 'none';
    navProfile.textContent = t.profile;
  }
  if (mobProfile) {
    mobProfile.style.display = session ? '' : 'none';
    mobProfile.textContent = t.profile;
  }
  if (window.renderProfilePage) {
    try { window.renderProfilePage(); } catch (e) {}
  }
}

function openProfile() {
  const t = CONFIG.i18n[currentLang];
  const session = getSession();
  if (!session) { openAuth(); return; }
  const entry = ensureUserId(loadUsers(), session.toLowerCase()) || { nick: session };
  const av = document.getElementById('profileAvatar');
  const nk = document.getElementById('profileNick');
  const pid = document.getElementById('profileId');
  const since = document.getElementById('profileSince');
  const ver = document.getElementById('profileVersion');
  if (av)  av.textContent = (entry.nick || '?').charAt(0).toUpperCase();
  if (nk)  nk.textContent = entry.nick || session;
  if (pid) pid.textContent = '#' + (entry.id || '—');
  if (since) {
    try {
      since.textContent = entry.createdAt
        ? new Date(entry.createdAt).toLocaleDateString(currentLang)
        : '—';
    } catch (e) { since.textContent = '—'; }
  }
  if (ver) ver.textContent = 'v' + ((CONFIG.download && CONFIG.download.version) || '?');
  refreshProfileTexts();
  openModal('profile');
}

function refreshProfileTexts() {
  const t = CONFIG.i18n[currentLang];
  const set = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
  set('profileTitle', t.profile);
  set('profileIdLabel', t.profileId);
  set('profileSinceLabel', t.profileSince);
  set('profileVersionLabel', t.profileVersion);
  set('profileStatus', t.profileActive);
  set('profileDownloadBtn', t.btnDownload);
  set('profileLogoutBtn', t.logoutBtn);
}

function profileLogout() {
  closeModal('profile');
  setSession(null);
  refreshAuthUI();
  showToast(CONFIG.i18n[currentLang].bye, 'success');
}

function navAuthClick() {
  const session = getSession();
  if (session) {
    setSession(null);
    refreshAuthUI();
    showToast(CONFIG.i18n[currentLang].bye, 'success');
  } else {
    openAuth();
  }
}

function authFail(msg) {
  const err = document.getElementById('authError');
  if (err) { err.textContent = msg; err.classList.add('show'); }
}

async function submitAuth() {
  const t = CONFIG.i18n[currentLang];
  const nickEl = document.getElementById('authNick');
  const passEl = document.getElementById('authPassword');
  const repEl  = document.getElementById('authRepeat');
  const subEl  = document.getElementById('authSubmit');
  const nick = (nickEl?.value || '').trim();
  const password = passEl?.value || '';

  if (!NICK_RE.test(nick)) { authFail(t.errNick); return; }
  if (password.length < 4) { authFail(t.errPass); return; }

  const users = loadUsers();

  if (authTab === 'register') {
    if (password !== (repEl?.value || '')) { authFail(t.errRepeat); return; }
    if (users[nick.toLowerCase()]) { authFail(t.errTaken); return; }
    if (subEl) subEl.disabled = true;
    try {
      const salt = randomSalt();
      users[nick.toLowerCase()] = { nick, salt, hash: await hashPassword(salt, password), createdAt: Date.now(), id: nextUserId() };
      saveUsers(users);
      setSession(nick);
      closeModal('auth');
      refreshAuthUI();
      if (window.renderProfilePage) window.renderProfilePage();
      showToast(`${t.welcome}, ${nick}!`, 'success');
    } finally {
      if (subEl) subEl.disabled = false;
    }
    return;
  }

  const entry = ensureUserId(users, nick.toLowerCase());
  if (subEl) subEl.disabled = true;
  try {
    const ok = entry && entry.salt && (await hashPassword(entry.salt, password)) === entry.hash;
    if (!ok) { authFail(t.errWrong); return; }
    setSession(entry.nick);
    closeModal('auth');
    refreshAuthUI();
    if (window.renderProfilePage) window.renderProfilePage();
    showToast(`${t.welcome}, ${entry.nick}!`, 'success');
  } finally {
    if (subEl) subEl.disabled = false;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ['authNick', 'authPassword', 'authRepeat'].forEach(id => {
    document.getElementById(id)?.addEventListener('keydown', e => {
      if (e.key === 'Enter') submitAuth();
    });
  });
});
