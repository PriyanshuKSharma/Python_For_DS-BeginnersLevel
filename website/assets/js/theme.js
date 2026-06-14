(function () {
  'use strict';

  const root = document.documentElement;
  const button = document.getElementById('themeToggle');
  const stored = localStorage.getItem('python-notes-theme');
  const preferred = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

  function apply(theme) {
    root.dataset.theme = theme;
    root.style.colorScheme = theme;
    if (!button) return;
    const dark = theme === 'dark';
    button.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
    button.setAttribute('title', dark ? 'Switch to light theme' : 'Switch to dark theme');
    button.setAttribute('aria-pressed', dark);
  }

  apply(stored || preferred);

  if (button) {
    button.addEventListener('click', () => {
      const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('python-notes-theme', next);
      apply(next);
    });
  }
})();
