# How to publish Responsive Fix v2.0 on GitHub Pages

## Fast update (recommended)

1. Open the repository: `AmrWalyEldeen/computational-biophysics-workshop`.
2. Select **Add file → Upload files**.
3. Extract `cbw-responsive-fix-v2.zip` on your computer.
4. Drag the extracted `index.html` file and the extracted `assets` folder into the GitHub upload page.
5. GitHub will show that existing files will be replaced.
6. Use the commit message: `Fix responsive layout and image aspect ratios`.
7. Click **Commit changes**.
8. Wait 1–3 minutes, open the live website, and press **Ctrl + F5**.

Do not upload the ZIP file itself. Upload the files and folders inside it.

## Files changed

- `index.html` — stylesheet cache version updated.
- `assets/css/styles.css` — responsive and aspect-ratio corrections.

## Main corrections

- Hero title no longer enters the workshop-logo column.
- The hero changes to a single-column layout on smaller laptops/tablets before collision can occur.
- Registration and map QR codes remain square.
- Images respect their natural proportions using `height: auto`.
- Desktop, tablet, and mobile breakpoints were refined.
