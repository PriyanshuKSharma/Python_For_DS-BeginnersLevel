// ─────────────────────────────────────────────────
//  Python Notes Data — all topics, cards, and metadata
//  SVG icons & detailed curriculum explanations
// ─────────────────────────────────────────────────

const TOPIC_SVGS = {
  intro: '<svg viewBox="0 0 110 110" width="20" height="20"><path fill="#387eb8" d="M54.2 4.1c-13.6 0-22.7 6.1-22.7 17.7v13h23.2v3.3H21.2C9.4 38.1 0 46.8 0 60.8c0 14.5 10.3 22.8 22.8 22.8h7.2v-10.7c0-12.7 10.9-23.7 23.7-23.7h23.2v-7.1c0-11-9-18-22.7-18zm-12.5 7.1c2.4 0 4.4 2 4.4 4.4s-2 4.4-4.4 4.4-4.4-2-4.4-4.4 2-4.4 4.4-4.4z"/><path fill="#ffd43b" d="M55.8 105.9c13.6 0 22.7-6.1 22.7-17.7v-13H55.3v-3.3h33.5c11.8 0 21.2-8.7 21.2-22.7 0-14.5-10.3-22.8-22.8-22.8H80v10.7c0 12.7-10.9 23.7-23.7 23.7H33.1v7.1c0 11 9 18 22.7 18zm12.5-7.1c-2.4 0-4.4-2-4.4-4.4s2-4.4 4.4-4.4 4.4 2 4.4 4.4-2 4.4-4.4 4.4z"/></svg>',
  variables: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>',
  control_flow: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>',
  functions: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 17l6-10 4 6 6-8"></path><line x1="2" y1="20" x2="22" y2="20"></line></svg>',
  strings: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line></svg>',
  classes: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>',
  inheritance: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="2" width="6" height="5" rx="1"></rect><rect x="2" y="17" width="6" height="5" rx="1"></rect><rect x="16" y="17" width="6" height="5" rx="1"></rect><path d="M12 7v5m-7 5v-3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3"></path></svg>',
  encapsulation: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>',
  polymorphism: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>',
  abstraction: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="12 8 8 12 12 16 16 12 12 8"></polygon></svg>',
  methods: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>',
  dunder: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline><line x1="12" y1="2" x2="12" y2="22"></line></svg>',
  doc: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>',
  lists: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>',
  tuples: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M9 10h6"></path><path d="M12 10v6"></path></svg>',
  sets: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="12" r="6"></circle><circle cx="15" cy="12" r="6"></circle></svg>',
  dict: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"></rect><line x1="10" y1="4" x2="10" y2="20"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>',
  stack: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 12 12 17 22 12"></polyline><polyline points="2 17 12 22 22 17"></polyline></svg>',
  linked_list: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>',
  sorting: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>',
  divide_conquer: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="4" r="2"></circle><circle cx="6" cy="12" r="2"></circle><circle cx="18" cy="12" r="2"></circle><circle cx="4" cy="20" r="2"></circle><circle cx="8" cy="20" r="2"></circle><circle cx="16" cy="20" r="2"></circle><circle cx="20" cy="20" r="2"></circle><line x1="12" y1="6" x2="6" y2="10"></line><line x1="12" y1="6" x2="18" y2="10"></line><line x1="6" y1="14" x2="4" y2="18"></line><line x1="6" y1="14" x2="8" y2="18"></line><line x1="18" y1="14" x2="16" y2="18"></line><line x1="18" y1="14" x2="20" y2="18"></line></svg>',
  search: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>',
  complexity: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>',
  numpy: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>',
  pandas: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="3" y1="15" x2="21" y2="15"></line><line x1="9" y1="3" x2="9" y2="21"></line><line x1="15" y1="3" x2="15" y2="21"></line></svg>',
  ml: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="20" x2="20" y2="4"></line><circle cx="6" cy="16" r="1.5" fill="currentColor"></circle><circle cx="10" cy="14" r="1.5" fill="currentColor"></circle><circle cx="14" cy="8" r="1.5" fill="currentColor"></circle><circle cx="18" cy="7" r="1.5" fill="currentColor"></circle></svg>',
  jupyter: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="12" rx="9" ry="4"></ellipse><ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(60 12 12)"></ellipse><ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(120 12 12)"></ellipse></svg>',
  leetcode: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>',
  hackerrank: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>',
  archive: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>'
};

const PYTHON_NOTES = [
  // ─── FOUNDATION ─────────────────────────────────
  {
    id: 'intro',
    icon: TOPIC_SVGS.intro,
    title: 'Introduction to Python & Architecture',
    desc: 'CPython virtual machine execution pipeline, bytecode (.pyc), dynamic typing, memory pointers, and data science ecosystem.',
    cat: 'foundation',
    badge: 'foundation',
    tag: 'Core Architecture',
    videoTimestamp: '0s',
    video: 'https://www.youtube.com/watch?v=-hh6raHUUvk&t=101s',
    pdf: 'Python_Course/Lecture1_py.pdf'
  },
  {
    id: 'variables',
    icon: TOPIC_SVGS.variables,
    title: 'Variables, Types & Memory Model',
    desc: 'Heap object allocation, stack reference pointers, two\\\'s complement binary, type coercion, and small integer interning (-5 to 256).',
    cat: 'foundation',
    badge: 'foundation',
    tag: 'Memory Mechanics',
    pyFile: 'Oct17(Data Types).py',
    pdf: 'Python_Course/Lecture2_py.pdf'
  },
  {
    id: 'control-flow',
    icon: TOPIC_SVGS.control_flow,
    title: 'Control Flow & Decision Logic',
    desc: 'Boolean branching, short-circuit evaluation, iterator protocol, loop mechanics, and the search-optimized for...else pattern.',
    cat: 'foundation',
    badge: 'foundation',
    tag: 'Branching Flow',
    pyFile: 'Nov2.py',
    pdf: 'Python_Course/Lecture5_py.pdf'
  },
  {
    id: 'functions',
    icon: TOPIC_SVGS.functions,
    title: 'Functions, Scopes & Lambda',
    desc: 'LEGB identifier scope resolution, activation frames, *args/**kwargs packing, mutable default trap, and anonymous functions.',
    cat: 'foundation',
    badge: 'foundation',
    tag: 'Execution Scope',
    pyFile: "Nov23(function, arguments, parameters and use of lambda).py",
    pdf: 'Python_Course/Lecture6_py.pdf'
  },
  {
    id: 'strings',
    icon: TOPIC_SVGS.strings,
    title: 'String Manipulation & Slicing',
    desc: 'Immutable Unicode sequences, dual-index coordinate tape [start:stop:step], memory-safe join() concatenation, and f-strings.',
    cat: 'foundation',
    badge: 'foundation',
    tag: 'Unicode & Slicing',
    pyFile: 'Revision/strings.py',
    pdf: 'Python_Course/Lecture2_py.pdf',
    doc: 'DataStructures_Documentation/Strings.md'
  },

  // ─── OOP ────────────────────────────────────────
  {
    id: 'classes-objects',
    icon: TOPIC_SVGS.classes,
    title: 'Classes, Objects & Blueprints',
    desc: 'Class definitions, __init__ constructor instantiation, instance vs class namespace dictionaries, and the self binding parameter.',
    cat: 'oop',
    badge: 'oop',
    tag: 'OOP Pillar 1',
    video: 'https://www.youtube.com/watch?v=ERCMXc8x7mc',
    pyFile: 'Revision/oop.py',
    pdf: 'Python_Course/Lecture8_py.pdf',
    doc: 'DataStructures_Documentation/OOP_Documentation.md'
  },
  {
    id: 'inheritance',
    icon: TOPIC_SVGS.inheritance,
    title: 'Inheritance & Method Resolution Order',
    desc: 'Class hierarchy reuse, single/multi-level/multiple inheritance, super() proxy, and C3 Linearization MRO algorithm.',
    cat: 'oop',
    badge: 'oop',
    tag: 'OOP Pillar 2',
    pyFile: 'Revision/inheritence.py',
    pdf: 'Python_Course/OOPs_Notes.md.pdf'
  },
  {
    id: 'encapsulation',
    icon: TOPIC_SVGS.encapsulation,
    title: 'Encapsulation & Access Modifiers',
    desc: 'State protection, public vs protected (_x), private name-mangling (_Class__x), and pythonic @property getter/setter validation.',
    cat: 'oop',
    badge: 'oop',
    tag: 'OOP Pillar 3',
    video: 'https://www.youtube.com/watch?v=cKeKp17afZw',
    pdf: 'Python_Course/OOPs_Notes.md.pdf'
  },
  {
    id: 'polymorphism',
    icon: TOPIC_SVGS.polymorphism,
    title: 'Polymorphism & Dynamic Dispatch',
    desc: 'Duck typing philosophy ("walks like a duck"), dynamic method overriding, and polymorphic uniform interface dispatch.',
    cat: 'oop',
    badge: 'oop',
    tag: 'OOP Pillar 4',
    pyFile: 'Revision/oop2.py',
    pdf: 'Python_Course/OOPs_Notes.md.pdf'
  },
  {
    id: 'abstraction',
    icon: TOPIC_SVGS.abstraction,
    title: 'Abstraction & Abstract Base Classes',
    desc: 'Strict interface contracts via abc.ABC, @abstractmethod decorator, and decoupled architecture patterns.',
    cat: 'oop',
    badge: 'oop',
    tag: 'Contract Design',
    pyFile: 'Revision/abstraction_prac.py',
    pdf: 'Python_Course/OOPs_Notes.md.pdf'
  },
  {
    id: 'class-static-methods',
    icon: TOPIC_SVGS.methods,
    title: 'Class Methods & Static Methods',
    desc: '@classmethod with cls binding for factory instantiation, @staticmethod utility routines, and instance methods comparison.',
    cat: 'oop',
    badge: 'oop',
    tag: 'Decorator Architecture',
    pyFile: 'Revision/class_method.py'
  },
  {
    id: 'dunder-magic',
    icon: TOPIC_SVGS.dunder,
    title: 'Dunder / Magic Methods & Overloading',
    desc: 'Double-underscore protocol hooks: __repr__, __str__, arithmetic overloading (__add__), and sequence protocols (__len__, __getitem__).',
    cat: 'oop',
    badge: 'oop',
    tag: 'Operator Overloading',
    pyFile: 'OOP_Mastery.py'
  },
  {
    id: 'oops-notes-pdf',
    icon: TOPIC_SVGS.doc,
    title: 'Complete OOPs Master Notes',
    desc: '9-page handwritten & typed deep-dive document covering all 4 pillars, memory diagrams, MRO graphs, and interview questions.',
    cat: 'oop',
    badge: 'pdf',
    tag: 'Reference PDF',
    pdf: 'Python_Course/OOPs_Notes.md.pdf'
  },

  // ─── DATA STRUCTURES ─────────────────────────────
  {
    id: 'lists',
    icon: TOPIC_SVGS.lists,
    title: 'Lists & Dynamic Array Mechanics',
    desc: 'Contiguous pointer array storage, geometric over-allocation resize pattern, amortized O(1) appending, and slicing performance.',
    cat: 'ds',
    badge: 'ds',
    tag: 'Dynamic Sequences',
    pyFile: 'Oct20(Sequential Data Types).py',
    pdf: 'Python_Course/Lecture3_py.pdf',
    doc: 'DataStructures_Documentation/Lists.md'
  },
  {
    id: 'tuples',
    icon: TOPIC_SVGS.tuples,
    title: 'Tuples & Immutable Structs',
    desc: 'Fixed-size memory allocation, hashability for dictionary keys, structural pattern matching, and tuple packing/unpacking.',
    cat: 'ds',
    badge: 'ds',
    tag: 'Immutable Records',
    pyFile: 'Revision/tuple.py',
    pdf: 'Python_Course/Lecture3_py.pdf',
    doc: 'DataStructures_Documentation/Tuples.md'
  },
  {
    id: 'sets',
    icon: TOPIC_SVGS.sets,
    title: 'Sets & Hash Collections',
    desc: 'Hash set architecture, O(1) average membership tests, mathematical Venn operators (union, intersection), and frozensets.',
    cat: 'ds',
    badge: 'ds',
    tag: 'Hash Sets',
    pyFile: 'Revision/set.py',
    pdf: 'Python_Course/Lecture4_py.pdf',
    doc: 'DataStructures_Documentation/Sets.md'
  },
  {
    id: 'dictionaries',
    icon: TOPIC_SVGS.dict,
    title: 'Dictionaries & Hash Tables',
    desc: 'CPython compact hash table architecture, hash value modulo indexing, collision probing, and OrderedDict/defaultdict patterns.',
    cat: 'ds',
    badge: 'ds',
    tag: 'Hash Maps',
    pyFile: 'Revision/dictionary.py',
    pdf: 'Python_Course/Lecture4_py.pdf',
    doc: 'DataStructures_Documentation/Dictionaries.md'
  },
  {
    id: 'stacks',
    icon: TOPIC_SVGS.stack,
    title: 'Stacks & LIFO Call Frames',
    desc: 'Last-In-First-Out storage, dynamic array stack vs collections.deque, parenthesis validation, and recursion frame execution.',
    cat: 'ds',
    badge: 'ds',
    tag: 'LIFO Structure',
    pyFile: 'Revision/stack_prac.py'
  },
  {
    id: 'linked-lists',
    icon: TOPIC_SVGS.linked_list,
    title: 'Linked Lists (Singly, Doubly, Circular)',
    desc: 'Pointer node structures, O(1) head insertion vs O(n) traversal, pointer reversal, Floyd\\\'s cycle-finding, and LeetCode implementations.',
    cat: 'ds',
    badge: 'ds',
    tag: 'Node Chains',
    pyFile: 'Revision/linked_list_implementation.py'
  },

  // ─── ALGORITHMS ──────────────────────────────────
  {
    id: 'sorting-overview',
    icon: TOPIC_SVGS.sorting,
    title: 'Sorting Algorithms Master Matrix',
    desc: 'Complete comparison across 6 algorithms: Bubble, Selection, Insertion, Merge, Quick, Counting Sort. Inversion count, adaptiveness & stability.',
    cat: 'algo',
    badge: 'algo',
    tag: 'Complexity & Big-O',
    doc: 'DataStructures_Documentation/Sorting_and_Searching.md'
  },
  {
    id: 'merge-quick-sort',
    icon: TOPIC_SVGS.divide_conquer,
    title: 'Merge Sort & Quick Sort Deep Dive',
    desc: 'Divide-and-conquer recursion trees: Merge Sort guaranteed O(n log n) with two-pointer merge vs Quick Sort Lomuto pivot partitioning.',
    cat: 'algo',
    badge: 'algo',
    tag: 'Divide & Conquer',
    pyFile: 'SortingAndSearching/MergeSort.py',
    doc: 'DataStructures_Documentation/MergeSort.md'
  },
  {
    id: 'searching',
    icon: TOPIC_SVGS.search,
    title: 'Searching Algorithms & Space Halving',
    desc: 'Linear Search O(n) sequential scan vs Binary Search logarithmic interval halving O(log n) on sorted monotonic sequences.',
    cat: 'algo',
    badge: 'algo',
    tag: 'Logarithmic Search',
    pyFile: 'SortingAndSearching/BinarySearch.py',
    doc: 'DataStructures_Documentation/BinarySearch.md'
  },
  {
    id: 'time-complexity',
    icon: TOPIC_SVGS.complexity,
    title: 'Time & Space Complexity (Big-O)',
    desc: 'Asymptotic growth rates (O(1), O(log n), O(n), O(n log n), O(n^2)), auxiliary memory space trade-offs, and recurrence relations.',
    cat: 'algo',
    badge: 'algo',
    tag: 'Asymptotics',
    doc: 'DataStructures_Documentation/TimeComplexity_All.md'
  },

  // ─── DATA SCIENCE ─────────────────────────────────
  {
    id: 'numpy',
    icon: TOPIC_SVGS.numpy,
    title: 'NumPy — Contiguous Array Computing',
    desc: 'SIMD vectorized operations, ndarray memory layouts, avoiding Python interpreter loops, broadcasting semantics, and matrix algebra.',
    cat: 'science',
    badge: 'ds',
    tag: 'Vectorized Compute',
    pyFile: 'numpy_prac.py',
    doc: 'DataStructures_Documentation/NumPy.md'
  },
  {
    id: 'pandas',
    icon: TOPIC_SVGS.pandas,
    title: 'Pandas — Tabular Data Wrangling',
    desc: '1D Series & 2D DataFrames, explicit label .loc vs positional .iloc indexing, groupby aggregation, missing value imputation, and CSV pipelines.',
    cat: 'science',
    badge: 'ds',
    tag: 'Tabular Analytics',
    pyFile: '31Aug.py',
    doc: 'DataStructures_Documentation/Pandas.md'
  },
  {
    id: 'regression',
    icon: TOPIC_SVGS.ml,
    title: 'Regression Analysis & Supervised ML',
    desc: 'Ordinary Least Squares (OLS) residual minimization, feature matrices X, target vectors y, train/test validation, and R^2 evaluation.',
    cat: 'science',
    badge: 'ds',
    tag: 'Machine Learning'
  },
  {
    id: 'jupyter',
    icon: TOPIC_SVGS.jupyter,
    title: 'Jupyter Interactive Exploration',
    desc: 'Interactive notebook workflows, cell execution state, matplotlib/seaborn visualization rendering, and exploratory data analysis (EDA).',
    cat: 'science',
    badge: 'ds',
    tag: 'Interactive Notebooks'
  },

  // ─── COMPETITIVE PROGRAMMING ──────────────────────
  {
    id: 'leetcode',
    icon: TOPIC_SVGS.leetcode,
    title: 'LeetCode Problem Solutions (7 Solved)',
    desc: 'Detailed algorithmic solutions: Two-Pointers, Fast & Slow Pointers (Middle of LL), Reverse Linked List, and In-Place Array Deduplication.',
    cat: 'cp',
    badge: 'cp',
    tag: 'Competitive Coding'
  },
  {
    id: 'hackerrank',
    icon: TOPIC_SVGS.hackerrank,
    title: 'HackerRank Challenges (13 Solved)',
    desc: 'Core Python mastery challenges: Runner-Up score deduplication, nested list grade sorting, Counter string frequency, and hash tuples.',
    cat: 'cp',
    badge: 'cp',
    tag: 'Challenge Solutions'
  },

  // ─── LECTURE NOTES & ARCHIVE ──────────────────────
  {
    id: 'lecture-pdfs',
    icon: TOPIC_SVGS.archive,
    title: 'Curated Lecture Archive & Study Plan',
    desc: '8 comprehensive study modules synthesized by Priyanshu from leading video masterclasses, technical documentation, and practice notebooks.',
    cat: 'pdf',
    badge: 'pdf',
    tag: 'Master Curriculum',
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

if (typeof window !== 'undefined') {
  window.PYTHON_NOTES = PYTHON_NOTES;
  window.TOPIC_SVGS = TOPIC_SVGS;
  window.BADGE_MAP = BADGE_MAP;
  window.BADGE_LABELS = BADGE_LABELS;
}

if (typeof module !== 'undefined') {
  module.exports = { PYTHON_NOTES, TOPIC_SVGS, BADGE_MAP, BADGE_LABELS };
}
