# Render Log — 3D Visualization Portfolio

A static, no-build portfolio site (plain HTML/CSS/JS) showcasing 8 3D product
visualization case studies.

## Project structure

```
.
├── index.html      # all page content and markup
├── styles.css      # all styling
├── script.js       # lightbox + scroll-reveal behavior
├── images/         # all render images (32 files, ~1.5 MB total)
├── vercel.json     # Vercel static-site config
└── .gitignore
```

No build step, no dependencies, no `package.json` needed — it's just static
files, so any static host works.

## 1. Push this folder to GitHub

From inside this folder:

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

(Create the empty repo on GitHub first at github.com/new — don't initialize
it with a README there, to avoid a merge conflict.)

## 2. Deploy — option A: GitHub Pages

1. On GitHub, go to your repo → **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to `Deploy from a branch`.
3. Pick branch `main`, folder `/ (root)`, then **Save**.
4. Wait a minute, then your site is live at:
   `https://<your-username>.github.io/<your-repo>/`

## 3. Deploy — option B: Vercel

**Via the Vercel dashboard (easiest):**
1. Go to vercel.com → **Add New… → Project**.
2. Import the GitHub repo you just pushed.
3. Framework preset: choose **Other** (it's a static site — no build command
   needed, leave Build Command and Output Directory empty/default).
4. Click **Deploy**. You'll get a live `*.vercel.app` URL in about a minute.

**Via the Vercel CLI:**
```bash
npm i -g vercel
cd <this-folder>
vercel        # first deploy, follow the prompts
vercel --prod # promote to production
```

## Editing content later

- Text/copy/layout → `index.html`
- Colors/type/spacing → `styles.css`
- Lightbox + scroll animation → `script.js`
- Swap or add photos → drop files in `images/` and reference them as
  `images/your-file.jpg` in `index.html`

## Notes

- Update the placeholder contact email in `index.html` (search for
  `studio@example.com`) before sharing the live link.
- Fonts (Fraunces, Space Grotesk, IBM Plex Mono) load from Google Fonts via
  `<link>` tags in `index.html` — an internet connection is required for
  those to render; the page still works without it, just with fallback fonts.
