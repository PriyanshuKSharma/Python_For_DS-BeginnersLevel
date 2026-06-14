// ─────────────────────────────────────────────────
//  Note page renderer — reads ?id= param and renders
// ─────────────────────────────────────────────────

(function () {
  'use strict';

  const params  = new URLSearchParams(location.search);
  const noteId  = params.get('id') || 'intro';
  const content = NOTE_CONTENT[noteId];
  const meta    = PYTHON_NOTES.find(n => n.id === noteId);

  // ── Sidebar navigation ──────────────────────────
  const sidebarNav = document.getElementById('sidebarNav');
  if (sidebarNav) {
    PYTHON_NOTES.forEach(note => {
      const a = document.createElement('a');
      a.href = `note.html?id=${note.id}`;
      a.textContent = `${note.icon} ${note.title}`;
      if (note.id === noteId) a.classList.add('active');
      sidebarNav.appendChild(a);
    });
  }

  // ── Main content ─────────────────────────────────
  const main = document.getElementById('noteMain');
  if (!main || !content) {
    if (main) main.innerHTML = '<p>Note not found.</p>';
    return;
  }

  // Title bar
  const titleEl = document.getElementById('noteTitle');
  if (titleEl) {
    titleEl.textContent = content.title;
    document.title = `${content.title} | Python Notes`;
  }

  // Sub
  const subEl = document.getElementById('noteSub');
  if (subEl && content.subtitle) subEl.textContent = content.subtitle;

  // Tags
  const tagsEl = document.getElementById('noteTags');
  if (tagsEl && content.tags) {
    const badgeClass = meta ? (BADGE_MAP[meta.badge] || '') : '';
    const badgeLabel = meta ? (BADGE_LABELS[meta.badge] || '') : '';
    tagsEl.innerHTML = content.tags.map(t =>
      `<span class="badge badge-foundation">${t}</span>`
    ).join('');
  }

  // Video
  const videoEl = document.getElementById('noteVideo');
  if (videoEl) {
    if (content.video) {
      videoEl.innerHTML = `<div class="video-wrap">
        <iframe src="${content.video}" title="${content.title}" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
      </div>`;
    }
  }

  // Source material for this note
  const sourcesEl = document.getElementById('noteSources');
  if (sourcesEl && meta) {
    const sources = [
      meta.pdf && { label: 'Open source PDF', href: `../${meta.pdf}`, kind: 'PDF' },
      meta.doc && { label: 'Read detailed Markdown guide', href: `../${meta.doc}`, kind: 'DOC', docPath: meta.doc },
      meta.pyFile && { label: 'Open practice Python file', href: `../${meta.pyFile}`, kind: 'PY', pyPath: meta.pyFile },
      meta.video && { label: 'Watch related video', href: meta.video, kind: 'VIDEO' }
    ].filter(Boolean);
    if (sources.length) {
      sourcesEl.innerHTML = `<section class="source-panel">
        <div><strong>Study sources</strong><span>Use the original course material alongside this note.</span></div>
        <div class="source-links">${sources.map(source => {
          if (source.kind === 'PY') return `<a href="${source.href}" class="py-source-link" data-path="${source.pyPath}"><b>${source.kind}</b>${source.label}</a>`;
          if (source.kind === 'DOC') return `<a href="${source.href}" class="doc-source-link" data-path="${source.docPath}"><b>${source.kind}</b>${source.label}</a>`;
          return `<a href="${source.href}" target="_blank" rel="noreferrer"><b>${source.kind}</b>${source.label}</a>`;
        }).join('')}</div>
      </section>`;
    }
  }

  // Body
  let bodyHTML = content.body || '';
  if (meta && meta.doc && typeof CONTENT_LIBRARY !== 'undefined') {
    const libEntry = CONTENT_LIBRARY.find(d => d.path === meta.doc);
    if (libEntry && typeof marked !== 'undefined') {
      bodyHTML = marked.parse(libEntry.content);
    }
  }
  main.innerHTML = bodyHTML;

  // On-page navigation
  const pageNav = document.getElementById('onPageNav');
  const headings = [...main.querySelectorAll('h2')];
  if (pageNav && headings.length > 2) {
    pageNav.innerHTML = '<strong>On this page</strong>';
    headings.forEach((heading, index) => {
      heading.id = `section-${index + 1}`;
      const link = document.createElement('a');
      link.href = `#${heading.id}`;
      link.textContent = heading.textContent;
      pageNav.appendChild(link);
    });
  }

  // Reading progress
  const progress = document.getElementById('readingProgress');
  if (progress) {
    const updateProgress = () => {
      const article = document.querySelector('.note-content');
      const start = article.offsetTop;
      const distance = Math.max(article.offsetHeight - innerHeight, 1);
      const percent = Math.min(100, Math.max(0, ((scrollY - start) / distance) * 100));
      progress.style.width = `${percent}%`;
    };
    addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
  }

  // Terminal Modal Logic
  const terminalOverlay = document.getElementById('codeTerminalModal');
  const terminalContent = document.getElementById('terminalCodeContent');
  const closeTerminalBtn = document.getElementById('closeTerminalBtn');

  if (terminalOverlay && terminalContent && closeTerminalBtn) {
    const preBlocks = main.querySelectorAll('pre');
    preBlocks.forEach(pre => {
      pre.addEventListener('click', () => {
        terminalContent.textContent = pre.textContent;
        terminalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });

    const pyLinks = document.querySelectorAll('.py-source-link');
    pyLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const pyPath = link.getAttribute('data-path');
        const libEntry = typeof CONTENT_LIBRARY !== 'undefined' ? CONTENT_LIBRARY.find(d => d.path === pyPath) : null;
        if (libEntry) {
          document.querySelector('.terminal-title').textContent = `bash — python3 ${pyPath}`;
          terminalContent.textContent = libEntry.content;
          terminalOverlay.classList.add('active');
          document.body.style.overflow = 'hidden';
        } else {
          window.open(link.href, '_blank');
        }
      });
    });

    const docLinks = document.querySelectorAll('.doc-source-link');
    docLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const docPath = link.getAttribute('data-path');
        const libEntry = typeof CONTENT_LIBRARY !== 'undefined' ? CONTENT_LIBRARY.find(d => d.path === docPath) : null;
        if (libEntry) {
          document.querySelector('.terminal-title').textContent = `bash — cat ${docPath}`;
          terminalContent.textContent = libEntry.content;
          terminalOverlay.classList.add('active');
          document.body.style.overflow = 'hidden';
        } else {
          window.open(link.href, '_blank');
        }
      });
    });

    closeTerminalBtn.addEventListener('click', () => {
      terminalOverlay.classList.remove('active');
      document.body.style.overflow = '';
    });

    terminalOverlay.addEventListener('click', (e) => {
      if (e.target === terminalOverlay) {
        terminalOverlay.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // ── Note navigation (prev / next) ─────────────────
  const idx  = PYTHON_NOTES.findIndex(n => n.id === noteId);
  const prev = idx > 0 ? PYTHON_NOTES[idx - 1] : null;
  const next = idx < PYTHON_NOTES.length - 1 ? PYTHON_NOTES[idx + 1] : null;

  const navEl = document.getElementById('noteNav');
  if (navEl) {
    navEl.innerHTML = `
      ${prev ? `<a class="note-nav-btn" href="note.html?id=${prev.id}">
        <svg viewBox="0 0 16 16"><path d="M13 8H3M7 4l-4 4 4 4"/></svg>
        ${prev.icon} ${prev.title}
      </a>` : '<span></span>'}
      ${next ? `<a class="note-nav-btn" href="note.html?id=${next.id}">
        ${next.icon} ${next.title}
        <svg viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
      </a>` : '<span></span>'}
    `;
  }
})();
