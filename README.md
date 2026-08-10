# Computational Biophysics Workshop Website - V3.1.3

A complete static website prepared for GitHub Pages. It uses plain HTML, CSS, and JavaScript, so no build process or server-side code is required.

## Included

- Responsive desktop, tablet, and mobile layouts
- English/Arabic language switch with RTL support
- Interactive August 2026 program calendar
- Detailed daily agenda with modules, lecturers, activity type, time, and delivery mode
- Materials library organized by workshop day and resource type
- Search and filters for slides, videos, shared folders, Colab notebooks, and practical files
- Opening Day learning materials and photographs
- Training Day 1 learning materials, video, Drive folder, and photographs
- Training Day 2 Protein Modeling materials, Drive folder, and photographs
- Training Day 3 small-molecule modeling materials, Molecular Optimizer workflow, Colab notebook, Drive folder, molecular data files, and photographs
- Multi-day gallery selector with six images displayed and reshuffled every 10 seconds
- Presenter profiles, official posters, location, and institutional information

## Deploy on GitHub Pages

1. Create or open the GitHub repository.
2. Upload **all files and folders from this package to the repository root**.
3. Open **Settings > Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`, then save.

## Main files

- `index.html` - website sections and structure
- `assets/css/styles.css` - visual design and responsive rules
- `assets/js/data.js` - presenters, links, and activity galleries
- `assets/js/main.js` - language mode, navigation, gallery shuffle, and dialogs
- `assets/js/program-materials-data.js` - complete program and materials metadata
- `assets/js/program-materials.js` - calendar and materials-library behavior
- `assets/materials/opening-day/` - Opening Day presentation files
- `assets/materials/day-1/` - Training Day 1 presentation files
- `assets/materials/day-2/` - Training Day 2 presentation files
- `assets/materials/day-3/` - Training Day 3 slides and practical molecule files
- `assets/training-day-1/` - Training Day 1 photographs
- `assets/training-day-2/` - Training Day 2 photographs
- `assets/training-day-3/` - Training Day 3 photographs
- `MATERIALS-GUIDE.md` - instructions for adding future materials

## Current workshop status

- Registration: closed
- Opening Day: completed on 3 August 2026
- Training Day 1: completed on 5 August 2026
- Training Day 2: completed on 8 August 2026
- Training Day 3: completed on 10 August 2026
- Next scheduled session: Training Day 4 on 12 August 2026
- Attendance form: `https://forms.gle/hbZJExKjhhXJ5MBY7`

## Local preview

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.
