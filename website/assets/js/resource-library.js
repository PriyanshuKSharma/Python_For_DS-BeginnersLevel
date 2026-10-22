const DOCUMENTATION_FILES = [
  'README.md', 'README_DEVELOPER.md',
  'DataStructures_Documentation/Adaptive_vs_NonAdaptive.md',
  'DataStructures_Documentation/BinarySearch.md',
  'DataStructures_Documentation/BubbleSort.md',
  'DataStructures_Documentation/CountingSort.md',
  'DataStructures_Documentation/DataStructures_Index.md',
  'DataStructures_Documentation/Dictionaries.md',
  'DataStructures_Documentation/InsertionSort.md',
  'DataStructures_Documentation/LaTeX/README.md',
  'DataStructures_Documentation/LinearSearch.md',
  'DataStructures_Documentation/LinkedList.md',
  'DataStructures_Documentation/Linked_Lists_Types.md',
  'DataStructures_Documentation/Lists.md',
  'DataStructures_Documentation/MergeSort.md',
  'DataStructures_Documentation/NumPy.md',
  'DataStructures_Documentation/OOP_Documentation.md',
  'DataStructures_Documentation/Pandas.md',
  'DataStructures_Documentation/QuickSort.md',
  'DataStructures_Documentation/SelectionSort.md',
  'DataStructures_Documentation/Sets.md',
  'DataStructures_Documentation/Sorting_and_Searching.md',
  'DataStructures_Documentation/Stable_vs_Unstable.md',
  'DataStructures_Documentation/Stacks.md',
  'DataStructures_Documentation/Strings.md',
  'DataStructures_Documentation/TimeComplexity_All.md',
  'DataStructures_Documentation/TimeComplexity_Concept.md',
  'DataStructures_Documentation/Tuples.md',
  'Revision/Linked_Lists_Types.md'
];

const PYTHON_FILES = [
  '01Sept.py', "2'scomplement.py", '29Aug.py', '31Aug.py', 'ArithmeticProgression.py',
  'Nov2.py', 'Nov23(function, arguments, parameters and use of lambda).py', 'OOP_Mastery.py',
  'Oct17(Data Types).py', 'Oct20(Sequential Data Types).py', 'basiccalculator.py',
  'highestfactor.py', 'integer.py', 'list.py', 'numpy_prac.py', 'pass.py', 'prac.py',
  'practice.py', 'seqquencialDT.py', 'volume.py',
  'HackerRank/capitalise.py', 'HackerRank/company_logo.py', 'HackerRank/hass_tuples.py',
  'HackerRank/if-else.py', 'HackerRank/list_comprehensions.py', 'HackerRank/lists_hack.py',
  'HackerRank/nested_list.py', 'HackerRank/runnerup_challenge.py', 'HackerRank/set_.add().py',
  'HackerRank/set_.remove().py', 'HackerRank/split_join.py', 'HackerRank/swapcase.py',
  'HackerRank/whats_your_name.py', 'LeetCode/19_Remove_Nth_Node_From_End_of_List.py',
  'LeetCode/206_Reverse_Linked_List.py', 'LeetCode/2095_Delete_the_Middle_node_of_a_LL.py',
  'LeetCode/344_Reverse_String.py', 'LeetCode/83_Remove_Duplicates_from_Sorted_List.py',
  'LeetCode/876_Middle_of_the_linked_list.py', 'LeetCode/912_Sort_an_Array.py',
  'Revision/String-Based-Numeric.py', 'Revision/abstraction_prac.py', 'Revision/avg_oop.py',
  'Revision/class_method.py', 'Revision/dictionary.py', 'Revision/inheritence.py',
  'Revision/linked_list.py', 'Revision/linked_list_implementation.py', 'Revision/oop.py',
  'Revision/oop2.py', 'Revision/reversingtuple.py', 'Revision/set.py', 'Revision/stack_prac.py',
  'Revision/strings.py', 'Revision/tuple.py', 'SortingAndSearching/BinarySearch.py',
  'SortingAndSearching/BubbleSort.py', 'SortingAndSearching/CountingSort.py',
  'SortingAndSearching/InsertionSort.py', 'SortingAndSearching/LinearSearch.py',
  'SortingAndSearching/MergeSort.py', 'SortingAndSearching/QuickSort.py',
  'SortingAndSearching/SelectionSort.py'
];

function renderFileLibrary(id, countId, files) {
  const target = document.getElementById(id);
  const count = document.getElementById(countId);
  if (!target) return;
  target.innerHTML = files.map(file => `<a href="../${encodeURI(file)}" class="resource-file-link" data-path="${file}">${file}</a>`).join('');
  if (count) count.textContent = `(${files.length})`;
}

renderFileLibrary('docLibrary', 'docCount', DOCUMENTATION_FILES);
renderFileLibrary('pyLibrary', 'pyCount', PYTHON_FILES);

// Robust document finder across CONTENT_LIBRARY
function findLibraryDoc(rawPath) {
  if (typeof CONTENT_LIBRARY === 'undefined' || !Array.isArray(CONTENT_LIBRARY)) return null;
  const cleanPath = rawPath.replace(/^\.\.\//, '').replace(/^\.\//, '').replace(/\\/g, '/');
  
  // 1. Direct path match
  let doc = CONTENT_LIBRARY.find(d => d.path === cleanPath || d.path === rawPath);
  if (doc) return doc;

  // 2. Case-insensitive path match
  doc = CONTENT_LIBRARY.find(d => d.path.toLowerCase() === cleanPath.toLowerCase());
  if (doc) return doc;

  // 3. Basename filename match
  const basename = cleanPath.split('/').pop().toLowerCase();
  doc = CONTENT_LIBRARY.find(d => d.path.toLowerCase().endsWith(basename));
  if (doc) return doc;

  return null;
}

document.addEventListener('DOMContentLoaded', () => {
  const terminalOverlay = document.getElementById('codeTerminalModal');
  const terminalContent = document.getElementById('terminalCodeContent');
  const closeTerminalBtn = document.getElementById('closeTerminalBtn');
  const terminalTitle = document.getElementById('terminalTitle');
  
  const docOverlay = document.getElementById('docModalOverlay');
  const docContent = document.getElementById('docModalContent');
  const closeDocBtn = document.getElementById('closeDocBtn');
  const docTitle = document.getElementById('docModalTitle');
  const docLibraryLink = document.getElementById('docModalLibraryLink');

  function openMarkdownModal(title, content, docId) {
    if (!docOverlay || !docContent) return;
    
    if (docTitle) docTitle.textContent = title;
    if (docLibraryLink) {
      docLibraryLink.href = docId ? `library.html#${docId}` : 'library.html';
    }

    if (typeof marked !== 'undefined') {
      docContent.innerHTML = marked.parse(content);
    } else {
      docContent.innerHTML = `<pre>${content.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' })[c])}</pre>`;
    }

    docOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function openPythonModal(filename, code) {
    if (!terminalOverlay || !terminalContent) return;
    if (terminalTitle) terminalTitle.textContent = `bash — python3 ${filename}`;
    terminalContent.textContent = code;
    terminalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  document.querySelectorAll('.resource-file-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const path = link.getAttribute('data-path') || link.getAttribute('href') || '';
      const isPy = path.toLowerCase().endsWith('.py');
      const isMd = path.toLowerCase().endsWith('.md');
      const filename = path.split('/').pop();

      const libEntry = findLibraryDoc(path);

      if (libEntry) {
        if (isMd) {
          openMarkdownModal(libEntry.title, libEntry.content, libEntry.id);
        } else if (isPy) {
          openPythonModal(filename, libEntry.content);
        } else {
          window.open(link.href, '_blank');
        }
      } else {
        // Fallback: If not in pre-baked CONTENT_LIBRARY, dynamically fetch the markdown or python file!
        if (isMd || isPy) {
          fetch(link.href)
            .then(res => {
              if (!res.ok) throw new Error(`HTTP ${res.status}`);
              return res.text();
            })
            .then(text => {
              if (isMd) {
                openMarkdownModal(filename.replace(/\.md$/i, '').replace(/_/g, ' '), text, null);
              } else {
                openPythonModal(filename, text);
              }
            })
            .catch(() => {
              window.open(link.href, '_blank');
            });
        } else {
          window.open(link.href, '_blank');
        }
      }
    });
  });

  // Close modals handlers
  if (closeTerminalBtn) {
    closeTerminalBtn.onclick = () => {
      terminalOverlay.classList.remove('active');
      document.body.style.overflow = '';
    };
  }

  if (terminalOverlay) {
    terminalOverlay.onclick = (e) => {
      if (e.target === terminalOverlay) {
        terminalOverlay.classList.remove('active');
        document.body.style.overflow = '';
      }
    };
  }
  
  if (closeDocBtn) {
    closeDocBtn.onclick = () => {
      docOverlay.classList.remove('active');
      document.body.style.overflow = '';
    };
  }

  if (docOverlay) {
    docOverlay.onclick = (e) => {
      if (e.target === docOverlay) {
        docOverlay.classList.remove('active');
        document.body.style.overflow = '';
      }
    };
  }

  // Keyboard Escape listener
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (docOverlay && docOverlay.classList.contains('active')) {
        docOverlay.classList.remove('active');
        document.body.style.overflow = '';
      }
      if (terminalOverlay && terminalOverlay.classList.contains('active')) {
        terminalOverlay.classList.remove('active');
        document.body.style.overflow = '';
      }
    }
  });
});
