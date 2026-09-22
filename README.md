# Personal Portfolio Website

**Web Development Lab — Experiment**
Developing a Personal Portfolio Website Using GitHub Pages

**Author:** Jai Chavan
**Repository:** https://github.com/JaiChavan040906/JaiChavan040906.github.io
**Live website:** https://JaiChavan040906.github.io

---

## Problem Statement

Create a personal portfolio website using GitHub Pages that showcases skills,
projects, education, experience, certifications and resume. The project must
demonstrate the use of Git and GitHub for version control, show a meaningful
commit history, and deploy the completed static website using GitHub Pages.

## Objective

- Build a professional, responsive personal portfolio using only HTML, CSS and
  JavaScript.
- Track the work in Git with a clear, incremental commit history — one commit
  per development stage.
- Deploy the finished site publicly through GitHub Pages.

## Features

- Single-page layout with sticky navigation and smooth in-page scrolling.
- Responsive from 320px phones up to large desktop screens.
- Mobile navigation panel with an accessible toggle button.
- Active navigation link that tracks the section currently on screen.
- Categorised skills, project cards, and timelines for education and experience.
- Resume that can be viewed in the browser or downloaded.
- Contact details using `mailto:` and `tel:` links — no form, because a static
  site has no server to send one.
- Subtle scroll-reveal animation that is switched off for visitors who have
  asked their system for reduced motion.
- No frameworks, no build step, no dependencies.

## Technologies Used

| Technology | Purpose |
| --- | --- |
| HTML5 | Semantic page structure and content |
| CSS3 | Responsive layout, custom properties, grid and flexbox |
| JavaScript (vanilla) | Mobile menu, sticky header, active link, scroll reveal |
| Git | Local version control |
| GitHub | Remote repository hosting |
| GitHub Pages | Static site deployment |

The only external resource is the Inter font from Google Fonts, which has a
full system-font fallback stack if it fails to load.

## Portfolio Sections

1. Navigation
2. Home / Hero
3. About Me
4. Education
5. Skills
6. Experience and Student Leadership
7. Projects
8. Certifications and Achievements
9. Resume
10. Contact and Social Links
11. Footer

## Project Structure

```
WDL_Portfolio/
├── index.html              Single-page portfolio
├── css/
│   └── style.css           Design tokens, layout, components, responsive rules
├── js/
│   └── script.js           Mobile menu, sticky header, active nav link, reveal
├── assets/
│   ├── images/
│   │   └── jai-chavan.jpg  Profile photograph
│   └── documents/
│       └── Jai_Chavan_Resume.pdf
├── .nojekyll               Tells GitHub Pages to serve the files as-is
├── .gitattributes          Normalises line endings to LF
├── .gitignore              Files Git should ignore
└── README.md
```

`css/style.css` is organised into numbered sections, beginning with a design
token block where every colour, spacing step and font size is defined once.

## Local Setup

No installation or build step is required.

```powershell
git clone https://github.com/JaiChavan040906/JaiChavan040906.github.io.git
cd JaiChavan040906.github.io
```

Then either open `index.html` directly in a browser, or serve it locally so
that paths behave exactly as they will once deployed:

```powershell
python -m http.server 8000
```

Then visit `http://localhost:8000`. The VS Code **Live Server** extension works
equally well and reloads automatically while editing.

## Git and GitHub Workflow

The site was built in nine stages. Each stage produced one meaningful commit,
so the history reads as a record of how the project was developed rather than a
single bulk upload.

| # | Commit message |
| --- | --- |
| 1 | Initialize portfolio structure and documentation |
| 2 | Add home about and education sections |
| 3 | Add categorized technical skills section |
| 4 | Add experience and CSI-VIT leadership roles |
| 5 | Add project showcase including OceanEmbed |
| 6 | Add certifications resume and contact sections |
| 7 | Improve responsive design and accessibility |
| 8 | Fix portfolio links assets and responsive layout |
| 9 | Prepare portfolio for GitHub Pages deployment |

### Important Git commands used

**One-time repository setup**

```powershell
git init                                  # create the local repository
git branch -M main                        # name the default branch main
git remote add origin https://github.com/JaiChavan040906/JaiChavan040906.github.io.git
git remote -v                             # confirm the remote is correct
```

**The cycle repeated at every stage**

```powershell
git status                                # see which files changed
git diff --stat                           # summarise the size of the changes
git diff                                  # review the changes line by line
git add .                                 # stage the changes
git status                                # confirm what will be committed
git commit -m "Message describing the stage"
git push                                  # upload to GitHub
git log --oneline -5                      # check the recent history
```

**The first push only**, which also sets the upstream branch:

```powershell
git push -u origin main
```

After this, `git push` alone is enough.

**Inspecting history**

```powershell
git log --oneline                         # compact list of all commits
git log --stat                            # commits with the files each touched
git show <commit-hash>                    # the full contents of one commit
```

## GitHub Pages Deployment

Because the repository is named `JaiChavan040906.github.io`, it is published as
a **user site** and served from the root of the domain.

1. Open the repository on GitHub.
2. Go to **Settings**.
3. Select **Pages** in the left sidebar.
4. Under **Build and deployment → Source**, choose **Deploy from a branch**.
5. Set the branch to **main** and the folder to **/ (root)**.
6. Click **Save**.
7. Wait for the deployment to finish. Progress is visible under the
   **Actions** tab.
8. Open https://JaiChavan040906.github.io to verify the live site.

The `.nojekyll` file is included so GitHub Pages serves the files directly
instead of processing them through Jekyll.

### Points that matter for a static deployment

- The homepage is `index.html` at the repository root.
- All asset paths are relative (`css/style.css`, `assets/images/...`), so they
  resolve correctly once deployed.
- File name casing matches the references exactly. GitHub Pages is
  case-sensitive even though Windows is not.
- There is no backend, no database and no API key anywhere in the repository.

## Testing Performed

- Rendered and inspected at 1440, 1280, 1024, 980, 820, 768, 640, 500, 414,
  360 and 320px. No horizontal overflow at any width.
- All internal anchor links verified against existing element IDs.
- All external links checked and returning a successful response.
- Colour contrast checked against WCAG AA; all text pairs pass.
- Heading order verified: exactly one `<h1>` and no skipped levels.
- Verified with JavaScript disabled and with reduced motion enabled — the
  content remains fully visible in both cases.
- Browser console checked for errors at every breakpoint.

## Author

**Jai Chavan**
B.Tech Computer Engineering, Vidyalankar Institute of Technology, Mumbai

- GitHub: https://github.com/JaiChavan040906
- LinkedIn: https://www.linkedin.com/in/jaichvn

## Conclusion

This experiment produced a complete, responsive personal portfolio built with
nothing but HTML, CSS and JavaScript, and deployed as a static site through
GitHub Pages. Working in stages kept the Git history meaningful: each commit
corresponds to one clear piece of development, which makes the project easier
to review and easier to explain. The exercise covered the practical Git
workflow of staging, reviewing, committing and pushing changes, alongside the
front-end work of building an accessible and responsive layout.
