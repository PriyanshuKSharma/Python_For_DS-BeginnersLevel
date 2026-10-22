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
  let activeId = location.hash.slice(1) || (CONTENT_LIBRARY[0] ? CONTENT_LIBRARY[0].id : '');

  const escapeHtml = value => String(value).replace(/[&<>"']/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;'
  }[char]));

  // Fallback markdown parser if marked is unavailable
  function fallbackRenderMarkdown(text) {
    const lines = text.split(/\r?\n/);
    let html = '';
    let inCode = false;
    let code = [];
    lines.forEach(line => {
      if (/^```/.test(line)) {
        if (inCode) {
          html += `<pre><code>${escapeHtml(code.join('\n'))}</code></pre>`;
          code = [];
        }
        inCode = !inCode;
        return;
      }
      if (inCode) { code.push(line); return; }
      if (/^#\s+(.+)$/.test(line)) { html += `<h1>${escapeHtml(line.replace(/^#\s+/, ''))}</h1>`; return; }
      if (/^##\s+(.+)$/.test(line)) { html += `<h2>${escapeHtml(line.replace(/^##\s+/, ''))}</h2>`; return; }
      if (/^###\s+(.+)$/.test(line)) { html += `<h3>${escapeHtml(line.replace(/^###\s+/, ''))}</h3>`; return; }
      if (/^>\s+(.+)$/.test(line)) { html += `<blockquote>${escapeHtml(line.replace(/^>\s+/, ''))}</blockquote>`; return; }
      if (line.trim()) { html += `<p>${escapeHtml(line)}</p>`; }
    });
    return html;
  }

  function renderMarkdownWithEngine(text) {
    if (typeof marked !== 'undefined') {
      try {
        return marked.parse(text);
      } catch (e) {
        console.warn('Marked error, using fallback', e);
      }
    }
    return fallbackRenderMarkdown(text);
  }

  // Generate Interactive Simulator & Visual Diagram for Adaptive vs Non-Adaptive
  function getAdaptiveInteractiveWidget() {
    return `
      <div class="algo-sim-container" id="adaptiveSimWidget">
        <div class="algo-sim-header">
          <h3>⚡ Interactive Comparator: Adaptive vs Non-Adaptive Sorting</h3>
          <div class="algo-sim-controls">
            <span style="font-size: 0.75rem; color: var(--ink-soft); font-weight: 600;">Choose Scenario:</span>
            <button class="sim-preset-btn active" data-scenario="nearly">Nearly Sorted [1, 2, 3, 5, 4]</button>
            <button class="sim-preset-btn" data-scenario="sorted">Already Sorted [1, 2, 3, 4, 5]</button>
            <button class="sim-preset-btn" data-scenario="reverse">Reverse Sorted [5, 4, 3, 2, 1]</button>
            <button class="sim-run-btn" id="runSimBtn">▶ Run Live Simulation</button>
          </div>
        </div>

        <div class="sim-comparison-grid">
          <!-- Adaptive Panel -->
          <div class="sim-algo-panel adaptive">
            <div class="sim-panel-title">
              <strong>✅ Adaptive Sort (Insertion / Optimized Bubble)</strong>
              <span class="tag-badge beginner" style="background:#dcfce7; color:#15803d;">Best: O(n)</span>
            </div>
            <div class="sim-array-display" id="adaptiveArrayDisp">
              <div class="sim-item">1</div>
              <div class="sim-item">2</div>
              <div class="sim-item">3</div>
              <div class="sim-item">5</div>
              <div class="sim-item">4</div>
            </div>
            <div class="sim-stats">
              <div class="sim-stat-box"><span>Passes</span><strong id="adPasses">1</strong></div>
              <div class="sim-stat-box"><span>Comparisons</span><strong id="adComps">4</strong></div>
              <div class="sim-stat-box"><span>Swaps</span><strong id="adSwaps">1</strong></div>
            </div>
            <div class="sim-verdict win" id="adVerdict">
              🎉 <strong>Adaptive Superpower:</strong> Detects existing order! Terminates after 1 pass on sorted data. Runtime scales linearly O(n).
            </div>
          </div>

          <!-- Non-Adaptive Panel -->
          <div class="sim-algo-panel non-adaptive">
            <div class="sim-panel-title">
              <strong>❌ Non-Adaptive Sort (Selection Sort)</strong>
              <span class="tag-badge advanced" style="background:#fee2e2; color:#b91c1c;">Always: O(n²)</span>
            </div>
            <div class="sim-array-display" id="nonAdaptiveArrayDisp">
              <div class="sim-item">1</div>
              <div class="sim-item">2</div>
              <div class="sim-item">3</div>
              <div class="sim-item">5</div>
              <div class="sim-item">4</div>
            </div>
            <div class="sim-stats">
              <div class="sim-stat-box"><span>Passes</span><strong id="nadPasses">4</strong></div>
              <div class="sim-stat-box"><span>Comparisons</span><strong id="nadComps">10</strong></div>
              <div class="sim-stat-box"><span>Swaps</span><strong id="nadSwaps">1</strong></div>
            </div>
            <div class="sim-verdict rigid" id="nadVerdict">
              ⚠️ <strong>Rigid / Blind:</strong> Scans remaining elements every single pass regardless of order. Always performs n(n-1)/2 comparisons.
            </div>
          </div>
        </div>

        <!-- Workflow Diagram -->
        <div class="workflow-diagram">
          <div class="workflow-title">Decision Workflow: How Adaptive Algorithms Save CPU Cycles</div>
          <div class="flowchart-nodes">
            <div class="fc-node">1. Input Array</div>
            <span class="flow-arrow">➔</span>
            <div class="fc-node diamond">Check element pairs in pass</div>
            <span class="flow-arrow">➔</span>
            <div class="fc-node fc-decision-yes">Did any swaps occur? ➔ <strong>NO</strong><br><span style="color:#15803d; font-weight:700;">EXIT EARLY (O(n))</span></div>
            <span class="flow-arrow" style="color:var(--coral);">➔</span>
            <div class="fc-node fc-decision-no">Non-Adaptive has NO early exit ➔ <span style="color:#b91c1c; font-weight:700;">Executes all O(n²)</span></div>
          </div>
        </div>

        <!-- Master Classification Table -->
        <div style="margin-top: 1.5rem; overflow-x: auto;">
          <h4 style="margin: 0 0 0.8rem; font-size: 0.95rem; font-weight: 700;">Algorithm Classification Master Matrix</h4>
          <table style="width: 100%; border-collapse: collapse; font-size: 0.78rem; text-align: left;">
            <thead>
              <tr style="background: var(--bg-header); border-bottom: 2px solid var(--line);">
                <th style="padding: 0.5rem 0.75rem;">Algorithm</th>
                <th style="padding: 0.5rem 0.75rem;">Adaptive?</th>
                <th style="padding: 0.5rem 0.75rem;">Best Case</th>
                <th style="padding: 0.5rem 0.75rem;">Worst Case</th>
                <th style="padding: 0.5rem 0.75rem;">Mechanism</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1px solid var(--line);">
                <td style="padding: 0.5rem 0.75rem;"><strong>Insertion Sort</strong></td>
                <td style="padding: 0.5rem 0.75rem; color: #16a34a; font-weight: 700;">✅ Yes</td>
                <td style="padding: 0.5rem 0.75rem; color: #16a34a;">O(n)</td>
                <td style="padding: 0.5rem 0.75rem;">O(n²)</td>
                <td style="padding: 0.5rem 0.75rem;">Inner while-loop breaks immediately if element is already >= previous.</td>
              </tr>
              <tr style="border-bottom: 1px solid var(--line);">
                <td style="padding: 0.5rem 0.75rem;"><strong>Bubble Sort (Optimized)</strong></td>
                <td style="padding: 0.5rem 0.75rem; color: #16a34a; font-weight: 700;">✅ Yes</td>
                <td style="padding: 0.5rem 0.75rem; color: #16a34a;">O(n)</td>
                <td style="padding: 0.5rem 0.75rem;">O(n²)</td>
                <td style="padding: 0.5rem 0.75rem;">Monitors boolean <code>swapped</code> flag; stops when a pass makes zero swaps.</td>
              </tr>
              <tr style="border-bottom: 1px solid var(--line);">
                <td style="padding: 0.5rem 0.75rem;"><strong>Selection Sort</strong></td>
                <td style="padding: 0.5rem 0.75rem; color: #dc2626; font-weight: 700;">❌ No</td>
                <td style="padding: 0.5rem 0.75rem;">O(n²)</td>
                <td style="padding: 0.5rem 0.75rem;">O(n²)</td>
                <td style="padding: 0.5rem 0.75rem;">Always scans unsorted subarray to find absolute minimum element.</td>
              </tr>
              <tr style="border-bottom: 1px solid var(--line);">
                <td style="padding: 0.5rem 0.75rem;"><strong>Merge Sort</strong></td>
                <td style="padding: 0.5rem 0.75rem; color: #dc2626; font-weight: 700;">❌ No</td>
                <td style="padding: 0.5rem 0.75rem;">O(n log n)</td>
                <td style="padding: 0.5rem 0.75rem;">O(n log n)</td>
                <td style="padding: 0.5rem 0.75rem;">Always splits down to singletons and merges recursively.</td>
              </tr>
              <tr>
                <td style="padding: 0.5rem 0.75rem;"><strong>Quick Sort</strong></td>
                <td style="padding: 0.5rem 0.75rem; color: #dc2626; font-weight: 700;">❌ No</td>
                <td style="padding: 0.5rem 0.75rem;">O(n log n)</td>
                <td style="padding: 0.5rem 0.75rem;">O(n²)</td>
                <td style="padding: 0.5rem 0.75rem;">Standard implementation partitions regardless; degrades if sorted with poor pivot.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  // Attach interactive simulation event handlers
  function initAdaptiveSimulator() {
    const widget = document.getElementById('adaptiveSimWidget');
    if (!widget) return;

    const presetButtons = widget.querySelectorAll('.sim-preset-btn');
    const runBtn = document.getElementById('runSimBtn');

    const presets = {
      nearly: [1, 2, 3, 5, 4],
      sorted: [1, 2, 3, 4, 5],
      reverse: [5, 4, 3, 2, 1]
    };

    let activeScenario = 'nearly';

    function updateScenario(scenario) {
      activeScenario = scenario;
      const arr = presets[scenario];

      presetButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.scenario === scenario));

      const adDisp = document.getElementById('adaptiveArrayDisp');
      const nadDisp = document.getElementById('nonAdaptiveArrayDisp');

      adDisp.innerHTML = arr.map(n => `<div class="sim-item">${n}</div>`).join('');
      nadDisp.innerHTML = arr.map(n => `<div class="sim-item">${n}</div>`).join('');

      const n = arr.length;
      if (scenario === 'sorted') {
        document.getElementById('adPasses').textContent = '1';
        document.getElementById('adComps').textContent = String(n - 1);
        document.getElementById('adSwaps').textContent = '0';
        document.getElementById('adVerdict').innerHTML = '🏆 <strong>Best Case Triggered:</strong> Already sorted! Exactly 0 swaps in pass 1 ➔ Exited in <strong>O(n) time!</strong>';

        document.getElementById('nadPasses').textContent = String(n - 1);
        document.getElementById('nadComps').textContent = String((n * (n - 1)) / 2);
        document.getElementById('nadSwaps').textContent = '0';
        document.getElementById('nadVerdict').innerHTML = '⚠️ <strong>Non-Adaptive:</strong> Even though sorted, it still ran all 10 comparisons!';
      } else if (scenario === 'nearly') {
        document.getElementById('adPasses').textContent = '2';
        document.getElementById('adComps').textContent = '7';
        document.getElementById('adSwaps').textContent = '1';
        document.getElementById('adVerdict').innerHTML = '⚡ <strong>Adaptive Win:</strong> Only 1 swap needed (5 and 4). Stopped on pass 2 with minimal comparisons.';

        document.getElementById('nadPasses').textContent = String(n - 1);
        document.getElementById('nadComps').textContent = '10';
        document.getElementById('nadSwaps').textContent = '1';
        document.getElementById('nadVerdict').innerHTML = '⚠️ <strong>Non-Adaptive:</strong> Ran all 10 comparisons across all 4 passes.';
      } else {
        document.getElementById('adPasses').textContent = String(n - 1);
        document.getElementById('adComps').textContent = '10';
        document.getElementById('adSwaps').textContent = '10';
        document.getElementById('adVerdict').innerHTML = '📊 <strong>Worst Case:</strong> Reverse sorted requires maximum comparisons and swaps.';

        document.getElementById('nadPasses').textContent = String(n - 1);
        document.getElementById('nadComps').textContent = '10';
        document.getElementById('nadSwaps').textContent = '2';
        document.getElementById('nadVerdict').innerHTML = '📊 <strong>Selection Sort:</strong> Same 10 comparisons performed as always.';
      }
    }

    presetButtons.forEach(btn => {
      btn.addEventListener('click', () => updateScenario(btn.dataset.scenario));
    });

    if (runBtn) {
      runBtn.addEventListener('click', () => {
        const adItems = widget.querySelectorAll('#adaptiveArrayDisp .sim-item');
        adItems.forEach((item, idx) => {
          setTimeout(() => {
            item.classList.add('checking');
            setTimeout(() => {
              item.classList.remove('checking');
              item.classList.add('sorted');
            }, 300);
          }, idx * 180);
        });
      });
    }

    updateScenario('nearly');
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
      link.addEventListener('click', (e) => {
        e.preventDefault();
        heading.scrollIntoView({ behavior: 'smooth' });
      });
      readerToc.appendChild(link);
    });
  }

  function openDocument(id) {
    const item = CONTENT_LIBRARY.find(doc => doc.id === id) || CONTENT_LIBRARY[0];
    if (!item) return;

    activeId = item.id;
    history.replaceState(null, '', `#${item.id}`);
    readerTitle.textContent = item.title;
    readerSource.textContent = `${item.source} / ${item.category}`;
    readerMeta.textContent = `${item.path} · ${item.lines.toLocaleString()} extracted lines${item.pages ? ` · ${item.pages.length} pages` : ''}`;
    readerOriginal.href = `../${encodeURI(item.path)}`;

    // Build reader content
    if (item.source === 'Markdown') {
      readerContent.className = 'reader-content note-content';
      let contentHtml = '';

      // If document is Adaptive vs Non-Adaptive, inject interactive simulation widget!
      if (item.id.includes('adaptive') || item.path.includes('Adaptive_vs_NonAdaptive')) {
        contentHtml += getAdaptiveInteractiveWidget();
      }

      contentHtml += renderMarkdownWithEngine(item.content);
      readerContent.innerHTML = contentHtml;

      if (item.id.includes('adaptive') || item.path.includes('Adaptive_vs_NonAdaptive')) {
        initAdaptiveSimulator();
      }
    } else if (item.source === 'PDF') {
      readerContent.className = 'reader-content note-content';
      readerContent.innerHTML = renderPdf(item);
    } else if (item.source === 'Python') {
      readerContent.className = 'reader-content terminal-modal';
      readerContent.style.display = 'flex';
      readerContent.style.flexDirection = 'column';
      readerContent.style.margin = '0 auto';
      readerContent.innerHTML = `
        <div class="terminal-header" style="border-radius: 6px 6px 0 0;">
          <div class="terminal-dots">
            <div class="terminal-dot red"></div>
            <div class="terminal-dot yellow"></div>
            <div class="terminal-dot green"></div>
          </div>
          <div class="terminal-title">bash — python3 ${item.path.split('/').pop()}</div>
        </div>
        <div class="terminal-body" style="border-radius: 0 0 6px 6px;">${escapeHtml(item.content)}</div>
      `;
    }

    buildToc();

    // Attach copy buttons to all code blocks in reader
    readerContent.querySelectorAll('pre').forEach(pre => {
      if (!pre.parentElement.classList.contains('card-code-wrap')) {
        const copyBtn = document.createElement('button');
        copyBtn.className = 'copy-btn';
        copyBtn.style.position = 'absolute';
        copyBtn.style.top = '8px';
        copyBtn.style.right = '8px';
        copyBtn.textContent = 'Copy';
        pre.style.position = 'relative';

        copyBtn.addEventListener('click', async (e) => {
          e.stopPropagation();
          const code = pre.querySelector('code') || pre;
          try {
            await navigator.clipboard.writeText(code.textContent);
            copyBtn.textContent = 'Copied!';
            copyBtn.classList.add('copied');
            setTimeout(() => {
              copyBtn.textContent = 'Copy';
              copyBtn.classList.remove('copied');
            }, 1800);
          } catch (err) {
            console.error('Failed to copy', err);
          }
        });
        pre.appendChild(copyBtn);
      }
    });

    // Sync active sidebar item
    document.querySelectorAll('.library-item').forEach(el => {
      const isActive = el.dataset.id === item.id;
      el.classList.toggle('active', isActive);
      if (isActive) {
        el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });

    if (innerWidth < 780) {
      document.querySelector('.library-reader').scrollIntoView({ behavior: 'smooth' });
    }
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

  window.addEventListener('hashchange', () => {
    const newId = location.hash.slice(1);
    if (newId && newId !== activeId) {
      openDocument(newId);
    }
  });

  document.getElementById('libraryDocCount').textContent = CONTENT_LIBRARY.length;
  document.getElementById('libraryLineCount').textContent = CONTENT_LIBRARY.reduce((sum, item) => sum + item.lines, 0).toLocaleString();
  document.getElementById('libraryPageCount').textContent = CONTENT_LIBRARY.reduce((sum, item) => sum + (item.pages ? item.pages.length : 0), 0);

  renderList();
  openDocument(activeId);
})();
