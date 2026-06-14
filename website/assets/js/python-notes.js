// ─────────────────────────────────────────────────
//  Python Notes Data — all topics, cards, and metadata
// ─────────────────────────────────────────────────

const PYTHON_NOTES = [
  // ─── FOUNDATION ─────────────────────────────────
  {
    id: 'intro',
    icon: '🐍',
    title: 'Introduction to Python',
    desc: 'What is Python, why use it for Data Science, setting up the environment, first programs.',
    cat: 'foundation',
    badge: 'foundation',
    tag: 'Lecture 1',
    videoTimestamp: '0s',
    video: 'https://www.youtube.com/watch?v=-hh6raHUUvk&t=101s',
    pdf: 'Python_Course/Lecture1_py.pdf'
  },
  {
    id: 'variables',
    icon: '📦',
    title: 'Variables & Data Types',
    desc: 'int, float, str, bool, complex. Number systems: binary, hex, octal. Type casting & checking.',
    cat: 'foundation',
    badge: 'foundation',
    tag: 'Lecture 2',
    pyFile: 'Oct17(Data Types).py',
    pdf: 'Python_Course/Lecture2_py.pdf'
  },
  {
    id: 'control-flow',
    icon: '🔀',
    title: 'Control Flow',
    desc: 'if / elif / else conditions. for loops, while loops, break, continue, pass, nested loops.',
    cat: 'foundation',
    badge: 'foundation',
    tag: 'Lecture 2',
    pyFile: 'Nov2.py',
    pdf: 'Python_Course/Lecture5_py.pdf'
  },
  {
    id: 'functions',
    icon: '⚙️',
    title: 'Functions & Lambda',
    desc: 'def, return, multiple returns. *args, **kwargs, default params. Lambda expressions.',
    cat: 'foundation',
    badge: 'foundation',
    tag: 'Lecture 3',
    pyFile: "Nov23(function, arguments, parameters and use of lambda).py",
    pdf: 'Python_Course/Lecture6_py.pdf'
  },
  {
    id: 'strings',
    icon: '🔤',
    title: 'String Manipulation',
    desc: 'String methods, f-strings, slicing, formatting, string comprehensions.',
    cat: 'foundation',
    badge: 'foundation',
    tag: 'Lecture 3',
    pyFile: 'Revision/strings.py',
    pdf: 'Python_Course/Lecture2_py.pdf',
    doc: 'DataStructures_Documentation/Strings.md'
  },

  // ─── OOP ────────────────────────────────────────
  {
    id: 'classes-objects',
    icon: '🏗️',
    title: 'Classes & Objects',
    desc: 'Creating classes, __init__ constructor, instance vs class attributes, self keyword.',
    cat: 'oop',
    badge: 'oop',
    tag: 'OOP Lecture 1',
    video: 'https://www.youtube.com/watch?v=ERCMXc8x7mc',
    pyFile: 'Revision/oop.py',
    pdf: 'Python_Course/Lecture8_py.pdf',
    doc: 'DataStructures_Documentation/OOP_Documentation.md'
  },
  {
    id: 'inheritance',
    icon: '🧬',
    title: 'Inheritance',
    desc: 'Single, multi-level and multiple inheritance. super() function, MRO (Method Resolution Order).',
    cat: 'oop',
    badge: 'oop',
    tag: 'OOP Lecture 2',
    pyFile: 'Revision/inheritence.py',
    pdf: 'Python_Course/OOPs_Notes.md.pdf'
  },
  {
    id: 'encapsulation',
    icon: '🔒',
    title: 'Encapsulation',
    desc: 'Public, protected (_), and private (__) attributes. Getters, setters, @property decorator.',
    cat: 'oop',
    badge: 'oop',
    tag: 'OOP Lecture 2',
    video: 'https://www.youtube.com/watch?v=cKeKp17afZw',
    pdf: 'Python_Course/OOPs_Notes.md.pdf'
  },
  {
    id: 'polymorphism',
    icon: '🎭',
    title: 'Polymorphism',
    desc: 'Method overriding, duck typing, operator overloading with dunder methods.',
    cat: 'oop',
    badge: 'oop',
    tag: 'OOP Lecture 3',
    pyFile: 'Revision/oop2.py',
    pdf: 'Python_Course/OOPs_Notes.md.pdf'
  },
  {
    id: 'abstraction',
    icon: '🎨',
    title: 'Abstraction & ABC',
    desc: 'Abstract base classes (ABC module), @abstractmethod, interface design patterns.',
    cat: 'oop',
    badge: 'oop',
    tag: 'OOP Lecture 3',
    pyFile: 'Revision/abstraction_prac.py',
    pdf: 'Python_Course/OOPs_Notes.md.pdf'
  },
  {
    id: 'class-static-methods',
    icon: '🔧',
    title: 'Class & Static Methods',
    desc: '@classmethod with cls, @staticmethod. Factory constructors, object counters, inheritance.',
    cat: 'oop',
    badge: 'oop',
    tag: 'OOP Lecture 4',
    pyFile: 'Revision/class_method.py'
  },
  {
    id: 'dunder-magic',
    icon: '✨',
    title: 'Dunder / Magic Methods',
    desc: '__str__, __repr__, __len__, __add__, __eq__ and more. Operator overloading in Python.',
    cat: 'oop',
    badge: 'oop',
    tag: 'OOP Lecture 4',
    pyFile: 'OOP_Mastery.py'
  },
  {
    id: 'oops-notes-pdf',
    icon: '📄',
    title: 'OOPs Notes (Full PDF)',
    desc: 'Complete OOPs handwritten/typed notes PDF covering all 4 pillars. 9 pages of detailed explanations.',
    cat: 'oop',
    badge: 'pdf',
    tag: 'PDF Notes',
    pdf: 'Python_Course/OOPs_Notes.md.pdf'
  },

  // ─── DATA STRUCTURES ─────────────────────────────
  {
    id: 'lists',
    icon: '📋',
    title: 'Lists',
    desc: 'List creation, slicing, built-in methods (append, insert, remove), comprehensions.',
    cat: 'ds',
    badge: 'ds',
    tag: 'Data Structures',
    pyFile: 'Oct20(Sequential Data Types).py',
    pdf: 'Python_Course/Lecture3_py.pdf',
    doc: 'DataStructures_Documentation/Lists.md'
  },
  {
    id: 'tuples',
    icon: '📌',
    title: 'Tuples',
    desc: 'Immutability, packing/unpacking, named tuples, when to use tuples vs lists.',
    cat: 'ds',
    badge: 'ds',
    tag: 'Data Structures',
    pyFile: 'Revision/tuple.py',
    pdf: 'Python_Course/Lecture3_py.pdf',
    doc: 'DataStructures_Documentation/Tuples.md'
  },
  {
    id: 'sets',
    icon: '🔵',
    title: 'Sets',
    desc: 'Set operations: union, intersection, difference, symmetric difference. frozensets.',
    cat: 'ds',
    badge: 'ds',
    tag: 'Data Structures',
    pyFile: 'Revision/set.py',
    pdf: 'Python_Course/Lecture4_py.pdf',
    doc: 'DataStructures_Documentation/Sets.md'
  },
  {
    id: 'dictionaries',
    icon: '📖',
    title: 'Dictionaries',
    desc: 'Key-value pairs, dict methods, comprehensions, defaultdict, OrderedDict patterns.',
    cat: 'ds',
    badge: 'ds',
    tag: 'Data Structures',
    pyFile: 'Revision/dictionary.py',
    pdf: 'Python_Course/Lecture4_py.pdf',
    doc: 'DataStructures_Documentation/Dictionaries.md'
  },
  {
    id: 'stacks',
    icon: '📚',
    title: 'Stacks',
    desc: 'Array-based stack and linked-list-based stack. Push, pop, peek, LIFO concept.',
    cat: 'ds',
    badge: 'ds',
    tag: 'Data Structures',
    pyFile: 'Revision/stack_prac.py'
  },
  {
    id: 'linked-lists',
    icon: '🔗',
    title: 'Linked Lists',
    desc: 'Node structure, singly linked list, doubly linked list, circular linked list traversal.',
    cat: 'ds',
    badge: 'ds',
    tag: 'Data Structures',
    pyFile: 'Revision/linked_list_implementation.py'
  },

  // ─── ALGORITHMS ──────────────────────────────────
  {
    id: 'sorting-overview',
    icon: '🔃',
    title: 'Sorting Algorithms Overview',
    desc: 'Bubble, Selection, Insertion, Merge, Quick, Counting Sort. Stable vs unstable, adaptive vs non-adaptive.',
    cat: 'algo',
    badge: 'algo',
    tag: 'Algorithms',
    doc: 'DataStructures_Documentation/Sorting_and_Searching.md'
  },
  {
    id: 'merge-quick-sort',
    icon: '⚡',
    title: 'Merge Sort & Quick Sort',
    desc: 'Divide-and-conquer sorting. Merge sort O(n log n). Quick sort pivot strategies.',
    cat: 'algo',
    badge: 'algo',
    tag: 'Algorithms',
    pyFile: 'SortingAndSearching/MergeSort.py',
    doc: 'DataStructures_Documentation/MergeSort.md'
  },
  {
    id: 'searching',
    icon: '🔍',
    title: 'Searching Algorithms',
    desc: 'Linear search O(n) and Binary search O(log n). When and how to apply each.',
    cat: 'algo',
    badge: 'algo',
    tag: 'Algorithms',
    pyFile: 'SortingAndSearching/BinarySearch.py',
    doc: 'DataStructures_Documentation/BinarySearch.md'
  },
  {
    id: 'time-complexity',
    icon: '📊',
    title: 'Time & Space Complexity',
    desc: 'Big-O analysis for all algorithms. Best, average, worst case. Space complexity tradeoffs.',
    cat: 'algo',
    badge: 'algo',
    tag: 'Algorithms',
    doc: 'DataStructures_Documentation/TimeComplexity_All.md'
  },

  // ─── DATA SCIENCE ─────────────────────────────────
  {
    id: 'numpy',
    icon: '🔢',
    title: 'NumPy — Arrays & Computing',
    desc: 'Array creation, vectorized operations, broadcasting, linear algebra, reshape, random.',
    cat: 'science',
    badge: 'ds',
    tag: 'Data Science',
    pyFile: 'numpy_prac.py',
    doc: 'DataStructures_Documentation/NumPy.md'
  },
  {
    id: 'pandas',
    icon: '🐼',
    title: 'Pandas — DataFrames',
    desc: 'DataFrames, Series, CSV I/O, groupby, merge, pivot, data cleaning, filtering.',
    cat: 'science',
    badge: 'ds',
    tag: 'Data Science',
    pyFile: '31Aug.py',
    doc: 'DataStructures_Documentation/Pandas.md'
  },
  {
    id: 'regression',
    icon: '📈',
    title: 'Regression Analysis',
    desc: 'Linear regression, feature engineering, model evaluation. Supervised ML mini-project.',
    cat: 'science',
    badge: 'ds',
    tag: 'Machine Learning'
  },
  {
    id: 'jupyter',
    icon: '📓',
    title: 'Jupyter Notebooks',
    desc: 'Interactive computing, data exploration, visualizations. Notebooks: Prac, PracNp, PracPand.',
    cat: 'science',
    badge: 'ds',
    tag: 'Notebooks'
  },

  // ─── COMPETITIVE PROGRAMMING ──────────────────────
  {
    id: 'leetcode',
    icon: '💛',
    title: 'LeetCode Solutions (7)',
    desc: 'Reverse Linked List, Remove Nth Node, Middle of LL, Remove Duplicates, Reverse String, Sort Array.',
    cat: 'cp',
    badge: 'cp',
    tag: 'LeetCode'
  },
  {
    id: 'hackerrank',
    icon: '💚',
    title: 'HackerRank Challenges (13)',
    desc: 'If-Else, Lists, Comprehensions, Nested Lists, Tuples, Sets, Strings — all 13 solved.',
    cat: 'cp',
    badge: 'cp',
    tag: 'HackerRank'
  },

  // ─── LECTURE PDFS ─────────────────────────────────
  {
    id: 'lecture-pdfs',
    icon: '📚',
    title: 'Lecture PDFs (1–8)',
    desc: '8 course lecture PDFs covering Python fundamentals through advanced topics.',
    cat: 'pdf',
    badge: 'pdf',
    tag: 'PDF Notes',
    pdf: 'Python_Course/'
  }
];

// Badge color map
const BADGE_MAP = {
  foundation: 'badge-foundation',
  oop: 'badge-oop',
  ds: 'badge-ds',
  algo: 'badge-algo',
  cp: 'badge-cp',
  revision: 'badge-revision',
  pdf: 'badge-pdf'
};

// Badge label map
const BADGE_LABELS = {
  foundation: 'Foundation',
  oop: 'OOP',
  ds: 'Data Sci',
  algo: 'Algorithms',
  cp: 'Competitive',
  revision: 'Revision',
  pdf: 'PDF'
};

// Category filter map
const CAT_FILTER_MAP = {
  foundation: 'foundation',
  oop: 'oop',
  ds: 'ds',
  algo: 'algo',
  science: 'science',
  cp: 'cp',
  pdf: 'pdf'
};
