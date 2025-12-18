# LaTeX Documentation for Python Data Structures

This directory contains LaTeX versions of all Python data structure documentation, formatted for professional PDF generation.

## 📁 Files Overview

### Individual Data Structure Documents
- `Lists.tex` - Complete guide to Python Lists
- `Tuples.tex` - Complete guide to Python Tuples  
- `Dictionaries.tex` - Complete guide to Python Dictionaries
- `Sets.tex` - Complete guide to Python Sets
- `NumPy.tex` - Complete guide to NumPy arrays
- `Pandas.tex` - Complete guide to Pandas DataFrames

### Master Document
- `DataStructures_Complete.tex` - Combined document with all data structures

### Utilities
- `compile_all.sh` - Bash script to compile all LaTeX documents
- `README.md` - This file

## 🔧 Prerequisites

To compile these LaTeX documents, you need:

```bash
# Ubuntu/Debian
sudo apt-get install texlive-full

# macOS (with Homebrew)
brew install --cask mactex

# Windows
# Download and install MiKTeX or TeX Live
```

## 📖 Compilation Instructions

### Option 1: Use the Compilation Script (Recommended)

```bash
# Make script executable (if not already)
chmod +x compile_all.sh

# Run compilation script
./compile_all.sh
```

This will:
- Compile all LaTeX documents to PDF
- Create an `output/` directory with all PDFs
- Clean up auxiliary files automatically

### Option 2: Manual Compilation

```bash
# Compile individual documents
pdflatex Lists.tex
pdflatex Tuples.tex
pdflatex Dictionaries.tex
pdflatex Sets.tex
pdflatex NumPy.tex
pdflatex Pandas.tex

# Compile master document (requires two passes for cross-references)
pdflatex DataStructures_Complete.tex
pdflatex DataStructures_Complete.tex
```

## 📋 Document Features

Each LaTeX document includes:

- **Professional formatting** with consistent styling
- **Syntax-highlighted code blocks** for Python examples
- **Table of contents** for easy navigation
- **Cross-references** and hyperlinks
- **Performance tables** with time complexity analysis
- **Best practices** and common pitfalls sections
- **Comprehensive examples** and use cases

## 🎨 Customization

### Styling Options

You can customize the appearance by modifying:

```latex
% Change color scheme
\definecolor{codebackground}{RGB}{245,245,245}
\definecolor{keywordcolor}{RGB}{0,0,255}

% Adjust margins
\geometry{margin=1.5in}

% Modify font size
\documentclass[11pt,a4paper]{article}
```

### Code Highlighting

The documents use the `listings` package for Python syntax highlighting:

```latex
\lstset{
    language=Python,
    basicstyle=\ttfamily\small,
    keywordstyle=\color{blue}\bfseries,
    commentstyle=\color{green!60!black},
    stringstyle=\color{red}
}
```

## 📊 Output Structure

After compilation, you'll have:

```
output/
├── Lists.pdf
├── Tuples.pdf
├── Dictionaries.pdf
├── Sets.pdf
├── NumPy.pdf
├── Pandas.pdf
└── DataStructures_Complete.pdf
```

## 🔍 Troubleshooting

### Common Issues

1. **Missing packages**: Install full TeXLive distribution
2. **Compilation errors**: Check for special characters in code blocks
3. **Missing fonts**: Ensure all required fonts are installed
4. **Cross-reference issues**: Run pdflatex twice for proper references

### Error Solutions

```bash
# If you get "Package not found" errors
sudo tlmgr update --self
sudo tlmgr install <package-name>

# For font issues
sudo fc-cache -fv

# Clean build (remove auxiliary files)
rm -f *.aux *.log *.toc *.out
```

## 📚 Usage Tips

1. **Individual PDFs**: Use for focused study of specific data structures
2. **Master PDF**: Use as complete reference guide
3. **Print-friendly**: All documents formatted for A4 printing
4. **Searchable**: PDFs include searchable text and bookmarks
5. **Professional**: Suitable for academic or professional documentation

## 🎯 Benefits of LaTeX Format

- **Professional appearance** with consistent formatting
- **Mathematical notation** support for complexity analysis
- **Cross-references** and automatic numbering
- **High-quality PDF output** suitable for printing
- **Version control friendly** (plain text source)
- **Customizable styling** and layout options

## 📖 Learning Path

1. Start with individual data structure PDFs
2. Practice with code examples from each document
3. Use the master PDF as a comprehensive reference
4. Refer to quick reference appendix for syntax reminders

Perfect for students, educators, and professionals who prefer formatted documentation!