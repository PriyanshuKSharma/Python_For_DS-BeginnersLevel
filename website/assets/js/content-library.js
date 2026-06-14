(function () {
  'use strict';

  const list = document.getElementById('libraryList');
  const search = document.getElementById('librarySearch');
  const filters = document.getElementById('libraryFilters');
  const visible = document.getElementById('libraryVisible');
  const readerTitle = document.getElementById('readerTitle');
  const readerSource = document.getElementById('readerSource');
  const readerMeta = document.getElementById('readerMeta');
  const readerOriginal = document.getElementById('readerOriginal');
  const readerContent = document.getElementById('readerContent');
  const readerToc = document.getElementById('readerToc');
  let activeCategory = 'All';
  let activeId = location.hash.slice(1) || CONTENT_LIBRARY[0].id;

  const escapeHtml = value => value.replace(/[&<>"']/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;'
  }[char]));

  function inline(text) {
    return escapeHtml(text)
      .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<span class="missing-image">Image: $1</span>')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noreferrer">$1</a>')
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      .replace(/\*([^*]+)\*/g, '<em>$1</em>');
  }

  function renderMarkdown(text) {
    const lines = text.split(/\r?\n/);
    let html = '';
    let paragraph = [];
    let code = [];
    let inCode = false;
    let listType = '';
    let table = [];

    const flushParagraph = () => {
      if (paragraph.length) html += `<p>${inline(paragraph.join(' '))}</p>`;
      paragraph = [];
    };
    const closeList = () => {
      if (listType) html += `</${listType}>`;
      listType = '';
    };
    const flushTable = () => {
      if (!table.length) return;
      const rows = table.filter(row => !/^\s*\|?[\s:|-]+\|?\s*$/.test(row));
      html += '<div class="reader-table-wrap"><table>';
      rows.forEach((row, index) => {
        const cells = row.replace(/^\||\|$/g, '').split('|').map(cell => cell.trim());
        html += `<tr>${cells.map(cell => `<${index === 0 ? 'th' : 'td'}>${inline(cell)}</${index === 0 ? 'th' : 'td'}>`).join('')}</tr>`;
      });
      html += '</table></div>';
      table = [];
    };

    lines.forEach(line => {
      if (/^```/.test(line)) {
        flushParagraph(); closeList(); flushTable();
        if (inCode) {
          html += `<pre><code>${escapeHtml(code.join('\n'))}</code></pre>`;
          code = [];
        }
        inCode = !inCode;
        return;
      }
      if (inCode) { code.push(line); return; }
      if (/^\s*\|.*\|\s*$/.test(line)) {
        flushParagraph(); closeList(); table.push(line); return;
      }
      flushTable();
      const heading = line.match(/^(#{1,6})\s+(.+)$/);
      if (heading) {
        flushParagraph(); closeList();
        const level = Math.min(heading[1].length + 1, 6);
        html += `<h${level}>${inline(heading[2])}</h${level}>`;
        return;
      }
      const bullet = line.match(/^\s*[-*+]\s+(.+)$/);
      const number = line.match(/^\s*\d+[.)]\s+(.+)$/);
      if (bullet || number) {
        flushParagraph();
        const wanted = number ? 'ol' : 'ul';
        if (listType !== wanted) { closeList(); html += `<${wanted}>`; listType = wanted; }
        html += `<li>${inline((bullet || number)[1])}</li>`;
        return;
      }
      if (/^>\s?/.test(line)) {
        flushParagraph(); closeList();
        html += `<blockquote>${inline(line.replace(/^>\s?/, ''))}</blockquote>`;
        return;
      }
      if (/^---+$/.test(line.trim())) {
        flushParagraph(); closeList(); html += '<hr>'; return;
      }
      if (!line.trim()) { flushParagraph(); closeList(); return; }
      paragraph.push(line.trim());
    });
    flushParagraph(); closeList(); flushTable();
    if (inCode && code.length) html += `<pre><code>${escapeHtml(code.join('\n'))}</code></pre>`;
    return html;
  }

  function renderPdf(item) {
    return item.pages.map((page, index) =>
      `<section class="pdf-page"><div class="pdf-page-label">Page ${index + 1} of ${item.pages.length}</div><pre>${escapeHtml(page)}</pre></section>`
    ).join('');
  }

  function buildToc() {
    const headings = [...readerContent.querySelectorAll('h2, h3, h4')];
    readerToc.innerHTML = '';
    if (headings.length < 2) return;
    readerToc.innerHTML = '<strong>In this document</strong>';
    headings.slice(0, 40).forEach((heading, index) => {
      heading.id = `reader-section-${index + 1}`;
      const link = document.createElement('a');
      link.href = `#${heading.id}`;
      link.textContent = heading.textContent;
      readerToc.appendChild(link);
    });
  }

  function openDocument(id) {
    const item = CONTENT_LIBRARY.find(doc => doc.id === id) || CONTENT_LIBRARY[0];
    activeId = item.id;
    history.replaceState(null, '', `#${item.id}`);
    readerTitle.textContent = item.title;
    readerSource.textContent = `${item.source} / ${item.category}`;
    readerMeta.textContent = `${item.path} · ${item.lines.toLocaleString()} extracted lines${item.pages ? ` · ${item.pages.length} pages` : ''}`;
    readerOriginal.href = `../${encodeURI(item.path)}`;
    readerContent.innerHTML = item.source === 'Markdown' ? renderMarkdown(item.content) : item.source === 'Python' ? '<pre><code>' + escapeHtml(item.content) + '</code></pre>' : renderPdf(item);
    buildToc();
    document.querySelectorAll('.library-item').forEach(el => el.classList.toggle('active', el.dataset.id === item.id));
    if (innerWidth < 780) document.querySelector('.library-reader').scrollIntoView({ behavior: 'smooth' });
  }

  function renderList() {
    const query = search.value.trim().toLowerCase();
    const matches = CONTENT_LIBRARY.filter(item =>
      (activeCategory === 'All' || item.category === activeCategory) &&
      (!query || `${item.title} ${item.path} ${item.content}`.toLowerCase().includes(query))
    );
    visible.textContent = matches.length;
    list.innerHTML = matches.map(item => `
      <button class="library-item ${item.id === activeId ? 'active' : ''}" data-id="${item.id}">
        <span>${item.source}</span><strong>${item.title}</strong><small>${item.category} · ${item.pages ? `${item.pages.length} pages` : `${item.lines} lines`}</small>
      </button>`).join('');
    list.querySelectorAll('.library-item').forEach(button => button.addEventListener('click', () => openDocument(button.dataset.id)));
  }

  const categories = ['All', ...new Set(CONTENT_LIBRARY.map(item => item.category))];
  filters.innerHTML = categories.map(category => `<button class="${category === 'All' ? 'active' : ''}" data-category="${category}">${category}</button>`).join('');
  filters.querySelectorAll('button').forEach(button => button.addEventListener('click', () => {
    activeCategory = button.dataset.category;
    filters.querySelectorAll('button').forEach(item => item.classList.toggle('active', item === button));
    renderList();
  }));
  search.addEventListener('input', renderList);

  document.getElementById('libraryDocCount').textContent = CONTENT_LIBRARY.length;
  document.getElementById('libraryLineCount').textContent = CONTENT_LIBRARY.reduce((sum, item) => sum + item.lines, 0).toLocaleString();
  document.getElementById('libraryPageCount').textContent = CONTENT_LIBRARY.reduce((sum, item) => sum + (item.pages ? item.pages.length : 0), 0);
  renderList();
  openDocument(activeId);
})();
