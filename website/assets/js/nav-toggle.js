// ─────────────────────────────────────────────────
//  Navigation toggle for mobile
// ─────────────────────────────────────────────────

(function () {
  const toggle = document.getElementById('navToggle');
  const nav    = document.getElementById('siteNav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });

  // Close on outside click
  document.addEventListener('click', e => {
    if (!toggle.contains(e.target) && !nav.contains(e.target)) {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', false);
    }
  });
})();
