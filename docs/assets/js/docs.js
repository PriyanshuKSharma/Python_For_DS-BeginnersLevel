// ─────────────────────────────────────────────────
//  DOCS JS — Navigation, Routing, Sidebar
// ─────────────────────────────────────────────────

// ── 1. Route map ────────────────────────────────
const ROUTES = [
  { id: 'home',           label: 'Home',               icon: '🏠',  section: null },
  // Data Structures
  { id: 'ds-lists',       label: 'Lists',               icon: '📋',  section: 'Data Structures' },
  { id: 'ds-dicts',       label: 'Dictionaries',        icon: '🗝️',  section: 'Data Structures' },
  { id: 'ds-sets',        label: 'Sets',                icon: '🔵',  section: 'Data Structures' },
  { id: 'ds-tuples',      label: 'Tuples',              icon: '📦',  section: 'Data Structures' },
  { id: 'ds-strings',     label: 'Strings',             icon: '🔤',  section: 'Data Structures' },
  { id: 'ds-stacks',      label: 'Stacks',              icon: '📚',  section: 'Data Structures' },
  { id: 'ds-linked',      label: 'Linked Lists',        icon: '🔗',  section: 'Data Structures' },
  // Algorithms
  { id: 'algo-tc',        label: 'Time Complexity',     icon: '⏱️',  section: 'Algorithms' },
  { id: 'algo-sort',      label: 'Sorting Overview',    icon: '🔢',  section: 'Algorithms' },
  { id: 'algo-bubble',    label: 'Bubble Sort',         icon: '🛁',  section: 'Algorithms' },
  { id: 'algo-selection', label: 'Selection Sort',      icon: '🎯',  section: 'Algorithms' },
  { id: 'algo-insertion', label: 'Insertion Sort',      icon: '🃏',  section: 'Algorithms' },
  { id: 'algo-merge',     label: 'Merge Sort',          icon: '🤝',  section: 'Algorithms' },
  { id: 'algo-quick',     label: 'Quick Sort',          icon: '⚡',  section: 'Algorithms' },
  { id: 'algo-binary',    label: 'Binary Search',       icon: '✂️',  section: 'Algorithms' },
  { id: 'algo-linear',    label: 'Linear Search',       icon: '🔍',  section: 'Algorithms' },
  { id: 'algo-stable',    label: 'Stable vs Unstable',  icon: '⚖️',  section: 'Algorithms' },
  { id: 'algo-adaptive',  label: 'Adaptive vs Non-Adaptive', icon: '⚡', section: 'Algorithms' },
  // OOP
  { id: 'oop-intro',      label: 'OOP Intro',           icon: '🏛️',  section: 'OOP' },
  { id: 'oop-class',      label: 'Classes & Objects',   icon: '🧱',  section: 'OOP' },
  { id: 'oop-inherit',    label: 'Inheritance',         icon: '👨‍👦',  section: 'OOP' },
  { id: 'oop-poly',       label: 'Polymorphism',        icon: '🐦',  section: 'OOP' },
  { id: 'oop-encap',      label: 'Encapsulation',       icon: '🔒',  section: 'OOP' },
  { id: 'oop-abstract',   label: 'Abstraction',         icon: '🎭',  section: 'OOP' },
  { id: 'oop-constructors', label: 'Constructors',      icon: '🔧',  section: 'OOP' },
  // Data Science
  { id: 'ds-numpy',       label: 'NumPy',               icon: '🔢',  section: 'Data Science Libraries' },
  { id: 'ds-pandas',      label: 'Pandas',              icon: '🐼',  section: 'Data Science Libraries' },
];

// ── 2. Build sidebar ────────────────────────────
function buildSidebar() {
  const sidebar = document.getElementById('sidebar');
  const sections = {};
  ROUTES.forEach(r => {
    if (!r.section) return;
    if (!sections[r.section]) sections[r.section] = [];
    sections[r.section].push(r);
  });
  let html = '';
  for (const [sec, routes] of Object.entries(sections)) {
    html += `<div class="sidebar-section">
      <div class="sidebar-section-title">${sec}</div>`;
    routes.forEach(r => {
      html += `<a href="#${r.id}" data-page="${r.id}" id="nav-${r.id}">${r.icon} ${r.label}</a>`;
    });
    html += `</div>`;
  }
  sidebar.innerHTML = html;
  sidebar.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', e => { e.preventDefault(); navigateTo(a.dataset.page); closeSidebar(); });
  });
}

// ── 3. Navigate ─────────────────────────────────
function navigateTo(id) {
  // hide all pages
  document.querySelectorAll('.docs-page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.sidebar-section a').forEach(a => a.classList.remove('active'));
  // home
  if (id === 'home') {
    document.getElementById('page-home').classList.add('active');
    document.getElementById('home-link').classList.add('active');
  } else {
    const page = document.getElementById('page-' + id);
    if (page) { page.classList.add('active'); window.scrollTo(0, 0); }
    const nav = document.getElementById('nav-' + id);
    if (nav) nav.classList.add('active');
  }
  history.pushState({}, '', '#' + id);
}

// ── 4. Sidebar toggle (mobile) ───────────────────
function openSidebar() { document.getElementById('sidebar').classList.add('open'); }
function closeSidebar() { document.getElementById('sidebar').classList.remove('open'); }

// ── 5. Init ─────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  buildSidebar();
  document.getElementById('menu-toggle').addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('open');
  });
  document.getElementById('home-link').addEventListener('click', e => {
    e.preventDefault(); navigateTo('home'); closeSidebar();
  });
  // header nav links
  document.querySelectorAll('[data-nav]').forEach(el => {
    el.addEventListener('click', e => { e.preventDefault(); navigateTo(el.dataset.nav); });
  });
  // home cards
  document.querySelectorAll('[data-goto]').forEach(el => {
    el.addEventListener('click', () => navigateTo(el.dataset.goto));
  });
  // prev/next buttons
  document.querySelectorAll('[data-prev],[data-next]').forEach(btn => {
    btn.addEventListener('click', () => navigateTo(btn.dataset.prev || btn.dataset.next));
  });
  // handle hash
  const hash = location.hash.replace('#', '') || 'home';
  navigateTo(hash);
  // close sidebar on outside click (mobile)
  document.addEventListener('click', e => {
    const sidebar = document.getElementById('sidebar');
    const toggle  = document.getElementById('menu-toggle');
    if (!sidebar.contains(e.target) && !toggle.contains(e.target)) closeSidebar();
  });
});
