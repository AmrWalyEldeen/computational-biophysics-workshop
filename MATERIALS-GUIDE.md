# Adding Workshop Materials

The website is designed so that materials can be added day by day without redesigning any page.

## 1. Put the file in the correct folder

Recommended structure:

```text
assets/materials/
├── opening-day/
├── day-1/
├── day-2/
├── day-3/
└── ...
```

Use short lowercase filenames without spaces, for example:

```text
assets/materials/day-1/protein-structure-slides.pdf
assets/materials/day-1/pymol-practice-files.zip
assets/materials/day-1/linux-commands.pdf
```

## 2. Add the resource metadata

Open:

```text
assets/js/program-materials-data.js
```

Find the `resources` array and add an object like this:

```js
{
  "id": "day1-protein-slides",
  "dayId": "day-1",
  "type": "slides",
  "title": {
    "en": "Protein Structure and Function",
    "ar": "بنية البروتين ووظيفته"
  },
  "presenter": {
    "en": "Professor Name",
    "ar": "اسم المحاضر"
  },
  "description": {
    "en": "Lecture slides and practical notes.",
    "ar": "شرائح المحاضرة والملاحظات العملية."
  },
  "url": "assets/materials/day-1/protein-structure-slides.pdf",
  "downloadUrl": "assets/materials/day-1/protein-structure-slides.pdf",
  "thumbnail": "assets/materials/thumbnails/day1-protein.webp",
  "meta": {
    "en": "PDF slides",
    "ar": "شرائح PDF"
  }
}
```

Supported `type` values:

- `slides` - presentation PDFs with an optional original download
- `video` - YouTube videos
- `drive` - Google Drive folders or other shared folders
- `notebook` - Google Colab notebooks
- `file` - practical datasets, scripts, structure files, and ZIP bundles

## 3. Link the resource to the correct day

Use one of these `dayId` values:

```text
opening
day-1
day-2
day-3
day-4
day-5
day-6
day-7
day-8
day-9
day-10
day-11
```

The day selector, material count, search, and filters update automatically.

## 4. Add a YouTube video

Use the video ID in the privacy-enhanced embed address:

```js
"url": "https://youtu.be/VIDEO_ID",
"embed": "https://www.youtube-nocookie.com/embed/VIDEO_ID"
```

## 5. Upload the update to GitHub

Upload the changed files and folders, then commit. GitHub Pages will redeploy automatically.

## Current examples

Training Day 1 is stored in:

```text
assets/materials/day-1/
assets/training-day-1/
```

Training Day 2 is stored in:

```text
assets/materials/day-2/
assets/training-day-2/
```

Training Day 3 is stored in:

```text
assets/materials/day-3/
assets/training-day-3/
```

The current structure demonstrates how to combine local PDFs, original PowerPoint files, Google Drive folders, Google Colab notebooks, practical molecule files, thumbnails, and day-specific activity photographs under one workshop date.

## Training Day 4 example - V3.2.0

Training Day 4 demonstrates the recommended participant-first structure:

- shared Google Drive folder
- Google Colab notebook
- browser-viewable PDF plus original PowerPoint
- practical ZIP package
- optional individual practical-file downloads

Day 4 assets are stored in `assets/materials/day-4/`, while preview images are stored in `assets/materials/thumbnails/`.


## Training Day 5 example - V3.3.0

Day 5 assets are stored in `assets/materials/day-5/`, while preview images are stored in `assets/materials/thumbnails/`. The Day 5 library includes one shared Drive folder, three unique PDF resources, and one combined ZIP download. The site intentionally removes exact duplicate uploads from the participant-facing list.
