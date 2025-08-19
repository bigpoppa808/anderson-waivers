# LaTeX Build Instructions

## Overview
This directory contains LaTeX files to build professional PDF versions of the crash notes. The setup uses the `markdown` package to directly include the Markdown crash notes, keeping them as the single source of truth.

## Files Structure
```
latex/
├── CrashNotes_All.tex          # Master file - all three courses
└── README.md                    # This file

Each course folder also contains:
├── crash_notes.md              # Source markdown (single source of truth)
└── crash_notes.tex             # LaTeX wrapper for individual course
```

## Build Options

### Option 1: Local LaTeX Installation
Requires: LaTeX distribution (TeX Live, MiKTeX, or MacTeX) with `markdown` package

#### Build All Courses Together
```bash
cd latex
pdflatex CrashNotes_All.tex
pdflatex CrashNotes_All.tex  # Run twice for TOC
```

#### Build Individual Course
```bash
cd MGMTEX_405_Economic_Analysis/1_Reading_Materials
pdflatex crash_notes.tex

cd MGMTEX_403_Financial_Accounting/1_Reading_Materials
pdflatex crash_notes.tex

cd MGMTEX_411_Marketing_Management/1_Reading_Materials
pdflatex crash_notes.tex
```

### Option 2: Overleaf (Online)
1. Create new Overleaf project
2. Upload entire repository (maintaining folder structure)
3. Set main document to `latex/CrashNotes_All.tex`
4. Compile (Overleaf has markdown package pre-installed)

### Option 3: VS Code with LaTeX Workshop
1. Install "LaTeX Workshop" extension
2. Open any `.tex` file
3. Press Ctrl+Alt+B (Cmd+Option+B on Mac) to build
4. View PDF with Ctrl+Alt+V (Cmd+Option+V on Mac)

### Option 4: Pandoc Fallback (if markdown package unavailable)
If the LaTeX `markdown` package isn't available, use Pandoc:

```bash
# Individual files
pandoc MGMTEX_405_Economic_Analysis/1_Reading_Materials/crash_notes.md \
  -o MGMTEX_405_Economic_Analysis/1_Reading_Materials/crash_notes.pdf \
  --pdf-engine=xelatex \
  -V geometry:margin=1in \
  -V fontsize=11pt \
  --toc

# Combine all three
pandoc \
  MGMTEX_405_Economic_Analysis/1_Reading_Materials/crash_notes.md \
  MGMTEX_403_Financial_Accounting/1_Reading_Materials/crash_notes.md \
  MGMTEX_411_Marketing_Management/1_Reading_Materials/crash_notes.md \
  -o latex/CrashNotes_All.pdf \
  --pdf-engine=xelatex \
  -V geometry:margin=0.75in \
  -V fontsize=11pt \
  --toc \
  --metadata title="UCLA Anderson EMBA Waiver Exam Crash Notes"
```

## Troubleshooting

### Missing markdown package
```bash
# TeX Live
tlmgr install markdown

# MiKTeX
# Use MiKTeX Console to install markdown package
```

### Compilation errors
1. Check that all paths in `\markdownInput{}` are correct relative paths
2. Ensure markdown files exist and are readable
3. Try compiling twice (some features need two passes)

### Special characters in markdown
The markdown package handles most special characters, but if issues:
- Use `\$` instead of `$` for dollar signs in text
- Use `\_` instead of `_` for underscores in text
- Math mode works normally between `$...$`

## Customization

### Change margins
Edit `\usepackage[margin=0.75in]{geometry}` in the `.tex` files

### Change font size
Edit `\documentclass[11pt]{article}` to use 10pt or 12pt

### Add page numbers
Already included via `fancyhdr` package in master file

### Add your name
Edit the `\author{}` line in the `.tex` files

## Output Files
After successful compilation:
- `CrashNotes_All.pdf` - Complete study guide (all three courses)
- `crash_notes.pdf` - Individual course PDFs in each folder

## Benefits of This Setup
1. **Single source of truth**: Edit markdown files, PDFs update automatically
2. **Professional formatting**: LaTeX provides superior typography
3. **Portable**: PDFs work on any device
4. **Printable**: Optimized for printing with proper margins
5. **Searchable**: Full text search in PDF readers

## Quick Start (Fastest Path)
```bash
# If you have LaTeX installed
cd latex && pdflatex CrashNotes_All.tex && pdflatex CrashNotes_All.tex

# If you have Pandoc but not LaTeX
cd anderson-waivers
pandoc */1_Reading_Materials/crash_notes.md -o AllNotes.pdf --toc
```

## Support
- LaTeX installation: https://www.latex-project.org/get/
- Pandoc installation: https://pandoc.org/installing.html
- Overleaf (free account): https://www.overleaf.com