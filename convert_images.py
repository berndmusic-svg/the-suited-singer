#!/usr/bin/env python3
"""Convert JPG and PNG images to AVIF format."""

import os
from pathlib import Path
from PIL import Image

def convert_to_avif(input_path, output_path, quality=80):
    """Convert image to AVIF format."""
    try:
        with Image.open(input_path) as img:
            # Convert RGBA to RGB if necessary for AVIF
            if img.mode in ('RGBA', 'LA', 'P'):
                background = Image.new('RGB', img.size, (255, 255, 255))
                background.paste(img, mask=img.split()[-1] if img.mode == 'RGBA' else None)
                img = background
            
            img.save(output_path, 'AVIF', quality=quality)
        
        input_size = os.path.getsize(input_path)
        output_size = os.path.getsize(output_path)
        reduction = ((input_size - output_size) / input_size) * 100
        
        print(f"✓ {input_path.name}: {input_size/1024:.1f} KB → {output_size/1024:.1f} KB ({reduction:.1f}% reduction)")
        return True
    except Exception as e:
        print(f"✗ {input_path.name}: {str(e)}")
        return False

def main():
    images_dir = Path("images")
    
    if not images_dir.exists():
        print(f"Error: {images_dir} directory not found")
        return
    
    # Find all JPG and PNG files
    jpg_files = list(images_dir.glob("*.jpg")) + list(images_dir.glob("*.jpeg")) + list(images_dir.glob("*.JPG"))
    png_files = list(images_dir.glob("*.png"))
    
    all_files = jpg_files + png_files
    
    if not all_files:
        print("No JPG or PNG files found")
        return
    
    print(f"Found {len(all_files)} images to convert ({len(jpg_files)} JPG, {len(png_files)} PNG)")
    print("=" * 70)
    
    converted = 0
    skipped = 0
    failed = 0
    
    for input_file in sorted(all_files):
        output_file = input_file.with_suffix('.avif')
        
        # Skip if AVIF already exists
        if output_file.exists():
            print(f"⊘ {input_file.name}: AVIF already exists")
            skipped += 1
            continue
        
        if convert_to_avif(input_file, output_file):
            converted += 1
        else:
            failed += 1
    
    print("=" * 70)
    print(f"\nSummary: {converted} converted, {skipped} skipped, {failed} failed")

if __name__ == "__main__":
    main()
