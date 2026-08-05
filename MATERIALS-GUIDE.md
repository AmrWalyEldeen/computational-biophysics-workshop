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

- `slides` - PDFs, documents, datasets, scripts, ZIP files
- `video` - YouTube videos
- `drive` - Google Drive folders or other shared folders

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

## Current Training Day 1 example

Training Day 1 is stored in:

```text
assets/materials/day-1/
```

It demonstrates how to combine local PDFs, a Google Drive folder, and a YouTube video under one workshop date. Photographs are stored separately in:

```text
assets/training-day-1/
```
