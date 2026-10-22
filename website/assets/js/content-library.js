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
  // Generate Modern Executive Tabbed Masterclass for Adaptive vs Non-Adaptive Sorting
  function getAdaptiveInteractiveWidget() {
    return `
      <div class="adaptive-masterclass" id="adaptiveSimWidget">
        <div class="masterclass-header">
          <div style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:0.5rem;">
            <span class="tag-badge core">Algorithm Architecture & Complexity</span>
            <span style="font-family:var(--mono); font-size:0.72rem; color:var(--ink-soft);">Inversion Count & Asymptotics</span>
          </div>
          <h2>Adaptive vs. Non-Adaptive Sorting: Computational Intelligence</h2>
          <p style="margin:0.35rem 0 0; color:var(--ink-soft); font-size:0.86rem; line-height:1.5;">
            An algorithmic paradigm analysis examining how algorithms exploit pre-existing order in data sequences to minimize comparisons, swaps, and CPU cycles.
          </p>
        </div>

        <!-- Interactive Concept Navigation Tabs -->
        <div class="masterclass-tabs">
          <button class="mc-tab-btn active" data-tab="theory">CS Theory & Inversion Count</button>
          <button class="mc-tab-btn" data-tab="hinglish">Revision Notes (Hinglish)</button>
          <button class="mc-tab-btn" data-tab="code">Implementation Differences</button>
          <button class="mc-tab-btn" data-tab="matrix">Classification Matrix</button>
          <button class="mc-tab-btn" data-tab="interview">Interview Master FAQs</button>
        </div>

        <!-- TAB 1: FORMAL CS THEORY -->
        <div class="mc-pane active" id="pane-theory">
          <div class="card-concept">
            <h4 style="margin:0 0 0.5rem; font-size:1.05rem; color:var(--ink);">What Qualifies an Algorithm as Adaptive?</h4>
            <p>
              In computer science, a sorting algorithm is formally designated as <strong>adaptive</strong> if its execution runtime decreases proportionally as the sortedness of the input array increases. If the input list possesses few out-of-order pairs (low <em>inversion count</em>), an adaptive algorithm detects this state and terminates early, achieving an asymptotic lower bound of <strong>O(n)</strong> time.
            </p>
            <p>
              Conversely, a <strong>non-adaptive</strong> sorting algorithm is <em>order-blind</em>: its control flow, loop invariants, and number of element comparisons remain invariant regardless of whether the input is randomly shuffled, reversed, or already perfectly sorted.
            </p>
          </div>

          <div class="workflow-diagram" style="margin: 1.25rem 0;">
            <div class="workflow-title">Asymptotic Divergence: Adaptive Early-Exit vs Non-Adaptive Invariant Loop</div>
            <div class="flowchart-nodes">
              <div class="fc-node">Input Array A[0...n-1]</div>
              <span class="flow-arrow">➔</span>
              <div class="fc-node diamond">Monitor Swaps in Pass i</div>
              <span class="flow-arrow">➔</span>
              <div class="fc-node fc-decision-yes">Swaps == 0 (Sorted)<br><strong style="color:#15803d;">Exit Immediately: O(n)</strong></div>
              <span class="flow-arrow">➔</span>
              <div class="fc-node fc-decision-no">Non-Adaptive (Selection Sort)<br><strong style="color:#b91c1c;">Must Execute all n(n-1)/2 Comps</strong></div>
            </div>
          </div>

          <div style="background:var(--surface-soft); border:1px solid var(--line); border-radius:8px; padding:1rem; margin-top:1rem;">
            <h5 style="margin:0 0 0.4rem; font-size:0.88rem; color:var(--ink);">Mathematical Inversion Count: Inv(A)</h5>
            <p style="margin:0; font-size:0.8rem; color:var(--ink-soft); line-height:1.5;">
              An inversion is defined as a pair of indices <code>(i, j)</code> such that <code>i &lt; j</code> and <code>A[i] &gt; A[j]</code>. A sorted array has <code>Inv(A) = 0</code>; a reverse-sorted array has <code>Inv(A) = n(n - 1) / 2</code>.
              For <strong>Insertion Sort</strong>, the total runtime is precisely bounded by <strong>O(n + Inv(A))</strong>. When <code>Inv(A) = 0</code>, runtime reduces to linear time <strong>O(n)</strong>.
            </p>
          </div>
        </div>

        <!-- TAB 2: HINGLISH REVISION NOTES -->
        <div class="mc-pane" id="pane-hinglish">
          <div class="card-concept" style="border-left: 3px solid var(--blue);">
            <h4 style="margin:0 0 0.5rem; font-size:1.05rem; color:var(--ink);">Layman & Intuitive Understanding (Hinglish)</h4>
            <p>
              <strong>Adaptive Algorithm kya hota hai?</strong><br>
              Ek algorithm ko <em>Adaptive</em> tab bolte hain jab woh array ke pehle se bane hue order ka faayda uthana jaanta ho. Agar hum use pehle se sorted ya lagbhag sorted list dete hain, toh woh faltu comparisons aur operations karne ke bajaye jaldi exit kar leta hai.
            </p>
            <p>
              <em>Real-life Analogy:</em> Jaise ek smart student jo pehle se arrange ki gayi library books ko dekh kar samajh jata hai ki sab theek hai aur turant kaam khatam kar deta hai—yeh <strong>Insertion Sort</strong> ya <strong>Optimized Bubble Sort</strong> hai (Sirf O(n) time!).
            </p>
            <p>
              <strong>Non-Adaptive Algorithm kya hota hai?</strong><br>
              Non-Adaptive algorithm bilkul order-blind hota hai. Use isse koi farak nahi padta ki array pehle se sorted hai ya reverse. Woh har baar pure array mein jaakar har ek element ko bar-bar scan karega hi karega.
            </p>
            <p>
              <em>Real-life Analogy:</em> Jaise ek robotic scanner jo sorted books ko bhi utna hi time lagakar ek-ek karke scan karega—yeh <strong>Selection Sort</strong> hai (Hamesha O(n²) time, chahe kuch bhi ho!).
            </p>
          </div>
        </div>

        <!-- TAB 3: CODE DIFFERENCES -->
        <div class="mc-pane" id="pane-code">
          <div class="mc-code-compare">
            <!-- Adaptive Implementation -->
            <div class="mc-code-box">
              <div class="mc-code-box-header">
                <span>Adaptive Bubble Sort (With Flag)</span>
                <span class="tag-badge beginner" style="background:rgba(34,197,94,0.2); color:#4ade80;">Best: O(n)</span>
              </div>
              <pre><code>def adaptive_bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        # Flag to detect any swaps in this pass
        swapped = False
        
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True
                
        # KEY ADAPTIVE TRIGGER:
        # If no swaps occurred, array is already sorted!
        if not swapped:
            break  # Exits immediately in O(n)
            
    return arr</code></pre>
            </div>

            <!-- Non-Adaptive Implementation -->
            <div class="mc-code-box">
              <div class="mc-code-box-header">
                <span>Non-Adaptive Selection Sort</span>
                <span class="tag-badge advanced" style="background:rgba(239,68,68,0.2); color:#f87171;">Always: O(n²)</span>
              </div>
              <pre><code>def selection_sort(arr):
    n = len(arr)
    for i in range(n):
        min_idx = i
        
        # RIGID SCANNING:
        # Always scans the entire unsorted partition
        # regardless of whether it is already sorted!
        for j in range(i + 1, n):
            if arr[j] < arr[min_idx]:
                min_idx = j
                
        # Swap minimum with first element
        arr[i], arr[min_idx] = arr[min_idx], arr[i]
        
    return arr  # Always n(n-1)/2 comparisons!</code></pre>
            </div>
          </div>
        </div>

        <!-- TAB 4: CLASSIFICATION MATRIX -->
        <div class="mc-pane" id="pane-matrix">
          <div style="overflow-x: auto; margin-top:0.5rem;">
            <table style="width:100%; border-collapse:collapse; font-size:0.8rem; text-align:left;">
              <thead>
                <tr style="background:var(--bg-header); border-bottom:2px solid var(--line);">
                  <th style="padding:0.6rem 0.8rem;">Algorithm</th>
                  <th style="padding:0.6rem 0.8rem;">Adaptive?</th>
                  <th style="padding:0.6rem 0.8rem;">Best Case</th>
                  <th style="padding:0.6rem 0.8rem;">Worst Case</th>
                  <th style="padding:0.6rem 0.8rem;">Mechanical Reason</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom:1px solid var(--line);">
                  <td style="padding:0.6rem 0.8rem;"><strong>Insertion Sort</strong></td>
                  <td style="padding:0.6rem 0.8rem; color:#15803d; font-weight:700;">Yes (Naturally)</td>
                  <td style="padding:0.6rem 0.8rem; font-family:var(--mono);">O(n)</td>
                  <td style="padding:0.6rem 0.8rem; font-family:var(--mono);">O(n²)</td>
                  <td style="padding:0.6rem 0.8rem;">Inner while-loop breaks immediately when adjacent element is smaller.</td>
                </tr>
                <tr style="border-bottom:1px solid var(--line);">
                  <td style="padding:0.6rem 0.8rem;"><strong>Bubble Sort (Optimized)</strong></td>
                  <td style="padding:0.6rem 0.8rem; color:#15803d; font-weight:700;">Yes (With Flag)</td>
                  <td style="padding:0.6rem 0.8rem; font-family:var(--mono);">O(n)</td>
                  <td style="padding:0.6rem 0.8rem; font-family:var(--mono);">O(n²)</td>
                  <td style="padding:0.6rem 0.8rem;">Monitors boolean <code>swapped</code> flag; terminates after pass 1 if 0 swaps.</td>
                </tr>
                <tr style="border-bottom:1px solid var(--line);">
                  <td style="padding:0.6rem 0.8rem;"><strong>Selection Sort</strong></td>
                  <td style="padding:0.6rem 0.8rem; color:#b91c1c; font-weight:700;">No</td>
                  <td style="padding:0.6rem 0.8rem; font-family:var(--mono);">O(n²)</td>
                  <td style="padding:0.6rem 0.8rem; font-family:var(--mono);">O(n²)</td>
                  <td style="padding:0.6rem 0.8rem;">Always scans unsorted subarray to find absolute minimum element.</td>
                </tr>
                <tr style="border-bottom:1px solid var(--line);">
                  <td style="padding:0.6rem 0.8rem;"><strong>Merge Sort</strong></td>
                  <td style="padding:0.6rem 0.8rem; color:#b91c1c; font-weight:700;">No</td>
                  <td style="padding:0.6rem 0.8rem; font-family:var(--mono);">O(n log n)</td>
                  <td style="padding:0.6rem 0.8rem; font-family:var(--mono);">O(n log n)</td>
                  <td style="padding:0.6rem 0.8rem;">Always splits down to singletons and merges recursively.</td>
                </tr>
                <tr style="border-bottom:1px solid var(--line);">
                  <td style="padding:0.6rem 0.8rem;"><strong>Quick Sort</strong></td>
                  <td style="padding:0.6rem 0.8rem; color:#b91c1c; font-weight:700;">No</td>
                  <td style="padding:0.6rem 0.8rem; font-family:var(--mono);">O(n log n)</td>
                  <td style="padding:0.6rem 0.8rem; font-family:var(--mono);">O(n²)</td>
                  <td style="padding:0.6rem 0.8rem;">Partitions regardless of order; degrades to O(n²) if pivot choice is naïve.</td>
                </tr>
                <tr>
                  <td style="padding:0.6rem 0.8rem;"><strong>Timsort (Python Built-in)</strong></td>
                  <td style="padding:0.6rem 0.8rem; color:#15803d; font-weight:700;">Yes (Highly Adaptive)</td>
                  <td style="padding:0.6rem 0.8rem; font-family:var(--mono);">O(n)</td>
                  <td style="padding:0.6rem 0.8rem; font-family:var(--mono);">O(n log n)</td>
                  <td style="padding:0.6rem 0.8rem;">Detects natural ascending/descending runs; merges them with galloping mode.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- TAB 5: INTERVIEW FAQS -->
        <div class="mc-pane" id="pane-interview">
          <div class="card-notes" style="margin-top:0.5rem;">
            <div class="notes-title">Interview Edge Cases & Technical FAQs</div>
            <ul>
              <li><strong>Why is Python's standard <code>list.sort()</code> (Timsort) adaptive?</strong><br>
                Timsort was engineered by Tim Peters in 2002 specifically for real-world data, which frequently contains existing sorted chunks ("runs"). Timsort scans for these runs in linear O(n) time, avoiding unnecessary partitions.
              </li>
              <li><strong>Can QuickSort be made adaptive?</strong><br>
                Standard QuickSort is not adaptive. However, 3-way Dijkstra Dutch National Flag partitioning makes it adaptive to duplicate elements, reducing runtime from O(n log n) to O(n) when all elements are identical.
              </li>
              <li><strong>Why do operating systems and DBMS query engines prefer adaptive sorting for streaming records?</strong><br>
                Real-world database tables and time-series events often arrive nearly sorted (e.g. timestamp logs with minor latency jitters). Adaptive algorithms resolve near-sorted streams in near O(n) time, preventing CPU bottlenecks.
              </li>
            </ul>
          </div>
        </div>

        <!-- LIVE INTERACTIVE COMPARATOR CONTROLS -->
        <div style="margin-top: 1.5rem; padding-top: 1.25rem; border-top: 1px solid var(--line);">
          <div class="algo-sim-header" style="border:0; padding:0; margin-bottom:1rem;">
            <div>
              <span class="tag-badge core" style="margin-bottom:0.25rem;">Interactive Simulator</span>
              <h3 style="margin:0; font-size:1.1rem;">Live Array Comparison: Adaptive vs. Non-Adaptive</h3>
            </div>
            <div class="algo-sim-controls">
              <span style="font-size: 0.75rem; color: var(--ink-soft); font-weight: 600;">Scenario:</span>
              <button class="sim-preset-btn active" data-scenario="nearly">Nearly Sorted [1, 2, 3, 5, 4]</button>
              <button class="sim-preset-btn" data-scenario="sorted">Already Sorted [1, 2, 3, 4, 5]</button>
              <button class="sim-preset-btn" data-scenario="reverse">Reverse Sorted [5, 4, 3, 2, 1]</button>
            </div>
          </div>

          <div class="sim-comparison-grid">
            <!-- Adaptive Panel -->
            <div class="sim-algo-panel adaptive">
              <div class="sim-panel-title">
                <strong>Adaptive Sort (Optimized Bubble / Insertion)</strong>
                <span class="tag-badge beginner">Best: O(n)</span>
              </div>
              <div class="sim-array-display" id="adaptiveArrayDisp">
                <div class="sim-item">1</div><div class="sim-item">2</div><div class="sim-item">3</div><div class="sim-item">5</div><div class="sim-item">4</div>
              </div>
              <div class="sim-stats">
                <div class="sim-stat-box"><span>Passes</span><strong id="adPasses">1</strong></div>
                <div class="sim-stat-box"><span>Comparisons</span><strong id="adComps">4</strong></div>
                <div class="sim-stat-box"><span>Swaps</span><strong id="adSwaps">1</strong></div>
              </div>
              <div class="sim-verdict win" id="adVerdict">
                <strong>Order-Aware:</strong> Detects pre-existing order and halts early!
              </div>
            </div>

            <!-- Non-Adaptive Panel -->
            <div class="sim-algo-panel non-adaptive">
              <div class="sim-panel-title">
                <strong>Non-Adaptive Sort (Selection Sort)</strong>
                <span class="tag-badge advanced">Always: O(n²)</span>
              </div>
              <div class="sim-array-display" id="nonAdaptiveArrayDisp">
                <div class="sim-item">1</div><div class="sim-item">2</div><div class="sim-item">3</div><div class="sim-item">5</div><div class="sim-item">4</div>
              </div>
              <div class="sim-stats">
                <div class="sim-stat-box"><span>Passes</span><strong id="nadPasses">4</strong></div>
                <div class="sim-stat-box"><span>Comparisons</span><strong id="nadComps">10</strong></div>
                <div class="sim-stat-box"><span>Swaps</span><strong id="nadSwaps">1</strong></div>
              </div>
              <div class="sim-verdict rigid" id="nadVerdict">
                <strong>Order-Blind:</strong> Always executes all n(n-1)/2 comparisons regardless of initial ordering.
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }


  // Attach interactive simulation event handlers
  // Attach interactive simulation & tab handlers
  function initAdaptiveSimulator() {
    const widget = document.getElementById('adaptiveSimWidget');
    if (!widget) return;

    // Tab switching logic
    const tabBtns = widget.querySelectorAll('.mc-tab-btn');
    const panes = widget.querySelectorAll('.mc-pane');
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        panes.forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        const targetPane = widget.querySelector('#pane-' + btn.dataset.tab);
        if (targetPane) targetPane.classList.add('active');
      });
    });

    const presetButtons = widget.querySelectorAll('.sim-preset-btn');
    const presets = {
      nearly: [1, 2, 3, 5, 4],
      sorted: [1, 2, 3, 4, 5],
      reverse: [5, 4, 3, 2, 1]
    };

    function updateScenario(scenario) {
      const arr = presets[scenario];
      presetButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.scenario === scenario));

      const adDisp = document.getElementById('adaptiveArrayDisp');
      const nadDisp = document.getElementById('nonAdaptiveArrayDisp');
      if (adDisp) adDisp.innerHTML = arr.map(n => `<div class="sim-item">${n}</div>`).join('');
      if (nadDisp) nadDisp.innerHTML = arr.map(n => `<div class="sim-item">${n}</div>`).join('');

      const n = arr.length;
      if (scenario === 'sorted') {
        document.getElementById('adPasses').textContent = '1';
        document.getElementById('adComps').textContent = (n - 1).toString();
        document.getElementById('adSwaps').textContent = '0';
        document.getElementById('adVerdict').innerHTML = '<strong>Order Detected:</strong> 0 swaps occurred in pass 1! Early exit trigger fired: runs in <strong>O(n) linear time</strong>.';

        document.getElementById('nadPasses').textContent = (n - 1).toString();
        document.getElementById('nadComps').textContent = ((n * (n - 1)) / 2).toString();
        document.getElementById('nadSwaps').textContent = '0';
        document.getElementById('nadVerdict').innerHTML = '<strong>Order-Blind:</strong> Array was already sorted, yet Selection Sort executed all 10 comparisons across 4 passes.';
      } else if (scenario === 'reverse') {
        document.getElementById('adPasses').textContent = (n - 1).toString();
        document.getElementById('adComps').textContent = ((n * (n - 1)) / 2).toString();
        document.getElementById('adSwaps').textContent = ((n * (n - 1)) / 2).toString();
        document.getElementById('adVerdict').innerHTML = '<strong>Reverse Sorted:</strong> Maximum inversion count Inv(A). Swaps required on every pair, executing worst-case O(n²).';

        document.getElementById('nadPasses').textContent = (n - 1).toString();
        document.getElementById('nadComps').textContent = ((n * (n - 1)) / 2).toString();
        document.getElementById('nadSwaps').textContent = Math.floor(n / 2).toString();
        document.getElementById('nadVerdict').innerHTML = '<strong>Rigid Behavior:</strong> Selection Sort performs the exact same 10 comparisons as it did on the sorted array.';
      } else {
        document.getElementById('adPasses').textContent = '2';
        document.getElementById('adComps').textContent = (n - 1 + n - 2).toString();
        document.getElementById('adSwaps').textContent = '1';
        document.getElementById('adVerdict').innerHTML = '<strong>Nearly Sorted:</strong> Only elements 5 and 4 were out of place. Resolved on pass 1; pass 2 verified order and exited early!';

        document.getElementById('nadPasses').textContent = (n - 1).toString();
        document.getElementById('nadComps').textContent = ((n * (n - 1)) / 2).toString();
        document.getElementById('nadSwaps').textContent = '1';
        document.getElementById('nadVerdict').innerHTML = '<strong>Order-Blind:</strong> Selection Sort performed all 10 comparisons across 4 passes despite 80% initial sortedness.';
      }
    }

    presetButtons.forEach(btn => {
      btn.addEventListener('click', () => updateScenario(btn.dataset.scenario));
    });

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
        contentHtml = getAdaptiveInteractiveWidget();
      } else {
        contentHtml += renderMarkdownWithEngine(item.content);
      }
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
