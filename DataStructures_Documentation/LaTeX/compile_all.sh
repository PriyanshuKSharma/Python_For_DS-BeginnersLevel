#!/bin/bash

# Script to compile all LaTeX documents
# Make sure you have pdflatex installed

echo "Compiling Python Data Structures LaTeX Documentation..."

# Create output directory
mkdir -p output

# List of LaTeX files to compile
files=("Lists" "Tuples" "Dictionaries" "Sets" "NumPy" "Pandas" "DataStructures_Complete")

# Compile each file
for file in "${files[@]}"; do
    echo "Compiling $file.tex..."
    
    # Run pdflatex twice for proper cross-references
    pdflatex -output-directory=output "$file.tex" > /dev/null 2>&1
    pdflatex -output-directory=output "$file.tex" > /dev/null 2>&1
    
    if [ $? -eq 0 ]; then
        echo "✓ Successfully compiled $file.pdf"
    else
        echo "✗ Failed to compile $file.tex"
    fi
done

echo ""
echo "Compilation complete! PDFs are in the 'output' directory."
echo ""
echo "Generated files:"
ls -la output/*.pdf 2>/dev/null || echo "No PDF files found. Check for compilation errors."

# Clean up auxiliary files
echo ""
echo "Cleaning up auxiliary files..."
rm -f output/*.aux output/*.log output/*.toc output/*.out

echo "Done!"