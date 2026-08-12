# Computational Biophysics Workshop Website - V3.2.0

A complete static website prepared for GitHub Pages. It uses plain HTML, CSS, and JavaScript, so no build process or server-side code is required.

## V3.2.0 priority

The learning materials are now positioned **above the program** in the website and Training Day 4 is selected by default. This makes the latest participant resources immediately accessible before the schedule/calendar.

## Training Day 4 - 12 August 2026

Training Day 4 is marked completed and includes:

- Training Day 4 shared Google Drive folder
- MultiTargetDocking V17.0 Google Colab notebook
- MultiTargetDocking V17.0 notebook guide: PowerPoint + browser-viewable PDF
- Molecular Docking - From Theory to Practice: PowerPoint + browser-viewable PDF
- Practical docking ZIP package
- Individual practical files: PDB, SMILES, Vina configuration, HTML docking game, Python helper, BAT log summarizer, and Dimorphite-DL reference link
- Ten optimized Training Day 4 photographs

## Website behavior

- Materials appear before the interactive program calendar.
- Training Day 4 opens by default in both Materials and Program.
- The hero and workshop update link directly to Training Day 4 materials.
- The workshop gallery includes Opening Day and Training Days 1-4.
- The selected gallery displays six photographs and reshuffles every 10 seconds.
- English/Arabic switching and RTL support remain available.

## Deploy on GitHub Pages

1. Create or open the GitHub repository.
2. Upload **all files and folders from this package to the repository root**.
3. Open **Settings > Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`, then save.

## Important Day 4 files

```text
assets/materials/day-4/
assets/training-day-4/
assets/materials/thumbnails/multitarget-docking-v17.webp
assets/materials/thumbnails/molecular-docking-theory-practice.webp
```

## Current workshop status

- Registration: closed
- Opening Day: completed on 3 August 2026
- Training Day 1: completed on 5 August 2026
- Training Day 2: completed on 8 August 2026
- Training Day 3: completed on 10 August 2026
- Training Day 4: completed on 12 August 2026
- Next scheduled session: Training Day 5 on 15 August 2026
- Attendance form: `https://forms.gle/hbZJExKjhhXJ5MBY7`

## Local preview

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.
