// ─────────────────────────────────────────────────
//  Home page — catalog rendering + search + filter
// ─────────────────────────────────────────────────

(function () {
  'use strict';

  const catalog       = document.getElementById('notesCatalog');
  const searchInput   = document.getElementById('searchInput');
  const visibleCount  = document.getElementById('visibleCount');
  const noResults     = document.getElementById('noResults');
  const noResultsQ    = document.getElementById('noResultsQuery');
  const statNotes     = document.getElementById('statNotes');
  const filterBtns    = document.querySelectorAll('.filter-btn');

  let currentCat = 'all';
  let currentQ   = '';

  // Stat counter
  if (statNotes) statNotes.textContent = PYTHON_NOTES.length;

  // ── Build a card ────────────────────────────────
  function buildCard(note, delay) {
    const a = document.createElement('a');
    a.className    = 'note-card';
    a.href         = `note.html?id=${note.id}`;
    a.style.animationDelay = `${delay * 0.04}s`;
    a.dataset.cat  = note.cat;
    a.dataset.title = note.title.toLowerCase();
    a.dataset.desc  = note.desc.toLowerCase();

    const badgeClass = BADGE_MAP[note.badge] || 'badge-foundation';
    const badgeLabel = BADGE_LABELS[note.badge] || note.badge;

    a.innerHTML = `
      <div class="card-header">
        <span class="card-icon" aria-hidden="true">${note.icon}</span>
        <div class="card-badges">
          <span class="badge ${badgeClass}">${badgeLabel}</span>
        </div>
      </div>
      <div class="card-title">${note.title}</div>
      <div class="card-desc">${note.desc}</div>
      <div class="card-meta">
        <span class="card-meta-tag">${note.tag || ''}</span>
        <svg class="card-arrow" viewBox="0 0 16 16" aria-hidden="true">
          <path d="M3 8h10M9 4l4 4-4 4"/>
        </svg>
      </div>
    `;
    return a;
  }

  // ── Render ───────────────────────────────────────
  function render() {
    catalog.innerHTML = '';
    let count = 0;

    PYTHON_NOTES.forEach((note, i) => {
      const catOk = currentCat === 'all' || note.cat === currentCat;
      const q = currentQ.trim().toLowerCase();
      const qOk = !q ||
        note.title.toLowerCase().includes(q) ||
        note.desc.toLowerCase().includes(q) ||
        (note.tag || '').toLowerCase().includes(q);

      if (catOk && qOk) {
        catalog.appendChild(buildCard(note, count));
        count++;
      }
    });

    visibleCount.textContent = count;
    if (count === 0) {
      noResults.classList.add('visible');
      noResultsQ.textContent = `"${currentQ}"`;
    } else {
      noResults.classList.remove('visible');
    }
  }

  // ── Filters ──────────────────────────────────────
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCat = btn.dataset.cat;
      render();
    });
  });

  // ── Search ───────────────────────────────────────
  searchInput.addEventListener('input', () => {
    currentQ = searchInput.value;
    render();
  });

  // Init
  render();
})();
