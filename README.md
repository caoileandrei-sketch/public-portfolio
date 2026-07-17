# Portfolio Site

A static portfolio site — no build step, no framework. Just `index.html`, `style.css`, and `script.js`.

## Customize your content

All the text on the page (name, bio, experience, skills, projects, certifications, contact links) lives in **one place**: the `CONTENT` object at the top of `script.js`. Edit that object — you don't need to touch the HTML or CSS.

A few things to change by hand in `index.html`:
- The `<title>` and `<meta name="description">` tags at the top
- The name and role text inside `<header class="hero">`
- The "About" paragraphs inside `<section id="about">`
- The CLI card values (years of experience, certifications, location, availability)
- Social links in the `#contact` section (email, LinkedIn, GitHub)

Add your résumé as `assets/resume.pdf` — the download buttons already link to it.

## Run it locally

No install needed. From this folder:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Deploy to GitHub Pages

1. **Create a repository** on GitHub (e.g. `your-username.github.io` for a root domain site, or any name like `portfolio` for a project site).

2. **Push this folder to it:**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to your repo on GitHub → **Settings** → **Pages**
   - Under "Build and deployment", set **Source** to `Deploy from a branch`
   - Set **Branch** to `main` and folder to `/ (root)`
   - Click **Save**

4. **Wait a minute**, then your site will be live at:
   - `https://YOUR-USERNAME.github.io/YOUR-REPO/` (project repo), or
   - `https://YOUR-USERNAME.github.io/` (if your repo is named `YOUR-USERNAME.github.io`)

GitHub shows the live URL at the top of the Pages settings once it's deployed.

## File structure

```
.
├── index.html      # Page structure/markup
├── style.css       # All design tokens and styles
├── script.js       # Content (CONTENT object) + rendering + scroll animation
├── assets/
│   └── resume.pdf  # Add your résumé here
└── README.md
```
