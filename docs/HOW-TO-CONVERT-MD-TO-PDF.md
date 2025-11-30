# How to Convert Markdown to PDF

## Prerequisites

Install required tools:

```bash
# Install pandoc
brew install pandoc

# Install BasicTeX (LaTeX engine for PDF generation)
brew install basictex
```

## Convert Single File

```bash
# Basic conversion
pandoc input.md -o output.pdf --pdf-engine=/usr/local/texlive/2025basic/bin/universal-darwin/pdflatex -V geometry:margin=1in

# Example: Convert MSA
pandoc MSA-BBCigars.md -o MSA-BBCigars.pdf --pdf-engine=/usr/local/texlive/2025basic/bin/universal-darwin/pdflatex -V geometry:margin=1in
```

## Convert Multiple Files

```bash
# Convert all markdown files in contracts directory
cd contracts
pandoc MSA-BBCigars.md -o MSA-BBCigars.pdf --pdf-engine=/usr/local/texlive/2025basic/bin/universal-darwin/pdflatex -V geometry:margin=1in
pandoc SOW-RenaissanceAtlanta-Phase1.md -o SOW-RenaissanceAtlanta-Phase1.pdf --pdf-engine=/usr/local/texlive/2025basic/bin/universal-darwin/pdflatex -V geometry:margin=1in
```

## Command Breakdown

- `pandoc` - Document converter
- `input.md` - Source markdown file
- `-o output.pdf` - Output PDF file
- `--pdf-engine=/usr/local/texlive/2025basic/bin/universal-darwin/pdflatex` - Use pdflatex from BasicTeX
- `-V geometry:margin=1in` - Set 1-inch margins

## Alternative: Convert to HTML First

If PDF conversion fails, convert to HTML and print from browser:

```bash
# Convert to HTML with styling
pandoc input.md -o output.html -s --css=https://cdn.jsdelivr.net/npm/water.css@2/out/water.css

# Open in browser
open output.html

# Then: ⌘+P → Save as PDF
```

## Troubleshooting

### Error: "pdflatex not found"

Find pdflatex location:
```bash
which pdflatex
# or
find /Library/TeX /usr/local/texlive -name pdflatex 2>/dev/null | head -1
```

Use the full path in `--pdf-engine` flag.

### Error: "Unsupported engine"

Try alternative engines:
```bash
# Try weasyprint
pandoc input.md -o output.pdf --pdf-engine=weasyprint

# Try wkhtmltopdf
pandoc input.md -o output.pdf --pdf-engine=wkhtmltopdf
```

## Tips for DocuSign

Use simple signature lines in markdown:

```markdown
Signature: _________________________________ Date: _____________
```

Avoid complex formatting like asterisks or special characters in signature blocks.
