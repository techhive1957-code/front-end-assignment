/* global $, bootstrap */

// ---------- Fallback data if AJAX from file:// fails ----------
window.PRODUCTS_FALLBACK = null; // will be filled by <script#products-fallback> in each HTML

// ---------- Utilities ----------
const $$ = sel => document.querySelector(sel);
const $$$ = sel => Array.from(document.querySelectorAll(sel));

function getQueryParam(key) {
  const url = new URL(window.location.href);
  return url.searchParams.get(key);
}

function setCookie(name, value, days = 7) {
  const d = new Date(); d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
  document.cookie = `${name}=${encodeURIComponent(value)};expires=${d.toUTCString()};path=/;SameSite=Lax`;
}
function getCookie(name) {
  return document.cookie.split('; ').find(row => row.startsWith(name + '='))?.split('=')[1] ? decodeURIComponent(document.cookie.split('; ').find(r => r.startsWith(name + '='))?.split('=')[1]) : null;
}

function fmtPrice(value) {
  return 'RM ' + Number(value || 0).toFixed(2);
}

function setTheme(theme) {
  if (theme === 'dark') { document.documentElement.classList.remove('theme-light'); }
  else { document.documentElement.classList.add('theme-light'); }
  setCookie('theme', theme, 7);
}
function initThemeFromCookie() {
  const theme = getCookie('theme') || 'dark';
  setTheme(theme);
  const themeToggle = $$('#themeToggle');
  if (themeToggle) { themeToggle.checked = theme === 'dark' ? true : false; }
}

// Accessible "click" via Enter/Space
function keyActivate(el, handler) {
  el.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handler(e); }
  });
}

// ---------- Data ----------
let PRODUCTS = window.PRODUCTS || [];

function normalizeProducts(arr) {
  return (arr || []).map(p => {
    const category = p.category || p.catogory || p.type || '';
    const name = p.name || `${(p.brand || '').trim()} ${(p.model || '').trim()}`.trim();
    return { ...p, category, name, type: category || p.type || '' };
  });
}

async function loadProducts() {
  // If already loaded, return immediately
  if (Array.isArray(PRODUCTS) && PRODUCTS.length) return PRODUCTS;

  // Try multiple URL options so it works from root or subfolders
  const tryUrls = [
    'products.json',                                  // relative to current page
    new URL('products.json', location.href).href,     // absolute to current page
    `${location.origin}/products.json`,               // site root
    '../products.json'                                // one level up (if page is in subfolder)
  ];

  for (const url of [...new Set(tryUrls)]) {
    try {
      const res = await fetch(url, { cache: 'no-store' });
      if (!res.ok) throw new Error(`HTTP ${res.status} @ ${url}`);
      const data = await res.json();
      PRODUCTS = normalizeProducts(data.products);
      window.PRODUCTS = PRODUCTS;
      return PRODUCTS;
    } catch (e) {
      console.warn('loadProducts attempt failed:', e.message);
    }
  }

  // Fallback: read embedded script block (works on file:// too)
  try {
    const node = document.getElementById('products-fallback');
    if (node && node.textContent.trim()) {
      const fb = JSON.parse(node.textContent);
      PRODUCTS = normalizeProducts(fb.products || []);
      window.PRODUCTS = PRODUCTS;
      if (PRODUCTS.length) return PRODUCTS;
    }
  } catch (e) {
    console.warn('Fallback parse failed:', e);
  }

  // Still nothing
  PRODUCTS = [];
  window.PRODUCTS = PRODUCTS;
  throw new Error('No products could be loaded');
}


// ---------- Compare Manager (sessionStorage) ----------
const CMP_KEY = 'compareIds';
function getCompareList() {
  try { return JSON.parse(sessionStorage.getItem(CMP_KEY)) || []; } catch { return []; }
}
function setCompareList(arr) {
  sessionStorage.setItem(CMP_KEY, JSON.stringify(arr.slice(0, 3)));
  updateCompareBadge();
}
function addToCompare(id) {
  const arr = getCompareList();
  if (arr.includes(id)) return;
  if (arr.length >= 3) {
    showToast('Compare list full (max 3). Remove one to add another.');
    return;
  }
  arr.push(id); setCompareList(arr);
  showToast('Added to comparison.');
}
function removeFromCompare(id) {
  setCompareList(getCompareList().filter(x => x !== id));
}
function clearCompare() { sessionStorage.removeItem(CMP_KEY); updateCompareBadge(); }
function updateCompareBadge() {
  const count = getCompareList().length;
  const el = $$('#compareCount'); if (el) { el.textContent = String(count); }
}


// ---------- Recently Viewed (localStorage) ----------
const RV_KEY = 'recentlyViewed';
function pushRecent(id) {
  try {
    let arr = JSON.parse(localStorage.getItem(RV_KEY)) || [];
    arr = [id, ...arr.filter(x => x !== id)].slice(0, 6);
    localStorage.setItem(RV_KEY, JSON.stringify(arr));
  } catch { }
}
function getRecent() {
  try { return JSON.parse(localStorage.getItem(RV_KEY)) || []; } catch { return []; }
}

// ---------- Last Viewed Category (localStorage) ----------
const LVC_KEY = 'lastCategory';
function setLastCategory(cat) { localStorage.setItem(LVC_KEY, cat); }

// ---------- Hand Size (localStorage) ----------
const HAND_KEY = 'handSize';
function setHandSize(size) { localStorage.setItem(HAND_KEY, size); }
function getHandSize() { return localStorage.getItem(HAND_KEY); }

// ---------- Toast ----------
function showToast(msg) {
  const t = document.getElementById('liveToast');
  if (!t) return alert(msg);
  t.querySelector('.toast-body').textContent = msg;
  const toast = new bootstrap.Toast(t);
  toast.show();
}


// ---------- Product Detail ----------
/* Utilities (safe even if cookie helpers don’t exist) */
function getQueryParam(key) { const u = new URL(location.href); return u.searchParams.get(key); }
function showToast(msg) { const t = document.getElementById('liveToast'); if (!t) { console.log(msg); return; } t.querySelector('.toast-body').textContent = msg; new bootstrap.Toast(t).show(); }
function fmtPrice(value) {
  return 'RM ' + Number(value || 0).toFixed(2);
}

/* Keys (avoid redeclare) */
window.CMP_KEY = window.CMP_KEY || 'compareIds';
window.RV_KEY = window.RV_KEY || 'recentlyViewed';

/* Compare helpers */
function getCompareList() { try { return JSON.parse(sessionStorage.getItem(window.CMP_KEY)) || []; } catch { return []; } }
function setCompareList(a) { sessionStorage.setItem(window.CMP_KEY, JSON.stringify(a.slice(0, 3))); updateCompareBadge(); }
function addToCompare(id) {
  const a = getCompareList(); if (a.includes(id)) return;
  if (a.length >= 3) { showToast('Compare list full (max 3).'); return; }
  a.push(id); setCompareList(a); showToast('Added to comparison.');
}
function updateCompareBadge() { const el = document.getElementById('compareCount'); if (el) el.textContent = String(getCompareList().length); }

/* Recently viewed */
function pushRecent(id) { try { let a = JSON.parse(localStorage.getItem(window.RV_KEY)) || []; a = [id, ...a.filter(x => x !== id)].slice(0, 4); localStorage.setItem(window.RV_KEY, JSON.stringify(a)); } catch { } }
function getRecent() { try { return JSON.parse(localStorage.getItem(window.RV_KEY)) || []; } catch { return []; } }

/* Spec table (mouse-focused, graceful skips) */
function buildSpecTable(p) {
  const tbody = document.querySelector('#specTable tbody');
  if (!tbody) return; tbody.innerHTML = '';

  const rowsForMouse = [
    ['Price', fmtPrice(p.price)],
    ['Type', p.type],
    ['Dimensions (W×L×H)', p.dimensions ? `${p.dimensions.w}×${p.dimensions.l}×${p.dimensions.h} mm` : null],
    ['Weight', p.weight != null ? `${p.weight} g` : null],
    ['Grip', Array.isArray(p.grip) && p.grip.length ? p.grip.join(', ') : null],
    ['Hand Size Fit', p.handSizeFit || null],
    ['Sensor', p.sensor || null],
    ['DPI', p.dpi || null],
    ['Switch (mouse)', p.switch || null],
    ['Polling', p.polling || null],
    ['Connectivity', p.connectivity || null],
    ['Battery', p.battery || null],
    ['Lighting', p.lighting || null],
    ['Rating', p.rating != null ? `${Number(p.rating).toFixed(1)} ★` : null],
    ['Features', Array.isArray(p.features) && p.features.length ? p.features.join(', ') : null],
  ];

  const rowsGeneric = [
    ['Price', fmtPrice(p.price)],
    ['Type', p.type],
    ['Connectivity', p.connectivity || null],
    ['Battery', p.battery || null],
    ['Lighting', p.lighting || null],
    ['Rating', p.rating != null ? `${Number(p.rating).toFixed(1)} ★` : null],
    ['Features', Array.isArray(p.features) && p.features.length ? p.features.join(', ') : null],
  ];

  (p.type === 'mouse' ? rowsForMouse : rowsGeneric).forEach(([label, val]) => {
    if (val == null || val === '') return;
    tbody.insertAdjacentHTML('beforeend', `<tr><th scope="row" class="text-muted">${label}</th><td>${val}</td></tr>`);
  });
}

/* Reusable product card */
function productCardHTML(item) {
  const img = (item.images && item.images[0]) || 'img/placeholder.jpg';
  return `
    <div class="col-6 col-md-4 col-lg-3">
      <div class="card product-card h-100">
        <img src="${img}" class="card-img-top object-contain bg-body-tertiary" alt="${item.brand} ${item.model} image" onerror="this.src='img/placeholder.jpg'">
        <div class="card-body">
          <h6 class="card-title mb-1 text-truncate" title="${item.brand} ${item.model}">${item.brand} ${item.model}</h6>
          <div class="small text-muted">${item.type}</div>
          <div class="fw-bold mt-1">${fmtPrice(item.price)}</div>
          <div class="d-grid gap-2 mt-auto">
            <a class="btn btn-sm btn-outline-primary" href="product-detail.html?id=${item.id}" aria-label="Open ${item.model} details">Details</a>
            <button class="btn btn-sm btn-primary" aria-label="Add ${item.model} to compare" onclick="addToCompare('${item.id}')">Compare</button>
          </div>
        </div>
      </div>
    </div>`;
}
/* Render Product Detail */
function renderProductDetail() {
  updateCompareBadge();

  // Ensure catalog exists
  if (!Array.isArray(PRODUCTS) || !PRODUCTS.length) {
    showToast('Could not load products.');
    console.warn('No products loaded. Check products.json or fallback block.');
    return;
  }

  // Resolve id: URL ?id=… → recently viewed → first product
  let id = getQueryParam('id');
  if (!id) {
    const recent = getRecent();
    id = (recent && recent[0]) || PRODUCTS[0].id;
    if (id) history.replaceState(null, '', `?id=${encodeURIComponent(id)}`);
  }

  // If id not found, fall back to first product instead of erroring
  let p = PRODUCTS.find(x => x.id === id);
  if (!p) {
    p = PRODUCTS[0];
    history.replaceState(null, '', `?id=${encodeURIComponent(p.id)}`);
  }

  // Title & type
  document.title = `${p.brand} ${p.model} — Details`;
  document.getElementById('pBrandModel').textContent = `${p.brand} ${p.model}`;
  document.getElementById('pType').textContent = p.type;

  // Recently viewed
  pushRecent(p.id);

  // Price & badges
  document.getElementById('pPrice').textContent = fmtPrice(p.price);
  const badgeRow = document.getElementById('badgeRow'); badgeRow.innerHTML = '';
  const badges = [];
  if (p.type === 'mouse' && p.weight && p.weight < 60) badges.push({ t: '<60 g', cls: 'badge-good' });
  if (p.polling && parseInt(String(p.polling).replace(/[^\d]/g, '')) >= 8000) badges.push({ t: '8K Hz', cls: 'badge-good' });
  if (p.connectivity?.includes('multi')) badges.push({ t: 'Multi-connect', cls: 'badge-spec' });
  badges.forEach(b => badgeRow.insertAdjacentHTML('beforeend', `<span class="badge me-2 ${b.cls}">${b.t}</span>`));

  // Gallery
  const mainImg = document.getElementById('mainImg');
  const thumbs = document.getElementById('thumbs');
  const imgs = (Array.isArray(p.images) && p.images.length ? p.images.slice(0, 2) : ['img/placeholder.jpg']);
  function setMain(src, alt) { mainImg.src = src; mainImg.alt = alt; }
  thumbs.innerHTML = '';
  imgs.forEach((src, i) => {
    const img = document.createElement('img');
    img.src = src; img.alt = `${p.brand} ${p.model} thumbnail ${i + 1}`;
    img.className = 'thumb'; img.tabIndex = 0; img.setAttribute('aria-label', `Show image ${i + 1}`);
    img.loading = 'lazy'; img.decoding = 'async'; img.width = 76; img.height = 76;
    img.addEventListener('click', () => { setMain(src, img.alt); document.querySelectorAll('.thumb').forEach(t => t.classList.remove('active')); img.classList.add('active'); });
    img.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); img.click(); } });
    img.onerror = () => { img.src = 'img/placeholder.jpg'; };
    thumbs.appendChild(img);
  });
  setMain(imgs[0], `${p.brand} ${p.model} main image`);
  const firstThumb = thumbs.querySelector('.thumb'); if (firstThumb) firstThumb.classList.add('active');
  mainImg.onerror = () => { mainImg.src = 'img/placeholder.jpg'; };

  // Specs
  buildSpecTable(p);

  // Fit & Grip (mouse only)
  const fitBlock = document.getElementById('fitBlock');
  const fitHint = document.getElementById('fitHint');
  if (p.type === 'mouse') {
    const hand = localStorage.getItem('handSize');
    if (hand) {
      const grips = Array.isArray(p.grip) && p.grip.length ? p.grip.slice(0, 2).join(' & ') : 'any grip';
      fitHint.innerHTML = `Saved hand size: <span class="badge badge-spec">${hand.toUpperCase()}</span> • Suggested grips: ${grips}.`;
    } else {
      fitHint.textContent = 'Set your hand size in the Guide to see personalized fit hints.';
    }
    fitBlock.classList.remove('d-none');
  } else {
    fitBlock.classList.add('d-none');
  }

  // Buttons
  document.getElementById('btnAddCompare').addEventListener('click', () => addToCompare(p.id));
  const btn = document.getElementById('btnAddCart');
  if (btn) {
    btn.classList.add('add-to-cart');
    btn.setAttribute('data-id', String(p.id));
  }


  // You might also like
  const recWrap = document.getElementById('youMayLike'); recWrap.innerHTML = '';
  let related = PRODUCTS.filter(x => x.id !== p.id && x.type === p.type);
  if (related.length < 3) {
    related = PRODUCTS.filter(x => x.id !== p.id && Math.abs(x.price - p.price) <= p.price * 0.2);
  }
  related.slice(0, 6).forEach(r => recWrap.insertAdjacentHTML('beforeend', productCardHTML(r)));

  // Recently viewed
  const recentIds = getRecent().filter(x => x !== p.id).slice(0, 5);
  const recentRow = document.getElementById('recentRow');
  const recentSection = document.getElementById('recentSection');
  recentRow.innerHTML = '';
  recentIds.map(id => PRODUCTS.find(pp => pp.id === id)).filter(Boolean).forEach(r => {
    recentRow.insertAdjacentHTML('beforeend', productCardHTML(r));
  });
  if (recentRow.children.length) { recentSection.classList.remove('d-none'); } else { recentSection.classList.add('d-none'); }
}

/* Run on detail page after products load */
document.addEventListener('DOMContentLoaded', async () => {
  try { await loadProducts(); } catch { }
  if (document.body.dataset.page === 'detail') { renderProductDetail(); }
});


// --- Release sticky buy box when "You might also like" reaches the top
document.addEventListener('DOMContentLoaded', () => {
  const sticky = document.querySelector('.sticky-side');
  const stopAt = document.getElementById('youMayLike');
  if (!sticky || !stopAt) return;

  // Height of your top bar; adjust if your header changes
  const headerHeight = 72;    // fallback
  const offset = 16 + headerHeight; // should match sticky top gap

  const toggleStickiness = () => {
    const top = stopAt.getBoundingClientRect().top;
    if (top <= offset) {
      sticky.classList.add('unstick');   // stop being sticky
    } else {
      sticky.classList.remove('unstick'); // stick again
    }
  };

  // Efficient scroll/resize listeners
  window.addEventListener('scroll', toggleStickiness, { passive: true });
  window.addEventListener('resize', toggleStickiness);
  toggleStickiness();
});




// ---------- Compare ----------
const METRICS = [
  { key: 'price', label: 'Price', better: 'lower' },
  { key: 'weight', label: 'Weight (g)', better: 'lower' },
  { key: 'battery', label: 'Battery (h)', better: 'higher', parse: (v) => v ? parseFloat(String(v).replace(/[^\d.]/g, '')) : null },
  { key: 'polling', label: 'Polling (Hz)', better: 'higher', parse: (v) => v ? parseInt(String(v).replace(/[^\d]/g, '')) : null },
  { key: 'rating', label: 'Rating ★', better: 'higher' },
  { key: 'lighting', label: 'Lighting', better: 'neutral' },
  { key: 'connectivity', label: 'Connectivity', better: 'neutral' },
  { key: 'sensor', label: 'Sensor (mouse)', better: 'neutral' },
  { key: 'dpi', label: 'DPI (max)', better: 'higher', parse: (v) => v ? parseInt(String(v).split('–').pop().replace(/[^\d]/g, '')) : null },
  { key: 'layout', label: 'Layout (kbd)', better: 'neutral' },
  { key: 'switchType', label: 'Switch Type (kbd)', better: 'neutral' },
  { key: 'mic', label: 'Mic (headset)', better: 'neutral' },
  { key: 'drivers', label: 'Drivers (mm)', better: 'higher', parse: (v) => v ? parseInt(String(v).replace(/[^\d]/g, '')) : null },
  { key: 'surround', label: 'Surround', better: 'neutral' },
  { key: 'dimensions', label: 'Length (mm)', better: 'depends', parse: (v) => v ? v.l : null }
];

// Pure function + tiny tests
function isBetter(a, b, metric, type = 'generic') {
  if (a == null || b == null) return null;
  const key = metric.key || metric;
  const meta = METRICS.find(m => m.key === key) || { better: 'neutral' };
  const parse = meta.parse || (x => x);
  let av = parse(a), bv = parse(b);
  if (typeof av === 'string' || typeof bv === 'string') return null;
  if (av == null || bv == null) return null;

  let mode = meta.better;
  if (key === 'dimensions' && type === 'mouse') { mode = 'lower'; } // shorter can fit more hands
  if (key === 'weight' && type === 'mouse') { mode = 'lower'; }
  if (key === 'battery') { mode = 'higher'; }
  if (key === 'price') { mode = 'lower'; }
  if (key === 'dpi' || key === 'polling' || key === 'rating' || key === 'drivers') { mode = 'higher'; }

  if (mode === 'higher') return av > bv ? 1 : (av < bv ? -1 : 0);
  if (mode === 'lower') return av < bv ? 1 : (av > bv ? -1 : 0);
  return 0;
}
// Console assertions
console.assert(isBetter(100, 80, { key: 'price' }) === -1, 'Price lower is better');
console.assert(isBetter(55, 70, { key: 'weight' }, 'mouse') === 1, 'Weight lower is better for mouse');
console.assert(isBetter('100–26000', '100–12000', { key: 'dpi', parse: (v) => parseInt(String(v).split('–').pop()) }) === 1, 'Higher DPI wins');

function renderCompare() {
  const container = $$('#compareTable'); if (!container) return;
  // Seed from URL ?ids=
  const urlIds = (getQueryParam('ids') || '').split(',').filter(Boolean);
  if (urlIds.length) { setCompareList(urlIds); }
  const ids = getCompareList();
  const items = ids.map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean);
  // Build header pickers
  const pickerWrap = $$('#pickerWrap');
  // Populate filters
  const allBrands = [...new Set(PRODUCTS.map(p => p.brand))].sort();
  const allTypes = [...new Set(PRODUCTS.map(p => p.type))];
  $$('#filterType').innerHTML = '<option value="">All types</option>' + allTypes.map(t => `<option>${t}</option>`).join('');
  $$('#filterBrand').innerHTML = '<option value="">All brands</option>' + allBrands.map(b => `<option>${b}</option>`).join('');

  function redrawPickList() {
    const type = $$('#filterType').value;
    const brand = $$('#filterBrand').value;
    const maxPrice = parseFloat($$('#filterPrice').value || '9999');
    const list = PRODUCTS
      .filter(p => !type || p.type === type)
      .filter(p => !brand || p.brand === brand)
      .filter(p => p.price <= maxPrice);
    const html = list.map(p => `
      <button class="btn btn-sm btn-outline-primary me-2 mb-2" data-id="${p.id}" aria-label="Add ${p.model} to comparison">
        + ${p.brand} ${p.model} (${fmtPrice(p.price)})
      </button>`).join('');
    $$('#pickerBtns').innerHTML = html || '<div class="text-muted">No items match filters.</div>';
    $$$('#pickerBtns [data-id]').forEach(btn => {
      btn.addEventListener('click', () => {
        addToCompare(btn.dataset.id);
        location.href = 'compare.html'; // refresh
      });
    });
  }
  ['filterType', 'filterBrand', 'filterPrice'].forEach(id => {
    const el = document.getElementById(id); if (el) el.addEventListener('input', redrawPickList);
  });
  redrawPickList();

  // Table
  if (items.length === 0) {
    container.innerHTML = '<div class="text-muted">No items in comparison. Use filters above to add (max 3).</div>';
    return;
  }

  const headCols = items.map(p => `
    <th class="text-center">
      <div class="d-flex align-items-center justify-content-center flex-column">
        <img src="${p.images[0]}" alt="${p.brand} ${p.model} image" style="width:80px; height:auto" class="mb-2 rounded">
        <div class="fw-bold">${p.brand} ${p.model}</div>
        <div class="small text-muted">${p.type}</div>
        <div class="mt-1">${fmtPrice(p.price)}</div>
        <div class="mt-2 d-flex gap-2">
          <a class="btn btn-sm btn-outline-primary" href="product-detail.html?id=${p.id}">Details</a>
          <button class="btn btn-sm btn-danger" onclick="removeFromCompare('${p.id}'); location.href='compare.html'">Remove</button>
        </div>
      </div>
    </th>`).join('');

  const rows = METRICS.map(m => {
    const vals = items.map(p => {
      const raw = p[m.key];
      return m.key === 'dimensions' ? (p.dimensions ? `${p.dimensions.w}×${p.dimensions.l}×${p.dimensions.h}` : '—') :
        raw ?? '—';
    });
    // compute winners
    let bestIdx = -1;
    if (['higher', 'lower', 'depends'].includes(m.better) || ['price', 'weight', 'battery', 'polling', 'rating', 'dpi', 'drivers', 'dimensions'].includes(m.key)) {
      // choose best via isBetter
      let score = -Infinity;
      items.forEach((p, idx) => {
        const a = p[m.key] ?? (m.key === 'dimensions' ? p.dimensions : null);
        let s = 0;
        items.forEach(q => {
          const b = q[m.key] ?? (m.key === 'dimensions' ? q.dimensions : null);
          const cmp = isBetter(a, b, m, p.type);
          s += (cmp === 1 ? 1 : 0);
        });
        if (s > score) { score = s; bestIdx = idx; }
      });
    }
    const cols = items.map((p, idx) => {
      const raw = p[m.key];
      const show = m.key === 'dimensions' ? (p.dimensions ? `${p.dimensions.l}` : '—') : raw;
      const text = m.key === 'dimensions' ? (p.dimensions ? `${p.dimensions.w}×${p.dimensions.l}×${p.dimensions.h}` : '—') :
        (m.key === 'battery' && raw ? `${raw}` : (raw ?? '—'));
      const cls = (bestIdx === idx ? 'win' : '');
      return `<td class="${cls}" data-raw="${show ?? ''}">${text}</td>`;
    }).join('');
    const tooltip = `data-bs-toggle="tooltip" title="${m.label} — hover for definition. Values ranked ${m.better === 'higher' ? 'higher is better' : m.better === 'lower' ? 'lower is better' : 'contextual'}."`;
    return `<tr><th scope="row" ${tooltip}>${m.label}</th>${cols}</tr>`;
  }).join('');

  container.innerHTML = `
    <div class="table-responsive">
      <table class="table table-compare table-striped table-hover align-middle">
        <thead><tr><th>Spec</th>${headCols}</tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>`;

  // Bootstrap tooltips
  $$$('[data-bs-toggle="tooltip"]').forEach(el => new bootstrap.Tooltip(el));

  // Share URL
  const share = items.map(p => p.id).join(',');
  $$('#btnCopyLink')?.addEventListener('click', async () => {
    const url = new URL(location.href); url.searchParams.set('ids', share);
    await navigator.clipboard.writeText(url.toString());
    showToast('Comparison link copied!');
    history.replaceState({}, '', url);
  });
}

// ---------- Guide ----------
function renderGuide() {
  const stepEls = $$$('.guide-step');
  const progress = $$('#guideProgress');
  let step = 1;

  const state = {
    category: localStorage.getItem('lastCategory') || '',
    mouse: { handCm: '', handSize: getHandSize() || '', grip: '' },
    keyboard: { layout: '', switchType: '' },
    headset: { mic: '', surround: '' }
  };

  function showStep(n) {
    step = n;
    stepEls.forEach((el, i) => el.classList.toggle('d-none', i !== n - 1));
    const pct = (n - 1) / (stepEls.length - 1) * 100;
    progress.style.width = `${pct}%`;
    progress.setAttribute('aria-valuenow', String(pct));
  }

  // Step 1
  const catSel = $$('#catSelect');
  if (catSel) {
    catSel.value = state.category || '';
    catSel.addEventListener('change', () => {
      state.category = catSel.value;
      setLastCategory(state.category);
    });
  }

  // Step 2 dynamic
  function updateHelper() {
    const wrap = $$('#prefWrap'); if (!wrap) return;
    wrap.innerHTML = '';
    if (state.category === 'mouse') {
      wrap.innerHTML = `
        <label class="form-label">Hand length (cm) <span class="text-muted">(measure wrist crease to fingertip)</span></label>
        <input type="range" min="14" max="22" step="0.5" value="${state.mouse.handCm || 18}" class="form-range" id="handLen" aria-label="Hand length">
        <div class="d-flex justify-content-between small"><span>14</span><span>18</span><span>22</span></div>
        <div class="mt-2" id="handSizeOut" aria-live="polite"></div>
        <label class="form-label mt-3">Preferred grip</label>
        <select id="gripSel" class="form-select">
          <option value="">Any</option>
          <option>palm</option><option>claw</option><option>finger</option>
        </select>
        <div class="mt-3 p-3 rounded hero-slim">
          <strong>Fit matrix:</strong>
          <div class="small mt-2">Small (≤16.9 cm) → mice ≤118 mm length, ≤65 mm width, ≤70 g</div>
          <div class="small">Medium (17–19 cm) → mice ≤125 mm length, ≤67 mm width</div>
          <div class="small">Large (≥19.1 cm) → mice ≥124 mm length, ≥66 mm width</div>
        </div>`;
      const hand = $$('#handLen'), out = $$('#handSizeOut'), gripSel = $$('#gripSel');
      function computeHandSize(v) {
        const cm = parseFloat(v);
        return cm <= 16.9 ? 'small' : (cm >= 19.1 ? 'large' : 'medium');
      }
      function onChange() {
        state.mouse.handCm = hand.value;
        state.mouse.handSize = computeHandSize(hand.value);
        out.innerHTML = `Estimated hand size: <span class="badge badge-good">${state.mouse.handSize.toUpperCase()}</span>`;
        setHandSize(state.mouse.handSize);
      }
      hand.addEventListener('input', onChange); gripSel.addEventListener('change', () => state.mouse.grip = gripSel.value);
      onChange();
    } else if (state.category === 'keyboard') {
      wrap.innerHTML = `
        <label class="form-label">Layout</label>
        <select id="layoutSel" class="form-select">
          <option value="">Any</option><option>60%</option><option>75%</option><option>TKL</option><option>100%</option>
        </select>
        <label class="form-label mt-3">Switch preference</label>
        <select id="switchPref" class="form-select">
          <option value="">Any</option><option>Linear</option><option>Tactile</option><option>Clicky</option><option>Optical Linear</option>
        </select>`;
      $$('#layoutSel').addEventListener('change', e => state.keyboard.layout = e.target.value);
      $$('#switchPref').addEventListener('change', e => state.keyboard.switchType = e.target.value);
    } else if (state.category === 'headset') {
      wrap.innerHTML = `
        <label class="form-label">Need a detachable mic?</label>
        <select id="micSel" class="form-select"><option value="">No preference</option><option>Detachable</option><option>Swivel-to-mute</option></select>
        <label class="form-label mt-3">Surround</label>
        <select id="surSel" class="form-select"><option value="">Any</option><option>7.1</option><option>Stereo</option></select>`;
      $$('#micSel').addEventListener('change', e => state.headset.mic = e.target.value);
      $$('#surSel').addEventListener('change', e => state.headset.surround = e.target.value);
    } else {
      wrap.innerHTML = '<div class="text-muted">Choose a category first.</div>';
    }
  }

  // Step 3 results
  function computeRecommendations() {
    let candidates = PRODUCTS;
    const reasons = [];
    if (state.category) candidates = candidates.filter(p => p.type === state.category);
    if (state.category === 'mouse') {
      const size = state.mouse.handSize;
      if (size) {
        reasons.push(`Matched for <strong>${size.toUpperCase()}</strong> hand size.`);
        candidates = candidates.filter(p => {
          if (!p.dimensions) return false;
          const L = p.dimensions.l, W = p.dimensions.w;
          if (size === 'small') return L <= 118 && W <= 65;
          if (size === 'medium') return L <= 125 && W <= 67;
          return L >= 124 && W >= 66;
        });
      }
      if (state.mouse.grip) {
        reasons.push(`Supports <strong>${state.mouse.grip}</strong> grip.`);
        candidates = candidates.filter(p => (p.grip || []).includes(state.mouse.grip));
      }
      candidates = candidates.sort((a, b) => (b.rating - a.rating) || (a.weight - b.weight));
    } else if (state.category === 'keyboard') {
      if (state.keyboard.layout) { reasons.push(`Layout preference <strong>${state.keyboard.layout}</strong>.`); candidates = candidates.filter(p => p.layout === state.keyboard.layout); }
      if (state.keyboard.switchType) { reasons.push(`Switch preference <strong>${state.keyboard.switchType}</strong>.`); candidates = candidates.filter(p => p.switchType?.includes(state.keyboard.switchType)); }
      candidates = candidates.sort((a, b) => b.rating - a.rating);
    } else if (state.category === 'headset') {
      if (state.headset.mic) { reasons.push(`Mic preference <strong>${state.headset.mic}</strong>.`); candidates = candidates.filter(p => p.mic && p.mic.includes(state.headset.mic)); }
      if (state.headset.surround) { reasons.push(`Surround preference <strong>${state.headset.surround}</strong>.`); candidates = candidates.filter(p => p.surround && p.surround.includes(state.headset.surround)); }
      candidates = candidates.sort((a, b) => b.rating - a.rating);
    }
    const top = candidates.slice(0, 3);
    const wrap = $$('#guideResults'); wrap.innerHTML = '';
    wrap.insertAdjacentHTML('beforeend', `<div class="mb-3">${reasons.length ? ('Why these: ' + reasons.join(' ')) : 'Top picks by rating.'}</div>`);
    if (top.length === 0) { wrap.innerHTML += `<div class="text-muted">No exact matches. Try relaxing filters.</div>`; return; }
    top.forEach(p => {
      wrap.insertAdjacentHTML('beforeend', `
        <div class="card mb-3">
          <div class="card-body d-flex gap-3 align-items-center">
            <img src="${p.images[0]}" alt="${p.brand} ${p.model} image" width="96" class="rounded">
            <div class="flex-grow-1">
              <div class="fw-bold">${p.brand} ${p.model}</div>
              <div class="small text-muted">${p.type} • ${p.features?.slice(0, 2).join(' • ') || ''}</div>
              <div class="mt-1">${fmtPrice(p.price)} • ${p.rating.toFixed(1)} ★</div>
              <div class="mt-2 d-flex gap-2">
                <a class="btn btn-sm btn-outline-primary" href="product-detail.html?id=${p.id}">Open</a>
                <button class="btn btn-sm btn-primary" onclick="addToCompare('${p.id}')">Add to Compare</button>
              </div>
            </div>
          </div>
        </div>`);
    });
  }

  // Nav buttons
  $$('#next1')?.addEventListener('click', () => { if (!state.category) { showToast('Choose a category.'); return; } updateHelper(); showStep(2); });
  $$('#back2')?.addEventListener('click', () => showStep(1));
  $$('#next2')?.addEventListener('click', () => { showStep(3); computeRecommendations(); });

  showStep(1);
}

// ---------- Currency + Theme toggles ----------
function initToggles() {
  $$('#currencyToggle')?.addEventListener('change', (e) => {
    const cur = e.target.checked ? 'MYR' : 'USD';
    setCookie('currency', cur, 7);
    setCookie('fx', '4.70', 7);
    location.reload();
  });
  const cur = getCookie('currency') || 'USD';
  if ($$('#currencyToggle')) $$('#currencyToggle').checked = (cur === 'MYR');

  $$('#themeToggle')?.addEventListener('change', (e) => {
    const theme = e.target.checked ? 'dark' : 'light';
    setTheme(theme);
  });
}

// ---------- Entry ----------
document.addEventListener('DOMContentLoaded', async () => {
  initThemeFromCookie();
  updateCompareBadge();
  initToggles();

  // Bootstrap toasts stack
  $$$('[data-bs-toggle="tooltip"]').forEach(el => new bootstrap.Tooltip(el));

  try {
    await loadProducts();
  } catch (e) {
    showToast('Failed to load products. Using fallback.');
  }

  const page = document.body.dataset.page;
  if (page === 'detail') renderProductDetail();
  if (page === 'compare') renderCompare();
  if (page === 'guide') renderGuide();
});

// ------- Page router (runs on every page) -------
$(function () {
  (async () => {
    await loadProducts();                 // fetch JSON or fallback block

    const page = document.body.dataset.page;
    if (page === 'compare' && typeof renderCompare === 'function') {
      renderCompare();
    } else if (page === 'detail' && typeof renderDetail === 'function') {
      renderDetail();
    } else if (page === 'guide' && typeof renderGuide === 'function') {
      renderGuide();
    }
  })();
});
