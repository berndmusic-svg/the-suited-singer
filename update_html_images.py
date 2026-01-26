#!/usr/bin/env python3
"""Update HTML files to use AVIF images instead of JPG/PNG."""

import os
import re
from pathlib import Path

def update_html_files():
    """Update all HTML files to reference AVIF images."""
    
    html_files = []
    for root, dirs, files in os.walk("."):
        # Skip .venv and node_modules
        dirs[:] = [d for d in dirs if d not in ['.venv', 'node_modules', '.git']]
        for file in files:
            if file.endswith('.html'):
                html_files.append(os.path.join(root, file))
    
    print(f"Found {len(html_files)} HTML files")
    print("=" * 70)
    
    total_replacements = 0
    
    for html_file in sorted(html_files):
        # Try different encodings
        content = None
        for encoding in ['utf-8-sig', 'utf-8', 'utf-16', 'latin-1']:
            try:
                with open(html_file, 'r', encoding=encoding) as f:
                    content = f.read()
                break
            except UnicodeDecodeError:
                continue
        
        if content is None:
            print(f"✗ {html_file}: Could not decode")
            continue
        
        original_content = content
        
        # Replace .jpg with .avif (case-insensitive)
        content = re.sub(r'\.jpg\b', '.avif', content, flags=re.IGNORECASE)
        content = re.sub(r'\.jpeg\b', '.avif', content, flags=re.IGNORECASE)
        
        # Replace .png with .avif (but not in URLs that might be external)
        # Only replace if it's in src, href, or data attributes
        content = re.sub(r'(src|href|data)="([^"]*?)\.png\b', r'\1="\2.avif', content, flags=re.IGNORECASE)
        
        if content != original_content:
            replacements = 0
            # Count replacements
            replacements += len(re.findall(r'\.avif', content)) - len(re.findall(r'\.avif', original_content))
            
            with open(html_file, 'w', encoding='utf-8') as f:
                f.write(content)
            
            print(f"✓ {html_file}: Updated")
            total_replacements += replacements
        else:
            print(f"⊘ {html_file}: No changes")
    
    print("=" * 70)
    print(f"\nTotal replacements: {total_replacements}")

if __name__ == "__main__":
    update_html_files()
