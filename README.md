# Computational Biophysics Workshop Website

A complete static website prepared for GitHub Pages. It uses plain HTML, CSS, and JavaScript, so no build process or server-side code is required.

## Included

- Responsive desktop, tablet, and mobile layouts
- English/Arabic language switch with RTL support
- Workshop overview, institutional patronage, schedule, and eight curriculum modules
- Eleven presenter profiles with lecture information, email links, details modal, and official posters
- Poster gallery and full-screen viewer
- Registration section with a QR code generated from the supplied Google Form URL
- Google Maps button and location QR code
- Animated scientific visualization, sticky navigation, filters, accessibility improvements, and metadata

## Deploy on GitHub Pages

1. Create a new GitHub repository.
2. Upload **all files and folders from this package to the repository root**.
3. Open the repository **Settings**.
4. Select **Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select the `main` branch and the `/ (root)` folder, then save.
7. GitHub will display the public website URL after deployment.

## Main files

- `index.html` — website structure and section content
- `assets/css/styles.css` — complete visual design and responsive rules
- `assets/js/data.js` — presenters, lectures, patronage, curriculum, links, and gallery data
- `assets/js/main.js` — filtering, bilingual mode, modals, gallery, animation, and navigation
- `assets/images/` — logos and QR codes
- `assets/portraits/` — optimized presenter portraits
- `assets/posters/` — optimized workshop posters

## Update important links

Open `assets/js/data.js` and edit:

```js
registrationUrl: "...",
mapUrl: "...",
contactEmail: "..."
```

The current registration QR code was generated from:

`https://docs.google.com/forms/d/1mYoE2XpouHgw8qds5VKPIsIeDZUCFlF3gbZAODT4BEw/viewform?edit_requested=true`

## Replace a logo

Replace the relevant file in `assets/images/` while keeping the same filename:

- `cairo-university-logo.jpg`
- `faculty-logo.jpg`
- `biophysics-logo.png`
- `centennial-logo.jpg`
- `workshop-logo.png`

Keeping the same filename means no code changes are required.

## Local preview

From the project folder, run:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000` in a browser.

## Adaptive device rendering

Version 3 classifies the live viewport as `mobile`, `tablet`, or `desktop` in `assets/js/device.js`. The result is written to the `<html>` element as `data-device`, together with `data-orientation` and `data-input`. The stylesheet uses these values to switch layouts without user-agent sniffing. Media-query fallbacks remain active when JavaScript is unavailable.


## Workshop video

The responsive video player uses `assets/video/workshop-introduction.mp4` and `assets/video/workshop-video-poster.jpg`. Replace both files with the same filenames to update the video without changing HTML.


## Current workshop status

- Registration: closed
- Workshop: in progress
- Day 1: completed
- Attendance form: https://forms.gle/hbZJExKjhhXJ5MBY7
- Day 1 gallery: six photos displayed and reshuffled every 10 seconds
- Optional Day 1 program PDF path: `assets/documents/day-1-program.pdf`
